import type { Metadata } from "next";
import { Space_Grotesk, Crimson_Pro } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Cyril Fischer | Développeur Full Stack",
	description: "Développeur Web avec 7+ ans d'expérience, spécialisé en React, TypeScript & Next.js. Interfaces performantes, accessibles et pensées pour la production.",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html
		lang="en"
			className={`${spaceGrotesk.variable} ${crimsonPro.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<Header />

				<main className="flex flex-1 flex-col w-full">
					{children}
				</main>
			</body>
		</html>
	);
}
