'use client';
import { useEffect, useRef } from 'react';

const MHAnimation = () => {
  const ref = useRef(null);
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  return (
    <div className='mx-auto w-9/12 max-w-md transform transition-transform duration-300'>
      <lottie-player
        id='mh-animation'
        ref={ref}
        autoplay
        mode='normal'
        src='/animations/mhAnimation.json'
        speed='0.3'
        aria-label='laptop-animation'
      ></lottie-player>
    </div>
  );
};

export default MHAnimation;
