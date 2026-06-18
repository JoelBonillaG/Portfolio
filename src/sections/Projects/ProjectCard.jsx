import { motion } from 'framer-motion'
import { ArrowUpRight, ImageIcon, Sparkles } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Badge } from '@/components/ui'

const MAX_TAGS = 4

/** Project card with cover image. Click anywhere to open the detail modal. */
export function ProjectCard({ project, onOpen }) {
  const { t, lang } = useTranslation()
  const c = project.content[lang]
  const extra = project.stack.length - MAX_TAGS
  const cover = project.images?.[0]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      onClick={() => onOpen(project)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/5"
    >
      {/* Cover */}
      <div className="relative aspect-video overflow-hidden bg-elevated">
        {cover ? (
          <img
            src={cover}
            alt={c.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-muted/50">
            <ImageIcon size={32} />
          </div>
        )}
        {/* gradient + badges over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant="accent" className="bg-bg/85 backdrop-blur">
            {t(`projects.filters.${project.category}`)}
          </Badge>
        </div>
        {project.featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-bg/85 px-2 py-1 text-xs font-medium text-accent-soft backdrop-blur">
            <Sparkles size={12} />
            {t('projects.featured')}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
            {c.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted">{c.tagline}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
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
      </div>
    </motion.article>
  )
}
