import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const techCategories = [
    {
        category: 'Languages',
        skills: ['C++', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
        category: 'Frontend',
        skills: ['Next.js 15', 'React.js', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
        category: 'Backend & APIs',
        skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
        category: 'Databases & ORM',
        skills: ['PostgreSQL', 'Supabase', 'Prisma', 'MongoDB', 'MySQL'],
    },
    {
        category: 'AI & Security',
        skills: ['Google Gemini API', 'Clerk Auth', 'JWT', 'RBAC', 'OTP Auth'],
    },
    {
        category: 'Tools & DevOps',
        skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
    },
];

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('sunnysahani070@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                {/* 1. Bio & Education Card */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container justify-between">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[220px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m Sunny Sahani</p>
                            <p className="grid-subtext mb-3">
                                Aspiring Software Engineer & Full-Stack Developer experienced in building scalable web apps and AI-driven platforms.
                            </p>
                            <div className="bg-black-300 p-3 rounded-lg border border-black-500 text-sm space-y-1.5">
                                <p className="text-white font-medium">🎓 B.Tech in CSE — IET Lucknow</p>
                                <p className="text-white-500 text-xs">Aug 2024 – Present • <span className="text-green-400 font-semibold">CGPA: 8.48/10</span></p>
                                <p className="text-white-500 text-xs">Senior Secondary (XII) — Army Public School • <span className="text-white">86%</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Categorized Tech Stack Card */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container overflow-y-auto">
                        <div>
                            <p className="grid-headtext">Technical Stack</p>
                            <p className="grid-subtext text-xs mb-3">
                                Technologies I use to build production-ready applications:
                            </p>
                        </div>

                        <div className="space-y-2.5">
                            {techCategories.map((group, idx) => (
                                <div key={idx} className="space-y-1">
                                    <p className="text-xs text-white-500 font-semibold uppercase tracking-wider">{group.category}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2.5 py-1 text-xs rounded-md bg-black-300 text-white-800 border border-black-500 hover:border-white transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Global Remote Availability Card */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[300px] h-fit flex justify-center items-center">
                            <Globe
                                height={300}
                                width={300}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Flexible with Time Zones</p>
                            <p className="grid-subtext">
                                Based in Lucknow, India. Actively seeking software engineering & full-stack developer internships worldwide (remote/hybrid).
                            </p>
                            <a href="#contact" className="w-full block">
                                <Button name="Get in Touch" isBeam containerClass="w-full mt-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 4. Problem Solving & Core CS */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container justify-between">
                        <div>
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                                <p className="grid-headtext mb-0">Problem Solving & Core CS</p>
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-950 text-green-400 border border-green-800">
                                    500+ DSA Problems Solved
                                </span>
                            </div>
                            <p className="grid-subtext text-sm">
                                Deep foundation in Data Structures, Algorithms, Object-Oriented Programming (OOP), DBMS, and Operating Systems. I consistently solve algorithmic challenges in C++ across competitive programming platforms.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 my-2">
                            <div className="bg-black-300 p-3 rounded-lg border border-black-500">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-base">🏆</span>
                                    <p className="text-white text-xs font-semibold">NPTEL Elite Certification</p>
                                </div>
                                <p className="text-white-500 text-xs">
                                    Cyber Security & Privacy (IIT Madras) • <strong className="text-green-400">Top 1%</strong> recognition (93% overall score).
                                </p>
                            </div>

                            <div className="bg-black-300 p-3 rounded-lg border border-black-500">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-base">🚀</span>
                                    <p className="text-white text-xs font-semibold">Hack It Out — Technex '26</p>
                                </div>
                                <p className="text-white-500 text-xs">
                                    Represented IET Lucknow in competitive innovation-focused hackathon at IIT BHU Varanasi.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black-500">
                            <span className="text-xs text-white-500">Coding Profiles:</span>
                            <a
                                href="https://leetcode.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 text-xs rounded-md bg-black-500 text-white hover:border-white border border-black-400 transition-colors">
                                LeetCode ↗
                            </a>
                            <a
                                href="https://codeforces.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 text-xs rounded-md bg-black-500 text-white hover:border-white border border-black-400 transition-colors">
                                Codeforces ↗
                            </a>
                            <a
                                href="https://github.com/sunnysahani070-ops/Leetcode"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 text-xs rounded-md bg-black-500 text-white hover:border-white border border-black-400 transition-colors">
                                GitHub DSA Repos ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* 5. Contact & Resume Action Card */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container justify-center items-center">
                        <div className="space-y-3 w-full text-center">
                            <p className="grid-subtext text-xs uppercase tracking-wider">Quick Connect</p>
                            
                            <div className="copy-container bg-black-300 p-2.5 rounded-lg border border-black-500" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-5 h-5" />
                                <p className="text-sm font-medium text-white truncate">sunnysahani070@gmail.com</p>
                            </div>

                            <a
                                href="/resume.html"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all shadow-md">
                                <span>View Printable Resume</span>
                                <img src="/assets/arrow-up.png" alt="arrow" className="w-2.5 h-2.5 invert brightness-0" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
