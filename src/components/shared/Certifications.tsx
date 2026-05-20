import { certifications, type Certification } from "@/config/certifications";

export default function Certifications() {
	return (
		<section className="container mx-auto py-24 px-6 md:px-0">
			<h3 className="text-5xl text-center mb-12">Certifications & Formations</h3>
			{[...certifications]
				.sort((a, b) => {
					if (b.startYear !== a.startYear) return b.startYear - a.startYear;
					return (b.endYear ?? b.startYear) - (a.endYear ?? a.startYear);
				})
				.map((cert: Certification) => (
					<div key={cert.name} className="group flex flex-col md:flex-row border-t last:border-b border-foreground-subtle text-foreground-muted p-6
					hover:py-12 hover:bg-surface
					transition-[padding] duration-300
					motion-reduce:transition-none motion-reduce:hover:p-6">
						<div className="md:w-48 shrink-0">
							<p className="group-hover:text-foreground group-hover:font-semibold transition duration-300 text-2xl font-fraunces">{cert.endYear ? `${cert.startYear} – ${cert.endYear}` : `${cert.startYear}`}</p>
						</div>
						<div>
							<p className="group-hover:text-foreground group-hover:font-semibold transition-colors duration-300 text-2xl">{cert.name}</p>
							<p className="">{cert.school}{cert.locate && <span>, {cert.locate}</span>}</p>
							<p className="text-foreground-subtle">{cert.description}</p>
						</div>
					</div>
				))
			}
		</section>
	)
}