import Footer from '@/components/shared/Footer';
import Hero from '@/components/shared/Hero';
import About from '@/components/shared/About';
import Certifications from '@/components/shared/Certifications';
import BackToTop from '@/components/ui/back-to-top';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Certifications />
			<BackToTop />
			<Footer />
		</>
	);
}
