<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="copyright">© 2026 Qyupe Software Private Limited · A subsidiary of EazyStar Systems Inc.</div>

      <div class="links">
        <a href="mailto:Hello@qyupe.com">Hello@qyupe.com</a>
        <router-link to="/policies" class="policies-link">Workplace Policies</router-link>
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
