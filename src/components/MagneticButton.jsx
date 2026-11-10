import { useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function MagneticButton({
  children,
  onClick,
  className = '',
  href,
  variant = 'primary',
  strength = 0.35,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-heading font-medium tracking-tight transition-all duration-200 select-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-[#D8FF3E] text-[#090909] hover:bg-white px-6 py-3.5 text-sm uppercase tracking-wider font-semibold border border-[#D8FF3E] hover:border-white shadow-[0_0_24px_rgba(216,255,62,0.18)]',
    secondary: 'bg-transparent text-[#F5F5F0] hover:text-[#090909] hover:bg-white border border-white/20 hover:border-white px-6 py-3.5 text-sm uppercase tracking-wider',
    outlineLime: 'bg-transparent text-[#D8FF3E] hover:bg-[#D8FF3E] hover:text-[#090909] border border-[#D8FF3E]/40 hover:border-[#D8FF3E] px-5 py-2.5 text-xs uppercase tracking-widest font-mono',
    minimal: 'text-[#F5F5F0] hover:text-[#D8FF3E] p-2 text-sm'
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 180, mass: 0.1 }}
      className={`${baseStyles} ${variantStyles[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
