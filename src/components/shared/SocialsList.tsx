import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import MailLink from "./MailLink";

export default function SocialsList({ className }: { className?: string }) {
	return (
		<div className={cn("flex", className)}>
			<MailLink />
			{siteConfig.socials
				.filter((social) => social.href)
				.map((social) => {
					const Icon = social.icon;
					return (
						<a
							key={social.label}
							href={social.href}
							aria-label={`Lien vers ${social.label}`}
							className="p-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon />
						</a>
					);
				})}
		</div>
	);
}
