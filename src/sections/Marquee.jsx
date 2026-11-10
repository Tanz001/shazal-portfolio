import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search } from 'lucide-react';
import reelA from '../assets/images/video_editing_showcase_1794316155603.jpg';
import reelB from '../assets/images/project_brand_commercial_1794316160162.jpg';
import reelC from '../assets/images/hero_cinematic_frame_1794316157176.jpg';

gsap.registerPlugin(ScrollTrigger);

const REPEAT = 12;
const REELS = [reelA, reelB, reelC];

/**
 * Two crossing tapes. SEO sits on top; Video Editor below.
 * Scroll drives them in opposite directions.
 */
export default function Marquee() {
  const rootRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(rootRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(rootRef);

      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.45,
          },
        })
        .fromTo(q('.mq-forward'), { xPercent: -35 }, { xPercent: 5 }, 0)
        .fromTo(q('.mq-backward'), { xPercent: 5 }, { xPercent: -35 }, 0);

      const lean = q('.mq-track').map((el) =>
        gsap.quickTo(el, 'skewX', { duration: 0.45, ease: 'power3.out' })
      );
      const setLean = (deg) => lean.forEach((to) => to(deg));

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => setLean(gsap.utils.clamp(-16, 16, self.getVelocity() / -200)),
        onLeave: () => setLean(0),
        onLeaveBack: () => setLean(0),
      });

      const settle = () => setLean(0);
      ScrollTrigger.addEventListener('scrollEnd', settle);
      return () => ScrollTrigger.removeEventListener('scrollEnd', settle);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="tone-light relative h-[clamp(16rem,36vw,28rem)] overflow-hidden bg-canvas"
    >
      <p className="sr-only">SEO expert and video editor</p>

      {/* Video Editor — behind / below */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-[12vw] top-1/2 z-0 -translate-y-1/2 -rotate-[5deg] bg-clip-sand py-[1vw] text-graphite shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
      >
        <div className="mq-track mq-backward mq-text flex w-max items-center gap-[0.4em] will-change-transform">
          {Array.from({ length: REPEAT }, (_, i) => (
            <span key={i} className="flex items-center gap-[0.4em]">
              Video Editor
              <img
                src={REELS[i % REELS.length]}
                alt=""
                className="h-[0.62em] w-[1.45em] rounded-full object-cover ring-2 ring-graphite/20"
              />
            </span>
          ))}
        </div>
      </div>

      {/* SEO Expert — on top */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-[12vw] top-1/2 z-10 -translate-y-1/2 rotate-[3.5deg] bg-accent py-[1vw] text-paper shadow-[0_24px_70px_rgba(255,92,57,0.35)]"
      >
        <div className="mq-track mq-forward mq-text flex w-max items-center gap-[0.4em] will-change-transform">
          {Array.from({ length: REPEAT }, (_, i) => (
            <span key={i} className="flex items-center gap-[0.4em]">
              SEO Expert
              <span className="flex h-[0.58em] w-[0.58em] items-center justify-center rounded-full bg-paper text-accent">
                <Search className="h-1/2 w-1/2" strokeWidth={3} />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
