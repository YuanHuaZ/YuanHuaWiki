<template>
  <div class="toast-container">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['toast', toast.type]"
    >
      <span class="toast-mark" aria-hidden="true">{{ icons[toast.type] }}</span>
      <span class="toast-text">{{ toast.message }}</span>
    </div>
  </div>
</template>

<script>
import { useToast } from '@/util/toast'

export default {
  name: 'ToastContainer',
  setup() {
    const { toasts } = useToast()
    const icons = { success: '✓', info: 'i', error: '!' }
    return { toasts, icons }
  }
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 22px; right: 22px;
  z-index: 3000;
  display: flex; flex-direction: column; gap: 10px;
  pointer-events: none;
}

.toast {
  display: flex; align-items: center; gap: 12px;
  min-width: 220px; max-width: 380px;
  padding: 13px 18px;
  background: var(--night);
  color: var(--night-ink);
  border-left: 2px solid var(--gold);
  box-shadow: 0 18px 40px -14px rgba(15, 20, 25, .5);
  animation: slideDown .4s var(--ease) both;
  font-size: 13px;
}

.toast-mark {
  display: flex; align-items: center; justify-content: center;
  width: 18px; height: 18px; flex-shrink: 0;
  border: 1px solid currentColor;
  font-family: var(--serif);
  font-size: 10px; line-height: 1;
  color: var(--gold-line);
}
.toast-text { line-height: 1.5; letter-spacing: .02em; }

.toast.success { border-left-color: #7fa176; }
.toast.success .toast-mark { color: #9dbd93; }
.toast.info { border-left-color: var(--gold); }
.toast.info .toast-mark { color: var(--gold-line); }
.toast.error { border-left-color: #b4553f; }
.toast.error .toast-mark { color: #d08a76; }

@media (max-width: 560px) {
  .toast-container { top: 12px; right: 12px; left: 12px; }
  .toast { min-width: 0; max-width: none; font-size: 12.5px; padding: 12px 14px; }
}
</style>
