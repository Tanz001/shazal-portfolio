import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton.jsx';
import { scrollToTarget } from '../lib/scroll.js';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#tools' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <>
      {/* The bar keeps its own dark tone so it reads over dark and light sections. */}
      <header className="fixed top-4 inset-x-0 z-50 px-4 pointer-events-none">
        <div
          className={`tone-dark pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-line bg-canvas/80 backdrop-blur-xl py-2 pl-6 pr-2 transition-shadow duration-500 ${
            isScrolled ? 'shadow-[0_16px_40px_-16px_rgb(0_0_0/0.65)]' : ''
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-display text-base font-extrabold text-ink whitespace-nowrap"
          >
            Shazal Qaiser
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm text-muted" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2 transition-colors hover:text-ink ${
                    isActive ? 'text-ink' : ''
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-ink/10"
                      transition={{ type: 'spring', damping: 28, stiffness: 380 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <MagneticButton
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="compact"
              strength={0.2}
              className="hidden sm:inline-flex"
            >
              Let's talk
            </MagneticButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-ink/10 transition-colors md:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="tone-dark fixed inset-0 z-40 bg-canvas flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.35 }}
                  className="flex items-center justify-between font-display text-3xl font-extrabold hover:text-accent transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={20} className="text-muted" />
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-line pt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2 text-ink">
                <span className="h-2 w-2 rounded-full bg-clip-teal" />
                Open for freelance and contract work
              </p>
              <p className="text-muted">Lahore, remote worldwide</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
