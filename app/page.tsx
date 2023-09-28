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
      <main className='stack-lg  centre'>
        <AnimatedTitle text={'MARK HANLEY'} replay={true} />
        <About heading={'About'} />
        <ProjectGallery heading={'Projects'} />
        <Contact heading={'Contact'} />
      </main>
    </>
  );
}
