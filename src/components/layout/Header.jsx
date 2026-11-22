import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/data/nav.js'
import { profile } from '@/data/profile.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { useActiveSection } from '@/hooks/useActiveSection.js'
import { cn } from '@/lib/utils.js'
import { LanguageToggle, ThemeToggle } from '@/components/ui'

const IDS = ['inicio', ...NAV_ITEMS.map((i) => i.id)]
const NO_IDS = []

/** Sticky header. On the home page links scroll to sections; elsewhere they go home first. */
export function Header() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const active = useActiveSection(onHome ? IDS : NO_IDS)
  const [open, setOpen] = useState(false)
  const href = (id) => (onHome ? `#${id}` : `/#${id}`)

  const NavLink = onHome ? 'a' : Link
  const links = NAV_ITEMS.map((item) => (
    <NavLink
      key={item.id}
      {...(onHome ? { href: href(item.id) } : { to: href(item.id) })}
      onClick={() => setOpen(false)}
      aria-current={onHome && active === item.id ? 'true' : undefined}
      className={cn(
        'border-b-2 py-2 transition-colors',
        onHome && active === item.id
          ? 'border-yellow text-ink'
          : 'border-transparent text-muted hover:border-yellow hover:text-ink',
      )}
    >
      {t(item.key)}
    </NavLink>
  ))

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-blue focus:px-4 focus:py-2 focus:text-on-blue"
      >
        {t('a11y.skip')}
      </a>
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-2.5">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          {profile.shortName}
        </Link>

        <nav aria-label={t('nav.sections')} className="hidden gap-6 text-[15px] lg:flex">
          {links}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            className="grid h-11 w-11 place-items-center rounded-xl border-[1.5px] border-line lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label={t('nav.sections')} className="flex flex-col gap-1 border-t border-line px-6 py-3 text-lg lg:hidden">
          {links}
        </nav>
      )}
    </header>
  )
}
