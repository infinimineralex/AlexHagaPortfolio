import Image from 'next/image';

const skillsList = [
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

export default function SkillsCarousel({ skills = skillsList, selectedSkill, setSelectedSkill }: {
  skills?: typeof skillsList,
  selectedSkill: any,
  setSelectedSkill: (skill: any) => void
}) {
  return (
    <section className="py-12 flex flex-col items-center" id="skills">
      <div className="bg-neutral-30 rounded-3xl pt-10 pb-14 relative w-full max-w-5xl overflow-hidden shadow-lg"
        style={{
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(0px)',
        }}
      >
        <h2 className="text-center text-white mb-8 font-heading text-4xl font-bold">Technology Stack</h2>
        <div className="relative">
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
                      />
                      <p className="text-white text-base lg:text-lg mt-2 truncate text-neutral-10">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              onClick={e => e.stopPropagation()}
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
      </div>
    </section>
  );
}
