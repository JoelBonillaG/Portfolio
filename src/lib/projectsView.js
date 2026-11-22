import { cardsShort } from '@/data/cardsShort.js'
import { projects } from '@/data/projects.js'

/** Projects shown on the site: featured first (by order), then authored order. */
export const visibleProjects = projects
  .filter((p) => !p.hidden)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))

/** The 4 featured cards on the home page. */
export const featuredProjects = visibleProjects
  .filter((p) => p.order)
  .sort((a, b) => a.order - b.order)

/** Short display title, the same on cards, case pages and prev/next links. */
export function projectTitle(project, lang) {
  return cardsShort[project.id]?.[lang]?.title ?? project.card?.[lang]?.title ?? project.content[lang].title
}

export const FOCUS_ORDER = ['fullstack', 'backend', 'data-ai', 'mobile']

export function getProject(id) {
  return visibleProjects.find((p) => p.id === id) ?? null
}

/** Neighbours for prev/next navigation on the detail page. */
export function getNeighbours(id) {
  const i = visibleProjects.findIndex((p) => p.id === id)
  if (i < 0) return { prev: null, next: null }
  const n = visibleProjects.length
  return {
    prev: visibleProjects[(i - 1 + n) % n],
    next: visibleProjects[(i + 1) % n],
  }
}

/** "Individual" / "Con N compañeros" / "En equipo" credit line. */
export function teamLabel(project, t) {
  if (project.team === 1) return t('projects.solo')
  if (!project.team) return t('projects.team')
  if (project.team === 2) return t('projects.teamWith1')
  return t('projects.teamWithN').replace('{n}', project.team - 1)
}

/** Badge key for the card: published paper or paper under review. */
export function badgeLabel(project, t) {
  if (project.badge === 'paper') return t('projects.badgePaper')
  if (project.badge === 'review') return t('projects.badgeReview')
  return null
}
