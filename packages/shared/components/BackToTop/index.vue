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
  width: 46px; height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #7c3aed);
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(168,85,247,0.4);
  opacity: 0;
  transform: translateY(20px) scale(0.85);
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
  background: linear-gradient(135deg, #c084fc, #a855f7);
  transform: translateY(-4px) scale(1.06);
  box-shadow: 0 8px 32px rgba(168,85,247,0.6), 0 0 0 6px rgba(168,85,247,0.1);
}
.back-to-top:active {
  transform: translateY(-1px) scale(0.98);
}
@media (max-width: 480px) {
  .back-to-top { bottom: 20px; right: 20px; width: 40px; height: 40px; }
}
</style>
