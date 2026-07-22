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
          <span class="hero-stat-value">49</span>
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

export default {
  name: 'HeroSection',
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('')

    function clearSearch() {
      searchQuery.value = ''
      emit('search', '')
    }

    const particles = [
      { id: 1, w: '3px', h: '3px', top: '10%', left: '8%', dur: '6s', delay: '0s' },
      { id: 2, w: '5px', h: '5px', top: '20%', left: '85%', dur: '7s', delay: '1s' },
      { id: 3, w: '2px', h: '2px', top: '65%', left: '12%', dur: '5s', delay: '0.5s' },
      { id: 4, w: '4px', h: '4px', top: '75%', left: '78%', dur: '6.5s', delay: '2s' },
      { id: 5, w: '3px', h: '3px', top: '40%', left: '55%', dur: '8s', delay: '1.5s' },
      { id: 6, w: '6px', h: '6px', top: '15%', left: '35%', dur: '5.5s', delay: '0.8s' },
      { id: 7, w: '4px', h: '4px', top: '80%', left: '30%', dur: '7.5s', delay: '2.5s' },
      { id: 8, w: '2px', h: '2px', top: '55%', left: '92%', dur: '4.5s', delay: '1.2s' },
      { id: 9, w: '5px', h: '5px', top: '30%', left: '22%', dur: '6s', delay: '0.3s' },
      { id: 10, w: '3px', h: '3px', top: '85%', left: '65%', dur: '5s', delay: '1.8s' },
      { id: 11, w: '4px', h: '4px', top: '5%', left: '60%', dur: '6.8s', delay: '3s' },
      { id: 12, w: '2px', h: '2px', top: '50%', left: '5%', dur: '4s', delay: '2.2s' }
    ]

    return { searchQuery, particles, clearSearch }
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
  .hero { min-height: 60vh; }
  .hero-content { padding: 0 16px; }
  .hero-title { font-size: 32px; }
  .hero-subtitle { font-size: 14px; margin-bottom: 24px; }
  .hero-search { max-width: 100%; margin-bottom: 20px; }
  .hero-stat-value { font-size: 22px; }
  .hero-stat-icon { font-size: 18px; }
}
</style>
