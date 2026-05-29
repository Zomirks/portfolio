export type YearMonth = `${number}-${number}`;

export type Experience = {
    title: string;
    type: 'CDI' | 'CDD' | 'Alternance' | 'Stage';
    company: string;
    location?: string;
    link?: string;
    startDate: YearMonth;
    endDate?: YearMonth;
    description?: string;
    highlights?: string[];
    stacks: string[];
};

export const experiences: Experience[] = [
    {
        title: 'Développeur Web',
        type: 'Stage',
        company: 'Toastate',
        location: 'Strasbourg',
        link: 'https://www.linkedin.com/company/toastate-com/',
        startDate: '2017-04',
        endDate: '2017-07',
        description:
            "Réalisation d'un back-office pour une chaîne d'hôtels, leur permettant de mettre à disposition leur salle de sport pour les non clients de l'hôtel.",
        highlights: [
            'Utilisation de requêtes API (en Javascript) afin de développer les différents modules de ce back-office',
            'Développement en utilisant la méthode MVC(Modèle/Vue/Controller)',
        ],
        stacks: ['API REST', 'Git', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'Javascript'],
    },
    {
        title: 'Développeur Web',
        type: 'Alternance',
        company: 'Animaweb',
        location: 'Strasbourg',
        link: 'https://www.animaweb.fr/',
        startDate: '2017-09',
        endDate: '2018-09',
        highlights: [
            'Développement de multiples sites vitrines sur WordPress (en développant le thème sur-mesure)',
            'Mise à jour de divers sites WordPress existants',
            'Développement de divers sites vitrines sur un CMS Maison sur le framework CakePHP',
            "Rédaction de cahier de formation à destination du client final pour l'aider à la prise en main de son site",
        ],
        stacks: ['WordPress', 'PHP', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'Javascript', 'CakePHP'],
    },
    {
        title: 'Développeur Web',
        type: 'CDI',
        company: 'Animaweb',
        location: 'Strasbourg',
        link: 'https://www.animaweb.fr/',
        startDate: '2018-09',
        endDate: '2024-08',
        highlights: [
            "Conception et développement complet d'un ERP interne(migration de CakePHP vers Laravel), utilisé quotidiennement par l'équipe pour piloter la gestion de l'entreprise comprenant analyse du besoin, architecture, back-end et front-end.",
            'Développement de sites web et e-commerce sur-mesure (WordPress / WooCommerce), sans page builder, de la maquette à la mise en production.',
            'Intégration front-end custom (HTML, CSS, JavaScript) pixel-perfect à partir de maquettes.',
            'Optimisation des performances web : scores Lighthouse 90+ (Performance, Accessibilité, Bonnes pratiques).',
            'Gestion de projets en pleine autonomie : analyse, développement, livraison, maintenance et support technique client.',
            'Création de visuels graphiques pour les supports clients et les réseaux sociaux.',
            'Montée en compétences continue (formations Laravel & WooCommerce).',
        ],
        stacks: [
            'Laravel',
            'Javascript',
            'WordPress',
            'WooCommerce',
            'PHP',
            'GIT',
            'Vite.js',
            'HTML',
            'CSS',
            'Bootstrap',
            'CakePHP',
            'SQL',
        ],
    },
];
