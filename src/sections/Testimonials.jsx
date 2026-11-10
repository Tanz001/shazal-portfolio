import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials.js';

gsap.registerPlugin(ScrollTrigger);

const AVATAR_COLORS = [
  'bg-clip-coral',
  'bg-clip-teal',
  'bg-clip-sky',
  'bg-clip-sand',
];

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);
}

function TestimonialCard({ item, colorClass }) {
  return (
    <article className="w-[min(85vw,22rem)] shrink-0 rounded-3xl border border-line bg-elevated p-6 shadow-[0_18px_50px_-28px_rgba(15,18,24,0.3)] sm:w-[24rem] sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 text-accent">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-current" />
          ))}
        </div>
        <Quote size={18} className="text-accent/35" />
      </div>

      <p className="min-h-[6.5rem] text-sm leading-relaxed text-ink sm:text-[0.95rem]">
        “{item.quote}”
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-graphite ${colorClass}`}
        >
          {initials(item.author)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{item.author}</p>
          <p className="truncate text-xs text-muted">
            {item.role} · {item.company}
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ items, reverse = false, duration = 40 }) {
  // Duplicate so the loop can seam without a gap
  const loop = [...items, ...items, ...items];

  return (
    <div className="skill-marquee overflow-hidden py-2">
      <div
        className={`testimonial-mq flex w-max gap-4 ${
          reverse ? 'testimonial-mq-rev' : 'testimonial-mq-fwd'
        }`}
        style={{ '--mq-duration': `${duration}s` }}
        aria-hidden="true"
      >
        {loop.map((item, i) => (
          <TestimonialCard
            key={`${item.id}-${i}`}
            item={item}
            colorClass={AVATAR_COLORS[i % AVATAR_COLORS.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const rootRef = useRef(null);

  // Scroll velocity leans the rows slightly for a live feel
  useEffect(() => {
    const mm = gsap.matchMedia(rootRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const rows = gsap.utils.toArray('.testimonial-mq');
      const lean = rows.map((el) =>
        gsap.quickTo(el, 'skewX', { duration: 0.45, ease: 'power3.out' })
      );
      const setLean = (deg) => lean.forEach((to) => to(deg));

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => setLean(gsap.utils.clamp(-6, 6, self.getVelocity() / -350)),
        onLeave: () => setLean(0),
        onLeaveBack: () => setLean(0),
      });

      const settle = () => setLean(0);
      ScrollTrigger.addEventListener('scrollEnd', settle);
      return () => ScrollTrigger.removeEventListener('scrollEnd', settle);
    });

    return () => mm.revert();
  }, []);

  const rowA = TESTIMONIALS;
  const rowB = [...TESTIMONIALS].reverse();

  return (
    <section
      id="testimonials"
      ref={rootRef}
      className="tone-light relative overflow-hidden border-y border-line bg-canvas section-pad"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-clip-sky/15 blur-3xl" />

      <div className="container-premium relative z-10 mb-10 md:mb-12">
        <p className="mb-3 text-sm font-semibold text-accent">Testimonials</p>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
          Clients who trusted
          <span className="text-accent"> the cut.</span>
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          Feedback from brand, growth, and content teams after the work shipped.
        </p>
      </div>

      <div className="relative z-10 space-y-4">
        <p className="sr-only">
          {TESTIMONIALS.map((t) => `${t.author}: ${t.quote}`).join(' ')}
        </p>
        <MarqueeRow items={rowA} duration={48} />
        <MarqueeRow items={rowB} reverse duration={56} />
      </div>
    </section>
  );
}
