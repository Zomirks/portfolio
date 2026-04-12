'use client';

import { IconChevronsUp } from '@tabler/icons-react';

export default function BackToTop() {
	return (
		<button 
			onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
			className="fixed bottom-0 right-4 size-12 bg-gray-50 rounded-t-lg flex items-center justify-center cursor-pointer"
			aria-label="Retour en haut"
		>
			<IconChevronsUp color='black'/>
		</button>
	)
}