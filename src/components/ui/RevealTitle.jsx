import { cn } from '@/lib/utils.js'

/**
 * Display title that rises word by word (masked) when it scrolls into view.
 * Wrap the accent part in *asterisks* to set it in gold italic:
 *   "Proyectos *destacados*"
 * Uses the shared [data-reveal] observer (adds `is-in`).
 */
export function RevealTitle({ as: Tag = 'h2', text, className }) {
  const parts = text.split(/(\*[^*]+\*)/).filter(Boolean)
  let index = 0
  const plain = text.replaceAll('*', '')

  return (
    <Tag data-reveal aria-label={plain} className={cn('reveal-title m-0 font-display font-semibold', className)}>
      {parts.map((part, p) => {
        const accent = part.startsWith('*')
        const words = part.replaceAll('*', '').split(' ').filter(Boolean)
        return (
          <span key={p} aria-hidden="true" className={accent ? 'font-normal text-yellow italic' : undefined}>
            {words.map((w) => {
              const i = index++
              return (
                <span key={`${w}-${i}`}>
                  <span className="word-mask">
                    <span className="word" style={{ '--i': i }}>
                      {w}
                    </span>
                  </span>{' '}
                </span>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}
