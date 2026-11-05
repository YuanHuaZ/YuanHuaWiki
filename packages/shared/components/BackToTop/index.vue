<template>
  <button :class="['back-to-top', { visible }]" @click="scrollTop" aria-label="返回顶部">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
      <path d="M12 19V5M5 12l7-7 7 7"></path>
    </svg>
    <span class="bt-label">Top</span>
  </button>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'BackToTop',
  setup() {
    const visible = ref(false)
    function onScroll() { visible.value = window.scrollY > 500 }
    function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { visible, scrollTop }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px; right: 30px;
  z-index: 999;

  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px;
  width: 48px; height: 48px;
  padding: 0;

  border: 1px solid var(--rule-2);
  border-radius: 0;
  background: rgba(248, 245, 238, .92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--ink-2);
  cursor: pointer;

  opacity: 0;
  transform: translateY(14px);
  pointer-events: none;
  transition: opacity .4s var(--ease), transform .4s var(--ease),
              background .3s var(--ease), color .3s var(--ease), border-color .3s var(--ease);
}
.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.bt-label {
  font-family: var(--sans);
  font-size: 7.5px; font-weight: 700;
  letter-spacing: .16em; text-transform: uppercase;
  line-height: 1;
}
.back-to-top:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}
.back-to-top:active { transform: translateY(1px); }

@media (max-width: 640px) {
  .back-to-top { bottom: 18px; right: 18px; width: 44px; height: 44px; }
}
</style>
