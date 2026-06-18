import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'theme'

export const ThemeContext = createContext(null)

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return getSystemTheme()
}

/**
 * Provides the active theme ('light' | 'dark') and a toggle.
 * - First load honors the OS preference (no manual choice stored).
 * - Once the user toggles, the choice is persisted and wins.
 * - While there is no stored choice, the app keeps following the OS.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [isManual, setIsManual] = useState(
    () => typeof window !== 'undefined' && !!localStorage.getItem(STORAGE_KEY),
  )

  // Reflect the active theme on <html> for the `.dark` variant.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Follow the OS while the user hasn't made an explicit choice.
  useEffect(() => {
    if (isManual) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [isManual])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
    setIsManual(true)
  }, [])

  const value = useMemo(
    () => ({ theme, toggleTheme, isDark: theme === 'dark' }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
