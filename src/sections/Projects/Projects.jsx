import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { projects } from '@/data/projects.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Section, SectionHeading } from '@/components/ui'
import { ProjectFilters } from './ProjectFilters.jsx'
import { ProjectCard } from './ProjectCard.jsx'
import { ProjectModal } from './ProjectModal.jsx'

// Featured projects first, preserving authored order otherwise.
const ordered = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
)
const featuredCount = ordered.filter((p) => p.featured).length

export function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () =>
      filter === 'all' ? ordered : ordered.filter((p) => p.category === filter),
    [filter],
  )

  // Collapse only applies to the unfiltered view: show featured, reveal the rest.
  const collapsible = filter === 'all' && filtered.length > featuredCount
  const visible =
    collapsible && !expanded ? filtered.filter((p) => p.featured) : filtered

  const onFilterChange = (next) => {
    setFilter(next)
    setExpanded(false)
  }

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      <div className="mt-10">
        <ProjectFilters active={filter} onChange={onFilterChange} />
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted">{t('projects.empty')}</p>
      )}

      {collapsible && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            {expanded ? t('projects.showLess') : t('projects.showMore')}
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </Section>
  )
}
