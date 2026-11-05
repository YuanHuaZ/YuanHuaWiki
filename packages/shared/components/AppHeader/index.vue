<template>
  <header :class="['header', variant, { scrolled }]">
    <div class="header-inner">
      <router-link to="/" class="header-logo">
        <span class="logo-mark">Y</span>
        <span class="logo-text">
          <span class="logo-name">YuanHua<em>Wiki</em></span>
          <span class="logo-sub">Character Archive</span>
        </span>
      </router-link>

      <nav class="header-nav" aria-label="主导航">
        <a href="#character-list" class="nav-link">角色档案</a>
        <a href="https://github.com/YuanHuaZ/YuanHuaWiki" target="_blank" rel="noopener" class="nav-link">GitHub</a>
      </nav>
    </div>
    <div class="header-progress" :style="{ transform: `scaleX(${progress})` }"></div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  props: {
    // auto: 透明浮于深色扉页之上，滚动后转纸面 | solid: 常驻纸面（浅底页面用）
    variant: { type: String, default: 'auto' }
  },
  setup() {
    const scrolled = ref(false)
    const progress = ref(0)

    function onScroll() {
      const y = window.scrollY
      scrolled.value = y > 40
      const max = document.documentElement.scrollHeight - window.innerHeight
      progress.value = max > 0 ? Math.min(y / max, 1) : 0
    }

    onMounted(() => {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    })

    return { scrolled, progress }
  }
}
</script>

<style scoped>
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 22px 0;
  transition: padding .4s var(--ease), background .4s var(--ease), border-color .4s var(--ease);
  border-bottom: 1px solid transparent;
}
.header-inner {
  display: flex; align-items: center; justify-content: space-between;
  max-width: var(--page); margin: 0 auto; padding: 0 var(--gutter);
}

/* ---- logo ---- */
.header-logo { display: flex; align-items: center; gap: 12px; }
.logo-mark {
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px; flex-shrink: 0;
  border: 1px solid var(--gold-line);
  color: var(--gold-line);
  font-family: var(--serif); font-size: 17px; line-height: 1;
  transition: background .35s var(--ease), color .35s var(--ease);
}
.logo-text { display: flex; flex-direction: column; gap: 1px; }
.logo-name {
  font-family: var(--serif); font-size: 19px; letter-spacing: .01em;
  color: var(--night-ink); transition: color .35s var(--ease);
}
.logo-name em { font-style: italic; color: var(--gold-line); }
.logo-sub {
  font-size: 8.5px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
  color: rgba(244,239,228,.42); transition: color .35s var(--ease);
}

/* ---- nav ---- */
.header-nav { display: flex; align-items: center; gap: 28px; }
.nav-link {
  position: relative;
  font-size: 11.5px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase;
  color: rgba(244,239,228,.78);
  padding: 4px 0;
  transition: color .3s var(--ease);
}
.nav-link::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
  background: var(--gold-line);
  transform: scaleX(0); transform-origin: right;
  transition: transform .4s var(--ease);
}
.nav-link:hover { color: var(--gold-line); }
.nav-link:hover::after { transform: scaleX(1); transform-origin: left; }

/* ---- scrolled / solid ---- */
.header.scrolled,
.header.solid {
  padding: 12px 0;
  background: rgba(248,245,238,.9);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border-bottom-color: var(--rule);
}
.header.scrolled .logo-mark,
.header.solid .logo-mark { border-color: var(--gold); color: var(--gold); }
.header.scrolled .logo-name,
.header.solid .logo-name { color: var(--ink); }
.header.scrolled .logo-name em,
.header.solid .logo-name em { color: var(--gold); }
.header.scrolled .logo-sub,
.header.solid .logo-sub { color: var(--ink-5); }
.header.scrolled .nav-link,
.header.solid .nav-link { color: var(--ink-3); }
.header.scrolled .nav-link:hover,
.header.solid .nav-link:hover { color: var(--ink); }
.header.scrolled .nav-link::after,
.header.solid .nav-link::after { background: var(--gold); }

/* ---- 金色阅读进度线 ---- */
.header-progress {
  position: absolute; left: 0; right: 0; bottom: -1px; height: 1px;
  background: var(--gold);
  transform-origin: left; transform: scaleX(0);
  transition: transform .12s linear, opacity .3s;
  opacity: 0;
}
.header.scrolled .header-progress { opacity: 1; }

@media (max-width: 900px) {
  .header { padding: 16px 0; }
  .logo-sub { display: none; }
  .logo-name { font-size: 18px; }
  .header-nav { gap: 20px; }
  .nav-link { font-size: 10.5px; letter-spacing: .1em; }
}
@media (max-width: 560px) {
  .logo-mark { width: 30px; height: 30px; font-size: 15px; }
  .logo-name { font-size: 16px; }
  /* 极窄屏只留站名，导航收起（logo 即回首页） */
  .header-nav { display: none; }
}
</style>
