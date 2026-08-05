'use client';

import { useSyncExternalStore, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const SCROLL_THRESHOLD = 8;

function subscribe(onStoreChange: () => void) {
    window.addEventListener('scroll', onStoreChange, { passive: true });
    return () => window.removeEventListener('scroll', onStoreChange);
}

const getSnapshot = () => window.scrollY > SCROLL_THRESHOLD;
const getServerSnapshot = () => false;

type StickyHeaderProps = {
    className?: string;
    children: ReactNode;
};

export function StickyHeader({ className, children }: StickyHeaderProps) {
    const scrolled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return (
        <header
            className={cn(
                'transition-[background-color,backdrop-filter] duration-500',
                scrolled && 'bg-surface/60 backdrop-blur-sm',
                className
            )}
        >
            {children}
        </header>
    );
}
