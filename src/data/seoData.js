/**
 * SEO Case Study & Analytics Visualization Demo Datasets
 * Explicitly labeled as sample/demo information for presentation purposes.
 */

export const MONTHLY_SEO_PERFORMANCE = [
  { month: 'Jan', organicClicks: 12400, impressions: 185000, avgPosition: 28.4 },
  { month: 'Feb', organicClicks: 14200, impressions: 210000, avgPosition: 26.1 },
  { month: 'Mar', organicClicks: 18900, impressions: 295000, avgPosition: 21.8 },
  { month: 'Apr', organicClicks: 24500, impressions: 380000, avgPosition: 17.2 },
  { month: 'May', organicClicks: 31200, impressions: 490000, avgPosition: 13.9 },
  { month: 'Jun', organicClicks: 39800, impressions: 620000, avgPosition: 10.4 },
  { month: 'Jul', organicClicks: 46100, impressions: 740000, avgPosition: 8.7 },
  { month: 'Aug', organicClicks: 52400, impressions: 830000, avgPosition: 7.2 },
  { month: 'Sep', organicClicks: 58900, impressions: 920000, avgPosition: 6.4 },
  { month: 'Oct', organicClicks: 65200, impressions: 1040000, avgPosition: 5.6 },
  { month: 'Nov', organicClicks: 71800, impressions: 1150000, avgPosition: 4.9 },
  { month: 'Dec', organicClicks: 79400, impressions: 1280000, avgPosition: 4.2 }
];

export const KEYWORD_DISTRIBUTION = [
  { range: 'Top 1-3', count: 184, share: 28, color: '#2ED3B7' },
  { range: 'Positions 4-10', count: 312, share: 44, color: '#9B8AFF' },
  { range: 'Positions 11-20', count: 142, share: 19, color: '#5AA2FF' },
  { range: 'Positions 21-50', count: 68, share: 9, color: '#5F626C' }
];

export const KEYWORD_TRACKER_SAMPLE = [
  { keyword: 'enterprise video production software', volume: '14.2K', position: 2, change: '+18', intent: 'Commercial' },
  { keyword: 'cinematic video editing agency', volume: '9.8K', position: 1, change: '+12', intent: 'Transactional' },
  { keyword: 'technical seo audit framework', volume: '22.5K', position: 3, change: '+24', intent: 'Informational' },
  { keyword: 'core web vitals optimization guide', volume: '18.1K', position: 2, change: '+15', intent: 'Informational' },
  { keyword: 'b2b organic growth strategy', volume: '8.4K', position: 4, change: '+9', intent: 'Commercial' }
];

export const SEO_CASE_STUDY_STEPS = {
  challenge: {
    title: 'The Challenge',
    kicker: 'Phase 01 — Baseline Diagnostics',
    summary: 'A high-growth SaaS platform had high brand equity but suffered from severe search invisibility on core product terms.',
    points: [
      'Over 60% of product URLs suffered from orphaned indexation or faceted URL bloat.',
      'Core Web Vitals LCP (Largest Contentful Paint) exceeded 4.2 seconds due to unoptimized script assets.',
      'Thin programmatic category pages triggered crawl budget wastage across 14,000 sub-routes.'
    ]
  },
  strategy: {
    title: 'The Strategy',
    kicker: 'Phase 02 — Architectural Architecture',
    summary: 'Engineered a full semantic keyword-to-entity mapping system coupled with crawl budget restructuring.',
    points: [
      'Pioneered topical hub-and-spoke cluster architecture around 5 core commercial search verticals.',
      'Implemented custom JSON-LD schema graphs connecting author entities, products, and FAQ snippets.',
      'Audited log files to identify and eliminate 85% of non-productive Googlebot crawl cycles.'
    ]
  },
  execution: {
    title: 'The Execution',
    kicker: 'Phase 03 — Technical & Content Deployment',
    summary: 'Executed technical site refactoring, content upgrades, and intentional internal linking graphs.',
    points: [
      'Rebuilt URL routing rules, consolidating 14,000 faceted URLs into 320 authoritative landing hubs.',
      'Optimized asset loading waterfall, cutting LCP to 1.1s and securing 100% Core Web Vitals passing scores.',
      'Authored in-depth editorial guides with bespoke video explainers to drive dwell time past 4.5 minutes.'
    ]
  },
  results: {
    title: 'The Results',
    kicker: 'Phase 04 — Measured Compound Growth',
    summary: 'Demonstrated compounding search visibility, ranking dominance, and qualified inbound lead velocity.',
    points: [
      'Organic search sessions expanded by +340% over an 8-month tracking timeframe (Sample Demo Result).',
      'Captured 184 keywords in positions 1-3 across high-intent transactional search queries.',
      'Organic conversion pipeline increased by 185% without incremental ad expenditure.'
    ]
  }
};
