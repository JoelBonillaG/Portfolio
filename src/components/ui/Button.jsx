import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils.js'

const VARIANTS = {
  primary: 'bg-blue text-on-blue hover:bg-blue-strong',
  ghost: 'border-[1.5px] border-line text-ink hover:border-blue',
}

/**
 * Button-styled link or button. `to` → router Link, `href` → <a>
 * (external links open in a new tab), neither → <button>.
 */
export function Button({ to, href, variant = 'primary', className, children, ...props }) {
  const classes = cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 font-bold transition-colors cursor-pointer',
    VARIANTS[variant],
    className,
  )
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    const isPdf = href.endsWith('.pdf')
    return (
      <a
        href={href}
        className={classes}
        {...(external || isPdf ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

/** Underlined inline text link (external → new tab). */
export function TextLink({ to, href, className, children, ...props }) {
  const classes = cn(
    'font-bold text-blue underline decoration-[1.5px] underline-offset-[3px] hover:text-blue-strong',
    className,
  )
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  const external = href?.startsWith('http')
  return (
    <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...props}>
      {children}
    </a>
  )
}
