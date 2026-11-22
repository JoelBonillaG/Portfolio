import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './themeContext.js'

const STORAGE_KEY = 'theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* storage unavailable: fall through to the default */
  }
  return 'dark'
}

/**
 * Provides the active theme ('light' | 'dark') and a toggle.
 * - Dark (midnight + gold) is the default signature look.
 * - Once the user toggles, the choice is persisted and wins.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  // Reflect the active theme on <html> for the `.dark` variant.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore: choice just won't persist */
      }
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ theme, toggleTheme, isDark: theme === 'dark' }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
