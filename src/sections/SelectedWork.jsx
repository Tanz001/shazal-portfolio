import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';

gsap.registerPlugin(ScrollTrigger);

const CARD_COLORS = [
  'bg-clip-coral',
  'bg-clip-sand',
  'bg-clip-teal',
  'bg-clip-sky',
  'bg-clip-lilac',
  'bg-clip-mint',
];

// Resting places in the deck: front card, then two peeking out below it.
const SLOTS = [
  { y: 0, scale: 1, autoAlpha: 1 },
  { y: 28, scale: 0.95, autoAlpha: 1 },
  { y: 56, scale: 0.9, autoAlpha: 1 },
];
const BELOW = { y: 180, scale: 0.84, autoAlpha: 0 };

const STEP = 1; // timeline seconds per card
const MOVE = 0.72; // of which the cards are moving; the rest is a hold

const pad = (n) => String(n).padStart(2, '0');

export default function SelectedWork({ onOpenProject }) {
  const stageRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isDeck, setIsDeck] = useState(false);
  const total = PROJECTS.length;

  useEffect(() => {
    const stage = stageRef.current;
    const mm = gsap.matchMedia(stageRef);

    // Pinned deck on desktop. Elsewhere the cards stay a CSS sticky stack.
    const deckQuery =
      '(min-width: 900px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)';

    mm.add(deckQuery, () => {
      const cards = gsap.utils.toArray('.deck-card');
      stage.classList.add('is-deck');
      setIsDeck(true);

      cards.forEach((card, i) => {
        gsap.set(card, {
          ...(SLOTS[i] || BELOW),
          zIndex: cards.length - i,
          transformOrigin: '50% 100%',
        });
      });

      const tl = gsap.timeline({
        // The counter follows the timeline itself (not raw scroll), so it
        // stays in step with the smoothed card motion.
        onUpdate: () => {
          const index = Math.floor(tl.time() / STEP + (1 - MOVE / 2));
          setActive(gsap.utils.clamp(0, cards.length - 1, index));
        },
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${(cards.length - 1) * window.innerHeight * 0.85}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let step = 0; step < cards.length - 1; step += 1) {
        const at = step * STEP;

        // Front card leaves upward...
        tl.to(
          cards[step],
          {
            y: () => -window.innerHeight * 0.95,
            rotation: -6,
            scale: 0.92,
            autoAlpha: 0.15,
            duration: MOVE,
            ease: 'power2.in',
          },
          at
        );

        // ...and everything behind it moves one place forward, with the
        // next hidden card rising from below into the last slot.
        SLOTS.forEach((slot, depth) => {
          const card = cards[step + depth + 1];
          if (card) tl.to(card, { ...slot, duration: MOVE, ease: 'power2.out' }, at);
        });
      }
      tl.to({}, { duration: STEP - MOVE });

      return () => {
        stage.classList.remove('is-deck');
        setIsDeck(false);
        setActive(0);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="work" className="tone-light relative bg-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
      />
      <div ref={stageRef} className="deck-stage section-pad">
        <div className="container-premium">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
            <div>
              <p className="mb-3 text-sm font-semibold text-accent">Projects</p>
              <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
                Selected work
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                Showreels, commercial cuts, and SEO builds made for retention and discovery.
              </p>
            </div>

            {isDeck ? (
              <div className="flex items-center gap-5">
                <p className="font-mono text-sm tabular-nums text-muted" aria-live="polite">
                  <span className="text-ink">{pad(active + 1)}</span> / {pad(total)}
                </p>
                <div className="flex gap-1.5" aria-hidden="true">
                  {PROJECTS.map((project, i) => (
                    <span
                      key={project.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active ? 'w-8 bg-accent' : 'w-3 bg-ink/15'
                      }`}
                    />
                  ))}
                </div>
                <p className="hidden text-sm text-muted xl:block">Scroll to turn the deck</p>
              </div>
            ) : null}
          </div>

          <div className="deck">
            {PROJECTS.map((project, i) => {
              const isVideo = project.type === 'video';
              return (
                <article
                  key={project.id}
                  style={{ '--i': i }}
                  inert={isDeck && i !== active}
                  className={`deck-card ${CARD_COLORS[i % CARD_COLORS.length]} rounded-[1.75rem] p-5 text-graphite shadow-[0_28px_70px_-24px_rgb(15_18_24/0.35)] ring-1 ring-black/5 sm:p-7 lg:p-8`}
                >
                  <div className="grid h-full gap-6 lg:grid-cols-12 lg:gap-8">
                    <div className="order-2 flex min-h-0 flex-col justify-between gap-6 lg:order-1 lg:col-span-5">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span>
                            {pad(i + 1)} / {pad(total)}
                          </span>
                          <span>{project.year}</span>
                        </div>
                        <p className="text-sm font-semibold">{project.category}</p>
                        <h3 className="text-2xl font-extrabold leading-[1.08] sm:text-[1.75rem]">
                          {project.title}
                        </h3>
                        <p className="line-clamp-3 text-sm leading-relaxed text-graphite/85">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-5">
                        <dl className="grid grid-cols-2 gap-4 border-t border-graphite/25 pt-4 text-xs">
                          <div>
                            <dt className="text-graphite/80">Client</dt>
                            <dd className="mt-1 font-semibold">{project.client}</dd>
                          </div>
                          <div>
                            <dt className="text-graphite/80">Role</dt>
                            <dd className="mt-1 font-semibold">{project.role}</dd>
                          </div>
                        </dl>

                        <button
                          type="button"
                          onClick={() => onOpenProject(project)}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-graphite px-5 py-3 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04]"
                        >
                          {isVideo ? (
                            <Play size={15} className="fill-current" />
                          ) : (
                            <ArrowUpRight size={16} />
                          )}
                          {isVideo ? 'Watch project' : 'View case study'}
                        </button>
                      </div>
                    </div>

                    <div
                      onClick={() => onOpenProject(project)}
                      data-cursor={isVideo ? 'play' : 'view'}
                      data-cursor-text={isVideo ? 'WATCH' : 'CASE'}
                      className="group relative order-1 aspect-video cursor-pointer overflow-hidden rounded-2xl bg-graphite lg:order-2 lg:col-span-7 lg:aspect-auto lg:h-full lg:min-h-0"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {project.duration && (
                        <span className="absolute bottom-4 left-4 rounded-full bg-graphite/85 px-3 py-1 font-mono text-xs text-paper">
                          {project.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-2 text-xs text-muted">
            Sample projects for presentation. Live client work is shared on engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
