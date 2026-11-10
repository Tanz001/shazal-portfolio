import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  Mail,
  Film,
  Search,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import portraitImg from '/src/assets/images/creative_director_portrait_1794316159600.jpg';

export default function About() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shazalqaiser', handle: 'shazalqaiser' },
    { name: 'Instagram', url: 'https://instagram.com/shazalqaiser', handle: '@shazalqaiser' },
    { name: 'YouTube', url: 'https://youtube.com', handle: 'Shazal Qaiser' },
    { name: 'Behance', url: 'https://behance.net', handle: 'shazal-edits' }
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        kicker="BIOGRAPHY & ETHOS"
        title="THE PERSON"
        highlight="BEHIND THE PIXELS."
        subtitle="Bridging cinematic storytelling and algorithmic search discovery to create work that captures attention and delivers measurable business value."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Replaceable Portrait Placeholder Frame */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] group shadow-2xl">
            <img
              src={portraitImg}
              alt="Shazal Qaiser Portrait Placeholder"
              referrerPolicy="no-referrer"
              className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-[#D8FF3E]">SHAZAL QAISER</span>
                <span className="text-white/60">STUDIO PORTRAIT</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono text-[#D8FF3E]">
                  Lahore, Pakistan · Global Remote
                </div>
                <div className="text-sm font-heading font-semibold text-white">
                  Video Editor & SEO Specialist
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Notice */}
          <div className="text-[11px] font-mono text-[#777] bg-[#121212] p-3 rounded-lg border border-white/5 flex items-center justify-between">
            <span>Studio aesthetic placeholder. Replaceable with personal photo.</span>
            <span className="text-[#D8FF3E]">SQ // 2026</span>
          </div>
        </div>

        {/* Right Column: Narrative, Ethos & Social Connects */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-white font-heading font-semibold leading-relaxed">
              I'm Shazal Qaiser, a video editor and SEO specialist passionate about creating meaningful digital experiences.
            </p>

            <p className="text-base text-[#969696] leading-relaxed">
              I enjoy combining creativity with strategy — whether it's transforming raw footage into engaging content or helping websites become more visible through search engines.
            </p>

            <p className="text-base text-[#969696] leading-relaxed">
              My focus is simple: <span className="text-[#D8FF3E] font-medium">create work that looks great, communicates clearly and delivers value.</span> In a digital environment crowded with noise, I believe true engagement comes from intentional narrative pacing paired with deliberate discoverability.
            </p>
          </div>

          {/* 3 Pillars of Approach */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 bg-[#141414] border border-white/5 rounded-xl space-y-1">
              <span className="text-xs font-mono text-[#D8FF3E] block">01 / PACING</span>
              <h4 className="text-sm font-bold text-white font-heading">Intentional Rhythm</h4>
              <p className="text-xs text-[#888] leading-relaxed">
                Every frame and cut is timed to maintain emotional momentum and viewer watch-time.
              </p>
            </div>

            <div className="p-4 bg-[#141414] border border-white/5 rounded-xl space-y-1">
              <span className="text-xs font-mono text-[#D8FF3E] block">02 / ARCHITECTURE</span>
              <h4 className="text-sm font-bold text-white font-heading">Semantic SEO</h4>
              <p className="text-xs text-[#888] leading-relaxed">
                Structured schemas and technical site health ensuring search crawlers prioritize your content.
              </p>
            </div>

            <div className="p-4 bg-[#141414] border border-white/5 rounded-xl space-y-1">
              <span className="text-xs font-mono text-[#D8FF3E] block">03 / VALUE</span>
              <h4 className="text-sm font-bold text-white font-heading">Compound Growth</h4>
              <p className="text-xs text-[#888] leading-relaxed">
                Assets and strategies designed to perform today and continue compounding over years.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <span className="text-xs font-mono text-[#969696] uppercase tracking-wider block">
              Direct Channels & Networks
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#161616] border border-white/10 rounded-lg hover:border-[#D8FF3E] hover:bg-[#1a1a1a] transition-all group flex flex-col justify-between"
                  data-cursor="interactive"
                >
                  <div className="flex items-center justify-between text-xs text-[#969696] group-hover:text-[#D8FF3E] transition-colors">
                    <span className="font-mono">{social.name}</span>
                    <ArrowUpRight size={13} />
                  </div>
                  <span className="text-xs font-bold text-white mt-2 block truncate">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
