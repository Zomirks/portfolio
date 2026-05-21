import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${siteConfig.name} | ${siteConfig.job}`,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        dir: 'ltr',
        lang: 'fr-FR',
        background_color: '#1a1818',
        theme_color: '#1a1818',
        icons: [
            {
                src: '/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    };
}
