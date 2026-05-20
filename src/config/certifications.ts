export type Certification = {
	school: string;
	locate?: string;
	name: string;
	description?: string;
	startYear: number;
	endYear?: number;
}

export const certifications: Certification[] = [
	{
		school: 'Alyra, l\'école blockchain & IA',
		name: 'Certification professionnelle RS6515',
		description: 'Développer une application décentralisée avec les technologies blockchain',
		startYear: 2025,
	},
	{
		school: 'IUT',
		locate: 'Haguenau',
		name: 'Licence professionnelle TAIS(Techniques et Activités de l\'Image et du Son) - parcours Développement Web',
		description: 'Licence effectuée en Alternance',
		startYear: 2017,
		endYear: 2018
	},
	{
		school: 'IUT',
		locate: 'Haguenau',
		name: 'DUT MMI (Métiers du Multimédia et de l\'Internet)',
		startYear: 2015,
		endYear: 2017
	},
	{
		school: 'Lycée André Maurois',
		locate: 'Bischwiller',
		name: "Baccalauréat Economique et Social - option Mathématiques",
		startYear: 2015
	}
];