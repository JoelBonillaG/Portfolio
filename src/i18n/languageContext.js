import { createContext } from 'react'
import { es } from './translations/es.js'
import { en } from './translations/en.js'

export const SUPPORTED_LANGS = ['es', 'en']
export const DICTIONARIES = { es, en }

/** Language context: `{ lang, dict, changeLang, toggleLang }`. */
export const LanguageContext = createContext(null)
