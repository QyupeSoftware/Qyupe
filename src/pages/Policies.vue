<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { siteUrl, siteName } from '../site.config'
import { LOCALES, DEFAULT_LOCALE, policiesPath } from '../i18n/locales'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import logoQyupe from '../assets/logo-qyupe.png'

const { t, tm } = useI18n()
const route = useRoute()
const locale = computed(() => route.meta.locale || DEFAULT_LOCALE)

const title = computed(() => `${t('policiesPage.title')} | ${siteName}`)
const description = computed(() => t('meta.policies.description'))
const url = computed(() => siteUrl + policiesPath(locale.value))
const ogImage = siteUrl + logoQyupe

useHead(() => ({
  title: title.value,
  htmlAttrs: { lang: locale.value },
  meta: [
    { name: 'description', content: description.value },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
    { property: 'og:url', content: url.value },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: locale.value },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title.value },
    { name: 'twitter:description', content: description.value },
    { name: 'twitter:image', content: ogImage },
  ],
  link: [
    { rel: 'canonical', href: url.value },
    { rel: 'llms-txt', href: siteUrl + '/llms.txt', type: 'text/markdown' },
    ...LOCALES.map((l) => ({ rel: 'alternate', hreflang: l.code, href: siteUrl + policiesPath(l.code) })),
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl + policiesPath(DEFAULT_LOCALE) },
  ],
}))

const policies = computed(() => tm('policiesPage.items'))
</script>

<template>
  <div class="page">
    <SiteHeader />

    <section class="content">
      <div class="eyebrow">{{ t('policiesPage.eyebrow') }}</div>
      <h1>{{ t('policiesPage.title') }}</h1>
      <p class="intro">{{ t('policiesPage.intro') }}</p>

      <div class="list">
        <div v-for="p in policies" :key="p.num" class="item">
          <div class="num">{{ p.num }}</div>
          <div class="body">
            <h3>{{ p.title }}</h3>
            <template v-if="p.description">
              <p>{{ p.description }}</p>
            </template>
            <template v-else-if="p.pre || p.preHtml">
              <p v-if="p.preHtml" class="mb" v-html="p.preHtml" />
              <p v-else class="mb">{{ p.pre }}</p>
              <pre class="code">{{ p.code }}</pre>
              <p v-if="p.post" class="mt">{{ p.post }}</p>
              <template v-if="p.steps">
                <p class="steps-title">{{ p.stepsTitle }}</p>
                <ol>
                  <li v-for="(s, i) in p.steps" :key="i">{{ s }}</li>
                </ol>
              </template>
            </template>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page { font-family: 'Inter', sans-serif; color: var(--color-text); background: var(--color-bg); min-height: 100vh; }

.eyebrow {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.content { max-width: 1200px; margin: 0 auto; padding: 70px 32px 100px; }
.content h1 {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 20px;
}
.intro {
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-muted);
  margin: 0 0 44px;
  max-width: 680px;
}

.list { display: flex; flex-direction: column; gap: 0; }
.item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 20px;
  padding: 28px 0;
  border-top: 1px solid var(--color-border);
}
.list .item:last-child { border-bottom: 1px solid var(--color-border); }
.num { font-size: 20px; font-weight: 800; color: var(--color-dark-accent); }
.body h3 { font-size: 19px; font-weight: 700; margin: 0 0 8px; }
.body p { font-size: 15px; line-height: 1.7; color: oklch(0.4 0.01 90); margin: 0; max-width: 720px; }
.body p.mb { margin: 0 0 14px; }
.body p.mt { margin: 14px 0 0; }
.body p.steps-title { margin: 14px 0 6px; font-weight: 600; }
.body ol { font-size: 15px; line-height: 1.8; color: oklch(0.4 0.01 90); margin: 0; padding-left: 20px; max-width: 720px; }
.body a { color: var(--color-accent); }

.code {
  background: var(--color-code-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 18px 20px;
  font-family: ui-monospace, monospace;
  font-size: 13.5px;
  line-height: 1.9;
  color: oklch(0.35 0.01 90);
  white-space: pre-wrap;
  max-width: 720px;
}
</style>
