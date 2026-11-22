import { hobbies } from '@/data/interests.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { RevealTitle } from '@/components/ui/RevealTitle.jsx'
import perfil from '@/assets/perfil-recorte.webp'

/**
 * Editorial "about": type does the work. A large display heading, plain
 * label/text rows (no boxes, no clip-art) and one big pull quote.
 */
export function About() {
  const { t, lang } = useTranslation()

  return (
    <section id="sobre-mi" className="border-t border-line py-20">
      <p className="m-0 text-sm font-bold text-blue">{t('about.title')}</p>
      <RevealTitle
        text={t('about.heading')}
        className="mt-2 text-[clamp(2.8rem,6.5vw,5.2rem)] leading-[0.95] tracking-[-0.03em]"
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-start">
        <div className="min-w-0">
          <p className="m-0 max-w-[620px] text-[21px] leading-relaxed">{t('about.intro')}</p>

          <dl className="m-0 mt-10">
            {hobbies.map((h, i) => (
              <div
                key={h.id}
                data-reveal
                style={{ '--d': `${i * 90}ms` }}
                className="reveal-row grid gap-x-10 gap-y-1 border-t border-line py-6 sm:grid-cols-[150px_1fr]"
              >
                <dt className="font-display text-lg font-bold">{h[lang].label}</dt>
                <dd className="m-0 text-[17px] leading-relaxed">
                  {h[lang].title} <span className="text-muted">{h[lang].text}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure data-reveal className="reveal-row m-0 lg:sticky lg:top-28">
          {/* Cut-out photo inside a gold disc. */}
          <div className="portrait relative mb-10 aspect-square w-[min(100%,300px)]">
            <span aria-hidden="true" className="portrait-ring absolute inset-0 rounded-full" />
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <img
                src={perfil}
                alt={t('about.photo')}
                width={320}
                height={293}
                className="absolute bottom-0 left-1/2 h-auto w-[106%] max-w-none -translate-x-1/2"
              />
            </div>
          </div>
          <blockquote className="m-0 font-display text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
            <span aria-hidden="true" className="block font-display text-[5rem] leading-[0.6] text-yellow">
              “
            </span>
            {t('about.quote')}
          </blockquote>
          <figcaption className="mt-5 text-muted">Joel Bonilla</figcaption>
        </figure>
      </div>
    </section>
  )
}
