/* Digital Universe 9D — hyper-cinematic multi-layer WebGL experience
   Nebula sky dome · volumetric dust · liquid glass orb · wire lattice
   gold + accent rings · drifting crystals · near/mid/far star shells
   Cinematic camera: scroll-driven 360° orbit + dolly + subtle roll
   360° explore mode with inertia, pinch/wheel zoom, keyboard
   Falls back silently if WebGL or CDN unavailable.
*/
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var TAU = Math.PI * 2;
  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function isBn() { return document.documentElement.lang === "bn"; }
  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  /* Device class: phone / low-end get a lighter scene, same look */
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
  var saveData = !!conn.saveData;
  var slowNet = /(^|-)2g$/.test(conn.effectiveType || "");
  var cores = navigator.hardwareConcurrency || 4;
  var mem = navigator.deviceMemory || 4;
  var isPhone = window.matchMedia("(max-width: 700px)").matches ||
    /Android|iPhone|iPod|Mobile/i.test(navigator.userAgent || "");
  /* Aggressive: phones and mid-range devices get light scene so first paint is fast */
  var lowEnd = saveData || slowNet || cores <= 6 || mem <= 4 || isPhone;
  var veryLow = saveData || slowNet || isPhone || cores <= 4 || mem <= 2;

  /* ------------------------------------------------------------------
     1. Ambience: aurora, grain, vignette, scroll bar, cursor spotlight
  ------------------------------------------------------------------ */
  function ambience() {
    /* Skip expensive CSS layers on weak phones — look stays clean, less jank */
    if (!veryLow && !$(".aurora")) {
      var a = document.createElement("div");
      a.className = "aurora";
      a.setAttribute("aria-hidden", "true");
      a.innerHTML = "<i></i><i></i><i></i><i></i>";
      document.body.insertBefore(a, document.body.firstChild);
    }
    if (!veryLow && !$(".grain")) {
      var g = document.createElement("div");
      g.className = "grain";
      g.setAttribute("aria-hidden", "true");
      document.body.appendChild(g);
    }
    if (!$(".vignette")) {
      var v = document.createElement("div");
      v.className = "vignette";
      v.setAttribute("aria-hidden", "true");
      document.body.appendChild(v);
    }
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    var header = $(".site-header");
    var heroContent = $(".hero-content");
    var ticking = false;
    function upd() {
      var y = window.scrollY;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0;
      bar.style.transform = "scaleX(" + p + ")";
      if (header) header.classList.toggle("is-scrolled", y > 40);
      if (heroContent && !reduce) {
        var py = Math.min(y * 0.09, 48);
        heroContent.style.transform = "translate3d(0," + py + "px,0)";
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(upd); }
    }, { passive: true });
    upd();

    if (fine && !reduce) {
      var s = document.createElement("div");
      s.className = "spotlight";
      s.setAttribute("aria-hidden", "true");
      document.body.insertBefore(s, document.body.firstChild);
      var tx = window.innerWidth / 2, ty = window.innerHeight * 0.3, cx = tx, cy = ty;
      window.addEventListener("pointermove", function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
      var sRun = false;
      function sLoop() {
        cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
        s.style.setProperty("--sx", cx + "px");
        s.style.setProperty("--sy", cy + "px");
        if (Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4) requestAnimationFrame(sLoop);
        else sRun = false;
      }
      window.addEventListener("pointermove", function () {
        if (!sRun) { sRun = true; requestAnimationFrame(sLoop); }
      }, { passive: true });
    }
  }

  /* ------------------------------------------------------------------
     2. Gentle 3D tilt for cards
  ------------------------------------------------------------------ */
  function tilt() {
    if (!fine || reduce) return;
    $$(".vision-cell, .yt-card").forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.transform = "perspective(1100px) rotateX(" + ((0.5 - y) * 7) + "deg) rotateY(" + ((x - 0.5) * 7) + "deg) translateY(-5px)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  /* ------------------------------------------------------------------
     3. Shaders — higher fidelity nebula + liquid glass
  ------------------------------------------------------------------ */
  function loadThree(cb) {
    if (window.THREE) return cb();
    if (saveData || slowNet) return; /* silent fallback — site still works */
    if (document.hidden) {
      document.addEventListener("visibilitychange", function once() {
        if (!document.hidden) { document.removeEventListener("visibilitychange", once); loadThree(cb); }
      });
      return;
    }
    var s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.async = true;
    s.defer = true;
    s.onload = function () { requestAnimationFrame(function () { cb(); }); };
    s.onerror = function () {};
    document.head.appendChild(s);
  }

  var ORB_VERT = [
    "uniform float uTime; uniform float uAmp;",
    "varying vec3 vN; varying vec3 vP; varying float vD;",
    "void main(){",
    "  vec3 p = position;",
    "  float d = sin(p.x*2.4+uTime*0.65)*sin(p.y*2.6+uTime*0.5)*sin(p.z*2.1+uTime*0.6);",
    "  d += 0.55*sin(p.y*5.2+uTime*1.05)*sin(p.x*4.2-uTime*0.75);",
    "  d += 0.25*sin(p.z*7.0+uTime*0.9)*sin(p.x*3.5+uTime*0.4);",
    "  d *= uAmp;",
    "  p += normal*d; vD = d; vP = p;",
    "  vN = normalize(normalMatrix*normal);",
    "  gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0);",
    "}"
  ].join("\n");

  var ORB_FRAG = [
    "uniform float uTime; uniform float uLight; uniform vec3 uA; uniform vec3 uB;",
    "varying vec3 vN; varying vec3 vP; varying float vD;",
    "void main(){",
    "  vec3 N = normalize(vN);",
    "  float f = pow(1.0 - max(dot(N, vec3(0.0,0.0,1.0)), 0.0), 2.6);",
    "  float band = 0.5 + 0.5*sin(vP.y*5.5 + uTime*0.85 + vD*8.0);",
    "  float pulse = 0.5 + 0.5*sin(uTime*1.4 + length(vP)*3.0);",
    "  vec3 base = mix(vec3(0.018,0.042,0.035), vec3(0.92,0.88,0.80), uLight);",
    "  vec3 col = base + uA*f*1.45 + uB*f*f*1.05 + uA*band*0.14*(1.0-f) + uB*pulse*0.06;",
    "  float a = clamp(0.52 + f*0.62 + pulse*0.04, 0.0, 1.0);",
    "  gl_FragColor = vec4(col, a);",
    "}"
  ].join("\n");

  var SKY_VERT = [
    "varying vec3 vDir;",
    "void main(){",
    "  vDir = position;",
    "  gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);",
    "}"
  ].join("\n");

  function skyFrag(octaves) {
    return [
      "precision highp float;",
      "varying vec3 vDir;",
      "uniform float uTime; uniform float uLight;",
      "uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;",
      "float h(vec3 p){ return fract(sin(dot(p, vec3(127.1,311.7,74.7)))*43758.5453); }",
      "float n(vec3 p){",
      "  vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);",
      "  return mix(mix(mix(h(i),h(i+vec3(1.,0.,0.)),f.x), mix(h(i+vec3(0.,1.,0.)),h(i+vec3(1.,1.,0.)),f.x), f.y),",
      "             mix(mix(h(i+vec3(0.,0.,1.)),h(i+vec3(1.,0.,1.)),f.x), mix(h(i+vec3(0.,1.,1.)),h(i+vec3(1.,1.,1.)),f.x), f.y), f.z);",
      "}",
      "float fbm(vec3 p){ float a = 0.5, s = 0.0; for(int i=0;i<" + octaves + ";i++){ s += a*n(p); p *= 2.07; a *= 0.5; } return s; }",
      "void main(){",
      "  vec3 d = normalize(vDir);",
      "  float t = uTime*0.014;",
      "  float f = fbm(d*2.0 + vec3(t, 0.0, -t*0.8));",
      "  float g = fbm(d*3.8 + vec3(4.8, t*1.6, 1.1) + f*1.2);",
      "  float h2 = fbm(d*7.2 + vec3(-t*0.5, 2.3, t) + g*0.6);",
      "  vec3 dark = vec3(0.012, 0.028, 0.024);",
      "  vec3 neb = uC1*smoothstep(0.38,0.96,f)*0.55 + uC2*smoothstep(0.42,0.94,g)*f*0.48 + uC3*pow(max(d.y*0.55+0.5,0.0),2.8)*0.14;",
      "  neb += uC1*exp(-abs(d.y)*6.5)*0.09 + uC2*h2*0.08*smoothstep(0.5,0.9,f);",
      "  vec3 night = dark + neb;",
      "  vec3 day = vec3(0.955,0.948,0.918) - neb*vec3(0.38,0.52,0.68);",
      "  gl_FragColor = vec4(mix(night, day, uLight), 1.0);",
      "}"
    ].join("\n");
  }

  /* ------------------------------------------------------------------
     4. The scene — multi-layer depth
  ------------------------------------------------------------------ */
  var MOODS = {
    index:        { a: [1.00, 0.28, 0.16], b: [0.88, 0.72, 0.42], c: [0.10, 0.52, 0.42], yaw: 0.0,  shift: 0.24 },
    about:        { a: [0.88, 0.72, 0.42], b: [0.10, 0.52, 0.42], c: [1.00, 0.28, 0.16], yaw: 0.95, shift: 0.26 },
    vision:       { a: [0.18, 0.60, 0.55], b: [1.00, 0.42, 0.22], c: [0.88, 0.72, 0.42], yaw: 1.85, shift: 0.24 },
    projects:     { a: [1.00, 0.36, 0.18], b: [0.28, 0.52, 0.88], c: [0.88, 0.72, 0.42], yaw: 2.75, shift: 0.26 },
    skills:       { a: [0.88, 0.72, 0.42], b: [1.00, 0.28, 0.16], c: [0.18, 0.60, 0.55], yaw: 3.65, shift: 0.22 },
    journey:      { a: [1.00, 0.42, 0.22], b: [0.88, 0.72, 0.42], c: [0.28, 0.52, 0.88], yaw: 4.55, shift: 0.26 },
    certificates: { a: [0.88, 0.72, 0.42], b: [1.00, 0.28, 0.16], c: [0.10, 0.52, 0.42], yaw: 5.45, shift: 0.24 },
    contact:      { a: [1.00, 0.28, 0.16], b: [0.18, 0.60, 0.55], c: [0.88, 0.72, 0.42], yaw: 0.48, shift: 0.22 }
  };

  function cosmos() {
    var page = document.body.dataset.page || "index";
    var mood = MOODS[page] || MOODS.index;

    loadThree(function () {
      var THREE = window.THREE;
      if (!THREE) return;
      var canvas = document.createElement("canvas");
      canvas.className = "cosmos";
      canvas.setAttribute("aria-hidden", "true");
      document.body.insertBefore(canvas, document.body.firstChild);

      var renderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          alpha: false,
          antialias: !lowEnd,
          powerPreference: lowEnd ? "low-power" : "high-performance",
          stencil: false,
          depth: true
        });
      } catch (e) { canvas.remove(); return; }

      var small = lowEnd; /* treat all low-end the same for geometry budgets */
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(48, 1, 0.1, 500);

      var ACC = new THREE.Color(0xff4d2e), GOLD = new THREE.Color(0xd9b66f), WARM = new THREE.Color(0xff8a4c);
      var uTime = { value: 0 }, uLight = { value: 0 };

      /* sky dome — always infinitely far */
      var skyMat = new THREE.ShaderMaterial({
        side: THREE.BackSide, depthWrite: false, depthTest: false,
        uniforms: {
          uTime: uTime, uLight: uLight,
          uC1: { value: new THREE.Vector3().fromArray(mood.a) },
          uC2: { value: new THREE.Vector3().fromArray(mood.b) },
          uC3: { value: new THREE.Vector3().fromArray(mood.c) }
        },
        vertexShader: SKY_VERT, fragmentShader: skyFrag(veryLow ? 2 : (small ? 3 : 5))
      });
      var sky = new THREE.Mesh(new THREE.SphereGeometry(220, small ? 24 : 40, small ? 16 : 24), skyMat);
      sky.renderOrder = -20; sky.frustumCulled = false;
      scene.add(sky);

      var root = new THREE.Group();
      scene.add(root);

      /* liquid glass orb — higher tessellation */
      var orbU = {
        uTime: uTime, uAmp: { value: 0.22 }, uLight: uLight,
        uA: { value: new THREE.Vector3(ACC.r, ACC.g, ACC.b).multiplyScalar(0.95) },
        uB: { value: new THREE.Vector3(GOLD.r, GOLD.g, GOLD.b).multiplyScalar(0.85) }
      };
      var orb = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.28, veryLow ? 8 : (small ? 12 : 28)),
        new THREE.ShaderMaterial({
          uniforms: orbU,
          vertexShader: ORB_VERT,
          fragmentShader: ORB_FRAG,
          transparent: true,
          depthWrite: false
        })
      );
      root.add(orb);

      /* secondary inner core for depth */
      var core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.55, veryLow ? 4 : 8),
        new THREE.MeshBasicMaterial({ color: ACC, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending })
      );
      root.add(core);

      /* wire lattice shell */
      var latticeMat = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.26 });
      var lattice = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.78, 1)), latticeMat);
      root.add(lattice);

      /* gold + orange rings with satellites */
      function ring(r, color, op, rx, ry) {
        var m = new THREE.Mesh(
          new THREE.TorusGeometry(r, 0.0055, small ? 6 : 8, small ? 96 : 240),
          new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: op })
        );
        m.rotation.x = rx; m.rotation.y = ry;
        root.add(m);
        return m;
      }
      var r1 = ring(2.22, GOLD, 0.58, 1.18, 0.18);
      var r2 = ring(2.68, ACC, 0.42, 0.52, 0.95);
      var r3 = ring(1.95, WARM, 0.30, 1.95, -0.42);
      var r4 = ring(3.15, GOLD, 0.18, 0.9, -0.6);
      var sats = [];
      [[r1, 2.22, GOLD, 0.85], [r2, 2.68, ACC, -0.58], [r3, 1.95, WARM, 1.15], [r4, 3.15, GOLD, -0.35]].forEach(function (c, i) {
        var s = new THREE.Mesh(
          new THREE.SphereGeometry(0.042 + i * 0.007, 12, 12),
          new THREE.MeshBasicMaterial({ color: c[2] })
        );
        c[0].add(s);
        sats.push({ m: s, r: c[1], sp: c[3], ph: i * 1.9 });
      });

      /* crystals scattered in full sphere for true 360 readability */
      var crystals = [];
      var crystalMats = [];
      var geos = [
        new THREE.EdgesGeometry(new THREE.OctahedronGeometry(1, 0)),
        new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 0)),
        new THREE.EdgesGeometry(new THREE.TetrahedronGeometry(1, 0)),
        new THREE.EdgesGeometry(new THREE.DodecahedronGeometry(1, 0))
      ];
      var CN = veryLow ? 8 : (small ? 12 : 32);
      for (var ci = 0; ci < CN; ci++) {
        var k = ci + 0.5;
        var phi = Math.acos(1 - 2 * k / CN);
        var th = Math.PI * (1 + Math.sqrt(5)) * k;
        var rad = 5.2 + (ci % 6) * 1.7 + Math.random() * 1.4;
        var mat = new THREE.LineBasicMaterial({
          color: ci % 3 === 0 ? ACC : GOLD,
          transparent: true,
          opacity: 0.48
        });
        crystalMats.push({ m: mat, accent: ci % 3 === 0 });
        var cr = new THREE.LineSegments(geos[ci % geos.length], mat);
        cr.position.set(
          rad * Math.sin(phi) * Math.cos(th),
          rad * Math.cos(phi) * 0.82,
          rad * Math.sin(phi) * Math.sin(th)
        );
        var sc = 0.18 + Math.random() * 0.68;
        cr.scale.setScalar(sc);
        root.add(cr);
        crystals.push({
          m: cr,
          base: cr.position.clone(),
          sp: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.55),
          bob: Math.random() * TAU,
          bs: 0.18 + Math.random() * 0.32
        });
      }

      /* three star shells + near dust for deep parallax */
      function shell(count, rmin, rmax, size, opacity) {
        var pos = new Float32Array(count * 3), col = new Float32Array(count * 3), tmp = new THREE.Color();
        for (var i = 0; i < count; i++) {
          var rr = rmin + Math.random() * (rmax - rmin);
          var t2 = Math.random() * TAU, p2 = Math.acos(2 * Math.random() - 1);
          pos[i * 3] = rr * Math.sin(p2) * Math.cos(t2);
          pos[i * 3 + 1] = rr * Math.cos(p2);
          pos[i * 3 + 2] = rr * Math.sin(p2) * Math.sin(t2);
          var q = Math.random();
          if (q < 0.38) tmp.copy(ACC);
          else if (q < 0.68) tmp.copy(GOLD);
          else tmp.setRGB(0.96, 0.94, 0.90);
          col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
        }
        var g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        g.setAttribute("color", new THREE.BufferAttribute(col, 3));
        var m = new THREE.PointsMaterial({
          size: size,
          vertexColors: true,
          transparent: true,
          opacity: opacity,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true
        });
        var pts = new THREE.Points(g, m);
        root.add(pts);
        return { pts: pts, mat: m, op: opacity };
      }
      var far  = shell(veryLow ? 280 : (small ? 420 : 1600), 45, 110, 0.55, 0.92);
      var mid  = shell(veryLow ? 90  : (small ? 140 : 520), 16, 38, 0.28, 0.82);
      var near = shell(veryLow ? 36  : (small ? 55  : 200), 5, 14, 0.09, 0.65);
      var dust = shell(veryLow ? 18  : (small ? 28  : 100), 2.5, 7, 0.05, 0.5);

      /* cinematic camera rig */
      var W = 0, H = 0;
      var rig = {
        yaw: mood.yaw, pitch: 0.11, dist: small ? 9.8 : 8.4,
        tYaw: mood.yaw, tPitch: 0.11, tDist: small ? 9.8 : 8.4,
        shiftX: 0, shiftY: 0, tShiftX: 0, tShiftY: 0,
        roll: 0, tRoll: 0,
        vYaw: 0, vPitch: 0, idle: 0
      };
      var explore = false;
      var auto = true;
      var intro = reduce ? 1 : 0;

      function layout() {
        var w = window.innerWidth, h = window.innerHeight;
        var dpr = Math.min(window.devicePixelRatio || 1, veryLow ? 1 : (small ? 1.25 : 1.75));
        renderer.setPixelRatio(dpr);
        renderer.setSize(w, h, false);
        W = w; H = h;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        need = true;
      }
      var need = true;
      layout();
      window.addEventListener("resize", layout, { passive: true });

      /* pointer parallax + explore drag / pinch */
      var mx = 0, my = 0, tx = 0, ty = 0;
      window.addEventListener("pointermove", function (e) {
        tx = (e.clientX / window.innerWidth - 0.5) * 2;
        ty = (e.clientY / window.innerHeight - 0.5) * 2;
      }, { passive: true });

      var pointers = {}, pinch0 = 0, dist0 = 0;
      function pcount() { return Object.keys(pointers).length; }
      canvas.addEventListener("pointerdown", function (e) {
        if (!explore) return;
        pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
        try { canvas.setPointerCapture(e.pointerId); } catch (er) {}
        rig.idle = 0; rig.vYaw = 0; rig.vPitch = 0;
        if (pcount() === 2) {
          var p = Object.keys(pointers).map(function (k) { return pointers[k]; });
          pinch0 = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
          dist0 = rig.tDist;
        }
      });
      canvas.addEventListener("pointermove", function (e) {
        if (!explore || !pointers[e.pointerId]) return;
        var p = pointers[e.pointerId];
        var dx = e.clientX - p.x, dy = e.clientY - p.y;
        p.x = e.clientX; p.y = e.clientY;
        rig.idle = 0;
        if (pcount() === 2) {
          var q = Object.keys(pointers).map(function (k) { return pointers[k]; });
          var d = Math.hypot(q[0].x - q[1].x, q[0].y - q[1].y);
          if (pinch0 > 10) rig.tDist = clamp(dist0 * (pinch0 / d), 2.8, 20);
        } else {
          var k = 0.0052;
          rig.tYaw -= dx * k;
          rig.tPitch = clamp(rig.tPitch + dy * k, -1.35, 1.35);
          rig.vYaw = -dx * k * 0.55;
          rig.vPitch = dy * k * 0.55;
        }
        need = true;
      });
      function up(e) { delete pointers[e.pointerId]; pinch0 = 0; }
      canvas.addEventListener("pointerup", up);
      canvas.addEventListener("pointercancel", up);
      canvas.addEventListener("wheel", function (e) {
        if (!explore) return;
        e.preventDefault();
        rig.tDist = clamp(rig.tDist * (1 + e.deltaY * 0.0011), 2.8, 20);
        rig.idle = 0; need = true;
      }, { passive: false });
      window.addEventListener("keydown", function (e) {
        if (!explore) return;
        if (e.key === "Escape") setExplore(false);
        if (e.key === "ArrowLeft")  { rig.tYaw -= 0.16; need = true; }
        if (e.key === "ArrowRight") { rig.tYaw += 0.16; need = true; }
        if (e.key === "ArrowUp")    { rig.tPitch = clamp(rig.tPitch - 0.11, -1.35, 1.35); need = true; }
        if (e.key === "ArrowDown")  { rig.tPitch = clamp(rig.tPitch + 0.11, -1.35, 1.35); need = true; }
      });

      /* explore HUD + calm dock */
      var hud = document.createElement("div");
      hud.className = "xp-hud";
      hud.hidden = true;
      hud.innerHTML =
        '<div class="xp-hint" id="xp-hint"></div>' +
        '<div class="xp-bar"><button type="button" class="xp-b" id="xp-auto"></button>' +
        '<button type="button" class="xp-b xp-exit" id="xp-exit"></button></div>';
      document.body.appendChild(hud);

      var dock = document.createElement("div");
      dock.className = "xp-dock";
      var entry = document.createElement("button");
      entry.type = "button";
      entry.className = "xp-entry";
      entry.id = "xp-entry";
      var calmBtn = document.createElement("button");
      calmBtn.type = "button";
      calmBtn.className = "xp-entry xp-calm";
      calmBtn.id = "xp-calm";
      dock.appendChild(entry);
      dock.appendChild(calmBtn);
      document.body.appendChild(dock);

      var calm = false;
      try { calm = localStorage.getItem("du-calm") === "1"; } catch (e) {}
      var motion = calm ? 0.08 : 0.42;
      function applyCalm() {
        document.documentElement.classList.toggle("calm", calm);
        calmBtn.setAttribute("aria-pressed", String(calm));
        calmBtn.textContent = (isBn() ? "শান্ত: " : "Calm: ") + (calm ? (isBn() ? "চালু" : "On") : (isBn() ? "বন্ধ" : "Off"));
      }
      calmBtn.addEventListener("click", function () {
        calm = !calm;
        try { localStorage.setItem("du-calm", calm ? "1" : "0"); } catch (e) {}
        applyCalm(); need = true; kick();
      });

      function labels() {
        var bn = isBn();
        entry.textContent = "◎ 360°";
        entry.setAttribute("aria-label", bn ? "৩৬০° ইউনিভার্স ঘুরে দেখুন" : "Explore the universe in 360 degrees");
        applyCalm();
        $("#xp-hint", hud).textContent = bn
          ? "টেনে চারদিক দেখুন · পিঞ্চ বা স্ক্রল করে জুম করুন"
          : "Drag to look around · pinch or scroll to zoom";
        $("#xp-auto", hud).textContent = (bn ? "অটো অরবিট: " : "Auto orbit: ") + (auto ? (bn ? "চালু" : "On") : (bn ? "বন্ধ" : "Off"));
        $("#xp-exit", hud).textContent = bn ? "বের হন" : "Exit 360°";
      }
      labels();
      document.addEventListener("languagechange", labels);

      function setExplore(on) {
        explore = on;
        document.body.classList.toggle("is-exploring", on);
        dock.hidden = on;
        hud.hidden = !on;
        if (on) {
          rig.tDist = small ? 7.8 : 6.8;
          rig.tShiftX = 0; rig.tShiftY = 0;
          rig.idle = 2.5;
          $("#xp-exit", hud).focus({ preventScroll: true });
        } else {
          pointers = {};
          entry.focus({ preventScroll: true });
        }
        need = true;
      }
      entry.addEventListener("click", function () { setExplore(true); });
      $("#xp-exit", hud).addEventListener("click", function () { setExplore(false); });
      $("#xp-auto", hud).addEventListener("click", function () { auto = !auto; labels(); });

      /* theme sync */
      var lastLight = null;
      function syncTheme() {
        var light = document.documentElement.dataset.theme === "light";
        if (light === lastLight) return;
        lastLight = light;
        uLight.value = light ? 1 : 0;
        [far, mid, near, dust].forEach(function (s) {
          s.mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
          s.mat.opacity = light ? s.op * 0.72 : s.op;
          s.mat.needsUpdate = true;
        });
        latticeMat.color.set(light ? 0x8b6a2d : 0xd9b66f);
        latticeMat.opacity = light ? 0.38 : 0.24;
        crystalMats.forEach(function (c) {
          c.m.color.set(c.accent ? (light ? 0xc0341d : 0xff4d2e) : (light ? 0x8b6a2d : 0xd9b66f));
          c.m.opacity = light ? 0.58 : 0.48;
        });
        need = true;
      }

      /* render loop */
      var visible = true, running = false, stopped = true, last = performance.now(), t = 0;
      new IntersectionObserver(function (en) {
        visible = en[0].isIntersecting;
        if (visible) kick();
      }, { threshold: 0 }).observe(document.body);
      document.addEventListener("visibilitychange", function () { if (!document.hidden) kick(); });
      window.addEventListener("scroll", function () { need = true; kick(); }, { passive: true });
      document.addEventListener("themechange", function () { need = true; kick(); });

      var slow = 0, lowered = false, frameSkip = 0;
      var targetDt = veryLow ? 0.033 : (small ? 0.022 : 0.016); /* ~30 / 45 / 60 fps */
      function frame(now) {
        running = false;
        if (document.hidden) { stopped = true; return; }
        var raw = (now - last) / 1000;
        /* Phone: skip frames to stay smooth instead of stuttering */
        if (small && !explore) {
          frameSkip++;
          if (frameSkip % (veryLow ? 2 : 1) !== 0 && raw < targetDt) {
            running = true; requestAnimationFrame(frame); return;
          }
          if (raw < targetDt * 0.85) { running = true; requestAnimationFrame(frame); return; }
        }
        var dt = Math.min(raw, 0.05); last = now;
        if (raw < 0.5) { slow = raw > 0.05 ? slow + 1 : Math.max(0, slow - 1); }
        if (slow > 40 && !lowered) {
          lowered = true;
          renderer.setPixelRatio(1);
          renderer.setSize(W, H, false);
          need = true;
        }
        motion += ((calm ? 0.06 : (veryLow ? 0.28 : 0.42)) - motion) * 0.05;
        if (!reduce) t += dt * motion;
        syncTheme();

        mx += (tx - mx) * 0.045; my += (ty - my) * 0.045;

        var maxS = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        var sp = clamp(window.scrollY / maxS, 0, 1);

        if (intro < 1) intro = Math.min(1, intro + dt / 5.2);
        var ie = ease(intro);

        var wide = W / Math.max(H, 1) > 1.05;
        if (!explore) {
          /* cinematic scroll path: continuous yaw + gentle pitch wave + dolly */
          rig.tYaw = mood.yaw + sp * 1.35 + (1 - ie) * 0.55 + mx * 0.06;
          rig.tPitch = 0.09 + Math.sin(sp * TAU) * 0.12 + my * 0.045;
          var baseD = small ? 9.9 : 8.5;
          rig.tDist = baseD + Math.sin(sp * Math.PI) * 1.15 + (1 - ie) * 3.2;
          rig.tShiftX = wide ? mood.shift : 0;
          rig.tShiftY = wide ? 0 : -0.22;
          rig.tRoll = Math.sin(sp * Math.PI * 0.7) * 0.018;
        } else {
          rig.idle += dt;
          if (pcount() === 0) {
            rig.tYaw += rig.vYaw;
            rig.tPitch = clamp(rig.tPitch + rig.vPitch, -1.35, 1.35);
            rig.vYaw *= 0.935;
            rig.vPitch *= 0.935;
            if (auto && rig.idle > 2.2 && !reduce) {
              rig.tYaw += dt * (calm ? 0.012 : 0.055);
            }
          }
          rig.tRoll = 0;
        }

        var k = explore ? 0.085 : 0.032;
        rig.yaw   += (rig.tYaw   - rig.yaw)   * k;
        rig.pitch += (rig.tPitch - rig.pitch) * k;
        rig.dist  += (rig.tDist  - rig.dist)  * 0.048;
        rig.shiftX += (rig.tShiftX - rig.shiftX) * 0.038;
        rig.shiftY += (rig.tShiftY - rig.shiftY) * 0.038;
        rig.roll  += (rig.tRoll  - rig.roll)  * 0.04;

        /* motion */
        orbU.uTime.value = t;
        uTime.value = t;
        orb.rotation.y = t * 0.11;
        orb.rotation.x = t * 0.045;
        core.rotation.y = -t * 0.18;
        core.rotation.z = t * 0.09;
        lattice.rotation.y = -t * 0.085;
        lattice.rotation.z = t * 0.038;
        r1.rotation.z = t * 0.17;
        r2.rotation.z = -t * 0.115;
        r3.rotation.z = t * 0.21;
        r4.rotation.z = -t * 0.08;
        sats.forEach(function (s) {
          var a = t * s.sp + s.ph;
          s.m.position.set(Math.cos(a) * s.r, Math.sin(a) * s.r, 0);
        });
        crystals.forEach(function (c) {
          c.m.rotation.x = t * c.sp.x;
          c.m.rotation.y = t * c.sp.y;
          c.m.rotation.z = t * c.sp.z;
          c.m.position.y = c.base.y + Math.sin(t * c.bs + c.bob) * 0.38;
        });
        far.pts.rotation.y  = t * 0.006;
        mid.pts.rotation.y  = -t * 0.013;
        near.pts.rotation.y = t * 0.028;
        dust.pts.rotation.y = t * 0.045;
        var pulse = 1 + Math.sin(t * 0.75) * 0.012;
        orb.scale.setScalar(pulse * (explore ? 1.12 : 1));
        core.scale.setScalar(pulse * 0.95);

        /* camera on sphere around origin with subtle roll */
        var cp = Math.cos(rig.pitch);
        camera.position.set(
          Math.sin(rig.yaw) * cp * rig.dist,
          Math.sin(rig.pitch) * rig.dist,
          Math.cos(rig.yaw) * cp * rig.dist
        );
        camera.lookAt(0, 0, 0);
        camera.rotation.z = rig.roll;
        sky.position.copy(camera.position);

        /* push orb off-centre so text never fights the focal point */
        camera.setViewOffset(W, H, -rig.shiftX * W, -rig.shiftY * H, W, H);

        renderer.render(scene, camera);
        need = false;
        var moving = !reduce || need || explore ||
          Math.abs(rig.tYaw - rig.yaw) > 0.0007 ||
          Math.abs(rig.tDist - rig.dist) > 0.003 ||
          intro < 1;
        if (moving && visible) { running = true; requestAnimationFrame(frame); }
        else stopped = true;
      }
      function kick() {
        if (running) return;
        running = true;
        if (stopped) { last = performance.now(); stopped = false; }
        requestAnimationFrame(frame);
      }
      kick();
      requestAnimationFrame(function () { canvas.classList.add("is-ready"); });
      document.body.classList.add("has-cosmos");
    });
  }

  function afterLoad(fn) {
    function go() {
      /* Content first always. 3D is pure enhancement — load late. */
      var delay = veryLow ? 2200 : (lowEnd ? 1400 : 700);
      if (window.requestIdleCallback) {
        window.requestIdleCallback(fn, { timeout: delay + 2500 });
      } else {
        setTimeout(fn, delay);
      }
    }
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
  }

  onReady(function () {
    ambience();
    tilt();
    afterLoad(function () {
      try { cosmos(); } catch (e) { /* site works without 3D layer */ }
    });
  });
})();
