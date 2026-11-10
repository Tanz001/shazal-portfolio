export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  highlight = '',
  className = ''
}) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      {kicker && (
        <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.2em] text-[#D8FF3E]">
          <span>{kicker}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.08] text-balance">
        {title}
        {highlight && (
          <span className="text-[#D8FF3E] block sm:inline sm:ml-3">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#969696] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
