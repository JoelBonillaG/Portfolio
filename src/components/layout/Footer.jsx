import { profile } from '@/data/profile.js'
import { useTranslation } from '@/i18n/useTranslation.js'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-2 px-6 py-6 text-sm text-muted">
        <span>
          {profile.shortName}, {new Date().getFullYear()}
        </span>
        <span>{t('footer.built')}</span>
      </div>
    </footer>
  )
}
