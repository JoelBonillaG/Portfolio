import { getTechIcon } from '@/lib/techIcons.js'

/** Logo + name, used in the hero row. `delay` staggers the load sequence. */
export function TechLogo({ name, delay = 0 }) {
  const icon = getTechIcon(name)
  return (
    <li className="logo-cell flex w-[76px] flex-col items-center gap-2" style={{ animationDelay: `${delay}ms` }}>
      {icon && <img src={icon} alt="" width={40} height={40} className="h-10 w-10 object-contain" />}
      <span className="text-center text-[13px] leading-tight text-muted">{name}</span>
    </li>
  )
}
