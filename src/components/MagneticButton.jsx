import { useRef, useState } from 'react';
import { motion } from 'motion/react';

const VARIANTS = {
  primary: 'bg-accent text-canvas hover:bg-accent-soft px-7 py-3.5 text-sm',
  secondary:
    'bg-transparent text-ink hover:bg-ink hover:text-canvas border border-line-strong px-7 py-3.5 text-sm',
  compact: 'bg-accent text-canvas hover:bg-accent-soft px-5 py-2.5 text-sm',
  minimal: 'text-ink hover:text-accent p-2 text-sm',
};

export default function MagneticButton({
  children,
  onClick,
  className = '',
  href,
  variant = 'primary',
  strength = 0.32,
  type,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    setPosition({
      x: (e.clientX - (left + width / 2)) * strength,
      y: (e.clientY - (top + height / 2)) * strength,
    });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={buttonRef}
      href={href}
      type={href ? undefined : type || 'button'}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 16, stiffness: 190, mass: 0.12 }}
      className={`relative inline-flex items-center justify-center rounded-full font-sans font-semibold transition-colors duration-300 select-none cursor-pointer ${
        VARIANTS[variant] || ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
