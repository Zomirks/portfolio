'use client';

import { useSyncExternalStore } from 'react';
import { IconChevronsUp } from '@tabler/icons-react';

function subscribe(callback: () => void) {
	window.addEventListener('scroll', callback, { passive: true });
	return () => window.removeEventListener('scroll', callback);
}

function getSnapshot() {
	return window.scrollY > window.innerHeight / 2;
}

function getServerSnapshot() {
	return false;
}

export default function BackToTop() {
	const isVisible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	return (
		<button
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			className={`btn-back-to-top${isVisible ? ' is-visible' : ''}`}
			aria-label="Retour en haut"
		>
			<IconChevronsUp color="black"/>
		</button>
	);
}