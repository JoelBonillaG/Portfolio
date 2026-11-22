import { Link } from 'react-router-dom'
import { cardsShort } from '@/data/cardsShort.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { badgeLabel } from '@/lib/projectsView.js'
import { TextLink } from '@/components/ui'

/**
 * Featured card: what the project is, at a glance — image, title, one
 * sentence and its tech. The detail (problem, my part, result) lives on
 * the project page.
 */
export function ProjectCard({ project, delay = 0, large = false }) {
  const { t, lang } = useTranslation()
  const c = project.content[lang]
  const short = cardsShort[project.id]?.[lang]
  const title = short?.title ?? project.card?.[lang]?.title ?? c.title
  const summary = short?.text ?? c.tagline
  const badge = badgeLabel(project, t)
  const caseUrl = `/proyectos/${project.id}`
  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <article
      data-reveal
      style={{ '--d': `${delay}ms` }}
      onPointerMove={spot}
      className={`sweep project-card spotlight flex w-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-blue hover:shadow-[0_14px_30px_rgba(20,32,51,.12)] focus-within:border-blue`}
    >
      <Link
        to={caseUrl}
        viewTransition
        tabIndex={-1}
        aria-hidden="true"
        className={`relative block overflow-hidden bg-chip ${large ? 'aspect-[16/10] sm:aspect-auto sm:min-h-[300px] sm:flex-1' : 'aspect-[16/10]'}`}
      >
        {project.images[0] ? (
          <img
            src={project.images[0]}
            alt=""
            loading={large ? 'eager' : 'lazy'}
            style={{ viewTransitionName: `shot-${project.id}` }}
            className="shot h-full w-full object-cover object-top sm:absolute sm:inset-0"
          />
        ) : (
          <span className="shot grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,var(--chip),var(--surface))] font-display text-7xl text-yellow italic">
            {title.charAt(0)}
          </span>
        )}
        {badge && (
          <span className="absolute top-3 left-3 rounded-md bg-yellow px-2 py-0.5 text-xs font-bold text-on-yellow">
            {badge}
          </span>
        )}
      </Link>

      <div className={`flex flex-col gap-3 p-5 ${large ? "sm:p-7" : "flex-1"}`}>
        <p className="m-0 text-xs font-bold text-blue">{t(`projects.focus.${project.focus}`)}</p>
        <h3 className={`m-0 -mt-1 leading-snug font-bold ${large ? 'text-[clamp(1.5rem,2.4vw,2rem)]' : 'text-[21px]'}`}>
          <Link to={caseUrl} viewTransition className="hover:text-blue">
            {title}
          </Link>
        </h3>
        <p className="m-0 text-[15px] leading-relaxed text-muted">{summary}</p>

        <ul className="m-0 mt-auto flex list-none flex-wrap gap-1.5 p-0 pt-1">
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech} className="rounded-full bg-chip px-2.5 py-0.5 text-[13px] font-bold">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 border-t border-line pt-3 text-[15px]">
          <TextLink to={caseUrl} viewTransition>
            {t('projects.case')}
          </TextLink>
          {project.links.repo && <TextLink href={project.links.repo}>{t('projects.code')}</TextLink>}
          {project.links.paper && <TextLink href={project.links.paper}>{t('projects.paper')}</TextLink>}
          {project.links.demo && <TextLink href={project.links.demo}>{t('projects.demo')}</TextLink>}
        </div>
      </div>
    </article>
  )
}
