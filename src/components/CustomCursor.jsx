import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const SPRING = { type: 'spring', damping: 26, stiffness: 400, mass: 0.12 };

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorVariant(target.getAttribute('data-cursor'));
        setCursorText(target.getAttribute('data-cursor-text') || '');
      } else if (e.target.closest('button, a, input, textarea, select')) {
        setCursorVariant('interactive');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  // The small states use `difference` so the dot reads on dark and light
  // sections alike; the labelled states are a solid clip colour.
  const isLabel = cursorVariant === 'play' || cursorVariant === 'view';
  const size = isLabel ? 76 : cursorVariant === 'interactive' ? 44 : 10;

  return (
    <motion.div
      aria-hidden="true"
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        width: size,
        height: size,
        backgroundColor: isLabel
          ? '#ff5c39'
          : cursorVariant === 'interactive'
            ? 'rgba(255, 255, 255, 0.16)'
            : '#ffffff',
      }}
      transition={SPRING}
      style={{ mixBlendMode: isLabel ? 'normal' : 'difference' }}
      className={`fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center rounded-full pointer-events-none select-none font-sans font-bold text-[10px] tracking-wider ${
        isLabel ? 'text-paper' : 'text-graphite'
      } ${cursorVariant === 'interactive' ? 'border border-white' : ''}`}
    >
      {isLabel && (cursorText || (cursorVariant === 'play' ? 'PLAY' : 'VIEW'))}
    </motion.div>
  );
}
