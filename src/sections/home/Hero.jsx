import { HeroShowcase } from './HeroShowcase.jsx'
import { NodeField } from './NodeField.jsx'
import { profile } from '@/data/profile.js'
import { heroStack } from '@/data/skills.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Button, TechLogo, TextLink } from '@/components/ui'

export function Hero() {
  const { t, lang } = useTranslation()

  return (
    <section id="inicio" className="relative isolate grid items-center gap-12 pt-16 pb-10 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
      <NodeField />
      <div className="min-w-0">
      <h1 className="name-in m-0 text-[clamp(3rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.03em]">
        {profile.shortName}
      </h1>
      <p style={{ '--d': '200ms' }} className="rise-in mt-3 font-display text-[clamp(1.35rem,2.6vw,1.9rem)] font-semibold tracking-tight text-muted">
        {t('hero.role')}
      </p>
      <p style={{ '--d': '300ms' }} className="rise-in mt-6 max-w-[640px] text-xl">{t('hero.tagline')}</p>

      <ul aria-label={t('hero.stackLabel')} className="mt-9 flex flex-wrap gap-x-1 gap-y-6 p-0">
        {heroStack.map((name, i) => (
          <TechLogo key={name} name={name} delay={400 + i * 80} />
        ))}
      </ul>

      <div style={{ '--d': '450ms' }} className="rise-in mt-9 flex flex-wrap items-center gap-3">
        <Button href="#proyectos">{t('hero.ctaProjects')}</Button>
        {profile.resumeUrl && (
          <Button href={profile.resumeUrl[lang]} variant="ghost">
            {t('hero.cv')}
          </Button>
        )}
        <TextLink href={profile.socials.github} className="ml-2">
          GitHub
        </TextLink>
        <TextLink href={profile.socials.linkedin}>LinkedIn</TextLink>
      </div>
      <p style={{ '--d': '550ms' }} className="rise-in mt-5 text-[15px] text-muted">
        <span className="lg:hidden">{t('hero.expShort')} · </span>
        {t('hero.availability')}
      </p>
      </div>

      <HeroShowcase />
    </section>
  )
}
