import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

export const siteConfig = {
	name: "Cyril Fischer",
	job: "Développeur Fullstack",
	description: "Développeur Web avec 7+ ans d'expérience, spécialisé en Laravel, React, TypeScript & Next.js. Interfaces performantes, accessibles et pensées pour la production.",
	location: "Strasbourg, Alsace, France",
	url: "https://www.cyril-fischer.com",
	cv: {
		href: "/cv-cyril-fischer-developpeur-fullstack.pdf",
		label: "Télécharger mon CV",
	},
	email: {
		user: "contact",
		domain: "cyril-fischer.com",
	},
	socials: [
		{ label: "Github", href: "https://github.com/Zomirks", icon: IconBrandGithub },
		{ label: "LinkedIn", href: "https://www.linkedin.com/in/cyril-fischer/", icon: IconBrandLinkedin },
	],
} as const;
