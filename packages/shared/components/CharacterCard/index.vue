<template>
  <a
    :href="character.hasDetail ? `/character/${character.id}` : '#'"
    class="character-card"
    :style="{ animationDelay: `${0.04 * index}s` }"
    @click.prevent="onClick"
  >
    <div class="card-image" :class="{ 'kana-card': character.id === 'kana' }">
      <div class="card-image-inner" :style="imageStyle">
        <span v-if="!character.image" class="card-image-emoji">👤</span>
      </div>
      <div class="card-image-shine"></div>
      <div class="card-image-overlay">
        <span class="card-overlay-btn">查看详情 →</span>
      </div>
      <span class="card-series-badge">{{ character.series }}</span>
    </div>
    <div class="card-body">
      <h3 class="card-name">{{ character.name }}</h3>
      <span class="card-name-sub">{{ character.nameSub }}</span>
      <div class="card-tags">
        <span v-for="(tag, idx) in character.tags" :key="idx" :class="['tag', tag.cls]">{{ tag.text }}</span>
      </div>
    </div>
  </a>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CharacterCard',
  props: {
    character: { type: Object, required: true },
    index: { type: Number, default: 0 }
  },
  setup(props) {
    const router = useRouter()

    const imageStyle = computed(() => {
      if (props.character.image) {
        const bg = props.character.id === 'kana' ? '#fff' : 'transparent'
        return { backgroundImage: `url(${props.character.image})`, backgroundSize: 'cover', backgroundPosition: 'top center', backgroundColor: bg }
      }
      const gradients = [
        'linear-gradient(135deg, #2d1b4e, #1a1030)',
        'linear-gradient(135deg, #1e3a5f, #0f1b2d)',
        'linear-gradient(135deg, #1a2e2e, #0d1a1a)',
        'linear-gradient(135deg, #2e1a2e, #1a1020)',
        'linear-gradient(135deg, #1a2e1a, #0d1a0d)',
        'linear-gradient(135deg, #2e241a, #1a100d)'
      ]
      const num = parseInt(String(props.character.id).replace(/\D/g, '')) || 0
      return { background: gradients[num % gradients.length] }
    })

    function onClick() {
      if (props.character.hasDetail) {
        router.push(`/character/${props.character.id}`)
      } else {
        window.dispatchEvent(new CustomEvent('toast', {
          detail: { message: '角色页面即将上线', type: 'info' }
        }))
      }
    }

    return { imageStyle, onClick }
  }
}
</script>

<style>
.character-card {
  display: flex; flex-direction: column;
  background: #fff; border-radius: 16px; overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  opacity: 0;
  animation: cardIn 0.5s ease-out forwards;
}
.character-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(168,85,247,0.15), 0 4px 12px rgba(0,0,0,0.06);
}
.card-hidden { display: none; }

.card-image {
  position: relative; aspect-ratio: 3/4; overflow: hidden;
  background: #0a0520;
}
.card-image.kana-card { background: #fff; }
.card-image.kana-card .card-image-inner { background-color: #fff; }
.card-image-inner {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.5s ease;
}
.character-card:hover .card-image-inner { transform: scale(1.07); }

/* 光泽扫过效果 */
.card-image-shine {
  position: absolute; inset: 0;
  background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 55%, transparent 60%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}
.character-card:hover .card-image-shine { transform: translateX(100%); }

.card-image-emoji {
  font-size: 64px;
  filter: drop-shadow(0 0 20px rgba(168,85,247,0.3));
  transition: transform 0.3s ease;
}
.character-card:hover .card-image-emoji { transform: scale(1.12); }

.card-image-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%);
  opacity: 0; transition: opacity 0.35s ease;
  display: flex; align-items: flex-end; padding: 16px;
}
.character-card:hover .card-image-overlay { opacity: 1; }

.card-overlay-btn {
  width: 100%; padding: 10px; border-radius: 10px;
  background: rgba(168,85,247,0.85); color: #fff;
  text-align: center; font-size: 13px; font-weight: 600;
  backdrop-filter: blur(4px); letter-spacing: 0.02em;
}

.card-series-badge {
  position: absolute; top: 10px; left: 10px;
  padding: 3px 10px; border-radius: 6px;
  font-size: 10px; font-weight: 600; letter-spacing: 0.04em;
  background: rgba(0,0,0,0.5); color: #e2e8f0;
  backdrop-filter: blur(8px);
}

.card-body { padding: 16px; display: flex; flex-direction: column; gap: 5px; flex: 1; }
.card-name { font-size: 16px; font-weight: 700; color: #0f172a; letter-spacing: -0.01em; }
.card-name-sub { font-size: 11px; color: #94a3b8; font-weight: 500; margin-top: -2px; }
.card-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; padding-top: 4px; }

@media (max-width: 480px) {
  .card-body { padding: 12px; }
  .card-name { font-size: 15px; }
  .card-image-emoji { font-size: 48px; }
}
</style>
