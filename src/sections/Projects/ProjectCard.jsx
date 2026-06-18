import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Badge } from '@/components/ui'

const MAX_TAGS = 4

/** Compact project card. Click anywhere to open the detail modal. */
export function ProjectCard({ project, onOpen }) {
  const { t, lang } = useTranslation()
  const c = project.content[lang]
  const extra = project.stack.length - MAX_TAGS

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      onClick={() => onOpen(project)}
      className="group flex cursor-pointer flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="flex items-center justify-between gap-2">
        <Badge variant="accent">{t(`projects.filters.${project.category}`)}</Badge>
        {project.featured && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-soft">
            <Sparkles size={13} />
            {t('projects.featured')}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
          {c.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{c.tagline}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.stack.slice(0, MAX_TAGS).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {extra > 0 && <Badge>+{extra}</Badge>}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="font-mono text-xs text-muted">{project.period[lang]}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          {t('projects.viewMore')}
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </motion.article>
  )
}
