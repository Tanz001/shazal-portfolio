import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowUpRight, Film, TrendingUp, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects.js';

export default function SelectedWork({ onOpenProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <SectionHeading
          kicker="PORTFOLIO & SHOWREELS"
          title="SELECTED"
          highlight="CREATIVE WORK."
          subtitle="A curated selection of video production master cuts, viral social reels, and high-impact SEO growth architectures."
          className="mb-0"
        />

        {/* Category Filters (Clean Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121212] border border-white/10 rounded-xl max-w-fit">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#D8FF3E] text-[#090909] font-bold shadow-sm'
                  : 'text-[#969696] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Project Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout span distribution:
            // First item: col-span-12 or col-span-8
            // Second item: col-span-4
            // Alternating rhythm
            const isWide = idx % 3 === 0;
            const spanClass = isWide ? 'md:col-span-8' : idx % 3 === 1 ? 'md:col-span-4' : 'md:col-span-12 lg:col-span-6';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${spanClass} group relative flex flex-col justify-between bg-[#121212] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D8FF3E]/40 transition-colors duration-300`}
              >
                {/* Visual Thumbnail Area */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => onOpenProject(project)}
                  data-cursor={project.type === 'video' ? 'play' : 'view'}
                  data-cursor-text={project.type === 'video' ? 'WATCH' : 'METRICS'}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />

                  {/* Gradient Scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                  {/* Top-Right Badge: Type & Category */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-[#D8FF3E] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Center Play Button Overlay on Hover */}
                  {project.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-[#D8FF3E] text-[#090909] flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                        <Play size={24} className="ml-0.5 fill-[#090909]" />
                      </div>
                    </div>
                  )}

                  {/* Duration or Sample Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[11px] font-mono text-[#F5F5F0]">
                    {project.duration && (
                      <span className="px-2 py-0.5 bg-black/80 rounded border border-white/10">
                        {project.duration}
                      </span>
                    )}
                    <span className="text-[#969696]">{project.year}</span>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata with bullet separators */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#969696]">
                      <span>{project.client}</span>
                      <span>·</span>
                      <span className="text-[#D8FF3E]">{project.role}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#D8FF3E] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#969696] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer tags & View trigger */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#888]">
                      {project.tags.slice(0, 3).map((t, i) => (
                        <span key={i}>#{t}</span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#D8FF3E] transition-colors cursor-pointer"
                    >
                      <span>{project.type === 'video' ? 'Watch Project' : 'View Case'}</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Demo Notice Banner */}
      <div className="mt-12 p-4 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono text-[#969696]">
        <div className="flex items-center gap-2">
          <span className="text-[#D8FF3E]">ⓘ</span>
          <span>Sample demo portfolio data. Real client footage and case studies configured upon campaign onboarding.</span>
        </div>
        <span className="hidden sm:inline text-white/50">SHAZAL QAISER · 2026</span>
      </div>
    </section>
  );
}
