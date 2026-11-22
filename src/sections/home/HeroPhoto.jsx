import { useEffect, useRef } from 'react'

const MAX_TILT = 7

/**
 * Profile photo that tilts toward the cursor (3D), while the yellow block
 * behind it drifts the other way. Fine pointers only; still under reduced
 * motion. Transforms are written straight to the DOM (no re-renders).
 */
export function HeroPhoto({ src, alt, framed = true, className = '' }) {
  const frameRef = useRef(null)
  const photoRef = useRef(null)
  const blockRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    let frame = 0
    let target = { x: 0, y: 0 }
    const apply = () => {
      frame = 0
      const { x, y } = target
      if (photoRef.current) {
        photoRef.current.style.transform = `perspective(900px) rotateY(${x * MAX_TILT}deg) rotateX(${-y * MAX_TILT}deg) rotate(${framed ? -2 : 0}deg)`
      }
      if (blockRef.current) {
        blockRef.current.style.translate = `${-x * 10}px ${-y * 10}px`
      }
    }
    const onMove = (e) => {
      const el = frameRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.bottom < 0 || r.top > window.innerHeight) return
      const nx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)
      const ny = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)
      target = { x: Math.max(-1, Math.min(1, nx)), y: Math.max(-1, Math.min(1, ny)) }
      if (!frame) frame = requestAnimationFrame(apply)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [framed])

  return (
    <div ref={frameRef} className={`relative ${className}`}>
      {framed && (
        <span
          ref={blockRef}
          aria-hidden="true"
          className="photo-block absolute inset-0 rounded-[28px] bg-yellow transition-[translate] duration-300 ease-out"
        />
      )}
      <img
        ref={photoRef}
        src={src}
        alt={alt}
        width={300}
        height={300}
        className={
          framed
            ? 'relative aspect-square w-full -rotate-2 rounded-[28px] border border-line object-cover shadow-[0_18px_40px_rgba(20,32,51,.14)] transition-transform duration-300 ease-out'
            : 'relative w-full drop-shadow-[0_40px_40px_rgba(0,0,0,.45)] transition-transform duration-300 ease-out'
        }
      />
    </div>
  )
}
