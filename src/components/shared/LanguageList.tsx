import { siteConfig } from "@/config/site";

export default function LanguageList() {
	return (
		<div className="pt-5 border-t border-neutral-600/40">
			<p className="text-xs uppercase tracking-widest text-foreground-subtle mb-3 text-center md:text-start">Langues</p>
			<div className="flex flex-wrap justify-center md:justify-start gap-2">
				{siteConfig.languages.map((language) => (
					<div key={language.name} className="border border-neutral-500/60 rounded-sm px-3 py-1 text-sm hover:bg-foreground hover:text-background">
						<span>{language.name}</span>
						<span className="text-foreground-muted ml-2">· {language.level}</span>
					</div>
				))}
			</div>
		</div>
	);
}
