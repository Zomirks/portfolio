'use client';

import { Dialog } from 'radix-ui';
import { IconMenu, IconX } from '@tabler/icons-react';
import { siteConfig } from '@/config/site';
import SocialsList from '@/components/shared/SocialsList';
import { Logo } from '@/components/ui/logo';

export function BurgerMenu() {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="p-2 cursor-pointer" aria-label="Ouvrir le menu">
                <IconMenu />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Content
                    className="menu-overlay"
                    aria-describedby={undefined}
                    onCloseAutoFocus={(e) => e.preventDefault()}
                >
                    <Dialog.Title className="sr-only">Navigation</Dialog.Title>

                    <div className="flex items-center justify-between p-4">
                        <Dialog.Close asChild>
                            <a href="#top" className="flex items-center">
                                <Logo className="size-10 mr-4" />
                                <div className="font-fraunces text-xl">{siteConfig.name}</div>
                            </a>
                        </Dialog.Close>

                        <Dialog.Close className="p-2 cursor-pointer" aria-label="Fermer le menu">
                            <IconX />
                        </Dialog.Close>
                    </div>

                    <nav className="flex flex-1 flex-col items-center justify-center gap-2">
                        {siteConfig.nav.map((item, index) => (
                            <Dialog.Close asChild key={item.href}>
                                <a
                                    href={item.href}
                                    className="menu-link"
                                    style={{ animationDelay: `${0.1 + index * 0.07}s` }}
                                >
                                    {item.label}
                                </a>
                            </Dialog.Close>
                        ))}
                    </nav>

                    <SocialsList className="items-center justify-center space-x-6 pb-10" />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
