<template>
  <div :class="['lightbox-overlay', { open: visible }]" @click.self="close">
    <div class="lightbox-content">
      <button class="lightbox-close" @click="close">✕</button>
      <img v-if="isImage" :src="src" class="lightbox-img" alt="预览" />
      <div v-else class="lightbox-placeholder" :style="{ background: bgStyle }">
        <span class="lightbox-emoji">{{ icon }}</span>
        <p class="lightbox-label">{{ label }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'GalleryLightbox',
  setup() {
    const visible = ref(false)
    const isImage = ref(false)
    const src = ref('')
    const bgStyle = ref('')
    const icon = ref('')
    const label = ref('')

    function open(item) {
      if (item.isImage) {
        isImage.value = true
        src.value = item.bg
      } else {
        isImage.value = false
        bgStyle.value = item.bg
        icon.value = item.icon || '🖼️'
        label.value = item.label || ''
      }
      visible.value = true
      document.body.style.overflow = 'hidden'
    }

    function close() {
      visible.value = false
      document.body.style.overflow = ''
    }

    return { visible, isImage, src, bgStyle, icon, label, open, close }
  }
}
</script>

<style scoped>
.lightbox-overlay {
  position: fixed; inset: 0; z-index: 2000;
  background: rgba(0,0,0,0.88); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
}
.lightbox-overlay.open { opacity: 1; pointer-events: auto; }

.lightbox-content {
  position: relative; max-width: 90vw; max-height: 90vh;
  border-radius: 16px; overflow: hidden;
}
.lightbox-close {
  position: absolute; top: 12px; right: 12px; z-index: 10;
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(0,0,0,0.6); color: #fff; border: none;
  font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s;
}
.lightbox-close:hover { background: rgba(0,0,0,0.85); }

.lightbox-img {
  display: block; max-width: 80vw; max-height: 80vh;
  object-fit: contain; border-radius: 12px;
}
.lightbox-placeholder {
  width: 500px; height: 400px; max-width: 80vw; max-height: 70vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border-radius: 16px;
}
.lightbox-emoji { font-size: 100px; margin-bottom: 16px; }
.lightbox-label { color: #e2e8f0; font-size: 18px; font-weight: 600; }
</style>
