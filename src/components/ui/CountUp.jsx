import { useEffect, useRef, useState } from 'react'

const PARTS = /^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/s
const DURATION = 900
const easeOutExpo = (x) => (x === 1 ? 1 : 1 - 2 ** (-10 * x))

/**
 * Counts a metric up from zero the first time it scrolls into view
 * ("94.59%", "+5", "60 %"). Non-numeric values render as-is; reduced motion
 * shows the final value.
 */
export function CountUp({ value }) {
  const match = PARTS.exec(String(value))
  const ref = useRef(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!match || !el || reduced || typeof IntersectionObserver === 'undefined') return
    const [, pre, num, post] = match
    const sep = num.includes(',') ? ',' : '.'
    const target = parseFloat(num.replace(',', '.'))
    const decimals = (num.split(sep)[1] || '').length
    const format = (n) => `${pre}${n.toFixed(decimals).replace('.', sep)}${post}`
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - start) / DURATION)
          setShown(format(target * easeOutExpo(p)))
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        setShown(format(0))
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  )
}
