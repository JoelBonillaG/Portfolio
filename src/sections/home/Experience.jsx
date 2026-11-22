import { useEffect, useRef } from 'react'
import { experience } from '@/data/experience.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { SectionHeader } from './SectionHeader.jsx'

/**
 * Experience as a timeline: the line fills as you scroll through the
 * section and a yellow packet travels down it; each job's dot lights up
 * when it arrives (via the shared [data-reveal] observer).
 */
export function Experience() {
  const { t, lang } = useTranslation()
  const trackRef = useRef(null)
  const fillRef = useRef(null)
  const packetRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const el = trackRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / r.height))
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`
      if (packetRef.current) packetRef.current.style.top = `calc(${(p * 100).toFixed(2)}% - 6px)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="experiencia" className="border-t border-line py-16">
      <SectionHeader title={t('experience.display')} object="/objects/experience.webp" />

      <div ref={trackRef} className="relative mt-8 pl-[72px] sm:pl-[92px]">
        <div aria-hidden="true" className="absolute top-2 bottom-2 left-[27px] w-0.5 rounded bg-line" />
        <div
          ref={fillRef}
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[27px] w-0.5 origin-top scale-y-0 rounded bg-blue"
        />
        <div
          ref={packetRef}
          aria-hidden="true"
          className="absolute left-[22px] z-10 h-3 w-3 rotate-45 rounded-[3px] bg-yellow shadow-[0_0_0_4px_var(--ring)]"
          style={{ top: '-6px' }}
        />

        <ol className="m-0 flex list-none flex-col gap-5 p-0">
          {experience.map((job, i) => {
            const c = job.content[lang]
            return (
              <li key={job.id} data-reveal style={{ '--d': `${i * 150}ms` }} className="timeline-item relative">
                <span
                  aria-hidden="true"
                  className="tl-dot absolute top-5 -left-[72px] z-20 grid h-14 w-14 place-items-center overflow-hidden rounded-full border-[3px] border-line bg-white shadow-[0_6px_16px_rgba(20,32,51,.12)] transition-[border-color,transform] duration-500 sm:-left-[92px]"
                >
                  <img src={job.logo} alt="" width={56} height={56} className="logo-tone h-full w-full object-contain" />
                </span>
                <article className="sweep flex flex-wrap gap-7 overflow-hidden rounded-[20px] border border-line bg-surface p-6 sm:p-7">
                  <div className="min-w-0 flex-[1_1_480px]">
                    <div className="flex flex-wrap items-center gap-4">
                      <div>
                        <h3 className="m-0 text-2xl font-bold">{c.role}</h3>
                        <p className="m-0 text-[15px] text-muted">
                          {job.company}, {c.context.charAt(0).toLowerCase() + c.context.slice(1)}
                        </p>
                      </div>
                      <span className="ml-auto rounded-full bg-chip px-3 py-1 text-sm font-bold whitespace-nowrap">
                        {job.period[lang]}
                      </span>
                    </div>
                    <ul className="mt-5 flex flex-col gap-2.5 pl-5">
                      {c.highlights.map((h) => (
                        <li key={h} className="list-disc marker:text-yellow">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-[0_1_220px] text-[15px] text-muted sm:border-l sm:border-line sm:pl-6">
                    <p className="m-0 mb-1.5 font-bold text-ink">{t('experience.with')}</p>
                    <p className="m-0">{job.stack.join(', ')}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
