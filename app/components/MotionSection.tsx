// components/MotionSection.tsx
'use client';
import { motion } from 'framer-motion';

interface MotionProps {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
    delay?: number;
    className?: string; // <- nouveau
}

export default function MotionSection({ children, direction = 'up', delay = 0, className = '' }: MotionProps) {
    const variants = {
        left: { opacity: 0, x: -40 },
        right: { opacity: 0, x: 40 },
        up: { opacity: 0, y: 40 },
        down: { opacity: 0, y: -40 },
    };

    return (
        <motion.div
            initial={variants[direction]}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className={className} // <- ajouter la classe
        >
            {children}
        </motion.div>
    );
}
