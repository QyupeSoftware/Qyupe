<script setup>
import { useHead } from '@unhead/vue'
import { siteUrl, siteName } from '../site.config'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import logoQyupe from '../assets/logo-qyupe.png'

const title = 'Workplace Policies | Qyupe Software Private Limited'
const description = "EazyStar Systems Inc. and its group companies run on a lean set of workplace policies focused on productivity and minimal management overhead — the same policies Qyupe Software Private Limited follows."
const url = siteUrl + '/policies'
const ogImage = siteUrl + logoQyupe

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'article' },
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
})

const policies = [
  {
    num: '01',
    title: 'Learning first',
    description: 'Everyone learns first and then works on it, instead of learning while doing — reducing errors that can hurt productivity, timelines, and customer satisfaction. This also prevents low motivation caused by repeated failures.',
  },
  {
    num: '02',
    title: 'No negotiation during new hire selections',
    description: 'Maintains fair compensation for everyone within the organization and equal opportunities for all.',
  },
  {
    num: '03',
    title: 'No retention after resignation',
    description: 'So that everyone is motivated to raise their concerns — whether about compensation or work — as soon as they are felt.',
  },
  {
    num: '04',
    title: 'Self-appraisal',
    preHtml: 'Everyone is compensated according to the performance delivered. Everyone is encouraged to continuously self-review their progress and email their self-appraisal to <a href="mailto:self-appraisals@eazystar.us">self-appraisals@eazystar.us</a> with details about improvements achieved since the last appraisal.',
    code: 'Date of Last appraisal-\nCurrent compensation:\nNew learnings since last appraisal:\nOther key achievements:',
    post: 'In case the last appraisal is pending for implementation for financial reasons, the next self appraisal can still be submitted. As soon as the company has the budget, the latest approved self-appraisal will go into effect.',
  },
  {
    num: '05',
    title: 'No smoking',
    description: 'So that everyone feels safe at the workplace.',
  },
  {
    num: '06',
    title: 'No notice period',
    description: 'So that everyone loves working with us and can move on when their mind changes.',
  },
  {
    num: '07',
    title: 'Flexible leaves',
    description: 'So that everyone at our company can manage their work-life balance without stress. Any unavailability needs to be communicated in OOO/Break so our team can mitigate the risk arising from it. All medical and exam leaves are paid unless they fall within the first 30 days of joining. Leaves taken for other reasons are paid if within a reasonable limit. Any abuse of this flexibility will be taken seriously and may be the reason for separation, subject to review by a 5-member committee chosen at random for each incidence.',
  },
  {
    num: '08',
    title: 'Self-payroll',
    description: 'Everyone has to facilitate their payroll by completing the payroll calculation form, marking leaves with the highest integrity, so that payout can be processed by 6 pm on the last working day of the month. Any lapse in integrity may be reason for separation. Everyone is encouraged to mark leaves so that everyone is compensated fairly, without abuse of the open leave policy.',
  },
  {
    num: '09',
    title: 'Availability between 2–10 pm',
  },
  {
    num: '10',
    title: 'PPP — Plan, Progress, Problems',
    pre: "So that work can be planned, progress can be tracked, and any problems can be highlighted to facilitate resolution in time. PPPs also help reference the data during self-appraisal submission and review.",
    code: 'Date\nPlan\nProgress\nProblems',
    stepsTitle: 'Steps to draft the PPP:',
    steps: [
      "Record today's progress with each item on a new line. Highlight any problems faced in the Problems column, including links to GitHub PRs, deployment URLs, LinkedIn posts, YouTube videos, or any other relevant item in Progress/Problems.",
      'Plan the tasks for tomorrow. Create GitHub issues and include the links in the Plan column.',
    ],
  },
  {
    num: '11',
    title: 'Ownership',
    description: 'Qyupe promotes ownership in what we do. Many times, any lapse in assuming ownership has consequences.',
  },
  {
    num: '12',
    title: 'Guardrails against abuse',
    description: 'The company reserves the right to revoke or suspend one or more of the above policies for a specific employee, contractor, or consultant in case of abuse of the flexibility provided.',
  },
]
</script>

<template>
  <div class="page">
    <SiteHeader />

    <section class="content">
      <div class="eyebrow">Our USP</div>
      <h1>Workplace Policies</h1>
      <p class="intro">To manage the organization with prime focus on productivity and least management overhead, EazyStar Systems Inc and its group companies follow these policies. Qyupe follows policy guides set by its parent, EazyStar Systems Inc.</p>

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
