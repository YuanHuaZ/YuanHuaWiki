<template>
  <div class="detail-page meguru-page">
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
          <div class="hero-title-badge">{{ data.title }}</div>
          <div class="tags"><span v-for="(t,i) in data.tags" :key="i" :class="['tag', t.cls]">{{ t.text }}</span></div>
        </div>
        <div class="hero-visual animate-slide-up delay-200">
          <div class="hero-avatar-wrapper">
            <div class="hero-avatar-ring"></div>
            <div class="hero-avatar" :style="{ background: `url(${data.image}) top center/cover no-repeat` }"></div>
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

    <!-- Tab 2: Game -->
    <div v-show="activeMainTab === 'game'" class="tab-panel-main">
      <section class="section anime-section">
        <div class="container">
          <div class="anime-hero-card">
            <div class="anime-cover">
              <div class="anime-cover-image" :style="{ backgroundImage: `url(${gameCover})` }"></div>
            </div>
            <div class="anime-info">
              <span class="anime-info-label">主要登场游戏</span>
              <h3 class="anime-info-title">魔女的夜宴</h3>
              <p class="anime-info-title-jp">サノバウィッチ（Sabbat of the Witch）</p>
              <div class="anime-info-meta">
                <div class="anime-meta-item"><span class="meta-icon">🏢</span><span class="meta-label">开发商：</span>YUZUSOFT（柚子社）</div>
                <div class="anime-meta-item"><span class="meta-icon">📅</span><span class="meta-label">发售：</span>2015年2月27日</div>
                <div class="anime-meta-item"><span class="meta-icon">🎮</span><span class="meta-label">平台：</span>PC / PS Vita</div>
                <div class="anime-meta-item"><span class="meta-icon">🎤</span><span class="meta-label">CV：</span>遥空</div>
              </div>
              <p class="anime-info-desc">姬松学院中流传着<span class="highlight">「魔女」的传说</span>。因幡巡来到超自然研究会寻求帮助，在这场<span class="highlight-pink">青春与魔法交织的故事</span>中，用她自创的「Ciallo～」为玩家带来了一段难忘的恋爱体验。</p>
              <div class="anime-tag-row"><span class="anime-tag dark">恋爱冒险</span><span class="anime-tag dark">视觉小说</span><span class="anime-tag dark">校园</span></div>
              <div class="anime-info-actions">
                <a href="https://store.steampowered.com/app/2123450/" class="btn-bilibili btn-steam" target="_blank" rel="noopener"><span class="steam-icon">🎮</span> 在Steam购买 <span class="bili-arrow">→</span></a>
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
              <div v-if="item.isImage" class="gallery-item-inner" :style="{ background: `url(${item.bg}) top center/cover no-repeat` }"></div>
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

    <!-- Tab 4: Videos -->
    <div v-show="activeMainTab === 'videos'" class="tab-panel-main">
      <section class="section videos-section" style="background:#f8fafc;">
        <div class="container">
          <div class="video-grid">
            <a v-for="(v, idx) in videoItems" :key="idx" :href="v.url || '#'" :target="v.url ? '_blank' : undefined" rel="noopener"
              class="video-card animate-slide-up" :class="'delay-' + ((idx%2+1)*100)">
              <div class="video-cover" :style="v.cover ? { background: `url(${v.cover}) center/cover no-repeat` } : { background: 'linear-gradient(135deg, #2d1810, #4e2a1b)' }">
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

    <!-- Tab 5: Abilities -->
    <div v-show="activeMainTab === 'abilities'" class="tab-panel-main">
      <section class="section">
        <div class="container">
          <!-- Abilities -->
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
          <!-- Relationships -->
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
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import gameCover from '../images/b.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'
import data from '../api/index.js'
import { useToast } from '@/util/toast'

export default {
  name: 'MeguruDetail',
  components: { AppHeader, AppFooter, BackToTop, GalleryLightbox },
  setup() {
    const { showToast } = useToast()
    const lightbox = ref(null)
    const activeMainTab = ref('profile')
    const activeSubTab = ref('personality')

    const mainTabs = [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ]

    const galleryItems = [
      { isImage: true, bg: img1, badge: '立绘', overlay: '因幡巡 · 官方角色立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '因幡巡 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '因幡巡 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '因幡巡 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '因幡巡 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '因幡巡 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '因幡巡 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '因幡巡 · 美图 07' }
    ]

    const videoItems = ref([
      { cover: sp1, url: '#', title: '【魔女的夜宴】因幡巡 剧情合集', desc: '巡线完整剧情' },
      { cover: sp2, url: '#', title: '【サノバウィッチ】因幡めぐる 角色歌', desc: '因幡巡 角色曲' },
      { cover: sp3, url: '#', title: '【魔女的夜宴】因幡巡 MAD / AMV', desc: '因幡巡 混剪' },
      { cover: sp4, url: '#', title: '【柚子社】魔女的夜宴 全角色介绍', desc: '作品全角色介绍' }
    ])

    function particleStyle() {
      return {
        width: (3+Math.random()*3)+'px', height: (3+Math.random()*3)+'px',
        top: (Math.random()*100)+'%', left: (Math.random()*100)+'%',
        '--dur': (3+Math.random()*3)+'s', '--delay': (Math.random()*3)+'s'
      }
    }

    function showToastMsg(msg) { showToast(msg, 'info') }
    function openLightbox(item) { lightbox.value.open(item) }

    return { data, gameCover, lightbox, activeMainTab, activeSubTab, mainTabs, galleryItems, videoItems, particleStyle, showToastMsg, openLightbox }
  }
}
</script>

<style>
.meguru-page .detail-page { min-height: 100vh; }

/* ===== Hero ===== */
.meguru-page .hero {
  position: relative; min-height: 70vh; padding: 80px 0 50px;
  display: flex; align-items: center; overflow: hidden;
  background: linear-gradient(135deg, #1a1008 0%, #2e1a0a 25%, #302010 50%, #2e1d0a 75%, #1a1008 100%);
}
.meguru-page .hero-glow {
  position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; opacity: 0.25;
}
.meguru-page .hero-glow-1 { width: 500px; height: 500px; background: #f97316; top: -80px; left: -80px; animation: float 8s ease-in-out infinite; }
.meguru-page .hero-glow-2 { width: 400px; height: 400px; background: #f59e0b; bottom: -60px; right: -50px; animation: float 10s ease-in-out infinite reverse; }
.meguru-page .hero-bg-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.meguru-page .particle { position: absolute; border-radius: 50%; background: rgba(249,115,22,0.3); animation: pixelFloat var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
.meguru-page .hero-grid {
  position: absolute; inset: 0; z-index: 1;
  background-image: linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
}
.meguru-page .hero-content {
  position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
  align-items: center; padding: 0 24px; max-width: 1060px; margin: 0 auto; width: 100%;
}
@media (max-width: 1024px) { .meguru-page .hero-content { grid-template-columns: 1fr; text-align: center; gap: 32px; } }
.meguru-page .hero-text { display: flex; flex-direction: column; gap: 10px; }
@media (max-width: 1024px) { .meguru-page .hero-text { align-items: center; } }
.meguru-page .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, rgba(249,115,22,0.2), rgba(251,146,60,0.1)); border: 1px solid rgba(249,115,22,0.4); padding: 6px 16px; border-radius: 50px; font-size: 13px; color: #fb923c; font-weight: 600; width: fit-content; margin-bottom: 6px; box-shadow: 0 0 20px rgba(249,115,22,0.2); }
.meguru-page .hero-badge .dot { width: 7px; height: 7px; background: #f97316; border-radius: 50%; animation: pulseGlow 2s ease-in-out infinite; }
.meguru-page .hero-name-jp {
  font-size: clamp(40px, 7vw, 64px); font-weight: 900; line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, #fb923c 40%, #f97316 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  letter-spacing: 0.05em; filter: drop-shadow(0 0 30px rgba(249,115,22,0.3));
}
.meguru-page .hero-name-sub { font-size: 16px; color: #fb923c; font-weight: 400; letter-spacing: 0.06em; }
.meguru-page .hero-title-badge { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(251,146,60,0.12) 100%); border: 1px solid rgba(249,115,22,0.4); padding: 10px 24px; border-radius: 12px; font-size: 18px; color: #fb923c; font-weight: 700; width: fit-content; margin-top: 4px; box-shadow: 0 4px 20px rgba(249,115,22,0.2), inset 0 1px 0 rgba(255,255,255,0.08); backdrop-filter: blur(8px); letter-spacing: 0.02em; }
.meguru-page .tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.meguru-page .tags .tag { padding: 6px 16px; font-size: 13px; border: 1px solid rgba(249,115,22,0.25); background: linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,146,60,0.06)); border-radius: 50px; font-weight: 600; color: #fb923c; box-shadow: 0 0 12px rgba(249,115,22,0.1); }
@media (max-width: 1024px) { .meguru-page .hero-title-badge { margin: 0 auto; } .meguru-page .tags { justify-content: center; } }
.meguru-page .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
.meguru-page .hero-avatar-wrapper { position: relative; width: 280px; height: 280px; }
@media (max-width: 768px) { .meguru-page .hero-avatar-wrapper { width: 220px; height: 220px; } }
.meguru-page .hero-avatar-ring {
  position: absolute; inset: -14px; border-radius: 50%; border: 3px solid transparent;
  background: linear-gradient(135deg, #f97316, #fb923c, #f97316) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; animation: spinSlow 8s linear infinite;
}
.meguru-page .hero-avatar { width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 0 60px rgba(249,115,22,0.4), 0 0 120px rgba(249,115,22,0.15); }

/* ===== Breadcrumb ===== */
.meguru-page .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; margin-bottom: 20px; flex-wrap: wrap; padding-top: 16px; }
.meguru-page .breadcrumb a { color: #64748b; transition: color 0.2s; }
.meguru-page .breadcrumb a:hover { color: #f97316; }
.meguru-page .breadcrumb .sep { color: #cbd5e1; }
.meguru-page .breadcrumb .current { color: #f97316; font-weight: 600; }

/* ===== Main Tab Nav ===== */
.meguru-page .main-tab-nav { z-index: 900; background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.meguru-page .main-tab-nav .container { display: flex; gap: 0; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.meguru-page .main-tab-nav .container::-webkit-scrollbar { display: none; }
.meguru-page .main-tab-btn { flex-shrink: 0; padding: 16px 24px; font-size: 14px; font-weight: 600; font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; border: none; background: none; cursor: pointer; color: #64748b; transition: all 0.25s ease; position: relative; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.meguru-page .main-tab-btn:hover { color: #1e293b; background: #f8fafc; }
.meguru-page .main-tab-btn.active { color: #f97316; }
.meguru-page .main-tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 16px; right: 16px; height: 3px; background: linear-gradient(135deg, #f97316, #fb923c); border-radius: 2px 2px 0 0; box-shadow: 0 0 8px rgba(249,115,22,0.4); }
.meguru-page .main-tab-icon { font-size: 18px; }
@media (max-width: 480px) { .meguru-page .main-tab-btn { padding: 14px 16px; font-size: 13px; } .meguru-page .main-tab-icon { font-size: 16px; } }
.meguru-page .tab-panel-main { animation: fadeIn 0.35s ease-out; }

/* ===== Info Grid ===== */
.meguru-page .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 1024px) { .meguru-page .info-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .meguru-page .info-grid { grid-template-columns: 1fr; } }
.meguru-page .info-card { background: #fff; border-radius: 18px; padding: 26px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(249,115,22,0.08); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); display: flex; align-items: flex-start; gap: 16px; }
.meguru-page .info-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(249,115,22,0.15); }
.meguru-page .info-card-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.meguru-page .info-card-icon.orange { background: #fff7ed; } .info-card-icon.pink { background: #fce7f3; } .info-card-icon.cyan { background: #ecfeff; }
.meguru-page .info-card-text h4 { font-size: 11px; color: #94a3b8; font-weight: 500; margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
.meguru-page .info-card-text p { font-size: 15px; color: #0f172a; font-weight: 600; }

/* ===== Content Tabs ===== */
.meguru-page .tabs-card { background: #fff; border-radius: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden; }
.meguru-page .tabs-nav { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; }
.meguru-page .tab-btn { padding: 18px 28px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; background: none; cursor: pointer; color: #94a3b8; transition: all 0.2s; position: relative; white-space: nowrap; }
.meguru-page .tab-btn:hover { color: #64748b; }
.meguru-page .tab-btn.active { color: #f97316; }
.meguru-page .tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 20%; right: 20%; height: 3px; background: linear-gradient(135deg, #f97316, #f59e0b); border-radius: 2px; }
.meguru-page .tab-panel { display: none; padding: 32px; }
.meguru-page .tab-panel.active { display: block; animation: fadeIn 0.4s ease; }
@media (max-width: 768px) { .meguru-page .tab-panel { padding: 20px; } .meguru-page .tab-btn { padding: 14px 18px; font-size: 14px; } }
.meguru-page .tab-panel p { font-size: 15px; line-height: 2.1; color: #475569; white-space: pre-line; margin-bottom: 14px; font-weight: 400; }
.meguru-page .tab-panel p:last-child { margin-bottom: 0; }
.meguru-page .key-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
.meguru-page .key-tag { display: inline-flex; align-items: center; gap: 4px; padding: 6px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; background: linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04)); border: 1px solid rgba(249,115,22,0.25); color: #ea580c; }

/* ===== Anime Section ===== */
.meguru-page .anime-section { background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); }
.meguru-page .anime-hero-card { display: grid; grid-template-columns: 280px 1fr; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
@media (max-width: 768px) { .meguru-page .anime-hero-card { grid-template-columns: 1fr; } }
.meguru-page .anime-cover { position: relative; min-height: 280px; background: linear-gradient(135deg, #1a1008 0%, #4e2a1b 40%, #302010 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; overflow: hidden; }
.meguru-page .anime-cover::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(249,115,22,0.3) 0%, transparent 70%); }
.meguru-page .anime-cover-image { position: absolute; inset: 0; background-size: cover; background-position: center; }
.meguru-page .anime-cover-badge { position: relative; z-index: 1; margin-top: 12px; padding: 6px 16px; background: rgba(245,158,11,0.2); border: 1px solid rgba(245,158,11,0.3); border-radius: 50px; font-size: 12px; color: #fcd34d; font-weight: 600; }
.meguru-page .anime-info { padding: 36px; display: flex; flex-direction: column; gap: 16px; }
@media (max-width: 768px) { .meguru-page .anime-info { padding: 24px; } }
.meguru-page .anime-info-label { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #f97316; }
.meguru-page .anime-info-label::before { content: ''; width: 20px; height: 2px; background: #f97316; border-radius: 1px; }
.meguru-page .anime-info-title { font-size: clamp(20px, 3vw, 28px); font-weight: 800; color: #0f172a; }
.meguru-page .anime-info-title-jp { font-size: 14px; color: #94a3b8; }
.meguru-page .anime-info-meta { display: flex; flex-wrap: wrap; gap: 20px; }
.meguru-page .anime-meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; }
.meguru-page .anime-tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.meguru-page .anime-tag { padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.meguru-page .anime-tag.dark { background: #f1f5f9; color: #475569; }
.meguru-page .anime-tag.live { background: #dcfce7; color: #16a34a; }
.meguru-page .anime-info-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.meguru-page .btn-bilibili { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 15px; font-weight: 700; font-family: inherit; background: linear-gradient(135deg, #f97316, #fb923c); color: #fff; box-shadow: 0 4px 16px rgba(249,115,22,0.4); cursor: pointer; transition: all 0.3s ease; text-decoration: none; }
.meguru-page .btn-steam { background: linear-gradient(135deg, #1b2838, #2a475e); box-shadow: 0 4px 16px rgba(27,40,56,0.4); }
.meguru-page .btn-bilibili:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(249,115,22,0.55); }
.meguru-page .btn-steam:hover { box-shadow: 0 8px 24px rgba(27,40,56,0.6); }
.meguru-page .btn-outline-sm { display: inline-flex; align-items: center; gap: 6px; padding: 12px 20px; border-radius: 12px; font-size: 14px; font-weight: 600; font-family: inherit; background: transparent; color: #64748b; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s ease; }
.meguru-page .btn-outline-sm:hover { border-color: #f97316; color: #f97316; transform: translateY(-2px); }

/* ===== Gallery ===== */
.meguru-page .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 1024px) { .meguru-page .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .meguru-page .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
.meguru-page .gallery-item { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; aspect-ratio: 3/4; background: linear-gradient(135deg, #4e2a1b, #302010); transition: all 0.3s ease; }
.meguru-page .gallery-item:hover { transform: scale(1.03); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
.meguru-page .gallery-item-inner { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; transition: all 0.3s ease; }
.meguru-page .gallery-item:hover .gallery-item-inner { transform: scale(1.05); }
.meguru-page .gallery-item-icon { font-size: 56px; margin-bottom: 12px; }
.meguru-page .gallery-item-label { font-size: 12px; color: #94a3b8; font-weight: 500; }
.meguru-page .gallery-item-badge { position: absolute; top: 12px; right: 12px; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; background: rgba(0,0,0,0.5); color: #e2e8f0; }
.meguru-page .gallery-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
.meguru-page .gallery-item:hover .gallery-item-overlay { opacity: 1; }
.meguru-page .gallery-overlay-text { color: #fff; font-size: 13px; font-weight: 500; }

/* ===== Abilities ===== */
.meguru-page .abilities-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .meguru-page .abilities-list { grid-template-columns: 1fr; } }
.meguru-page .ability-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
.meguru-page .ability-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(249,115,22,0.15); }
.meguru-page .ability-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04)); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.meguru-page .ability-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.meguru-page .ability-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }

/* ===== Videos ===== */
.meguru-page .videos-section { padding: 48px 0 64px; }
.meguru-page .video-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 640px) { .meguru-page .video-grid { grid-template-columns: 1fr; } }
.meguru-page .video-card { display: block; text-decoration: none; color: inherit; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: pointer; }
.meguru-page .video-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(249,115,22,0.15); }
.meguru-page .video-cover { position: relative; aspect-ratio: 16/9; background: linear-gradient(135deg, #2d1810, #4e2a1b); display: flex; align-items: center; justify-content: center; }
.meguru-page .video-play-btn { width: 48px; height: 48px; border-radius: 50%; background: rgba(249,115,22,0.85); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(249,115,22,0.4); transition: all 0.3s ease; }
.meguru-page .video-play-btn span { color: #fff; font-size: 16px; margin-left: 3px; }
.meguru-page .video-card:hover .video-play-btn { transform: scale(1.15); background: rgba(249,115,22,1); }
.meguru-page .video-duration { position: absolute; bottom: 8px; right: 8px; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.75); color: #fff; font-size: 11px; font-weight: 600; }
.meguru-page .video-info { padding: 14px 16px; }
.meguru-page .video-info h4 { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.meguru-page .video-info p { font-size: 12px; color: #94a3b8; }

/* Section sub-title */
.meguru-page .section-sub-title { font-size: 20px; font-weight: 800; color: #0f172a; padding: 12px 0; border-bottom: 2px solid #f1f5f9; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
.meguru-page .section-sub-title::before { content: ''; display: inline-block; width: 4px; height: 20px; border-radius: 2px; background: linear-gradient(180deg, #f97316, #fb923c); flex-shrink: 0; }

/* Relationships */
.meguru-page .relationships-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .meguru-page .relationships-grid { grid-template-columns: 1fr; } }
.meguru-page .relationship-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); border-left: 4px solid #f97316; }
.meguru-page .relationship-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(249,115,22,0.15); }
.meguru-page .rel-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: #f8fafc; }
.meguru-page .rel-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.meguru-page .rel-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }
.meguru-page .rel-type { display: inline-flex; align-items: center; gap: 3px; padding: 2px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; }
.meguru-page .rel-romance { background: #fce7f3; color: #be185d; }
.meguru-page .rel-family { background: #dbeafe; color: #1d4ed8; }
.meguru-page .rel-friend { background: #d1fae5; color: #047857; }
.meguru-page .rel-other { background: #f1f5f9; color: #475569; }
</style>
