export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  highlight = '',
  className = '',
}) {
  return (
    <div
      className={`mb-12 md:mb-16 reveal-up ${
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'
      } ${className}`}
    >
      {kicker && <p className="mb-4 text-sm font-semibold text-accent">{kicker}</p>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-ink text-balance">
        {title}
        {highlight ? <span className="text-accent"> {highlight}</span> : null}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
