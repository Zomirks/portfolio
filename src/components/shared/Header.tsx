import { siteConfig } from "@/config/site";
import { BurgerMenu } from "@components/ui/burger-menu";

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 fixed z-10 w-full">
			<div className="font-space">Cyril Fischer</div>

			<div className="flex items-center space-x-6">
				{siteConfig.socials.length > 0 &&
					<div className="flex space-x-4">
						{siteConfig.socials
							.filter((social) => social.href)
							.map((social) => {
							const Icon = social.icon;
							return (
								<a key={social.label} href={social.href} aria-label={`Lien vers ${social.label}`} className="p-2" target="_blank" rel="noopener noreferrer">
									<Icon />
								</a>
							);
						})}
					</div>
				}

				<BurgerMenu />
			</div>
		</header>
	)
}