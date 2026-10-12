# Ataullah Al Mahmud — Digital Universe 9D

A hyper-cinematic static portfolio. One fixed multi-layer Three.js scene sits behind every page:

- Volumetric nebula sky dome (5-octave FBM)
- Liquid glass orb with inner luminous core
- Wire lattice + four gold/accent orbital rings with satellites
- 32 drifting crystals in full spherical distribution
- Four parallax star / dust shells (far → near)
- Cinematic camera: scroll-driven 360° orbit + dolly + subtle roll
- **360°** explore mode (drag to look, pinch / wheel to zoom, keyboard, inertia, auto-orbit)
- Calm mode (localStorage) for reduced motion

## Files (flat, phone-friendly)

```
index.html  about.html  vision.html  projects.html
skills.html  journey.html  certificates.html  contact.html
style.css        design + cinematic 9D layer
main.js          content (EN + BN), language, interactions, canvas systems
universe.js      3D scene, 360 explore, ambience
favicon.svg  profile-placeholder.svg  robots.txt  sitemap.xml  README.md
```

## Before publishing

Edit only the `CONFIG` object at the top of `main.js` (email, social links).
Everything shown is public once uploaded.

## Local preview

Open `index.html` in a browser. No build step. Internet needed for fonts + Three.js (cdnjs). Offline the site still works without the 3D layer.

## Deploy

Upload all files to the root of GitHub Pages / Netlify / any static host.
