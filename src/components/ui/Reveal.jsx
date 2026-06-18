import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Fade + slide content into view on scroll (once). Respects reduced motion
 * automatically via Framer Motion + the global CSS guard.
 */
export function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  duration = 0.55,
  className,
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
