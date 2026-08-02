export const DEFAULT_LOCALE = 'en'

export const LOCALES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'zh', name: 'Mandarin Chinese', nativeName: '中文' },
]

export const LOCALE_CODES = LOCALES.map((l) => l.code)

export function homePath(locale) {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`
}

export function policiesPath(locale) {
  return locale === DEFAULT_LOCALE ? '/policies' : `/${locale}/policies`
}

export function pathFor(locale, page) {
  return page === 'policies' ? policiesPath(locale) : homePath(locale)
}
