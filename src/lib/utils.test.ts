import { cn } from './utils';

describe('cn', () => {
    it('should returns the two concatenated classes', () => {
        const class1 = 'text-red-500';
        const class2 = 'font-bold';

        const result = cn(class1, class2);

        expect(result).toBe('text-red-500 font-bold');
    });

    it('should only returns last class in case of Tailwind conflict', () => {
        const class1 = 'text-red-500';
        const class2 = 'text-blue-500';

        const result = cn(class1, class2);

        expect(result).toBe('text-blue-500');
    });

    it('should ignore null values ​​and return valid classes', () => {
        const class1 = 'text-red-500';
        const class2 = null;

        const result = cn(class1, class2);

        expect(result).toBe('text-red-500');
    });
});
