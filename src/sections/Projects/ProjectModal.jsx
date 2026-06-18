import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, ExternalLink, ImageIcon, Sparkles, X } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Badge, Button, GithubIcon } from '@/components/ui'

/** Detail modal for a single project. Rendered inside an AnimatePresence. */
export function ProjectModal({ project, onClose }) {
  const { t, lang } = useTranslation()
  const c = project.content[lang]

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={c.title}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-surface shadow-2xl sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t('projects.close')}
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-border bg-bg/80 text-muted backdrop-blur transition-colors hover:text-accent"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          {/* Header */}
          <header className="flex flex-col gap-3 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">
                {t(`projects.filters.${project.category}`)}
              </Badge>
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-soft">
                  <Sparkles size={13} />
                  {t('projects.featured')}
                </span>
              )}
              <span className="font-mono text-xs text-muted">
                · {project.period[lang]}
              </span>
            </div>
            <h2 className="font-display text-2xl font-semibold">{c.title}</h2>
            <p className="text-muted">{c.tagline}</p>
          </header>

          {/* Gallery */}
          <Gallery images={project.images} title={c.title} empty={t('projects.galleryEmpty')} />

          {/* Role */}
          <section className="flex flex-col gap-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {t('projects.role')}
            </h3>
            <p className="text-sm text-fg">{c.role}</p>
          </section>

          {/* Features */}
          <section className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {t('projects.features')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {c.features.map((feature, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-fg">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <section className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {t('projects.stack')}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>

          {/* Links */}
          {(project.links.repo || project.links.demo) && (
            <footer className="flex flex-wrap gap-3 border-t border-border pt-5">
              {project.links.repo && (
                <Button href={project.links.repo} variant="outline" size="sm">
                  <GithubIcon size={16} />
                  {t('projects.repo')}
                </Button>
              )}
              {project.links.demo && (
                <Button href={project.links.demo} size="sm">
                  <ExternalLink size={16} />
                  {t('projects.demo')}
                </Button>
              )}
            </footer>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/** Image gallery, or a graceful placeholder until screenshots are added. */
function Gallery({ images, title, empty }) {
  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-elevated/40 text-muted">
        <ImageIcon size={28} />
        <p className="text-sm">{empty}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} ${i + 1}`}
          loading="lazy"
          className={`w-full rounded-xl border border-border object-cover ${
            images.length === 1 ? 'col-span-2 aspect-video' : 'aspect-[4/3]'
          }`}
        />
      ))}
    </div>
  )
}
