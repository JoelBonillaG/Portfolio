import { cn } from '@/lib/utils.js'

/**
 * Page section with a consistent max-width container and vertical rhythm.
 * `band` paints the subtle alternating background.
 */
export function Section({ id, band = false, className, containerClassName, children }) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 py-20 sm:py-28',
        band && 'bg-bg-soft',
        className,
      )}
    >
      <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  )
}
