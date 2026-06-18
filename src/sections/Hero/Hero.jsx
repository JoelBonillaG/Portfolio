import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '@/data/profile.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Button, GithubIcon, LinkedinIcon } from '@/components/ui'
import { HeroBackground } from './HeroBackground.jsx'
import perfil from '@/assets/perfil.png'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const { t } = useTranslation()

  const socials = [
    { href: profile.socials.github, icon: GithubIcon, label: 'GitHub' },
    { href: profile.socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr]">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/50 px-3 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t('hero.available')}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            <span className="block text-muted text-2xl font-medium sm:text-3xl">
              {t('hero.greeting')}
            </span>
            {profile.shortName}
          </motion.h1>

          <motion.p
            variants={item}
            className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text font-display text-xl font-semibold text-transparent sm:text-2xl"
          >
            {t('hero.role')}
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Button href="#projects" size="lg">
              {t('hero.ctaProjects')}
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              {t('hero.ctaContact')}
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-2 pt-1">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div
            className="absolute -inset-4 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, color-mix(in srgb, var(--color-accent) 35%, transparent), transparent 70%)',
            }}
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative aspect-square overflow-hidden rounded-full border-2 border-accent/40 bg-elevated shadow-2xl"
          >
            <img
              src={perfil}
              alt={profile.name}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#projects"
        aria-label={t('hero.scroll')}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          {t('hero.scroll')}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </a>
    </section>
  )
}
