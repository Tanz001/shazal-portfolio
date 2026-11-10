import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis.js';
import { useScrollReveal } from './hooks/useScrollReveal.js';
import CustomCursor from './components/CustomCursor.jsx';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import VideoModal from './components/VideoModal.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

import Hero from './sections/Hero.jsx';
import Marquee from './sections/Marquee.jsx';
import Introduction from './sections/Introduction.jsx';
import Services from './sections/Services.jsx';
import SelectedWork from './sections/SelectedWork.jsx';
import SEOCaseStudies from './sections/SEOCaseStudies.jsx';
import Process from './sections/Process.jsx';
import About from './sections/About.jsx';
import Tools from './sections/Tools.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';

const SECTION_IDS = [
  'hero',
  'intro',
  'services',
  'work',
  'seo-deep-dive',
  'process',
  'about',
  'tools',
  'testimonials',
  'contact',
];

export default function App() {
  useLenis();
  useScrollReveal();

  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [modalProject, setModalProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Which section the navbar should mark as current
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of SECTION_IDS) {
        const elem = document.getElementById(id);
        if (elem && scrollY >= elem.offsetTop && scrollY < elem.offsetTop + elem.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenProject = (project) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="tone-dark relative min-h-screen bg-canvas">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <ScrollProgress />
      <CustomCursor />

      <div className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-50" />

      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <Hero ready={!isLoading} />
        <Marquee />
        <Introduction />
        <Services />
        <SelectedWork onOpenProject={handleOpenProject} />
        <SEOCaseStudies />
        <Process />
        <About />
        <Tools />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <VideoModal
        isOpen={isModalOpen}
        project={modalProject}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
