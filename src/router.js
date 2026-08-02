import Home from './pages/Home.vue'
import Policies from './pages/Policies.vue'
import { DEFAULT_LOCALE, LOCALES, homePath, policiesPath } from './i18n/locales'

export const routes = LOCALES.flatMap(({ code }) => [
  {
    path: homePath(code),
    component: Home,
    meta: { locale: code, page: 'home' },
  },
  {
    path: policiesPath(code),
    component: Policies,
    meta: { locale: code, page: 'policies' },
  },
])

export { DEFAULT_LOCALE }
