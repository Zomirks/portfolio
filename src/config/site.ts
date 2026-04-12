import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

export const siteConfig = {
	name: "Cyril Fischer",
	title: "Développeur Fullstack",
	location: "Strasbourg, Alsace, France",
	socials: [
		{ label: "Github", href: "https://github.com/Zomirks", icon: IconBrandGithub },
		{ label: "LinkedIn", href: "https://www.linkedin.com/in/cyril-fischer/", icon: IconBrandLinkedin },
	],
} as const;
