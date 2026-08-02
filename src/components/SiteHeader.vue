<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import logoQyupe from '../assets/logo-qyupe.png'
import { DEFAULT_LOCALE, homePath, policiesPath } from '../i18n/locales'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()
const locale = computed(() => route.meta.locale || DEFAULT_LOCALE)
const home = computed(() => homePath(locale.value))
const policies = computed(() => policiesPath(locale.value))
</script>

<template>
  <header class="site-header">
    <div class="inner">
      <router-link :to="home">
        <img :src="logoQyupe" alt="Qyupe Software" class="logo">
      </router-link>

      <nav class="nav">
        <a :href="`${home}#services`">{{ t('nav.services') }}</a>
        <a :href="`${home}#about`">{{ t('nav.about') }}</a>
        <a :href="`${home}#clients`">{{ t('nav.clients') }}</a>
        <a :href="`${home}#contact`">{{ t('nav.contact') }}</a>
        <router-link :to="policies" class="policies-link">{{ t('nav.workplacePolicies') }}</router-link>
        <LanguageSwitcher />
        <a href="mailto:Hello@qyupe.com" class="cta">{{ t('nav.getInTouch') }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: oklch(0.99 0.003 90 / 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}
.inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo { height: 82px; width: 169px; }
.nav {
  display: flex;
  gap: 24px;
  align-items: center;
}
.nav a,
.policies-link {
  font-size: 15px;
  font-weight: 500;
  color: oklch(0.35 0.01 90);
  white-space: nowrap;
}
.policies-link { font-weight: 600; color: var(--color-accent); cursor: pointer; }
.nav a.cta {
  background: var(--color-text);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
}
.nav a.cta:hover { color: white; opacity: 0.9; }

@media (max-width: 980px) {
  .nav { display: none; }
}
</style>
