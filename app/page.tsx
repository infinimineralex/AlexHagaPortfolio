'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: { clientX: any; clientY: any }) => {
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
        <div className="min-h-screen bg-white" data-oid="umzqnnh">
            {/* Hero Section */}
            <div
                className="relative h-screen flex items-center justify-center overflow-hidden"
                data-oid="mtq2iko"
            >
                <div
                    className="absolute inset-0 bg-[#f8f8f8]"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                    data-oid="xtwvpct"
                />

                <div className="absolute bottom-0 left-0 w-full h-full" data-oid="vj13tm2">
                    <div className="absolute bottom-16 left-16 w-full" data-oid="uej99qt">
                        <div className="relative overflow-hidden" data-oid="_1:q_tt">
                            <div
                                className="absolute inset-0 rounded-xl -z-10 overflow-hidden"
                                data-oid="chgh1ml"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x * 0.01}% ${50 + mousePosition.y * 0.01}%, rgba(75, 75, 75, 0.4) 0%, rgba(30, 30, 30, 0.8) 50%, rgba(10, 10, 10, 0.9) 100%)`,
                                        boxShadow: 'inset 0 0 100px rgba(255, 255, 255, 0.1)',
                                    }}
                                    data-oid="4qydcxh"
                                ></div>
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `linear-gradient(${135 + mousePosition.x * 0.01}deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                                                        linear-gradient(${45 + mousePosition.y * 0.01}deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                                        backgroundSize: '40px 40px',
                                        transform: `perspective(1000px) rotateX(${mousePosition.y * 0.005}deg) rotateY(${-mousePosition.x * 0.005}deg) scale(1.1)`,
                                        opacity: 0.7,
                                    }}
                                    data-oid="vr30-f1"
                                ></div>
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background:
                                            'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
                                        boxShadow: `inset 0 0 50px rgba(255, 255, 255, ${0.05 + Math.abs(mousePosition.x * 0.0001)})`,
                                    }}
                                    data-oid="t3xrdb4"
                                ></div>
                            </div>
                            <h1
                                className="text-[12rem] font-bold text-white tracking-tighter text-left leading-none relative z-10"
                                style={{
                                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                                    textShadow:
                                        '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)',
                                    clipPath: `polygon(0 0, 100% 0, 100% ${100 - scrollY * 0.1}%, 0 ${100 - scrollY * 0.05}%)`,
                                }}
                                data-oid="1_uvy6-"
                            >
                                BESPOKE
                            </h1>
                            <h2
                                className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-tighter text-left mt-[-2rem] relative z-10"
                                style={{
                                    transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px) rotate(${scrollY * 0.01}deg)`,
                                    filter: `blur(${Math.min(scrollY * 0.01, 2)}px)`,
                                    opacity: 1 - scrollY * 0.001,
                                    WebkitBackgroundClip: 'text',
                                }}
                                data-oid="7dskvzr"
                            >
                                SOLUTIONS
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2" data-oid="44_8qgu">
                    <p
                        className="text-gray-500 tracking-[0.3em] uppercase text-sm"
                        data-oid="x_s6g0_"
                    >
                        Scroll to Explore
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div className="relative py-32 px-8" data-oid="lxm53-q">
                <div className="max-w-7xl mx-auto" data-oid="xpwyubg">
                    <div className="grid grid-cols-2 gap-16" data-oid=":wacuwu">
                        <div data-oid="0dq4924">
                            <h3 className="text-4xl font-light text-black mb-8" data-oid="zwt1f88">
                                Crafting Digital Excellence
                            </h3>
                            <p className="text-gray-600 leading-relaxed" data-oid="x21ef56">
                                As a software engineer with an eye for detail and a passion for
                                innovation, I create solutions that transcend conventional
                                boundaries. Every project is an opportunity to push the envelope of
                                what's possible in digital craftsmanship.
                            </p>
                        </div>
                        <div className="relative" data-oid=":0r4k4s">
                            <div
                                className="absolute -inset-4 bg-[#f5f0ea] rounded-lg transform -rotate-2"
                                data-oid="rwhpgxq"
                            ></div>
                            <div
                                className="relative bg-white p-8 rounded-lg shadow-xl"
                                data-oid="net02j6"
                            >
                                <div className="space-y-4" data-oid="kch_ej4">
                                    <div className="flex items-center space-x-4" data-oid="xynrghg">
                                        <div
                                            className="w-2 h-2 bg-black rounded-full"
                                            data-oid="b7k:q3q"
                                        ></div>
                                        <span className="text-lg text-gray-800" data-oid="01f_6ci">
                                            Frontend Architecture
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4" data-oid="f-eged_">
                                        <div
                                            className="w-2 h-2 bg-black rounded-full"
                                            data-oid="ni5odke"
                                        ></div>
                                        <span className="text-lg text-gray-800" data-oid="up4-p-r">
                                            Backend Development
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4" data-oid="milucbn">
                                        <div
                                            className="w-2 h-2 bg-black rounded-full"
                                            data-oid="nci91-8"
                                        ></div>
                                        <span className="text-lg text-gray-800" data-oid="okm66cm">
                                            System Design
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="bg-black py-32 px-8" data-oid="_2__-pu">
                <div className="max-w-7xl mx-auto" data-oid="7nz8uk3">
                    <h3 className="text-6xl font-light text-white mb-16" data-oid="-zp76q.">
                        Selected Works
                    </h3>
                    <div className="grid grid-cols-2 gap-8" data-oid=":.5g4__">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="group relative h-[400px] bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                                data-oid="ta8.j2h"
                            >
                                <div
                                    className="absolute inset-0 bg-[#f5f0ea] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    data-oid="zx4o89e"
                                ></div>
                                <div className="absolute bottom-8 left-8" data-oid="at28ic-">
                                    <h4
                                        className="text-2xl font-light text-white mb-2"
                                        data-oid="b222s9m"
                                    >
                                        Project {item}
                                    </h4>
                                    <p className="text-gray-400" data-oid="xbynngb">
                                        Technology Stack
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative py-32 px-8" data-oid="hw6zwex">
                <div className="max-w-3xl mx-auto text-center" data-oid="gy:0no2">
                    <h3 className="text-6xl font-light text-black mb-8" data-oid="gr7ajdg">
                        Let's Create Together
                    </h3>
                    <p className="text-gray-600 mb-12" data-oid="32.1e2e">
                        Looking for a developer who can bring your vision to life? Let's discuss how
                        we can create something extraordinary.
                    </p>
                    <button
                        className="px-12 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
                        data-oid="jj9fpgm"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-8 px-8" data-oid="s3s_twl">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="440ceca"
                >
                    <p className="text-gray-500" data-oid="2u94koy">
                        &copy; 2024 All rights reserved
                    </p>
                    <div className="flex space-x-6" data-oid="wzri630">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-black transition-colors duration-300"
                            data-oid="whm5urv"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-black transition-colors duration-300"
                            data-oid="jdttvpf"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-black transition-colors duration-300"
                            data-oid="bmecna5"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
