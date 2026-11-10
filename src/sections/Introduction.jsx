import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Compass } from 'lucide-react';

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10% 0px' });

  return (
    <section
      id="intro"
      ref={ref}
      className="relative py-28 md:py-36 px-6 sm:px-8 border-y border-white/10 bg-[#0c0c0c]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Editorial Eyebrow */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#D8FF3E]">
            <Compass size={14} />
            <span className="tracking-widest uppercase">THE PHILOSOPHY / 01</span>
          </div>
          <span className="text-[#969696]">CRAFT × COMPOUNDING VALUE</span>
        </div>

        {/* Oversized Typography Statement */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading tracking-tight text-[#666] leading-[1.06] transition-colors duration-700">
            <span className={`transition-colors duration-500 ${isInView ? 'text-white' : 'text-[#555]'}`}>
              GOOD CONTENT
            </span>{' '}
            <span className={`transition-colors duration-700 delay-100 ${isInView ? 'text-white' : 'text-[#444]'}`}>
              GETS ATTENTION.
            </span>{' '}
            <span className={`transition-colors duration-700 delay-200 ${isInView ? 'text-[#D8FF3E]' : 'text-[#555]'}`}>
              SMART STRATEGY
            </span>{' '}
            <span className={`transition-colors duration-700 delay-300 ${isInView ? 'text-white' : 'text-[#444]'}`}>
              MAKES IT COUNT.
            </span>
          </h2>
        </div>

        {/* Magazine Editorial Spread: Supporting Copy & Signature */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline pt-8 border-t border-white/10">
          <div className="md:col-span-4 text-xs font-mono uppercase text-[#969696] tracking-widest">
            A DUAL PERSPECTIVE ON DIGITAL EXPANSION
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-[#C4C4BC] font-normal leading-relaxed">
              I bring together <span className="text-white font-medium">visual storytelling</span> and <span className="text-[#D8FF3E] font-medium">search strategy</span> to help businesses create stronger digital experiences, reach the right audience, and grow their online presence without vanity noise.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#969696] block uppercase tracking-wider">
                  FOUNDER & CRAFTSMAN
                </span>
                <div className="font-heading text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Shazal Qaiser</span>
                  <span className="text-xs font-mono font-normal text-[#D8FF3E]">● SQ</span>
                </div>
              </div>

              {/* Minimal SVG Signature Element */}
              <div className="text-right">
                <svg
                  width="180"
                  height="45"
                  viewBox="0 0 180 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D8FF3E]/70"
                >
                  <path
                    d="M10 32C25 8 40 5 50 18C55 24 60 38 72 26C80 18 95 12 110 22C122 30 135 15 145 18C155 20 162 30 170 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="172" cy="22" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
