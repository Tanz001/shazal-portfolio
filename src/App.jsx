import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis.js';
import CustomCursor from './components/CustomCursor.jsx';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import VideoModal from './components/VideoModal.jsx';

import Hero from './sections/Hero.jsx';
import Introduction from './sections/Introduction.jsx';
import Services from './sections/Services.jsx';
import SelectedWork from './sections/SelectedWork.jsx';
import SEOCaseStudies from './sections/SEOCaseStudies.jsx';
import Process from './sections/Process.jsx';
import About from './sections/About.jsx';
import Tools from './sections/Tools.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  // Initialize Lenis Smooth Scrolling integrated with GSAP ScrollTrigger
  useLenis();

  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [modalProject, setModalProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Active section tracking for navbar indicator
  useEffect(() => {
    const sectionIds = ['hero', 'intro', 'services', 'work', 'seo-deep-dive', 'process', 'about', 'tools', 'testimonials', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of sectionIds) {
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#F5F5F0] selection:bg-[#D8FF3E] selection:text-[#090909]">
      {/* Cinematic Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Subtle Grain Overlay for cinematic atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-30" />

      {/* Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* Section 03: Hero */}
        <Hero />

        {/* Section 04: Introduction / Brand Statement */}
        <Introduction />

        {/* Section 05: Services (Video Editing & SEO Growth) */}
        <Services onSelectProject={handleOpenProject} />

        {/* Section 06: Selected Work / Creative Showreel */}
        <SelectedWork onOpenProject={handleOpenProject} />

        {/* Section 07: SEO Case Studies & Interactive Analytics Dashboard */}
        <SEOCaseStudies />

        {/* Section 08: Video Editing Process Timeline */}
        <Process />

        {/* Section 09: About Shazal */}
        <About />

        {/* Section 10: Tools & Expertise */}
        <Tools />

        {/* Section 11: Testimonials */}
        <Testimonials />

        {/* Section 12: Contact / Final CTA */}
        <Contact />
      </main>

      {/* Section 13: Oversized Footer */}
      <Footer />

      {/* Video & Case Study Lightbox Modal */}
      <VideoModal
        isOpen={isModalOpen}
        project={modalProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}
