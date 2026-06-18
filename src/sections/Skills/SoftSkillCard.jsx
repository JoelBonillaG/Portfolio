import { useTranslation } from '@/i18n/useTranslation.js'
import { DynamicIcon } from '@/components/ui'

/** One soft-skill: icon, title and description (copy from i18n). */
export function SoftSkillCard({ skill }) {
  const { t } = useTranslation()

  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
        <DynamicIcon name={skill.icon} size={22} />
      </span>
      <h4 className="font-display text-base font-semibold">
        {t(`soft.${skill.key}.title`)}
      </h4>
      <p className="text-sm leading-relaxed text-muted">
        {t(`soft.${skill.key}.desc`)}
      </p>
    </div>
  )
}
