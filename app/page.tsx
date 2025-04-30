'use client';

import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import MouseMoveEffect from '../app/MouseMoveEffect';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsCarousel from '../components/SkillsCarousel';
import OtherActivitiesSection from '../components/OtherActivitiesSection';

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [aboutVisible, setAboutVisible] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const [otherProjectsVisible, setOtherProjectsVisible] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState<null | {
        name: string;
        image: string;
        description: string;
    }>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const otherProjectsRef = useRef<HTMLDivElement>(null);

    const skills = [
        { name: 'React', image: '/images/React.png', description: 'Built interactive UI components with React for my work, portfolio, & projects.' },
        { name: 'TypeScript', image: '/images/TypeScript.png', description: 'Used TypeScript extensively to add type safety to modern web applications.' },
        { name: 'Node.js', image: '/images/Node.png', description: 'Created APIs and backend services using Node.js to support full-stack projects.' },
        { name: 'Python', image: '/images/Python.png', description: 'Developed scripts and tools in Python for data processing and automation.' },
        { name: 'C++', image: '/images/C++.png', description: 'Implemented performance-critical applications and algorithms in C++.' },
        { name: 'Electron', image: '/images/Electron.png', description: 'Built cross-platform desktop apps using Electron.' },
        { name: 'GitHub', image: '/images/GitHub.png', description: 'Version control and collaboration using GitHub for all major projects.' },
        { name: 'HTML5', image: '/images/HTML5.png', description: 'Structured and presented content for the web using HTML5 and CSS.' },
        { name: 'PostgreSQL', image: '/images/PostgreSQL.png', description: 'Designed and managed relational databases with PostgreSQL and Railway.' },
        { name: 'RStudio', image: '/images/RStudio.png', description: 'Analyzed data and built statistical models in RStudio.' },
        { name: 'Tailwind CSS', image: '/images/TailwindCSS.png', description: 'Styled modern UIs rapidly with Tailwind CSS utility classes.' },
        { name: 'Vercel', image: '/images/Vercel.png', description: 'Deployed and hosted Next.js apps seamlessly on Vercel.' },
        { name: 'Vite', image: '/images/Vite.png', description: 'Used Vite for fast, modern frontend tooling and development.' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: { clientX: number; clientY: number }) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            setMousePosition({
                x: e.clientX - centerX,
                y: e.clientY - centerY,
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target === aboutRef.current && entry.isIntersecting) {
                        setAboutVisible(true);
                        observer.unobserve(aboutRef.current!);
                    }
                    if (entry.target === projectsRef.current && entry.isIntersecting) {
                        setProjectsVisible(true);
                        observer.unobserve(projectsRef.current!);
                    }
                    if (entry.target === otherProjectsRef.current && entry.isIntersecting) {
                        setOtherProjectsVisible(true);
                        observer.unobserve(otherProjectsRef.current!);
                    }
                });
            },
            { threshold: 0.3 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (otherProjectsRef.current) observer.observe(otherProjectsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                <title>Alexander Haga Portfolio</title>
                <meta name="description" content="Bespoke solutions, infinite possibilities. Explore the portfolio of Alexander Haga, including projects such as AEGIS and Charcoal." />
                <meta name="keywords" content="Alexander Haga, Software Engineer, Portfolio, AEGIS, Charcoal, Secure Software, Enterprise Solutions" />
                <meta name="author" content="Alexander Haga" />
            </Head>
            <div className="min-h-screen flex flex-col relative">
                {/* Video Background */}
                <video
                    className="fixed inset-0 w-full h-full -z-50 object-cover brightness-50"
                    src="/images/backgroundvid2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <MouseMoveEffect />
                <HeroSection scrollY={scrollY} mousePosition={mousePosition} />
                <AboutSection aboutRef={aboutRef} aboutVisible={aboutVisible} />
                <div className="justify-center mt-2 flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://www.linkedin.com/in/alexander-haga-5b09b020b/"  
                        className="px-4 py-2 bg-white text-black rounded transition transform hover:scale-105 shadow-lg"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="mailto:alexalot7@gmail.com" 
                        className="px-4 py-2 border-2 border-white text-white rounded transition transform hover:scale-105 shadow-lg"
                    >
                        Contact Me
                    </a>
                </div>
                <ProjectsSection projectsRef={projectsRef} projectsVisible={projectsVisible} />
                {/* Skills Section */}
                <section className="py-12 flex flex-col items-center" id="skills">
                    {/*px-4*/}
                    <div 
                        className="bg-neutral-30 rounded-3xl pt-10 pb-14 relative w-full max-w-5xl overflow-hidden shadow-lg"
                        style={{
                            background: 'rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(0px)',
                        }}
                    >
                        <h2 className="text-center text-white mb-8 font-heading text-4xl font-bold">Technology Stack</h2>
                        <div className="relative">
                            {/* Gradient overlays for fade effect (do I keep these?)
                            <div className="absolute top-0 left-0 w-16 h-full z-10 bg-gradient-to-r from-black to-transparent opacity-20"></div>
                            <div className="absolute top-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-black to-transparent opacity-20"></div> */}
                            {/* Top marquee row */}
                            <div className="overflow-hidden">
                                <div className="flex whitespace-nowrap marquee-container">
                                    <div className="flex marquee">
                                        {[...skills, ...skills].map((skill, index) => (
                                            <div key={`top-${index}`} className="flex-shrink-0">
                                                <div
                                                    onClick={() => setSelectedSkill(skill)}
                                                    className="w-[130px] p-6 rounded-xl mr-5 inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                                                >
                                                    <img 
                                                        width="56" 
                                                        height="56" 
                                                        loading="lazy" 
                                                        src={skill.image} 
                                                        alt={skill.name} 
                                                    /> {/*className="grayscale"*/}
                                                    <p className="text-white text-base lg:text-lg mt-2 truncate text-neutral-10">{skill.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/*<div className="flex marquee">
                                        {[...skills, ...skills].map((skill, index) => (
                                            <div key={`top-dup-${index}`} className="flex-shrink-0">
                                                <div
                                                    onClick={() => setSelectedSkill(skill)}
                                                    className="w-[130px] bg-neutral-20 p-6 rounded-xl mr-5 inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                                                >
                                                    <img 
                                                        width="56" 
                                                        height="56" 
                                                        loading="lazy" 
                                                        src={skill.image} 
                                                        alt={skill.name}  
                                                    />
                                                    <p className="text-white text-base lg:text-lg mt-2 truncate text-neutral-10">{skill.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>*/}
                                </div>
                            </div>
                            
                            {/* Bottom marquee row, reverse scrolling */}
                            <div className="overflow-hidden mt-5">
                                <div className="flex whitespace-nowrap marquee-container">
                                    <div className="flex marquee-reverse">
                                        {[...skills, ...skills].map((skill, index) => (
                                            <div key={`bottom-${index}`} className="flex-shrink-0">
                                                <div
                                                    onClick={() => setSelectedSkill(skill)}
                                                    className="w-[130px] bg-neutral-20 p-6 rounded-xl mr-5 inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                                                >
                                                    <img 
                                                        width="56" 
                                                        height="56" 
                                                        loading="lazy" 
                                                        src={skill.image} 
                                                        alt={skill.name} 
                                                    />
                                                    <p className="text-white text-base lg:text-lg mt-2 truncate text-neutral-10">{skill.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/*<div className="flex marquee-reverse">
                                        {[...skills, ...skills].map((skill, index) => (
                                            <div key={`bottom-dup-${index}`} className="flex-shrink-0">
                                                <div
                                                    onClick={() => setSelectedSkill(skill)}
                                                    className="w-[130px] bg-neutral-20 p-6 rounded-xl mr-5 inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                                                >
                                                    <img 
                                                        width="56" 
                                                        height="56" 
                                                        loading="lazy" 
                                                        src={skill.image} 
                                                        alt={skill.name} 
                                                    />
                                                    <p className="text-white text-base lg:text-lg mt-2 truncate text-neutral-10">{skill.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal for Skill Details */}
                    {selectedSkill && (
                        <div 
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 shadow-lg" 
                            onClick={() => setSelectedSkill(null)}
                        >
                            <div 
                                className="rounded-xl p-6 max-w-md w-full bg-opacity-50 shadow-lg"
                                style={{
                                    background: 'rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(15px)',
                                    WebkitBackdropFilter: 'blur(0px)',
                                    textAlign: 'center'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">{selectedSkill.name}</h3>
                                <p className="text-white">{selectedSkill.description}</p>
                                <button 
                                    onClick={() => setSelectedSkill(null)} 
                                    className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </section>
                {/*<SkillsCarousel skills={skills} selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />*/}
                <OtherActivitiesSection otherProjectsRef={otherProjectsRef} otherProjectsVisible={otherProjectsVisible} />
                <style jsx>{`
                    /* Global header styles */
                    h1, h2, h3 {
                        font-family: 'Bebas Neue', sans-serif;
                    }
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    
                    .marquee-container {
                        display: flex;
                        width: 100%;
                    }
                    
                    .marquee {
                        display: flex;
                        animation: scroll 30s linear infinite;
                        margin-right: 5px;
                    }
                    
                    .marquee-reverse {
                        display: flex;
                        animation: scroll 30s linear infinite reverse;
                        margin-right: 5px;
                    }
                `}</style>
            </div>
        </>
    );
}