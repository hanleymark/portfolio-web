import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Contact from '@/components/contact';
import ProjectGallery from '@/components/projectGallery';
import AnimatedTitle from '@/components/animatedTitle';
import { projects } from '@/data/projectData';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-6'>
        <div className='h-10'></div>
        <AnimatedTitle text={'MARK HANLEY'} replay={true} />
        <h2>WEB DEVELOPER</h2>
        <main className='stack-lg text-justify'>
          <About heading='About' />
          <ProjectGallery heading='Projects' projects={projects} />
          <Contact heading='Contact' />
        </main>
      </div>
    </>
  );
}
