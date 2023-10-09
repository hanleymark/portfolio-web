'use client';
import React, { useRef } from 'react';

const LaptopAnimation = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  return (
    <div className='mx-auto w-9/12 max-w-md transform transition-transform duration-300'>
      <lottie-player
        id='laptop-animation'
        ref={ref}
        autoplay
        loop
        mode='normal'
        src='/animations/laptopAnimation.json'
        speed='0.3'
        aria-label='laptop-animation'
      ></lottie-player>
    </div>
  );
};

export default LaptopAnimation;
