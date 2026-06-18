/**
 * Decorative hero backdrop: a faint dotted grid that fades out toward the
 * edges, plus a warm amber glow. Purely presentational, hidden from a11y.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Dotted grid with radial fade mask */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, var(--color-muted) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 75%)',
        }}
      />
      {/* Amber glow */}
      <div
        className="absolute left-1/2 top-[-10%] h-[420px] w-[680px] max-w-[90vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--color-accent) 28%, transparent), transparent 70%)',
        }}
      />
    </div>
  )
}
