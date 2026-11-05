<template>
  <a
    :href="character.hasDetail ? `#/character/${character.id}` : '#'"
    class="character-card"
    :style="{ animationDelay: `${0.045 * index}s` }"
    @click.prevent="onClick"
  >
    <div class="card-plate">
      <div class="card-image-inner" :style="imageStyle">
        <span v-if="!character.image" class="card-image-emoji">👤</span>
      </div>

      <span class="card-index">{{ String(index + 1).padStart(2, '0') }}</span>
      <span class="card-series">{{ character.seriesShort || character.series }}</span>

      <div class="card-hover">
        <span class="hover-label">查看档案</span>
        <span class="hover-arrow" aria-hidden="true">→</span>
      </div>
    </div>

    <div class="card-body">
      <div class="card-heading">
        <h3 class="card-name">{{ character.name }}</h3>
        <span class="card-name-sub">{{ character.nameSub }}</span>
      </div>
      <div class="card-tags">
        <span v-for="(tag, idx) in character.tags" :key="idx" :class="['tag', tag.cls]">{{ tag.text }}</span>
      </div>
    </div>
  </a>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

// 无立绘时的兜底纸面色（当前 12 个角色都有立绘，正常走不到这里）
const FALLBACK_GRADIENTS = [
  'linear-gradient(150deg, #e7e0d1, #d5cbb6)',
  'linear-gradient(150deg, #dfd8c8, #cbc0a8)',
  'linear-gradient(150deg, #e4dccd, #cfc4ad)',
  'linear-gradient(150deg, #e0d9ca, #cdc2ab)'
]

export default {
  name: 'CharacterCard',
  props: {
    character: { type: Object, required: true },
    index: { type: Number, default: 0 }
  },
  setup(props) {
    const router = useRouter()

    // 立绘适配规则来自角色数据（packages/<id>/meta.js 的 cardBg / cardSize），组件不再认 id
    const imageStyle = computed(() => {
      const c = props.character
      if (c.image) {
        return {
          backgroundImage: `url(${c.image})`,
          backgroundSize: c.cardSize || 'cover',
          backgroundPosition: 'top center',
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

<style scoped>
/* ============================================================
   角色卡片 —— 唯一定义处（图版 + 下方著录信息，零圆角细线）
   ============================================================ */
.character-card {
  display: flex;
  flex-direction: column;
  min-width: 0;              /* 允许在窄屏 grid 列内收缩，防止 nowrap 内容撑破 */
  cursor: pointer;
  opacity: 0;
  animation: cardIn .7s var(--ease-out) both;
}

/* ---------- 图版 ---------- */
.card-plate {
  position: relative;
  aspect-ratio: 3 / 4;
  min-width: 0;
  overflow: hidden;
  background: var(--paper-3);
  border: 1px solid var(--rule);
  transition: border-color .45s var(--ease), box-shadow .45s var(--ease);
}
.character-card:hover .card-plate {
  border-color: var(--gold);
  box-shadow: 0 22px 44px -18px rgba(24, 32, 39, .32);
}

.card-image-inner {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  background-repeat: no-repeat;
  transition: transform 1.1s var(--ease-out);
  will-change: transform;
}
.character-card:hover .card-image-inner { transform: scale(1.045); }

.card-image-emoji { font-size: 58px; opacity: .4; }

/* 序号：衬线体，压在图上 */
.card-index {
  position: absolute; top: 12px; left: 13px; z-index: 2;
  font-family: var(--serif);
  font-size: 13px; line-height: 1;
  letter-spacing: .04em;
  color: rgba(255, 255, 255, .9);
  text-shadow: 0 1px 10px rgba(0, 0, 0, .55);
  mix-blend-mode: normal;
}

/* 作品名：底部黑纱上的字距小字 */
.card-series {
  position: absolute; left: 0; right: 0; bottom: 0; z-index: 2;
  padding: 30px 13px 11px;
  background: linear-gradient(to top, rgba(12, 16, 20, .72) 0%, rgba(12, 16, 20, .3) 55%, transparent 100%);
  color: rgba(255, 255, 255, .92);
  font-size: 9.5px; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  transition: opacity .35s var(--ease);
}

/* hover 提示：细线框 + 箭头 */
.card-hover {
  position: absolute; inset: 0; z-index: 3;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  background: rgba(22, 29, 36, .34);
  opacity: 0;
  transition: opacity .4s var(--ease);
}
.character-card:hover .card-hover { opacity: 1; }
.character-card:hover .card-series { opacity: 0; }

.hover-label {
  padding: 9px 20px;
  border: 1px solid rgba(255, 255, 255, .72);
  color: #fff;
  font-size: 11px; font-weight: 600;
  letter-spacing: .16em; text-transform: uppercase;
  transform: translateY(6px);
  transition: transform .45s var(--ease), background .3s, color .3s;
}
.hover-arrow {
  font-size: 14px; color: var(--gold-line);
  transform: translateY(6px);
  transition: transform .45s var(--ease), opacity .45s;
}
.character-card:hover .hover-label,
.character-card:hover .hover-arrow { transform: translateY(0); }
.character-card:hover .hover-label { background: rgba(255,255,255,.96); color: var(--ink); }

/* ---------- 著录信息 ---------- */
.card-body {
  display: flex; flex-direction: column; gap: 10px;
  padding: 15px 2px 0;
  border-top: 1px solid transparent;
  transition: border-color .45s var(--ease);
}
.character-card:hover .card-body { border-top-color: var(--rule); }

.card-heading { display: flex; align-items: baseline; flex-wrap: wrap; gap: 8px; }

.card-name {
  font-family: var(--serif);
  font-size: 20px; font-weight: 400;
  line-height: 1.25;
  color: var(--ink);
  letter-spacing: .01em;
  transition: color .35s var(--ease);
}
.character-card:hover .card-name { color: var(--gold); }

.card-name-sub {
  font-size: 9.5px; font-weight: 600;
  letter-spacing: .1em; text-transform: uppercase;
  color: var(--ink-5);
  line-height: 1.4;
}

.card-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.card-tags .tag {
  padding: 2px 8px;
  font-size: 10px;
  letter-spacing: .06em;
  border-color: var(--rule);
  color: var(--ink-4);
}
/* 实心深色标签在卡片里保留对比 */
.card-tags .tag.tag-dark {
  border-color: var(--ink-3);
  background: transparent;
  color: var(--ink-2);
}
.character-card:hover .card-tags .tag { border-color: var(--rule-2); color: var(--ink-3); }
.character-card:hover .card-tags .tag.tag-dark { border-color: var(--ink); color: var(--ink); }

/* ---------- 响应式 ---------- */
@media (max-width: 860px) {
  .card-name { font-size: 17px; }
  .card-index { font-size: 11px; top: 9px; left: 10px; }
  .card-series { font-size: 9px; padding: 24px 10px 9px; }
  .card-body { padding-top: 12px; gap: 8px; }
}
@media (max-width: 480px) {
  .card-name { font-size: 15px; }
  .card-name-sub { font-size: 8.5px; }
  .card-tags { gap: 4px; }
  .card-tags .tag { font-size: 9px; padding: 2px 6px; }
  .hover-label { padding: 7px 14px; font-size: 10px; }
  .card-series { font-size: 8px; letter-spacing: .08em; }
}

@media (hover: none) {
  .card-hover { display: none; }
}
</style>
