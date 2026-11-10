/**
 * Selected Creative Work & Case Studies Data
 * Note: Metric indicators and client names are designated demo/sample placeholders.
 */

export const PROJECT_CATEGORIES = [
  'All',
  'Brand Promo',
  'YouTube Content',
  'Social Media Reels',
  'Product Commercial',
  'Creative Motion Graphics',
  'SEO Growth Case Study'
];

export const PROJECTS = [
  {
    id: 'aeon-electric-commercial',
    title: 'AEON EV — The Velocity of Light',
    category: 'Brand Promo',
    type: 'video',
    year: '2025',
    client: 'AEON Mobility Labs (Demo Client)',
    role: 'Editorial, Sound Design & Color Grade',
    duration: '01:45',
    aspectRatio: '16:9',
    description: 'Cinematic brand promotional commercial featuring high-contrast anamorphic visuals, heavy rhythmic cuts synced with an electronic soundscape, and precision DaVinci color grading.',
    thumbnail: '/src/assets/images/project_brand_commercial_1794316160162.jpg',
    tags: ['Brand Film', '4K Anamorphic', 'Sound Design', 'DaVinci Resolve'],
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    challenge: 'Deliver a high-octane visual identity piece showcasing next-generation electric mobility with zero dialogue and 100% visual and auditory momentum.',
    solution: 'Crafted a dynamic pacing arc with progressive speed ramping, bespoke foley design, and customized neon edge grading.',
    deliverables: ['1x 90s Master Commercial', '3x 15s Cutdowns', 'Social Teaser Packs']
  },
  {
    id: 'nordic-solitude-documentary',
    title: 'Silent Fjords — Documentary Short',
    category: 'YouTube Content',
    type: 'video',
    year: '2025',
    client: 'Apex Creative Media (Demo Client)',
    role: 'Long-form Narrative Editing & Color Master',
    duration: '14:20',
    aspectRatio: '16:9',
    description: 'Long-form cinematic YouTube documentary balancing expansive landscape cinematography with intimate conversational storytelling and high audience retention structure.',
    thumbnail: '/src/assets/images/video_editing_showcase_1794316155603.jpg',
    tags: ['YouTube Long-Form', 'Story Arc', 'Atmospheric Audio', 'Color Master'],
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    challenge: 'Maintain viewer watch time above 68% across a 14-minute thoughtful documentary narrative.',
    solution: 'Introduced cyclical narrative micro-hooks every 90 seconds, subtle thematic audio stems, and crisp dynamic b-roll inserts.',
    deliverables: ['14-min Master Cut', 'Custom Thumbnail Archetypes', 'Retention Chapter Markers']
  },
  {
    id: 'kinetic-editorial-suite',
    title: 'Obsidian Studio — The Director Cut',
    category: 'Creative Motion Graphics',
    type: 'video',
    year: '2025',
    client: 'Studio Obsidian (Demo Client)',
    role: 'Motion Direction & 3D Typography',
    duration: '00:58',
    aspectRatio: '16:9',
    description: 'High-energy studio showreel utilizing kinetic typography, split-screen geometric masks, and seamless speed-ramped transitions for modern digital screens.',
    thumbnail: '/src/assets/images/hero_cinematic_frame_1794316157176.jpg',
    tags: ['Motion Graphics', 'Kinetic Typography', 'After Effects', 'Split Screen'],
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    challenge: 'Distill 80 hours of mixed footage into an electrifying 60-second agency introduction.',
    solution: 'Engineered a tempo grid synced to 134 BPM with custom typography displacement passes.',
    deliverables: ['60s Agency Reel', 'Vertical 9:16 Cut for Instagram/TikTok', 'Looping Exhibition File']
  },
  {
    id: 'zenith-saas-seo-architecture',
    title: 'Zenith Cloud — Organic Visibility Overhaul',
    category: 'SEO Growth Case Study',
    type: 'seo',
    year: '2025',
    client: 'Zenith Enterprise (Sample Demo Data)',
    role: 'Technical SEO & Content Hierarchy',
    duration: '6 Month Campaign',
    aspectRatio: '16:9',
    description: 'Comprehensive technical crawl optimization, programmatic architecture restructuring, and content gap execution yielding exponential organic search discovery.',
    thumbnail: '/src/assets/images/seo_data_visualization_1794316157747.jpg',
    tags: ['Technical Audit', 'Core Web Vitals', 'Search Intent', 'Internal Linking'],
    stats: [
      { label: 'Organic Traffic Lift', value: '+340%', sub: 'Sample Demo Metric' },
      { label: 'Top 3 Keywords', value: '420+', sub: 'Sample Demo Metric' },
      { label: 'Crawl Error Reduction', value: '98%', sub: 'Sample Demo Metric' }
    ],
    challenge: 'A legacy enterprise cloud portal was invisible on competitive search terms due to faceted navigation bloat and slow server-side rendering.',
    solution: 'Restructured canonical architecture, optimized crawl budget by 72%, and built topical authority clusters around developer infrastructure.',
    deliverables: ['Complete Technical SEO Audit', 'Cluster Keyword Taxonomy', 'Looker Studio Dashboard']
  },
  {
    id: 'pulse-reels-retention-system',
    title: 'Pulse Apparel — Viral Hook Architecture',
    category: 'Social Media Reels',
    type: 'video',
    year: '2025',
    client: 'Pulse Activewear (Demo Client)',
    role: 'Short-Form Hook Optimization & Editing',
    duration: '00:30',
    aspectRatio: '9:16',
    description: 'Fast-paced vertical reel sequence engineered specifically for Instagram Reels & TikTok algorithms with 3-second hook retention and seamless looping.',
    thumbnail: '/src/assets/images/project_brand_commercial_1794316160162.jpg',
    tags: ['9:16 Vertical', 'Micro-Transitions', 'Captions', 'Looping Audio'],
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    challenge: 'Cut through crowded fitness feeds with high completion rates and immediate save/share signals.',
    solution: 'Implemented visual pattern interrupts at second 1.2, dynamic subtitle animations, and an invisible loop outro.',
    deliverables: ['12x Vertical Reels Pack', 'Sound FX Stems', 'Hook Performance Templates']
  },
  {
    id: 'strata-fintech-ranking-dominance',
    title: 'Strata Pay — High-Intent Fintech SEO',
    category: 'SEO Growth Case Study',
    type: 'seo',
    year: '2025',
    client: 'Strata Banking (Sample Demo Data)',
    role: 'Search Intent Modeling & On-Page SEO',
    duration: '8 Month Campaign',
    aspectRatio: '16:9',
    description: 'Targeted acquisition strategy focusing on high-commercial intent fintech queries, structured schema markup, and competitor displacement.',
    thumbnail: '/src/assets/images/seo_data_visualization_1794316157747.jpg',
    tags: ['Commercial Intent', 'Schema Markup', 'Backlink Profile', 'SERP Features'],
    stats: [
      { label: 'Featured Snippets Won', value: '84', sub: 'Sample Demo Metric' },
      { label: 'Search Impressions', value: '1.2M/mo', sub: 'Sample Demo Metric' },
      { label: 'Organic Inbound Leads', value: '+185%', sub: 'Sample Demo Metric' }
    ],
    challenge: 'Overcoming entrenched legacy banking competitors with high domain authority on core merchant solution keywords.',
    solution: 'Targeted long-tail comparison terms, implemented product entity schemas, and revamped information architecture.',
    deliverables: ['Competitor Gap Matrix', 'Schema Implementation Map', 'Quarterly Growth Roadmap']
  }
];
