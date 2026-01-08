'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
  distance?: number;
}

export default function MotionSection({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  distance = 40,
}: MotionProps) {
  const variants = {
    left: { opacity: 0, x: -distance },
    right: { opacity: 0, x: distance },
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
