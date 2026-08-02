<script setup>
import { useHead } from '@unhead/vue'
import { siteUrl, siteName } from '../site.config'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import logoQyupe from '../assets/logo-qyupe.png'
import logoEazyPetition from '../assets/logo-eazypetition.png'
import logoTrackMyPetition from '../assets/logo-trackmypetition.png'
import logoSaasmart from '../assets/logo-saasmart.png'
import logoEazystar from '../assets/logo-eazystar.png'

const title = 'Qyupe Software Private Limited | Software, Bookkeeping & US Immigration Paralegal Services'
const description = 'Qyupe Software Private Limited delivers custom development, dependable bookkeeping, and US immigration paralegal support to startups and growing businesses — under one accountable team.'
const url = siteUrl + '/'
const ogImage = siteUrl + logoQyupe

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: siteName },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ],
  link: [
    { rel: 'canonical', href: url },
    { rel: 'llms-txt', href: siteUrl + '/llms.txt', type: 'text/markdown' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url,
        logo: ogImage,
        email: 'Hello@qyupe.com',
        description,
        parentOrganization: {
          '@type': 'Organization',
          name: 'EazyStar Systems Inc.',
          url: 'https://eazystar.us',
        },
      }),
    },
  ],
})

const services = [
  { icon: '◆', title: 'Software Development', text: 'Custom web, mobile, and cloud applications — architecture, build, and post-launch support with AI-assisted delivery for speed and quality.' },
  { icon: '▤', title: 'Bookkeeping', text: 'Accurate, up-to-date books for US businesses — reconciliations, reporting, and payroll support so your financials are always audit-ready.' },
  { icon: '✎', title: 'US Immigration Paralegal Services', text: 'Petition preparation and case-tracking support for US immigration filings, working alongside attorneys to keep every case organized and on schedule.' },
  { icon: '✓', title: 'US Company Compliance', text: 'Registered agent support, annual filings, and regulatory upkeep to keep your US entity in good standing as it grows.' },
  { icon: '▲', title: 'PR', text: 'Press outreach and narrative building to help you get noticed as you scale.' },
]

const clients = [
  { logo: logoEazyPetition, name: 'eazyPetition', desc: 'US Immigration petition platform', href: 'https://eazypetition.com', label: 'eazypetition.com ↗' },
  { logo: logoTrackMyPetition, name: 'trackmypetition', desc: 'USCIS Petition tracking platform', href: 'https://trackmypetition.com', label: 'trackmypetition.com ↗' },
  { logo: logoSaasmart, name: 'saasmart', desc: 'Simplifying Asset Accumulation and Shielding', href: 'https://saasmart.us', label: 'saasmart.us ↗' },
  { logo: logoEazystar, name: 'eazystar', desc: 'EazyStar Systems Inc.', href: 'https://eazystar.us', label: 'eazystar.us ↗' },
]
</script>

<template>
  <div class="page">
    <SiteHeader />

    <section class="hero">
      <div class="hero-inner">
        <div class="badge">✦ Software · Bookkeeping · Compliance · Immigration Paralegal · PR</div>
        <h1>Every service you need to scale faster, under one roof</h1>
        <p>{{ description }}</p>
        <div class="cta-row">
          <a href="mailto:Hello@qyupe.com?subject=Project%20inquiry" class="btn-primary">Connect with us</a>
          <a href="#services" class="btn-secondary">Explore services</a>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="section-head">
        <div class="eyebrow">What we do</div>
        <h2>Three services, one dependable team</h2>
        <p>From shipping product to keeping the books straight to navigating US immigration paperwork — we handle the operational work so you can focus on growth.</p>
      </div>
      <div class="services-grid">
        <div v-for="s in services" :key="s.title" class="card">
          <div class="icon">{{ s.icon }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="about-inner">
        <div>
          <div class="eyebrow eyebrow-dark">Who we are</div>
          <h2>A subsidiary built on a simple operating system</h2>
          <p>Qyupe Software Private Limited is a subsidiary of EazyStar Systems Inc., a US-based company. We run on a lean, transparent set of workplace policies designed for maximum productivity and minimum management overhead — policies we're proud to make public.</p>
          <router-link to="/policies" class="policies-link">Read our Workplace Policies →</router-link>
        </div>
        <div class="stats-grid">
          <div class="stat">
            <div class="stat-value">100%</div>
            <div class="stat-label">Commitment</div>
          </div>
          <div class="stat">
            <div class="stat-value">Agile</div>
            <div class="stat-label">+ AI-assisted delivery</div>
          </div>
          <div class="stat stat-wide">
            <div class="stat-value">US-based parent</div>
            <div class="stat-label">EazyStar Systems Inc.</div>
          </div>
        </div>
      </div>
    </section>

    <section id="clients" class="clients">
      <div class="section-head">
        <div class="eyebrow">Our clients</div>
        <h2>Trusted by the EazyStar group of companies</h2>
        <p>We build and support the platforms behind these products.</p>
      </div>
      <div class="clients-grid">
        <div v-for="c in clients" :key="c.name" class="client-card">
          <img :src="c.logo" :alt="c.name" class="client-logo">
          <div class="client-name">{{ c.name }}</div>
          <div class="client-desc">{{ c.desc }}</div>
          <a :href="c.href" class="client-link">{{ c.label }}</a>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact-box">
        <div>
          <h2>Ready to work together?</h2>
          <p>Tell us about your project, your books, or your case — we'll follow up within one business day.</p>
        </div>
        <div class="contact-cta">
          <a href="mailto:Hello@qyupe.com">Hello@qyupe.com</a>
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
  margin-bottom: 10px;
}
.eyebrow-dark { color: var(--color-dark-accent); }

/* Hero */
.hero { max-width: 1200px; margin: 0 auto; padding: 100px 32px 80px; }
.hero-inner { max-width: 720px; }
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-accent-soft-bg);
  color: var(--color-accent-soft-text);
  padding: 7px 14px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
}
.hero h1 {
  font-size: 52px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 22px;
}
.hero p {
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin: 0 0 34px;
  max-width: 520px;
}
.cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 15px 28px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: 700;
}
.btn-primary:hover { color: white; }
.btn-secondary {
  border: 1px solid var(--color-border-strong);
  color: var(--color-text);
  padding: 15px 28px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: 600;
}

/* Services */
.services { max-width: 1200px; margin: 0 auto; padding: 80px 32px; }
.section-head { max-width: 560px; margin-bottom: 48px; }
.section-head h2 { font-size: 36px; font-weight: 800; letter-spacing: -0.02em; margin: 0 0 14px; }
.section-head p { font-size: 16px; color: var(--color-text-muted); line-height: 1.6; margin: 0; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.card {
  background: white;
  border: 1px solid var(--color-border-strong);
  border-radius: 18px;
  padding: 32px;
}
.card .icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--color-accent-soft-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.card h3 { font-size: 20px; font-weight: 700; margin: 0 0 10px; }
.card p { font-size: 15px; line-height: 1.6; color: var(--color-text-muted); margin: 0; }

/* About */
.about { background: var(--color-dark-bg); color: white; padding: 80px 32px; }
.about-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-inner h2 { font-size: 32px; font-weight: 800; letter-spacing: -0.02em; margin: 0 0 18px; }
.about-inner p { font-size: 16px; line-height: 1.7; color: var(--color-dark-text-muted); margin: 0 0 16px; }
.about .policies-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 2px solid var(--color-accent);
  padding-bottom: 2px;
}
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.stat { background: var(--color-dark-card); border-radius: 14px; padding: 22px; }
.stat-wide { grid-column: 1 / 3; }
.stat-value { font-size: 26px; font-weight: 800; color: var(--color-dark-accent); }
.stat-label { font-size: 13px; color: var(--color-dark-text-muteder); margin-top: 4px; }

/* Clients */
.clients { max-width: 1200px; margin: 0 auto; padding: 80px 32px; }
.clients-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.client-card {
  background: white;
  border: 1px solid var(--color-border-strong);
  border-radius: 16px;
  padding: 26px;
}
.client-logo { height: 28px; width: auto; max-width: 100%; object-fit: contain; margin-bottom: 20px; }
.client-name { font-weight: 700; font-size: 16px; margin-bottom: 4px; }
.client-desc { font-size: 13px; color: var(--color-text-muteder); margin-bottom: 8px; }
.client-link { font-size: 13px; font-weight: 600; }

/* Contact */
.contact { max-width: 1200px; margin: 0 auto; padding: 80px 32px 100px; }
.contact-box {
  background: var(--color-accent);
  border-radius: 24px;
  padding: 60px;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 40px;
  align-items: center;
}
.contact-box h2 { font-size: 32px; font-weight: 800; letter-spacing: -0.02em; color: white; margin: 0 0 12px; }
.contact-box p { font-size: 16px; color: oklch(0.95 0.02 200); margin: 0; line-height: 1.6; }
.contact-cta { display: flex; justify-content: flex-end; }
.contact-cta a {
  background: white;
  color: var(--color-accent-soft-text);
  padding: 16px 30px;
  border-radius: 9px;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 860px) {
  .hero h1 { font-size: 38px; }
  .services-grid { grid-template-columns: 1fr; }
  .about-inner { grid-template-columns: 1fr; }
  .clients-grid { grid-template-columns: repeat(2, 1fr); }
  .contact-box { grid-template-columns: 1fr; padding: 36px; }
  .contact-cta { justify-content: flex-start; }
}
</style>
