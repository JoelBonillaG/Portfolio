import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/theme/useTheme.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { cn } from '@/lib/utils.js'

/** Light/dark toggle with an animated icon swap. */
export function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('a11y.toLight') : t('a11y.toDark')}
      title={isDark ? t('a11y.toLight') : t('a11y.toDark')}
      className={cn(
        'relative grid h-10 w-10 place-items-center rounded-full',
        'border border-border text-fg transition-colors hover:text-accent',
        'focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
