<template>
  <div class="notfound-page">
    <AppHeader variant="solid" />

    <section class="nf-section">
      <div class="container nf-inner">
        <p class="nf-eyebrow">Error 404</p>
        <h1 class="nf-code">404</h1>
        <h2 class="nf-title">这一页档案还没被写下</h2>
        <p class="nf-desc">你寻找的角色或页面不存在，也许它还在某个平行世界里，等着被记录。</p>
        <router-link to="/" class="nf-btn">
          <span>返回角色档案</span>
          <span class="nf-arrow" aria-hidden="true">→</span>
        </router-link>
      </div>
    </section>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import AppHeader from '@packages/shared/components/AppHeader/index.vue'
import AppFooter from '@packages/shared/components/AppFooter/index.vue'
import BackToTop from '@packages/shared/components/BackToTop/index.vue'

export default {
  name: 'NotFound',
  components: { AppHeader, AppFooter, BackToTop }
}
</script>

<style scoped>
.notfound-page {
  min-height: 100vh;
  display: flex; flex-direction: column;
  background: var(--paper);
}
.nf-section {
  flex: 1;
  display: flex; align-items: center;
  padding: 160px 0 120px;
}
.nf-inner { max-width: 580px; margin: 0 auto; }

.nf-eyebrow {
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .26em; text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 14px;
}
.nf-code {
  font-family: var(--serif);
  font-size: clamp(86px, 16vw, 152px);
  font-weight: 400;
  line-height: .92;
  letter-spacing: .01em;
  color: var(--paper-4);
  opacity: .9;
}
.nf-title {
  margin-top: 18px;
  font-family: var(--serif);
  font-size: clamp(23px, 3.2vw, 33px);
  font-weight: 400;
  line-height: 1.4;
  color: var(--ink);
}
.nf-desc {
  margin-top: 16px;
  max-width: 420px;
  font-size: 14px;
  line-height: 1.95;
  color: var(--ink-3);
}
.nf-btn {
  display: inline-flex; align-items: center; gap: 14px;
  margin-top: 34px;
  padding: 12px 26px;
  border: 1px solid var(--ink);
  font-size: 11px; font-weight: 700;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--ink);
  transition: background .3s var(--ease), color .3s var(--ease);
}
.nf-btn:hover { background: var(--ink); color: var(--paper); }
.nf-arrow { font-size: 13px; transition: transform .3s var(--ease); }
.nf-btn:hover .nf-arrow { transform: translateX(4px); }

@media (max-width: 640px) {
  .nf-section { padding: 130px 0 88px; }
}
</style>
