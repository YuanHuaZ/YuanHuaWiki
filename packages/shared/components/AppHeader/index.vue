<template>
  <header :class="['header', { scrolled }]">
    <div class="header-inner">
      <router-link to="/" class="header-logo">
        <span class="logo-icon">Y</span>
        <span>YuanHuaWiki</span>
      </router-link>
      <nav class="header-actions" aria-label="主导航">
        <a href="#character-list">角色档案</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const scrolled = ref(false)
    function onScroll() { scrolled.value = window.scrollY > 50 }
    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
    return { scrolled }
  }
}
</script>

<style scoped>
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 20px 0; transition: .3s ease; }
.header.scrolled { padding: 12px 0; background: rgba(244,242,237,.92); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(38,54,64,.1); }
.header-inner { display: flex; align-items: center; justify-content: space-between; max-width: 1280px; margin: 0 auto; padding: 0 24px; }
.header-logo { display: flex; align-items: center; gap: 10px; color: #f5f1e9; font: 400 20px Georgia,'Noto Serif SC',serif; letter-spacing: .01em; }.header.scrolled .header-logo { color: #263640; }
.logo-icon { display: flex; align-items: center; justify-content: center; width: 31px; height: 31px; border: 1px solid #d8c59c; color: #d8c59c; font: 400 19px/1 Georgia,serif; }.header-actions a { color: #e8e5de; font-size: 12px; font-weight: 600; letter-spacing: .08em; }.header.scrolled .header-actions a { color: #37434b; }
@media (max-width:768px) { .header-inner { padding: 0 16px; }.header-logo { font-size: 18px; }.logo-icon { width: 29px; height: 29px; font-size: 17px; }.header-actions a { font-size: 11px; } }
</style>
