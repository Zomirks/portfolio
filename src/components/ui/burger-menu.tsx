'use client';
import { useState } from 'react';
import { IconMenu, IconX } from '@tabler/icons-react';

export function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button className="p-2 cursor-pointer">
            {isOpen ? <IconX onClick={toggleMenu} /> : <IconMenu onClick={toggleMenu} />}
        </button>
    );
}
