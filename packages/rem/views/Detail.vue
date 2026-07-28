<template>
  <div class="detail-page rem-page">
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
            <div v-if="data.image" class="hero-avatar" :style="{ background: `url(${data.image}) top center/cover no-repeat` }"></div>
            <div v-else class="hero-avatar avatar-placeholder">
              <span class="avatar-emoji">💙</span>
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
              <div class="anime-cover-image" :style="{ backgroundImage: `url(${animeCover})` }"></div>
            </div>
            <div class="anime-info">
              <span class="anime-info-label">主要登场作品</span>
              <h3 class="anime-info-title">Re:从零开始的异世界生活</h3>
              <p class="anime-info-title-jp">Re:ゼロから始める異世界生活</p>
              <div class="anime-info-meta">
                <div class="anime-meta-item"><span class="meta-icon">🏢</span><span class="meta-label">制作：</span>WHITE FOX</div>
                <div class="anime-meta-item"><span class="meta-icon">📅</span><span class="meta-label">播出：</span>2016年4月</div>
                <div class="anime-meta-item"><span class="meta-icon">📺</span><span class="meta-label">集数：</span>全25话</div>
                <div class="anime-meta-item"><span class="meta-icon">🎤</span><span class="meta-label">CV：</span>水濑祈</div>
              </div>
              <p class="anime-info-desc">普通高中生菜月昴被召唤到异世界，在罗兹瓦尔宅邸遇到了<span class="highlight">双胞胎女仆雷姆和拉姆</span>。雷姆作为<span class="highlight-pink">鬼族幸存者与战斗女仆</span>，在故事中扮演着至关重要的角色。</p>
              <div class="anime-tag-row"><span class="anime-tag dark">异世界</span><span class="anime-tag dark">奇幻</span><span class="anime-tag dark">冒险</span><span class="anime-tag live">正版引进</span></div>
              <div class="anime-info-actions">
                <a href="https://www.bilibili.com/bangumi/play/ep307056?spm_id_from=333.337.0.0" class="btn-bilibili" target="_blank" rel="noopener"><span class="bili-icon">📺</span> 在Bilibili观看 <span class="bili-arrow">→</span></a>
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
              <div class="video-cover" :style="v.cover ? { background: `url(${v.cover}) center/cover no-repeat` } : { background: 'linear-gradient(135deg, #0a1628, #1e3a5f)' }">
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
import animeCover from '../images/a.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'
import data from '../api/index.js'
import { useToast } from '@/util/toast'

export default {
  name: 'RemDetail',
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
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ]

    const galleryItems = [
      { isImage: true, bg: img1, badge: '立绘', overlay: '雷姆 · 官方角色立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '雷姆 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '雷姆 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '雷姆 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '雷姆 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '雷姆 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '雷姆 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '雷姆 · 美图 07' }
    ]

    const videoItems = ref([
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1Ls411i7Zc', title: '轮到蕾姆来帮你洗脑了！', desc: '雷姆 洗脑向剪辑' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1GZ4y1v7SM', title: '【Re:0】只是一分钟的告白却是我六年的救赎', desc: '雷姆 告白剪辑' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1js411a7yH', title: '【Re异世界】前前前世(雷姆,就算你被全世界忘记,你的名字会一直被我记在心里！)', desc: '雷姆 MV' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1Vs411x79o', title: '【从零开始的异世界生活】手书 两个不同的结局', desc: '雷姆 手书' }
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

    return { data, animeCover, videoItems, lightbox, activeMainTab, activeSubTab, mainTabs, galleryItems, particleStyle, showToastMsg, openLightbox }
  }
}
</script>

<style>
.rem-page .detail-page { min-height: 100vh; }

.rem-page .hero {
  position: relative; min-height: 70vh; padding: 80px 0 50px;
  display: flex; align-items: center; overflow: hidden;
  background: linear-gradient(135deg, #0a0a1a 0%, #0a1628 25%, #0d1a2e 50%, #0a1228 75%, #0a0a1a 100%);
}
.rem-page .hero-glow { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; opacity: 0.25; }
.rem-page .hero-glow-1 { width: 500px; height: 500px; background: #3b82f6; top: -80px; left: -80px; animation: float 8s ease-in-out infinite; }
.rem-page .hero-glow-2 { width: 400px; height: 400px; background: #06b6d4; bottom: -60px; right: -50px; animation: float 10s ease-in-out infinite reverse; }
.rem-page .hero-bg-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.rem-page .particle { position: absolute; border-radius: 50%; background: rgba(59,130,246,0.3); animation: pixelFloat var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
.rem-page .hero-grid { position: absolute; inset: 0; z-index: 1; background-image: linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px); background-size: 60px 60px; }
.rem-page .hero-content { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 0 24px; max-width: 1060px; margin: 0 auto; width: 100%; }
@media (max-width: 1024px) { .rem-page .hero-content { grid-template-columns: 1fr; text-align: center; gap: 32px; } }
.rem-page .hero-text { display: flex; flex-direction: column; gap: 10px; }
@media (max-width: 1024px) { .rem-page .hero-text { align-items: center; } }
.rem-page .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.1)); border: 1px solid rgba(59,130,246,0.4); padding: 5px 14px; border-radius: 50px; font-size: 13px; color: #93c5fd; font-weight: 500; width: fit-content; margin-bottom: 6px; box-shadow: 0 0 16px rgba(59,130,246,0.2); }
.rem-page .hero-badge .dot { width: 7px; height: 7px; background: #3b82f6; border-radius: 50%; animation: pulseGlow 2s ease-in-out infinite; }
.rem-page .hero-name-jp { font-size: clamp(40px, 7vw, 64px); font-weight: 900; line-height: 1.1; background: linear-gradient(135deg, #dbeafe 0%, #93c5fd 40%, #06b6d4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.05em; filter: drop-shadow(0 0 20px rgba(59,130,246,0.3)); }
.rem-page .hero-name-sub { font-size: 16px; color: #93c5fd; font-weight: 400; letter-spacing: 0.06em; }
.rem-page .hero-title-badge { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.12)); border: 1px solid rgba(59,130,246,0.4); padding: 10px 24px; border-radius: 12px; font-size: 18px; color: #a5f3fc; font-weight: 700; width: fit-content; margin-top: 4px; box-shadow: 0 4px 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.08); backdrop-filter: blur(8px); letter-spacing: 0.02em; }
.rem-page .tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.rem-page .tags .tag { padding: 6px 16px; font-size: 13px; border-radius: 50px; font-weight: 600; background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.06)); border: 1px solid rgba(59,130,246,0.25); color: #3b82f6; box-shadow: 0 2px 8px rgba(59,130,246,0.1); }
@media (max-width: 1024px) { .rem-page .hero-title-badge { margin: 0 auto; } .rem-page .tags { justify-content: center; } }
.rem-page .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
.rem-page .hero-avatar-wrapper { position: relative; width: 280px; height: 280px; }
@media (max-width: 768px) { .rem-page .hero-avatar-wrapper { width: 220px; height: 220px; } }
.rem-page .hero-avatar-ring { position: absolute; inset: -14px; border-radius: 50%; border: 3px solid transparent; background: linear-gradient(135deg, #3b82f6, #06b6d4, #93c5fd, #3b82f6) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: spinSlow 8s linear infinite; }
.rem-page .hero-avatar { width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 0 60px rgba(59,130,246,0.4), 0 0 120px rgba(59,130,246,0.15); }
.rem-page .avatar-placeholder { display: flex; align-items: center; justify-content: center; background: linear-gradient(180deg, #1e3a5f 0%, #0f1b2d 50%, #0a0a1a 100%); }
.rem-page .avatar-emoji { font-size: 80px; filter: drop-shadow(0 0 30px rgba(59,130,246,0.5)); }

.rem-page .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; margin-bottom: 20px; flex-wrap: wrap; padding-top: 16px; }
.rem-page .breadcrumb a { color: #64748b; transition: color 0.2s; }
.rem-page .breadcrumb a:hover { color: #3b82f6; }
.rem-page .breadcrumb .sep { color: #cbd5e1; }
.rem-page .breadcrumb .current { color: #3b82f6; font-weight: 600; }

.rem-page .main-tab-nav { z-index: 900; background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.rem-page .main-tab-nav .container { display: flex; gap: 0; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.rem-page .main-tab-btn { flex-shrink: 0; padding: 16px 24px; font-size: 14px; font-weight: 600; font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; border: none; background: none; cursor: pointer; color: #64748b; transition: all 0.25s ease; position: relative; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.rem-page .main-tab-btn:hover { color: #1e293b; background: #f8fafc; }
.rem-page .main-tab-btn.active { color: #3b82f6; }
.rem-page .main-tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 16px; right: 16px; height: 3px; background: linear-gradient(135deg, #3b82f6, #06b6d4); border-radius: 2px 2px 0 0; box-shadow: 0 2px 12px rgba(59,130,246,0.3); }

.rem-page .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 1024px) { .rem-page .info-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .rem-page .info-grid { grid-template-columns: 1fr; } }
.rem-page .info-card { background: #fff; border-radius: 18px; padding: 26px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(59,130,246,0.08); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); display: flex; align-items: flex-start; gap: 16px; }
.rem-page .info-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.15); }
.rem-page .info-card-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.04); background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04)); }
.rem-page .info-card-icon.purple { background: #f3e8ff; } .info-card-icon.pink { background: #fce7f3; } .info-card-icon.cyan { background: #ecfeff; }
.rem-page .info-card-text h4 { font-size: 11px; color: #94a3b8; font-weight: 500; margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
.rem-page .info-card-text p { font-size: 15px; color: #0f172a; font-weight: 600; }

.rem-page .tabs-card { background: #fff; border-radius: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden; }
.rem-page .tabs-nav { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; }
.rem-page .tab-btn { padding: 18px 28px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; background: none; cursor: pointer; color: #94a3b8; transition: all 0.2s; position: relative; white-space: nowrap; }
.rem-page .tab-btn:hover { color: #64748b; }
.rem-page .tab-btn.active { color: #3b82f6; }
.rem-page .tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 20%; right: 20%; height: 3px; background: linear-gradient(135deg, #3b82f6, #06b6d4); border-radius: 2px; }
.rem-page .tab-panel { display: none; padding: 32px; }
.rem-page .tab-panel.active { display: block; animation: fadeIn 0.4s ease; }
.rem-page .tab-panel p { font-size: 15px; line-height: 2.1; color: #475569; white-space: pre-line; margin-bottom: 14px; font-weight: 400; }
.rem-page .key-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
.rem-page .key-tag { display: inline-flex; align-items: center; gap: 4px; padding: 6px 16px; border-radius: 50px; font-size: 13px; font-weight: 600; background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.06)); border: 1px solid rgba(59,130,246,0.25); color: #3b82f6; box-shadow: 0 2px 8px rgba(59,130,246,0.1); }

.rem-page .anime-section { background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); }
.rem-page .anime-hero-card { display: grid; grid-template-columns: 280px 1fr; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
.rem-page .anime-cover { position: relative; min-height: 280px; background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 40%, #0d1a2e 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; overflow: hidden; }
.rem-page .anime-cover::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 70%); }
.rem-page .anime-cover-image { position: absolute; inset: 0; background-size: cover; background-position: center; }
.rem-page .anime-cover-badge { position: relative; z-index: 1; margin-top: 12px; padding: 6px 16px; background: rgba(6,182,212,0.2); border: 1px solid rgba(6,182,212,0.3); border-radius: 50px; font-size: 12px; color: #67e8f9; font-weight: 600; }
.rem-page .anime-info { padding: 36px; display: flex; flex-direction: column; gap: 16px; }
.rem-page .anime-info-label { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #3b82f6; }
.rem-page .anime-info-label::before { content: ''; width: 20px; height: 2px; background: #3b82f6; border-radius: 1px; }
.rem-page .anime-info-title { font-size: clamp(20px, 3vw, 28px); font-weight: 800; color: #0f172a; }
.rem-page .anime-info-title-jp { font-size: 14px; color: #94a3b8; }
.rem-page .anime-info-meta { display: flex; flex-wrap: wrap; gap: 20px; }
.rem-page .anime-meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; }
.rem-page .anime-info-desc { font-size: 14.5px; color: #475569; line-height: 1.9; }
.rem-page .anime-tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.rem-page .anime-tag { padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.rem-page .anime-tag.dark { background: #f1f5f9; color: #475569; }
.rem-page .anime-tag.live { background: #dcfce7; color: #16a34a; }
.rem-page .anime-info-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.rem-page .btn-bilibili { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 15px; font-weight: 700; font-family: inherit; background: linear-gradient(135deg, #fb7299, #fc8bab); color: #fff; box-shadow: 0 4px 16px rgba(251,114,153,0.4); cursor: pointer; transition: all 0.3s ease; }
.rem-page .btn-outline-sm { display: inline-flex; align-items: center; gap: 6px; padding: 12px 20px; border-radius: 12px; font-size: 14px; font-weight: 600; font-family: inherit; background: transparent; color: #64748b; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s ease; }

.rem-page .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 1024px) { .rem-page .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .rem-page .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
.rem-page .gallery-item { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; aspect-ratio: 3/4; transition: all 0.3s ease; }
.rem-page .gallery-item:hover { transform: scale(1.03); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
.rem-page .gallery-item-inner { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; transition: all 0.3s ease; }
.rem-page .gallery-item:hover .gallery-item-inner { transform: scale(1.05); }
.rem-page .gallery-item-icon { font-size: 56px; margin-bottom: 12px; }
.rem-page .gallery-item-label { font-size: 12px; color: #94a3b8; font-weight: 500; }
.rem-page .gallery-item-badge { position: absolute; top: 12px; right: 12px; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; background: rgba(0,0,0,0.5); color: #e2e8f0; }
.rem-page .gallery-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
.rem-page .gallery-item:hover .gallery-item-overlay { opacity: 1; }
.rem-page .gallery-overlay-text { color: #fff; font-size: 13px; font-weight: 500; }

.rem-page .abilities-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .rem-page .abilities-list { grid-template-columns: 1fr; } }
.rem-page .ability-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
.rem-page .ability-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.2); }
.rem-page .ability-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04)); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.rem-page .ability-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.rem-page .ability-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }

.rem-page .videos-section { padding: 48px 0 64px; }
.rem-page .video-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 640px) { .rem-page .video-grid { grid-template-columns: 1fr; } }
.rem-page .video-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: pointer; }
.rem-page .video-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.2); }
.rem-page .video-cover { position: relative; aspect-ratio: 16/9; background: linear-gradient(135deg, #0a1628, #1e3a5f); display: flex; align-items: center; justify-content: center; }
.rem-page .video-play-btn { width: 48px; height: 48px; border-radius: 50%; background: rgba(59,130,246,0.85); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(59,130,246,0.4); transition: all 0.3s ease; }
.rem-page .video-play-btn span { color: #fff; font-size: 16px; margin-left: 3px; }
.rem-page .video-card:hover .video-play-btn { transform: scale(1.15); background: rgba(59,130,246,1); }
.rem-page .video-duration { position: absolute; bottom: 8px; right: 8px; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.75); color: #fff; font-size: 11px; font-weight: 600; }
.rem-page .video-info { padding: 14px 16px; }
.rem-page .video-info h4 { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.rem-page .video-info p { font-size: 12px; color: #94a3b8; }

/* Section sub-title */
.rem-page .section-sub-title { font-size: 20px; font-weight: 800; color: #0f172a; padding: 12px 0; border-bottom: 2px solid #f1f5f9; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
.rem-page .section-sub-title::before { content: ''; display: inline-block; width: 4px; height: 24px; border-radius: 2px; background: linear-gradient(180deg, rgb(59,130,246), rgb(6,182,212)); flex-shrink: 0; }

/* Relationships */
.rem-page .relationships-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .rem-page .relationships-grid { grid-template-columns: 1fr; } }
.rem-page .relationship-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); border-left: 4px solid rgb(59,130,246); }
.rem-page .relationship-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(59,130,246,0.2); }
.rem-page .rel-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: #f8fafc; }
.rem-page .rel-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.rem-page .rel-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }
.rem-page .rel-type { display: inline-flex; align-items: center; gap: 3px; padding: 2px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; }
.rem-page .rel-romance { background: #fce7f3; color: #be185d; }
.rem-page .rel-family { background: #dbeafe; color: #1d4ed8; }
.rem-page .rel-friend { background: #d1fae5; color: #047857; }
.rem-page .rel-other { background: #f1f5f9; color: #475569; }
</style>
