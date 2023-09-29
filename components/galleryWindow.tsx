import React from 'react';
import cntl from 'cntl';

interface Props {
  title: string;
  image: string;
  link: string;
  alt: string;
  description: string;
}

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

const GalleryWindow = (props: Props) => {
  return (
    <div className={windowTW}>
      <div className='w-max flex-row flex-nowrap gap-1'>
        <div className='w-max basis-1/6'>Left</div>
        <div className='w-max basis-5/6 bg-white'>Right</div>
      </div>
    </div>
  );
};

export default GalleryWindow;
