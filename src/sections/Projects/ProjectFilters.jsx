import { motion } from 'framer-motion'
import { projectCategories } from '@/data/projects.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { cn } from '@/lib/utils.js'

/** Category filter tabs with an animated active pill. */
export function ProjectFilters({ active, onChange }) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {projectCategories.map((cat) => {
        const isActive = active === cat
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={cn(
              'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
              isActive ? 'text-on-accent' : 'text-muted hover:text-fg',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {t(`projects.filters.${cat}`)}
          </button>
        )
      })}
    </div>
  )
}
