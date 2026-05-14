import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Space_Grotesk, Crimson_Pro } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
	variable: "--font-crimson-pro",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: `${siteConfig.name} | ${ siteConfig.job }`,
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.url),
	alternates: { canonical: "/" },
	openGraph: { type: "website", locale: "fr_FR", url: siteConfig.url, description: siteConfig.description, images: [{
		url: "/opengraph-image.jpg",
		width: 1200,
		height: 630
	}], siteName: siteConfig.name},
	twitter: {
		card: "summary_large_image",
		title: `${siteConfig.name} | ${siteConfig.job}`,
		description: siteConfig.description,
		images: ["/opengraph-image.jpg"],
	},
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.name,
	robots: { index: true, follow: true , googleBot: { index: true, follow: true } },
	keywords: ["Développeur fullstack", "Strasbourg", "Laravel", "React", "TypeScript", "Next.js", "Freelance", "Développeur web"],
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html
		lang="fr"
			className={`${spaceGrotesk.variable} ${crimsonPro.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<main className="flex flex-1 flex-col w-full">
					{children}
				</main>
			</body>
		</html>
	);
}
