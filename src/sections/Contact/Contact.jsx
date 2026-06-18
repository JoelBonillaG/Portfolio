import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '@/data/profile.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard.js'
import {
  Button,
  GithubIcon,
  LinkedinIcon,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui'

export function Contact() {
  const { t } = useTranslation()
  const { copied, copy } = useCopyToClipboard()

  const methods = [
    {
      icon: Mail,
      label: t('contact.emailLabel'),
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyable: true,
    },
    {
      icon: Phone,
      label: t('contact.phoneLabel'),
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
    },
    {
      icon: MapPin,
      label: t('contact.locationLabel'),
      value: t('contact.location'),
      href: null,
    },
  ]

  const socials = [
    { href: profile.socials.github, icon: GithubIcon, label: 'GitHub' },
    { href: profile.socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
  ]

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contacto"
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />

      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
        {methods.map(({ icon: Icon, label, value, href, copyable }, i) => (
          <Reveal
            key={label}
            delay={i * 0.06}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
              <Icon size={20} />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {label}
            </span>
            {href ? (
              <a
                href={href}
                className="break-all text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                {value}
              </a>
            ) : (
              <span className="text-sm font-medium text-fg">{value}</span>
            )}
            {copyable && (
              <button
                type="button"
                onClick={() => copy(value)}
                className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? t('contact.copied') : t('contact.copy')}
              </button>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={0.15}
        className="mt-10 flex flex-col items-center gap-5"
      >
        <Button href={`mailto:${profile.email}`} size="lg">
          <Send size={18} />
          {t('contact.cta')}
        </Button>

        <div className="flex items-center gap-2">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
