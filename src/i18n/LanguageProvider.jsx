import { useCallback, useEffect, useMemo, useState } from 'react'
import { DICTIONARIES, SUPPORTED_LANGS } from './dictionaries.js'
import { LanguageContext } from './languageContext.js'

const STORAGE_KEY = 'lang'

/** Browser language when it is Spanish or English; anything else falls back to English. */
function detectBrowserLang() {
  if (typeof navigator === 'undefined') return 'en'
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]
  for (const lang of candidates) {
    const base = lang?.toLowerCase().split('-')[0]
    if (SUPPORTED_LANGS.includes(base)) return base
  }
  return 'en'
}

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (SUPPORTED_LANGS.includes(stored)) return stored
  return detectBrowserLang()
}

/**
 * Provides the active language and its dictionary.
 * First load follows the browser language; an explicit choice is persisted.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const changeLang = useCallback((next) => {
    if (!SUPPORTED_LANGS.includes(next)) return
    localStorage.setItem(STORAGE_KEY, next)
    setLang(next)
  }, [])

  const toggleLang = useCallback(() => {
    changeLang(lang === 'es' ? 'en' : 'es')
  }, [lang, changeLang])

  const value = useMemo(
    () => ({ lang, dict: DICTIONARIES[lang], changeLang, toggleLang }),
    [lang, changeLang, toggleLang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
