export const siteConfig = {
    name: "Omar Elksass",
    title: "Omar Elksass | Mid-Level Backend Developer",
    role: "Mid-Level Backend Developer",
    description:
        "Mid-level backend developer delivering reliable, secure, and scalable platforms with Node.js, NestJS, and cloud-native tooling.",
    url: "https://www.omarelksass.com",
    ogImage: "https://dummyimage.com/1200x630/020617/ffffff&text=Omar+Elksass",
    location: "Egypt",
    email: "qsasomar@gmail.com",
    phone: "+20 1033069068",
    whatsapp: "https://wa.me/201033069068",
    social: {
        linkedin: "https://www.linkedin.com/in/omar-elksass/",
        github: "https://github.com/Elksass315",
    },
};

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
];

export const heroHighlights = [
    {
        title: "Production-grade APIs",
        description:
            "Architected fault-tolerant REST and real-time APIs handling high-growth user bases with predictable performance baselines.",
    },
    {
        title: "Cloud-native Delivery",
        description:
            "Containerized workloads with Docker, orchestrated CI/CD pipelines, and observability-first deployments on AWS.",
    },
    {
        title: "Security & Reliability",
        description:
            "Implemented robust authentication, audit logging, and performance profiling to safeguard mission-critical data flows.",
    },
];

export const experienceTimeline = [
    {
        company: "AIOT Groupe",
        role: "Backend Engineer",
        period: "Oct 2024 – Present",
        summary:
            "Scaling web platforms with resilient service architecture and data pipelines tailored for industrial workloads.",
        achievements: [
            "Designed and implemented Node.js, Express, and NestJS services supporting high-throughput messaging.",
            "Optimized MongoDB and PostgreSQL schemas to reduce query latency and improve throughput across analytics workloads.",
            "Partnered with frontend squads to contract APIs and streamline release cadences through typed clients.",
            "Hardened delivery pipelines with Dockerized builds, Nginx gateways, and automated AWS deployments.",
        ],
        tech: ["Node.js", "NestJS", "Express.js", "MongoDB", "PostgreSQL", "AWS"],
    },
    {
        company: "Estqrar",
        role: "Backend Engineer (Part-Time)",
        period: "Mar 2025 – Present",
        summary:
            "Owning the social platform backbone powering community, payments, and trust signals for a scaling marketplace.",
        achievements: [
            "Delivered the core messaging and discovery services with resilient data modeling and efficient search indices.",
            "Implemented secure authentication, billing, and settlement flows using JWT, sessions, and third-party payment APIs.",
            "Embedded real-time chat with Socket.IO, ensuring consistent presence states and fault-tolerant delivery.",
            "Maintained infrastructure, observability dashboards, and GitHub Actions-driven CI/CD pipelines.",
        ],
        tech: ["Node.js", "Socket.IO", "PostgreSQL", "Redis", "Docker", "CI/CD"],
    },
    {
        company: "Travel Sync",
        role: "Backend Engineer",
        period: "Aug 2024 – Mar 2025",
        summary:
            "Shaping travel automation APIs across bookings, payments, and partner integrations with a focus on resiliency.",
        achievements: [
            "Engineered REST services connecting airlines, hotels, and payment gateways with clear SLAs and monitoring.",
            "Introduced caching and queueing layers that improved request throughput and smoothed downstream constraints.",
            "Improved response times by 40% through query optimization, indexing strategy, and query tracing routines.",
            "Launched scalable infrastructure with automated rollouts, canary testing, and health-driven autoscaling.",
        ],
        tech: ["Node.js", "Express.js", "MongoDB", "Redis", "AWS", "Docker"],
    },
];

export const projectShowcase = [
    {
        title: "The Poultry",
        description:
            "Intelligent poultry management platform with AI-driven diagnostics, B2B marketplace workflows, and pharma calculators.",
        stats: ["75k+ active users", "AI chatbot & CV diagnostics", "End-to-end supply chain tooling"],
        tech: ["Node.js", "MongoDB", "Express", "Docker"],
        linkLabel: "Play Store",
        linkUrl: "https://play.google.com/store",
        image: "/images/projects/the-poultry.webp",
    }, {
        title: "Estqrar",
        description:
            "Community-first marriage platform with real-time chat, payments, and an insight-rich admin experience.",
        stats: ["40k+ community members", "Realtime chat", "Payment integrations"],
        tech: ["Node.js", "Socket.IO", "PostgreSQL", "AWS"],
        linkLabel: "Product Tour",
        linkUrl: "https://play.google.com/store/apps/details?id=com.astqrar.com",
        image: "/images/projects/estqrar.png",
    },
    {
        title: "HERC Clinic",
        description:
            "Full medical clinic management system with patient CRM, appointment scheduling, and automated billing.",
        stats: ["Patient CRM", "ERP", "Automated billing", "Role-based access"],
        tech: ["Node.js", "PostgreSQL", "Express", "Docker"],
        linkLabel: "Product Info",
        image: "/images/projects/hers-clinics.png",
    },
    {
        title: "Souvenir App",
        description:
            "Educational platform for language learning with video/audio lectures, interactive comments, and Q&A features.",
        stats: ["Video/audio lectures", "Multi-role system", "Free & paid courses"],
        tech: ["Node.js", "MongoDB", "Express", "AWS"],
        linkLabel: "Learn More",
        linkUrl: "https://play.google.com/store/apps/details?id=com.aoit.souvenir.prod",
        image: "/images/projects/souvenir.png",
    },
    {
        title: "Agri-tech 360",
        description:
            "AI-powered agriculture platform with crop recommendation and plant disease detection capabilities.",
        stats: ["AI crop recommendations", "Disease detection", "IoT soil analysis integration"],
        tech: ["Node.js", "AI/ML", "IoT", "MongoDB"],
        linkLabel: "View Project",
        image: "/images/projects/agri-tech-360.png",
    },
    {
        title: "CV ATS Master",
        description:
            "Professional CV builder app with PDF export, supporting Arabic and English with multiple templates.",
        stats: ["100K+ downloads", "Multi-language support", "PDF export"],
        tech: ["Node.js", "React Native", "PDF Generation", "Firebase"],
        linkLabel: "Play Store",
        linkUrl: "https://play.google.com/store/apps/details?id=com.aiot.cv_ats_master",
        image: "/images/projects/cv-ats-master.png",
    },
    {
        title: "B2p Burger Maker",
        description:
            "Restaurant system for customizing burgers layer-by-layer with user rewards and gamified sharing features.",
        stats: ["Gamified rewards", "Admin control panel", "Layer customization"],
        tech: ["Node.js", "Express", "MongoDB", "React"],
        linkLabel: "View Demo",
        image: "/images/projects/b2p.png",
    },
    {
        title: "Alinez Fit",
        description:
            "Personal trainer app with diet and exercise planning, featuring WebRTC video/audio calls and social feed.",
        stats: ["WebRTC video calls", "Nutrition tracking", "Social trainer feed"],
        tech: ["Node.js", "WebRTC", "NutritionX API", "MongoDB"],
        linkLabel: "Coming Soon",
        linkUrl: "https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1",
        image: "/images/projects/alinez-fit.svg",
    },
    {
        title: "Book Academy",
        description:
            "Web-based learning platform for online education with live sessions, progress tracking, and payment integration.",
        stats: ["Live sessions", "Progress tracking", "Multi-role system"],
        tech: ["Node.js", "PostgreSQL", "Socket.IO", "Stripe"],
        linkLabel: "Visit Platform",
        linkUrl: "https://book-academy.me",
        image: "/images/projects/book-academy.png",
    },
    {
        title: "Schema Platform",
        description:
            "Full e-learning portal for free and subscription-based courses with API-based delivery and user analytics.",
        stats: ["Content creator dashboard", "Course analytics", "API-based delivery"],
        tech: ["Node.js", "MongoDB", "Nest.JS", "AWS", "Docker"],
        linkLabel: "Explore Platform",
        linkUrl: "https://schema.aiotgroups.com",
        image: "/images/projects/schema.png",
    },
    {
        title: "Travel Sync",
        description:
            "Scalable travel operations backend synchronizing live inventory, partner APIs, and role-based workflows across teams.",
        stats: ["Realtime flight & hotel sync", "Role-based access", "Observability-driven operations"],
        tech: ["Node.js", "AWS", "PostgreSQL", "Redis"],
        linkLabel: "Product Demo",
        image: "/images/projects/travel-sync.png",
    },
    {
        title: "Hasala",
        description:
            "Cashback and rewards engine delivering instant QR-based incentives, analytics dashboards, and partner onboarding.",
        stats: ["Instant QR rewards", "Cloud-native deployment", "Visibility & logging"],
        tech: ["Node.js", "Redis", "Firebase", "Docker"],
        linkLabel: "See Prototype",
        linkUrl: "https://play.google.com/store/apps/details?id=com.app.hasala",
        image: "/images/projects/hasala.png",
    },
];

export const skillTags = [
    "Node.js",
    "Express.js",
    "NestJS",
    "TypeScript",
    "JavaScript (ES6+)",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Firebase",
    "Docker",
    "Nginx",
    "AWS",
    "CI/CD",
    "Jest",
    "Microservices",
    "REST APIs",
    "Socket.IO",
    "Agile Scrum",
];

export const marqueeTech = [
    "Domain-driven design",
    "Event-driven architectures",
    "Observability",
    "API Performance",
    "Clean Architecture",
    "Security-first mindset",
    "Async Messaging",
    "Performance Profiling",
    "Scalable Databases",
    "Cloud Deployments",
];
