import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, DEFAULT_LOCALE } from './router'
import { createAppI18n } from './i18n'
import './style.css'

export const createApp = ViteSSG(App, { routes }, ({ app, router }) => {
  const i18n = createAppI18n()
  app.use(i18n)

  router.beforeEach((to) => {
    const locale = to.meta.locale || DEFAULT_LOCALE
    i18n.global.locale.value = locale
  })
})
