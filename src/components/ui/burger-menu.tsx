'use client';
import { useState } from 'react';
import { IconMenu, IconX } from '@tabler/icons-react';

export function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-2">
            {isOpen ? <IconX onClick={toggleMenu} /> : <IconMenu onClick={toggleMenu} />}
        </div>
    );
}
