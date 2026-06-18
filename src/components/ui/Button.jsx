import { cn } from '@/lib/utils.js'

const VARIANTS = {
  primary:
    'bg-accent text-on-accent hover:bg-accent-strong shadow-sm shadow-accent/20',
  outline:
    'border border-border text-fg hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-fg hover:bg-elevated/60',
}

const SIZES = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
}

/**
 * Polymorphic button: renders an <a> when `href` is provided, otherwise a
 * <button>. Shares the same variants so links and actions look identical.
 */
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium',
    'transition-colors duration-200 outline-none cursor-pointer',
    'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    VARIANTS[variant],
    SIZES[size],
    className,
  )

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
