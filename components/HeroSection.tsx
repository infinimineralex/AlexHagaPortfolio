import Image from 'next/image';

export default function HeroSection({ scrollY, mousePosition }: { scrollY: number, mousePosition: { x: number, y: number } }) {
    return (
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
                    className="absolute inset-0 flex flex-col items-center justify-center shadow-md"
                    style={{
                        background: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(0px)',
                    }}
                >
                    <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-xl shadow-white">ALEXANDER HAGA</h1>
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
                {/* Scroll Down Indicator */}
                <div className="absolute bottom-4 left-0 right-0 mx-auto flex flex-col items-center animate-bounce z-10 w-fit">
                    <span className="text-white text-lg">Scroll Down</span>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
