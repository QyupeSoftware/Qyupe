<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DEFAULT_LOCALE, LOCALES, pathFor } from '../i18n/locales'

const route = useRoute()
const router = useRouter()

const currentLocale = computed(() => route.meta.locale || DEFAULT_LOCALE)
const currentPage = computed(() => route.meta.page || 'home')

function onChange(event) {
  const target = pathFor(event.target.value, currentPage.value)
  router.push(target)
}
</script>

<template>
  <select
    class="lang-switcher"
    :value="currentLocale"
    aria-label="Choose language"
    @change="onChange"
  >
    <option v-for="l in LOCALES" :key="l.code" :value="l.code">{{ l.nativeName }}</option>
  </select>
</template>

<style scoped>
.lang-switcher {
  appearance: none;
  background: oklch(0.94 0.006 90);
  border: 1px solid var(--color-border-strong);
  color: oklch(0.35 0.01 90);
  font-size: 13px;
  font-weight: 600;
  padding: 8px 28px 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='%23595a58' stroke-width='1.5' fill='none' fill-rule='evenodd'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
}
.lang-switcher:hover { border-color: var(--color-accent); }
</style>
