'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ProjectGallery from '@/components/ProjectGallery';
import AnimatedTitle from '@/components/AnimatedTitle';
import MHAnimation from '@/components/MHAnimation';
import { projects } from '@/data/projectData';

export default function Home() {
  return (
    <div id='about'>
      <div className='mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-6'>
        <div className='h-10'></div>
        <AnimatedTitle text={'MARK HANLEY'} replay={true} />
        <h2>WEB DEVELOPER</h2>
        <MHAnimation />
        <main className='stack-lg text-justify'>
          <About heading='About' />
          <ProjectGallery heading='Projects' projects={projects} />
          <Contact heading='Contact' />
        </main>
      </div>
    </div>
  );
}
