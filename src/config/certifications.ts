export type Certification = {
    school: string;
    locate?: string;
    name: string;
    description?: string;
    link?: string;
    startYear: number;
    endYear?: number;
};

export const certifications: Certification[] = [
    {
        school: 'Lycée André Maurois',
        locate: 'Bischwiller',
        name: 'Baccalauréat Economique et Social - option Mathématiques',
        startYear: 2015,
    },
    {
        school: 'IUT',
        locate: 'Haguenau',
        name: "DUT MMI (Métiers du Multimédia et de l'Internet)",
        startYear: 2015,
        endYear: 2017,
    },
    {
        school: 'IUT',
        locate: 'Haguenau',
        name: "Licence professionnelle TAIS(Techniques et Activités de l'Image et du Son) - parcours Développement Web",
        description: 'Licence effectuée en Alternance',
        startYear: 2017,
        endYear: 2018,
    },
    {
        school: "Alyra, l'école blockchain & IA",
        name: 'Certification professionnelle RS6515',
        description: 'Développer une application décentralisée avec les technologies blockchain',
        link: 'https://certificate.alyra.fr/check/E8AFBD674E7EDA8D5247C861D512D9B1BC9B1BEEA73E5827B8732D64DF7BBF9FMVlxd0lCcy9reSt5bjI5eXlENUlmcGZMT0h4WklqVEhwUXlQWGdZazduVHNLVkRY',
        startYear: 2025,
    },
];
