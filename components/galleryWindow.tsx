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
    <div className='portfolio-window'>
      <div className='row'>
        <div className='column left'>
          <span className='dot' style={{ background: '#ff4b37' }}></span>
          <span className='dot' style={{ background: '#fae04b' }}></span>
          <span className='dot' style={{ background: '#6be06b' }}></span>
        </div>
        <div className='column right'>
          <span className='window-title'>
            <strong>TRIBUTE PAGE PROJECT</strong>
          </span>
        </div>
      </div>

      <div className='portfolio-content'>
        <a
          href='https://hanleymark.github.io/tribute-page/'
          target='_blank'
          aria-label='Tribute project link'
        >
          <div className='portfolio-image-container'>
            <img
              className='portfolio-image'
              src='./images/portfolio-tribute-page.png'
              alt='Tribute project thumbnail image'
            />
            <p className='portfolio-image-overlay'>Tap/click to launch!</p>
          </div>
        </a>

        <div className='portfolio-text'>
          <div className='row-mini-window'>
            <div className='column left-mini-window'>
              <h4 className='portfolio-text-title'>
                Tribute page project<span id='tribute-ellipsis'>...</span>
              </h4>
            </div>
            <div className='column right-mini-window'>
              <button className='portfolio-button'>More</button>
            </div>
          </div>
          <div id='tribute-hidden' className='hidden'>
            <p>
              This was my beginning in web development! A simple single-page
              project about the musician Nick Drake.
            </p>
            <p>Key learning:</p>
            <ul className='portfolio-list'>
              <li>Basic HTML including semantic elements</li>
              <li>Simple JavaScript to manipulate page elements dynamically</li>
              <li>First steps in CSS</li>
            </ul>
            <p>Next steps:</p>
            <ul className='portfolio-list'>
              <li>Make it prettier!</li>
              <li>Size flex items consistently</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryWindow;
