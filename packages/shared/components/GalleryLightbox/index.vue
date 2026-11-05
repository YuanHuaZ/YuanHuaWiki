<template>
  <div :class="['lightbox-overlay', { open: visible }]" @click.self="close">
    <button class="lightbox-close" @click="close" aria-label="关闭">✕</button>

    <div class="lightbox-content">
      <img v-if="isImage" :src="src" class="lightbox-img" alt="预览">
      <div v-else class="lightbox-placeholder" :style="{ background: bgStyle }">
        <span class="lightbox-emoji">{{ icon }}</span>
        <p class="lightbox-label">{{ label }}</p>
      </div>
    </div>

    <p v-if="label && isImage" class="lightbox-caption">{{ label }}</p>
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
      isImage.value = !!item.isImage
      label.value = item.overlay || item.label || ''
      if (item.isImage) {
        src.value = item.bg
      } else {
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
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 18px;
  padding: 40px;
  background: rgba(15, 20, 25, .94);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0; pointer-events: none;
  transition: opacity .35s var(--ease);
}
.lightbox-overlay.open { opacity: 1; pointer-events: auto; }

.lightbox-content {
  position: relative;
  display: flex;
  padding: 10px;
  border: 1px solid rgba(244, 239, 228, .18);
  background: rgba(22, 29, 36, .6);
  transform: scale(.98);
  transition: transform .4s var(--ease);
}
.lightbox-overlay.open .lightbox-content { transform: scale(1); }

.lightbox-close {
  position: absolute; top: 26px; right: 26px; z-index: 10;
  width: 42px; height: 42px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid rgba(244, 239, 228, .28);
  background: transparent;
  color: rgba(244, 239, 228, .8);
  font-size: 15px; line-height: 1;
  cursor: pointer;
  transition: border-color .25s, color .25s, background .25s;
}
.lightbox-close:hover {
  border-color: var(--gold-line);
  color: var(--gold-line);
}

.lightbox-img {
  display: block;
  max-width: 78vw; max-height: 74vh;
  object-fit: contain;
}

.lightbox-placeholder {
  width: 480px; height: 380px;
  max-width: 78vw; max-height: 70vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 14px;
}
.lightbox-emoji { font-size: 76px; }
.lightbox-label {
  font-family: var(--serif);
  font-size: 17px;
  color: var(--night-ink);
  letter-spacing: .02em;
}

.lightbox-caption {
  font-size: 10px; font-weight: 600;
  letter-spacing: .18em; text-transform: uppercase;
  color: rgba(244, 239, 228, .42);
}

@media (max-width: 640px) {
  .lightbox-overlay { padding: 18px; gap: 12px; }
  .lightbox-close { top: 12px; right: 12px; width: 38px; height: 38px; }
  .lightbox-img { max-width: 88vw; max-height: 70vh; }
}
</style>
