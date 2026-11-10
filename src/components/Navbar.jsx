import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton.jsx';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090909]/90 backdrop-blur-md border-b border-white/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-baseline gap-2 text-lg sm:text-xl font-bold font-heading tracking-tight text-white whitespace-nowrap shrink-0 select-none"
          >
            <span>SHAZAL.</span>
            <span className="text-xs font-mono font-normal text-[#969696] group-hover:text-[#D8FF3E] transition-colors">
              / SQ
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#969696]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                    isActive ? 'text-[#D8FF3E]' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D8FF3E]"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Availability & Primary Action */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono text-[#969696] whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#D8FF3E] inline-block shadow-[0_0_8px_#D8FF3E]" />
              <span>Available for Projects</span>
            </div>

            <MagneticButton
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="outlineLime"
              className="hidden xl:inline-flex text-[11px] py-2 px-4"
            >
              Let's Talk
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 text-white hover:text-[#D8FF3E] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#090909] text-white flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#969696] mb-4">
                NAVIGATION
              </div>
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="text-3xl font-heading font-bold tracking-tight hover:text-[#D8FF3E] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={20} className="text-[#969696]" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8FF3E]">
                <span className="w-2 h-2 rounded-full bg-[#D8FF3E]" />
                <span>Open for freelance & contract work (2026)</span>
              </div>
              <div className="text-xs text-[#969696] font-mono">
                Lahore / Remote Worldwide · Video Editing × SEO Strategy
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
