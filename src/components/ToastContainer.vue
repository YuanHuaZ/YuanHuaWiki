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
.toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.toast {
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  animation: slideDown 0.3s ease-out;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  gap: 8px;
}
.toast.success { background: #16a34a; }
.toast.info { background: #a855f7; }
.toast.error { background: #ef4444; }
@media (max-width: 480px) {
  .toast-container { top: 12px; right: 12px; left: 12px; }
  .toast { font-size: 13px; padding: 12px 16px; }
}
</style>
