export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Experience',
        href: '#work',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Product Lead & Collaborator',
        img: 'assets/review1.png',
        review:
            'Working with Sunny was a fantastic experience. He transformed complex technical requirements into a high-performance, responsive platform. His attention to detail and ability to integrate AI seamlessly are unmatched.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Tech Lead at Hackathon Team',
        img: 'assets/review2.png',
        review:
            'Sunny’s expertise in full-stack web development and REST APIs is truly impressive. He delivered robust architectures with exceptional speed and clean code under tight deadlines. Fantastic developer to work with!',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Engineering Mentor',
        img: 'assets/review3.png',
        review:
            'Sunny has outstanding problem-solving abilities and a rock-solid grasp of Data Structures and Algorithms. He consistently builds intuitive, scalable solutions whether working on backend systems or modern frontend UIs.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'Startup Founder',
        img: 'assets/review4.png',
        review:
            'Sunny delivered beyond expectations. He understood our multi-tenant requirements and delivered clean, role-based backend APIs and authentication flows. Highly recommended for full-stack and AI-driven development.',
    },
];

export const myProjects = [
    {
        title: 'MockInterview AI',
        desc: 'An AI-powered mock interview platform for technical interview preparation with dynamic question generation, automated response evaluation, scoring, and personalized feedback.',
        subdesc:
            'Built with Next.js 14, TypeScript, Google Gemini 2.5, Clerk authentication, and Neon PostgreSQL. Features voice recognition, speech transcription, camera simulation, and real-time AI feedback.',
        href: 'https://mock-interview-ai-rose.vercel.app',
        liveHref: 'https://mock-interview-ai-rose.vercel.app',
        githubHref: 'https://github.com/sunnysahani070-ops/MockInterviewAi',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Next.js',
                path: '/assets/github.svg',
            },
        ],
    },
    {
        title: 'Homingo Tutor',
        desc: 'An AI-powered Socratic mathematics tutor for CBSE Class 10 that diagnoses student misconceptions and provides an adaptive 4-level hint ladder in English, Hindi, and Hinglish.',
        subdesc:
            'Built with Next.js 15, TypeScript, Google Gemini API, and Supabase. Implements multilingual tutoring, handwritten solution analysis, diagnostic assessments, and real-time learning progress analytics.',
        href: 'https://homingotutor.vercel.app',
        liveHref: 'https://homingotutor.vercel.app',
        githubHref: 'https://github.com/sunnysahani070-ops/Homingo-tutor',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Restraque – Restaurant Management',
        desc: 'A robust multi-tenant restaurant management and table-ordering platform with secure RESTful APIs, customer OTP authentication, and role-based access control (RBAC).',
        subdesc:
            'Built with Node.js, Express.js, TypeScript, Prisma, and PostgreSQL. Features restaurant onboarding, branch management, menu cataloging, QR-based table ordering workflows, and loyalty rewards.',
        href: 'https://github.com/sunnysahani070-ops',
        liveHref: null,
        githubHref: 'https://github.com/sunnysahani070-ops',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'GitHub',
                path: '/assets/github.svg',
            },
        ],
    },
    {
        title: 'CoinPulse',
        desc: 'A modern, real-time cryptocurrency analytics platform featuring live market prices, interactive candlestick charts, and comprehensive coin metrics powered by the CoinGecko API.',
        subdesc:
            'Built with Next.js, TypeScript, and Tailwind CSS. Designed for optimal speed, real-time data streaming, and a responsive trading dashboard experience across all devices.',
        href: 'https://coin-pulse-gules.vercel.app',
        liveHref: 'https://coin-pulse-gules.vercel.app',
        githubHref: 'https://github.com/sunnysahani070-ops/CoinPulse',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'LeftClick',
        desc: 'A cinematic web app engineered with a "Brutalist Signal" aesthetic for a B2B outbound growth agency. Replaces fluff with raw data density and micro-interactive components.',
        subdesc:
            'Built with React, Tailwind CSS, JavaScript, and GSAP animations, optimized for high performance, intent qualification, and engaging enterprise client dialogue.',
        href: 'https://github.com/sunnysahani070-ops/LeftClick',
        liveHref: null,
        githubHref: 'https://github.com/sunnysahani070-ops/LeftClick',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-15, 7, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Restraque',
        pos: 'Backend Developer',
        duration: '2024 - Present',
        title: "Contributing as a Backend Developer to a multi-tenant restaurant management and ordering platform. Developing secure REST APIs, role-based access control, OTP auth, and QR-based table ordering workflows with Node.js, Express, TypeScript, Prisma, and PostgreSQL.",
        icon: '/assets/react.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'AI & Full-Stack Projects',
        pos: 'Full-Stack Developer',
        duration: '2024 - Present',
        title: "Architecting and developing production-ready full-stack applications like MockInterview AI and Homingo Tutor using Next.js, Google Gemini API, Supabase, Neon PostgreSQL, Clerk authentication, and speech transcription.",
        icon: '/assets/framer.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'IET Lucknow',
        pos: 'B.Tech in Computer Science & Engineering',
        duration: 'Aug 2024 - Present',
        title: "Studying Core Computer Science (DSA, OOP, DBMS, OS, Computer Networks) with an 8.48/10 CGPA. Represented IET Lucknow at Technex '26 (IIT BHU Varanasi) and earned NPTEL Elite Certification in Cyber Security & Privacy (Top 1%).",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];
