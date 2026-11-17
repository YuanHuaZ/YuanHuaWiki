<template>
  <a
    :href="character.hasDetail ? `#/character/${character.id}` : '#'"
    class="character-card"
    :style="{ animationDelay: `${0.04 * index}s` }"
    @click.prevent="onClick"
  >
    <div class="card-image">
      <div class="card-image-inner" :style="imageStyle">
        <span v-if="!character.image" class="card-image-emoji">👤</span>
      </div>
      <div class="card-image-shine"></div>
      <div class="card-image-overlay">
        <span class="card-overlay-btn">查看档案 →</span>
      </div>
      <span class="card-series-badge">{{ character.seriesShort || character.series }}</span>
      <span class="card-index">{{ String(index + 1).padStart(2, '0') }}</span>
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

// 无立绘时的兜底渐变（当前角色都有立绘，正常走不到这里）
const FALLBACK_GRADIENTS = [
  'linear-gradient(150deg, #2b3540, #141c23)',
  'linear-gradient(150deg, #33302a, #191713)',
  'linear-gradient(150deg, #2a3336, #141b1d)',
  'linear-gradient(150deg, #332e35, #191518)',
  'linear-gradient(150deg, #2c3330, #141b18)',
  'linear-gradient(150deg, #34302b, #1a1714)'
]

export default {
  name: 'CharacterCard',
  props: {
    character: { type: Object, required: true },
    index: { type: Number, default: 0 }
  },
  setup(props) {
    const router = useRouter()

    // 立绘适配规则来自角色数据（packages/<id>/meta.js 的 cardBg / cardSize / cardPos），组件不再认 id
    const imageStyle = computed(() => {
      const c = props.character
      if (c.image) {
        return {
          backgroundImage: `url(${c.image})`,
          backgroundSize: c.cardSize || 'cover',
          backgroundPosition: c.cardPos || 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: c.cardBg || 'transparent'
        }
      }
      return { background: FALLBACK_GRADIENTS[props.index % FALLBACK_GRADIENTS.length] }
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

<style>/* 角色卡片 —— 画册藏品卡：细白框 + 编号 + 金色悬停 */
.character-card {
  position: relative;
  display: flex; flex-direction: column;
  background: var(--surface, #fffdf8);
  border: 1px solid var(--rule, #dcd5c7);
  border-radius: var(--radius, 3px);
  overflow: hidden;
  box-shadow: none;
  cursor: pointer;
  opacity: 0;
  animation: cardIn 0.55s cubic-bezier(0.33, 1, 0.68, 1) forwards;
  transition: transform 0.45s var(--ease, cubic-bezier(0.33,1,0.68,1)),
              box-shadow 0.45s var(--ease, cubic-bezier(0.33,1,0.68,1)),
              border-color 0.45s var(--ease, cubic-bezier(0.33,1,0.68,1));
}
.character-card:hover {
  transform: translateY(-6px);
  border-color: var(--gold-line, rgba(168, 130, 63, 0.34));
  box-shadow: 0 22px 44px rgba(29, 42, 51, 0.13), 0 2px 6px rgba(29, 42, 51, 0.05);
}

/* 立绘区 */
.card-image { position: relative; aspect-ratio: 3 / 4; overflow: hidden; background: #161f26; }
.card-image-inner {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.7s var(--ease, cubic-bezier(0.33,1,0.68,1));
}
.character-card:hover .card-image-inner { transform: scale(1.045); }

/* 底部压暗，保证徽标与按钮可读 */
.card-image::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(to top, rgba(18, 26, 32, 0.62) 0%, rgba(18, 26, 32, 0.08) 34%, transparent 62%);
}

/* 光泽扫过 */
.card-image-shine {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background: linear-gradient(105deg, transparent 42%, rgba(255, 255, 255, 0.16) 48%, rgba(255, 255, 255, 0.05) 54%, transparent 60%);
  transform: translateX(-120%);
  transition: transform 0.9s ease;
}
.character-card:hover .card-image-shine { transform: translateX(120%); }

.card-image-emoji { font-size: 56px; opacity: 0.75; }

/* 悬停按钮 */
.card-image-overlay {
  position: absolute; inset: 0; z-index: 3;
  display: flex; align-items: flex-end; padding: 16px;
  opacity: 0; transition: opacity 0.35s ease;
}
.character-card:hover .card-image-overlay { opacity: 1; }
.card-overlay-btn {
  width: 100%; padding: 10px; text-align: center;
  font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink, #1d2a33);
  background: rgba(245, 242, 234, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  backdrop-filter: blur(6px);
  transform: translateY(6px);
  transition: transform 0.4s var(--ease, cubic-bezier(0.33,1,0.68,1)), background 0.3s ease;
}
.character-card:hover .card-overlay-btn { transform: translateY(0); }
.card-overlay-btn:hover { background: #fff; }

/* 作品徽标 */
.card-series-badge {
  position: absolute; top: 12px; left: 12px; z-index: 3;
  max-width: calc(100% - 62px);
  padding: 4px 9px;
  font-size: 9px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
  color: rgba(245, 242, 234, 0.92);
  background: rgba(18, 26, 32, 0.42);
  border: 1px solid rgba(245, 242, 234, 0.22);
  backdrop-filter: blur(6px);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

/* 编号 */
.card-index {
  position: absolute; top: 9px; right: 12px; z-index: 3;
  font-family: var(--serif, Georgia, serif);
  font-size: 15px; font-style: italic;
  color: rgba(245, 242, 234, 0.72);
  letter-spacing: 0.06em; text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
}

/* 文字区 */
.card-body {
  padding: 16px 16px 15px;
  display: flex; flex-direction: column; gap: 5px; flex: 1;
  border-top: 1px solid var(--rule, #dcd5c7);
}
.card-name {
  font-family: var(--serif, Georgia, serif);
  font-size: 18px; font-weight: 400; color: var(--ink, #1d2a33);
  letter-spacing: 0.02em; line-height: 1.25;
  transition: color 0.3s ease;
}
.character-card:hover .card-name { color: var(--gold, #a8823f); }
.card-name-sub {
  font-size: 10px; font-weight: 600; color: var(--ink-4, #98a2ab);
  letter-spacing: 0.14em; text-transform: uppercase;
  margin-top: -1px;
}
.card-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; padding-top: 10px; }
.character-card:hover .tag { border-color: var(--gold-line, rgba(168,130,63,0.34)); }

@media (max-width: 480px) {
  .card-body { padding: 11px 11px 12px; }
  .card-name { font-size: 15px; }
  .card-name-sub { font-size: 9px; }
  .card-image-emoji { font-size: 40px; }
  .card-tags { gap: 4px; padding-top: 7px; }
  .card-series-badge { top: 8px; left: 8px; padding: 3px 7px; font-size: 8px; }
  .card-index { top: 6px; right: 8px; font-size: 12px; }
  .card-image-overlay { padding: 10px; }
}
</style>
