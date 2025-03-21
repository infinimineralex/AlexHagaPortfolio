'use client';

import { useState, useEffect, useRef } from 'react';
import MouseMoveEffect from '../app/MouseMoveEffect';

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [aboutVisible, setAboutVisible] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

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
                });
            },
            { threshold: 0.3 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
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
            
            {/* Hero Section */}
            <div className="flex items-center justify-center h-screen relative">
                {/* Infinity Symbol */}
                <div
                    className="relative"
                    style={{
                        width: '80vw',
                        height: '80vh',
                        transform: `scale(${1-(scrollY * 0.001)}) perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${-mousePosition.x * 0.02}deg)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <img className='w-full h-full scale-50'
                        src="/images/LogoRed.png"
                    />
                    {/* Content Overlay */}
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        style={{
                            background: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(0px)',
                        }}
                    >
                        <h1 className="text-5xl font-bold text-white mb-4">ALEXANDER HAGA</h1>
                        <p className="text-2xl text-gray-200 text-center max-w-md">
                            BESPOKE SOLUTIONS. INFINITE POSSIBILITIES.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4">
                            <a 
                                href="/AlexHagaResume.pdf" 
                                download 
                                className="px-4 py-2 bg-white text-black rounded transition transform hover:scale-105"
                            >
                                Download Resume
                            </a>
                            <a 
                                href="mailto:alexalot7@gmail.com" 
                                className="px-4 py-2 border-2 border-white text-white rounded transition transform hover:scale-105"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <section className="py-12 flex flex-col items-center" ref={aboutRef}>
                <h2 className="text-4xl text-white font-bold mb-8">About Me</h2>
                <div 
                    className={`max-w-4xl px-4 flex flex-col md:flex-row items-center transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{
                        background: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(0px)',
                        padding: '1rem'
                    }}
                >
                    {/* Left Column: Summary and Buttons */}
                    <div className="md:w-1/2 text-white">
                        <p className="mb-4">
                        As a software engineer with a strong foundation in security, performance optimization, and user-centric design, I specialize in crafting powerful, enterprise-scale solutions that are both secure and intuitive. My experience spans across healthcare technology at Epic Systems, AI-powered financial applications at The Estée Lauder Companies, and innovative personal projects like AEGIS, a highly secure password manager featuring AES-256 encryption, client-side security, and a sleek, modern UI. With expertise in full-stack development, cloud computing, and advanced cryptographic principles, I am dedicated to building seamless, high-performance applications that prioritize both functionality and user experience. Whether optimizing mission-critical software for medical providers or developing sophisticated AI-driven tools, I am driven by a passion for engineering secure, scalable, and elegant solutions.
                        </p>
                        <div className="justify-center mt-4 flex flex-col sm:flex-row gap-4">
                            <a 
                                href="/resume.pdf" 
                                download 
                                className="px-4 py-2 bg-white text-black rounded transition transform hover:scale-105"
                            >
                                Download Resume
                            </a>
                            <a 
                                href="mailto:alexalot7@gmail.com" 
                                className="px-4 py-2 border-2 border-white text-white rounded transition transform hover:scale-105"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    {/* Right Column: Image */}
                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
                        <img
                            src="/images/Alex_LI2.JPG"
                            alt="Alexander"
                            className="rounded-md"
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-12 bg-gray-00 flex flex-col items-center" ref={projectsRef}>
                <h2 className="text-4xl font-bold mb-8 text-white">Selected Projects</h2>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    {/* Project Card */}
                    <div
                        className="rounded-2xl shadow-xl p-6"
                        style={{
                            background: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(0px)',
                        }}
                    >
                        {/* AEGIS image */}
                        <img
                            src="/images/white2.png"
                            alt="AEGIS"
                            className="rounded-md mb-4"
                        />
                        <h3 className="text-white text-2xl font-bold mb-2">AEGIS</h3>
                        <p className="text-white mb-4">
                        Welcome to Aegis—your trusted companion in securing your digital life. Aegis offers a seamless, secure, and user-friendly solution to store, generate, and manage your passwords with ease.
                        </p>
                        <a href="https://github.com/infinimineralex/Project-AEGIS?tab=readme-ov-file" className="text-blue-600 hover:underline">
                            GitHub Link
                        </a>
                    </div>
                    {/* Project Card */}
                    <div
                        className="rounded-2xl shadow-xl p-6"
                        style={{
                            background: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(0px)',
                        }}
                    >
                        <img
                            src="/images/charcoal1.png"
                            alt="Charcoal"
                            className="rounded-md mb-4"
                        />
                        <h3 className="text-white text-2xl font-bold mb-2">Charcoal</h3>
                        <p className="text-white mb-4">
                            Charcoal is a lightweight and efficient C++ application designed for grayscaling ebooks in several popular formats. Additionally, Charcoal’s Calibre plugin suite makes grayscaling/resolution modifying ebooks easy from the Calibre program. In short, Charcoal is three products in one!
                        </p>
                        <a href="https://github.com/ChicoState/ebook-image" className="text-blue-600 hover:underline">
                            GitHub Link
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
