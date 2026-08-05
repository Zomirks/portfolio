import { experiences, type Experience } from '@/config/experiences';
import { formatPeriod, getDuration } from '@/lib/date';
import Reveal from '@components/ui/reveal';
import { IconArrowUpRight } from '@tabler/icons-react';

export default function Experiences() {
    const sorted = [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));

    if (sorted.length === 0) return null;

    return (
        <section id="experiences" className="container mx-auto px-10 py-24 scroll-mt-20">
            <h3 className="section-title text-center sm:text-left">Expériences Professionnelles</h3>

            <ul className="relative mt-10 space-y-14 border-l border-foreground-subtle/25 pl-6 md:mt-14 md:space-y-20 md:pl-12">
                {sorted.map((exp: Experience, i) => {
                    const duration = getDuration(exp.startDate, exp.endDate);

                    return (
                        <Reveal
                            as="li"
                            key={`${exp.company}-${exp.startDate}`}
                            delay={i * 0.08}
                            className="relative"
                        >
                            <span
                                aria-hidden
                                className="absolute top-[0.6rem] -left-6 h-px w-3 bg-foreground-subtle/60 md:-left-12 md:w-6"
                            />

                            <p className="font-fraunces text-sm italic leading-[1.15] text-foreground-muted tabular-nums">
                                {formatPeriod(exp.startDate, exp.endDate)}
                                {duration && ` · ${duration}`}
                            </p>

                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                                <h4 className="font-inter text-xl leading-snug md:text-2xl">
                                    {exp.title}
                                </h4>
                                <span className="rounded-sm border border-foreground-subtle/40 px-2 py-0.5 text-xs tracking-wider text-foreground-muted uppercase">
                                    {exp.type}
                                </span>
                            </div>

                            <p className="mt-1 text-foreground-muted">
                                {exp.link ? (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-1 text-foreground"
                                    >
                                        <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">
                                            {exp.company}
                                        </span>
                                        <IconArrowUpRight className="size-4 shrink-0 opacity-60 transition-[opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100" />
                                    </a>
                                ) : (
                                    <span className="text-foreground">{exp.company}</span>
                                )}
                                {exp.location && <>, {exp.location}</>}
                            </p>

                            {exp.description && (
                                <p className="mt-4 max-w-[65ch] leading-relaxed">
                                    {exp.description}
                                </p>
                            )}

                            {exp.highlights && (
                                <ul className="mt-4 grid list-disc gap-x-10 gap-y-2 pl-5 leading-relaxed marker:text-foreground-subtle">
                                    {exp.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            )}

                            {exp.stacks.length > 0 && (
                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {exp.stacks.map((stack) => (
                                        <li
                                            key={stack}
                                            className="rounded-sm border border-foreground-subtle/30 px-2.5 py-1 text-sm text-foreground-muted"
                                        >
                                            {stack}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Reveal>
                    );
                })}
            </ul>
        </section>
    );
}
