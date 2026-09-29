<template>
  <div :class="['detail-page', pageClass, 'cdl']" :style="themeVars">
    <AppHeader />

    <section class="hero">
      <div class="hero-bg-particles">
        <div v-for="p in 10" :key="p" class="particle" :style="particleStyle()"></div>
      </div>
      <div class="hero-grid"></div>
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="hero-content">
        <div class="hero-text animate-fade-in" style="text-align:left;">
          <div class="hero-badge"><span class="dot"></span> {{ data.series }}</div>
          <h1 class="hero-name-jp" :style="heroNameStyle">{{ data.nameJp }}</h1>
          <p class="hero-name-sub">{{ data.nameSub }}</p>
          <div v-if="data.title" class="hero-title-badge">{{ data.title }}</div>
          <div class="tags"><span v-for="(t,i) in data.tags" :key="i" :class="['tag', t.cls]">{{ t.text }}</span></div>
        </div>
        <div class="hero-visual animate-slide-up delay-200">
          <div class="hero-avatar-wrapper">
            <div class="hero-avatar-ring"></div>
            <div v-if="data.image" class="hero-avatar" :style="avatarStyle"></div>
            <div v-else class="hero-avatar avatar-placeholder">
              <span class="avatar-emoji">{{ data.placeholderEmoji || '⭐' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <nav class="breadcrumb">
        <router-link to="/">首页</router-link> <span class="sep">›</span>
        <router-link to="/">角色列表</router-link> <span class="sep">›</span>
        <span class="current">{{ data.name }}</span>
      </nav>
    </div>

    <nav class="main-tab-nav">
      <div class="container">
        <button v-for="tab in data.mainTabs" :key="tab.key"
          :class="['main-tab-btn', { active: activeMainTab === tab.key }]" @click="activeMainTab = tab.key">
          <span class="main-tab-icon">{{ tab.icon }}</span> {{ tab.label }}
        </button>
      </div>
    </nav>

    <!-- Tab: Profile -->
    <div v-show="activeMainTab === 'profile'" class="tab-panel-main">
      <section class="section" style="padding-top:20px;">
        <div class="container">
          <div class="info-grid">
            <div v-for="(item, idx) in data.info" :key="idx"
              :class="['info-card', 'animate-slide-up', `delay-${(idx%3+1)*100}`]">
              <div :class="['info-card-icon', item.iconClass]">{{ item.icon }}</div>
              <div class="info-card-text"><h4>{{ item.label }}</h4><p>{{ item.value }}</p></div>
            </div>
          </div>
          <div class="tabs-card animate-slide-up delay-400" style="margin-top:32px;">
            <div class="tabs-nav">
              <button v-for="tab in data.tabs" :key="tab.key"
                :class="['tab-btn', { active: activeSubTab === tab.key }]" @click="activeSubTab = tab.key">
                {{ tab.icon }} {{ tab.label }}
              </button>
            </div>
            <div v-for="tab in data.tabs" :key="tab.key" :class="['tab-panel', { active: activeSubTab === tab.key }]">
              <div class="key-tags-row"><span v-for="(t,i) in tab.tags" :key="i" class="key-tag">{{ t }}</span></div>
              <p v-for="(para,i) in tab.content" :key="i" v-html="para"></p>
              <div v-if="tab.quote" class="blockquote">
                {{ tab.quote }}<br><span style="font-size:13px;font-style:normal;color:#94a3b8;">{{ tab.quoteAuthor }}</span>
              </div>
              <div v-if="tab.quotes" class="quotes-block">
                <div v-for="(q, qi) in tab.quotes" :key="qi" class="blockquote" :style="qi > 0 ? 'margin-top:16px;' : ''">
                  {{ q.text }}<br><span style="font-size:13px;font-style:normal;color:#94a3b8;">{{ q.author }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab: 相关作品（番剧 / 游戏，数据驱动，支持多张卡片） -->
    <div v-for="tabKey in workTabKeys" :key="tabKey" v-show="activeMainTab === tabKey" class="tab-panel-main">
      <section class="section anime-section">
        <div class="container" :class="{ 'work-stack': worksOf(tabKey).length > 1 }">
          <div v-for="(w, wi) in worksOf(tabKey)" :key="wi" class="anime-hero-card">
            <div class="anime-cover">
              <div v-if="w.cover" class="anime-cover-image" :style="{ backgroundImage: `url(${w.cover})` }"></div>
            </div>
            <div class="anime-info">
              <span class="anime-info-label">{{ w.label }}</span>
              <h3 class="anime-info-title">{{ w.title }}</h3>
              <p class="anime-info-title-jp">{{ w.titleJp }}</p>
              <div class="anime-info-meta">
                <div v-for="(m, mi) in w.meta" :key="mi" class="anime-meta-item">
                  <span class="meta-icon">{{ m.icon }}</span><span class="meta-label">{{ m.label }}</span>{{ m.value }}
                </div>
              </div>
              <p class="anime-info-desc" v-html="w.desc"></p>
              <div class="anime-tag-row">
                <span v-for="(t, ti) in w.tags" :key="ti" :class="['anime-tag', t.cls]">{{ t.text }}</span>
              </div>
              <div v-if="w.action" class="anime-info-actions">
                <a :href="w.action.url" :class="['btn-action', actionVariant(w.action)]" target="_blank" rel="noopener">
                  <span class="bili-icon">{{ w.action.icon }}</span> {{ w.action.text }} <span class="bili-arrow">→</span>
                </a>
              </div>
              <div v-else-if="w.notice" class="anime-info-actions">
                <span class="anime-tag-not-available">{{ w.notice }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab: Gallery -->
    <div v-show="activeMainTab === 'gallery'" class="tab-panel-main">
      <section class="section" style="background:#f1f5f9;">
        <div class="container">
          <div class="gallery-grid">
            <div v-for="(item, idx) in data.gallery" :key="idx"
              :class="['gallery-item', 'animate-slide-up', `delay-${(idx%4+1)*100}`]" @click="openLightbox(item)">
              <div v-if="item.isImage" class="gallery-item-inner">
                <img :src="item.bg" class="gallery-img" loading="lazy" decoding="async" alt="" />
              </div>
              <div v-else class="gallery-item-inner" :style="{ background: item.bg }">
                <span class="gallery-item-icon">{{ item.icon }}</span>
                <span class="gallery-item-label">{{ item.label }}</span>
              </div>
              <div class="gallery-item-badge">{{ item.badge }}</div>
              <div class="gallery-item-overlay"><span class="gallery-overlay-text">{{ item.overlay }}</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab: Videos -->
    <div v-show="activeMainTab === 'videos'" class="tab-panel-main">
      <section class="section videos-section" style="background:#f8fafc;">
        <div class="container">
          <div class="video-grid">
            <a v-for="(v, idx) in data.videos" :key="idx" :href="v.url || '#'" :target="v.url ? '_blank' : undefined" rel="noopener"
              class="video-card animate-slide-up" :class="'delay-' + ((idx%2+1)*100)">
              <div class="video-cover">
                <img v-if="v.cover" :src="v.cover" class="video-cover-img" loading="lazy" decoding="async" alt="" />
                <div class="video-play-btn"><span>▶</span></div>
              </div>
              <div class="video-info">
                <h4>{{ v.title }}</h4>
                <p>{{ v.desc }}</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab: Abilities -->
    <div v-show="activeMainTab === 'abilities'" class="tab-panel-main">
      <section class="section">
        <div class="container">
          <div class="section-sub-title">🌟 能力</div>
          <div class="abilities-list">
            <div v-for="(ab, idx) in data.abilities" :key="'ab-'+idx"
              :class="['ability-card', 'animate-slide-up', `delay-${(idx+1)*100}`]">
              <div class="ability-icon">{{ ab.icon }}</div>
              <div class="ability-info">
                <h4>{{ ab.name }}</h4>
                <p v-html="ab.desc"></p>
              </div>
            </div>
          </div>
          <div class="section-sub-title" style="margin-top:48px;">🔗 关系</div>
          <div class="relationships-grid">
            <div v-for="(rel, idx) in data.relationships" :key="'rel-'+idx"
              :class="['relationship-card', 'animate-slide-up', `delay-${(idx+1)*100}`]">
              <div class="rel-icon">{{ rel.icon }}</div>
              <div class="rel-info">
                <h4>{{ rel.name }} <span :class="['rel-type', rel.cls]">{{ rel.type }}</span></h4>
                <p v-html="rel.desc"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab: Review -->
    <div v-show="activeMainTab === 'review'" class="tab-panel-main">
      <section class="review-hero">
        <div class="review-hero-bg"></div>
        <div class="review-hero-overlay"></div>
        <div class="container review-hero-inner">
          <div class="review-hero-avatar" :style="{ backgroundImage: `url(${data.image})` }"></div>
          <div class="review-hero-text">
            <span class="review-hero-label">Personal Review</span>
            <h2>关于{{ data.name }}的评价</h2>
            <p class="review-hero-desc">来自站长的个人感想与回忆</p>
          </div>
        </div>
      </section>
      <section class="section" style="padding-top:40px;">
        <div class="container">
          <div class="review-article animate-fade-in">
            <div class="review-body-card">
              <p v-if="data.review" class="review-text">{{ data.review }}</p>
              <p v-else class="review-placeholder">暂无评价，敬请期待。</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <AppFooter />
    <BackToTop />
    <GalleryLightbox ref="lightbox" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import AppHeader from '@packages/shared/components/AppHeader/index.vue'
import AppFooter from '@packages/shared/components/AppFooter/index.vue'
import BackToTop from '@packages/shared/components/BackToTop/index.vue'
import GalleryLightbox from '@packages/shared/components/GalleryLightbox/index.vue'

export default {
  name: 'CharacterDetailLayout',
  components: { AppHeader, AppFooter, BackToTop, GalleryLightbox },
  props: {
    data: { type: Object, required: true }
  },
  setup(props) {
    const lightbox = ref(null)
    const activeMainTab = ref('profile')
    const activeSubTab = ref((props.data.tabs && props.data.tabs[0] && props.data.tabs[0].key) || '')

    // 主题：theme 对象 → CSS 变量 --acc-*
    const themeVars = computed(() => {
      const vars = {}
      const theme = props.data.theme || {}
      for (const [k, v] of Object.entries(theme)) {
        if (v === null || v === undefined) continue
        vars['--acc-' + k.replace(/([A-Z])/g, '-$1').toLowerCase()] = v
      }
      return vars
    })

    const pageClass = computed(() => props.data.pageClass || props.data.id + '-page')

    // 作品 tab（数据中存在 anime/game 内容的 tab）
    const workTabKeys = computed(() => {
      const keys = []
      for (const tab of props.data.mainTabs || []) {
        if ((tab.key === 'anime' || tab.key === 'game') && worksOf(tab.key).length) keys.push(tab.key)
      }
      return keys
    })

    function worksOf(key) {
      const works = props.data.works || {}
      return works[key] || []
    }

    // 角色名样式：有渐变用渐变裁切，否则用纯色
    const heroNameStyle = computed(() => {
      const theme = props.data.theme || {}
      if (theme.nameGrad) {
        return {
          background: theme.nameGrad,
          webkitBackgroundClip: 'text',
          webkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }
      }
      return { color: theme.nameColor || '#fff' }
    })

    const avatarStyle = computed(() => {
      const d = props.data
      return {
        backgroundImage: `url(${d.image})`,
        backgroundPosition: 'top center',
        backgroundSize: d.avatarSize || 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: d.avatarBg || 'transparent'
      }
    })

    function particleStyle() {
      return {
        width: (3 + Math.random() * 3) + 'px', height: (3 + Math.random() * 3) + 'px',
        top: (Math.random() * 100) + '%', left: (Math.random() * 100) + '%',
        '--dur': (3 + Math.random() * 3) + 's', '--delay': (Math.random() * 3) + 's'
      }
    }

    function openLightbox(item) { lightbox.value.open(item) }

    // 外链按钮配色变体：由数据中的 action.cls 决定，保持各角色原有按钮视觉
    function actionVariant(action) {
      const cls = (action && action.cls) || ''
      if (cls.includes('btn-steam')) return 'steam'
      if (cls.includes('btn-elaina')) return 'silver'
      if (cls.includes('btn-hutao')) return 'orange'
      if (cls.includes('btn-tomori')) return 'duo'
      return 'bilibili'
    }

    return {
      lightbox, activeMainTab, activeSubTab,
      themeVars, pageClass, workTabKeys, worksOf, heroNameStyle, avatarStyle,
      particleStyle, openLightbox, actionVariant
    }
  }
}
</script>

<style>
/* ===== 角色详情统一布局（主题色通过 --acc-* 变量注入）===== */
.cdl .hero {
  position: relative; min-height: 70vh; padding: 80px 0 50px;
  display: flex; align-items: center; overflow: hidden;
  background: var(--acc-hero-bg, linear-gradient(135deg, #0a0a1a 0%, #0a1628 25%, #0d1a2e 50%, #0a1228 75%, #0a0a1a 100%));
}
.cdl .hero-glow { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; opacity: 0.25; }
.cdl .hero-glow-1 { width: 500px; height: 500px; background: var(--acc-glow-1, #3b82f6); top: -80px; left: -80px; animation: float 8s ease-in-out infinite; }
.cdl .hero-glow-2 { width: 400px; height: 400px; background: var(--acc-glow-2, #06b6d4); bottom: -60px; right: -50px; animation: float 10s ease-in-out infinite reverse; }
.cdl .hero-bg-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.cdl .particle { position: absolute; border-radius: 50%; background: var(--acc-particle-bg, rgba(59,130,246,0.3)); animation: pixelFloat var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
.cdl .hero-grid { position: absolute; inset: 0; z-index: 1; background-image: var(--acc-grid-image, linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)); background-size: 60px 60px; }
.cdl .hero-content { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 0 24px; max-width: 1060px; margin: 0 auto; width: 100%; }
@media (max-width: 1024px) { .cdl .hero-content { grid-template-columns: 1fr; text-align: center; gap: 32px; } }
.cdl .hero-text { display: flex; flex-direction: column; gap: 10px; }
@media (max-width: 1024px) { .cdl .hero-text { align-items: center; } }
.cdl .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--acc-badge-bg, linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.1))); border: var(--acc-badge-border, 1px solid rgba(59,130,246,0.4)); padding: 5px 14px; border-radius: 50px; font-size: 13px; color: var(--acc-badge-color, #93c5fd); font-weight: 500; width: fit-content; margin-bottom: 6px; box-shadow: var(--acc-badge-shadow, 0 0 16px rgba(59,130,246,0.2)); }
.cdl .hero-badge .dot { width: 7px; height: 7px; background: var(--acc-dot-bg, #3b82f6); border-radius: 50%; animation: pulseGlow 2s ease-in-out infinite; }
.cdl .hero-name-jp { font-size: clamp(40px, 7vw, 64px); font-weight: 900; line-height: 1.1; letter-spacing: 0.05em; filter: drop-shadow(0 0 20px var(--acc-badge-shadow, rgba(59,130,246,0.3))); }
.cdl .hero-name-sub { font-size: 16px; color: var(--acc-name-sub-color, #93c5fd); font-weight: 400; letter-spacing: 0.06em; }
.cdl .hero-title-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--acc-title-badge-bg, linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.12))); border: var(--acc-title-badge-border, 1px solid rgba(59,130,246,0.4)); padding: 10px 24px; border-radius: 12px; font-size: 18px; color: var(--acc-title-badge-color, #a5f3fc); font-weight: 700; width: fit-content; margin-top: 4px; box-shadow: 0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08); backdrop-filter: blur(8px); letter-spacing: 0.02em; }
.cdl .tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.cdl .tags .tag { padding: 6px 16px; font-size: 13px; border-radius: 50px; font-weight: 600; background: var(--acc-tag-bg, linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.06))); border: var(--acc-tag-border, 1px solid rgba(59,130,246,0.25)); color: var(--acc-tag-color, #3b82f6); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
@media (max-width: 1024px) { .cdl .hero-title-badge { margin: 0 auto; } .cdl .tags { justify-content: center; } }
.cdl .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
.cdl .hero-avatar-wrapper { position: relative; width: 280px; height: 280px; }
@media (max-width: 768px) { .cdl .hero-avatar-wrapper { width: 220px; height: 220px; } }
.cdl .hero-avatar-ring { position: absolute; inset: -14px; border-radius: 50%; border: 3px solid transparent; background: var(--acc-ring-grad, linear-gradient(135deg, #3b82f6, #06b6d4, #93c5fd, #3b82f6)); -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: spinSlow 8s linear infinite; }
.cdl .hero-avatar { width: 100%; height: 100%; border-radius: 50%; box-shadow: var(--acc-avatar-shadow, 0 0 60px rgba(59,130,246,0.4), 0 0 120px rgba(59,130,246,0.15)); }
.cdl .avatar-placeholder { display: flex; align-items: center; justify-content: center; background: var(--acc-placeholder-bg, linear-gradient(180deg, #1e3a5f 0%, #0f1b2d 50%, #0a0a1a 100%)); }
.cdl .avatar-emoji { font-size: 80px; filter: var(--acc-emoji-shadow, drop-shadow(0 0 30px rgba(59,130,246,0.5))); }

.cdl .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; margin-bottom: 20px; flex-wrap: wrap; padding-top: 16px; }
.cdl .breadcrumb a { color: #64748b; transition: color 0.2s; }
.cdl .breadcrumb a:hover { color: var(--acc-glow-1, #3b82f6); }
.cdl .breadcrumb .sep { color: #cbd5e1; }
.cdl .breadcrumb .current { color: var(--acc-glow-1, #3b82f6); font-weight: 600; }

.cdl .main-tab-nav { z-index: 900; background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.cdl .main-tab-nav .container { display: flex; gap: 0; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.cdl .main-tab-btn { flex-shrink: 0; padding: 16px 24px; font-size: 14px; font-weight: 600; font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; border: none; background: none; cursor: pointer; color: #64748b; transition: all 0.25s ease; position: relative; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.cdl .main-tab-btn:hover { color: #1e293b; background: #f8fafc; }
.cdl .main-tab-btn.active { color: var(--acc-glow-1, #3b82f6); }
.cdl .main-tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 16px; right: 16px; height: 3px; background: var(--acc-glow-1, #3b82f6); border-radius: 2px 2px 0 0; box-shadow: 0 2px 12px rgba(59,130,246,0.3); }

.cdl .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 1024px) { .cdl .info-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .cdl .info-grid { grid-template-columns: 1fr; } }
.cdl .info-card { background: #fff; border-radius: 18px; padding: 26px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(59,130,246,0.08); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); display: flex; align-items: flex-start; gap: 16px; }
.cdl .info-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.15); }
.cdl .info-card-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.04); background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04)); }
.cdl .info-card-icon.purple { background: #f3e8ff; }
.cdl .info-card-icon.pink { background: #fce7f3; }
.cdl .info-card-icon.cyan { background: #ecfeff; }
.cdl .info-card-icon.amber { background: #fef3c7; }
.cdl .info-card-text h4 { font-size: 11px; color: #94a3b8; font-weight: 500; margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
.cdl .info-card-text p { font-size: 15px; color: #0f172a; font-weight: 600; }

.cdl .tabs-card { background: #fff; border-radius: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden; }
.cdl .tabs-nav { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; }
.cdl .tab-btn { padding: 18px 28px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; background: none; cursor: pointer; color: #94a3b8; transition: all 0.2s; position: relative; white-space: nowrap; }
.cdl .tab-btn:hover { color: #64748b; }
.cdl .tab-btn.active { color: var(--acc-glow-1, #3b82f6); }
.cdl .tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 20%; right: 20%; height: 3px; background: var(--acc-glow-1, #3b82f6); border-radius: 2px; }
.cdl .tab-panel { display: none; padding: 32px; }
.cdl .tab-panel.active { display: block; animation: fadeIn 0.4s ease; }
.cdl .tab-panel p { font-size: 15px; line-height: 2.1; color: #475569; white-space: pre-line; margin-bottom: 14px; font-weight: 400; }
.cdl .key-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
.cdl .key-tag { display: inline-flex; align-items: center; gap: 4px; padding: 6px 16px; border-radius: 50px; font-size: 13px; font-weight: 600; background: var(--acc-tag-bg, linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.06))); border: var(--acc-tag-border, 1px solid rgba(59,130,246,0.25)); color: var(--acc-tag-color, #3b82f6); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

.cdl .anime-section { background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); }
.cdl .work-stack { display: flex; flex-direction: column; gap: 24px; }
.cdl .anime-hero-card { display: grid; grid-template-columns: 280px 1fr; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
@media (max-width: 768px) { .cdl .anime-hero-card { grid-template-columns: 1fr; } }
.cdl .anime-cover { position: relative; min-height: 280px; background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 40%, #0d1a2e 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; overflow: hidden; }
.cdl .anime-cover::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 70%); }
.cdl .anime-cover-image { position: absolute; inset: 0; background-size: cover; background-position: center; }
.cdl .anime-cover-badge { position: relative; z-index: 1; margin-top: 12px; padding: 6px 16px; background: rgba(6,182,212,0.2); border: 1px solid rgba(6,182,212,0.3); border-radius: 50px; font-size: 12px; color: #67e8f9; font-weight: 600; }
.cdl .anime-info { padding: 36px; display: flex; flex-direction: column; gap: 16px; }
.cdl .anime-info-label { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--acc-glow-1, #3b82f6); }
.cdl .anime-info-label::before { content: ''; width: 20px; height: 2px; background: var(--acc-glow-1, #3b82f6); border-radius: 1px; }
.cdl .anime-info-title { font-size: clamp(20px, 3vw, 28px); font-weight: 800; color: #0f172a; }
.cdl .anime-info-title-jp { font-size: 14px; color: #94a3b8; }
.cdl .anime-info-meta { display: flex; flex-wrap: wrap; gap: 20px; }
.cdl .anime-meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; }
.cdl .anime-info-desc { font-size: 14.5px; color: #475569; line-height: 1.9; }
.cdl .anime-tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.cdl .anime-tag { padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.cdl .anime-tag.dark { background: #f1f5f9; color: #475569; }
.cdl .anime-tag.live { background: #dcfce7; color: #16a34a; }
.cdl .anime-tag.not-available { background: #fef2f2; color: #dc2626; border: 1px dashed #fca5a5; }
.cdl .anime-info-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.cdl .anime-tag-not-available { display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; background: #fef2f2; color: #dc2626; border: 1px dashed #fca5a5; }
/* 外链按钮：基础样式 + 配色变体（bilibili / steam / silver / orange / duo） */
.cdl .btn-action { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 15px; font-weight: 700; font-family: inherit; color: #fff; cursor: pointer; transition: all 0.3s ease; text-decoration: none; }
.cdl .btn-action.bilibili { background: linear-gradient(135deg, #fb7299, #fc8bab); box-shadow: 0 4px 16px rgba(251,114,153,0.4); }
.cdl .btn-action.steam { background: linear-gradient(135deg, #1b2838, #2a475e); box-shadow: 0 4px 16px rgba(42,71,94,0.4); }
.cdl .btn-action.silver { background: linear-gradient(135deg, #8c949e, #b8bec6); box-shadow: 0 4px 16px rgba(140,148,158,0.4); }
.cdl .btn-action.orange { background: linear-gradient(135deg, #f97316, #ea580c); box-shadow: 0 4px 16px rgba(249,115,22,0.4); }
.cdl .btn-action.duo { background: linear-gradient(135deg, #60a5fa, #f472b6); box-shadow: 0 4px 16px rgba(96,165,250,0.4); }
.cdl .btn-action:hover { transform: translateY(-2px); filter: brightness(1.05); }
.cdl .btn-outline-sm { display: inline-flex; align-items: center; gap: 6px; padding: 12px 20px; border-radius: 12px; font-size: 14px; font-weight: 600; font-family: inherit; background: transparent; color: #64748b; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s ease; }

.cdl .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 1024px) { .cdl .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .cdl .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
.cdl .gallery-item { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; aspect-ratio: 3/4; transition: all 0.3s ease; background: #fff; }
.cdl .gallery-item:hover { transform: scale(1.03); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
.cdl .gallery-item-inner { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; transition: all 0.3s ease; overflow: hidden; }
.cdl .gallery-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
.cdl .gallery-item:hover .gallery-item-inner { transform: scale(1.05); }
.cdl .gallery-item-icon { font-size: 56px; margin-bottom: 12px; }
.cdl .gallery-item-label { font-size: 12px; color: #94a3b8; font-weight: 500; }
.cdl .gallery-item-badge { position: absolute; top: 12px; right: 12px; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; background: rgba(0,0,0,0.5); color: #e2e8f0; }
.cdl .gallery-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
.cdl .gallery-item:hover .gallery-item-overlay { opacity: 1; }
.cdl .gallery-overlay-text { color: #fff; font-size: 13px; font-weight: 500; }

.cdl .abilities-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .cdl .abilities-list { grid-template-columns: 1fr; } }
.cdl .ability-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
.cdl .ability-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.2); }
.cdl .ability-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04)); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.cdl .ability-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.cdl .ability-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }

.cdl .videos-section { padding: 48px 0 64px; }
.cdl .video-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 640px) { .cdl .video-grid { grid-template-columns: 1fr; } }
.cdl .video-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: pointer; }
.cdl .video-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.2); }
.cdl .video-cover { position: relative; aspect-ratio: 16/9; background: var(--acc-video-fallback, linear-gradient(135deg, #0a1628, #1e3a5f)); display: flex; align-items: center; justify-content: center; overflow: hidden; }
.cdl .video-cover-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
.cdl .video-play-btn { position: relative; z-index: 1; width: 48px; height: 48px; border-radius: 50%; background: var(--acc-video-play-bg, rgba(59,130,246,0.85)); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.3); transition: all 0.3s ease; }
.cdl .video-play-btn span { color: #fff; font-size: 16px; margin-left: 3px; }
.cdl .video-card:hover .video-play-btn { transform: scale(1.15); }
.cdl .video-duration { position: absolute; bottom: 8px; right: 8px; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.75); color: #fff; font-size: 11px; font-weight: 600; }
.cdl .video-info { padding: 14px 16px; }
.cdl .video-info h4 { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.cdl .video-info p { font-size: 12px; color: #94a3b8; }

.cdl .section-sub-title { font-size: 20px; font-weight: 800; color: #0f172a; padding: 12px 0; border-bottom: 2px solid #f1f5f9; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
.cdl .section-sub-title::before { content: ''; display: inline-block; width: 4px; height: 24px; border-radius: 2px; background: var(--acc-glow-1, #3b82f6); flex-shrink: 0; }

.cdl .relationships-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .cdl .relationships-grid { grid-template-columns: 1fr; } }
.cdl .relationship-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); border-left: 4px solid var(--acc-glow-1, #3b82f6); }
.cdl .relationship-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.2); }
.cdl .rel-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: #f8fafc; }
.cdl .rel-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.cdl .rel-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }
.cdl .rel-type { display: inline-flex; align-items: center; gap: 3px; padding: 2px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; }
.cdl .rel-romance { background: #fce7f3; color: #be185d; }
.cdl .rel-family { background: #dbeafe; color: #1d4ed8; }
.cdl .rel-friend { background: #d1fae5; color: #047857; }
.cdl .rel-other { background: #f1f5f9; color: #475569; }

/* ===== Review ===== */
.cdl .review-hero { position: relative; padding: 64px 0 48px; overflow: hidden; background: var(--acc-review-bg, linear-gradient(135deg, #f8fafc 0%, #eef2f7 40%, #e8eef6 100%)); }
.cdl .review-hero-bg { position: absolute; inset: 0; opacity: 0.06; background-image: var(--acc-review-dots, radial-gradient(circle, #3b82f6 1px, transparent 1px)); background-size: 24px 24px; }
.cdl .review-hero-overlay { position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; border-radius: 50%; background: var(--acc-review-overlay, rgba(59,130,246,0.1)); filter: blur(50px); }
.cdl .review-hero-inner { position: relative; z-index: 1; display: flex; align-items: center; gap: 28px; }
.cdl .review-hero-avatar { width: 80px; height: 80px; border-radius: 50%; flex-shrink: 0; background: #fff top/cover no-repeat; box-shadow: var(--acc-review-avatar-shadow, 0 0 0 4px rgba(59,130,246,0.15), 0 4px 20px rgba(59,130,246,0.2)); }
.cdl .review-hero-text h2 { font-size: 28px; font-weight: 800; color: #0f172a; margin: 0 0 4px; }
.cdl .review-hero-label { display: inline-block; padding: 3px 10px; border-radius: 4px; background: var(--acc-review-label-bg, rgba(59,130,246,0.12)); color: var(--acc-review-label-color, #1d4ed8); font: 700 10px/1.5 'Inter', sans-serif; letter-spacing: .12em; text-transform: uppercase; }
.cdl .review-hero-desc { font-size: 13px; color: var(--acc-review-desc-color, #64748b); margin: 0; }
.cdl .review-article { max-width: 820px; margin: 0 auto; }
.cdl .review-body-card { background: #fff; border-radius: 20px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: var(--acc-review-body-border, 1px solid rgba(59,130,246,0.06)); }
.cdl .review-text { font-size: 15.5px; line-height: 2.2; color: #334155; white-space: pre-line; letter-spacing: 0.01em; }
.cdl .review-placeholder { font-size: 15px; color: #94a3b8; text-align: center; padding: 32px 0; }
@media (max-width: 640px) {
  .cdl .review-hero-inner { flex-direction: column; text-align: center; }
  .cdl .review-hero-text h2 { font-size: 24px; }
  .cdl .review-body-card { padding: 24px; }
}
</style>
