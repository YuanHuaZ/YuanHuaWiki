<template>
  <button :class="['back-to-top', { visible }]" @click="scrollTop" aria-label="返回顶部">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'BackToTop',
  setup() {
    const visible = ref(false)

    function onScroll() {
      visible.value = window.scrollY > 500
    }

    function scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { visible, scrollTop }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 44px; height: 44px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #e2e8f0;
  border: 1px solid rgba(255,255,255,0.12);
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  pointer-events: none;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-to-top.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}
.back-to-top:hover {
  background: rgba(168, 85, 247, 0.85);
  border-color: rgba(168, 85, 247, 0.4);
  color: #fff;
  transform: translateY(-3px) scale(1);
  box-shadow: 0 8px 28px rgba(168,85,247,0.45);
}
.back-to-top:active {
  transform: translateY(0) scale(0.95);
}
@media (max-width: 480px) {
  .back-to-top { bottom: 20px; right: 20px; width: 40px; height: 40px; }
}
</style>
