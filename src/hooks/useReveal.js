import { useEffect } from 'react'

/**
 * Adds `is-in` (once) to every `[data-reveal]` element inside `rootRef`
 * when it scrolls into view. CSS decides what that means (marker under a
 * title, signal sweep on a card). Elements are revealed immediately when
 * IntersectionObserver is unavailable.
 */
export function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const items = root.querySelectorAll('[data-reveal]')
    if (typeof IntersectionObserver === 'undefined') {
      items.forEach((el) => el.classList.add('is-in'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    items.forEach((el) => observer.observe(el))
    const mo = new MutationObserver(() => {
      root.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => observer.observe(el))
    })
    mo.observe(root, { childList: true, subtree: true })
    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [rootRef])
}
