import { useEffect, useRef } from 'react'

const COUNT = 64
const LINK = 130 // px: max distance to draw a link
const CURSOR = 170 // px: radius where the cursor lights nodes up

/**
 * Hero background: a quiet field of connected nodes (a system diagram,
 * not stars) that drifts slowly and lights up around the cursor.
 * Canvas 2D, DPR capped, paused off-screen and in background tabs,
 * drawn once (static) under reduced motion.
 */
export function NodeField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let w = 0
    let h = 0
    let nodes = []
    let pointer = { x: -9999, y: -9999 }
    let visible = true
    let frame = 0

    const colors = () => {
      const s = getComputedStyle(document.documentElement)
      return {
        line: s.getPropertyValue('--line').trim() || '#dde2ea',
        blue: s.getPropertyValue('--blue').trim() || '#2f6db5',
        yellow: s.getPropertyValue('--yellow').trim() || '#f2c230',
      }
    }
    let palette = colors()

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!nodes.length) {
        nodes = Array.from({ length: COUNT }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 1.2 + Math.random() * 1.6,
        }))
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > LINK) continue
          const near = Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y) < CURSOR
          ctx.strokeStyle = near ? palette.blue : palette.line
          ctx.globalAlpha = (1 - d / LINK) * (near ? 0.9 : 0.55)
          ctx.lineWidth = near ? 1.2 : 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
      for (const n of nodes) {
        const near = Math.hypot(n.x - pointer.x, n.y - pointer.y) < CURSOR * 0.6
        ctx.globalAlpha = near ? 1 : 0.7
        ctx.fillStyle = near ? palette.yellow : palette.blue
        ctx.beginPath()
        ctx.arc(n.x, n.y, near ? n.r + 1.2 : n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const step = () => {
      frame = 0
      if (!visible || document.hidden) return
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = w + 20
        if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20
        if (n.y > h + 20) n.y = -20
      }
      draw()
      frame = requestAnimationFrame(step)
    }
    const start = () => {
      if (!reduced && !frame) frame = requestAnimationFrame(step)
    }

    resize()
    draw()

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top }
      if (reduced) draw()
    }
    const onLeave = () => {
      pointer = { x: -9999, y: -9999 }
    }
    const onResize = () => {
      resize()
      draw()
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
    })
    io.observe(canvas)
    const theme = new MutationObserver(() => {
      palette = colors()
      draw()
    })
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    const onVisibility = () => {
      if (!document.hidden) start()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', onResize, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      io.disconnect()
      theme.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 h-full w-screen -translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
    />
  )
}
