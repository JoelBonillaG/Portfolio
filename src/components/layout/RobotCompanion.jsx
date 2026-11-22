import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Briefcase, Clock, FileText, Layers, Shuffle, Sparkles, X } from 'lucide-react'
import { profile } from '@/data/profile.js'
import { featuredProjects } from '@/lib/projectsView.js'
import { NAV_ITEMS } from '@/data/nav.js'
import { useActiveSection } from '@/hooks/useActiveSection.js'
import { useTranslation } from '@/i18n/useTranslation.js'

const IDS = NAV_ITEMS.map((n) => n.id)
const NO_IDS = []
const STORE = 'robot-awake'
const EYE_RANGE = 3.2
const MAX_TILT = 9

/** Asleep by default; stays awake on later visits once someone wakes it. */
const readHidden = () => {
  try {
    return localStorage.getItem(STORE) !== '1'
  } catch {
    return true
  }
}

/**
 * A small matte-white robot in the corner. Its eyes follow the cursor, it
 * leans with the scroll, names the section you enter and waves at Contact.
 * Clicked, it opens a quick-help panel with the questions a recruiter asks
 * (summary, stack, experience, availability, CV, a random project), answered
 * with exact, pre-written text and a link to the matching section.
 * Hiding tucks it into the corner (only antenna and eyes peek out); a click
 * brings it back. Desktop only; still under reduced motion.
 */
export function RobotCompanion() {
  const { t, lang } = useTranslation()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const active = useActiveSection(onHome ? IDS : NO_IDS)
  const [hidden, setHidden] = useState(readHidden)
  const [bubble, setBubble] = useState(null)
  const [blink, setBlink] = useState(false)
  const [open, setOpen] = useState(false)
  const [moodState, setMoodState] = useState({ mood: 'idle', ms: 0, n: 0 }) // idle | happy | think | surprised
  const mood = moodState.mood
  const [wave, setWave] = useState(0) // bump to replay the wave
  const [hover, setHover] = useState(false)
  const react = (next, ms = 1600, withWave = false) => {
    setMoodState((m) => ({ mood: next, ms, n: m.n + 1 }))
    if (withWave) setWave((w) => w + 1)
  }
  // Each mood lasts its time, then the face goes back to idle.
  useEffect(() => {
    if (moodState.mood === 'idle') return
    const id = setTimeout(() => setMoodState((m) => ({ ...m, mood: 'idle' })), moodState.ms)
    return () => clearTimeout(id)
  }, [moodState])
  const [reply, setReply] = useState(null)
  const [speaking, setSpeaking] = useState(false)
  const rootRef = useRef(null)
  const bodyRef = useRef(null)
  const eyesRef = useRef(null)

  // Eyes follow the cursor; the body leans with scroll speed and settles back.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let tilt = 0
    let lastY = window.scrollY
    let lastT = performance.now()

    const onMove = (e) => {
      const el = rootRef.current
      if (!el || !eyesRef.current) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height * 0.4)
      const d = Math.hypot(dx, dy) || 1
      const k = Math.min(1, d / 260)
      eyesRef.current.style.transform = `translate(${((dx / d) * EYE_RANGE * k).toFixed(2)}px, ${((dy / d) * EYE_RANGE * k).toFixed(2)}px)`
    }

    const settle = () => {
      tilt *= 0.88
      if (bodyRef.current) bodyRef.current.style.rotate = `${tilt.toFixed(2)}deg`
      frame = Math.abs(tilt) > 0.05 ? requestAnimationFrame(settle) : 0
    }
    const onScroll = () => {
      if (reduced || hidden) return
      const now = performance.now()
      const v = (window.scrollY - lastY) / Math.max(16, now - lastT)
      lastY = window.scrollY
      lastT = now
      tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, tilt + v * 6))
      if (!frame) frame = requestAnimationFrame(settle)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [hidden])

  // Blink every few seconds.
  useEffect(() => {
    if (hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer
    const loop = () => {
      timer = setTimeout(
        () => {
          setBlink(true)
          setTimeout(() => setBlink(false), 150)
          loop()
        },
        2800 + Math.random() * 3200,
      )
    }
    loop()
    return () => clearTimeout(timer)
  }, [hidden])

  // Invitation to click: a little hop, a wave and a glowing antenna (no
  // text). A few seconds after load and once more after a quiet minute;
  // stops for good once the visitor opens the panel.
  const [used, setUsed] = useState(false)
  const [beckon, setBeckon] = useState(false)
  useEffect(() => {
    if (hidden || used || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timers = []
    const gesture = (at) =>
      timers.push(
        setTimeout(() => {
          setBeckon(true)
          react('happy', 1800, true)
          timers.push(setTimeout(() => setBeckon(false), 1400))
        }, at),
      )
    gesture(3500)
    gesture(45000)
    return () => timers.forEach(clearTimeout)
  }, [hidden, used])

  // One short, true fact per section (with a robot joke), once per visit,
  // at least 15 s apart, never while the panel is open.
  const spoken = useRef({ at: 0, ids: new Set() })
  const [quietUntil, setQuietUntil] = useState(0)
  useEffect(() => {
    if (!active || hidden || open || Date.now() < quietUntil) return
    const memo = spoken.current
    if (memo.ids.has(active) || Date.now() - memo.at < 15000) return
    const text = t(`robot.tips.${active}`)
    if (!text || text.startsWith('robot.')) return
    memo.ids.add(active)
    memo.at = Date.now()
    const show = setTimeout(() => setBubble(text), 600)
    const hideTip = setTimeout(() => setBubble(null), 6000)
    return () => {
      clearTimeout(show)
      clearTimeout(hideTip)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, hidden, open, lang, quietUntil])

  // A wave the first time the visitor reaches Contact.
  const wavedAtContact = useRef(false)
  useEffect(() => {
    if (active !== 'contacto' || hidden || wavedAtContact.current) return
    wavedAtContact.current = true
    const id = setTimeout(() => react('happy', 2500, true), 0)
    return () => clearTimeout(id)
  }, [active, hidden])

  const remember = (value) => {
    try {
      if (value) localStorage.removeItem(STORE)
      else localStorage.setItem(STORE, '1')
    } catch {
      /* storage unavailable: applies to this visit only */
    }
  }
  const hide = () => {
    setOpen(false)
    setReply(null)
    setBubble(null)
    setHidden(true)
    remember(true)
  }
  const show = () => {
    setQuietUntil(Date.now() + 15000)
    setBubble(null)
    react('surprised', 700)
    setTimeout(() => {
      setHidden(false)
      remember(false)
      react('happy', 2200, true)
    }, 450)
    setTimeout(() => {
      setOpen(true)
      setUsed(true)
    }, 1300)
  }
  const close = () => {
    setOpen(false)
    setReply(null)
  }
  const go = (fn) => () => {
    fn()
    close()
  }
  const goTo = (id) => {
    close()
    if (pathname !== '/') navigate('/#' + id)
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const [busy, setBusy] = useState(false)
  const surprise = () => {
    if (busy) return
    setBusy(true)
    const pool = featuredProjects.filter((p) => !pathname.endsWith(p.id))
    const pick = pool[Math.floor(Math.random() * pool.length)]
    react('surprised', 1500)
    setTimeout(() => {
      close()
      navigate(`/proyectos/${pick.id}`)
      setBusy(false)
    }, 1000)
  }
  const ask = (key, section, question) => {
    react('think', 900)
    setReply({ q: question, text: null, section })
    setTimeout(() => {
      setReply({ q: question, text: t(`robot.${key}`), section })
      react('happy', 2500)
      setSpeaking(true)
      setTimeout(() => setSpeaking(false), 2200)
    }, 800)
  }
  const actions = [
    { icon: Sparkles, label: t('robot.summary'), run: () => ask('summaryAnswer', 'experiencia', t('robot.summary')) },
    { icon: Layers, label: t('robot.stack'), run: () => ask('stackAnswer', 'habilidades', t('robot.stack')) },
    {
      icon: Briefcase,
      label: t('robot.experience'),
      run: () => ask('experienceAnswer', 'experiencia', t('robot.experience')),
    },
    { icon: Shuffle, label: t('robot.surprise'), run: surprise },
    { icon: Clock, label: t('robot.available'), run: () => ask('availableAnswer', 'contacto', t('robot.available')) },
    profile.resumeUrl && {
      icon: FileText,
      label: t('robot.cv'),
      run: go(() => window.open(profile.resumeUrl[lang], '_blank', 'noopener')),
    },
  ].filter(Boolean)
  const face =
    mood === 'surprised' ? 'surprised' : hidden ? 'sleepy' : mood !== 'idle' ? mood : hover ? 'happy' : 'idle'
  const LINK = { experiencia: 'robot.seeExperience', habilidades: 'robot.seeSkills', contacto: 'robot.write' }

  return (
    <div
      ref={rootRef}
      className={`robot group fixed right-6 bottom-6 z-40 hidden md:block ${hidden ? 'is-tucked' : ''}`}
    >
      <span aria-live="polite" className={`robot-bubble ${bubble && !open ? 'is-on' : ''}`}>
        {!open && bubble}
      </span>

      {open && (
        <div
          role="dialog"
          aria-label={t('robot.panelTitle')}
          className="robot-panel absolute right-0 bottom-[92px] w-[280px] rounded-2xl border border-line bg-surface p-4 shadow-[0_20px_40px_rgba(0,0,0,.35)]"
          onKeyDown={(e) => e.key === 'Escape' && close()}
        >
          <div className="flex items-start justify-between gap-3">
            <p className="m-0 font-display text-lg leading-snug font-semibold">
              {reply ? reply.q : t('robot.panelTitle')}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label={t('robot.close')}
              className="grid size-7 shrink-0 cursor-pointer place-items-center rounded-full text-muted hover:text-ink"
            >
              <X size={15} aria-hidden="true" />
            </button>
          </div>
          {reply && (
            <p aria-live="polite" className="m-0 mt-2 rounded-xl bg-chip px-3 py-2.5 text-sm leading-relaxed">
              {reply.text ? (
                <>
                  {reply.text}{' '}
                  <button
                    type="button"
                    onClick={() => goTo(reply.section)}
                    className="cursor-pointer font-bold text-yellow underline underline-offset-2"
                  >
                    {t(LINK[reply.section])}
                  </button>
                </>
              ) : (
                <span className="robot-typing" aria-label="…">
                  <i />
                  <i />
                  <i />
                </span>
              )}
            </p>
          )}
          <ul className="m-0 mt-3 flex list-none flex-col gap-1 p-0">
            {actions.map(({ icon: Icon, label, run }, i) => (
              <li key={label}>
                <button
                  type="button"
                  onClick={run}
                  autoFocus={i === 0}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] font-bold transition-colors hover:bg-chip focus-visible:bg-chip"
                >
                  <Icon size={16} aria-hidden="true" className="shrink-0 text-yellow" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!hidden && (
        <button
          type="button"
          onClick={hide}
          aria-label={t('robot.hide')}
          title={t('robot.hide')}
          className="absolute -top-2 -left-2 z-10 grid size-6 cursor-pointer place-items-center rounded-full border border-line bg-surface text-muted opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 hover:text-ink"
        >
          <X size={12} aria-hidden="true" />
        </button>
      )}

      <button
        type="button"
        onClick={() => {
          if (hidden) return show()
          if (open) return close()
          setOpen(true)
          setUsed(true)
          setBubble(null)
          setQuietUntil(Date.now() + 15000)
          react('happy', 2500, true)
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={hidden ? undefined : open}
        aria-haspopup={hidden ? undefined : 'dialog'}
        aria-label={hidden ? t('robot.show') : t('robot.open')}
        title={hidden ? t('robot.show') : t('robot.open')}
        className="block cursor-pointer"
      >
        <span ref={bodyRef} className="robot-body block origin-bottom">
          <svg
            viewBox="0 0 80 96"
            width="64"
            height="77"
            aria-hidden="true"
            key={`wave-${wave}`}
            className={`${wave ? 'is-waving' : ''} mood-${face} ${bubble || speaking ? 'is-talking' : ''} ${beckon ? 'is-beckoning' : ''}`}
          >
            <defs>
              <linearGradient id="robot-shell" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#FBF8F2" />
                <stop offset="1" stopColor="#D9D2C4" />
              </linearGradient>
              <radialGradient id="robot-glow">
                <stop offset="0" stopColor="#E9CB86" />
                <stop offset="1" stopColor="#C9A45C" />
              </radialGradient>
            </defs>
            {/* antenna */}
            <line x1="40" y1="14" x2="40" y2="5" stroke="#CFC7B8" strokeWidth="2.5" strokeLinecap="round" />
            <circle className="robot-antenna" cx="40" cy="4.5" r="3.4" fill="url(#robot-glow)" />
            {hidden && (
              <g className="robot-zz" fill="#C9A45C" fontFamily="Georgia, serif" fontWeight="700">
                <text x="58" y="12" fontSize="11">
                  z
                </text>
                <text x="66" y="2" fontSize="14">
                  z
                </text>
              </g>
            )}
            {/* ears */}
            <rect x="5.5" y="30" width="6" height="13" rx="3" fill="#C9A45C" />
            <rect x="68.5" y="30" width="6" height="13" rx="3" fill="#C9A45C" />
            {/* head */}
            <rect x="10" y="14" width="60" height="44" rx="17" fill="url(#robot-shell)" />
            <rect x="17" y="23" width="46" height="25" rx="12" fill="#0F1A2A" />
            <g ref={eyesRef} className="robot-eyes">
              {face === 'happy' && (
                <g fill="none" stroke="url(#robot-glow)" strokeWidth="2.8" strokeLinecap="round">
                  <path d="M26 37.5 q4.5 -6 9 0" />
                  <path d="M45 37.5 q4.5 -6 9 0" />
                  {bubble || speaking ? (
                    <rect
                      className="robot-mouth"
                      x="36"
                      y="41.6"
                      width="8"
                      height="2.4"
                      rx="1.2"
                      fill="url(#robot-glow)"
                      stroke="none"
                    />
                  ) : (
                    <path d="M35.5 42 q4.5 3 9 0" strokeWidth="2" />
                  )}
                </g>
              )}
              {face === 'sleepy' && (
                <g fill="none" stroke="url(#robot-glow)" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M26.5 36.5 h8" />
                  <path d="M45.5 36.5 h8" />
                </g>
              )}
              {(face === 'idle' || face === 'think' || face === 'surprised') && (
                <g
                  className={blink && face === 'idle' ? 'robot-blink' : ''}
                  style={{ transformOrigin: '40px 35.5px', translate: face === 'think' ? '1.5px -3px' : undefined }}
                >
                  <ellipse
                    cx="30.5"
                    cy="35.5"
                    rx={face === 'surprised' ? 5.6 : 4.2}
                    ry={face === 'surprised' ? 5.8 : 4.6}
                    fill="url(#robot-glow)"
                  />
                  <ellipse
                    cx="49.5"
                    cy="35.5"
                    rx={face === 'surprised' ? 5.6 : 4.2}
                    ry={face === 'surprised' ? 5.8 : 4.6}
                    fill="url(#robot-glow)"
                  />
                  {face === 'surprised' ? (
                    <ellipse cx="40" cy="43.5" rx="2" ry="2.2" fill="url(#robot-glow)" />
                  ) : (
                    <rect
                      className="robot-mouth"
                      x="36"
                      y="42.2"
                      width="8"
                      height="2.2"
                      rx="1.1"
                      fill="url(#robot-glow)"
                    />
                  )}
                </g>
              )}
            </g>
            {/* neck + body */}
            <rect x="34" y="57" width="12" height="6" rx="2" fill="#CFC7B8" />
            <rect x="19" y="62" width="42" height="29" rx="13" fill="url(#robot-shell)" />
            <circle className="robot-core" cx="40" cy="76" r="4.2" fill="url(#robot-glow)" />
            {/* arms */}
            <rect x="9" y="66" width="9" height="18" rx="4.5" fill="#E5DFD3" />
            <g className="robot-arm">
              <rect x="62" y="66" width="9" height="18" rx="4.5" fill="#E5DFD3" />
            </g>
          </svg>
        </span>
      </button>
    </div>
  )
}
