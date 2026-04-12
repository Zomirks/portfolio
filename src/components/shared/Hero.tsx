import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

import { DotPattern } from "@components/ui/dot-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation"
import { cn } from "@/lib/utils";

export default function Hero() {
	return (
		<section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="relative flex flex-col w-full h-full min-h-screen py-8">
				<div className="relative flex flex-col flex-1 items-center justify-center space-x-6 w-full">
					<div className="text-center">
						<TypingAnimation
							typeSpeed={64}
							as="h1"
							words={[...siteConfig.title.split(" "), siteConfig.title]}
							className="text-8xl mb-4"
							cursorStyle="underscore"
						>
							{siteConfig.title}
						</TypingAnimation>
						<p className="text-4xl">Cyril <strong className="uppercase">Fischer</strong></p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="uppercase">Scroll</div>
					<ChevronDown className="animate-bounce"/>
				</div>

				<DotPattern 
					glow={true}
					width={32} height={32}
					className={cn(
						"-z-10 mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
					)}
				/>
			</div>
		</section>
	)
}