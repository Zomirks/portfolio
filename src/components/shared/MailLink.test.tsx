import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import MailLink from '@components/shared/MailLink';
import { siteConfig } from '@/config/site';

Object.defineProperty(window, 'location', {
    value: { href: '' },
    writable: true,
});

describe('MailLink', () => {
    it('should on click redirect to mailto', async () => {
        render(<MailLink />);

        const user = userEvent.setup();
        await user.click(screen.getByRole('button'));

        expect(window.location.href).toBe(
            `mailto:${siteConfig.email.user}@${siteConfig.email.domain}`
        );
    });

    it('should find btn with aria-label "Envoyer un mail"', () => {
        render(<MailLink />);

        const btn = screen.getByRole('button', { name: 'Envoyer un mail' });
        expect(btn).toBeInTheDocument();
    });
});
