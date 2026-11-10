import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const current = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(current);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => onComplete?.(), 650);
        }, 180);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-canvas text-ink flex flex-col justify-between p-8 md:p-14 select-none"
        >
          <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-muted font-mono">
            <span>SQ · Portfolio 2026</span>
            <span className="text-accent">Loading craft</span>
          </div>

          <div className="my-auto overflow-hidden">
            <motion.div
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter font-display text-ink">
                Shazal
                <span className="text-accent">.</span>
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.28em] uppercase text-muted font-mono">
                Frames that hold · Search that compounds
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            <div className="flex items-end justify-between gap-6">
              <span className="text-[11px] tracking-[0.18em] uppercase text-muted font-mono">
                Video Editing × SEO Strategy
              </span>
              <span className="text-4xl sm:text-5xl font-mono font-semibold tracking-tight text-ink tabular-nums">
                {String(progress).padStart(3, '0')}
              </span>
            </div>
            <div className="w-full h-px bg-line overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
