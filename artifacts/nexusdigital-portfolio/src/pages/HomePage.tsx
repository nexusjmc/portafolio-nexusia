import { CustomCursor } from '@/components/CustomCursor';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { AboutMe } from '@/components/AboutMe';
import { WorkProcess } from '@/components/WorkProcess';
import { Testimonials } from '@/components/Testimonials';
import { ClientLogos } from '@/components/ClientLogos';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <LoadingScreen />
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <AboutMe />
        <WorkProcess />
        <Testimonials />
        <ClientLogos />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
