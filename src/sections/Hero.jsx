import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles, MapPin, Film, TrendingUp } from 'lucide-react';
import MagneticButton from '../components/MagneticButton.jsx';
import heroImg from '/src/assets/images/hero_cinematic_frame_1794316157176.jpg';

export default function Hero() {
  const containerRef = useRef(null);

  const scrollToWork = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#work');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Glow & Framing */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D8FF3E]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Hero Eyebrow Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-xs font-mono">
        <div className="flex items-center gap-3 text-[#D8FF3E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8FF3E] animate-ping" />
          <span className="tracking-widest uppercase">VIDEO EDITOR × SEO SPECIALIST</span>
        </div>

        <div className="flex items-center gap-6 text-[#969696]">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#D8FF3E]" />
            Lahore, PK · Worldwide
          </span>
          <span className="hidden sm:inline">Q1/Q2 2026 BOOKINGS OPEN</span>
        </div>
      </div>

      {/* Main Split Hero: Giant Editorial Headline + Cinematic Studio Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-10">
        {/* Left Column: Oversized Statement */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold font-heading tracking-tight text-white leading-[1.02] text-balance">
              I MAKE{' '}
              <span className="text-[#D8FF3E]">VIDEOS</span> THAT MOVE PEOPLE.{' '}
              <span className="text-[#969696] font-normal block sm:inline">AND</span>{' '}
              <span className="text-[#D8FF3E]">STRATEGIES</span> THAT MOVE BUSINESSES.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#969696] max-w-xl leading-relaxed"
          >
            Turning creative footage into compelling visual stories and building search architectures that help ambitious brands get discovered and compound organic reach.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton
              href="#work"
              onClick={scrollToWork}
              variant="primary"
              data-cursor="interactive"
            >
              <span className="flex items-center gap-2">
                Explore My Work
                <ArrowDownRight size={18} />
              </span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              onClick={scrollToContact}
              variant="secondary"
              data-cursor="interactive"
            >
              Let's Work Together
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: High-Impact Cinematic Video Suite Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div
            className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#121212] group"
            data-cursor="play"
            data-cursor-text="REEL"
          >
            <img
              src={heroImg}
              alt="Shazal Qaiser Video Editing Studio Suite"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Cinematic Frame Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-between pointer-events-none">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                <span className="flex items-center gap-1.5">
                  <Film size={12} className="text-[#D8FF3E]" />
                  STUDIO TIMELINE
                </span>
                <span className="text-[#D8FF3E]">REC ● 4K 60FPS</span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#D8FF3E] block mb-1">
                  SHOWREEL 2026
                </span>
                <h2 className="text-xl font-heading font-bold text-white">
                  Crafting High-Retention Visual Narratives
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar: Metric Highlights & Scroll Prompt */}
      <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div>
          <span className="block text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
            02 Disciplines
          </span>
          <span className="text-xs text-[#969696] font-mono">Video Production × SEO</span>
        </div>

        <div>
          <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#D8FF3E] tabular-nums">
            High Retention
          </span>
          <span className="text-xs text-[#969696] font-mono">Algorithmic Pacing Focus</span>
        </div>

        <div>
          <span className="block text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
            First-Page
          </span>
          <span className="text-xs text-[#969696] font-mono">Target SERP Optimization</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="block text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              100%
            </span>
            <span className="text-xs text-[#969696] font-mono">Tailored Strategy</span>
          </div>

          <a
            href="#intro"
            className="hidden md:flex flex-col items-center text-[#969696] hover:text-[#D8FF3E] transition-colors text-xs font-mono"
            aria-label="Scroll down to introduction"
          >
            <span>SCROLL</span>
            <span className="animate-bounce mt-1">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
