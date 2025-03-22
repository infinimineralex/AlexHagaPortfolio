'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import MouseMoveEffect from '../app/MouseMoveEffect';

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [aboutVisible, setAboutVisible] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const [otherProjectsVisible, setOtherProjectsVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const otherProjectsRef = useRef<HTMLDivElement>(null);

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
                        <Image 
                            src="/images/LogoRed.png" 
                            alt="Logo Red" 
                            fill
                            className="object-contain scale-50"
                        />
                        {/* Content Overlay */}
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center shadow-lg"
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
                        className={`max-w-4xl px-4 flex flex-col md:flex-row items-center transition-all duration-700 shadow-lg ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
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
                            I&apos;m Alex. Glad to meet you! I&apos;m a software engineer with a strong foundation in security, performance optimization, and user-centric design; I specialize in crafting powerful, enterprise-scale solutions that are both secure and intuitive. My experience spans across healthcare technology at Epic Systems, AI-powered financial applications at The Estée Lauder Companies, and innovative personal projects like AEGIS, a highly secure password manager featuring AES-256 encryption, client-side security, and a sleek, modern UI. With expertise in full-stack development, cloud computing, and advanced cryptographic principles, I am dedicated to building seamless, high-performance applications that prioritize both functionality and user experience. Whether optimizing mission-critical software for medical providers or developing sophisticated AI-driven tools, I am driven by a passion for engineering secure, scalable, and elegant solutions. When I&apos;m not coding, you can find me fencing, wine-tasting, exploring sartorial menswear, playing Minecraft, or spending time with my family and friends.
                            </p>
                        </div>
                        {/* Right Column: Image */}
                        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
                            <Image 
                                src="/images/Alex_LI2.JPG" 
                                alt="Alexander" 
                                width={500} 
                                height={500} 
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </section>
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
                {/* Projects Section */}
                <section className="py-12 bg-gray-00 flex flex-col items-center" ref={projectsRef}>
                    <h2 className="text-4xl font-bold mb-8 text-white">Selected Projects</h2>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {/* Project Card: AEGIS */}
                        <div
                            className="rounded-2xl shadow-xl p-6"
                            style={{
                                background: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '20px',
                                backdropFilter: 'blur(15px)',
                                WebkitBackdropFilter: 'blur(0px)',
                            }}
                        >
                            <Image 
                                src="/images/white2.png" 
                                alt="AEGIS" 
                                width={500} 
                                height={300} 
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
                        {/* Project Card: Charcoal */}
                        <div
                            className="rounded-2xl shadow-xl p-6"
                            style={{
                                background: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '20px',
                                backdropFilter: 'blur(15px)',
                                WebkitBackdropFilter: 'blur(0px)',
                            }}
                        >
                            <Image 
                                src="/images/charcoal1.png" 
                                alt="Charcoal" 
                                width={500} 
                                height={300} 
                                className="rounded-md mb-4"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">Charcoal</h3>
                            <p className="text-white mb-4">
                                Charcoal is a lightweight and efficient C++ application designed for grayscaling ebooks in several popular formats. Additionally, Charcoal&apos;s Calibre plugin suite makes grayscaling/resolution modifying ebooks easy from the Calibre program. In short, Charcoal is three products in one!
                            </p>
                            <a href="https://github.com/ChicoState/ebook-image" className="text-blue-600 hover:underline">
                                GitHub Link
                            </a>
                        </div>
                    </div>
                </section>
                {/* Other Activities Section */}
                <section className="py-12 bg-gray-00 flex flex-col items-center" ref={otherProjectsRef}>
                    <h2 className="text-4xl font-bold mb-8 text-white">Other Activities</h2>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl transition-all duration-700 ${otherProjectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Project Card: PMC */}
                        <div
                            className="rounded-2xl shadow-xl p-6"
                            style={{
                                background: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '20px',
                                backdropFilter: 'blur(15px)',
                                WebkitBackdropFilter: 'blur(0px)',
                            }}
                        >
                            <Image 
                                src="/images/seasidepalace.webp" 
                                alt="PMC" 
                                width={500} 
                                height={300} 
                                className="rounded-md mb-4"
                            />
                            <Image 
                                src="/images/pmc2.png" 
                                alt="Minecraft Project 2" 
                                width={500} 
                                height={300} 
                                className="rounded-md mb-4"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">Planet Minecraft</h3>
                            <p className="text-white mb-4">
                            I&apos;ve worked in the Minecraft community for over 8 years, and I have a large following on Planet Minecraft. I have created many projects, including skins, mods, and maps. My work has been featured in various Minecraft publications and has received recognition from the community. Here is my PMC profile, where you can find some of my work:
                            </p>
                            <a href="https://www.planetminecraft.com/member/-infinity-/" className="text-blue-600 hover:underline">
                                Planet Minecraft Profile
                            </a>
                        </div>
                        {/* Project Card: Other Minecraft Endeavors */}
                        <div
                            className="rounded-2xl shadow-xl p-6"
                            style={{
                                background: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '20px',
                                backdropFilter: 'blur(15px)',
                                WebkitBackdropFilter: 'blur(0px)',
                            }}
                        >
                            <Image 
                                src="/images/secret.png" 
                                alt="Minecraft Project" 
                                width={500} 
                                height={300} 
                                className="rounded-md mb-4"
                            />
                            <Image 
                                src="/images/secret2.png" 
                                alt="Minecraft Project" 
                                width={500} 
                                height={300} 
                                className="rounded-md mb-4"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">Other Minecraft Endeavors</h3>
                            <p className="text-white mb-4">
                                There are other, more secret Minecraft projects I have worked on, including a few unreleased skins, mods, and maps. I have also been involved in the administration of several Minecraft servers, where I have contributed to server management, map development, and community engagement. If you are interested in collaborating or learning more about my work in the Minecraft community, feel free to reach out!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
