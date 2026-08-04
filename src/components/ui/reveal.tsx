'use client';
import { motion, useReducedMotion } from 'motion/react';

const elements = {
    div: motion.div,
    li: motion.li,
} as const;

type RevealProps = {
    children: React.ReactNode;
    as?: keyof typeof elements;
    delay?: number;
    className?: string;
};

export default function Reveal({ children, as = 'div', delay = 0, className }: RevealProps) {
    const prefersReducedMotion = useReducedMotion();
    const Element = elements[as];

    return (
        <Element
            className={className}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </Element>
    );
}
