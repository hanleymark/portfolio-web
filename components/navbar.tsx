"use client"

import React from 'react';
import { useState } from 'react';
import NavButton from './navButton';

const Navbar: React.FC = () => {
const buttons = [
    {
        content: 'About',
        link: '#',
    },
    {
        content: 'Projects',
        link: '#',
    },
    {
        content: 'Contact',
        link: '#',
    },
];

const [activeButton, setActiveButton] = useState<string>(buttons[0].content);

  return (
    <header>
      <nav className='w-screen bg-gray-600 h-auto flex justify-center space-x-5'>
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
