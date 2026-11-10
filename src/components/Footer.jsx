import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { scrollToTarget } from '../lib/scroll.js';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const rootRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(rootRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(rootRef);

      gsap.fromTo(
        q('.name-fill'),
        { backgroundPosition: '100% 50%' },
        {
          backgroundPosition: '0% 50%',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: 0.6,
          },
        }
      );

      gsap.from(q('.name-line'), {
        yPercent: 40,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: q('.name-signature')[0],
          start: 'top 85%',
          once: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/shazalqaiser' },
    { name: 'Instagram', href: 'https://instagram.com/shazalqaiser' },
    { name: 'YouTube', href: 'https://youtube.com' },
    { name: 'Behance', href: 'https://behance.net' },
  ];

  return (
    <footer ref={rootRef} className="tone-dark relative overflow-hidden border-t border-line bg-canvas">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container-premium px-6 sm:px-8 pt-20 pb-8 space-y-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <p className="text-sm font-semibold text-accent">Let’s build the next cut</p>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Video editing and SEO for creators, startups, and brands who want craft with
              measurable reach.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#contact');
              }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
              data-cursor="interactive"
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
              Navigate
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget(link.href);
                  }}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
              Social
            </span>
            <div className="space-y-1.5 text-sm">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 text-muted transition-colors hover:text-accent"
                >
                  <span>{soc.name}</span>
                  <ArrowUpRight size={13} className="text-muted group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Oversized signature */}
        <div className="name-signature relative overflow-hidden border-y border-line py-8 sm:py-12">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Portfolio 2026 · Lahore / Remote
          </p>

          <h2 className="name-mega select-none" aria-label="Shazal Qaiser">
            <span className="name-line name-outline block">Shazal</span>
            <span className="name-line name-fill block">Qaiser</span>
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-sm text-sm text-muted">
              Video editor × SEO specialist — crafting stories people watch and search that
              compounds.
            </p>
            <span className="font-mono text-xs text-accent">SQ // EST. CRAFT</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pb-4 text-xs font-mono text-muted sm:flex-row">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 Shazal Qaiser</span>
            <span className="flex items-center gap-1.5 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Available for 2026
            </span>
          </div>

          <button
            type="button"
            onClick={() => scrollToTarget(0)}
            className="group flex cursor-pointer items-center gap-2 text-muted transition-colors hover:text-accent"
            aria-label="Back to top"
            data-cursor="interactive"
          >
            <span>Back to top</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
