import React from 'react';
import { ProjectData } from '@/types/projects';
import Image from 'next/image';

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
    <div className='aspect-4/3 h-auto w-full rounded-md bg-slate-200 p-1 shadow-md'>
      <div className='flex flex-row flex-nowrap'>
        <div className='m-1 basis-1/6'>
          <span className='text-2xl text-red-400'>{'\u25CF'}</span>
          <span className='text-2xl text-orange-200'>{'\u25CF'}</span>
          <span className='text-2xl text-green-300'>{'\u25CF'}</span>
        </div>
        <div className='m-1 flex basis-5/6 items-center justify-center bg-white font-normal text-gray-600 shadow-inner'>
          <span>{title}</span>
        </div>
      </div>
      <div className='h-full w-full'>
        <Image
          className='h-full w-full object-cover py-1'
          src={imageUrl}
          alt={imageAlt}
          layout='responsive'
          width={4}
          height={3}
        />
      </div>
      <div className='flex flex-wrap items-center justify-center space-x-2 space-y-2 pb-1 text-indigo-800'>
        {techStack.map((tech, index) => (
          <span
            key={index}
            className='h-fit w-fit transform rounded-lg bg-white p-1 text-xl shadow-lg transition-transform duration-300 first:mt-2 hover:scale-125'
          >
            <tech.icon />
          </span>
        ))}
      </div>
    </div>
  );
};

export default GalleryWindow;
