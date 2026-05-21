import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { siteConfig } from '@/config/site';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
    variable: '--font-fraunces',
    subsets: ['latin'],
});

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: `${siteConfig.name} | ${siteConfig.job}`,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: '/' },
    openGraph: {
        title: `${siteConfig.name} | ${siteConfig.job}`,
        type: 'website',
        locale: 'fr_FR',
        url: siteConfig.url,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} | ${siteConfig.job}`,
        description: siteConfig.description,
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    keywords: [
        'Développeur fullstack',
        'Strasbourg',
        'Laravel',
        'React',
        'TypeScript',
        'Next.js',
        'Freelance',
        'Développeur web',
    ],
};

export const viewport: Viewport = {
    themeColor: '#1a1818',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
};

const [addressLocality, addressRegion, addressCountry] = siteConfig.location.split(', ');

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.job,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/photo-cyril-fischer.webp`,
    email: `${siteConfig.email.user}@${siteConfig.email.domain}`,
    address: {
        '@type': 'PostalAddress',
        addressLocality,
        addressRegion,
        addressCountry,
    },
    sameAs: siteConfig.socials.map((social) => social.href),
    knowsAbout: siteConfig.skills,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />

                <main className="flex flex-1 flex-col w-full">{children}</main>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
