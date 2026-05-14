// import { ChevronDown } from "lucide-react";
import { IconDownload } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

import { DotPattern } from "@components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import SocialsList from "./SocialsList";

export default function Hero() {
	return (
		<section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="relative flex flex-col w-full h-full min-h-screen py-8">
				<div className="relative flex flex-col flex-1 items-center justify-center space-x-6 w-full">
					<div className="text-center">
						<h1 className="mb-4">
							<span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
							{siteConfig.job}
							</span>
							<span className="block text-2xl sm:text-3xl md:text-4xl mt-2">
								Cyril <strong className="uppercase">Fischer</strong>
							</span>
						</h1>

						<a
							href={siteConfig.cv.href}
							download
							target="_blank"
							rel="noopener noreferrer"
							className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
						>
							<IconDownload size={20} />
							{siteConfig.cv.label}
						</a>

						<SocialsList className="items-center justify-center space-x-6 mt-8" />
					</div>
				</div>
				{/* <div className="flex flex-col items-center">
					<div className="uppercase">Scroll</div>
					<ChevronDown className="animate-bounce"/>
				</div> */}

				<DotPattern 
					glow={true}
					width={32} height={32}
					className={cn(
						"-z-10",
						"mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
						"sm:mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
						"md:mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
					)}
				/>
			</div>
		</section>
	)
}