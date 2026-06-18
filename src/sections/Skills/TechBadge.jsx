import { getTechIcon } from '@/lib/techIcons.js'

/**
 * Technology chip with its brand logo (when available) and name.
 * Concepts without a logo render as a clean text-only chip.
 */
export function TechBadge({ name }) {
  const icon = getTechIcon(name)
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-elevated/50 px-2.5 py-1.5 text-xs font-medium text-fg">
      {icon && (
        <img
          src={icon}
          alt=""
          width={16}
          height={16}
          loading="lazy"
          className="h-4 w-4 shrink-0 object-contain"
        />
      )}
      {name}
    </span>
  )
}
