import React from 'react';
import cntl from 'cntl';
import { ProjectData } from '@/types/projects';
import Image from 'next/image';

const windowTW = cntl`
  w-full
  aspect-4/3
  h-auto
  rounded-md
  bg-slate-300
  shadow-md
  md:w-full
  lg:w-1/2
  xl:w-1/3
  2xl:w-1/4
  flex
`;

const GalleryWindow = ({
  title,
  description,
  imageUrl,
  imageAlt,
  repoLink,
  deploymentLink,
  techStack,
}: ProjectData) => {
  return (
    <div className={windowTW}>
      <div className='w-max flex-row flex-nowrap gap-1'>
        <div className='w-max basis-1/6'>OOO</div>
        <div className='w-max basis-5/6 bg-white'>{title}</div>
      </div>
      <div className='h-full w-full'>
        <Image
          className='h-full w-full object-cover'
          src={imageUrl}
          alt={imageAlt}
          layout='responsive'
          width={4}
          height={3}
        />
      </div>
      <ul>
        {techStack.map((tech, index) => (
          <tech.icon key={tech.description}/>
        ))}
      </ul>
    </div>
  );
};

export default GalleryWindow;
