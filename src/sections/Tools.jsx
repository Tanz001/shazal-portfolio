import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Video,
  Search,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  Sliders,
  CheckCircle2,
  Info
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { TOOLKIT_CATEGORIES } from '../data/tools.js';

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <section id="tools" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        kicker="INFRASTRUCTURE & SOFTWARE"
        title="MY CREATIVE"
        highlight="TOOLKIT."
        subtitle="The industry-standard editing suites, motion software, crawler spiders, and analytics engines deployed across client engagements."
      />

      {/* Two Main Category Selector Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {TOOLKIT_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.category}
            onClick={() => {
              setActiveCategory(idx);
              setSelectedTool(null);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === idx
                ? 'bg-[#D8FF3E] text-[#090909] font-bold shadow-md'
                : 'bg-[#141414] text-[#969696] hover:text-white border border-white/10'
            }`}
          >
            {idx === 0 ? <Video size={14} /> : <Search size={14} />}
            <span>{cat.category}</span>
          </button>
        ))}
      </div>

      {/* Toolkit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLKIT_CATEGORIES[activeCategory].tools.map((tool, idx) => {
          const isSelected = selectedTool?.name === tool.name;

          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setSelectedTool(tool)}
              className={`p-6 rounded-2xl bg-[#121212] border transition-all cursor-pointer relative group flex flex-col justify-between ${
                isSelected
                  ? 'border-[#D8FF3E] bg-[#161616] shadow-xl'
                  : 'border-white/10 hover:border-white/20 hover:bg-[#151515]'
              }`}
              data-cursor="interactive"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8FF3E] bg-[#D8FF3E]/10 px-2 py-0.5 rounded">
                    {tool.badge}
                  </span>
                  <span className="text-xs font-mono text-[#777]">
                    {tool.type}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold font-heading text-white group-hover:text-[#D8FF3E] transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#969696] leading-relaxed">
                    {tool.useCase}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#888]">
                <span>Status: In Active Stack</span>
                <span className="text-[#D8FF3E]">● Production Ready</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Descriptive Category Note */}
      <div className="mt-8 p-4 bg-[#141414] border border-white/10 rounded-xl flex items-center gap-3 text-xs font-mono text-[#969696]">
        <Info size={15} className="text-[#D8FF3E] shrink-0" />
        <span>
          {TOOLKIT_CATEGORIES[activeCategory].description} All tools are maintained on current professional commercial licenses.
        </span>
      </div>
    </section>
  );
}
