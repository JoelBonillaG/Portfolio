import { useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation.js'
import { FOCUS_ORDER, featuredProjects, visibleProjects } from '@/lib/projectsView.js'
import { cn } from '@/lib/utils.js'
import { ProjectCard } from './ProjectCard.jsx'
import { SectionHeader } from './SectionHeader.jsx'

const TABS = ['featured', 'all', ...FOCUS_ORDER]
const PAGE = 8

const canMorph = () =>
  typeof document !== 'undefined' &&
  'startViewTransition' in document &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Projects with in-place tabs, all cards the same size. Switching tabs
 * morphs the cards into place (View Transitions) and a gold pill slides to
 * the active filter.
 */
export function FeaturedProjects() {
  const { t, lang } = useTranslation()
  const [tab, setTab] = useState('featured')
  const [expanded, setExpanded] = useState(false)
  const tabsRef = useRef(null)
  const [pill, setPill] = useState(null)

  const list =
    tab === 'featured'
      ? featuredProjects
      : tab === 'all'
        ? visibleProjects
        : visibleProjects.filter((p) => p.focus === tab)
  const visible = expanded ? list : list.slice(0, PAGE)

  const label = (key) => (key === 'featured' ? t('projects.featuredTab') : t(`projects.focus.${key}`))
  const count = (key) =>
    key === 'featured'
      ? featuredProjects.length
      : key === 'all'
        ? visibleProjects.length
        : visibleProjects.filter((p) => p.focus === key).length

  useLayoutEffect(() => {
    const measure = () => {
      const el = tabsRef.current?.querySelector('[aria-pressed="true"]')
      if (!el) return
      const next = { left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight }
      setPill((prev) =>
        prev && prev.left === next.left && prev.top === next.top && prev.width === next.width && prev.height === next.height
          ? prev
          : next,
      )
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [tab, lang])

  const change = (key) => {
    const update = () => {
      setTab(key)
      setExpanded(false)
    }
    if (canMorph()) document.startViewTransition(() => flushSync(update))
    else update()
  }

  return (
    <section id="proyectos" className="border-t border-line py-16">
      <SectionHeader title={t('projects.display')} object="/objects/projects.webp" />

      <div ref={tabsRef} role="group" aria-label={t('projects.filterLabel')} className="relative mt-8 flex flex-wrap gap-2">
        {pill && (
          <span
            aria-hidden="true"
            className="tab-pill absolute rounded-full bg-blue"
            style={{ left: pill.left, top: pill.top, width: pill.width, height: pill.height }}
          />
        )}
        {TABS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={tab === key}
            onClick={() => change(key)}
            className={cn(
              'relative min-h-11 cursor-pointer rounded-full border px-4 text-[15px] font-bold transition-colors duration-300',
              tab === key ? 'border-transparent text-on-blue' : 'border-line text-ink hover:border-blue',
              !pill && tab === key && 'bg-blue',
            )}
          >
            {label(key)}
            <span className="ml-1.5 font-normal opacity-70">{count(key)}</span>
          </button>
        ))}
      </div>

      <div className={cn('mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4', !canMorph() && 'page-in')} key={canMorph() ? undefined : tab}>
        {visible.map((p, i) => (
          <div key={p.id} className="flex" style={{ viewTransitionName: `card-${p.id}` }}>
            <ProjectCard project={p} delay={(i % 4) * 120} />
          </div>
        ))}
      </div>

      {list.length > PAGE && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-line px-5 font-bold hover:border-blue"
          >
            {expanded ? t('projects.showLess') : t('projects.showMore')}
            <ChevronDown size={18} aria-hidden="true" className={cn('transition-transform', expanded && 'rotate-180')} />
          </button>
        </div>
      )}
    </section>
  )
}
