import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { TrendingUp, Activity, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import {
  MONTHLY_SEO_PERFORMANCE,
  KEYWORD_DISTRIBUTION,
  KEYWORD_TRACKER_SAMPLE,
  SEO_CASE_STUDY_STEPS,
} from '../data/seoData.js';

export default function SEOCaseStudies() {
  const [activeStep, setActiveStep] = useState('challenge');

  const stepsList = [
    { key: 'challenge', label: '01 Challenge' },
    { key: 'strategy', label: '02 Strategy' },
    { key: 'execution', label: '03 Execution' },
    { key: 'results', label: '04 Results' },
  ];

  const currentStepData = SEO_CASE_STUDY_STEPS[activeStep];

  return (
    <section id="seo-deep-dive" className="section-pad border-t border-line">
      <div className="container-premium">
        <SectionHeading
          kicker="Search case studies"
          title="Visibility is"
          highlight="engineered."
          subtitle="Technical bottlenecks, topical authority, and organic pipeline acceleration — measured, not guessed."
        />

        <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8 lg:p-10 space-y-10 reveal-up">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity size={15} className="text-accent" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
                  Organic telemetry
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-ink">
                Keyword & traffic growth tracker
              </h3>
            </div>
            <div className="text-[11px] font-mono text-muted rounded-2xl border border-line px-3 py-1.5">
              Sample demo · Zenith Enterprise model
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              ['79.4K', 'Organic sessions / mo', '+340% vs baseline'],
              ['1.28M', 'Search impressions', '+590% annual visibility'],
              ['184', 'Top 3 keyword ranks', '+156 high-value terms'],
              ['4.2', 'Avg. SERP position', 'From position 28.4'],
            ].map(([value, label, delta]) => (
              <div key={label} className="rounded-2xl border border-line bg-elevated/40 p-5 space-y-2">
                <span className="text-[11px] font-mono text-muted uppercase tracking-wider block">
                  {label}
                </span>
                <div className="text-2xl sm:text-4xl font-mono font-bold text-ink tabular-nums">
                  {value}
                </div>
                <div className="text-xs font-mono text-accent flex items-center gap-1">
                  <TrendingUp size={12} />
                  {delta}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 rounded-2xl border border-line bg-elevated/30 p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="text-sm font-display font-semibold text-ink">
                  Monthly organic growth
                </h4>
                <p className="text-xs font-mono text-muted">
                  Simulated 12-month technical overhaul
                </p>
              </div>
              <div className="h-64 sm:h-72 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={MONTHLY_SEO_PERFORMANCE}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="accentGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E4B56A" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#E4B56A" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      stroke="#3a4154"
                      tick={{ fill: '#8B8794', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                    />
                    <YAxis
                      stroke="#3a4154"
                      tick={{ fill: '#8B8794', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                      tickFormatter={(val) => `${val / 1000}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#141A28',
                        borderColor: 'rgba(244,238,228,0.12)',
                        borderRadius: 0,
                        fontFamily: 'IBM Plex Mono',
                        fontSize: 12,
                      }}
                      labelStyle={{ color: '#E4B56A', fontWeight: 600 }}
                      itemStyle={{ color: '#F4EEE4' }}
                      formatter={(val) => [`${val.toLocaleString()} clicks`, 'Organic']}
                    />
                    <Area
                      type="monotone"
                      dataKey="organicClicks"
                      stroke="#E4B56A"
                      strokeWidth={2.5}
                      fill="url(#accentGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-line bg-elevated/30 p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="text-sm font-display font-semibold text-ink">
                  SERP distribution
                </h4>
                <p className="text-xs font-mono text-muted">706 ranked keywords</p>
              </div>
              <div className="space-y-3 pt-1">
                {KEYWORD_DISTRIBUTION.map((item) => (
                  <div key={item.range} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-ink">{item.range}</span>
                      <span className="text-muted">
                        {item.count} · {item.share}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 overflow-hidden">
                      <div
                        className="h-full"
                        style={{ width: `${item.share}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-line">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-sm font-display font-semibold text-ink">
                Keyword performance snapshot
              </h4>
              <span className="text-[11px] font-mono text-accent hidden sm:inline">
                High-intent phrases
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-line text-muted uppercase text-[10px] tracking-wider">
                    <th className="py-2.5 px-3 font-medium">Keyword</th>
                    <th className="py-2.5 px-3 font-medium">Volume</th>
                    <th className="py-2.5 px-3 font-medium">Rank</th>
                    <th className="py-2.5 px-3 font-medium">Shift</th>
                    <th className="py-2.5 px-3 font-medium">Intent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {KEYWORD_TRACKER_SAMPLE.map((kw) => (
                    <tr key={kw.keyword} className="hover:bg-white/[0.02]">
                      <td className="py-3 px-3 text-ink">{kw.keyword}</td>
                      <td className="py-3 px-3 text-muted">{kw.volume}</td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 border border-accent/40 text-accent font-bold">
                          {kw.position}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-cool">{kw.change}</td>
                      <td className="py-3 px-3 text-muted">{kw.intent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-6 border-t border-line space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h4 className="text-xl font-display font-bold text-ink">
                How visibility compounds
              </h4>
              <div className="flex flex-wrap gap-2">
                {stepsList.map((step) => (
                  <button
                    key={step.key}
                    onClick={() => setActiveStep(step.key)}
                    className={`px-3.5 py-2 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer border ${
                      activeStep === step.key
                        ? 'bg-accent text-canvas border-accent'
                        : 'bg-transparent text-muted border-line hover:text-ink'
                    }`}
                  >
                    {step.label}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="rounded-2xl border border-line bg-elevated/40 p-6 sm:p-8 space-y-4"
              >
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider">
                  {currentStepData.kicker}
                </span>
                <h5 className="text-2xl font-bold font-display text-ink">
                  {currentStepData.title}
                </h5>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {currentStepData.summary}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-line">
                  {currentStepData.points.map((pt, idx) => (
                    <div key={idx} className="space-y-2 p-3 rounded-2xl border border-line bg-canvas/40">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-accent">
                        <CheckCircle2 size={13} />
                        Action {idx + 1}
                      </div>
                      <p className="text-xs text-muted leading-relaxed">{pt}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
