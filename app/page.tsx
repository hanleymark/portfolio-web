import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Contact from '@/components/contact';
import ProjectGallery from '@/components/projectGallery';
import AnimatedTitle from '@/components/animatedTitle';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AnimatedTitle text="MARK HANLEY" replay={true} className='text-6xl justify-center p-10'/>
        <About />
        <ProjectGallery />
        <Contact />
      </main>
    </>
  );
}
