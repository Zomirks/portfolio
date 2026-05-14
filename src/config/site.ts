import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

export const siteConfig = {
	name: "Cyril Fischer",
	job: "Développeur Fullstack",
	location: "Strasbourg, Alsace, France",
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
