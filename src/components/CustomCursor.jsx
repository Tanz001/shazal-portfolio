import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Delegate hover states based on data attributes
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorVariant(type);
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorText(text);
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
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#D8FF3E',
      borderRadius: '50%',
      opacity: 0.9,
      transition: { type: 'spring', damping: 28, stiffness: 450, mass: 0.1 }
    },
    interactive: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(216, 255, 62, 0.15)',
      border: '1px solid #D8FF3E',
      borderRadius: '50%',
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 350 }
    },
    play: {
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      width: 76,
      height: 76,
      backgroundColor: '#D8FF3E',
      borderRadius: '50%',
      opacity: 1,
      transition: { type: 'spring', damping: 22, stiffness: 300 }
    },
    view: {
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      width: 76,
      height: 76,
      backgroundColor: '#D8FF3E',
      borderRadius: '50%',
      opacity: 1,
      transition: { type: 'spring', damping: 22, stiffness: 300 }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      <motion.div
        animate={cursorVariant}
        variants={variants}
        className="fixed top-0 left-0 flex items-center justify-center font-heading font-bold text-[10px] tracking-wider text-[#090909] select-none"
      >
        {cursorVariant === 'play' && (cursorText || 'PLAY')}
        {cursorVariant === 'view' && (cursorText || 'VIEW')}
      </motion.div>
    </div>
  );
}
