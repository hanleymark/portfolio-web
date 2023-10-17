'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ProjectGallery from '@/components/ProjectGallery';
import AnimatedTitle from '@/components/AnimatedTitle';
import MHAnimation from '@/components/MHAnimation';
import ScrollAnchor from '@/components/ScrollAnchor';
import { projects } from '@/data/projectData';

export default function Home() {
  return (
    <>
      <ScrollAnchor id='about' offset={'2rem'} />
      <div className='mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-6'>
        <div className='h-10'></div>
        <AnimatedTitle text={'MARK HANLEY'} replay={true} />
        <h2>WEB DEVELOPER</h2>
        <MHAnimation />
        <main className='text-justify'>
          <About heading='About' />
          <ScrollAnchor id='projects' offset={'2rem'} />
          <ProjectGallery heading='Projects' projects={projects} />
          <ScrollAnchor id='contact' offset={'2rem'} />
          <Contact heading='Contact' />
          <div className='h-10 text-center'>{'\u00A9 Mark Hanley 2023'}</div>
        </main>
      </div>
    </>
  );
}
