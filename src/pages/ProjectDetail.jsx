import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Users } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation.js'
import { badgeLabel, getNeighbours, getProject, projectTitle, teamLabel } from '@/lib/projectsView.js'
import { CountUp, Button, TextLink } from '@/components/ui'
import { ProjectGallery } from './ProjectGallery.jsx'

/** Dedicated, shareable page for one project. */
export function ProjectDetail() {
  const { id } = useParams()
  const { t, lang } = useTranslation()
  const project = getProject(id)

  useEffect(() => {
    if (project) document.title = `${projectTitle(project, lang)} · Joel Bonilla`
  }, [project, lang])

  if (!project) {
    return (
      <main id="contenido" className="page-in mx-auto max-w-[1180px] px-6 py-24">
        <h1 className="m-0 text-4xl font-semibold">{t('projects.notFound')}</h1>
        <TextLink to="/#proyectos" viewTransition className="mt-6 inline-block">
          {t('projects.back')}
        </TextLink>
      </main>
    )
  }

  const c = project.content[lang]
  const card = project.card?.[lang]
  const badge = badgeLabel(project, t)
  const { prev, next } = getNeighbours(project.id)

  return (
    <main id="contenido" className="page-in mx-auto max-w-[1180px] px-6 pt-12 pb-20">
      <Link to="/#proyectos" className="inline-flex items-center gap-2 text-muted hover:text-ink">
        <ArrowLeft size={18} aria-hidden="true" />
        {t('projects.back')}
      </Link>

      <header className="mt-6 max-w-[860px]">
        <h1 className="m-0 text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] font-semibold">{projectTitle(project, lang)}</h1>
        <p className="mt-3 text-xl text-muted">{c.tagline}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] text-muted">
          <span className="rounded-md border border-line px-2 py-px">{t(`projects.focus.${project.focus}`)}</span>
          <span>{project.period[lang]}</span>
          <span className="inline-flex items-center gap-1.5">
            <Users size={16} aria-hidden="true" />
            {teamLabel(project, t)}
          </span>
          {badge && <span className="rounded-md bg-yellow px-2 py-px font-bold text-on-yellow">{badge}</span>}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.paper && <Button href={project.links.paper}>{t('projects.paper')}</Button>}
          {project.links.repos
            ? project.links.repos.map((r, i) => (
                <Button key={r.url} href={r.url} variant={i === 0 && !project.links.paper ? 'primary' : 'ghost'}>
                  {t('projects.code')} · {r.label[lang]}
                </Button>
              ))
            : project.links.repo && (
                <Button href={project.links.repo} variant={project.links.paper ? 'ghost' : 'primary'}>
                  {t('projects.code')}
                </Button>
              )}
          {project.links.demo && (
            <Button href={project.links.demo} variant="ghost">
              {t('projects.demo')}
            </Button>
          )}
        </div>
      </header>

      <div className="mt-10">
        <ProjectGallery images={project.images} title={projectTitle(project, lang)} transitionName={`shot-${project.id}`} />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          {card && (
            <section className="rounded-[20px] border border-line bg-surface p-6">
              <h2 className="m-0 text-2xl font-bold">{t('projects.inShort')}</h2>
              <dl className="m-0 mt-4 grid grid-cols-[100px_1fr] gap-x-4 gap-y-2.5">
                <dt className="text-muted">{t('projects.problem')}</dt>
                <dd className="m-0">{card.problem}</dd>
                <dt className="text-muted">{t('projects.solution')}</dt>
                <dd className="m-0">{card.solution}</dd>
                <dt className="font-bold">{t('projects.part')}</dt>
                <dd className="m-0 font-bold">{card.part}</dd>
              </dl>
              <p className="m-0 mt-4 rounded-r-[10px] border-l-4 border-yellow bg-chip px-3.5 py-2.5 font-bold">
                {card.result}
              </p>
            </section>
          )}

          <section className="mt-10">
            <h2 className="m-0 text-2xl font-bold">{t('projects.context')}</h2>
            <p className="mt-3 max-w-[70ch]">{c.overview}</p>
          </section>

          <section className="mt-10">
            <h2 className="m-0 text-2xl font-bold">{t('projects.whatIDid')}</h2>
            <p className="mt-3 max-w-[70ch] font-bold">{c.role}</p>
            <ul className="mt-3 flex max-w-[70ch] flex-col gap-2 pl-5">
              {c.features.map((f) => (
                <li key={f} className="list-disc marker:text-yellow">
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {project.metrics.length > 0 && (
            <section className="mt-10">
              <h2 className="m-0 text-2xl font-bold">{t('projects.results')}</h2>
              <dl className="m-0 mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.metrics.map((m) => (
                  <div key={m.label.en} className="flex flex-col-reverse rounded-2xl border border-line bg-surface p-4">
                    <dt className="text-sm leading-snug text-muted">{m.label[lang]}</dt>
                    <dd className="m-0 font-display text-3xl font-semibold">
                      <CountUp value={m.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="m-0 text-lg font-bold">{t('projects.stack')}</h2>
          <p className="mt-2 text-muted">{project.stack.join(', ')}</p>
          <div className="mt-8 rounded-[20px] border border-line bg-surface p-5">
            <p className="m-0">{t('projects.contactCta')}</p>
            <Button to="/#contacto" className="mt-4 w-full">
              {t('nav.contact')}
            </Button>
          </div>
        </aside>
      </div>

      <nav className="mt-16 flex flex-wrap justify-between gap-4 border-t border-line pt-6">
        <Link viewTransition to={`/proyectos/${prev.id}`} className="group inline-flex max-w-[45%] items-center gap-2">
          <ArrowLeft size={18} aria-hidden="true" />
          <span>
            <span className="block text-sm text-muted">{t('projects.prev')}</span>
            <span className="font-bold group-hover:text-blue">{projectTitle(prev, lang)}</span>
          </span>
        </Link>
        <Link viewTransition to={`/proyectos/${next.id}`} className="group inline-flex max-w-[45%] items-center gap-2 text-right">
          <span>
            <span className="block text-sm text-muted">{t('projects.next')}</span>
            <span className="font-bold group-hover:text-blue">{projectTitle(next, lang)}</span>
          </span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </nav>
    </main>
  )
}
