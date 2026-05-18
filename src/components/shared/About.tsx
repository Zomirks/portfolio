import Image from "next/image";
import { siteConfig } from "@/config/site";

import me from "@/assets/images/cyril-fischer.webp";

export default function About() {
	return (
		<section id="about" className="grid grid-cols-3 min-h-screen">
			<div className="col-span-2">
				<h2>A propos</h2>

				{siteConfig.languages.length > 0 && (
					siteConfig.languages.map((language) => {
						return <div key={language.name}>
							<p>{language.name}: {language.level}</p>
						</div>
					})
				)}
			</div>
			<div className="flex justify-between items-center">
				<Image
					src={me}
					alt={siteConfig.name}
					className="rounded-full size-128 object-cover grayscale hover:grayscale-0 transition-all duration-500"
					placeholder="blur"
				/>
			</div>
		</section>
	)
}