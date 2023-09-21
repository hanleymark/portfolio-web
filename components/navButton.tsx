import Link from 'next/link';
import styles from './navButton.module.css';

type NavButtonProps = {
  content: string;
  link: string;
  isActive: boolean;
  onClick: () => void;
};

const NavButton = ({ content, link, isActive, onClick }: NavButtonProps) => {
  return (
    <Link
      href={link}
      className={`${styles.navButton} ${isActive ? styles.isActive : ''}`}
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

export default NavButton;
