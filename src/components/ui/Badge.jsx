import { cn } from '@/lib/utils.js'

/**
 * Small pill used for technology tags and metadata.
 * variant: 'default' (surface) | 'accent' (amber-tinted)
 */
export function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        variant === 'default' &&
          'border border-border bg-elevated/60 text-muted',
        variant === 'accent' &&
          'border border-accent/30 bg-accent/10 text-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}
