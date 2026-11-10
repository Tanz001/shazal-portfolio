/**
 * Shared access to the Lenis instance so navigation uses the same smooth
 * scroll as the wheel. Falls back to native scrolling when Lenis is off
 * (reduced motion).
 */
let lenis = null;

export function setLenis(instance) {
  lenis = instance;
}

/** Scroll to a selector, an element, or 0 for the top of the page. */
export function scrollToTarget(target) {
  const toTop = target === 0;
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!toTop && !el) return;

  if (lenis) {
    lenis.scrollTo(toTop ? 0 : el, { duration: 1.4 });
    return;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduced ? 'auto' : 'smooth';
  if (toTop) window.scrollTo({ top: 0, behavior });
  else el.scrollIntoView({ behavior });
}
