import Link from 'next/link';
import { IconChevronsUp } from '@tabler/icons-react';

export default function backToTop() {
	return (
		<Link 
			href='/#top'
			className="fixed bottom-0 right-4 size-12 bg-gray-50 rounded-t-lg flex items-center justify-center">
			<IconChevronsUp color='black'/>
		</Link>
	)
}