import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/data/nav.js'
import { profile } from '@/data/profile.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { useActiveSection } from '@/hooks/useActiveSection.js'
import { useScrolled } from '@/hooks/useScrolled.js'
import { cn } from '@/lib/utils.js'
import { LanguageToggle, ThemeToggle } from '@/components/ui'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar() {
  const { t } = useTranslation()
  const scrolled = useScrolled(8)
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-bg/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <a
            href="#home"
            className="group flex items-center gap-2"
            aria-label={profile.shortName}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-on-accent">
              {profile.initials}
            </span>
            <span className="hidden font-display text-sm font-semibold sm:block">
              {profile.shortName}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                    active === item.id
                      ? 'text-accent'
                      : 'text-muted hover:text-fg',
                  )}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-fg transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-3 text-base font-medium transition-colors',
                      active === item.id
                        ? 'text-accent'
                        : 'text-muted hover:text-fg',
                    )}
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
