'use client';

import { useState } from 'react';
import NavButton from './navButton';
import AnimatedTitle from './animatedTitle';

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

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const MobileNav = ({
  open,
  setOpen,
  activeButton,
  setActiveButton,
}: MobileNavProps) => {
  return (
    <div
      className={`absolute left-0 top-0 h-screen w-screen transform bg-inherit ${
        open ? '-translate-x-0' : '-translate-x-full'
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className='flex h-20 items-center justify-center bg-inherit drop-shadow-md filter mb-4'>
        <p className='text-[2rem]'>MARK HANLEY</p>
      </div>
      <div className='ml-2 flex flex-col'>
        {navButtonData.map((button) => {
          return (
            <NavButton
              key={`nav-${button.content}`}
              content={button.content}
              link={button.link}
              isActive={activeButton === button.content}
              isMobile={true}
              onClick={() => {
                setActiveButton(button.content);
                setOpen(false);
              }}
            />
          );
        })}
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
      <nav className='fixed z-10 flex h-8 w-screen items-end justify-end space-x-2 border-b-2 border-transparent bg-gray-600 px-4 md:justify-center'>
        <MobileNav
          open={open}
          setOpen={setOpen}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        {navButtonData.map((button) => {
          return (
            <div
              className='hidden md:block'
              key={`mobile-nav-${button.content}`}
            >
              <NavButton
                content={button.content}
                link={button.link}
                isActive={activeButton === button.content}
                isMobile={false}
                onClick={() => setActiveButton(button.content)}
              />
            </div>
          );
        })}
        <div className='flex items-center justify-center'>
          <div
            className='z-20 flex h-7 w-7 cursor-pointer flex-col items-center justify-center space-y-2 md:hidden'
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* Burger menu with animation */}
            <span
              className={`h-[2px] w-full transform rounded-lg bg-white transition duration-300 ease-in-out ${
                open ? 'translate-y-2.5 rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-lg bg-white transition-all duration-300 ease-in-out ${
                open ? ' translate-x-full opacity-0' : 'opacity-1 translate-x-0'
              }`}
            />
            <span
              className={`h-[2px] w-full transform rounded-lg bg-white transition duration-300 ease-in-out ${
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
