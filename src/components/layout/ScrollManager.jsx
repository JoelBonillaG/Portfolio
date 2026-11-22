import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On route change: scroll to the #hash target if there is one (e.g. coming
 * back to "/#proyectos" from a project page), otherwise to the top.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
