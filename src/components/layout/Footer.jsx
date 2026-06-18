import { Mail } from 'lucide-react'
import { NAV_ITEMS } from '@/data/nav.js'
import { profile } from '@/data/profile.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { GithubIcon, LinkedinIcon } from '@/components/ui'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const socials = [
    { href: profile.socials.github, icon: GithubIcon, label: 'GitHub' },
    { href: profile.socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  ]

  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-on-accent">
              {profile.initials}
            </span>
            <span className="font-display text-sm font-semibold">
              {profile.shortName}
            </span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
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
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {profile.name}. {t('footer.rights')}
          </p>
          <p>{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  )
}
