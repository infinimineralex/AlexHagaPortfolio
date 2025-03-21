'use client';

import { useState, useEffect } from 'react';
import MouseMoveEffect from '../app/MouseMoveEffect';

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* New Video Background */}
            <video
                className="fixed inset-0 -z-50 object-cover brightness-50"
                src="/images/backgroundvid2.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <MouseMoveEffect />
            
            {/* Hero Section */}
            <div className="flex items-center justify-center h-screen relative">
                {/* Infinity Symbol Container */}
                <div
                    className="relative"
                    style={{
                        width: '80vw',
                        height: '80vh',
                        transform: `scale(${1-(scrollY * 0.001)}) perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${-mousePosition.x * 0.02}deg)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    {/*<svg viewBox="0 0 600 300" className="w-full h-full">
                        <path
                            d="M150 150 C150 50, 450 50, 450 150 S150 250, 150 150"
                            fill="none"
                            stroke="#e63946"
                            strokeWidth="15"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>*/}
                    <img className='w-full h-full scale-50'
                        src="/images/LogoRed.png"
                    />
                    {/* Glassmorphic Content Overlay */}
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
                    </div>
                </div>
            </div>

        

            {/* About Me Section */}
            <section className="py-12 bg-white flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <div className="max-w-4xl text-center px-4">
                    <p className="text-gray-700 mb-4">
                        A short bio about yourself, your skills, and your experience. Explain what drives your work and what makes your approach unique.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Resume: <a href="#" className="text-blue-600 hover:underline">Download Resume</a>
                    </p>
                    <p className="text-gray-700">
                        Contact: <a href="mailto:alexalot7@gmail.com" className="text-blue-600 hover:underline">alexalot7@gmail.com</a>
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-12 bg-gray-00 flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                    {/* Glassmorphic Project Card */}
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
                    {/* Glassmorphic Project Card */}
                    <div
                        className="rounded-2xl shadow-xl p-6"
                        style={{
                            background: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(0px)',
                        }}
                    >
                        {/* Project image placeholder */}
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
