import { siteConfig } from '@/config/site';

export default function LanguageList() {
    return (
        <div className="pt-5 border-t border-neutral-600/40">
            <p className="text-xs uppercase tracking-widest text-foreground-subtle mb-3 text-center md:text-start">
                Langues
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                {siteConfig.languages.map((language) => (
                    <li
                        key={language.name}
                        className="rounded-sm border border-foreground-subtle/30 px-2.5 py-1 text-sm"
                    >
                        <span>{language.name}</span>
                        <span className="text-foreground-muted ml-2">· {language.level}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
