'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Contact from '@/components/contact';
import ProjectGallery from '@/components/projectGallery';
import AnimatedTitle from '@/components/animatedTitle';
import { projects } from '@/data/projectData';
import React, { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  React.useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  return (
    <div id={'about'}>
      <Navbar />
      <div className='mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-6'>
        <div className='h-10'></div>
        <AnimatedTitle text={'MARK HANLEY'} replay={true} />
        <h2>WEB DEVELOPER</h2>
        <div className='mx-auto w-9/12 max-w-md'>
          <lottie-player
            id='laptop-animation'
            ref={ref}
            autoplay
            loop
            mode='normal'
            src='/animations/laptopAnimation.json'
          ></lottie-player>
        </div>
        <main className='stack-lg text-justify'>
          <About heading='About' />
          <ProjectGallery heading='Projects' projects={projects} />
          <Contact heading='Contact' />
        </main>
      </div>
    </div>
  );
}
