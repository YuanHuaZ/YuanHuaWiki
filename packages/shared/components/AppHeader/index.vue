<template>
  <header :class="['header', { scrolled }]">
    <div class="header-inner">
      <router-link to="/" class="header-logo">
        <span class="logo-icon">🎮</span>
        <span>YuanHuaWiki</span>
      </router-link>
      <div class="header-actions"></div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const scrolled = ref(false)

    function onScroll() {
      scrolled.value = window.scrollY > 50
    }

    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { scrolled }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 16px 0;
}
.header.scrolled {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  padding: 10px 0;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
.header-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  transition: color 0.3s;
}
.header.scrolled .header-logo { color: #1e293b; }
.logo-icon {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
@media (max-width: 768px) {
  .header-inner { padding: 0 16px; }
}
</style>
