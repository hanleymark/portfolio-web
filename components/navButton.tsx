import Link from 'next/link';
import styles from './navButton.module.css';

type NavButtonProps = {
  content: string;
  link: string;
  isActive: boolean;
  isMobile: boolean;
  onClick: () => void;
};

const NavButton = ({
  content,
  link,
  isActive,
  isMobile,
  onClick,
}: NavButtonProps) => {
  return (
    <Link
      href={link}
      className={`${isMobile ? styles.navButtonMobile : styles.navButton} ${isActive ? styles.isActive : ''}`}
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

export default NavButton;
