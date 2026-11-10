import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sliders,
  Scissors,
  Wand2,
  Send,
  CheckCircle,
  Clock,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';

const PROCESS_STEPS = [
  {
    step: '01',
    id: 'understand',
    title: 'UNDERSTAND',
    subtitle: 'Brand Alignment & Narrative Blueprint',
    description: 'We deconstruct the brand voice, core audience demographics, platform algorithms, and the emotional resonance required before touching the timeline.',
    icon: Sliders,
    timelinePhase: 'Pre-Production & Ingestion',
    deliverables: ['Creative Brief Alignment', 'Pacing & Style Direction', 'Audio Moodboard'],
    meta: { time: 'Day 1-2', focus: 'Story Architecture' }
  },
  {
    step: '02',
    id: 'create',
    title: 'CREATE',
    subtitle: 'Assembly, Pacing & The Rough Cut',
    description: 'Organizing raw footage, selecting the best takes, setting up the narrative arc, and locking in the primary rhythm with dynamic pattern interrupts.',
    icon: Scissors,
    timelinePhase: 'Rough Assembly & A-Roll',
    deliverables: ['Selects Reel', 'Story Arc Assembly', 'First Cut Review'],
    meta: { time: 'Day 3-5', focus: 'Retention Mechanics' }
  },
  {
    step: '03',
    id: 'refine',
    title: 'REFINE',
    subtitle: 'Micro-Transitions, Sound Design & Color Grade',
    description: 'Elevating the piece into a cinematic master cut with node-based color grading in DaVinci, custom sound foley, kinetic typography, and motion smoothing.',
    icon: Wand2,
    timelinePhase: 'Finishing & Audio Mastering',
    deliverables: ['DaVinci Color Emulation', 'Multi-Layer Soundscape', 'Kinetic Graphics Pass'],
    meta: { time: 'Day 6-7', focus: 'Aesthetic Prestige' }
  },
  {
    step: '04',
    id: 'deliver',
    title: 'DELIVER',
    subtitle: 'Platform Optimization & Export Master',
    description: 'Exporting pristine multi-format packages optimized for YouTube, Instagram Reels, TikTok, and web broadcast with custom thumbnails and retention metadata.',
    icon: Send,
    timelinePhase: 'Delivery & Deployment',
    deliverables: ['4K ProRes Master', '9:16 Vertical Cutdowns', 'Compressed Social Files'],
    meta: { time: 'Final Stage', focus: 'Multi-Platform Export' }
  }
];

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto">
      <SectionHeading
        kicker="CREATIVE WORKFLOW & TIMELINE"
        title="FROM RAW FOOTAGE"
        highlight="TO FINAL FRAME."
        subtitle="A disciplined 4-stage post-production pipeline engineered for visual rhythm, storytelling momentum, and platform optimization."
      />

      {/* Interactive Production Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Step Selection Column */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const IconComponent = step.icon;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 sm:p-6 rounded-xl border transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#181818] border-[#D8FF3E] shadow-xl'
                    : 'bg-[#121212] border-white/10 hover:border-white/20 hover:bg-[#141414]'
                }`}
                data-cursor="interactive"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xl sm:text-2xl font-bold font-mono transition-colors ${
                        isActive ? 'text-[#D8FF3E]' : 'text-[#666]'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h4
                        className={`text-base sm:text-lg font-bold font-heading transition-colors ${
                          isActive ? 'text-white' : 'text-[#969696]'
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#888] font-mono">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#D8FF3E] text-[#090909]'
                        : 'bg-white/5 text-[#969696]'
                    }`}
                  >
                    <IconComponent size={18} />
                  </div>
                </div>

                {/* Progress bar inside active card */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessGlow"
                    className="absolute -left-1 top-3 bottom-3 w-1.5 bg-[#D8FF3E] rounded-full"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Stage Spotlight Panel */}
        <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Stage Background Watermark */}
          <div className="absolute top-2 right-4 text-8xl sm:text-9xl font-bold font-mono text-white/[0.03] select-none pointer-events-none">
            {activeStep.step}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D8FF3E]">
                  <Clock size={14} />
                  <span>PHASE: {activeStep.timelinePhase}</span>
                </div>
                <span className="text-xs font-mono text-[#969696]">
                  {activeStep.meta.focus}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#969696] tracking-widest uppercase">
                  STAGE {activeStep.step} OF 04
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                  {activeStep.title} — {activeStep.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-[#969696] leading-relaxed max-w-xl">
                  {activeStep.description}
                </p>
              </div>

              {/* Key Deliverables in this Stage */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-white uppercase tracking-wider block">
                  Stage Output & Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeStep.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#181818] border border-white/5 rounded-lg flex items-start gap-2"
                    >
                      <CheckCircle size={14} className="text-[#D8FF3E] mt-0.5 shrink-0" />
                      <span className="text-xs text-[#F5F5F0] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated Timeline Track UI */}
              <div className="p-4 bg-[#181818] border border-white/10 rounded-xl space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#969696]">NLE Timeline Playhead</span>
                  <span className="text-[#D8FF3E]">00:0{activeStepIndex + 1}:14:23</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 h-3 bg-black/60 rounded p-0.5">
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={idx}
                      className={`h-full rounded-sm transition-all duration-300 ${
                        idx <= activeStepIndex ? 'bg-[#D8FF3E]' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#777]">
                  <span>Ingest</span>
                  <span>Assembly</span>
                  <span>Color & FX</span>
                  <span>Master Export</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick step navigation controls */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="text-[#969696] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              ← Previous Phase
            </button>
            <span className="text-[#D8FF3E]">
              {activeStepIndex + 1} / {PROCESS_STEPS.length}
            </span>
            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
              disabled={activeStepIndex === PROCESS_STEPS.length - 1}
              className="text-[#969696] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
