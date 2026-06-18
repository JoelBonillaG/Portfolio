import { useTranslation } from '@/i18n/useTranslation.js'
import { cn } from '@/lib/utils.js'

/** ES/EN switch. Shows the language you'll switch *to*. */
export function LanguageToggle({ className }) {
  const { lang, toggleLang, t } = useTranslation()
  const next = lang === 'es' ? 'en' : 'es'

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={next === 'en' ? t('a11y.toEnglish') : t('a11y.toSpanish')}
      title={next === 'en' ? t('a11y.toEnglish') : t('a11y.toSpanish')}
      className={cn(
        'grid h-10 min-w-10 place-items-center rounded-full px-3',
        'border border-border font-mono text-xs font-semibold uppercase',
        'text-fg transition-colors hover:text-accent',
        'focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none',
        className,
      )}
    >
      {lang}
    </button>
  )
}
