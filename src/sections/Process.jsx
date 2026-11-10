import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Scissors, Wand2, Send, CheckCircle, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';

const PROCESS_STEPS = [
  {
    step: '01',
    id: 'understand',
    title: 'Understand',
    subtitle: 'Brand alignment & narrative blueprint',
    description:
      'We unpack brand voice, audience, platform algorithms, and emotional intent before a single cut hits the timeline.',
    icon: Sliders,
    timelinePhase: 'Pre-production & ingestion',
    deliverables: ['Creative brief alignment', 'Pacing direction', 'Audio moodboard'],
    meta: { focus: 'Story architecture' },
  },
  {
    step: '02',
    id: 'create',
    title: 'Create',
    subtitle: 'Assembly, pacing & rough cut',
    description:
      'Selects, story arc, and primary rhythm locked with pattern interrupts engineered for retention.',
    icon: Scissors,
    timelinePhase: 'Rough assembly & A-roll',
    deliverables: ['Selects reel', 'Story arc assembly', 'First cut review'],
    meta: { focus: 'Retention mechanics' },
  },
  {
    step: '03',
    id: 'refine',
    title: 'Refine',
    subtitle: 'Sound, color & micro-transitions',
    description:
      'DaVinci grading, custom foley, kinetic type, and finishing passes that elevate the master cut.',
    icon: Wand2,
    timelinePhase: 'Finishing & audio master',
    deliverables: ['Color emulation', 'Multi-layer soundscape', 'Graphics pass'],
    meta: { focus: 'Aesthetic polish' },
  },
  {
    step: '04',
    id: 'deliver',
    title: 'Deliver',
    subtitle: 'Platform-ready export masters',
    description:
      'Multi-format packages for YouTube, Reels, TikTok, and broadcast — with thumbnails and retention metadata.',
    icon: Send,
    timelinePhase: 'Delivery & deployment',
    deliverables: ['4K ProRes master', '9:16 cutdowns', 'Social compressions'],
    meta: { focus: 'Multi-platform export' },
  },
];

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];
  const IconComponent = activeStep.icon;

  return (
    <section id="process" className="section-pad border-t border-line">
      <div className="container-premium">
        <SectionHeading
          kicker="Workflow"
          title="From raw footage"
          highlight="to final frame."
          subtitle="A four-stage post pipeline built for rhythm, story momentum, and platform fit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-3 reveal-up">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-5 sm:p-6 border transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-elevated border-accent'
                      : 'bg-surface/40 border-line hover:border-line-strong'
                  }`}
                  data-cursor="interactive"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xl font-bold font-mono ${
                          isActive ? 'text-accent' : 'text-muted'
                        }`}
                      >
                        {step.step}
                      </span>
                      <div>
                        <h4
                          className={`text-base sm:text-lg font-bold font-display ${
                            isActive ? 'text-ink' : 'text-muted'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-xs text-muted font-mono">{step.subtitle}</p>
                      </div>
                    </div>
                    <div
                      className={`w-9 h-9 flex items-center justify-center ${
                        isActive ? 'bg-accent text-canvas' : 'bg-white/5 text-muted'
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeProcessGlow"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-accent"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-line bg-surface/50 p-6 sm:p-10 relative overflow-hidden reveal-scale">
            <div className="absolute top-2 right-4 text-8xl font-bold font-mono text-white/[0.03] pointer-events-none">
              {activeStep.step}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 relative"
              >
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent">
                    <Clock size={14} />
                    {activeStep.timelinePhase}
                  </div>
                  <span className="text-xs font-mono text-muted">{activeStep.meta.focus}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-accent">
                    <IconComponent size={18} />
                    <span className="text-xs font-mono uppercase tracking-wider">
                      Stage {activeStep.step} of 04
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-display text-ink">
                    {activeStep.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-xl">
                    {activeStep.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-ink uppercase tracking-wider">
                    Stage outputs
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeStep.deliverables.map((item) => (
                      <div
                        key={item}
                        className="p-3 bg-canvas/50 rounded-2xl border border-line flex items-start gap-2"
                      >
                        <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-xs text-ink leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-canvas/60 rounded-2xl border border-line space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted">Timeline playhead</span>
                    <span className="text-accent">00:0{activeStepIndex + 1}:14:23</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 h-2 bg-black/40 p-0.5">
                    {[0, 1, 2, 3].map((idx) => (
                      <div
                        key={idx}
                        className={`h-full transition-colors ${
                          idx <= activeStepIndex ? 'bg-accent' : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 mt-6 border-t border-line flex items-center justify-between text-xs font-mono">
              <button
                onClick={() => setActiveStepIndex((p) => Math.max(0, p - 1))}
                disabled={activeStepIndex === 0}
                className="text-muted hover:text-ink disabled:opacity-30 cursor-pointer"
              >
                ← Previous
              </button>
              <span className="text-accent">
                {activeStepIndex + 1} / {PROCESS_STEPS.length}
              </span>
              <button
                onClick={() =>
                  setActiveStepIndex((p) => Math.min(PROCESS_STEPS.length - 1, p + 1))
                }
                disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                className="text-muted hover:text-ink disabled:opacity-30 cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
