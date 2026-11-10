import { Fragment, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, MapPin, Play, Search } from 'lucide-react';
import MagneticButton from '../components/MagneticButton.jsx';
import TimelineStrip from '../components/TimelineStrip.jsx';
import { scrollToTarget } from '../lib/scroll.js';
import heroImg from '../assets/images/hero_cinematic_frame_1794316157176.jpg';

gsap.registerPlugin(ScrollTrigger);

const QUERIES = [
  'video editor for brands',
  'technical seo audit',
  'youtube retention edit',
  'rank on page one',
];

const LOOP_SECONDS = 9;
const FPS = 24;

function Words({ text }) {
  return text.split(' ').map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span className="word-mask">
        <span className="hero-word inline-block will-change-transform">{word}</span>
      </span>{' '}
    </Fragment>
  ));
}

function TypedQuery() {
  const [text, setText] = useState(QUERIES[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let query = 0;
    let length = QUERIES[0].length;
    let deleting = true;
    let timer;

    const step = () => {
      const full = QUERIES[query];
      let delay = deleting ? 32 : 68;

      if (deleting) {
        length -= 1;
        if (length === 0) {
          deleting = false;
          query = (query + 1) % QUERIES.length;
          delay = 320;
        }
      } else {
        length += 1;
        if (length === QUERIES[query].length) {
          deleting = true;
          delay = 1700;
        }
      }

      setText((deleting ? full : QUERIES[query]).slice(0, length));
      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {text}
      <span className="caret" />
    </>
  );
}

export default function Hero({ ready }) {
  const rootRef = useRef(null);
  const introRef = useRef(null);
  const readyRef = useRef(ready);
  readyRef.current = ready;

  useEffect(() => {
    const mm = gsap.matchMedia(rootRef);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(rootRef);
      const timecode = q('.tl-timecode')[0];

      // Ambient orbs drift slowly
      gsap.to(q('.hero-orb-a'), {
        x: 40,
        y: -30,
        duration: 8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to(q('.hero-orb-b'), {
        x: -50,
        y: 35,
        duration: 10,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      const playhead = gsap.fromTo(
        q('.tl-playhead'),
        { xPercent: 0 },
        {
          xPercent: 100,
          duration: LOOP_SECONDS,
          ease: 'none',
          repeat: -1,
          paused: true,
          onUpdate() {
            const frames = Math.floor(this.progress() * LOOP_SECONDS * FPS);
            const ss = String(Math.floor(frames / FPS)).padStart(2, '0');
            const ff = String(frames % FPS).padStart(2, '0');
            timecode.textContent = `00:00:${ss}:${ff}`;
          },
        }
      );

      let rolling = false;
      const intro = gsap
        .timeline({ paused: true })
        .from(q('.hero-word'), {
          yPercent: 115,
          rotate: 4,
          duration: 1.15,
          ease: 'expo.out',
          stagger: 0.05,
        })
        .from(
          q('.hero-pill'),
          { scale: 0.2, autoAlpha: 0, duration: 0.95, ease: 'back.out(1.7)', stagger: 0.16 },
          0.3
        )
        .from(
          q('.hero-fade'),
          { autoAlpha: 0, y: 28, duration: 0.95, ease: 'expo.out', stagger: 0.08 },
          0.5
        )
        .from(
          q('.tl-clip'),
          { scaleX: 0, transformOrigin: 'left center', duration: 0.75, ease: 'expo.out', stagger: 0.05 },
          0.85
        )
        .from(q('.tl-bar'), { scaleY: 0, duration: 0.5, ease: 'power2.out', stagger: 0.004 }, 0.95)
        .from(q('.hero-scroll-hint'), { autoAlpha: 0, y: 10, duration: 0.6, ease: 'power2.out' }, 1.2)
        .add(() => {
          rolling = true;
          playhead.play();
        }, 1.25);

      // Parallax content slightly as you leave the hero
      gsap.to(q('.hero-parallax'), {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => {
          if (!rolling) return;
          if (self.isActive) playhead.resume();
          else playhead.pause();
        },
      });

      introRef.current = intro;
      if (readyRef.current) intro.play();

      return () => {
        introRef.current = null;
      };
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    if (ready) introRef.current?.play();
  }, [ready]);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-dvh flex-col overflow-hidden px-5 pb-8 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="hero-orb hero-orb-a left-[-10%] top-[12%] h-[42vw] w-[42vw] max-h-[420px] max-w-[420px] bg-accent/20" />
      <div className="hero-orb hero-orb-b right-[-8%] top-[38%] h-[36vw] w-[36vw] max-h-[360px] max-w-[360px] bg-clip-sky/15" />

      <div className="hero-parallax container-premium relative z-10 flex flex-1 flex-col">
        <div className="hero-fade flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <p className="flex items-center gap-2.5 text-ink">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Booking projects for 2026
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            Lahore · worldwide
          </p>
        </div>

        <div className="my-auto py-10">
          <p className="hero-fade mb-5 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Shazal Qaiser
          </p>

          <h1 className="hero-title text-ink">
            <span className="block">
              <Words text="Videos that" />
              <span aria-hidden="true" className="hero-pill w-[2em] bg-surface ring-1 ring-line-strong">
                <img
                  src={heroImg}
                  alt=""
                  className="reel-pan absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-graphite/25">
                  <span className="flex h-[0.44em] w-[0.44em] items-center justify-center rounded-full bg-accent text-paper shadow-[0_0_24px_rgba(255,92,57,0.45)]">
                    <Play className="h-[45%] w-[45%] translate-x-[6%] fill-current" />
                  </span>
                </span>
              </span>{' '}
              <Words text="move people." />
            </span>
            <span className="mt-[0.08em] block">
              <Words text="Strategies that" />
              <span
                aria-hidden="true"
                className="hero-pill w-[3.5em] items-center gap-[0.12em] border border-line-strong bg-elevated px-[0.22em] text-ink"
              >
                <Search className="h-[0.28em] w-[0.28em] shrink-0 text-accent" />
                <span className="hero-pill-text text-muted">
                  <TypedQuery />
                </span>
              </span>{' '}
              <Words text="move businesses." />
            </span>
          </h1>

          <div className="mt-9 flex flex-col gap-7 sm:mt-11 lg:flex-row lg:items-end lg:justify-between">
            <p className="hero-fade max-w-md text-base leading-relaxed text-muted sm:text-lg">
              I edit video people finish watching — and build the search systems
              that get it discovered.
            </p>

            <div className="hero-fade flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget('#work');
                }}
                variant="primary"
              >
                <span className="flex items-center gap-2">
                  Explore work
                  <ArrowDownRight size={18} />
                </span>
              </MagneticButton>
              <MagneticButton
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget('#contact');
                }}
                variant="secondary"
              >
                Start a project
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint mb-6 flex items-center gap-3 text-xs font-mono text-muted">
          <span className="h-8 w-px bg-accent" />
          Scroll to enter the reel
        </div>

        <TimelineStrip />
      </div>
    </section>
  );
}
