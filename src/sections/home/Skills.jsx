import { softSkills, technicalSkills } from '@/data/skills.js'
import { getTechIcon } from '@/lib/techIcons.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { CountUp } from '@/components/ui'
import { SectionHeader } from './SectionHeader.jsx'

/** Technical skills as rows of logo chips that light up in sequence; soft skills as editorial rows. */
export function Skills() {
  const { t, lang } = useTranslation()

  return (
    <section id="habilidades" className="border-t border-line py-16">
      <SectionHeader title={t('skills.display')} object="/objects/skills.webp" />

      <h3 className="m-0 mt-8 text-[22px] font-bold">{t('skills.technical')}</h3>
      <dl className="m-0 mt-3">
        {technicalSkills.map((row) => (
          <div
            key={row.label.en}
            data-reveal
            className="chip-row grid gap-x-6 gap-y-2.5 border-b border-line py-4 sm:grid-cols-[180px_1fr] sm:items-center"
          >
            <dt className="font-bold">{row.label[lang]}</dt>
            <dd className="m-0 flex flex-wrap gap-2">
              {row.items.map((name, i) => {
                const icon = getTechIcon(name)
                return (
                  <span
                    key={name}
                    className="chip inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[15px] transition-colors hover:border-blue"
                    style={{ '--d': `${i * 70}ms` }}
                  >
                    {icon && <img src={icon} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />}
                    {name}
                  </span>
                )
              })}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="m-0 mt-12 text-[22px] font-bold">{t('skills.soft')}</h3>
      <div className="mt-6 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {softSkills.map((s, i) => (
          <div key={s.en.title} data-reveal style={{ '--d': `${i * 90}ms` }} className="reveal-row flex flex-col">
            <p className="m-0 font-display text-[clamp(2.8rem,4.6vw,3.8rem)] leading-none font-semibold text-yellow">
              <CountUp value={s[lang].stat.value} />
            </p>
            <p className="m-0 mt-2 min-h-[2.9em] text-sm leading-snug text-muted">{s[lang].stat.label}</p>
            <h4 className="m-0 mt-5 border-t border-line pt-4 font-display text-lg font-bold">{s[lang].title}</h4>
            <p className="m-0 mt-1 text-muted">{s[lang].proof}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
