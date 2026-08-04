import { certifications, type Certification } from '@/config/certifications';
import { IconArrowUpRight } from '@tabler/icons-react';
import Reveal from '../ui/reveal';

export default function Certifications() {
    const sorted = [...certifications].sort((a, b) => {
        if (b.startYear !== a.startYear) return b.startYear - a.startYear;
        return (b.endYear ?? b.startYear) - (a.endYear ?? a.startYear);
    });

    return (
        <section
            id="certifications"
            className="frame-container frame-mirrored container mx-auto py-24 px-4 md:px-0"
        >
            <div className="panel-header">
                <div className="notch-title">
                    <h3>Certifications & Formations</h3>
                </div>
                <div className="notch-roof" />
            </div>

            <div className="inner-panel">
                <div className="panel-content">
                    <ul className="divide-y divide-foreground-subtle/30">
                        {sorted.map((cert: Certification, i) => {
                            const Wrapper = cert.link ? 'a' : 'div';
                            const wrapperProps = cert.link
                                ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
                                : {};

                            return (
                                <Reveal
                                    as="li"
                                    key={`${cert.school}-${cert.name}`}
                                    delay={i * 0.08}
                                >
                                    <Wrapper
                                        {...wrapperProps}
                                        className="group grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-3 md:gap-12 py-8 transition-colors"
                                    >
                                        <div className="font-fraunces italic text-2xl md:text-3xl text-foreground-muted group-hover:text-foreground transition-colors duration-300 tabular-nums">
                                            {cert.endYear
                                                ? `${cert.startYear}-${cert.endYear}`
                                                : cert.startYear}
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-xl md:text-2xl text-foreground leading-snug flex items-start gap-3">
                                                <span>{cert.name}</span>
                                                {cert.link && (
                                                    <IconArrowUpRight className="mt-1 size-5 shrink-0 -translate-x-2 translate-y-1 opacity-60 transition-[opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0 group-hover:opacity-100" />
                                                )}
                                            </p>
                                            <p className="text-foreground-muted">
                                                {cert.school}
                                                {cert.location && <>, {cert.location}</>}
                                            </p>
                                            {cert.description && (
                                                <p className="font-fraunces italic text-foreground-subtle pt-1 leading-relaxed">
                                                    {cert.description}
                                                </p>
                                            )}
                                        </div>
                                    </Wrapper>
                                </Reveal>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
