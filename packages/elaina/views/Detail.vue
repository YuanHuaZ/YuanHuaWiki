<template>
  <div class="detail-page elaina-page">
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
          <h1 class="hero-name-jp">{{ data.name }}</h1>
          <p class="hero-name-sub">{{ data.nameSub }}</p>
          <div class="hero-title-badge">🧙‍♀️ {{ data.title }}</div>
          <div class="tags"><span v-for="(t,i) in data.tags" :key="i" :class="['tag', t.cls]">{{ t.text }}</span></div>
        </div>
        <div class="hero-visual animate-slide-up delay-200">
          <div class="hero-avatar-wrapper">
            <div class="hero-avatar-ring"></div>
            <div v-if="data.image" class="hero-avatar" :style="{ background: `url(${data.image}) top center/cover no-repeat` }"></div>
            <div v-else class="hero-avatar avatar-placeholder">
              <span class="avatar-emoji">🧙‍♀️</span>
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
                {{ tab.quote }}<br><span style="font-size:13px;font-style:italic;color:#94a3b8;">{{ tab.quoteAuthor }}</span>
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
              <div class="anime-cover-icon">📺</div>
              <div class="anime-cover-badge">暂无封面</div>
            </div>
            <div class="anime-info">
              <span class="anime-info-label">主要登场作品</span>
              <h3 class="anime-info-title">魔女之旅 | Wandering Witch</h3>
              <p class="anime-info-title-jp">魔女の旅々</p>
              <div class="anime-info-meta">
                <div class="anime-meta-item"><span class="meta-icon">🏢</span><span class="meta-label">原作：</span>白石定规</div>
                <div class="anime-meta-item"><span class="meta-icon">📅</span><span class="meta-label">播出：</span>2020年10月</div>
                <div class="anime-meta-item"><span class="meta-icon">📺</span><span class="meta-label">集数：</span>全12话</div>
                <div class="anime-meta-item"><span class="meta-icon">🎤</span><span class="meta-label">CV：</span>本渡枫</div>
              </div>
              <p class="anime-info-desc">少女伊蕾娜从小就憧憬着《妮可冒险谭》中的旅行。成为<span class="highlight">最高位"灰之魔女"</span>后，她终于踏上了<span class="highlight-pink">属于自己的旅途</span>，在广阔的世界中遇见了形形色色的人和故事。</p>
              <div class="anime-tag-row"><span class="anime-tag dark">奇幻</span><span class="anime-tag dark">冒险</span><span class="anime-tag dark">治愈</span><span class="anime-tag live">正版引进</span></div>
              <div class="anime-info-actions">
                <a href="https://www.bilibili.com/bangumi/play/ss34255/" class="btn-elaina" target="_blank" rel="noopener"><span class="bili-icon">📺</span> 在Bilibili观看 <span class="bili-arrow">→</span></a>
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
            <div v-for="(v, idx) in videoItems" :key="idx" class="video-card animate-slide-up" :class="'delay-' + ((idx%4+1)*100)">
              <div class="video-cover" :style="v.cover ? { background: `url(${v.cover}) center/cover no-repeat` } : { background: 'linear-gradient(135deg, #0f0a1a, #2d1f4e)' }">
                <div class="video-play-btn"><span>▶</span></div>
                <div class="video-duration">{{ v.duration }}</div>
              </div>
              <div class="video-info">
                <h4>{{ v.title }}</h4>
                <p>{{ v.desc }}</p>
              </div>
            </div>
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
import data from '../api/index.js'
import { useToast } from '@/util/toast'

export default {
  name: 'ElainaDetail',
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
      { isImage: true, bg: img1, badge: '立绘', overlay: '伊蕾娜 · 官方角色立绘' },
      { isImage: false, bg: 'linear-gradient(135deg, #3b1f5e 0%, #2d1b4e 50%, #1a0d2e 100%)', icon: '📖', label: '旅途记录', badge: '美图', overlay: '伊蕾娜 · 美图 01' },
      { isImage: false, bg: 'linear-gradient(135deg, #1a1030 0%, #2d1f4e 50%, #3b1f5e 100%)', icon: '✨', label: '魔法施展', badge: '美图', overlay: '伊蕾娜 · 美图 02' },
      { isImage: false, bg: 'linear-gradient(135deg, #0f0a2e 0%, #1a0d2e 50%, #2d1b4e 100%)', icon: '🌙', label: '月下旅人', badge: '美图', overlay: '伊蕾娜 · 美图 03' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d1b4e 0%, #0f0a2e 50%, #1a1030 100%)', icon: '🏰', label: '城堡之国', badge: '美图', overlay: '伊蕾娜 · 美图 04' },
      { isImage: false, bg: 'linear-gradient(135deg, #1a0d2e 0%, #3b1f5e 50%, #2d1b4e 100%)', icon: '🧹', label: '飞天扫帚', badge: '美图', overlay: '伊蕾娜 · 美图 05' },
      { isImage: false, bg: 'linear-gradient(135deg, #0f0a2e 0%, #1a1030 50%, #2d1f4e 100%)', icon: '📜', label: '魔女日记', badge: '美图', overlay: '伊蕾娜 · 美图 06' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d1f4e 0%, #1a0d2e 50%, #0f0a2e 100%)', icon: '⭐', label: '灰之魔女', badge: '美图', overlay: '伊蕾娜 · 美图 07' }
    ]

    const videoItems = [
      { cover: null, title: '伊蕾娜相关视频 01', desc: '视频描述占位', duration: '03:25' },
      { cover: null, title: '伊蕾娜相关视频 02', desc: '视频描述占位', duration: '05:12' },
      { cover: null, title: '伊蕾娜相关视频 03', desc: '视频描述占位', duration: '02:48' },
      { cover: null, title: '伊蕾娜相关视频 04', desc: '视频描述占位', duration: '04:33' }
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

    return { data, lightbox, activeMainTab, activeSubTab, mainTabs, galleryItems, videoItems, particleStyle, showToastMsg, openLightbox }
  }
}
</script>

<style>
.elaina-page .detail-page { min-height: 100vh; }

.elaina-page .hero {
  position: relative; min-height: 70vh; padding: 80px 0 50px;
  display: flex; align-items: center; overflow: hidden;
  background: linear-gradient(135deg, #0a0a1a 0%, #0f0a1a 25%, #1a0d2e 50%, #141028 75%, #0a0a1a 100%);
}
.elaina-page .hero-glow { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; opacity: 0.15; }
.elaina-page .hero-glow-1 { width: 360px; height: 360px; background: #a855f7; top: -80px; left: -80px; animation: float 8s ease-in-out infinite; }
.elaina-page .hero-glow-2 { width: 260px; height: 260px; background: #c084fc; bottom: -60px; right: -50px; animation: float 10s ease-in-out infinite reverse; }
.elaina-page .hero-bg-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.elaina-page .particle { position: absolute; border-radius: 50%; background: rgba(168,85,247,0.3); animation: pixelFloat var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
.elaina-page .hero-grid { position: absolute; inset: 0; z-index: 1; background-image: linear-gradient(rgba(168,85,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.05) 1px, transparent 1px); background-size: 60px 60px; }
.elaina-page .hero-content { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 0 24px; max-width: 1060px; margin: 0 auto; width: 100%; }
@media (max-width: 1024px) { .elaina-page .hero-content { grid-template-columns: 1fr; text-align: center; gap: 32px; } }
.elaina-page .hero-text { display: flex; flex-direction: column; gap: 10px; }
@media (max-width: 1024px) { .elaina-page .hero-text { align-items: center; } }
.elaina-page .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(168,85,247,0.15); border: 1px solid rgba(168,85,247,0.3); padding: 5px 14px; border-radius: 50px; font-size: 12px; color: #d8b4fe; font-weight: 500; width: fit-content; margin-bottom: 6px; }
.elaina-page .hero-badge .dot { width: 7px; height: 7px; background: #a855f7; border-radius: 50%; animation: pulseGlow 2s ease-in-out infinite; }
.elaina-page .hero-name-jp { font-size: clamp(36px, 6vw, 56px); font-weight: 900; line-height: 1.1; background: linear-gradient(135deg, #e9d5ff 0%, #a855f7 40%, #c084fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.05em; }
.elaina-page .hero-name-sub { font-size: 16px; color: #94a3b8; font-weight: 400; letter-spacing: 0.06em; }
.elaina-page .hero-title-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.25); padding: 6px 16px; border-radius: 8px; font-size: 14px; color: #c084fc; font-weight: 600; width: fit-content; margin-top: 4px; }
.elaina-page .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.elaina-page .tags .tag { padding: 3px 10px; font-size: 11px; }
@media (max-width: 1024px) { .elaina-page .hero-title-badge { margin: 0 auto; } .elaina-page .tags { justify-content: center; } }
.elaina-page .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
.elaina-page .hero-avatar-wrapper { position: relative; width: 280px; height: 280px; }
@media (max-width: 768px) { .elaina-page .hero-avatar-wrapper { width: 220px; height: 220px; } }
.elaina-page .hero-avatar-ring { position: absolute; inset: -14px; border-radius: 50%; border: 3px solid transparent; background: linear-gradient(135deg, #a855f7, #c084fc, #7c3aed, #a855f7) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: spinSlow 8s linear infinite; }
.elaina-page .hero-avatar { width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 0 50px rgba(168,85,247,0.3); }
.elaina-page .avatar-placeholder { display: flex; align-items: center; justify-content: center; background: linear-gradient(180deg, #2d1f4e 0%, #1a0d2e 50%, #0a0a1a 100%); }
.elaina-page .avatar-emoji { font-size: 80px; filter: drop-shadow(0 0 30px rgba(168,85,247,0.5)); }

.elaina-page .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; margin-bottom: 20px; flex-wrap: wrap; padding-top: 16px; }
.elaina-page .breadcrumb a { color: #64748b; transition: color 0.2s; }
.elaina-page .breadcrumb a:hover { color: #a855f7; }
.elaina-page .breadcrumb .sep { color: #cbd5e1; }
.elaina-page .breadcrumb .current { color: #a855f7; font-weight: 600; }

.elaina-page .main-tab-nav { z-index: 900; background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.elaina-page .main-tab-nav .container { display: flex; gap: 0; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.elaina-page .main-tab-btn { flex-shrink: 0; padding: 16px 24px; font-size: 14px; font-weight: 600; font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; border: none; background: none; cursor: pointer; color: #64748b; transition: all 0.25s ease; position: relative; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.elaina-page .main-tab-btn:hover { color: #1e293b; background: #f8fafc; }
.elaina-page .main-tab-btn.active { color: #a855f7; }
.elaina-page .main-tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 16px; right: 16px; height: 3px; background: linear-gradient(135deg, #a855f7, #c084fc); border-radius: 2px 2px 0 0; }

.elaina-page .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 1024px) { .elaina-page .info-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .elaina-page .info-grid { grid-template-columns: 1fr; } }
.elaina-page .info-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: all 0.3s ease; display: flex; align-items: flex-start; gap: 16px; }
.elaina-page .info-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
.elaina-page .info-card-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
.elaina-page .info-card-icon.purple { background: #f3e8ff; } .elaina-page .info-card-icon.pink { background: #fce7f3; } .elaina-page .info-card-icon.cyan { background: #ecfeff; }
.elaina-page .info-card-text h4 { font-size: 11px; color: #94a3b8; font-weight: 500; margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
.elaina-page .info-card-text p { font-size: 15px; color: #0f172a; font-weight: 600; }

.elaina-page .tabs-card { background: #fff; border-radius: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden; }
.elaina-page .tabs-nav { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; }
.elaina-page .tab-btn { padding: 18px 28px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; background: none; cursor: pointer; color: #94a3b8; transition: all 0.2s; position: relative; white-space: nowrap; }
.elaina-page .tab-btn:hover { color: #64748b; }
.elaina-page .tab-btn.active { color: #a855f7; }
.elaina-page .tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 20%; right: 20%; height: 3px; background: linear-gradient(135deg, #a855f7, #c084fc); border-radius: 2px; }
.elaina-page .tab-panel { display: none; padding: 32px; }
.elaina-page .tab-panel.active { display: block; animation: fadeIn 0.4s ease; }
.elaina-page .tab-panel p { font-size: 15px; line-height: 2.1; color: #475569; white-space: pre-line; margin-bottom: 14px; font-weight: 400; }
.elaina-page .key-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
.elaina-page .key-tag { display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; border-radius: 7px; font-size: 12px; font-weight: 600; background: #f3e8ff; color: #7c3aed; }

.elaina-page .anime-section { background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); }
.elaina-page .anime-hero-card { display: grid; grid-template-columns: 280px 1fr; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
.elaina-page .anime-cover { position: relative; min-height: 280px; background: linear-gradient(135deg, #0f0a1a 0%, #2d1f4e 40%, #1a0d2e 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; overflow: hidden; }
.elaina-page .anime-cover::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(168,85,247,0.3) 0%, transparent 70%); }
.elaina-page .anime-cover-image { position: absolute; inset: 0; background-size: cover; background-position: center; }
.elaina-page .anime-cover-badge { position: relative; z-index: 1; margin-top: 12px; padding: 6px 16px; background: rgba(168,85,247,0.2); border: 1px solid rgba(168,85,247,0.3); border-radius: 50px; font-size: 12px; color: #d8b4fe; font-weight: 600; }
.elaina-page .anime-info { padding: 36px; display: flex; flex-direction: column; gap: 16px; }
.elaina-page .anime-info-label { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #a855f7; }
.elaina-page .anime-info-label::before { content: ''; width: 20px; height: 2px; background: #a855f7; border-radius: 1px; }
.elaina-page .anime-info-title { font-size: clamp(20px, 3vw, 28px); font-weight: 800; color: #0f172a; }
.elaina-page .anime-info-title-jp { font-size: 14px; color: #94a3b8; }
.elaina-page .anime-info-meta { display: flex; flex-wrap: wrap; gap: 20px; }
.elaina-page .anime-meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; }
.elaina-page .anime-info-desc { font-size: 14.5px; color: #475569; line-height: 1.9; }
.elaina-page .anime-tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.elaina-page .anime-tag { padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.elaina-page .anime-tag.dark { background: #f1f5f9; color: #475569; }
.elaina-page .anime-tag.live { background: #dcfce7; color: #16a34a; }
.elaina-page .anime-info-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.elaina-page .btn-elaina { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 15px; font-weight: 700; font-family: inherit; background: linear-gradient(135deg, #a855f7, #c084fc); color: #fff; box-shadow: 0 4px 16px rgba(168,85,247,0.4); cursor: pointer; transition: all 0.3s ease; text-decoration: none; }
.elaina-page .btn-elaina:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(168,85,247,0.5); }
.elaina-page .btn-outline-sm { display: inline-flex; align-items: center; gap: 6px; padding: 12px 20px; border-radius: 12px; font-size: 14px; font-weight: 600; font-family: inherit; background: transparent; color: #64748b; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s ease; }

.elaina-page .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 1024px) { .elaina-page .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .elaina-page .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
.elaina-page .gallery-item { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; aspect-ratio: 3/4; transition: all 0.3s ease; }
.elaina-page .gallery-item:hover { transform: scale(1.03); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
.elaina-page .gallery-item-inner { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; transition: all 0.3s ease; }
.elaina-page .gallery-item:hover .gallery-item-inner { transform: scale(1.05); }
.elaina-page .gallery-item-icon { font-size: 56px; margin-bottom: 12px; }
.elaina-page .gallery-item-label { font-size: 12px; color: #94a3b8; font-weight: 500; }
.elaina-page .gallery-item-badge { position: absolute; top: 12px; right: 12px; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; background: rgba(0,0,0,0.5); color: #e2e8f0; }
.elaina-page .gallery-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
.elaina-page .gallery-item:hover .gallery-item-overlay { opacity: 1; }
.elaina-page .gallery-overlay-text { color: #fff; font-size: 13px; font-weight: 500; }

.elaina-page .videos-section { padding: 48px 0 64px; }
.elaina-page .video-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 640px) { .elaina-page .video-grid { grid-template-columns: 1fr; } }
.elaina-page .video-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: all 0.3s ease; cursor: pointer; }
.elaina-page .video-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
.elaina-page .video-cover { position: relative; aspect-ratio: 16/9; background: linear-gradient(135deg, #0f0a1a, #2d1f4e); display: flex; align-items: center; justify-content: center; }
.elaina-page .video-play-btn { width: 48px; height: 48px; border-radius: 50%; background: rgba(168,85,247,0.85); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(168,85,247,0.4); transition: all 0.3s ease; }
.elaina-page .video-play-btn span { color: #fff; font-size: 16px; margin-left: 3px; }
.elaina-page .video-card:hover .video-play-btn { transform: scale(1.15); background: rgba(168,85,247,1); }
.elaina-page .video-duration { position: absolute; bottom: 8px; right: 8px; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.75); color: #fff; font-size: 11px; font-weight: 600; }
.elaina-page .video-info { padding: 14px 16px; }
.elaina-page .video-info h4 { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.elaina-page .video-info p { font-size: 12px; color: #94a3b8; }

.elaina-page .abilities-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .elaina-page .abilities-list { grid-template-columns: 1fr; } }
.elaina-page .ability-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); display: flex; gap: 16px; transition: all 0.3s ease; }
.elaina-page .ability-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
.elaina-page .ability-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); }
.elaina-page .ability-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.elaina-page .ability-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }

.elaina-page .blockquote { margin-top: 24px; padding: 20px 24px; background: linear-gradient(135deg, #f3e8ff, #fdf2f8); border-left: 4px solid #a855f7; border-radius: 0 12px 12px 0; font-size: 17px; color: #6b21a8; font-weight: 500; line-height: 1.8; }

/* Section Headers */
.elaina-page .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; flex-wrap: wrap; gap: 12px; }
.elaina-page .section-title-group h2 { font-size: clamp(20px, 3vw, 26px); font-weight: 800; color: #0f172a; letter-spacing: -0.015em; display: flex; align-items: center; gap: 10px; }
.elaina-page .section-title-group h2::before { content: ''; display: inline-block; width: 4px; height: 24px; border-radius: 2px; background: linear-gradient(180deg, #a855f7, #c084fc); }
.elaina-page .section-title-group p { font-size: 13px; color: #94a3b8; margin-top: 4px; padding-left: 14px; }

/* Anime cover placeholder */
.elaina-page .anime-cover-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(168,85,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.05) 1px, transparent 1px); background-size: 40px 40px; }
.elaina-page .anime-cover-icon { font-size: 72px; position: relative; z-index: 1; filter: drop-shadow(0 0 20px rgba(168,85,247,0.4)); }
.elaina-page .anime-cover-badge { position: relative; z-index: 1; margin-top: 12px; padding: 6px 16px; background: rgba(168,85,247,0.2); border: 1px solid rgba(168,85,247,0.3); border-radius: 50px; font-size: 12px; color: #d8b4fe; font-weight: 600; }

/* Gallery placeholder enhancement */
.elaina-page .gallery-item { background: linear-gradient(135deg, #2d1b4e, #1a1030); }
.elaina-page .gallery-item:hover .gallery-item-icon { transform: scale(1.15); transition: transform 0.3s ease; }
.elaina-page .gallery-item-icon { transition: transform 0.3s ease; }

/* Section spacing */
.elaina-page .anime-section { padding-top: 48px; }
.elaina-page .videos-section { padding: 48px 0 64px; }

/* Section sub-title */
.elaina-page .section-sub-title { font-size: 20px; font-weight: 800; color: #0f172a; padding: 12px 0; border-bottom: 2px solid #f1f5f9; margin-bottom: 24px; }

/* Relationships */
.elaina-page .relationships-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .elaina-page .relationships-grid { grid-template-columns: 1fr; } }
.elaina-page .relationship-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); display: flex; gap: 16px; transition: all 0.3s ease; border-left: 4px solid #e2e8f0; }
.elaina-page .relationship-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
.elaina-page .rel-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: #f8fafc; }
.elaina-page .rel-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.elaina-page .rel-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }
.elaina-page .rel-type { display: inline-flex; align-items: center; gap: 3px; padding: 2px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; }
.elaina-page .rel-romance { background: #fce7f3; color: #be185d; }
.elaina-page .rel-family { background: #dbeafe; color: #1d4ed8; }
.elaina-page .rel-friend { background: #d1fae5; color: #047857; }
.elaina-page .rel-other { background: #f1f5f9; color: #475569; }
</style>
