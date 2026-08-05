import Image from 'next/image';
import { siteConfig } from '@/config/site';
import LanguageList from '@/components/shared/LanguageList';

import me from '@/assets/images/cyril-fischer.webp';

export default function About() {
    return (
        <section
            id="about"
            className="frame-container container mx-auto py-24 px-4 md:px-0 scroll-mt-20"
        >
            <div className="panel-header">
                <div className="notch-title">
                    <h3>À propos</h3>
                </div>
                <div className="notch-roof" />
            </div>

            <div className="inner-panel">
                <div className="panel-content">
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
                        <div className="flex-1 space-y-4">
                            {siteConfig.bio.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                            <LanguageList />
                        </div>

                        <div className="self-center md:self-start">
                            <Image
                                src={me}
                                alt={siteConfig.name}
                                className="w-64 h-64 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
