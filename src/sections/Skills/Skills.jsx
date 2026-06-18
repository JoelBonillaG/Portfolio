import { skillCategories, softSkills } from '@/data/skills.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Section, SectionHeading, Reveal } from '@/components/ui'
import { SkillCategoryCard } from './SkillCategoryCard.jsx'
import { SoftSkillCard } from './SoftSkillCard.jsx'

export function Skills() {
  const { t } = useTranslation()

  return (
    <Section id="skills" band>
      <SectionHeading
        eyebrow="Stack & Mindset"
        title={t('skills.title')}
        subtitle={t('skills.subtitle')}
      />

      {/* Technical */}
      <div className="mt-12">
        <h3 className="mb-6 font-display text-lg font-semibold text-muted">
          {t('skills.technicalTitle')}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.05}>
              <SkillCategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Soft */}
      <div className="mt-14">
        <h3 className="mb-6 font-display text-lg font-semibold text-muted">
          {t('skills.softTitle')}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((skill, i) => (
            <Reveal key={skill.key} delay={i * 0.05}>
              <SoftSkillCard skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
