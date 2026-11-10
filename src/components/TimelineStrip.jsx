/**
 * Decorative editing timeline for the hero: the two disciplines laid out as
 * tracks, with a looping playhead. Animation is driven from Hero.jsx via the
 * .tl-clip / .tl-bar / .tl-playhead / .tl-timecode hooks.
 */
const CLIP_COLORS = {
  coral: 'bg-clip-coral',
  sand: 'bg-clip-sand',
  teal: 'bg-clip-teal',
  lilac: 'bg-clip-lilac',
  mint: 'bg-clip-mint',
  sky: 'bg-clip-sky',
};

const TRACKS = [
  {
    label: 'V2',
    hideOnMobile: true,
    clips: [
      { name: 'Motion graphics', start: 9, length: 24, color: 'lilac' },
      { name: 'Color grade', start: 48, length: 31, color: 'sand' },
    ],
  },
  {
    label: 'V1',
    clips: [
      { name: 'Rough cut', start: 0, length: 27, color: 'coral' },
      { name: 'Story edit', start: 27.6, length: 35, color: 'sky' },
      { name: 'Final master', start: 63.2, length: 36.8, color: 'coral' },
    ],
  },
  { label: 'A1', waveform: true },
  {
    label: 'SEO',
    clips: [
      { name: 'Keyword research', start: 0, length: 25, color: 'teal' },
      { name: 'Technical audit', start: 25.6, length: 31, color: 'mint' },
      { name: 'Content clusters', start: 57.2, length: 42.8, color: 'teal' },
    ],
  },
];

const WAVEFORM = Array.from({ length: 96 }, (_, i) => {
  const v = Math.abs(Math.sin(i * 1.7) * 0.55 + Math.sin(i * 0.37) * 0.45);
  return Math.round(18 + v * 82);
});

export default function TimelineStrip() {
  return (
    <div aria-hidden="true" className="hero-fade border-t border-line pt-4">
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted">
        <span className="flex items-center gap-3">
          <span className="tl-timecode tabular-nums text-ink">00:00:00:00</span>
          <span className="hidden sm:inline">Showreel 2026 · 24 fps</span>
        </span>
        <span>Edit + search on one timeline</span>
      </div>

      <div className="flex gap-3">
        <div className="flex w-9 shrink-0 flex-col gap-1.5 pt-3.5 font-mono text-[11px] text-muted">
          {TRACKS.map((track) => (
            <span
              key={track.label}
              className={`h-7 items-center ${track.hideOnMobile ? 'hidden sm:flex' : 'flex'}`}
            >
              {track.label}
            </span>
          ))}
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="tl-ruler mb-1.5 h-2" />

          <div className="flex flex-col gap-1.5">
            {TRACKS.map((track) => (
              <div
                key={track.label}
                className={`relative h-7 rounded-md bg-surface ${
                  track.hideOnMobile ? 'hidden sm:block' : ''
                }`}
              >
                {track.waveform ? (
                  <div className="flex h-full items-center gap-px px-1">
                    {WAVEFORM.map((height, i) => (
                      <span
                        key={i}
                        className="tl-bar flex-1 rounded-full bg-muted/60"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                ) : (
                  track.clips.map((clip) => (
                    <span
                      key={clip.name}
                      className={`tl-clip absolute inset-y-0 flex items-center overflow-hidden rounded-md px-2.5 text-[11px] font-semibold text-graphite ${CLIP_COLORS[clip.color]}`}
                      style={{ left: `${clip.start}%`, width: `${clip.length}%` }}
                    >
                      <span className="truncate">{clip.name}</span>
                    </span>
                  ))
                )}
              </div>
            ))}
          </div>

          <div className="tl-playhead pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-px bg-accent">
              <span className="absolute -left-[5px] top-0 h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
