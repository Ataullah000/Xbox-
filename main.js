/* Digital Universe
   Shared interaction layer
   Md Ataullah Al Mahmud Alif
*/

const CONFIG = {
  siteName: "Ataullah Al Mahmud",
  legalName: "Md Ataullah Al Mahmud Alif",
  nickname: "Alif",
  baseUrl: "https://ataullah000.github.io/ataullah-portfolio",
  customDomain: "[YOUR-DOMAIN]",
  contactEmail: "ataullahalif99@gmail.com",
  profilePhoto: "profile-placeholder.svg",
  favicon: "favicon.svg",
  socialLinks: {
    github: "",
    linkedin: "https://www.linkedin.com/in/md-ataullah-al-mahmud-alif-36aaa1423",
    youtube: "https://www.youtube.com/@Al_Mahmud_Alif",
    facebook: "https://www.facebook.com/share/1BpE1sTTwp/",
    instagram: "https://www.instagram.com/almahmud1329",
    x: "https://x.com/MdAtaullahmsoy",
    whatsapp: "https://wa.me/8801405949383"
  },
  publicationUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7480999",
  futureProjectLabel: "[TO BE ADDED]"
};

const I18N = {
  en: {
    nav: {
      home:"Home", about:"About", vision:"Vision", projects:"Projects",
      skills:"Skills", journey:"Journey", certificates:"Certificates", contact:"Contact"
    },
    common: {
      siteName:"Ataullah Al Mahmud", legalName:"Md Ataullah Al Mahmud Alif", primaryNav:"Primary navigation", mobileNav:"Mobile navigation", skip:"Skip to content",
      language:"বাংলা", theme:"Toggle theme", menu:"Open menu", close:"Close menu",
      backTop:"Back to top", explore:"Explore", learnMore:"Learn more", status:"Status",
      completed:"COMPLETED", progress:"IN PROGRESS", planned:"PLANNED", aspirational:"ASPIRATIONAL",
      current:"Current page", viewProject:"View project", send:"Open email app", submit:"Open email app",
      unavailable:"This link has not been configured yet.", emailMissing:"Please add your email in the CONFIG object in main.js.",
      socialMissing:"This social link has not been configured yet.", github:"GitHub", linkedin:"LinkedIn", youtube:"YouTube", facebook:"Facebook", instagram:"Instagram", x:"X", whatsapp:"WhatsApp", visitPublication:"Visit publication", visitYoutube:"Visit my YouTube Channel"
    },
    home: {
      title:"Md Ataullah Al Mahmud Alif",
      tagline:"Building Opportunities for a Better Future",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact",
      intro:"Driven by curiosity, inspired by possibility, and committed to building a future where technology makes a difference.",
      youtubeEyebrow:"YouTube",
      youtubeTitle:"Latest from YouTube",
      youtubeLead:"A few moments from my channel. Tap any card to watch.",
      youtubeSubscribe:"Subscribe on YouTube",
      yt1Title:"View Channel", yt1Meta:"YouTube",
      yt2Title:"Latest Videos", yt2Meta:"YouTube",
      yt3Title:"Grow Better", yt3Meta:"YouTube",
      projects:"View projects", contact:"Start a conversation",
      orbitLabel:"LEARN", orbit2:"THINK", orbit3:"EXPERIMENT", orbit4:"BUILD", orbit5:"FAIL", orbit6:"IMPROVE", orbit7:"SHARE",
      orbitCenter:"DIGITAL UNIVERSE",
      signal:"A living portfolio of learning, experiments and future ideas",
      sectionEyebrow:"A digital universe",
      sectionTitle:"Learning becomes meaningful when it moves.",
      sectionLead:"The portfolio brings together my interests, experiences, current work and future ideas without pretending that plans are already achievements.",
      route1Title:"Explore",
      route1Copy:"Move through the site as different regions of one evolving universe, or tap 360° and look around the universe itself.",
      route2Title:"Build",
      route2Copy:"See what is completed, what is in progress and what is still a plan.",
      route3Title:"Connect",
      route3Copy:"Reach out through the contact gateway when you want to start a conversation."
    },
    about: {
      eyebrow:"About",
      title:"The person behind the work",
      lead:"Md Ataullah Al Mahmud Alif has a broad interest in technology, learning, creative problem solving and practical digital work.",
      statusLabel:"Current profile",
      identityTitle:"Identity",
      identityCopy:"Md Ataullah Al Mahmud Alif is a young learner, technology enthusiast, and aspiring innovator from Bangladesh with a growing interest in artificial intelligence, cybersecurity, and the transformative power of technology. His journey is shaped by curiosity, independent learning, and a desire to turn ideas into meaningful solutions. From exploring web development and digital experiences to studying how intelligent systems influence human perception and decision-making, he approaches technology as both a field of discovery and an opportunity to create positive change. Beyond technology, his experiences in volunteering, student activities, and community engagement have helped shape his understanding of responsibility, collaboration, and the value of contributing to others. He believes that meaningful progress begins with asking better questions, remaining open to new perspectives, and having the courage to build despite uncertainty. With a particular interest in the intersection of artificial intelligence and cybersecurity, he aspires to explore how intelligent systems can be made more secure, trustworthy, and beneficial to society. His journey is still unfolding, guided by a simple philosophy of exploring technology, building ideas, and creating impact, one step at a time.",
      educationTitle:"Education",
      educationSsc:"SSC (2024) — Sherpur Govt Victoria Academy, Science group",
      educationHsc:"HSC (2026) — Dhaka City College, Science group",
      educationCopy:"SSC (2024) — Sherpur Govt Victoria Academy, Science group",
      interestsTitle:"Interests",
      interestsCopy:"AI, technology, education, web development, cybersecurity, SEO, UX and UI, video editing, entrepreneurship and creative problem solving. Interested in EEE, CSE, AI and cybersecurity as fields of study.",
      workTitle:"Freelance work",
      workCopy:"Freelancer in web development, SEO, digital technology, AI tools and UI and UX.",
      mediaTitle:"YouTube and editing",
      mediaCopy:"Runs a YouTube channel and uses AI assisted image and video editing for it.",
      languagesTitle:"Languages",
      languagesCopy:"",
      langBn:"Bengali", langBnLevel:"Native",
      langEn:"English", langEnLevel:"Full professional",
      langHi:"Hindi", langHiLevel:"Full professional",
      langUr:"Urdu", langUrLevel:"Full professional",
      langJa:"Japanese", langJaLevel:"Basic",
      note:""
    },
    vision: {
      eyebrow:"Vision",
      title:"Ideas with a long horizon",
      lead:"The future is presented as a sequence of intentions rather than a list of claims. The timeline keeps planned work visibly separate from established work.",
      year2026:"AI powered educational platform for students in Bangladesh and beyond, supporting both Bangla and English medium.",
      year2027:"Continue developing the educational platform idea and learning around the needs it is intended to serve.",
      year2030:"An AI focused startup is an aspirational direction. It is not established yet.",
      year2035:"A social impact initiative or NGO aligned with the UN SDGs is an aspirational direction. It is not established yet.",
      platformTitle:"AI education platform",
      platformCopy:"Planned work for an AI powered educational platform supporting students in Bangladesh and beyond in both Bangla and English medium.",
      startupTitle:"AI focused startup",
      startupCopy:"An aspirational direction. No startup has been established yet.",
      impactTitle:"Social impact initiative",
      impactCopy:"An aspirational direction for an initiative or NGO aligned with the UN SDGs. It is not established yet.",
      networkTitle:"Ideas grow through connection",
      networkCopy:"The network visual is a metaphor for connected possibilities. It does not represent an existing organization or product."
    },
    projects: {
      eyebrow:"Projects",
      title:"Built, building and imagined",
      lead:"A truthful record of work. Completed work sits beside experiments still unfolding — each one a step toward clearer ideas and stronger craft.",
      navoraTitle:"NAVORA",
      navoraCopy:"An AI-powered digital workspace designed to bring learning, coding, research, and intelligent assistance together in one connected experience. NAVORA aims to turn complex tasks into simpler, more accessible, and meaningful workflows.",
      navoraNote:"AI workspace · Learning + coding + research",
      jhaloraTitle:"JHALORA",
      jhaloraCopy:"A food ordering website for a local food business. Customers browse the menu with clear photos, build a cart, and send the order straight to WhatsApp. A built-in chat assistant answers price and ingredient questions instantly.",
      jhaloraNote:"Local commerce · WhatsApp orders + AI chat",
      cypherTitle:"CypherEnclave",
      cypherCopy:"A privacy-focused AI workspace envisioned for writing, research, coding, and document analysis. CypherEnclave places user control, data privacy, and secure AI interactions at the heart of a more trustworthy digital experience.",
      cypherNote:"Privacy-first AI · Secure writing & research",
      shopTitle:"Local shop website",
      shopCopy:"Built a website for a local shop and linked it with other sites in an affiliate marketing style. The shop's sales increased afterward. This was the first project of this kind.",
      portfolioTitle:"Digital Universe portfolio",
      portfolioCopy:"This portfolio website is currently in progress as a living digital universe.",
      publicationTitle:"Artificial Intelligence and Human Perception: Exploring Bias, Influence and Decision Manipulation",
      publicationCopy:"Md Ataullah Al Mahmud Alif's first research paper explores how artificial intelligence can shape human perception, influence biases, and affect decision making. Available as a preprint on SSRN, the research also looks at the ethical questions that arise when AI begins to influence how people think and make judgments.",
      publicationNote:"Preprint on SSRN · First research paper",
      educationTitle:"AI education platform",
      educationCopy:"An AI powered educational platform for students in Bangladesh and beyond, supporting both Bangla and English medium.",
      completedNote:"First project of this kind",
      inProgressNote:"This website",
      plannedNote:"In progress"
    },
    skills: {
      eyebrow:"Skills",
      title:"A constellation of abilities",
      lead:"Skills are shown as connected capabilities rather than progress bars. Some are practical strengths and some are areas still being learned.",
      center:"SKILLS",
      web:"Web Development",
      webCopy:"Building responsive, user-friendly websites with a focus on clean structure, thoughtful design, and practical functionality.",
      aiDev:"AI-Assisted Development",
      aiDevCopy:"Exploring how AI tools can support coding, simplify workflows, solve problems, and turn early ideas into working projects.",
      uiux:"UI/UX Design",
      uiuxCopy:"Creating intuitive digital experiences through thoughtful layouts, clear visual hierarchy, and user-centered design principles.",
      seo:"SEO & Website Optimization",
      seoCopy:"Applying foundational SEO practices to improve website structure, discoverability, and the overall user experience.",
      prompt:"AI & Prompt Engineering",
      promptCopy:"Refining prompts and exploring AI capabilities to generate ideas, improve content, and approach complex tasks more effectively.",
      video:"Video Editing & Content Creation",
      videoCopy:"Producing digital content with AI-assisted visuals, video editing, voice-overs, subtitles, and creative storytelling.",
      research:"Research & Analytical Thinking",
      researchCopy:"Exploring complex topics through structured interviews, qualitative analysis, and research-based writing to develop meaningful insights.",
      frontend:"Frontend Development",
      frontendCopy:"Developing interactive web interfaces with HTML, CSS, and JavaScript, with an emphasis on responsive layouts, functional components, and consistent user experiences.",
      api:"API Integration",
      apiCopy:"Exploring how APIs connect websites with external services, enabling data exchange and the integration of AI-powered features into digital applications.",
      cyber:"Cybersecurity Fundamentals",
      cyberCopy:"Developing an understanding of digital security, data privacy, and the principles behind building safer and more trustworthy systems.",
      // legacy chip keys kept for constellation labels
      ai:"AI Tools", python:"Python basics", data:"Data Analytics", teaching:"Teaching", leadership:"Leadership",
      dataNote:"IBM SkillsBuild", aiNote:"IBM SkillsBuild"
    },
    journey: {
      eyebrow:"Journey",
      title:"Experience leaves a path",
      lead:"A timeline of service, training, teaching, organizing and student community involvement.",
      redTitle:"Volunteer — Bangladesh Red Crescent Society",
      redCopy:"Served as a member of the Bangladesh Red Crescent Society. Took part in community service, flood relief programmes and health awareness campaigns, including aid distribution. Built stronger communication, teamwork and a sense of social responsibility.",
      bnccTitle:"Cadet — Bangladesh National Cadet Corps (BNCC)",
      bnccCopy:"Completed military-style training with the Bangladesh National Cadet Corps, including drills, camping and team exercises. Developed discipline, leadership, teamwork, problem-solving skills and the ability to stay adaptable in challenging situations.",
      teachingTitle:"Free teaching",
      teachingCopy:"Taught approximately 5 students Mathematics and Science free of charge in Sherpur for about one year.",
      organizingTitle:"School cultural program",
      organizingCopy:"Served as a main organizing committee member of a school cultural program attended by about 500 people.",
      scienceTitle:"Dhaka City College Science Club",
      scienceCopy:"Participated in academic discussions and science-related activities. Worked on problem-solving tasks and small group projects. Improved critical thinking and teamwork skills.",
      artsTitle:"Dhaka City College Arts and Crafts Club",
      artsCopy:"Took part in creative workshops and collaborative projects. Helped organise events and team-based activities. Enhanced creativity, teamwork and communication.",
      redDate:"April 2020 to March 2021",
      bnccDate:"April 2021 to March 2024",
      teachingDate:"About one year",
      organizingDate:"School experience",
      scienceDate:"October 2024 to October 2025",
      artsDate:"October 2024 to October 2025"
    },
    certificates: {
      eyebrow:"Certificates",
      title:"Evidence of learning",
      lead:"Every certification here marks a skill put into practice. Together they reflect a steady commitment to learning, from cybersecurity and AI to data analytics, open science and community impact, backed by recognised global institutions.",
      deloitteTitle:"Deloitte Cyber Job Simulation",
      deloitteIssuer:"Deloitte via Forage",
      deloitteDate:"22 July 2026",
      deloitteNote:"• Applied cybersecurity principles through realistic simulated security scenarios.\n• Strengthened skills in security analysis, web security, and networking.",
      unicefTitle:"Community Engagement for Behaviour and Social Change in CCCs in Humanitarian Action",
      unicefIssuer:"UNICEF via Agora",
      unicefDate:"21 July 2026",
      unicefNote:"• Developed knowledge of community engagement and social behaviour change.\n• Gained insight into humanitarian programming and monitoring practices.",
      ibmTitle:"Data Analytics for Sustainability",
      ibmIssuer:"IBM SkillsBuild",
      ibmDate:"30 August 2026",
      ibmNote:"Completed requirements for Data Analytics for Sustainability.",
      nasaTitle:"Open Science Essentials",
      nasaIssuer:"NASA",
      nasaDate:"18 August 2026",
      nasaNote:"• Developed knowledge of open science, open data, and reproducible research.\n• Gained practical understanding of transparent and collaborative scientific practices.",
      pythonTitle:"Python Essentials 1",
      pythonIssuer:"Cisco Networking Academy + OpenEDG Python Institute",
      pythonDate:"05 August 2026",
      pythonNote:"• Developed foundational Python programming and problem-solving skills through Python Essentials 1.\n• Gained practical experience in writing, debugging, and executing Python 3 programs.",
      aiTitle:"Artificial Intelligence Fundamentals",
      aiIssuer:"IBM SkillsBuild",
      aiDate:"06 September 2026",
      aiNote:"Completed requirements for Artificial Intelligence Fundamentals."
    },
    contact: {
      eyebrow:"Contact",
      title:"Open the gateway",
      lead:"The contact form opens your email application. Social links are ready to use.",
      name:"Name",
      email:"Email",
      message:"Message",
      namePlaceholder:"Your name",
      emailPlaceholder:"Your email",
      messagePlaceholder:"Your message",
      socialTitle:"Social links",
      formInvite:"Just one tap and visit my profile.",
      socialInvite:"Just one tap and visit my profile.",
      formNote:"Your email app will open with the message prepared.",
      missingEmail:"The contact email is still a placeholder. Add it in main.js before publishing.",
      missingSocial:"This social link is still a placeholder. Add it in main.js before publishing."
    },
    footer: {
      name:"Md Ataullah Al Mahmud Alif",
      copy:"Building Opportunities for a Better Future",
      quick:"Quick links",
      connect:"Connect",
      rights:"Personal portfolio",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact"
    },
    seo: {
      homeTitle:"Ataullah Al Mahmud | Md Ataullah Al Mahmud Alif",
      homeDesc:"Portfolio of Ataullah Al Mahmud, also known as Alif. Exploring technology, ideas, digital work and future possibilities.",
      aboutTitle:"About | Ataullah Al Mahmud",
      aboutDesc:"About Md Ataullah Al Mahmud Alif, his interests, digital work, education and languages.",
      visionTitle:"Vision | Ataullah Al Mahmud",
      visionDesc:"The future vision of Md Ataullah Al Mahmud Alif, including planned education technology work and aspirational directions.",
      projectsTitle:"Projects | Ataullah Al Mahmud",
      projectsDesc:"Projects by Md Ataullah Al Mahmud Alif, including completed work, an in progress portfolio, a research preprint and planned ideas.",
      skillsTitle:"Skills | Ataullah Al Mahmud",
      skillsDesc:"Skills and learning areas of Md Ataullah Al Mahmud Alif across web development, SEO, AI tools, cybersecurity and more.",
      journeyTitle:"Journey | Ataullah Al Mahmud",
      journeyDesc:"The journey of Md Ataullah Al Mahmud Alif through service, training, teaching, organizing and student clubs.",
      certificatesTitle:"Certificates | Ataullah Al Mahmud",
      certificatesDesc:"Learning credentials and simulations completed by Md Ataullah Al Mahmud Alif.",
      contactTitle:"Contact | Ataullah Al Mahmud",
      contactDesc:"Contact Md Ataullah Al Mahmud Alif through email and social links."
    }
  },
  bn: {
    nav: {
      home:"হোম", about:"পরিচয়", vision:"ভিশন", projects:"প্রকল্প", skills:"দক্ষতা",
      journey:"যাত্রা", certificates:"সনদ", contact:"যোগাযোগ"
    },
    common: {
      siteName:"Ataullah Al Mahmud", legalName:"Md Ataullah Al Mahmud Alif", primaryNav:"প্রধান নেভিগেশন", mobileNav:"মোবাইল নেভিগেশন", skip:"কনটেন্টে যান",
      language:"EN", theme:"থিম বদলান", menu:"মেনু খুলুন", close:"মেনু বন্ধ করুন",
      backTop:"উপরে যান", explore:"ঘুরে দেখুন", learnMore:"আরও জানুন", status:"অবস্থা",
      completed:"সম্পন্ন", progress:"চলমান", planned:"পরিকল্পিত", aspirational:"ভবিষ্যৎ আকাঙ্ক্ষা",
      current:"বর্তমান পৃষ্ঠা", viewProject:"প্রকল্প দেখুন", send:"ইমেইল অ্যাপ খুলুন", submit:"ইমেইল অ্যাপ খুলুন",
      unavailable:"এই লিংকটি এখনো যুক্ত করা হয়নি।", emailMissing:"main.js এর CONFIG অংশে ইমেইল ঠিকানা যোগ করুন।",
      socialMissing:"এই সামাজিক যোগাযোগের লিংকটি এখনো যুক্ত করা হয়নি।", github:"GitHub", linkedin:"LinkedIn", youtube:"YouTube", facebook:"Facebook", instagram:"Instagram", x:"X", whatsapp:"WhatsApp", visitPublication:"প্রকাশনা দেখুন", visitYoutube:"আমার YouTube চ্যানেল দেখুন"
    },
    home: {
      title:"Md Ataullah Al Mahmud Alif",
      tagline:"Building Opportunities for a Better Future",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact",
      intro:"কৌতূহল দ্বারা চালিত, সম্ভাবনা দ্বারা অনুপ্রাণিত, এবং এমন এক ভবিষ্যৎ গড়ার প্রতিশ্রুতিতে অঙ্গীকারবদ্ধ যেখানে প্রযুক্তি প্রকৃত পার্থক্য তৈরি করে।",
      youtubeEyebrow:"ইউটিউব",
      youtubeTitle:"ইউটিউব থেকে সাম্প্রতিক",
      youtubeLead:"আমার চ্যানেলের কিছু মুহূর্ত। যেকোনো কার্ডে ট্যাপ করে দেখুন।",
      youtubeSubscribe:"ইউটিউবে সাবস্ক্রাইব করুন",
      yt1Title:"View Channel", yt1Meta:"YouTube",
      yt2Title:"Latest Videos", yt2Meta:"YouTube",
      yt3Title:"Grow Better", yt3Meta:"YouTube",
      projects:"প্রকল্প দেখুন", contact:"যোগাযোগ শুরু করুন",
      orbitLabel:"শিখুন", orbit2:"ভাবুন", orbit3:"পরীক্ষা করুন", orbit4:"তৈরি করুন", orbit5:"ব্যর্থ হন", orbit6:"উন্নতি করুন", orbit7:"শেয়ার করুন",
      orbitCenter:"ডিজিটাল ইউনিভার্স",
      signal:"শেখা, পরীক্ষা এবং ভবিষ্যৎ ভাবনার একটি চলমান পোর্টফোলিও",
      sectionEyebrow:"একটি ডিজিটাল ইউনিভার্স",
      sectionTitle:"শেখা তখনই অর্থবহ হয় যখন তা এগিয়ে যায়।",
      sectionLead:"এই পোর্টফোলিওতে আমার আগ্রহ, অভিজ্ঞতা, বর্তমান কাজ এবং ভবিষ্যৎ ধারণাগুলো একসাথে আছে। পরিকল্পনাকে কখনো অর্জন হিসেবে দেখানো হয়নি।",
      route1Title:"ঘুরে দেখুন",
      route1Copy:"একটি পরিবর্তনশীল ইউনিভার্সের বিভিন্ন অঞ্চলের মতো করে সাইটটি ঘুরে দেখুন, অথবা ৩৬০° ট্যাপ করে ইউনিভার্সটাই চারদিক থেকে দেখুন।",
      route2Title:"তৈরি দেখুন",
      route2Copy:"কোনটি সম্পন্ন, কোনটি চলমান এবং কোনটি এখনো পরিকল্পনা তা আলাদা করে দেখুন।",
      route3Title:"যোগাযোগ করুন",
      route3Copy:"কথা শুরু করতে যোগাযোগের গেটওয়ে ব্যবহার করুন।"
    },
    about: {
      eyebrow:"পরিচয়",
      title:"কাজের পেছনের মানুষটি",
      lead:"Md Ataullah Al Mahmud Alif-এর প্রযুক্তি, শেখা, সৃজনশীল সমস্যা সমাধান এবং বাস্তব ডিজিটাল কাজের প্রতি বিস্তৃত আগ্রহ রয়েছে।",
      statusLabel:"বর্তমান পরিচয়",
      identityTitle:"পরিচয়",
      identityCopy:"Md Ataullah Al Mahmud Alif একজন তরুণ শিক্ষার্থী, প্রযুক্তি-উৎসাহী এবং উদীয়মান উদ্ভাবক — বাংলাদেশ থেকে আসা, কৃত্রিম বুদ্ধিমত্তা, সাইবারসিকিউরিটি এবং প্রযুক্তির রূপান্তরকারী শক্তির প্রতি ক্রমবর্ধমান আগ্রহ নিয়ে। তাঁর যাত্রা গড়ে উঠেছে কৌতূহল, স্বাধীন শেখা এবং ধারণাকে অর্থবহ সমাধানে রূপ দেওয়ার আকাঙ্ক্ষা দিয়ে। ওয়েব ডেভেলপমেন্ট ও ডিজিটাল অভিজ্ঞতা অন্বেষণ থেকে শুরু করে বুদ্ধিমান সিস্টেম কীভাবে মানুষের উপলব্ধি ও সিদ্ধান্তকে প্রভাবিত করে তা অধ্যয়ন পর্যন্ত — তিনি প্রযুক্তিকে একই সঙ্গে আবিষ্কারের ক্ষেত্র এবং ইতিবাচক পরিবর্তন তৈরির সুযোগ হিসেবে দেখেন। প্রযুক্তির বাইরে, স্বেচ্ছাসেবা, শিক্ষার্থী কার্যক্রম এবং কমিউনিটি সম্পৃক্ততার অভিজ্ঞতা তাঁর দায়িত্ববোধ, সহযোগিতা এবং অন্যদের জন্য অবদান রাখার মূল্যবোধ গড়ে তুলেছে। তিনি বিশ্বাস করেন, অর্থবহ অগ্রগতি শুরু হয় আরও ভালো প্রশ্ন জিজ্ঞাসা করা, নতুন দৃষ্টিভঙ্গির প্রতি উন্মুক্ত থাকা এবং অনিশ্চয়তা সত্ত্বেও তৈরি করার সাহস রাখা দিয়ে। বিশেষভাবে কৃত্রিম বুদ্ধিমত্তা ও সাইবারসিকিউরিটির সংযোগস্থলে আগ্রহী হয়ে, তিনি অন্বেষণ করতে চান কীভাবে বুদ্ধিমান সিস্টেমকে আরও নিরাপদ, বিশ্বস্ত এবং সমাজের জন্য উপকারী করা যায়। তাঁর যাত্রা এখনো চলমান — প্রযুক্তি অন্বেষণ, ধারণা নির্মাণ এবং প্রভাব সৃষ্টির সরল দর্শন দ্বারা পরিচালিত, এক ধাপ এক ধাপ করে।",
      educationTitle:"শিক্ষা",
      educationSsc:"SSC (২০২৪) — Sherpur Govt Victoria Academy, Science গ্রুপ",
      educationHsc:"HSC (২০২৬) — Dhaka City College, Science গ্রুপ",
      educationCopy:"SSC (২০২৪) — Sherpur Govt Victoria Academy, Science গ্রুপ",
      interestsTitle:"আগ্রহ",
      interestsCopy:"AI, প্রযুক্তি, শিক্ষা, web development, cybersecurity, SEO, UX ও UI, video editing, entrepreneurship এবং creative problem solving। EEE, CSE, AI এবং cybersecurity কে পড়াশোনার ক্ষেত্র হিসেবেও আগ্রহের সঙ্গে দেখে।",
      workTitle:"ফ্রিল্যান্স কাজ",
      workCopy:"Web development, SEO, digital technology, AI tools এবং UI ও UX নিয়ে ফ্রিল্যান্স কাজ করে।",
      mediaTitle:"YouTube ও এডিটিং",
      mediaCopy:"একটি YouTube channel চালায় এবং সেখানে AI assisted image ও video editing ব্যবহার করে।",
      languagesTitle:"ভাষা",
      languagesCopy:"",
      langBn:"বাংলা", langBnLevel:"মাতৃভাষা",
      langEn:"ইংরেজি", langEnLevel:"Full professional",
      langHi:"হিন্দি", langHiLevel:"Full professional",
      langUr:"উর্দু", langUrLevel:"Full professional",
      langJa:"জাপানি", langJaLevel:"Basic",
      note:""
    },
    vision: {
      eyebrow:"ভিশন",
      title:"দীর্ঘ পথের কিছু ধারণা",
      lead:"ভবিষ্যৎকে এখানে দাবির তালিকা হিসেবে নয়, বরং উদ্দেশ্যের ধারাবাহিকতা হিসেবে দেখানো হয়েছে। পরিকল্পনা এবং প্রতিষ্ঠিত কাজকে আলাদা রাখা হয়েছে।",
      year2026:"বাংলাদেশ ও এর বাইরের শিক্ষার্থীদের জন্য Bangla ও English medium উভয়কে সমর্থন করে এমন একটি AI powered educational platform এর পরিকল্পনা।",
      year2027:"শিক্ষামূলক প্ল্যাটফর্মের ধারণাটি এগিয়ে নেওয়া এবং যাদের জন্য এটি তৈরি করার পরিকল্পনা তাদের প্রয়োজনীয়তা নিয়ে শেখা।",
      year2030:"একটি AI focused startup একটি aspirational direction। এখনো কোনো startup প্রতিষ্ঠিত হয়নি।",
      year2035:"UN SDGs এর সঙ্গে সামঞ্জস্যপূর্ণ একটি social impact initiative বা NGO একটি aspirational direction। এখনো প্রতিষ্ঠিত নয়।",
      platformTitle:"AI education platform",
      platformCopy:"বাংলাদেশ ও এর বাইরের শিক্ষার্থীদের জন্য Bangla ও English medium উভয়কে সমর্থন করে এমন একটি AI powered educational platform তৈরির পরিকল্পনা।",
      startupTitle:"AI focused startup",
      startupCopy:"এটি একটি ভবিষ্যৎ আকাঙ্ক্ষা। এখনো কোনো startup প্রতিষ্ঠিত হয়নি।",
      impactTitle:"Social impact initiative",
      impactCopy:"UN SDGs এর সঙ্গে সামঞ্জস্যপূর্ণ একটি initiative বা NGO এর ভবিষ্যৎ আকাঙ্ক্ষা। এটি এখনো প্রতিষ্ঠিত নয়।",
      networkTitle:"ধারণা সংযোগের মাধ্যমে বড় হয়",
      networkCopy:"এই network visual সংযুক্ত সম্ভাবনার একটি রূপক। এটি কোনো প্রতিষ্ঠিত organization বা product এর প্রতিচ্ছবি নয়।"
    },
    projects: {
      eyebrow:"প্রকল্প",
      title:"তৈরি, চলমান ও কল্পিত",
      lead:"কাজের সৎ নথি। সম্পন্ন কাজের পাশাপাশি এখনো চলমান পরীক্ষা-নিরীক্ষা — প্রতিটি ধাপই আরও স্পষ্ট ধারণা ও শক্তিশালী ক্রাফটের দিকে।",
      navoraTitle:"NAVORA",
      navoraCopy:"একটি AI-চালিত ডিজিটাল ওয়ার্কস্পেস, যেখানে শেখা, কোডিং, গবেষণা এবং বুদ্ধিমান সহায়তা একই সংযুক্ত অভিজ্ঞতায় মিলে যায়। NAVORA জটিল কাজকে আরও সহজ, সহজলভ্য এবং অর্থবহ ওয়ার্কফ্লোতে রূপ দিতে চায়।",
      navoraNote:"AI ওয়ার্কস্পেস · শেখা + কোডিং + গবেষণা",
      jhaloraTitle:"JHALORA",
      jhaloraCopy:"একটি স্থানীয় খাবারের ব্যবসার জন্য অর্ডার ওয়েবসাইট। গ্রাহকরা স্পষ্ট ছবিসহ মেনু দেখে, কার্ট তৈরি করে এবং সরাসরি WhatsApp-এ অর্ডার পাঠায়। বিল্ট-ইন চ্যাট অ্যাসিস্ট্যান্ট তাৎক্ষণিকভাবে দাম ও উপাদান সম্পর্কে উত্তর দেয়।",
      jhaloraNote:"স্থানীয় কমার্স · WhatsApp অর্ডার + AI চ্যাট",
      cypherTitle:"CypherEnclave",
      cypherCopy:"লেখালেখি, গবেষণা, কোডিং এবং ডকুমেন্ট বিশ্লেষণের জন্য কল্পিত একটি প্রাইভেসি-কেন্দ্রিক AI ওয়ার্কস্পেস। CypherEnclave ব্যবহারকারীর নিয়ন্ত্রণ, ডেটা প্রাইভেসি এবং নিরাপদ AI ইন্টারঅ্যাকশনকে আরও বিশ্বস্ত ডিজিটাল অভিজ্ঞতার কেন্দ্রে রাখে।",
      cypherNote:"প্রাইভেসি-প্রথম AI · নিরাপদ লেখা ও গবেষণা",
      shopTitle:"স্থানীয় দোকানের ওয়েবসাইট",
      shopCopy:"একটি স্থানীয় দোকানের জন্য ওয়েবসাইট তৈরি করেছে এবং অন্যান্য সাইটের সঙ্গে affiliate marketing স্টাইলে লিংক করেছে। এরপর দোকানের বিক্রি বেড়েছে। এ ধরনের প্রথম প্রকল্প।",
      portfolioTitle:"Digital Universe portfolio",
      portfolioCopy:"এই পোর্টফোলিও ওয়েবসাইটটি বর্তমানে একটি চলমান ডিজিটাল ইউনিভার্স হিসেবে তৈরি হচ্ছে।",
      publicationTitle:"Artificial Intelligence and Human Perception: Exploring Bias, Influence and Decision Manipulation",
      publicationCopy:"Md Ataullah Al Mahmud Alif-এর প্রথম গবেষণা পেপার দেখায় কৃত্রিম বুদ্ধিমত্তা কীভাবে মানুষের উপলব্ধি গঠন করতে পারে, পক্ষপাত প্রভাবিত করতে পারে এবং সিদ্ধান্ত গ্রহণে প্রভাব ফেলতে পারে। SSRN-এ প্রিপ্রিন্ট হিসেবে পাওয়া যায়; AI যখন মানুষের চিন্তা ও বিচারকে প্রভাবিত করতে শুরু করে, তখন যে নৈতিক প্রশ্নগুলো ওঠে সেগুলোও এখানে আলোচিত।",
      publicationNote:"SSRN-এ প্রিপ্রিন্ট · প্রথম গবেষণা পেপার",
      educationTitle:"AI education platform",
      educationCopy:"বাংলাদেশ ও এর বাইরের শিক্ষার্থীদের জন্য Bangla ও English medium উভয়কে সমর্থন করে এমন একটি AI powered educational platform।",
      completedNote:"এ ধরনের প্রথম প্রকল্প",
      inProgressNote:"এই ওয়েবসাইট",
      plannedNote:"চলমান"
    },
    skills: {
      eyebrow:"দক্ষতা",
      title:"দক্ষতার একটি নক্ষত্রপুঞ্জ",
      lead:"দক্ষতাগুলোকে প্রগ্রেস বার নয়, বরং সংযুক্ত সক্ষমতা হিসেবে দেখানো হয়েছে। কিছু ব্যবহারিক শক্তি এবং কিছু এখনো শেখার পর্যায়ে।",
      center:"দক্ষতা",
      web:"Web Development",
      webCopy:"পরিষ্কার কাঠামো, চিন্তাশীল ডিজাইন এবং ব্যবহারিক কার্যকারিতার উপর জোর দিয়ে রেসপন্সিভ ও ইউজার-ফ্রেন্ডলি ওয়েবসাইট তৈরি।",
      aiDev:"AI-Assisted Development",
      aiDevCopy:"কীভাবে AI টুলস কোডিংয়ে সাহায্য করতে পারে, ওয়ার্কফ্লো সহজ করতে পারে, সমস্যা সমাধান করতে পারে এবং প্রাথমিক ধারণাকে কাজের প্রজেক্টে রূপ দিতে পারে — তা অন্বেষণ।",
      uiux:"UI/UX Design",
      uiuxCopy:"চিন্তাশীল লেআউট, স্পষ্ট ভিজ্যুয়াল হাইরার্কি এবং ব্যবহারকারী-কেন্দ্রিক ডিজাইন নীতির মাধ্যমে স্বজ্ঞাত ডিজিটাল অভিজ্ঞতা তৈরি।",
      seo:"SEO & Website Optimization",
      seoCopy:"ওয়েবসাইটের কাঠামো, খুঁজে পাওয়ার ক্ষমতা এবং সামগ্রিক ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে মৌলিক SEO অনুশীলন প্রয়োগ।",
      prompt:"AI & Prompt Engineering",
      promptCopy:"প্রম্পট পরিমার্জন এবং AI সক্ষমতা অন্বেষণ করে ধারণা তৈরি, কনটেন্ট উন্নতি এবং জটিল কাজ আরও কার্যকরভাবে সম্পন্ন করা।",
      video:"Video Editing & Content Creation",
      videoCopy:"AI-সহায়ক ভিজ্যুয়াল, ভিডিও এডিটিং, ভয়েস-ওভার, সাবটাইটেল এবং সৃজনশীল গল্প বলার মাধ্যমে ডিজিটাল কনটেন্ট তৈরি।",
      research:"Research & Analytical Thinking",
      researchCopy:"গঠনমূলক ইন্টারভিউ, গুণগত বিশ্লেষণ এবং গবেষণা-ভিত্তিক লেখার মাধ্যমে জটিল বিষয় অন্বেষণ করে অর্থবহ অন্তর্দৃষ্টি তৈরি।",
      frontend:"Frontend Development",
      frontendCopy:"HTML, CSS এবং JavaScript দিয়ে ইন্টারঅ্যাকটিভ ওয়েব ইন্টারফেস তৈরি — রেসপন্সিভ লেআউট, কার্যকরী কম্পোনেন্ট এবং ধারাবাহিক ব্যবহারকারীর অভিজ্ঞতার উপর জোর দিয়ে।",
      api:"API Integration",
      apiCopy:"API কীভাবে ওয়েবসাইটকে বাহ্যিক সার্ভিসের সঙ্গে সংযুক্ত করে, ডেটা আদান-প্রদান এবং AI-চালিত ফিচার ইন্টিগ্রেশন সম্ভব করে — তা অন্বেষণ।",
      cyber:"Cybersecurity Fundamentals",
      cyberCopy:"ডিজিটাল নিরাপত্তা, ডেটা প্রাইভেসি এবং আরও নিরাপদ ও বিশ্বস্ত সিস্টেম তৈরির নীতিমালা সম্পর্কে ধারণা গড়ে তোলা।",
      ai:"AI Tools", python:"Python basics", data:"Data Analytics", teaching:"Teaching", leadership:"Leadership",
      dataNote:"IBM SkillsBuild", aiNote:"IBM SkillsBuild"
    },
    journey: {
      eyebrow:"যাত্রা",
      title:"অভিজ্ঞতা একটি পথ রেখে যায়",
      lead:"সেবা, প্রশিক্ষণ, শিক্ষাদান, সংগঠন এবং শিক্ষার্থী কমিউনিটি সম্পৃক্ততার একটি টাইমলাইন।",
      redTitle:"স্বেচ্ছাসেবক — বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি",
      redCopy:"বাংলাদেশ রেড ক্রিসেন্ট সোসাইটির সদস্য হিসেবে কমিউনিটি সার্ভিস, বন্যা ত্রাণ, স্বাস্থ্য সচেতনতা ক্যাম্পেইন এবং ত্রাণ বিতরণে অংশ নিয়েছেন। যোগাযোগ, টিমওয়ার্ক এবং সামাজিক দায়িত্ববোধ আরও মজবুত হয়েছে।",
      bnccTitle:"ক্যাডেট — বাংলাদেশ ন্যাশনাল ক্যাডেট কোর (BNCC)",
      bnccCopy:"BNCC-এর অধীনে সামরিক ধাঁচের প্রশিক্ষণ সম্পন্ন করেছেন — ড্রিল, ক্যাম্পিং এবং দলীয় অনুশীলনসহ। শৃঙ্খলা, নেতৃত্ব, টিমওয়ার্ক, সমস্যা সমাধান এবং চ্যালেঞ্জিং পরিস্থিতিতে মানিয়ে নেওয়ার দক্ষতা গড়ে উঠেছে।",
      teachingTitle:"বিনামূল্যে শিক্ষাদান",
      teachingCopy:"শেরপুরে প্রায় এক বছর ধরে প্রায় ৫ জন শিক্ষার্থীকে গণিত ও বিজ্ঞান বিনামূল্যে পড়িয়েছেন।",
      organizingTitle:"স্কুল সাংস্কৃতিক অনুষ্ঠান",
      organizingCopy:"প্রায় ৫০০ জন মানুষের উপস্থিতিতে অনুষ্ঠিত একটি স্কুল সাংস্কৃতিক অনুষ্ঠানের প্রধান আয়োজক কমিটির সদস্য ছিলেন।",
      scienceTitle:"ঢাকা সিটি কলেজ সায়েন্স ক্লাব",
      scienceCopy:"একাডেমিক আলোচনা ও বিজ্ঞান-সংক্রান্ত কার্যক্রমে অংশগ্রহণ। সমস্যা সমাধান ও ছোট দলীয় প্রজেক্টে কাজ। সমালোচনামূলক চিন্তা ও টিমওয়ার্ক দক্ষতা উন্নত হয়েছে।",
      artsTitle:"ঢাকা সিটি কলেজ আর্টস অ্যান্ড ক্রাফটস ক্লাব",
      artsCopy:"সৃজনশীল কর্মশালা ও সহযোগিতামূলক প্রজেক্টে অংশগ্রহণ। ইভেন্ট ও দলীয় কার্যক্রম আয়োজনে সহায়তা। সৃজনশীলতা, টিমওয়ার্ক ও যোগাযোগ দক্ষতা বাড়েছে।",
      redDate:"এপ্রিল ২০২০ থেকে মার্চ ২০২১",
      bnccDate:"এপ্রিল ২০২১ থেকে মার্চ ২০২৪",
      teachingDate:"প্রায় এক বছর",
      organizingDate:"স্কুল অভিজ্ঞতা",
      scienceDate:"অক্টোবর ২০২৪ থেকে অক্টোবর ২০২৫",
      artsDate:"অক্টোবর ২০২৪ থেকে অক্টোবর ২০২৫"
    },
    certificates: {
      eyebrow:"সনদ",
      title:"শেখার প্রমাণ",
      lead:"এখানকার প্রতিটি সনদ বাস্তব দক্ষতার স্বীকৃতি। সাইবারসিকিউরিটি ও AI থেকে ডেটা অ্যানালিটিক্স, ওপেন সায়েন্স ও কমিউনিটি ইমপ্যাক্ট পর্যন্ত, বিশ্বমানের প্রতিষ্ঠান থেকে অর্জিত এই সনদগুলো শেখার প্রতি ধারাবাহিক প্রতিশ্রুতির প্রমাণ।",
      deloitteTitle:"Deloitte Cyber Job Simulation",
      deloitteIssuer:"Deloitte via Forage",
      deloitteDate:"২২ জুলাই ২০২৬",
      deloitteNote:"• বাস্তবসম্মত সিমুলেটেড সিকিউরিটি সিনারিওর মাধ্যমে সাইবারসিকিউরিটি নীতি প্রয়োগ করেছেন।\n• সিকিউরিটি অ্যানালাইসিস, ওয়েব সিকিউরিটি ও নেটওয়ার্কিং দক্ষতা শক্তিশালী করেছেন।",
      unicefTitle:"Community Engagement for Behaviour and Social Change in CCCs in Humanitarian Action",
      unicefIssuer:"UNICEF via Agora",
      unicefDate:"২১ জুলাই ২০২৬",
      unicefNote:"• কমিউনিটি এনগেজমেন্ট ও সামাজিক আচরণ পরিবর্তন বিষয়ে জ্ঞান অর্জন করেছেন।\n• মানবিক প্রোগ্রামিং ও মনিটরিং অনুশীলন সম্পর্কে ধারণা পেয়েছেন।",
      ibmTitle:"Data Analytics for Sustainability",
      ibmIssuer:"IBM SkillsBuild",
      ibmDate:"৩০ আগস্ট ২০২৬",
      ibmNote:"Data Analytics for Sustainability এর প্রয়োজনীয়তা সম্পন্ন।",
      nasaTitle:"Open Science Essentials",
      nasaIssuer:"NASA",
      nasaDate:"১৮ আগস্ট ২০২৬",
      nasaNote:"• ওপেন সায়েন্স, ওপেন ডেটা এবং পুনরুৎপাদনযোগ্য গবেষণা বিষয়ে জ্ঞান অর্জন করেছেন।\n• স্বচ্ছ ও সহযোগিতামূলক বৈজ্ঞানিক অনুশীলনের ব্যবহারিক ধারণা পেয়েছেন।",
      pythonTitle:"Python Essentials 1",
      pythonIssuer:"Cisco Networking Academy + OpenEDG Python Institute",
      pythonDate:"০৫ আগস্ট ২০২৬",
      pythonNote:"• Python Essentials 1 এর মাধ্যমে পাইথন প্রোগ্রামিং ও সমস্যা সমাধানের মৌলিক দক্ষতা অর্জন করেছেন।\n• Python 3 প্রোগ্রাম লেখা, ডিবাগ ও চালানোর ব্যবহারিক অভিজ্ঞতা পেয়েছেন।",
      aiTitle:"Artificial Intelligence Fundamentals",
      aiIssuer:"IBM SkillsBuild",
      aiDate:"০৬ সেপ্টেম্বর ২০২৬",
      aiNote:"Artificial Intelligence Fundamentals এর প্রয়োজনীয়তা সম্পন্ন।"
    },
    contact: {
      eyebrow:"যোগাযোগ",
      title:"গেটওয়ে খুলুন",
      lead:"কন্টাক্ট ফর্ম আপনার ইমেইল অ্যাপ খুলে দেবে। সোশ্যাল লিংকগুলো ব্যবহারের জন্য প্রস্তুত।",
      name:"নাম",
      email:"ইমেইল",
      message:"বার্তা",
      namePlaceholder:"আপনার নাম",
      emailPlaceholder:"আপনার ইমেইল",
      messagePlaceholder:"আপনার বার্তা",
      socialTitle:"সামাজিক যোগাযোগ",
      formInvite:"এক ট্যাপেই আমার প্রোফাইল দেখুন।",
      socialInvite:"এক ট্যাপেই আমার প্রোফাইল দেখুন।",
      formNote:"আপনার ইমেইল অ্যাপে বার্তা প্রস্তুত হয়ে খুলবে।",
      missingEmail:"কন্টাক্ট ইমেইল এখনো placeholder। প্রকাশের আগে main.js এ যোগ করুন।",
      missingSocial:"এই সোশ্যাল লিংক এখনো placeholder। প্রকাশের আগে main.js এ যোগ করুন।"
    },
    footer: {
      name:"Md Ataullah Al Mahmud Alif",
      copy:"Building Opportunities for a Better Future",
      quick:"দ্রুত লিংক",
      connect:"যোগাযোগ",
      rights:"ব্যক্তিগত পোর্টফোলিও",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact"
    },
    seo: {
      homeTitle:"Ataullah Al Mahmud | Md Ataullah Al Mahmud Alif",
      homeDesc:"Ataullah Al Mahmud, যিনি Alif নামেও পরিচিত, তার portfolio। প্রযুক্তি, ধারণা, digital work এবং ভবিষ্যৎ সম্ভাবনা নিয়ে শেখা ও কাজের portfolio।",
      aboutTitle:"পরিচয় | Ataullah Al Mahmud",
      aboutDesc:"Md Ataullah Al Mahmud Alif এর পরিচয়, আগ্রহ, digital work, শিক্ষা এবং ভাষা।",
      visionTitle:"ভিশন | Ataullah Al Mahmud",
      visionDesc:"Md Ataullah Al Mahmud Alif এর future vision, planned education technology work এবং aspirational direction।",
      projectsTitle:"প্রকল্প | Ataullah Al Mahmud",
      projectsDesc:"Md Ataullah Al Mahmud Alif এর completed work, in progress portfolio, research preprint এবং planned ideas।",
      skillsTitle:"দক্ষতা | Ataullah Al Mahmud",
      skillsDesc:"Md Ataullah Al Mahmud Alif এর web development, SEO, AI tools, cybersecurity এবং অন্যান্য skill।",
      journeyTitle:"যাত্রা | Ataullah Al Mahmud",
      journeyDesc:"Md Ataullah Al Mahmud Alif এর service, training, teaching, organizing এবং student club journey।",
      certificatesTitle:"সনদ | Ataullah Al Mahmud",
      certificatesDesc:"Md Ataullah Al Mahmud Alif এর learning credentials এবং simulations।",
      contactTitle:"যোগাযোগ | Ataullah Al Mahmud",
      contactDesc:"Email এবং social links এর মাধ্যমে Md Ataullah Al Mahmud Alif এর সঙ্গে যোগাযোগ করুন।"
    }
  }
};

const pageMeta = {
  index: ["seo.homeTitle","seo.homeDesc"],
  about: ["seo.aboutTitle","seo.aboutDesc"],
  vision: ["seo.visionTitle","seo.visionDesc"],
  projects: ["seo.projectsTitle","seo.projectsDesc"],
  skills: ["seo.skillsTitle","seo.skillsDesc"],
  journey: ["seo.journeyTitle","seo.journeyDesc"],
  certificates: ["seo.certificatesTitle","seo.certificatesDesc"],
  contact: ["seo.contactTitle","seo.contactDesc"]
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pointerFine = window.matchMedia("(pointer: fine)").matches;
const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];

function getPathValue(obj, path){
  return path.split(".").reduce((value,key)=>value?.[key],obj);
}

function safeStorageGet(key){
  try{return localStorage.getItem(key)}catch{return null}
}
function safeStorageSet(key,value){
  try{localStorage.setItem(key,value)}catch{}
}

function applyLanguage(lang){
  const activeLang = I18N[lang] ? lang : "en";
  document.documentElement.lang = activeLang === "bn" ? "bn" : "en";
  document.documentElement.dir = "ltr";
  $$("[data-i18n]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18n);
    if(value !== undefined) el.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18nPlaceholder);
    if(value !== undefined) el.setAttribute("placeholder",value);
  });
  $$("[data-i18n-aria]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18nAria);
    if(value !== undefined) el.setAttribute("aria-label",value);
  });
  $$("[data-i18n-title]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18nTitle);
    if(value !== undefined) el.setAttribute("title",value);
  });
  const page = document.body.dataset.page || "index";
  const meta = pageMeta[page];
  if(meta){
    document.title = getPathValue(I18N[activeLang],meta[0]);
    const description = $('meta[name="description"]');
    if(description) description.content = getPathValue(I18N[activeLang],meta[1]);
    const ogTitle = $('meta[property="og:title"]');
    const ogDesc = $('meta[property="og:description"]');
    if(ogTitle) ogTitle.content = getPathValue(I18N[activeLang],meta[0]);
    if(ogDesc) ogDesc.content = getPathValue(I18N[activeLang],meta[1]);
  }
  const button = $("#language-toggle");
  if(button) button.textContent = getPathValue(I18N[activeLang],"common.language");
  safeStorageSet("du-language",activeLang);
  document.dispatchEvent(new CustomEvent("languagechange",{detail:{lang:activeLang}}));
}

function initLanguage(){
  const saved = safeStorageGet("du-language");
  applyLanguage(saved === "bn" ? "bn" : "en");
  $("#language-toggle")?.addEventListener("click",()=>{
    const next = document.documentElement.lang === "bn" ? "en" : "bn";
    applyLanguage(next);
  });
}

function initTheme(){
  const saved = safeStorageGet("du-theme");
  const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = saved || (systemLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
  $("#theme-toggle")?.addEventListener("click",()=>{
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    safeStorageSet("du-theme",next);
    document.dispatchEvent(new CustomEvent("themechange",{detail:{theme:next}}));
  });
}

function initNavigation(){
  const page = document.body.dataset.page || "index";
  $$("[data-page-link]").forEach(link=>{
    const target = link.getAttribute("href")?.replace(".html","").replace("./","");
    if((page === "index" && (target === "" || target === "index")) || target === page){
      link.setAttribute("aria-current","page");
    }
    link.addEventListener("click",event=>{
      const href = link.getAttribute("href");
      if(!href || href.startsWith("#")) return;
      if(prefersReducedMotion || event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target==="_blank") return;
      if(link.pathname===window.location.pathname) { event.preventDefault(); return; }
      event.preventDefault();
      document.body.classList.add("is-transitioning");
      window.setTimeout(()=>window.location.href = href,170);
    });
  });

  const menu = $("#mobile-menu");
  const menuButton = $("#menu-toggle");
  const closeMenu = ()=>{
    menu?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded","false");
  };
  menuButton?.addEventListener("click",()=>{
    const open = !menu?.classList.contains("is-open");
    menu?.classList.toggle("is-open",open);
    document.body.classList.toggle("menu-open",open);
    menuButton.setAttribute("aria-expanded",String(open));
  });
  $$(".mobile-links a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",e=>{
    if(e.key === "Escape") closeMenu();
  });
}

function initCursor(){
  if(!pointerFine || prefersReducedMotion) return;
  const dot = $("#cursor-dot"), ring = $("#cursor-ring");
  if(!dot || !ring) return;
  document.body.classList.add("cursor-active");
  let x=window.innerWidth/2,y=window.innerHeight/2,rx=x,ry=y;
  window.addEventListener("pointermove",e=>{
    x=e.clientX;y=e.clientY;
    dot.style.left=`${x}px`;dot.style.top=`${y}px`;
  },{passive:true});
  const render=()=>{
    rx+=(x-rx)*.18;ry+=(y-ry)*.18;
    ring.style.left=`${rx}px`;ring.style.top=`${ry}px`;
    requestAnimationFrame(render);
  };
  render();
  $$("a,button,.card,input,textarea").forEach(el=>{
    el.addEventListener("mouseenter",()=>document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave",()=>document.body.classList.remove("cursor-hover"));
  });
}

function initReveals(){
  const items = $$(".reveal,[data-split]");
  if(prefersReducedMotion){items.forEach(el=>el.classList.add("is-visible"));return;}
  /* Show above-the-fold reveals immediately so page never looks blank */
  const vh = window.innerHeight || 800;
  items.forEach(el=>{
    if(el.dataset.split !== undefined && !el.dataset.splitReady){
      const text=el.textContent.trim();
      el.textContent="";
      let index=0;
      text.split(/\s+/).forEach((word,wi,arr)=>{
        const w=document.createElement("span");
        w.className="word";
        const parts=(typeof Intl!=="undefined" && Intl.Segmenter)
          ? [...new Intl.Segmenter(undefined,{granularity:"grapheme"}).segment(word)].map(s=>s.segment)
          : [...word];
        parts.forEach(char=>{
          const span=document.createElement("span");
          span.className="char";
          span.textContent=char;
          span.style.transitionDelay=`${Math.min(index*0.01,.4)}s`;
          index++;
          w.appendChild(span);
        });
        el.appendChild(w);
        if(wi<arr.length-1) el.appendChild(document.createTextNode(" "));
        index++;
      });
      el.dataset.splitReady="true";
    }
    const r = el.getBoundingClientRect();
    if(r.top < vh * 1.15) el.classList.add("is-visible");
  });
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.08, rootMargin:"0px 0px 12% 0px"});
  items.forEach(el=>{
    if(!el.classList.contains("is-visible")) observer.observe(el);
  });
  /* Absolute fail-safe: everything visible after 1.5s */
  window.setTimeout(()=>items.forEach(el=>el.classList.add("is-visible")),1500);
}

function initCards(){
  if(!pointerFine || prefersReducedMotion) return;
  $$(".card").forEach(card=>{
    card.addEventListener("pointermove",e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width;
      const y=(e.clientY-r.top)/r.height;
      card.style.setProperty("--mx",`${x*100}%`);
      card.style.setProperty("--my",`${y*100}%`);
      card.style.transform=`perspective(900px) rotateX(${(0.5-y)*4}deg) rotateY(${(x-0.5)*4}deg) translateY(-5px)`;
    });
    card.addEventListener("pointerleave",()=>{
      card.style.transform="";
    });
  });
}

function initMagnetic(){
  if(!pointerFine || prefersReducedMotion) return;
  $$(".magnetic").forEach(el=>{
    el.addEventListener("pointermove",e=>{
      const r=el.getBoundingClientRect();
      const x=e.clientX-(r.left+r.width/2);
      const y=e.clientY-(r.top+r.height/2);
      el.style.transform=`translate(${x*.12}px,${y*.12}px)`;
    });
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });
}

function initBackTop(){
  const btn=$("#back-top");
  if(!btn) return;
  const update=()=>btn.classList.toggle("is-visible",window.scrollY>700);
  window.addEventListener("scroll",update,{passive:true});
  btn.addEventListener("click",()=>window.scrollTo({top:0,behavior:prefersReducedMotion?"auto":"smooth"}));
  update();
}

function initTimeline(){
  const timeline=$(".timeline");
  if(!timeline) return;
  const progress=timeline.querySelector(".timeline-progress");
  const items=$$(".timeline-item",timeline);
  const update=()=>{
    const r=timeline.getBoundingClientRect();
    const viewport=window.innerHeight;
    const ratio=Math.max(0,Math.min(1,(viewport*.72-r.top)/(r.height-viewport*.18)));
    if(progress) progress.style.setProperty("--progress",`${ratio*100}%`);
    items.forEach(item=>{
      const ir=item.getBoundingClientRect();
      item.classList.toggle("is-active",ir.top<viewport*.72 && ir.bottom>viewport*.18);
    });
  };
  window.addEventListener("scroll",update,{passive:true});
  update();
}

function createCanvasController(canvas,draw){
  if(!canvas) return null;
  const ctx=canvas.getContext("2d");
  if(!ctx) return null;
  let width=0,height=0,dpr=1,visible=true,frame=0,last=0;
  const resize=()=>{
    const rect=canvas.getBoundingClientRect();
    dpr=Math.min(window.devicePixelRatio||1,2);
    width=Math.max(1,Math.floor(rect.width));
    height=Math.max(1,Math.floor(rect.height));
    canvas.width=Math.floor(width*dpr);canvas.height=Math.floor(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  };
  const observer=new IntersectionObserver(entries=>{
    visible=entries[0]?.isIntersecting ?? true;
    if(visible && !prefersReducedMotion) start();
  },{threshold:0.01});
  observer.observe(canvas);
  const start=()=>{if(frame||prefersReducedMotion||!visible)return;frame=requestAnimationFrame(loop)};
  const loop=time=>{
    frame=0;
    if(!visible)return;
    const dt=Math.min((time-last)/1000||.016,.04);last=time;
    ctx.clearRect(0,0,width,height);
    draw(ctx,width,height,dt,time/1000);
    frame=requestAnimationFrame(loop);
  };
  window.addEventListener("resize",resize,{passive:true});
  resize();
  if(prefersReducedMotion){draw(ctx,width,height,0,0)}
  else start();
  return {resize};
}

function initHomeParticles(){
  const canvas=$("#home-canvas");
  if(!canvas || prefersReducedMotion || window.innerWidth<700) return;
  const particles=[];
  const orbs=[];
  let mouse={x:-9999,y:-9999};
  createCanvasController(canvas,(ctx,w,h,dt,t)=>{
    const bg=getComputedStyle(document.body).getPropertyValue("--bg").trim()||"#0b0f0d";
    const dark=bg.startsWith("#0")||bg.startsWith("#1")||bg.includes("8,")||document.documentElement.dataset.theme==="dark";

    const g=ctx.createRadialGradient(w*.5+Math.sin(t*.2)*50,h*.3,0,w*.5,h*.45,Math.max(w,h)*.75);
    g.addColorStop(0, dark?"rgba(255,90,54,.07)":"rgba(255,90,54,.045)");
    g.addColorStop(.45, dark?"rgba(201,168,76,.03)":"rgba(201,168,76,.02)");
    g.addColorStop(1,"transparent");
    ctx.fillStyle=g;ctx.fillRect(0,0,w,h);

    // subtle floor grid (perspective)
    ctx.save();
    ctx.strokeStyle=dark?"rgba(255,255,255,.028)":"rgba(20,28,24,.04)";
    ctx.lineWidth=1;
    const horizon=h*.4;
    const vx=w*.5+Math.sin(t*.12)*24;
    for(let i=1;i<=12;i++){
      const y=horizon+(h-horizon)*Math.pow(i/12,1.6);
      ctx.globalAlpha=.35+i/12*.65;
      ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();
    }
    ctx.globalAlpha=1;
    for(let i=-10;i<=10;i++){
      ctx.beginPath();
      ctx.moveTo(vx,horizon);
      ctx.lineTo(w*.5+i*(w*.5),h+10);
      ctx.stroke();
    }
    ctx.restore();

    const count=Math.max(12,Math.min(window.innerWidth<700?36:130,Math.floor(w*h/(window.innerWidth<700?16000:8200))));
    while(particles.length<count){
      particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,r:Math.random()*1.7+.4,ph:Math.random()*6});
    }
    particles.length=count;
    while(orbs.length<5){
      orbs.push({x:Math.random()*w,y:Math.random()*h*.7,r:50+Math.random()*70,sp:.12+Math.random()*0.2,ph:Math.random()*6});
    }
    orbs.forEach(o=>{
      o.x+=Math.sin(t*o.sp+o.ph)*.2;
      o.y+=Math.cos(t*o.sp*.7+o.ph)*.15;
      const og=ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r);
      og.addColorStop(0,dark?"rgba(255,90,54,.06)":"rgba(255,90,54,.04)");
      og.addColorStop(1,"transparent");
      ctx.fillStyle=og;ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);ctx.fill();
    });

    particles.forEach(p=>{
      const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.hypot(dx,dy);
      if(dist<170&&dist>1){p.vx-=dx/dist*.022;p.vy-=dy/dist*.022}
      p.x+=p.vx;p.y+=p.vy;p.vx*=.996;p.vy*=.996;p.ph+=dt*1.4;
      if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
      const pr=p.r*(1+Math.sin(p.ph)*.18);
      ctx.beginPath();ctx.arc(p.x,p.y,pr,0,Math.PI*2);
      ctx.fillStyle=dark?"rgba(244,241,232,.55)":"rgba(25,35,30,.4)";
      ctx.fill();
    });
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i],b=particles[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<125){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(255,90,54,${(1-d/125)*.2})`;
          ctx.lineWidth=.75;ctx.stroke();
        }
      }
    }
    if(mouse.x>0){
      const cg=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,100);
      cg.addColorStop(0,"rgba(255,90,54,.1)");cg.addColorStop(1,"transparent");
      ctx.fillStyle=cg;ctx.beginPath();ctx.arc(mouse.x,mouse.y,100,0,Math.PI*2);ctx.fill();
    }
  });
  canvas.addEventListener("pointermove",e=>{
    const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;
  });
  canvas.addEventListener("pointerleave",()=>{mouse={x:-9999,y:-9999}});
}

function initNetworkCanvas(){
  const canvas=$("#network-canvas");
  if(!canvas || prefersReducedMotion) return;
  const nodes=[];
  createCanvasController(canvas,(ctx,w,h,dt,t)=>{
    const dark=getComputedStyle(document.body).getPropertyValue("--bg").trim().startsWith("#0");
    const n=Math.max(10,Math.min(window.innerWidth<700?18:42,Math.floor(w/(window.innerWidth<700?55:36))));
    while(nodes.length<n){
      nodes.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:2+Math.random()*2});
    }
    nodes.length=n;
    nodes.forEach(p=>{
      p.x+=p.vx+Math.sin(t*.4+p.x*.01)*.05;
      p.y+=p.vy+Math.cos(t*.35+p.y*.01)*.05;
      if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
    });
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<140){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(255,90,54,${(1-d/140)*.16})`;ctx.lineWidth=.7;ctx.stroke();
        }
      }
    }
    nodes.forEach(p=>{
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=dark?"rgba(244,241,232,.7)":"rgba(30,40,35,.55)";ctx.fill();
      ctx.beginPath();ctx.arc(p.x,p.y,p.r*3.5,0,Math.PI*2);
      ctx.fillStyle="rgba(255,90,54,.06)";ctx.fill();
    });
  });
}

function initSkillsCanvas(){
  const canvas=$("#skills-canvas");
  if(!canvas || prefersReducedMotion) return;
  const nodes=[];
  let mouse={x:-9999,y:-9999};
  createCanvasController(canvas,(ctx,w,h,dt,t)=>{
    const n=Math.max(8,Math.min(window.innerWidth<700?14:34,Math.floor(w/(window.innerWidth<700?70:48))));
    while(nodes.length<n){
      nodes.push({x:Math.random()*w,y:Math.random()*h,ox:0,oy:0,vx:0,vy:0,r:2.5+Math.random()*2,ph:Math.random()*6});
      nodes[nodes.length-1].ox=nodes[nodes.length-1].x;
      nodes[nodes.length-1].oy=nodes[nodes.length-1].y;
    }
    nodes.length=n;
    nodes.forEach((p,i)=>{
      const tx=p.ox+Math.sin(t*.5+p.ph)*18;
      const ty=p.oy+Math.cos(t*.4+p.ph)*14;
      const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.hypot(dx,dy);
      if(dist<120&&dist>1){p.vx-=dx/dist*.4;p.vy-=dy/dist*.4}
      p.vx+=(tx-p.x)*.02;p.vy+=(ty-p.y)*.02;
      p.vx*=.9;p.vy*=.9;p.x+=p.vx;p.y+=p.vy;
    });
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<150){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(201,168,76,${(1-d/150)*.2})`;ctx.lineWidth=.8;ctx.stroke();
        }
      }
    }
    nodes.forEach(p=>{
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle="rgba(255,90,54,.75)";ctx.fill();
    });
  });
  canvas.addEventListener("pointermove",e=>{
    const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;
  });
  canvas.addEventListener("pointerleave",()=>{mouse={x:-9999,y:-9999}});
}


function initForm(){
  const form=$("#contact-form");
  if(!form) return;
  form.addEventListener("submit",event=>{
    event.preventDefault();
    const email=CONFIG.contactEmail.trim();
    if(!email || email.includes("[YOUR-EMAIL]")){
      const note=$("#form-note");
      if(note) note.textContent=I18N[document.documentElement.lang==="bn"?"bn":"en"].contact.missingEmail;
      return;
    }
    const data=new FormData(form);
    const subject=`Portfolio message from ${String(data.get("name")||"Visitor")}`;
    const body=[
      `Name: ${data.get("name")||""}`,
      `Email: ${data.get("email")||""}`,
      "",
      String(data.get("message")||"")
    ].join("\n");
    window.location.href=`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initPlaceholders(){
  $$("[data-placeholder=\"future-project\"]").forEach(el=>el.textContent=CONFIG.futureProjectLabel);
}

function initSocials(){
  const map=CONFIG.socialLinks;
  $$("[data-social]").forEach(link=>{
    const key=link.dataset.social;
    const value=map[key];
    if(!value || value.includes("[YOUR-")){
      link.setAttribute("href","#");
      link.setAttribute("aria-disabled","true");
      link.addEventListener("click",e=>{
        e.preventDefault();
        const note=$("#social-note");
        if(note) note.textContent=I18N[document.documentElement.lang==="bn"?"bn":"en"].contact.missingSocial;
      });
    }else{
      link.href=value;
      link.target="_blank";
      link.rel="noopener noreferrer";
    }
  });
}

function initPublicationLink(){
  const btn = $("#publication-link");
  if(btn && CONFIG.publicationUrl){
    btn.href = CONFIG.publicationUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  }
}

function initOrbit(){
  const orbit=$("#orbit-spin");
  if(!orbit || prefersReducedMotion) return;
  const items=$$(".orbit-item",orbit);
  const setState=state=>{
    orbit.style.animationPlayState=state;
    items.forEach(el=>el.style.animationPlayState=state);
  };
  orbit.addEventListener("pointerenter",()=>setState("paused"));
  orbit.addEventListener("pointerleave",()=>setState("running"));
}

window.addEventListener("pageshow",()=>document.body.classList.remove("is-transitioning"));

document.addEventListener("DOMContentLoaded",()=>{
  /* Critical path — paint content ASAP */
  initLanguage();
  initTheme();
  initNavigation();
  initReveals();
  initForm();
  initSocials();
  initPlaceholders();
  initPublicationLink();
  const year = $("#year");
  if(year) year.textContent = String(new Date().getFullYear());

  /* Secondary interactions — next frame */
  requestAnimationFrame(()=>{
    initCursor();
    initCards();
    initMagnetic();
    initBackTop();
    initTimeline();
    initOrbit();
  });

  /* Heavy 2D canvases — only when idle / after first paint */
  const runHeavy = ()=>{
    try{ initHomeParticles(); }catch(e){}
    try{ initNetworkCanvas(); }catch(e){}
    try{ initSkillsCanvas(); }catch(e){}
  };
  if(window.requestIdleCallback){
    window.requestIdleCallback(runHeavy,{timeout:1800});
  }else{
    window.setTimeout(runHeavy,600);
  }
});

/* 3D + ambience layer: universe.js is loaded by a <script defer> tag in each page */
