<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { DEFAULT_LOCALE, policiesPath } from '../i18n/locales'

const { t } = useI18n()
const route = useRoute()
const policies = computed(() => policiesPath(route.meta.locale || DEFAULT_LOCALE))
</script>

<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="copyright">{{ t('footer.copyright') }}</div>

      <div class="links">
        <a href="mailto:Hello@qyupe.com">Hello@qyupe.com</a>
        <router-link :to="policies" class="policies-link">{{ t('nav.workplacePolicies') }}</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 48px 32px;
}
.inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.copyright { font-size: 14px; color: var(--color-text-muteder); }
.links { display: flex; gap: 24px; align-items: center; }
.links a { font-size: 14px; color: var(--color-text-muteder); }
.policies-link { font-weight: 600; color: var(--color-accent) !important; cursor: pointer; }
</style>
