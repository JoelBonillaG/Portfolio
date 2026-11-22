import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/theme/useTheme.js'
import { useTranslation } from '@/i18n/useTranslation.js'

const base =
  'grid h-11 min-w-11 place-items-center rounded-xl border-[1.5px] border-line px-3 text-sm font-bold text-ink transition-colors hover:border-blue'

/** Light/dark switch. */
export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const label = isDark ? t('a11y.toLight') : t('a11y.toDark')
  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label} className={base}>
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}

/** ES/EN switch. Shows the current language; the name includes it. */
export function LanguageToggle() {
  const { lang, toggleLang, t } = useTranslation()
  const label = `${lang.toUpperCase()}, ${lang === 'es' ? t('a11y.toEnglish') : t('a11y.toSpanish')}`
  return (
    <button type="button" onClick={toggleLang} aria-label={label} title={label} className={`${base} gap-1`}>
      <span className="flex items-center gap-1.5">
        <span className={lang === 'es' ? 'text-yellow' : 'font-normal text-muted'}>ES</span>
        <span aria-hidden="true" className="h-3.5 w-px bg-line" />
        <span className={lang === 'en' ? 'text-yellow' : 'font-normal text-muted'}>EN</span>
      </span>
    </button>
  )
}
