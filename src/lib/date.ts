const monthYearFormatter = new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    year: 'numeric',
});

const parseDate = (value: string): Date | null => {
    if (!value) return null;
    const [year, month = '1', day = '1'] = value.split('-');
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(date.getTime()) ? null : date;
};

export const formatMonthYear = (value: string): string => {
    const date = parseDate(value);
    return date ? monthYearFormatter.format(date) : value;
};

export const formatPeriod = (start: string, end?: string): string =>
    `${formatMonthYear(start)} - ${end ? formatMonthYear(end) : "aujourd'hui"}`;

export const getDuration = (start: string, end?: string): string | null => {
    const from = parseDate(start);
    const to = end ? parseDate(end) : new Date();
    if (!from || !to) return null;

    const months =
        (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;
    if (months <= 0) return null;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const parts: string[] = [];
    if (years) parts.push(`${years} an${years > 1 ? 's' : ''}`);
    if (remainingMonths) parts.push(`${remainingMonths} mois`);
    return parts.join(' ') || null;
};
