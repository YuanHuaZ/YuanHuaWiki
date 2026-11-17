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
  position: fixed; bottom: 34px; right: 34px;
  width: 46px; height: 46px;
  display: flex; align-items: center; justify-content: center;
  background: #1b262e;
  color: #d8bf8e;
  border: 1px solid rgba(201, 168, 106, 0.38);
  border-radius: 2px;
  cursor: pointer;
  opacity: 0; transform: translateY(16px);
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  z-index: 999;
  box-shadow: 0 10px 26px rgba(29, 42, 51, 0.22);
}
.back-to-top.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
.back-to-top:hover {
  background: #121b21;
  color: #fff;
  transform: translateY(-3px);
  border-color: rgba(201, 168, 106, 0.7);
  box-shadow: 0 14px 30px rgba(29, 42, 51, 0.3);
}
.back-to-top:active { transform: translateY(-1px); }
@media (max-width: 480px) {
  .back-to-top { bottom: 20px; right: 18px; width: 42px; height: 42px; }
}
</style>
