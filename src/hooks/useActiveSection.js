import { useEffect, useState } from 'react'

/**
 * Track which section id is currently centered in the viewport, for nav
 * highlighting. Uses a thin band through the middle of the screen.
 * @param {string[]} ids - section ids to observe
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids])

  return active
}
