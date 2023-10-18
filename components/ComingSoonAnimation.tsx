'use client';
import { useEffect, useRef } from 'react';

const ComingSoonAnimation = () => {
  const ref = useRef(null);
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  return (
    <div className='mx-auto w-9/12 max-w-md transform transition-transform duration-300'>
      <lottie-player
        id='rocket-animation'
        ref={ref}
        autoplay
        loop
        mode='normal'
        src='/animations/cogAnimation.json'
        speed='1'
        aria-label='spinning cog animation'
      ></lottie-player>
      <h2>coming soon...</h2>
    </div>
  );
};

export default ComingSoonAnimation;
