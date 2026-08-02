<script setup>
import logoQyupe from '../assets/logo-qyupe.png'
</script>

<template>
  <header class="site-header">
    <div class="inner">
      <router-link to="/">
        <img :src="logoQyupe" alt="Qyupe Software" class="logo">
      </router-link>

      <nav class="nav">
        <a href="/#services">Services</a>
        <a href="/#about">About</a>
        <a href="/#clients">Clients</a>
        <a href="/#contact">Contact</a>
        <router-link to="/policies" class="policies-link">Workplace Policies</router-link>
        <a href="mailto:Hello@qyupe.com" class="cta">Get in touch</a>
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
  gap: 28px;
  align-items: center;
}
.nav a,
.policies-link {
  font-size: 15px;
  font-weight: 500;
  color: oklch(0.35 0.01 90);
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

@media (max-width: 860px) {
  .nav { display: none; }
}
</style>
