<template>
  <div class="notfound-page">
    <AppHeader />

    <section class="nf-section">
      <div class="container nf-inner">
        <p class="nf-eyebrow">Not Found</p>
        <h1 class="nf-code">404</h1>
        <h2 class="nf-title">这一页档案还没被写下</h2>
        <p class="nf-desc">你寻找的角色或页面不存在，也许它还在某个平行世界里，等着被记录。</p>
        <div class="nf-actions">
          <router-link to="/" class="nf-btn">← 返回角色列表</router-link>
        </div>
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

<style>
.notfound-page { background: #f4f2ed; min-height: 100vh; display: flex; flex-direction: column; }
.nf-section { flex: 1; display: flex; align-items: center; padding: 80px 0 110px; }
.nf-inner { text-align: center; max-width: 560px; }
.nf-eyebrow { margin-bottom: 10px; color: #9c7953; font: 700 10px Inter, sans-serif; letter-spacing: .18em; text-transform: uppercase; }
.nf-code { font: 400 clamp(88px, 18vw, 148px)/1 Georgia, 'Noto Serif SC', serif; color: #d9d3c8; letter-spacing: .02em; }
.nf-title { margin-top: 6px; color: #202d37; font: 400 clamp(24px, 3.4vw, 34px)/1.3 Georgia, 'Noto Serif SC', serif; }
.nf-desc { margin-top: 16px; color: #75808a; font-size: 14.5px; line-height: 1.9; }
.nf-actions { margin-top: 30px; }
.nf-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 26px; border: 1px solid #263640; color: #263640; background: transparent; font-size: 14px; font-weight: 600; letter-spacing: .02em; transition: all .25s ease; }
.nf-btn:hover { background: #263640; color: #f4f2ed; }
</style>
