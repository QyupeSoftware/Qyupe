import { createI18n } from 'vue-i18n'
import { DEFAULT_LOCALE, LOCALE_CODES } from './locales'

import en from './locales/en.json'
import es from './locales/es.json'
import hi from './locales/hi.json'
import fr from './locales/fr.json'
import pt from './locales/pt.json'
import ta from './locales/ta.json'
import te from './locales/te.json'
import zh from './locales/zh.json'

const messages = { en, es, hi, fr, pt, ta, te, zh }

export function createAppI18n() {
  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    availableLocales: LOCALE_CODES,
    messages,
  })
}
