import { es } from './translations/es.js'
import { en } from './translations/en.js'

/** Kept apart from the context so editing a translation never recreates it (HMR). */
export const SUPPORTED_LANGS = ['es', 'en']
export const DICTIONARIES = { es, en }
