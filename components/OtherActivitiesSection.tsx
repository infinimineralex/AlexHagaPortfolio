import Image from 'next/image';

export default function OtherActivitiesSection({ otherProjectsRef, otherProjectsVisible }: { otherProjectsRef: React.RefObject<HTMLDivElement>, otherProjectsVisible: boolean }) {
  return (
    <section className="py-12 bg-gray-00 flex flex-col items-center" ref={otherProjectsRef}>
      <h2 className="text-4xl font-bold mb-8 text-white">Other Activities</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl transition-all duration-700 ${otherProjectsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        {/* Project Card: PMC */}
        <div className="rounded-2xl shadow-xl p-6" style={{ background: 'rgba(0, 0, 0, 0.1)', borderRadius: '20px', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(0px)' }}>
          <Image src="/images/seasidepalace.webp" alt="PMC" width={500} height={300} className="rounded-md mb-4" />
          <Image src="/images/pmc2.png" alt="Minecraft Project 2" width={500} height={300} className="rounded-md mb-4" />
          <h3 className="text-white text-2xl font-bold mb-2">Planet Minecraft</h3>
          <p className="text-white mb-4">
            I&apos;ve worked in the Minecraft community for over 8 years, and I have a large following on Planet Minecraft. I have created many projects, including skins, mods, and maps. My work has been featured in various Minecraft publications and has received recognition from the community. Here is my PMC profile, where you can find some of my work:
          </p>
          <a href="https://www.planetminecraft.com/member/-infinity-/" className="text-blue-600 hover:underline">Planet Minecraft Profile</a>
        </div>
        {/* Project Card: Other Endeavors */}
        <div className="rounded-2xl shadow-xl p-6" style={{ background: 'rgba(0, 0, 0, 0.1)', borderRadius: '20px', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(0px)' }}>
          <Image src="/images/secret.png" alt="Minecraft Project" width={500} height={300} className="rounded-md mb-4" />
          <Image src="/images/secret3.png" alt="Minecraft Project" width={500} height={300} className="rounded-md mb-4" />
          <h3 className="text-white text-2xl font-bold mb-2">Other Minecraft Endeavors</h3>
          <p className="text-white mb-4">
            There are other, more secret Minecraft projects I have worked on, including a few unreleased skins, mods, and maps. I have also been involved in the administration of several Minecraft servers, where I have contributed to server management, map development, and community engagement. If you are interested in collaborating or learning more about my work in the Minecraft community, feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}
