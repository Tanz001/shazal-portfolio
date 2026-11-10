import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATEMENT = 'Good content gets attention. Smart strategy makes it count.';

export default function Introduction() {
  const statementRef = useRef(null);

  // Words come up to full strength as the statement is scrolled through.
  useEffect(() => {
    const mm = gsap.matchMedia(statementRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.intro-word',
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.12,
          scrollTrigger: {
            trigger: statementRef.current,
            start: 'top 82%',
            end: 'bottom 48%',
            scrub: 0.4,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="intro" className="tone-light bg-canvas section-pad">
      <div className="container-premium">
        <h2
          ref={statementRef}
          className="max-w-6xl text-[clamp(2rem,5.6vw,5.25rem)] font-extrabold leading-[1.03] text-ink"
        >
          {STATEMENT.split(' ').map((word, i) => (
            <span key={i} className="intro-word">
              {word}{' '}
            </span>
          ))}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-10 md:grid-cols-12 md:gap-8 reveal-up">
          <p className="md:col-span-4 text-sm font-semibold text-accent">
            Two disciplines, one outcome
          </p>
          <p className="md:col-span-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            I bring together visual storytelling and search strategy so brands
            create stronger experiences, reach the right audience, and grow
            without vanity noise.
          </p>
        </div>
      </div>
    </section>
  );
}
