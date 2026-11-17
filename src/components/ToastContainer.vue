<template>
  <div class="toast-container">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['toast', toast.type]"
    >
      <span>{{ icons[toast.type] }}</span>
      {{ toast.message }}
    </div>
  </div>
</template>

<script>
import { useToast } from '@/util/toast'

export default {
  name: 'ToastContainer',
  setup() {
    const { toasts } = useToast()
    const icons = { success: '✅', info: 'ℹ️', error: '❌' }
    return { toasts, icons }
  }
}
</script>

<style scoped>
.toast-container { position: fixed; top: 26px; right: 26px; z-index: 3000; display: flex; flex-direction: column; gap: 10px; }
.toast {
  display: flex; align-items: center; gap: 10px;
  padding: 13px 20px 13px 18px;
  background: #1b262e;
  color: #f2ede2;
  border: 1px solid rgba(201, 168, 106, 0.32);
  border-left: 2px solid #c9a86a;
  border-radius: 2px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
  box-shadow: 0 16px 34px rgba(20, 28, 34, 0.32);
  animation: slideDown 0.32s cubic-bezier(0.33, 1, 0.68, 1);
}
.toast span { font-size: 13px; opacity: 0.9; }
.toast.success { border-left-color: #6f9c6a; }
.toast.info { border-left-color: #c9a86a; }
.toast.error { border-left-color: #b4534b; }
@media (max-width: 480px) {
  .toast-container { top: 12px; right: 12px; left: 12px; }
  .toast { font-size: 12.5px; padding: 11px 15px; }
}
</style>
