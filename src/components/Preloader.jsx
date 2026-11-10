import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1600; // 1.6s smooth duration

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
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 200);
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
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[99999] bg-[#090909] text-[#F5F5F0] flex flex-col justify-between p-8 md:p-14 select-none"
        >
          {/* Top Status */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#969696] font-mono">
            <span>SQ // PORTFOLIO 2026</span>
            <span className="text-[#D8FF3E]">INITIALIZING SYSTEM</span>
          </div>

          {/* Center Brand Masked Reveal */}
          <div className="my-auto overflow-hidden">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter font-heading text-white">
                SHAZAL QAISER
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D8FF3E] font-mono">
                CREATING DIGITAL IMPACT
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Counter and Bar */}
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <span className="text-xs tracking-widest uppercase text-[#969696] font-mono">
                VIDEO EDITING × SEARCH ENGINE OPTIMIZATION
              </span>
              <span className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white tabular-nums">
                {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
              </span>
            </div>

            {/* Progress track */}
            <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-[#D8FF3E]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
