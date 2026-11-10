import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bug, Link2, Scissors } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { TOOLKIT_CATEGORIES } from '../data/tools.js';
import { TOOL_ICON_PATHS } from '../data/toolIcons.js';

gsap.registerPlugin(ScrollTrigger);

const ADOBE = { kind: 'letters', color: '#ffb4a8', tile: '#3a1210' };

const TOOL_ICONS = {
  'Adobe Premiere Pro': { ...ADOBE, letters: 'Pr' },
  'DaVinci Resolve': { kind: 'path', path: TOOL_ICON_PATHS.davinciresolve, color: '#9db8d9' },
  'Adobe After Effects': { ...ADOBE, letters: 'Ae' },
  'CapCut Pro': { kind: 'glyph', Glyph: Scissors, color: '#eef1f6' },
  'Adobe Audition': { ...ADOBE, letters: 'Au' },
  'Blender / Cinema 3D': { kind: 'path', path: TOOL_ICON_PATHS.blender, color: '#f5792a' },
  'Google Search Console': {
    kind: 'path',
    path: TOOL_ICON_PATHS.googlesearchconsole,
    color: '#5a9bf6',
  },
  Ahrefs: { kind: 'glyph', Glyph: Link2, color: '#ff8a3d' },
  SEMrush: { kind: 'path', path: TOOL_ICON_PATHS.semrush, color: '#ff642d' },
  'Screaming Frog SEO Spider': { kind: 'glyph', Glyph: Bug, color: '#8bc34a' },
  'Google Analytics 4 (GA4)': {
    kind: 'path',
    path: TOOL_ICON_PATHS.googleanalytics,
    color: '#f9ab00',
  },
  'Google Keyword Planner': { kind: 'path', path: TOOL_ICON_PATHS.googleads, color: '#5a9bf6' },
};

const FALLBACK_ICON = { kind: 'letters', color: '#eef1f6' };

const ALL_TOOLS = TOOLKIT_CATEGORIES.flatMap((g) => g.tools);

function ToolIcon({ name, size = 'md' }) {
  const icon = TOOL_ICONS[name] || { ...FALLBACK_ICON, letters: name.slice(0, 2) };
  const box = size === 'lg' ? 'h-16 w-16 rounded-2xl' : 'h-14 w-14 rounded-2xl';
  const svg = size === 'lg' ? 'h-8 w-8' : 'h-7 w-7';
  const letters = size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center ${box}`}
      style={{
        color: icon.color,
        backgroundColor: icon.tile || `color-mix(in srgb, ${icon.color} 16%, transparent)`,
      }}
    >
      {icon.kind === 'path' && (
        <svg viewBox="0 0 24 24" className={svg} fill="currentColor">
          <path d={icon.path} />
        </svg>
      )}
      {icon.kind === 'glyph' && <icon.Glyph size={size === 'lg' ? 30 : 26} strokeWidth={1.75} />}
      {icon.kind === 'letters' && (
        <span className={`font-sans font-bold tracking-tight ${letters}`}>{icon.letters}</span>
      )}
    </span>
  );
}

function IconRail({ reverse = false }) {
  const items = [...ALL_TOOLS, ...ALL_TOOLS];
  return (
    <div className="skill-marquee overflow-hidden py-2">
      <div
        className={`flex w-max gap-3 ${reverse ? 'skill-drift-rev' : 'skill-drift'}`}
        aria-hidden="true"
      >
        {items.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="flex items-center gap-3 rounded-full border border-line bg-surface/80 px-4 py-2.5 backdrop-blur-sm"
          >
            <ToolIcon name={tool.name} />
            <span className="pr-1 text-sm font-semibold text-ink whitespace-nowrap">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  const rootRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(rootRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set('.skill-tile', { autoAlpha: 0, y: 28 });

      ScrollTrigger.batch('.skill-tile', {
        start: 'top 90%',
        once: true,
        onEnter: (tiles) =>
          gsap.to(tiles, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'expo.out',
            stagger: 0.06,
            overwrite: true,
          }),
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="tools" ref={rootRef} className="tone-dark bg-canvas section-pad">
      <div className="container-premium">
        <SectionHeading
          kicker="Skills"
          title="Tools I cut with"
          highlight="and rank with."
          subtitle="Editing suites, motion tools, crawlers, and analytics — the stack behind every project."
        />
      </div>

      <div className="mb-14 space-y-3">
        <IconRail />
        <IconRail reverse />
      </div>

      <div className="container-premium space-y-14">
        {TOOLKIT_CATEGORIES.map((group) => (
          <div key={group.category}>
            <div className="mb-6 flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
              <h3 className="shrink-0 font-display text-xl font-bold text-ink md:text-2xl">
                {group.category}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted">{group.description}</p>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="skill-tile group rounded-3xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-elevated"
                >
                  <div className="flex items-center gap-4">
                    <span className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <ToolIcon name={tool.name} size="lg" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold leading-tight text-ink">{tool.name}</h4>
                      <p className="mt-1 text-sm text-muted">{tool.type}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted">{tool.useCase}</p>
                  <span className="mt-4 inline-block rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {tool.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
