import { useEffect, useRef } from 'react'
import { useReveal } from '@/hooks/useReveal.js'
import { useTranslation } from '@/i18n/useTranslation.js'
import { Hero } from '@/sections/home/Hero.jsx'
import { Experience } from '@/sections/home/Experience.jsx'
import { FeaturedProjects } from '@/sections/home/FeaturedProjects.jsx'
import { Skills } from '@/sections/home/Skills.jsx'
import { Education } from '@/sections/home/Education.jsx'
import { About } from '@/sections/home/About.jsx'
import { Contact } from '@/sections/home/Contact.jsx'

/** Order: proof first (experience, projects), then skills and the person. */
export function Home() {
  const { t, lang } = useTranslation()
  const mainRef = useRef(null)
  useReveal(mainRef)
  useEffect(() => {
    document.title = `Joel Bonilla · ${t('hero.role')}`
  }, [t, lang])
  return (
    <>
      <main ref={mainRef} id="contenido" className="page-in mx-auto max-w-[1180px] px-6">
        <Hero />
        <Experience />
        <FeaturedProjects />
        <Skills />
        <Education />
        <About />
        <Contact />
      </main>
    </>
  )
}
