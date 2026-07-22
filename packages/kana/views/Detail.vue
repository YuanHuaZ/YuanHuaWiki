<template>
  <div class="detail-page kana-page">
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
          <h1 class="hero-name-jp">{{ data.nameJp }}</h1>
          <p class="hero-name-sub">{{ data.nameSub }}</p>
          <div class="hero-title-badge">🎭 {{ data.title }}</div>
          <div class="tags"><span v-for="(t,i) in data.tags" :key="i" :class="['tag', t.cls]">{{ t.text }}</span></div>
        </div>
        <div class="hero-visual animate-slide-up delay-200">
          <div class="hero-avatar-wrapper">
            <div class="hero-avatar-ring"></div>
            <div v-if="data.image" class="hero-avatar" :style="{ background: `url(${data.image}) top center/cover no-repeat` }"></div>
            <div v-else class="hero-avatar avatar-placeholder">
              <span class="avatar-emoji">🎭</span>
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
        <button v-for="tab in mainTabs" :key="tab.key"
          :class="['main-tab-btn', { active: activeMainTab === tab.key }]" @click="activeMainTab = tab.key">
          <span class="main-tab-icon">{{ tab.icon }}</span> {{ tab.label }}
        </button>
      </div>
    </nav>

    <!-- Tab 1: Profile -->
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
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab 2: Anime -->
    <div v-show="activeMainTab === 'anime'" class="tab-panel-main">
      <section class="section anime-section">
        <div class="container">
          <div class="anime-hero-card">
            <div class="anime-cover">
              <div class="anime-cover-grid"></div>
              <div class="anime-cover-icon">⭐</div>
              <div class="anime-cover-badge">OSHI NO KO</div>
            </div>
            <div class="anime-info">
              <span class="anime-info-label">主要登场作品</span>
              <h3 class="anime-info-title">我推的孩子</h3>
              <p class="anime-info-title-jp">【推しの子】</p>
              <div class="anime-info-meta">
                <div class="anime-meta-item"><span class="meta-icon">🏢</span><span class="meta-label">制作：</span>动画工房</div>
                <div class="anime-meta-item"><span class="meta-icon">📅</span><span class="meta-label">播出：</span>2023年4月</div>
                <div class="anime-meta-item"><span class="meta-icon">📺</span><span class="meta-label">集数：</span>全11话</div>
                <div class="anime-meta-item"><span class="meta-icon">🎤</span><span class="meta-label">CV：</span>潘惠美</div>
              </div>
              <p class="anime-info-desc">有马加奈作为<span class="highlight">过气天才童星</span>登场，在星野阿库亚的邀请下加入新生B小町，<span class="highlight-pink">重新找到了属于自己的舞台</span>。她在演艺圈挣扎求存的故事感动了无数观众。</p>
              <div class="anime-tag-row"><span class="anime-tag dark">演艺圈</span><span class="anime-tag dark">偶像</span><span class="anime-tag dark">恋爱</span><span class="anime-tag live">正版引进</span></div>
              <div class="anime-info-actions">
                <a href="#" class="btn-bilibili" @click.prevent="showToastMsg('Bilibili观看功能即将开放')"><span class="bili-icon">📺</span> 在Bilibili观看 <span class="bili-arrow">→</span></a>
                <a href="#" class="btn-outline-sm" @click.prevent="showToastMsg('详情功能即将开放')">🔗 查看番剧详情</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab 3: Gallery -->
    <div v-show="activeMainTab === 'gallery'" class="tab-panel-main">
      <section class="section" style="background:#f1f5f9;">
        <div class="container">
          <div class="gallery-grid">
            <div v-for="(item, idx) in galleryItems" :key="idx"
              :class="['gallery-item', 'animate-slide-up', `delay-${(idx%4+1)*100}`]" @click="openLightbox(item)">
              <div v-if="item.isImage" class="gallery-item-inner" :style="{ background: `url(${item.bg}) center/cover no-repeat` }"></div>
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

    <!-- Tab 4: Abilities -->
    <div v-show="activeMainTab === 'abilities'" class="tab-panel-main">
      <section class="section">
        <div class="container">
          <div class="abilities-list">
            <div v-for="(ab, idx) in data.abilities" :key="idx"
              :class="['ability-card', 'animate-slide-up', `delay-${(idx+1)*100}`]">
              <div class="ability-icon">{{ ab.icon }}</div>
              <div class="ability-info">
                <h4>{{ ab.name }} <span class="ability-grade">{{ ab.grade }}级</span></h4>
                <p v-html="ab.desc"></p>
              </div>
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
import { ref } from 'vue'
import AppHeader from '@packages/shared/components/AppHeader/index.vue'
import AppFooter from '@packages/shared/components/AppFooter/index.vue'
import BackToTop from '@packages/shared/components/BackToTop/index.vue'
import GalleryLightbox from '@packages/shared/components/GalleryLightbox/index.vue'
import data from '../api/index.js'
import { useToast } from '@/util/toast'

export default {
  name: 'KanaDetail',
  components: { AppHeader, AppFooter, BackToTop, GalleryLightbox },
  setup() {
    const { showToast } = useToast()
    const lightbox = ref(null)
    const activeMainTab = ref('profile')
    const activeSubTab = ref('personality')

    const mainTabs = [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ]

    const galleryItems = [
      { bg: 'linear-gradient(135deg, #fce7f3, #fbcfe8)', icon: '🎭', label: '官方立绘', badge: '立绘', overlay: '有马加奈 · 官方角色立绘' },
      { bg: 'linear-gradient(135deg, #ffedd5, #fed7aa)', icon: '🎬', label: '动画截图 01', badge: '截图', overlay: '高中与阿库亚重逢' },
      { bg: 'linear-gradient(135deg, #dcfce7, #d9f99d)', icon: '🎬', label: '动画截图 02', badge: '截图', overlay: 'B小町初登台' },
      { bg: 'linear-gradient(135deg, #ecfeff, #cffafe)', icon: '🎬', label: '动画截图 03', badge: '截图', overlay: '十秒落泪名场面' },
      { bg: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)', icon: '🖥️', label: '壁纸 01', badge: '壁纸', overlay: '1920×1080' },
      { bg: 'linear-gradient(135deg, #fce7f3, #fbcfe8)', icon: '📱', label: '壁纸 02', badge: '壁纸', overlay: '1080×1920' },
      { bg: 'linear-gradient(135deg, #ffedd5, #fed7aa)', icon: '🎨', label: '官方插画', badge: '插画', overlay: '动画化纪念插画' },
      { bg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', icon: '🎨', label: '公式设定集', badge: '设定', overlay: '角色设定资料集' }
    ]

    function particleStyle() {
      return {
        width: (3+Math.random()*3)+'px', height: (3+Math.random()*3)+'px',
        top: (Math.random()*100)+'%', left: (Math.random()*100)+'%',
        '--dur': (3+Math.random()*3)+'s', '--delay': (Math.random()*3)+'s'
      }
    }

    function showToastMsg(msg) { showToast(msg, 'info') }
    function openLightbox(item) { lightbox.value.open(item) }

    return { data, lightbox, activeMainTab, activeSubTab, mainTabs, galleryItems, particleStyle, showToastMsg, openLightbox }
  }
}
</script>

<style scoped>
.detail-page { min-height: 100vh; }

.hero {
  position: relative; min-height: 70vh; padding: 80px 0 50px;
  display: flex; align-items: center; overflow: hidden;
  background: linear-gradient(135deg, #0f0f11 0%, #1a1a1e 25%, #12121a 50%, #111118 75%, #0a0a0f 100%);
}
.hero-glow { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; opacity: 0.15; }
.hero-glow-1 { width: 360px; height: 360px; background: #ffffff; top: -80px; left: -80px; animation: float 8s ease-in-out infinite; }
.hero-glow-2 { width: 260px; height: 260px; background: #cbd5e1; bottom: -60px; right: -50px; animation: float 10s ease-in-out infinite reverse; }
.hero-bg-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.particle { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.3); animation: pixelFloat var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
.hero-grid { position: absolute; inset: 0; z-index: 1; background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 60px 60px; }
.hero-content { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 0 24px; max-width: 1060px; margin: 0 auto; width: 100%; }
@media (max-width: 1024px) { .hero-content { grid-template-columns: 1fr; text-align: center; gap: 32px; } }
.hero-text { display: flex; flex-direction: column; gap: 10px; }
@media (max-width: 1024px) { .hero-text { align-items: center; } }
.hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); padding: 5px 14px; border-radius: 50px; font-size: 12px; color: #e2e8f0; font-weight: 500; width: fit-content; margin-bottom: 6px; }
.hero-badge .dot { width: 7px; height: 7px; background: #ffffff; border-radius: 50%; animation: pulseGlow 2s ease-in-out infinite; }
.hero-name-jp { font-size: clamp(36px, 6vw, 56px); font-weight: 900; line-height: 1.1; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 40%, #cbd5e1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.05em; }
.hero-name-sub { font-size: 16px; color: #94a3b8; font-weight: 400; letter-spacing: 0.06em; }
.hero-title-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); padding: 6px 16px; border-radius: 8px; font-size: 14px; color: #e2e8f0; font-weight: 600; width: fit-content; margin-top: 4px; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.tags .tag { padding: 3px 10px; font-size: 11px; }
@media (max-width: 1024px) { .hero-title-badge { margin: 0 auto; } .tags { justify-content: center; } }
.hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
.hero-avatar-wrapper { position: relative; width: 280px; height: 280px; }
@media (max-width: 768px) { .hero-avatar-wrapper { width: 220px; height: 220px; } }
.hero-avatar-ring { position: absolute; inset: -14px; border-radius: 50%; border: 3px solid transparent; background: linear-gradient(135deg, #ffffff, #cbd5e1, #a855f7, #ffffff) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: spinSlow 8s linear infinite; }
.hero-avatar { width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 0 50px rgba(255,255,255,0.3); }
.avatar-placeholder { display: flex; align-items: center; justify-content: center; background: linear-gradient(180deg, #1e293b 0%, #1a1020 50%, #0a0a1a 100%); }
.avatar-emoji { font-size: 80px; filter: drop-shadow(0 0 30px rgba(255,255,255,0.5)); }

.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; margin-bottom: 20px; flex-wrap: wrap; padding-top: 16px; }
.breadcrumb a { color: #64748b; transition: color 0.2s; }
.breadcrumb a:hover { color: #a855f7; }
.breadcrumb .sep { color: #cbd5e1; }
.breadcrumb .current { color: #a855f7; font-weight: 600; }

.main-tab-nav { z-index: 900; background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.main-tab-nav .container { display: flex; gap: 0; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.main-tab-btn { flex-shrink: 0; padding: 16px 24px; font-size: 14px; font-weight: 600; font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; border: none; background: none; cursor: pointer; color: #64748b; transition: all 0.25s ease; position: relative; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.main-tab-btn:hover { color: #1e293b; background: #f8fafc; }
.main-tab-btn.active { color: #475569; }
.main-tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 16px; right: 16px; height: 3px; background: linear-gradient(135deg, #ffffff, #cbd5e1); border-radius: 2px 2px 0 0; }

.info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 1024px) { .info-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .info-grid { grid-template-columns: 1fr; } }
.info-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: all 0.3s ease; display: flex; align-items: flex-start; gap: 16px; }
.info-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
.info-card-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
.info-card-icon.purple { background: #f3e8ff; } .info-card-icon.pink { background: #fce7f3; } .info-card-icon.cyan { background: #ecfeff; }
.info-card-text h4 { font-size: 11px; color: #94a3b8; font-weight: 500; margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
.info-card-text p { font-size: 15px; color: #0f172a; font-weight: 600; }

.tabs-card { background: #fff; border-radius: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden; }
.tabs-nav { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; }
.tab-btn { padding: 18px 28px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; background: none; cursor: pointer; color: #94a3b8; transition: all 0.2s; position: relative; white-space: nowrap; }
.tab-btn:hover { color: #64748b; }
.tab-btn.active { color: #475569; }
.tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 20%; right: 20%; height: 3px; background: linear-gradient(135deg, #ffffff, #cbd5e1); border-radius: 2px; }
.tab-panel { display: none; padding: 32px; }
.tab-panel.active { display: block; animation: fadeIn 0.4s ease; }
.tab-panel p { font-size: 15px; line-height: 2.1; color: #475569; white-space: pre-line; margin-bottom: 14px; font-weight: 400; }
.key-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
.key-tag { display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; border-radius: 7px; font-size: 12px; font-weight: 600; background: #fce7f3; color: #db2777; }

.anime-section { background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); }
.anime-hero-card { display: grid; grid-template-columns: 280px 1fr; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
.anime-cover { position: relative; min-height: 280px; background: linear-gradient(135deg, #111118 0%, #1e1e24 40%, #12121a 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; overflow: hidden; }
.anime-cover::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%); }
.anime-cover-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 40px 40px; }
.anime-cover-icon { font-size: 72px; position: relative; z-index: 1; }
.anime-cover-badge { position: relative; z-index: 1; margin-top: 12px; padding: 6px 16px; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); border-radius: 50px; font-size: 12px; color: #e2e8f0; font-weight: 600; }
.anime-info { padding: 36px; display: flex; flex-direction: column; gap: 16px; }
.anime-info-label { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #ffffff; }
.anime-info-label::before { content: ''; width: 20px; height: 2px; background: #ffffff; border-radius: 1px; }
.anime-info-title { font-size: clamp(20px, 3vw, 28px); font-weight: 800; color: #0f172a; }
.anime-info-title-jp { font-size: 14px; color: #94a3b8; }
.anime-info-meta { display: flex; flex-wrap: wrap; gap: 20px; }
.anime-meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; }
.anime-info-desc { font-size: 14.5px; color: #475569; line-height: 1.9; }
.anime-tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.anime-tag { padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.anime-tag.dark { background: #f1f5f9; color: #475569; }
.anime-tag.live { background: #dcfce7; color: #16a34a; }
.anime-info-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.btn-bilibili { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 15px; font-weight: 700; font-family: inherit; background: linear-gradient(135deg, #fb7299, #fc8bab); color: #fff; box-shadow: 0 4px 16px rgba(251,114,153,0.4); cursor: pointer; transition: all 0.3s ease; }
.btn-outline-sm { display: inline-flex; align-items: center; gap: 6px; padding: 12px 20px; border-radius: 12px; font-size: 14px; font-weight: 600; font-family: inherit; background: transparent; color: #64748b; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s ease; }

.gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 1024px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
.gallery-item { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; aspect-ratio: 3/4; transition: all 0.3s ease; }
.gallery-item:hover { transform: scale(1.03); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
.gallery-item-inner { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; transition: all 0.3s ease; }
.gallery-item:hover .gallery-item-inner { transform: scale(1.05); }
.gallery-item-icon { font-size: 56px; margin-bottom: 12px; }
.gallery-item-label { font-size: 12px; color: #94a3b8; font-weight: 500; }
.gallery-item-badge { position: absolute; top: 12px; right: 12px; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; background: rgba(0,0,0,0.5); color: #e2e8f0; }
.gallery-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
.gallery-item:hover .gallery-item-overlay { opacity: 1; }
.gallery-overlay-text { color: #fff; font-size: 13px; font-weight: 500; }

.abilities-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .abilities-list { grid-template-columns: 1fr; } }
.ability-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); display: flex; gap: 16px; transition: all 0.3s ease; }
.ability-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
.ability-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: linear-gradient(135deg, #fce7f3, #ffedd5); }
.ability-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.ability-grade { font-weight: 400; font-size: 12px; color: #ffffff; margin-left: 4px; }
.ability-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }
</style>
