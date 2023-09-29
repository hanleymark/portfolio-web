import React from 'react';

interface Props {
  title: string;
  image: string;
  link: string;
  alt: string;
  description: string;
}

const GalleryWindow = (props: Props) => {
  return (
    <div className='aspect-4/3 h-auto w-full w-full rounded-md bg-slate-300 p-2 shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4'>
      Hello
    </div>
  );
};

export default GalleryWindow;
