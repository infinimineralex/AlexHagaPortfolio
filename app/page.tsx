'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: { clientX: any; clientY: any }) =>
            setMousePosition({ x: e.clientX, y: e.clientY });

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white" data-oid="hl7odyi">
            {/* Hero Section */}
            <div
                className="relative h-screen flex items-center justify-center overflow-hidden"
                data-oid=":sndwmg"
            >
                <div
                    className="absolute inset-0 bg-[#f8f8f8]"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                    data-oid="0913ubd"
                />

                <div className="absolute bottom-0 left-0 w-full h-full" data-oid="p6cmfej">
                    <div className="absolute bottom-16 left-16 w-full" data-oid="x4ek1r1">
                        <div className="relative overflow-hidden" data-oid="p5s2mg.">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 rounded-xl transform skew-y-2 -z-10"
                                data-oid="izqw9.8"
                            ></div>
                            <h1
                                className="text-[12rem] font-bold text-white tracking-tighter text-left leading-none"
                                style={{
                                    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
                                    textShadow: '0 0 20px rgba(255,255,255,0.3)',
                                    clipPath: `polygon(0 0, 100% 0, 100% ${100 - scrollY * 0.1}%, 0 ${100 - scrollY * 0.05}%)`,
                                }}
                                data-oid="uyxaeuh"
                            >
                                BESPOKE
                            </h1>
                            <h2
                                className="text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-tighter text-left mt-[-2rem]"
                                style={{
                                    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.04}px, ${(mousePosition.y - window.innerHeight / 2) * 0.04}px) rotate(${scrollY * 0.01}deg)`,
                                    filter: `blur(${Math.min(scrollY * 0.01, 2)}px)`,
                                    opacity: 1 - scrollY * 0.001,
                                }}
                                data-oid="6pzc7z_"
                            >
                                SOLUTIONS
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2" data-oid="kv124-s">
                    <p
                        className="text-gray-500 tracking-[0.3em] uppercase text-sm"
                        data-oid="vmj:3qw"
                    >
                        Scroll to Explore
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div className="relative py-32 px-8" data-oid="sdggt_c">
                <div className="max-w-7xl mx-auto" data-oid="jvlf2e_">
                    <div className="grid grid-cols-2 gap-16" data-oid="yaeidd8">
                        <div data-oid="kj4aaw9">
                            <h3 className="text-4xl font-light text-black mb-8" data-oid="1ebqhrr">
                                Crafting Digital Excellence
                            </h3>
                            <p className="text-gray-600 leading-relaxed" data-oid="w_.d931">
                                As a software engineer with an eye for detail and a passion for
                                innovation, I create solutions that transcend conventional
                                boundaries. Every project is an opportunity to push the envelope of
                                what's possible in digital craftsmanship.
                            </p>
                        </div>
                        <div className="relative" data-oid="bcaov1k">
                            <div
                                className="absolute -inset-4 bg-[#f5f0ea] rounded-lg transform -rotate-2"
                                data-oid="amkwuxx"
                            ></div>
                            <div
                                className="relative bg-white p-8 rounded-lg shadow-xl"
                                data-oid="cn2bfuq"
                            >
                                <div className="space-y-4" data-oid="d3h2qg5">
                                    <div className="flex items-center space-x-4" data-oid="72_3a8o">
                                        <div
                                            className="w-2 h-2 bg-black rounded-full"
                                            data-oid="u2l8xb8"
                                        ></div>
                                        <span className="text-lg text-gray-800" data-oid="wk5nf91">
                                            Frontend Architecture
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4" data-oid="sz70:j2">
                                        <div
                                            className="w-2 h-2 bg-black rounded-full"
                                            data-oid="a-hgelg"
                                        ></div>
                                        <span className="text-lg text-gray-800" data-oid="j0-5982">
                                            Backend Development
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4" data-oid="1ne:ez9">
                                        <div
                                            className="w-2 h-2 bg-black rounded-full"
                                            data-oid="ioty3tx"
                                        ></div>
                                        <span className="text-lg text-gray-800" data-oid="xnxz.ds">
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
            <div className="bg-black py-32 px-8" data-oid="jsf9:1l">
                <div className="max-w-7xl mx-auto" data-oid="_pkc.lg">
                    <h3 className="text-6xl font-light text-white mb-16" data-oid="7m60-_-">
                        Selected Works
                    </h3>
                    <div className="grid grid-cols-2 gap-8" data-oid=":saauu_">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="group relative h-[400px] bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                                data-oid="bop6egi"
                            >
                                <div
                                    className="absolute inset-0 bg-[#f5f0ea] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    data-oid="mzere3g"
                                ></div>
                                <div className="absolute bottom-8 left-8" data-oid="gg_i9j4">
                                    <h4
                                        className="text-2xl font-light text-white mb-2"
                                        data-oid="ltceifu"
                                    >
                                        Project {item}
                                    </h4>
                                    <p className="text-gray-400" data-oid=".x-v-jo">
                                        Technology Stack
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative py-32 px-8" data-oid="q8vp6ot">
                <div className="max-w-3xl mx-auto text-center" data-oid="g.iwr63">
                    <h3 className="text-6xl font-light text-black mb-8" data-oid="dy4c_vc">
                        Let's Create Together
                    </h3>
                    <p className="text-gray-600 mb-12" data-oid="lyrres6">
                        Looking for a developer who can bring your vision to life? Let's discuss how
                        we can create something extraordinary.
                    </p>
                    <button
                        className="px-12 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
                        data-oid="yff4i.j"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-8 px-8" data-oid="hrsg:t1">
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="v4fya39"
                >
                    <p className="text-gray-500" data-oid="c67ou3y">
                        &copy; 2024 All rights reserved
                    </p>
                    <div className="flex space-x-6" data-oid="xm:8pn3">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-black transition-colors duration-300"
                            data-oid="if4d942"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-black transition-colors duration-300"
                            data-oid="0fb9a1i"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-black transition-colors duration-300"
                            data-oid="8chss98"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
