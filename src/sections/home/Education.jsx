import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { certifications, education, languages, paperUnderReview, publication } from '@/data/certifications.js'
import { events } from '@/data/events.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { TextLink } from '@/components/ui'
import { cn } from '@/lib/utils.js'
import { SectionHeader } from './SectionHeader.jsx'

/** Degree, the paper and languages on the left; certificates and events as compact lists behind tabs. */
export function Education() {
  const { t, lang } = useTranslation()
  const [tab, setTab] = useState('certs')

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
            <a
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
              aria-label={publication.title}
            >
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
          <div
            role="tablist"
            aria-label={t('education.display')}
            className="flex w-fit gap-1 rounded-full border border-line p-1"
          >
            {['certs', 'events'].map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={cn(
                  'min-h-10 cursor-pointer rounded-full px-4 text-[15px] font-bold transition-colors duration-300',
                  tab === key ? 'bg-blue text-on-blue' : 'text-muted hover:text-ink',
                )}
              >
                {key === 'certs' ? t('education.certifications') : t('education.events')}
              </button>
            ))}
          </div>

          <ul key={tab} role="tabpanel" className="page-in m-0 mt-5 flex list-none flex-col p-0">
            {tab === 'certs'
              ? certifications.map((c) => (
                  <li key={c.id} className="flex items-center gap-4 border-b border-line py-4 last:border-b-0">
                    <img
                      src={c.logo}
                      alt=""
                      width={44}
                      height={44}
                      loading="lazy"
                      className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="m-0 font-bold leading-snug">{c.name[lang]}</p>
                      <p className="m-0 text-sm text-muted">
                        {c.issuer} · {c.year}
                      </p>
                      {c.links && (
                        <p className="m-0 mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-sm">
                          {c.links.map((l) => (
                            <a
                              key={l.url}
                              href={l.url}
                              target="_blank"
                              rel="noreferrer"
                              className="font-bold text-blue hover:underline"
                            >
                              {l.label[lang]}
                            </a>
                          ))}
                        </p>
                      )}
                    </div>
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t('education.view')}: ${c.name[lang]}`}
                        className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-yellow hover:text-yellow"
                      >
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))
              : events.flatMap((g) =>
                  g.items.map((e) => (
                    <li key={e.id} className="flex gap-4 border-b border-line py-4 last:border-b-0">
                      <img
                        src={e.logo}
                        alt=""
                        width={44}
                        height={44}
                        loading="lazy"
                        className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-x-4">
                          <p className="m-0 min-w-0 font-bold leading-snug">{e.title[lang]}</p>
                          <span className="shrink-0 text-sm whitespace-nowrap text-muted">
                            {e.type[lang]} · {g.year}
                          </span>
                        </div>
                        <p className="m-0 text-sm text-muted">{e.org}</p>
                        <p className="m-0 mt-1 text-[15px]">{e.detail[lang]}</p>
                      </div>
                    </li>
                  )),
                )}
          </ul>
        </div>
      </div>
    </section>
  )
}
