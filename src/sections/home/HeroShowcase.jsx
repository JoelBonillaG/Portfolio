import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects, projectTitle, visibleProjects } from '@/lib/projectsView.js'
import { CountUp } from '@/components/ui'
import { useTranslation } from '@/i18n/useTranslation.js'

const SLIDES = featuredProjects.filter((p) => p.images?.length).slice(0, 6)
const INTERVAL = 4200
const MAX_TILT = 6

/**
 * Browser-window mockup that cycles through real screenshots of the featured
 * projects (crossfade). Tilts toward the cursor on fine pointers; the gold
 * block behind drifts the other way. Pauses on hover and under reduced motion.
 */
export function HeroShowcase() {
  const { t, lang } = useTranslation()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const frameRef = useRef(null)
  const windowRef = useRef(null)
  const blockRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL)
    return () => clearInterval(id)
  }, [paused])

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    let frame = 0
    let target = { x: 0, y: 0 }
    const apply = () => {
      frame = 0
      const { x, y } = target
      if (windowRef.current) {
        windowRef.current.style.transform = `perspective(1100px) rotateY(${x * MAX_TILT}deg) rotateX(${-y * MAX_TILT}deg)`
      }
      if (blockRef.current) blockRef.current.style.translate = `${-x * 12}px ${-y * 12}px`
    }
    const onMove = (e) => {
      const el = frameRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const nx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)
      const ny = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)
      target = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      }
      if (!frame) frame = requestAnimationFrame(apply)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  if (!SLIDES.length) return null
  const current = SLIDES[index]
  const titleOf = (p) => projectTitle(p, lang)

  return (
    <div
      ref={frameRef}
      className="showcase relative hidden w-full max-w-[440px] justify-self-end lg:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <div className="hero-stats absolute -bottom-8 -left-12 z-10 flex items-center gap-5 rounded-2xl border border-line bg-surface/95 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,.4)] backdrop-blur">
          <p className="m-0">
            <span className="block font-display text-[2.4rem] leading-none font-semibold text-yellow">
              <CountUp value="1+" />
            </span>
            <span className="mt-1 block text-xs text-muted">{t('hero.statExp')}</span>
          </p>
          <span aria-hidden="true" className="h-10 w-px bg-line" />
          <p className="m-0">
            <span className="block font-display text-[2.4rem] leading-none font-semibold text-yellow">
              <CountUp value={String(visibleProjects.length)} />
            </span>
            <span className="mt-1 block text-xs text-muted">{t('hero.statProjects')}</span>
          </p>
        </div>
        <span
          ref={blockRef}
          aria-hidden="true"
          className="absolute -right-5 -bottom-5 left-8 top-8 rounded-[22px] bg-yellow transition-[translate] duration-300 ease-out"
        />
        <div
          ref={windowRef}
          className="relative overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_30px_60px_rgba(0,0,0,.45)] transition-transform duration-300 ease-out"
        >
          <div className="flex items-center gap-2 border-b border-line bg-chip px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#E36E5C]" />
            <span className="size-2.5 rounded-full bg-[#E8B84E]" />
            <span className="size-2.5 rounded-full bg-[#5CB873]" />
            <span className="ml-3 truncate rounded-md bg-bg px-3 py-1 text-xs text-muted">{titleOf(current)}</span>
          </div>
          <div className="relative aspect-[16/10] bg-bg">
            {SLIDES.map((p, i) => (
              <img
                key={p.id}
                src={p.images[0]}
                alt={i === index ? titleOf(p) : ''}
                aria-hidden={i !== index}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-14 flex items-center justify-between gap-4">
        <Link to={`/proyectos/${current.id}`} className="group min-w-0 text-sm">
          <span className="block text-muted">{t('hero.showcase')}</span>
          <span className="block truncate font-display text-lg font-semibold text-ink group-hover:text-yellow">
            {titleOf(current)}
          </span>
        </Link>
        <div className="flex shrink-0 gap-1.5" role="group" aria-label={t('hero.showcase')}>
          {SLIDES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={titleOf(p)}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 cursor-pointer rounded-full transition-all ${i === index ? 'w-6 bg-yellow' : 'w-1.5 bg-line hover:bg-muted'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
