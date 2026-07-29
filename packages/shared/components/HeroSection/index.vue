<template>
  <section class="hero">
    <div class="hero-bg-particles">
      <div v-for="p in particles" :key="p.id" class="particle"
        :style="{ width: p.w, height: p.h, top: p.top, left: p.left, '--dur': p.dur, '--delay': p.delay }"
      ></div>
    </div>
    <div class="hero-grid"></div>

    <!-- 装饰光晕 -->
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="hero-glow hero-glow-3"></div>

    <!-- 装饰浮动元素 -->
    <div class="hero-deco hero-deco-1">✦</div>
    <div class="hero-deco hero-deco-2">◇</div>
    <div class="hero-deco hero-deco-3">✧</div>
    <div class="hero-deco hero-deco-4">⬡</div>
    <div class="hero-deco hero-deco-5">✦</div>
    <div class="hero-deco hero-deco-6">◇</div>

    <!-- 装饰光环 -->
    <div class="hero-ring hero-ring-1"></div>
    <div class="hero-ring hero-ring-2"></div>

    <!-- 动态光球 -->
    <div class="hero-orb hero-orb-1"></div>
    <div class="hero-orb hero-orb-2"></div>
    <div class="hero-orb hero-orb-3"></div>
    <div class="hero-orb hero-orb-4"></div>
    <div class="hero-orb hero-orb-5"></div>

    <!-- 光束 -->
    <div class="hero-beam hero-beam-1"></div>
    <div class="hero-beam hero-beam-2"></div>
    <div class="hero-beam hero-beam-3"></div>

    <!-- 弹幕 -->
    <div class="hero-danmaku">
      <div v-for="(d, idx) in danmakuItems" :key="'dm-'+idx"
        class="danmaku-item"
        :style="{
          top: d.top,
          animationDuration: d.dur,
          animationDelay: d.delay,
          fontSize: d.size,
          opacity: d.opacity
        }"
      >{{ d.text }}</div>
    </div>

    <div class="hero-content">
      <div class="hero-badge animate-fade-in">
        <span class="dot"></span> 我的角色收藏
      </div>
      <h1 class="hero-title animate-slide-up delay-100">我喜欢的角色</h1>
      <p class="hero-subtitle animate-slide-up delay-200">
        记录那些让我心动的角色
      </p>

      <div class="hero-search animate-slide-up delay-300">
        <span class="hero-search-icon">🔍</span>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="搜索角色名称、作品…"
          @input="$emit('search', searchQuery)"
        />
        <button v-if="searchQuery" class="search-clear visible" @click="clearSearch">✕</button>
      </div>

      <div class="hero-stats animate-slide-up delay-400">
        <div class="hero-stat">
          <span class="hero-stat-icon">📋</span>
          <span class="hero-stat-value">{{ characterCount }}</span>
          <span class="hero-stat-label">位角色</span>
        </div>
        <div class="hero-stat-divider"></div>
        <div class="hero-stat">
          <span class="hero-stat-icon">✨</span>
          <span class="hero-stat-value">持续更新</span>
          <span class="hero-stat-label">敬请期待</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { getCharacterList } from '@/api/character.js'

export default {
  name: 'HeroSection',
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('')
    const characterCount = getCharacterList().length

    function clearSearch() {
      searchQuery.value = ''
      emit('search', '')
    }

    // 弹幕台词
    const danmakuItems = [
      { text: '「我只是个旅人、只是个魔女，仅此而已。既非无所不能，也不可能万事如意。」—— 伊蕾娜', top: '8%', dur: '28s', delay: '0s', size: '14px', opacity: 0.45 },
      { text: '「生老病死，天地万象，尽在吾辈。」—— 胡桃', top: '18%', dur: '22s', delay: '3s', size: '13px', opacity: 0.4 },
      { text: '「我要成为你推的孩子。」—— 有马加奈', top: '30%', dur: '20s', delay: '6s', size: '15px', opacity: 0.45 },
      { text: '「既然你话都说出口了，就负起责任。你逃不掉了——靠你了，社长。」—— 小鞠知花', top: '45%', dur: '30s', delay: '1s', size: '13px', opacity: 0.4 },
      { text: '「看吧，放手去做总会有办法的。如果是你的话，一定能够创造未来。」—— 七海千秋', top: '55%', dur: '26s', delay: '8s', size: '14px', opacity: 0.42 },
      { text: '「我等过很久，我不会再等了。」—— 弗洛洛', top: '68%', dur: '21s', delay: '4s', size: '13px', opacity: 0.4 },
      { text: '「我或曾梦见，与你亲密无间。醒来后发现，你我形同陌路。」—— 弗洛洛', top: '22%', dur: '27s', delay: '11s', size: '14px', opacity: 0.42 },
      { text: '「世界就这样终结，不是嘭的一响，而是嘘的一声。」—— 弗洛洛', top: '72%', dur: '25s', delay: '7s', size: '13px', opacity: 0.4 },
      { text: '「我并不向往和很多人拥有表面交情，我只想和一个人深交到底。」—— 因幡巡', top: '38%', dur: '29s', delay: '13s', size: '14px', opacity: 0.45 },
      { text: '「Ciallo～(∠・ω< )⌒☆」—— 因幡巡', top: '82%', dur: '18s', delay: '2s', size: '15px', opacity: 0.48 },
      { text: '「四糸奈是我的理想，是我心目中的英雄。我希望变得像四糸奈一样强大、坚强、帅气。」—— 氷芽川四糸乃', top: '35%', dur: '23s', delay: '15s', size: '14px', opacity: 0.44 },
      { text: '「从这里开始吧。从一开始……不，从零开始。」—— 雷姆', top: '78%', dur: '24s', delay: '10s', size: '15px', opacity: 0.45 },
      { text: '「我是你的恋人。」—— 友利奈绪', top: '12%', dur: '19s', delay: '12s', size: '16px', opacity: 0.5 },
      { text: '「我大概一辈子都忘不了CRYCHIC了。」—— 長崎素世', top: '88%', dur: '22s', delay: '5s', size: '13px', opacity: 0.42 },
      { text: '「不，我不认识叫那种名字的人。」—— 和泉纱雾', top: '50%', dur: '20s', delay: '9s', size: '14px', opacity: 0.44 },
    ]

    const particles = [
      { id: 1, w: '3px', h: '3px', top: '10%', left: '8%', dur: '6s', delay: '0s' },
      { id: 2, w: '5px', h: '5px', top: '20%', left: '85%', dur: '7s', delay: '1s' },
      { id: 3, w: '2px', h: '2px', top: '65%', left: '12%', dur: '5s', delay: '0.5s' },
      { id: 4, w: '4px', h: '4px', top: '75%', left: '78%', dur: '6.5s', delay: '2s' },
      { id: 5, w: '3px', h: '3px', top: '40%', left: '55%', dur: '8s', delay: '1.5s' },
      { id: 6, w: '6px', h: '6px', top: '15%', left: '35%', dur: '5.5s', delay: '0.8s' },
      { id: 7, w: '4px', h: '4px', top: '80%', left: '30%', dur: '7.5s', delay: '2.5s' },
      { id: 8, w: '2px', h: '2px', top: '55%', left: '92%', dur: '4.5s', delay: '1.2s' },
    ]

    return { searchQuery, characterCount, particles, danmakuItems, clearSearch }
  }
}
</script>

<style>
.hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f0a1a 0%, #1a0a2e 25%, #1a1030 50%, #0d1a2e 75%, #0a0a1a 100%);
}

/* 装饰光晕 */
.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.15;
}
.hero-glow-1 {
  width: 400px; height: 400px;
  background: #a855f7;
  top: -100px; left: -80px;
  animation: float 8s ease-in-out infinite;
}
.hero-glow-2 {
  width: 300px; height: 300px;
  background: #ec4899;
  bottom: -80px; right: -60px;
  animation: float 10s ease-in-out infinite reverse;
}
.hero-glow-3 {
  width: 250px; height: 250px;
  background: #06b6d4;
  top: 50%; left: 60%;
  animation: float 7s ease-in-out infinite 3s;
}

/* 装饰浮动符号 */
.hero-deco {
  position: absolute;
  pointer-events: none;
  z-index: 1;
  opacity: 0.12;
  animation: decoFloat 12s ease-in-out infinite;
  font-size: 24px;
  color: #c084fc;
  text-shadow: 0 0 20px rgba(192,132,252,0.5);
}
.hero-deco-1 { top: 12%; left: 8%; font-size: 28px; animation-delay: 0s; animation-duration: 10s; }
.hero-deco-2 { top: 25%; right: 12%; font-size: 20px; animation-delay: 2s; animation-duration: 14s; color: #f0abfc; }
.hero-deco-3 { bottom: 30%; left: 15%; font-size: 32px; animation-delay: 4s; animation-duration: 11s; color: #a78bfa; }
.hero-deco-4 { top: 60%; right: 8%; font-size: 22px; animation-delay: 1s; animation-duration: 13s; color: #f9a8d4; }
.hero-deco-5 { top: 8%; left: 55%; font-size: 18px; animation-delay: 3s; animation-duration: 15s; color: #67e8f9; }
.hero-deco-6 { bottom: 15%; right: 25%; font-size: 26px; animation-delay: 5s; animation-duration: 9s; color: #c084fc; }
@keyframes decoFloat {
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.08; }
  25% { transform: translateY(-20px) rotate(90deg) scale(1.1); opacity: 0.18; }
  50% { transform: translateY(-10px) rotate(180deg) scale(0.95); opacity: 0.12; }
  75% { transform: translateY(-25px) rotate(270deg) scale(1.05); opacity: 0.2; }
}

/* 装饰光环 */
.hero-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  border: 1px solid rgba(168,85,247,0.08);
}
.hero-ring-1 {
  width: 500px; height: 500px;
  top: -150px; right: -100px;
  animation: ringPulse 8s ease-in-out infinite;
}
.hero-ring-2 {
  width: 350px; height: 350px;
  bottom: -100px; left: -80px;
  animation: ringPulse 10s ease-in-out infinite 3s;
  border-color: rgba(236,72,153,0.06);
}
@keyframes ringPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.08); opacity: 0.6; }
}

/* 动态渐变光球 */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(60px);
}
.hero-orb-1 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%);
  top: 10%; left: 5%;
  animation: orbMove1 15s ease-in-out infinite;
}
.hero-orb-2 {
  width: 250px; height: 250px;
  background: radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(236,72,153,0) 70%);
  bottom: 15%; right: 8%;
  animation: orbMove2 18s ease-in-out infinite;
}
.hero-orb-3 {
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 70%);
  top: 50%; left: 60%;
  animation: orbMove3 12s ease-in-out infinite;
}
.hero-orb-4 {
  width: 180px; height: 180px;
  background: radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0) 70%);
  top: 70%; left: 15%;
  animation: orbMove1 20s ease-in-out infinite reverse;
}
.hero-orb-5 {
  width: 220px; height: 220px;
  background: radial-gradient(circle, rgba(244,114,182,0.25) 0%, rgba(244,114,182,0) 70%);
  top: 5%; right: 20%;
  animation: orbMove2 14s ease-in-out infinite 3s;
}
@keyframes orbMove1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
@keyframes orbMove2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-35px, 25px) scale(1.05); }
  66% { transform: translate(25px, -35px) scale(0.9); }
}
@keyframes orbMove3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -40px) scale(1.15); }
}

/* 光束效果 */
.hero-beam {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  opacity: 0.06;
}
.hero-beam-1 {
  width: 2px; height: 100%;
  background: linear-gradient(to bottom, transparent, #a855f7, transparent);
  left: 20%; top: 0;
  animation: beamPulse 4s ease-in-out infinite;
}
.hero-beam-2 {
  width: 2px; height: 100%;
  background: linear-gradient(to bottom, transparent, #ec4899, transparent);
  right: 25%; top: 0;
  animation: beamPulse 5s ease-in-out infinite 1s;
}
.hero-beam-3 {
  width: 100%; height: 2px;
  background: linear-gradient(to right, transparent, #06b6d4, transparent);
  left: 0; top: 35%;
  animation: beamPulse 6s ease-in-out infinite 2s;
}
@keyframes beamPulse {
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.1; }
}

/* 弹幕 */
.hero-danmaku {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}
.danmaku-item {
  position: absolute;
  right: -500px;
  white-space: nowrap;
  color: rgba(233,213,255,0.9);
  font-weight: 500;
  font-family: 'Noto Sans SC', sans-serif;
  letter-spacing: 0.08em;
  animation: danmakuFly linear infinite;
  text-shadow: 0 0 15px rgba(168,85,247,0.4), 0 0 30px rgba(168,85,247,0.2);
}
@keyframes danmakuFly {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100vw - 400px)); }
}
@media (max-width: 768px) {
  .danmaku-item { font-size: 11px !important; }
}

.hero-bg-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(168,85,247,0.35);
  animation: pixelFloat var(--dur) ease-in-out infinite;
  animation-delay: var(--delay);
}
.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image:
    linear-gradient(rgba(168,85,247,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168,85,247,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 680px;
  width: 100%;
  text-align: center;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(168,85,247,0.15);
  border: 1px solid rgba(168,85,247,0.3);
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 12px;
  color: #c084fc;
  font-weight: 500;
  margin-bottom: 24px;
}
.hero-badge .dot {
  width: 7px; height: 7px;
  background: #a855f7;
  border-radius: 50%;
  animation: pulseGlow 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(38px, 7vw, 60px);
  font-weight: 900;
  line-height: 1.15;
  background: linear-gradient(135deg, #e9d5ff 0%, #c084fc 40%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  font-family: 'Noto Sans SC', 'Inter', sans-serif;
  margin-bottom: 14px;
}

.hero-subtitle {
  font-size: 16px;
  color: #7e8ba3;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 32px;
}

.hero-search {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 480px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-bottom: 28px;
}
.hero-search:focus-within {
  border-color: rgba(168,85,247,0.45);
  box-shadow: 0 0 0 4px rgba(168,85,247,0.08);
  background: rgba(255,255,255,0.1);
}
.hero-search-icon { padding: 0 0 0 16px; font-size: 17px; flex-shrink: 0; }
.hero-search input {
  flex: 1;
  background: none;
  border: none;
  padding: 14px 12px;
  font-size: 15px;
  color: #e2e8f0;
  font-family: inherit;
  outline: none;
  min-width: 0;
}
.hero-search input::placeholder { color: #5a6a80; }
.search-clear {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 8px 14px;
  font-size: 16px;
  transition: color 0.2s;
  display: none;
}
.search-clear.visible { display: block; }
.search-clear:hover { color: #e2e8f0; }

.hero-stats {
  display: flex;
  gap: 24px;
  align-items: center;
}
.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.hero-stat-icon { font-size: 22px; line-height: 1; }
.hero-stat-value {
  font-size: 26px;
  font-weight: 800;
  color: #e9d5ff;
  letter-spacing: -0.02em;
  line-height: 1;
}
.hero-stat-label { font-size: 11px; color: #5a6a80; font-weight: 500; letter-spacing: 0.04em; }
.hero-stat-divider {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, transparent, rgba(168,85,247,0.25), transparent);
}

@media (max-width: 480px) {
  .hero { min-height: 55vh; }
  .hero-content { padding: 0 16px; }
  .hero-title { font-size: 30px; }
  .hero-subtitle { font-size: 14px; margin-bottom: 20px; }
  .hero-search { max-width: 100%; margin-bottom: 18px; border-radius: 14px; }
  .hero-search input { padding: 12px 10px; font-size: 14px; }
  .hero-badge { padding: 6px 14px; font-size: 12px; margin-bottom: 18px; }
  .hero-stat-value { font-size: 22px; }
  .hero-stat-icon { font-size: 18px; }
  .hero-stats { gap: 16px; }
}
</style>
