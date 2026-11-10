import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import {
  TrendingUp,
  Search,
  Target,
  BarChart2,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import {
  MONTHLY_SEO_PERFORMANCE,
  KEYWORD_DISTRIBUTION,
  KEYWORD_TRACKER_SAMPLE,
  SEO_CASE_STUDY_STEPS
} from '../data/seoData.js';

export default function SEOCaseStudies() {
  const [activeStep, setActiveStep] = useState('challenge');
  const [hoveredKeyword, setHoveredKeyword] = useState(null);

  const stepsList = [
    { key: 'challenge', label: '01. Challenge' },
    { key: 'strategy', label: '02. Strategy' },
    { key: 'execution', label: '03. Execution' },
    { key: 'results', label: '04. Results' }
  ];

  const currentStepData = SEO_CASE_STUDY_STEPS[activeStep];

  return (
    <section id="seo-deep-dive" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        kicker="ANALYTICAL RIGOR & CASE STUDIES"
        title="VISIBILITY IS"
        highlight="NOT AN ACCIDENT."
        subtitle="A look behind the search metrics: dissecting technical bottlenecks, structuring topical authority, and measuring organic pipeline acceleration."
      />

      {/* Main Dark Analytics Dashboard */}
      <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-10">
        {/* Dashboard Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-[#D8FF3E]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D8FF3E]">
                ORGANIC TELEMETRY ENGINE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Organic Search & Keyword Growth Tracker
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#969696] bg-[#181818] border border-white/10 px-3.5 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-[#D8FF3E]" />
            <span>Sample Demo Case Study (Zenith Enterprise Model)</span>
          </div>
        </div>

        {/* 4 Key Performance Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#181818] border border-white/5 p-5 rounded-xl space-y-2">
            <span className="text-xs font-mono text-[#969696] uppercase tracking-wider block">
              Organic Sessions / Mo
            </span>
            <div className="text-2xl sm:text-4xl font-mono font-bold text-white tabular-nums">
              79.4K
            </div>
            <div className="text-xs font-mono text-[#D8FF3E] flex items-center gap-1">
              <TrendingUp size={12} />
              <span>+340% Lift vs Baseline</span>
            </div>
          </div>

          <div className="bg-[#181818] border border-white/5 p-5 rounded-xl space-y-2">
            <span className="text-xs font-mono text-[#969696] uppercase tracking-wider block">
              Search Impressions
            </span>
            <div className="text-2xl sm:text-4xl font-mono font-bold text-white tabular-nums">
              1.28M
            </div>
            <div className="text-xs font-mono text-[#D8FF3E] flex items-center gap-1">
              <TrendingUp size={12} />
              <span>+590% Annual SERP Visibility</span>
            </div>
          </div>

          <div className="bg-[#181818] border border-white/5 p-5 rounded-xl space-y-2">
            <span className="text-xs font-mono text-[#969696] uppercase tracking-wider block">
              Top 3 Keyword Ranks
            </span>
            <div className="text-2xl sm:text-4xl font-mono font-bold text-white tabular-nums">
              184
            </div>
            <div className="text-xs font-mono text-[#D8FF3E] flex items-center gap-1">
              <TrendingUp size={12} />
              <span>+156 Net High-Value Terms</span>
            </div>
          </div>

          <div className="bg-[#181818] border border-white/5 p-5 rounded-xl space-y-2">
            <span className="text-xs font-mono text-[#969696] uppercase tracking-wider block">
              Avg. SERP Position
            </span>
            <div className="text-2xl sm:text-4xl font-mono font-bold text-[#D8FF3E] tabular-nums">
              4.2
            </div>
            <div className="text-xs font-mono text-[#969696] flex items-center gap-1">
              <span>Improved from pos 28.4</span>
            </div>
          </div>
        </div>

        {/* Charts Split: Organic Clicks Timeline + Keyword Tier Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Area Chart: 12-Month Traffic Curve */}
          <div className="lg:col-span-8 bg-[#161616] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-heading font-semibold text-white">
                  Monthly Organic Growth Trajectory
                </h4>
                <p className="text-xs font-mono text-[#969696]">
                  Simulated 12-Month Technical Overhaul Timeline
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D8FF3E]" />
                  Organic Clicks
                </span>
              </div>
            </div>

            <div className="h-64 sm:h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={MONTHLY_SEO_PERFORMANCE}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="limeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D8FF3E" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#D8FF3E" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    stroke="#555"
                    tick={{ fill: '#888', fontSize: 11, fontFamily: 'monospace' }}
                    axisLine={{ stroke: '#333' }}
                  />
                  <YAxis
                    stroke="#555"
                    tick={{ fill: '#888', fontSize: 11, fontFamily: 'monospace' }}
                    axisLine={{ stroke: '#333' }}
                    tickFormatter={(val) => `${val / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#181818',
                      borderColor: 'rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      fontFamily: 'monospace',
                      fontSize: '12px'
                    }}
                    labelStyle={{ color: '#D8FF3E', fontWeight: 'bold' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(val) => [`${val.toLocaleString()} clicks`, 'Organic Traffic']}
                  />
                  <Area
                    type="monotone"
                    dataKey="organicClicks"
                    stroke="#D8FF3E"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#limeGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Keyword Tier Distribution */}
          <div className="lg:col-span-4 bg-[#161616] border border-white/10 rounded-xl p-5 sm:p-6 space-y-4">
            <div>
              <h4 className="text-sm font-heading font-semibold text-white">
                SERP Position Distribution
              </h4>
              <p className="text-xs font-mono text-[#969696]">
                Breakdown of 706 Ranked Keywords
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {KEYWORD_DISTRIBUTION.map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-[#F5F5F0]">{item.range}</span>
                    <span className="text-white font-bold">{item.count} kws ({item.share}%)</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.share}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-[#888] leading-tight">
              Focus is prioritized on capturing positions 1-3 to capture the majority of high-converting transactional clicks.
            </div>
          </div>
        </div>

        {/* Live Tracked Keywords Sample Table */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-heading font-semibold text-white">
              Target Keyword Performance Snapshot
            </h4>
            <span className="text-xs font-mono text-[#D8FF3E]">
              HIGH-COMMERCIAL INTENT PHRASES
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-[#888] uppercase text-[11px]">
                  <th className="py-2.5 px-3">Keyword Query</th>
                  <th className="py-2.5 px-3">Monthly Vol</th>
                  <th className="py-2.5 px-3">SERP Rank</th>
                  <th className="py-2.5 px-3">Shift</th>
                  <th className="py-2.5 px-3">Search Intent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {KEYWORD_TRACKER_SAMPLE.map((kw, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/5 transition-colors cursor-default"
                    onMouseEnter={() => setHoveredKeyword(kw.keyword)}
                    onMouseLeave={() => setHoveredKeyword(null)}
                  >
                    <td className="py-3 px-3 font-medium text-white flex items-center gap-2">
                      <span className="text-[#D8FF3E]">#</span>
                      {kw.keyword}
                    </td>
                    <td className="py-3 px-3 text-[#969696]">{kw.volume}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[#D8FF3E]/10 border border-[#D8FF3E]/30 text-[#D8FF3E] font-bold">
                        {kw.position}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-emerald-400">{kw.change}</td>
                    <td className="py-3 px-3 text-[#969696]">{kw.intent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Case Study Methodology: Challenge → Strategy → Execution → Results */}
        <div className="pt-8 border-t border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#D8FF3E] uppercase tracking-wider">
                FRAMEWORK ROADMAP
              </span>
              <h4 className="text-xl font-heading font-bold text-white">
                How We Engineer Compounding Visibility
              </h4>
            </div>

            {/* Step Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {stepsList.map((step) => (
                <button
                  key={step.key}
                  onClick={() => setActiveStep(step.key)}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                    activeStep === step.key
                      ? 'bg-[#D8FF3E] text-[#090909] font-bold shadow-sm'
                      : 'bg-[#181818] text-[#969696] hover:text-white border border-white/10'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#181818] border border-white/10 rounded-xl p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-[#D8FF3E] uppercase tracking-wider">
                  {currentStepData.kicker}
                </span>
                <span className="text-xs font-mono text-[#888]">
                  METHODOLOGY STAGE
                </span>
              </div>

              <h5 className="text-2xl font-bold font-heading text-white">
                {currentStepData.title}
              </h5>

              <p className="text-sm sm:text-base text-[#C4C4BC] leading-relaxed">
                {currentStepData.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {currentStepData.points.map((pt, idx) => (
                  <div key={idx} className="space-y-1.5 p-3 rounded-lg bg-[#121212] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#D8FF3E]">
                      <CheckCircle2 size={13} />
                      <span>Action {idx + 1}</span>
                    </div>
                    <p className="text-xs text-[#969696] leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
