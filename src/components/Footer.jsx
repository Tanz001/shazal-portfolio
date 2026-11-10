import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/shazalqaiser' },
    { name: 'Instagram', href: 'https://instagram.com/shazalqaiser' },
    { name: 'YouTube', href: 'https://youtube.com' },
    { name: 'Behance', href: 'https://behance.net' }
  ];

  return (
    <footer className="relative bg-[#070707] border-t border-white/10 pt-20 pb-12 px-6 sm:px-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Tier: Brand & Nav Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              SHAZAL QAISER
            </a>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#D8FF3E]">
              CREATING VISUAL STORIES. BUILDING DIGITAL GROWTH.
            </p>
            <p className="text-xs text-[#888] max-w-sm leading-relaxed">
              Video editing and search engine optimization consulting for creators, high-growth startups, and visionary brands worldwide.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#969696] block mb-2">
              QUICK NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#969696] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#969696] block mb-2">
              SOCIAL CONNECT
            </span>
            <div className="space-y-1.5 text-xs font-mono">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#969696] hover:text-[#D8FF3E] transition-colors py-1 group"
                >
                  <span>{soc.name}</span>
                  <ArrowUpRight size={13} className="text-[#666] group-hover:text-[#D8FF3E]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Huge Oversized Brand Display */}
        <div className="border-y border-white/5 py-8 text-center overflow-hidden">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold font-heading tracking-tighter text-white/[0.06] hover:text-[#D8FF3E]/10 transition-colors duration-500 whitespace-nowrap">
            SHAZAL QAISER
          </h2>
        </div>

        {/* Bottom Tier: Copyright, Availability & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777]">
          <div className="flex items-center gap-3">
            <span>© 2026 SHAZAL QAISER. ALL RIGHTS RESERVED.</span>
            <span>·</span>
            <span className="text-[#D8FF3E] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8FF3E]" />
              AVAILABLE FOR 2026
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#969696] hover:text-[#D8FF3E] transition-colors cursor-pointer group"
            aria-label="Back to top"
            data-cursor="interactive"
          >
            <span>BACK TO TOP</span>
            <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D8FF3E] transition-colors">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
