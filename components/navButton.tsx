import React from 'react';
import Link from 'next/link';
import styles from './navButton.module.css';

type NavButtonProps = {
    content: string;
    link: string;
    isActive: boolean;
    onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({content, link, isActive, onClick}) => {
    return (
        <Link href={link} className={`${styles.navButton} ${isActive ? styles.isActive : ''}`} onClick={onClick}>
            {content}
        </Link>
    );
}

export default NavButton;