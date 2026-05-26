'use client';

import Link from 'next/link';
import { Caveat } from 'next/font/google';

import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

const caveat = Caveat({
    variable: '--font-caveat',
    subsets: ['latin'],
});

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.error(error.digest);

    return (
        <div
            className={`${caveat.variable} min-h-screen flex flex-col items-center justify-center`}
        >
            <h1 className="text-6xl font-bold uppercase text-center">Erreur 500</h1>
            <p className="text-2xl mt-10">Une erreur est survenue</p>

            {error.digest && (
                <p className="mt-4 text-sm text-foreground/50">Code : {error.digest}</p>
            )}

            <div className="mt-8 flex gap-4">
                <button
                    onClick={reset}
                    className="font-inter inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-90"
                >
                    Réessayer
                </button>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-5 py-2.5 transition-colors hover:bg-foreground hover:text-background"
                >
                    Retourner à l&apos;accueil
                </Link>
            </div>

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
