import { useContext } from 'react'
import { LanguageContext } from './languageContext.js'

/**
 * Access translations and the active language.
 *
 * @returns {{ t: (path: string) => string, lang: string, dict: object,
 *            changeLang: (l: string) => void, toggleLang: () => void }}
 *
 * `t('projects.filters.all')` resolves a dotted path in the active dictionary
 * and falls back to the key itself when a translation is missing.
 */
export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx)
    throw new Error('useTranslation must be used within a LanguageProvider')

  const { dict, lang, changeLang, toggleLang } = ctx

  const t = (path) => {
    const value = path
      .split('.')
      .reduce((acc, key) => (acc == null ? undefined : acc[key]), dict)
    return value ?? path
  }

  return { t, lang, dict, changeLang, toggleLang }
}
