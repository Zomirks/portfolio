import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

export const siteConfig = {
	name: "Cyril Fischer",
	job: "Développeur Fullstack",
	description: "Développeur avec 7+ ans d'expérience web, spécialisé en Laravel, React, TypeScript & Next.js. Interfaces performantes, accessibles et pensées pour la production.",
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
	bio: [
		"Développeur avec 7+ ans d'expérience web, j'ai développé de multiples sites vitrines & e-commerce réalisés sur-mesure pour répondre aux besoins des clients.",
		"Après plusieurs années sur des projets principalement axés PHP & Javascript, je me spécialise aujourd'hui sur une stack moderne avec Laravel / React / TypeScript ou encore Next.js, que je mets en pratique sur des projets concrets.",
	],
	skills: ["Laravel", "React", "TypeScript", "Next.js", "PHP", "HTML", "JavaScript", "WordPress"],
	languages: [
		{ name: "Français", level: "Langue Maternelle"},
		{ name: "Anglais", level: "Professionnel"},
		{ name: "Allemand", level: "Débutant"},
		{ name: "Japonais", level: "Autodidacte" }
	]
} as const;
