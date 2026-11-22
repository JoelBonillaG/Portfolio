import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from '@/i18n/useTranslation.js'
import { cn } from '@/lib/utils.js'

/** One screenshot at a time with prev/next and thumbnails. */
export function ProjectGallery({ images, title, transitionName }) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)

  if (!images?.length) {
    return (
      <p className="m-0 rounded-2xl border border-dashed border-line px-5 py-8 text-center text-muted">
        {t('projects.galleryEmpty')}
      </p>
    )
  }

  const total = images.length
  const go = (i) => setIndex((i + total) % total)

  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-chip">
        <img
          style={{ viewTransitionName: index === 0 ? transitionName : undefined }}
          src={images[index]}
          alt={`${title}. ${t('projects.image').replace('{n}', index + 1).replace('{total}', total)}`}
          className="aspect-video w-full object-contain"
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={t('a11y.prev')}
              className="absolute top-1/2 left-3 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-ink/70 text-bg hover:bg-ink"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={t('a11y.next')}
              className="absolute top-1/2 right-3 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-ink/70 text-bg hover:bg-ink"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => go(i)}
              aria-label={t('projects.image').replace('{n}', i + 1).replace('{total}', total)}
              aria-current={i === index ? 'true' : undefined}
              className={cn(
                'h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2',
                i === index ? 'border-blue' : 'border-line opacity-60 hover:opacity-100',
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
