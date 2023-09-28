'use client';

import { useState } from 'react';
import NavButton from './navButton';

const Navbar = () => {
  const buttons = [
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
  ];

  const [activeButton, setActiveButton] = useState<string>(buttons[0].content);

  return (
    <header>
      <nav className='flex h-auto w-screen justify-center space-x-5 bg-gray-600 fixed'>
        {buttons.map((button, index) => {
          return (
            <NavButton
              key={index}
              content={button.content}
              link={button.link}
              isActive={activeButton === button.content}
              onClick={() => setActiveButton(button.content)}
            />
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
