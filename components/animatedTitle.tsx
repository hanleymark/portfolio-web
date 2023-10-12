'use client';

import styles from './animatedTitle.module.css';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {
  text: string;
  delay?: number;
  replay: boolean;
  duration?: number;
}

const AnimatedTitle = ({
  text,
  delay = 0.25,
  duration = 0.1,
  replay,
  ...props
}: Props) => {
  const letters = Array.from(text);
  const fontSize = `${(100 / letters.length).toFixed(2)}vw`;
  const MAX_FONT_SIZE = '4rem';

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 5,
        stiffness: 300,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 5,
        stiffness: 300,
      },
    },
  };
  return (
    <motion.h1
      className={`${styles.title} flex overflow-visible`}
      style={{ fontSize: `min(${fontSize}, ${MAX_FONT_SIZE})` }}
      variants={container}
      initial='hidden'
      animate={replay ? 'visible' : 'hidden'}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTitle;
