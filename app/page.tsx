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
      <AnimatedTitle text={'MARK HANLEY'} replay={true} />
      <h2>WEB DEVELOPER</h2>
      <main className='stack-lg  centre'>
        <About heading='About' />
        <ProjectGallery heading='Projects' projects={projects} />
        <Contact heading='Contact' />
      </main>
    </>
  );
}
