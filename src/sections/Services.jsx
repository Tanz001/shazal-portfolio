import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, TrendingUp, CheckCircle, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { SERVICES_DATA } from '../data/services.js';
import videoShowcaseImg from '/src/assets/images/video_editing_showcase_1794316155603.jpg';
import seoShowcaseImg from '/src/assets/images/seo_data_visualization_1794316157747.jpg';

export default function Services({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('video-editing');
  const videoService = SERVICES_DATA[0];
  const seoService = SERVICES_DATA[1];

  const scrollToWork = () => {
    const elem = document.querySelector('#work');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const elem = document.querySelector('#contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto">
      <SectionHeading
        kicker="CAPABILITIES & PRACTICE"
        title="WHAT I BRING"
        highlight="TO THE TABLE."
        subtitle="Two dedicated disciplines engineered to operate independently or as a unified organic acquisition pipeline."
      />

      <div className="space-y-20 lg:space-y-28">
        {/* ========================================================= */}
        {/* SERVICE 01: VIDEO EDITING                                 */}
        {/* ========================================================= */}
        <div className="relative rounded-2xl bg-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-7xl sm:text-9xl font-bold font-mono text-white/[0.04] select-none pointer-events-none">
            01
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D8FF3E] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8FF3E]" />
                DISCIPLINE 01 // PRODUCTION
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white">
                Cinematic Video Editing
              </h3>

              <p className="text-[#969696] text-base leading-relaxed">
                From short-form social content to polished promotional videos, I turn raw footage into engaging visual stories that capture attention and build lasting brand recall.
              </p>

              {/* Grid of Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {videoService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#181818] border border-white/5 rounded-lg space-y-1 hover:border-[#D8FF3E]/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span className="text-[#D8FF3E]">●</span>
                      <span>{item.name}</span>
                    </div>
                    <div className="text-[11px] text-[#888] leading-tight">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Toolkit & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-[#969696]">
                  <span className="text-white">Software: </span>
                  {videoService.toolkit.join(' · ')}
                </div>

                <button
                  onClick={scrollToWork}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D8FF3E] hover:text-white transition-colors cursor-pointer"
                  data-cursor="interactive"
                >
                  <span>Explore Video Showreels</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Media Composition */}
            <div className="lg:col-span-6 relative">
              <div
                className="relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl"
                onClick={scrollToWork}
                data-cursor="play"
                data-cursor-text="WATCH"
              >
                <img
                  src={videoShowcaseImg}
                  alt="Video Editing Suite Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-[#D8FF3E] border border-white/10">
                      MASTER TIMELINE
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D8FF3E] text-[#090909] flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={20} className="ml-0.5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#D8FF3E]">PREVIEW CUT</div>
                      <div className="text-sm font-heading font-semibold text-white">
                        Color Grading, Sound Design & Dynamic Pacing
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#181818] border border-white/10 p-4 rounded-xl shadow-xl items-center gap-4">
                <div className="text-2xl font-bold font-mono text-[#D8FF3E]">68%+</div>
                <div className="text-xs font-mono text-[#969696]">
                  Target Audience View<br />Duration Retention
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SERVICE 02: SEO & DIGITAL GROWTH                          */}
        {/* ========================================================= */}
        <div className="relative rounded-2xl bg-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-7xl sm:text-9xl font-bold font-mono text-white/[0.04] select-none pointer-events-none">
            02
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Media Composition */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div
                className="relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl"
                onClick={scrollToWork}
                data-cursor="view"
                data-cursor-text="DATA"
              >
                <img
                  src={seoShowcaseImg}
                  alt="Search Engine Optimization Data Visualization"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-[#D8FF3E] border border-white/10">
                      LIVE SERP MATRIX
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-[#D8FF3E]">ORGANIC PERFORMANCE</div>
                    <div className="text-sm font-heading font-semibold text-white">
                      Structured SEO Architecture & Ranking Growth
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#181818] border border-white/10 p-4 rounded-xl shadow-xl items-center gap-4">
                <div className="text-2xl font-bold font-mono text-[#D8FF3E]">100%</div>
                <div className="text-xs font-mono text-[#969696]">
                  White-Hat Algorithm<br />Compliance Framework
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D8FF3E] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8FF3E]" />
                DISCIPLINE 02 // STRATEGY
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white">
                SEO & Digital Growth
              </h3>

              <p className="text-[#969696] text-base leading-relaxed">
                Helping websites improve their search visibility through structured SEO strategies, technical improvements, and data-driven optimization that compounds long-term inbound value.
              </p>

              {/* Grid of Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {seoService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#181818] border border-white/5 rounded-lg space-y-1 hover:border-[#D8FF3E]/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span className="text-[#D8FF3E]">●</span>
                      <span>{item.name}</span>
                    </div>
                    <div className="text-[11px] text-[#888] leading-tight">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Toolkit & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-[#969696]">
                  <span className="text-white">Stack: </span>
                  {seoService.toolkit.join(' · ')}
                </div>

                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D8FF3E] hover:text-white transition-colors cursor-pointer"
                  data-cursor="interactive"
                >
                  <span>Request an SEO Audit</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
