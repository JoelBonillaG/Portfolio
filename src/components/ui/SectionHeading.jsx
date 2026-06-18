import { cn } from '@/lib/utils.js'
import { Reveal } from './Reveal.jsx'

/**
 * Eyebrow + title + subtitle heading block used at the top of each section.
 */
export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }) {
  const centered = align === 'center'
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        centered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className={cn('max-w-2xl text-base text-muted', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
