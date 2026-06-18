import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils.js'

/**
 * Carousel gallery: one screenshot at a time with prev/next, a thumbnail
 * strip and a counter. Falls back to a placeholder when there are no images.
 */
export function ProjectGallery({ images, title, emptyLabel }) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-elevated/40 text-muted">
        <ImageIcon size={28} />
        <p className="text-sm">{emptyLabel}</p>
      </div>
    )
  }

  const total = images.length
  const go = (next) => {
    setDir(next > index ? 1 : -1)
    setIndex((next + total) % total)
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main viewport */}
      <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-elevated">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} ${index + 1}`}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <NavButton side="left" onClick={() => go(index - 1)} />
            <NavButton side="right" onClick={() => go(index + 1)} />
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => go(i)}
              aria-label={`${title} ${i + 1}`}
              className={cn(
                'relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors',
                i === index ? 'border-accent' : 'border-border opacity-60 hover:opacity-100',
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function NavButton({ side, onClick }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side}
      className={cn(
        'absolute top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full',
        'bg-black/50 text-white opacity-0 backdrop-blur transition-opacity hover:bg-black/70 group-hover:opacity-100',
        side === 'left' ? 'left-3' : 'right-3',
      )}
    >
      <Icon size={20} />
    </button>
  )
}
