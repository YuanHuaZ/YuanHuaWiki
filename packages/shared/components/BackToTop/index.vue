<template>
  <button :class="['back-to-top', { visible }]" @click="scrollTop" aria-label="返回顶部">⬆️</button>
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
  width: 48px; height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #7e22ce);
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(168,85,247,0.4);
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(168,85,247,0.6);
}
@media (max-width: 480px) {
  .back-to-top { bottom: 20px; right: 20px; width: 44px; height: 44px; }
}
</style>
