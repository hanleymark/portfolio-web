'use client';

import { useState } from 'react';
import NavButton from './navButton';

const navButtonData = [
  {
    content: 'About',
    link: '#about',
  },
  {
    content: 'Projects',
    link: '#gallery',
  },
  {
    content: 'Contact',
    link: '#contact',
  },
  {
    content: 'Blog',
    link: '/blog',
  },
];

const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute left-0 top-0 h-screen w-screen transform bg-inherit ${
        open ? '-translate-x-0' : '-translate-x-full'
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className='flex h-20 items-center justify-center bg-white drop-shadow-md filter'>
        {' '}
        {/*logo container*/}
        <a className='text-xl font-semibold' href='/'>
          LOGO
        </a>
      </div>
      <div className='ml-4 flex flex-col'>
        <a
          className='my-4 text-xl font-medium'
          href='/about'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className='my-4 text-xl font-normal'
          href='/contact'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [activeButton, setActiveButton] = useState<string>(
    navButtonData[0].content
  );

  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className='w-full'>
      <nav className='fixed px-8  z-10 flex h-auto h-max w-screen justify-end space-x-3 bg-gray-600 md:justify-center'>
        <MobileNav open={open} setOpen={setOpen} />
        {navButtonData.map((button) => {
          return (
            <NavButton
              key={`nav-${button.content}`}
              content={button.content}
              link={button.link}
              isActive={activeButton === button.content}
              onClick={() => setActiveButton(button.content)}
            />
          );
        })}
        <div className='HELLO flex justify-center items-center'>
          <div
            className='z-20 flex h-7 w-7 cursor-pointer flex-col items-center justify-center space-y-2 md:hidden'
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-[2px] w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                open ? 'translate-y-2.5 rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
                open ? ' translate-x-full opacity-0' : 'opacity-1 translate-x-0'
              }`}
            />
            <span
              className={`h-[2px] w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
                open ? '-translate-y-2.5 -rotate-45' : ''
              }`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
