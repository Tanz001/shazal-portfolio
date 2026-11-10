import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Page-wide scroll reveals (.reveal-up / .reveal-fade / .reveal-scale) and
 * the top progress bar.
 *
 * Call from App: parent effects run after child effects, so these triggers
 * are created after the sections' own (including the pinned project deck)
 * and measure their positions with the pin spacing already in place.
 */
export function useScrollReveal() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const reveal = (selector, to, start) => {
        gsap.utils.toArray(selector).forEach((el) => {
          gsap.to(el, {
            ...to,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none reverse',
            },
          });
        });
      };

      reveal('.reveal-up', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, 'top 88%');
      reveal('.reveal-fade', { opacity: 1, duration: 0.9, ease: 'power2.out' }, 'top 90%');
      reveal('.reveal-scale', { opacity: 1, scale: 1, duration: 1.1, ease: 'expo.out' }, 'top 86%');

      const progress = document.querySelector('.scroll-progress');
      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        });
      }
    });

    // Layout shifts once web fonts and images land; re-measure in page order.
    const refresh = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener('load', refresh);
      mm.revert();
    };
  }, []);
}
