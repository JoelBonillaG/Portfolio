import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

export function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () =>
      filter === 'all'
        ? ordered
        : ordered.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      <div className="mt-10">
        <ProjectFilters active={filter} onChange={setFilter} />
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

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </Section>
  )
}
