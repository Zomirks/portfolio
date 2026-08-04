import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/shared/Hero';
import About from '@/components/shared/About';
import Certifications from '@/components/shared/Certifications';
import Experiences from '@/components/shared/Experiences';
import BackToTop from '@/components/ui/back-to-top';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Experiences />
            <Certifications />
            <BackToTop />
            <Footer />
        </>
    );
}
