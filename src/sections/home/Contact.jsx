import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { profile } from '@/data/profile.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard.js'
import { Button } from '@/components/ui'
import { RevealTitle } from '@/components/ui/RevealTitle.jsx'

const field =
  'w-full rounded-[10px] border-[1.5px] border-input bg-bg px-3.5 text-ink focus:border-blue focus:outline-none'

export function Contact() {
  const { t, lang } = useTranslation()
  const { copied, copy } = useCopyToClipboard()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n${form.name} (${form.email})`
    window.location.href =
      `mailto:${profile.email}?subject=${encodeURIComponent(`${t('contact.subject')}: ${form.name}`)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" className="border-t border-line pt-16 pb-22">
      <div className="flex flex-wrap gap-10">
        <div className="min-w-0 flex-[1_1_380px]">
          <div className="flex items-center gap-6">
            <RevealTitle text={t('contact.display')} className="text-[clamp(2.8rem,6vw,4.8rem)] leading-[1] tracking-[-0.025em]" />
            <img src="/objects/contact.webp" alt="" aria-hidden="true" width={120} height={120} className="float-object hidden h-auto w-24 drop-shadow-[0_24px_26px_rgba(0,0,0,.45)] sm:block lg:w-28" />
          </div>
          <p className="mt-3 text-muted">{t('contact.subtitle')}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="border-b-[3px] border-yellow font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold break-all text-blue"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={() => copy(profile.email)}
              className="grid h-11 w-11 place-items-center rounded-xl border-[1.5px] border-line hover:border-blue"
              aria-label={copied ? t('contact.copied') : t('contact.copy')}
              title={copied ? t('contact.copied') : t('contact.copy')}
            >
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? t('contact.copied') : ''}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {profile.resumeUrl && <Button href={profile.resumeUrl[lang]}>{t('hero.cv')}</Button>}
            <Button href={profile.socials.linkedin} variant="ghost">
              LinkedIn
            </Button>
            <Button href={profile.socials.github} variant="ghost">
              GitHub
            </Button>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex min-w-0 flex-[1_1_420px] flex-col gap-4 rounded-[20px] border border-line bg-surface p-6"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c-name" className="text-[15px] font-bold">{t('contact.name')}</label>
            <input id="c-name" name="name" required autoComplete="name" value={form.name} onChange={onChange} className={`${field} h-12`} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c-email" className="text-[15px] font-bold">{t('contact.email')}</label>
            <input id="c-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={onChange} className={`${field} h-12`} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c-msg" className="text-[15px] font-bold">{t('contact.message')}</label>
            <textarea id="c-msg" name="message" rows={4} required value={form.message} onChange={onChange} className={`${field} resize-y py-3`} />
          </div>
          <button
            type="submit"
            aria-describedby="c-note"
            className="min-h-12 cursor-pointer rounded-xl bg-blue font-bold text-on-blue hover:bg-blue-strong"
          >
            {t('contact.send')}
          </button>
          <p id="c-note" className="m-0 text-center text-sm text-muted">{t('contact.note')}</p>
        </form>
      </div>
    </section>
  )
}
