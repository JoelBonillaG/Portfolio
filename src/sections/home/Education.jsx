import { ExternalLink } from 'lucide-react'
import {
  certifications,
  education,
  languages,
  paperUnderReview,
  publication,
} from '@/data/certifications.js'
import { events } from '@/data/events.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { TextLink } from '@/components/ui'
import { SectionHeader } from './SectionHeader.jsx'

/** Degree with the university seal, the paper, and certificates as brand-tinted cards. */
export function Education() {
  const { t, lang } = useTranslation()

  return (
    <section id="formacion" className="border-t border-line py-16">
      <SectionHeader title={t('education.display')} object="/objects/education.webp" />

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-5">
          <article
            data-reveal
            className="sweep flex items-center gap-5 overflow-hidden rounded-[20px] border border-line bg-surface p-5"
          >
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-line bg-white p-1.5 shadow-[0_6px_16px_rgba(20,32,51,.10)]">
              <img src={education.logo} alt="" width={68} height={68} className="h-full w-full object-contain" />
            </span>
            <div>
              <h3 className="m-0 text-[22px] font-bold">{education.degree[lang]}</h3>
              <p className="m-0 mt-0.5 text-muted">{education.institution}</p>
              <p className="m-0 mt-1.5 inline-block rounded-full bg-chip px-3 py-0.5 text-sm font-bold">
                {education.period[lang]}
              </p>
            </div>
          </article>

          <article
            data-reveal
            style={{ '--d': '120ms' }}
            className="sweep flex items-start gap-5 overflow-hidden rounded-[20px] border border-line bg-surface p-5"
          >
            <a href={publication.url} target="_blank" rel="noreferrer" className="shrink-0" aria-label={publication.title}>
              <img
                src={publication.cover}
                alt=""
                width={96}
                height={136}
                className="block h-34 w-24 -rotate-2 rounded-md border border-line object-cover object-top shadow-[0_6px_16px_rgba(20,32,51,.14)] transition-transform hover:rotate-0"
              />
            </a>
            <div className="min-w-0">
              <p className="m-0 mb-1 text-sm font-bold text-blue">{t('education.publication')}</p>
              <TextLink href={publication.url} className="font-semibold">
                {publication.title}
              </TextLink>
              <p className="m-0 mt-1.5 text-[15px] text-muted">
                {publication.venue}. {t('education.coauthor')}.
              </p>
              <p className="m-0 mt-3 text-[15px]">
                <strong>{t('education.underReview')}:</strong> {paperUnderReview[lang]}
              </p>
            </div>
          </article>

          <p className="m-0">
            <strong>{t('education.languages')}:</strong> {languages[lang]}
          </p>
        </div>

        <div>
          <h3 className="m-0 mb-3 text-[22px] font-bold">{t('education.certifications')}</h3>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {certifications.map((c, i) => {
              const body = (
                <>
                  <span
                    className="grid h-24 place-items-center"
                    style={{ background: 'color-mix(in oklab, var(--yellow) 9%, var(--surface))' }}
                  >
                    <img src={c.logo} alt="" className="logo-tone h-16 max-w-[70%] object-contain" />
                  </span>
                  <span className="flex flex-1 flex-col gap-1 p-4">
                    <span className="font-bold leading-snug">{c.name[lang]}</span>
                    <span className="text-sm text-muted">
                      {c.issuer}, {c.year}
                    </span>
                    {c.links && (
                      <span className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-2 text-sm">
                        {c.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-blue underline-offset-[3px] hover:underline"
                          >
                            {l.label[lang]}
                            <ExternalLink size={12} aria-hidden="true" />
                          </a>
                        ))}
                      </span>
                    )}
                    {c.url && (
                      <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-bold text-blue">
                        {t('education.view')}
                        <ExternalLink size={14} aria-hidden="true" />
                      </span>
                    )}
                  </span>
                </>
              )
              const cls =
                'sweep hobby flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-blue'
              return (
                <li key={c.id} data-reveal style={{ '--d': `${i * 110}ms` }} className="h-full">
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className={cls}>
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <h3 className="m-0 mt-14 text-[22px] font-bold">{t('education.events')}</h3>
      <ol className="m-0 mt-4 list-none p-0">
        {events.map((group) => (
          <li key={group.year} className="grid gap-x-8 border-t border-line py-6 sm:grid-cols-[80px_1fr]">
            <p className="m-0 mb-3 font-display text-xl font-semibold text-yellow sm:mb-0">{group.year}</p>
            <ul className="m-0 flex list-none flex-col gap-6 p-0">
              {group.items.map((e, i) => (
                <li key={e.id} data-reveal style={{ '--d': `${i * 90}ms` }} className="reveal-row flex gap-4">
                  <img
                    src={e.logo}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="size-12 shrink-0 rounded-xl border border-line bg-white object-contain p-1"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="m-0 font-bold leading-snug">{e.title[lang]}</p>
                      <span className="text-sm text-muted">{e.type[lang]}</span>
                    </div>
                    <p className="m-0 text-sm text-muted">{e.org}</p>
                    <p className="m-0 mt-1 text-[15px]">{e.detail[lang]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
