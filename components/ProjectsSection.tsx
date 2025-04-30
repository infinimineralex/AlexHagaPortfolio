import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    title: 'AEGIS',
    image: '/images/white2.png',
    description: 'Aegis offers a seamless, secure, and user-friendly solution to store, generate, and manage your passwords with ease.',
    details: 'Aegis is your trusted companion in securing your digital life. Aegis offers a seamless, secure, and user-friendly solution to store, generate, and manage your passwords with ease.',
    link: 'https://github.com/infinimineralex/Project-AEGIS?tab=readme-ov-file',
  },
  {
    title: 'Bastion',
    image: '/images/bastion.png',
    description: 'Bastion is a secure, user-friendly app designed to help you manage your sensitive files.',
    details: 'Bastion is a secure, user-friendly app designed to help you manage your sensitive files. With its simple interface and robust security features, Bastion ensures that your data is protected while remaining easily accessible client-side.',
    link: 'https://github.com/infinimineralex/Bastion',
  },
  {
    title: 'Charcoal',
    image: '/images/charcoal1.png',
    description: 'Charcoal is a lightweight and efficient C++ application designed for grayscaling ebooks in several popular formats.',
    details: 'Charcoal is a lightweight and efficient C++ application designed for grayscaling ebooks in several popular formats. Additionally, Charcoal\'s Calibre plugin suite makes grayscaling/resolution modifying ebooks easy from the Calibre program. In short, Charcoal is three products in one!',
    link: 'https://github.com/ChicoState/ebook-image',
  },
  {
    title: 'Tau Beta Pi',
    image: '/images/tbp.png',
    description: 'Modernized the online presence of the Tau Beta Pi chapter at CSU Chico.',
    details: 'The Tau Beta Pi (TBP) website is a project I worked on to modernize the online presence of the TBP chapter at California State University, Chico. The website features a sleek design, easy navigation, and showcases the chapter\'s activities and achievements.',
    link: 'https://www.ecst.csuchico.edu/tbp/index.html',
  },
  {
    title: 'Divide',
    image: '/images/divide.png',
    description: 'A website that allows groups to split bills and expenses easily.',
    details: 'Divide is a website that allows groups to split bills and expenses easily. It provides a simple interface for users to input their expenses and automatically calculates how much each person owes or is owed.',
    link: '#',
  },
];

export default function ProjectsSection({ projectsRef, projectsVisible }: { projectsRef: React.RefObject<HTMLDivElement>, projectsVisible: boolean }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section className="py-12 bg-gray-00 flex flex-col items-center" ref={projectsRef}>
      <h2 className="text-4xl font-bold mb-8 text-white">Selected Projects</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}> 
        {projects.map((project, idx) => (
          <div key={project.title} className="rounded-2xl shadow-xl p-4 bg-white/10 backdrop-blur-md relative flex flex-col">
            <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-md mb-2" />
            <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-white mb-2">{project.description}</p>
            {expanded === idx && (
              <p className="text-white text-sm mb-2">{project.details}</p>
            )}
            <div className="flex gap-2 mt-auto">
              {project.link && project.link !== '#' && (
                <a href={project.link} className="text-blue-400 hover:underline text-sm" target="_blank" rel="noopener noreferrer">View Project</a>
              )}
              <button
                className="ml-auto text-xs text-gray-300 hover:text-white underline"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                {expanded === idx ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
