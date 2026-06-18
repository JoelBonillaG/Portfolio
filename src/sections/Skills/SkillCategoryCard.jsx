import { useTranslation } from '@/i18n/useTranslation.js'
import { Badge, DynamicIcon } from '@/components/ui'

/** One technical-skill category: icon, name and its technology tags. */
export function SkillCategoryCard({ category }) {
  const { lang } = useTranslation()

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
          <DynamicIcon name={category.icon} size={20} />
        </span>
        <h4 className="font-display text-base font-semibold">
          {category.name[lang]}
        </h4>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  )
}
