export default function AboutSection({ aboutRef, aboutVisible }: { aboutRef: React.RefObject<HTMLDivElement>, aboutVisible: boolean }) {
    return (
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
                        I&apos;m Alex, a software engineer with a strategic vision for creating enterprise solutions that deliver exceptional value. My approach combines technical precision with relentless focus on outcomes.
                        At Epic Systems, I engineer healthcare technology solutions that directly impacted operational efficiency. While at The Estée Lauder Companies, I developed AI-powered financial applications that transformed data into actionable business intelligence.
                        My personal project, AEGIS, represents my philosophy toward software development: uncompromising security (AES-256 encryption), user-centered design, and ruthless efficiency, all working in concert to solve real problems.
                        My expertise spans full-stack development, cloud architecture, and advanced cryptographic implementation. I don&apos;t just build applications. I create systems that advance organizational objectives and provide measurable competitive advantages.
                        I approach every project with precision: my commitment is to deliver elegant, scalable solutions that consistently exceed expectations.
                    </p>
                    <p>
                        Outside of my professional pursuits, I maintain disciplined interests in fencing, wine appreciation, menswear, Minecraft, and cultivating strategic personal relationships.
                    </p>
                </div>
                {/* Right Column: Image */}
                <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
                    <img 
                        src="/images/Alex_LI2.JPG" 
                        alt="Alexander" 
                        width={500} 
                        height={500} 
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    );
}
