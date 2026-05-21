'use client';

import { IconMail } from '@tabler/icons-react';
import { siteConfig } from '@/config/site';

export default function MailLink() {
    const handleClick = () => {
        const { user, domain } = siteConfig.email;
        window.location.href = `mailto:${user}@${domain}`;
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label="Envoyer un mail"
            className="p-2 cursor-pointer"
        >
            <IconMail />
        </button>
    );
}
