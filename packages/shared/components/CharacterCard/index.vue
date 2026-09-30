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
        <span class="card-overlay-btn">查看详情 →</span>
      </div>
      <span class="card-series-badge">{{ character.seriesShort || character.series }}</span>
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

// 无立绘时的兜底渐变（当前 12 个角色都有立绘，正常走不到这里）
const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #2d1b4e, #1a1030)',
  'linear-gradient(135deg, #1e3a5f, #0f1b2d)',
  'linear-gradient(135deg, #1a2e2e, #0d1a1a)',
  'linear-gradient(135deg, #2e1a2e, #1a1020)',
  'linear-gradient(135deg, #1a2e1a, #0d1a0d)',
  'linear-gradient(135deg, #2e241a, #1a100d)'
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
      // 兜底渐变按卡片序号轮换
      // （原实现按 id 里的数字取模，但 12 个 id 全是纯字母，parseInt 恒为 0，只会取到第一条）
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

<style>/* 角色卡片样式（唯一定义处）
   原先同时写在 src/styles/global.css 与本组件里，global.css 用 !important 压制组件，
   两处取值还不一致（圆角、阴影、过渡、缩放比例等），改一处常常看不出效果。
   现已按「实际生效值」合并到此处，不再需要 !important。 */
.character-card:hover .tag { transform: translateY(-1px); }
.character-card { display: flex; flex-direction: column; background: #fff; border-radius: 3px; overflow: hidden; box-shadow: 0 2px 8px rgba(38,54,64,0.06), 0 8px 24px rgba(0,0,0,0.04); transition: all 0.45s cubic-bezier(0.33,1,0.68,1); cursor: pointer; opacity: 0; animation: cardIn 0.5s ease-out forwards; border: 1px solid #dedbd3; position: relative; }
.character-card::before { content: ''; position: absolute; inset: 0; z-index: 3; border-radius: 3px; border: 2px solid transparent; background: linear-gradient(135deg, rgba(168,85,247,0), rgba(236,72,153,0)) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; transition: all 0.45s cubic-bezier(0.33,1,0.68,1); pointer-events: none; }
.character-card:hover { transform: translateY(-6px); box-shadow: 0 18px 38px rgba(38,54,64,0.14), 0 2px 8px rgba(0,0,0,0.06); border-color: #a48b6c; }
.character-card:hover::before { background: linear-gradient(135deg, rgba(168,85,247,0.5), rgba(236,72,153,0.4)) border-box; }
.card-image { position: relative; aspect-ratio: 3/4; overflow: hidden; background: #0a0520; }
.card-image-inner { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; transition: transform 0.55s cubic-bezier(0.33,1,0.68,1); }
.character-card:hover .card-image-inner { transform: scale(1.1); }
.card-image-shine { position: absolute; inset: 0; background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 55%, transparent 60%); transform: translateX(-100%); transition: transform 0.6s ease; pointer-events: none; z-index: 2; }
.character-card:hover .card-image-shine { transform: translateX(100%); }
.card-image-emoji { font-size: 64px; filter: drop-shadow(0 0 30px rgba(168,85,247,0.3)); transition: all 0.4s ease; }
.character-card:hover .card-image-emoji { transform: scale(1.2); filter: drop-shadow(0 0 40px rgba(168,85,247,0.5)); }
.card-image-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%); opacity: 0; transition: opacity 0.35s ease; display: flex; align-items: flex-end; padding: 16px; }
.character-card:hover .card-image-overlay { opacity: 1; }
.card-overlay-btn { width: 100%; padding: 10px; border-radius: 10px; background: rgba(168,85,247,0.85); color: #fff; text-align: center; font-size: 13px; font-weight: 600; backdrop-filter: blur(4px); letter-spacing: 0.02em; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 16px rgba(168,85,247,0.3); transition: all 0.3s ease; }
.character-card:hover .card-overlay-btn { box-shadow: 0 6px 24px rgba(168,85,247,0.45); }
.card-series-badge { position: absolute; top: 10px; left: 10px; z-index: 1; padding: 3px 10px; border-radius: 6px; font-size: 10px; font-weight: 600; letter-spacing: 0.04em; background: rgba(0,0,0,0.5); color: #e2e8f0; backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
.card-body { padding: 18px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.card-name { font-size: 16px; font-weight: 700; color: #0f172a; letter-spacing: -0.01em; line-height: 1.2; transition: color 0.3s ease; }
.character-card:hover .card-name { color: #7c3aed; }
.card-name-sub { font-size: 11px; color: #94a3b8; font-weight: 500; margin-top: -2px; letter-spacing: 0.03em; }
.card-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; padding-top: 8px; }

@media (max-width: 480px) {
  .card-image-emoji { font-size: 48px; }
  .card-name { font-size: 14px; }
  .card-name-sub { font-size: 11px; }
  .card-body { padding: 12px; }
  .card-tags { gap: 4px; padding-top: 6px; }
  .card-series-badge { padding: 3px 8px; font-size: 9px; top: 8px; left: 8px; }
  .card-image-overlay { padding: 12px; }
  .card-overlay-btn { padding: 8px; font-size: 12px; }
}
</style>
