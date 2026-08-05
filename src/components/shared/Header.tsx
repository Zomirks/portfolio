import { siteConfig } from '@/config/site';
import { BurgerMenu } from '@/components/shared/BurgerMenu';
import { Logo } from '@/components/ui/logo';
import { StickyHeader } from '@/components/ui/sticky-header';
import SocialsList from '@/components/shared/SocialsList';

export default function Header() {
    return (
        <StickyHeader className="flex items-center justify-between p-4 fixed z-10 w-full">
            <a href="#top" className="flex items-center">
                <Logo className="size-10 mr-4" />
                <div className="font-fraunces text-xl">{siteConfig.name}</div>
            </a>

            <div className="flex items-center space-x-6">
                <SocialsList className="flex space-x-4" />

                <BurgerMenu />
            </div>
        </StickyHeader>
    );
}
