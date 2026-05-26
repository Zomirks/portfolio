import type { Metadata } from 'next';
import Link from 'next/link';
import { Caveat } from 'next/font/google';

import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Page non trouvée | ${siteConfig.name}`,
    description: "La page que vous cherchez n'existe pas ou a été déplacée.",
    robots: { index: false },
};

const caveat = Caveat({
    variable: '--font-caveat',
    subsets: ['latin'],
});

export default function NotFound() {
    return (
        <div
            className={`${caveat.variable} min-h-screen flex flex-col items-center justify-center`}
        >
            <h1 className="text-6xl font-bold uppercase text-center">Erreur 404</h1>
            <p className="text-2xl mt-10">
                Page <span className="sr-only">non</span>
                <span className="relative inline-block align-baseline" aria-hidden="true">
                    <span className="font-caveat text-red-500 text-3xl leading-none">x</span>
                    <span className="absolute left-7 -top-7 -rotate-9 font-caveat text-red-500 text-3xl leading-none whitespace-nowrap">
                        non
                    </span>
                    <svg
                        className="absolute -top-3 left-0.5 text-red-500 pointer-events-none"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M26 4 C 10 5, 5 15, 5 26" />
                        <path d="M2.5 20 L 5 26 L 7.5 20" />
                    </svg>
                </span>{' '}
                trouvée
            </p>

            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
            >
                Retourner à l&apos;accueil
            </Link>

            <DotPattern
                glow={true}
                width={32}
                height={32}
                className={cn(
                    '-z-10',
                    'mask-[radial-gradient(400px_circle_at_center,white,transparent)]',
                    'sm:mask-[radial-gradient(600px_circle_at_center,white,transparent)]',
                    'md:mask-[radial-gradient(800px_circle_at_center,white,transparent)]'
                )}
            />
        </div>
    );
}
