<template>
  <div class="detail-page yoshino-page">
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
              <h3 class="anime-info-title">约会大作战</h3>
              <p class="anime-info-title-jp">デート・ア・ライブ</p>
              <div class="anime-info-meta">
                <div class="anime-meta-item"><span class="meta-icon">🏢</span><span class="meta-label">制作：</span>AIC PLUS+（第1季）/ J.C.STAFF（第3季）</div>
                <div class="anime-meta-item"><span class="meta-icon">📅</span><span class="meta-label">播出：</span>2013年~2022年（共4季）</div>
                <div class="anime-meta-item"><span class="meta-icon">📺</span><span class="meta-label">集数：</span>全四季48话 + 剧场版</div>
                <div class="anime-meta-item"><span class="meta-icon">🎤</span><span class="meta-label">CV：</span>野水伊織</div>
              </div>
              <p class="anime-info-desc">四月十日的春假期间，五河士道在雨中邂逅了灵力失控中的第二精灵——<span class="highlight">「隐居者」四糸乃</span>。为了拯救她免于被AST消灭的命运，士道必须通过<span class="highlight-pink">约会和接吻</span>来封印她的灵力。</p>
              <div class="anime-tag-row"><span class="anime-tag dark">恋爱</span><span class="anime-tag dark">奇幻</span><span class="anime-tag dark">战斗</span><span class="anime-tag live">正版引进</span></div>
              <div class="anime-info-actions">
                <a href="https://www.bilibili.com/bangumi/play/ep102835?spm_id_from=333.337.0.0" class="btn-bilibili" target="_blank" rel="noopener"><span class="bili-icon">📺</span> 在Bilibili观看 <span class="bili-arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab 3: Game -->
    <div v-show="activeMainTab === 'game'" class="tab-panel-main">
      <section class="section anime-section">
        <div class="container" style="display:flex;flex-direction:column;gap:24px;">
          <!-- Game 1: 莲反乌托邦 -->
          <div class="anime-hero-card">
            <div class="anime-cover">
              <div class="anime-cover-image" :style="{ backgroundImage: `url(${gameCover2})` }"></div>
            </div>
            <div class="anime-info">
              <span class="anime-info-label">相关游戏 1</span>
              <h3 class="anime-info-title">约会大作战：莲反乌托邦</h3>
              <p class="anime-info-title-jp">デート・ア・ライブ 蓮ディストピア</p>
              <div class="anime-info-meta">
                <div class="anime-meta-item"><span class="meta-icon">🏢</span><span class="meta-label">开发商：</span>Compile Heart / Sting</div>
                <div class="anime-meta-item"><span class="meta-icon">📅</span><span class="meta-label">发售：</span>2024年</div>
                <div class="anime-meta-item"><span class="meta-icon">🎮</span><span class="meta-label">平台：</span>PS4 / Nintendo Switch / PC</div>
                <div class="anime-meta-item"><span class="meta-icon">🎤</span><span class="meta-label">CV：</span>野水伊織</div>
              </div>
              <p class="anime-info-desc">系列最新作，讲述了一个<span class="highlight">以莲为核心的全新故事</span>。<span class="highlight-pink">四糸乃在本作中继续登场</span>，与士道和其他精灵们共同面对新的危机。</p>
              <div class="anime-tag-row"><span class="anime-tag dark">视觉小说</span><span class="anime-tag dark">恋爱冒险</span></div>
              <div class="anime-info-actions">
                <a href="https://store.steampowered.com/app/2627780/DATE_A_LIVE_Ren_Dystopia/" class="btn-bilibili btn-steam" target="_blank" rel="noopener"><span class="steam-icon">🎮</span> 在Steam购买 <span class="bili-arrow">→</span></a>
              </div>
            </div>
          </div>
          <!-- Game 2: 凛绪轮回 -->
          <div class="anime-hero-card">
            <div class="anime-cover">
              <div class="anime-cover-image" :style="{ backgroundImage: `url(${gameCover})` }"></div>
            </div>
            <div class="anime-info">
              <span class="anime-info-label">相关游戏 2</span>
              <h3 class="anime-info-title">约会大作战：凛绪轮回</h3>
              <p class="anime-info-title-jp">デート・ア・ライブ 凜緒リンカーネイション</p>
              <div class="anime-info-meta">
                <div class="anime-meta-item"><span class="meta-icon">🏢</span><span class="meta-label">开发商：</span>Compile Heart / Sting</div>
                <div class="anime-meta-item"><span class="meta-icon">📅</span><span class="meta-label">发售：</span>2019年</div>
                <div class="anime-meta-item"><span class="meta-icon">🎮</span><span class="meta-label">平台：</span>PS4 / PC</div>
                <div class="anime-meta-item"><span class="meta-icon">🎤</span><span class="meta-label">CV：</span>野水伊織</div>
              </div>
              <p class="anime-info-desc">系列三部曲的整合与重制版，包含了<span class="highlight">凛祢乌托邦、或守Install、凛绪轮回</span>全部内容。<span class="highlight-pink">四糸乃在所有篇章中均有登场</span>。</p>
              <div class="anime-tag-row"><span class="anime-tag dark">视觉小说</span><span class="anime-tag dark">恋爱冒险</span></div>
              <div class="anime-info-actions">
                <a href="https://store.steampowered.com/app/1047440/DATE_A_LIVE_Rio_Reincarnation/" class="btn-bilibili btn-steam" target="_blank" rel="noopener"><span class="steam-icon">🎮</span> 在Steam购买 <span class="bili-arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tab 4: Gallery -->
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

    <!-- Tab 5: Videos -->
    <div v-show="activeMainTab === 'videos'" class="tab-panel-main">
      <section class="section videos-section" style="background:#f8fafc;">
        <div class="container">
          <div class="video-grid">
            <a v-for="(v, idx) in videoItems" :key="idx" :href="v.url || '#'" :target="v.url ? '_blank' : undefined" rel="noopener"
              class="video-card animate-slide-up" :class="'delay-' + ((idx%2+1)*100)">
              <div class="video-cover" :style="v.cover ? { background: `url(${v.cover}) center/cover no-repeat` } : { background: 'linear-gradient(135deg, #0f172a, #1e3a5f)' }">
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

    <!-- Tab 6: Abilities -->
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
import animeCover from '../images/a.jpg'
import gameCover from '../images/b.jpg'
import gameCover2 from '../images/b2.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'
// 以下图片暂未添加，使用 emoji 占位
// import img2 from '../images/2.jpg'
// import img3 from '../images/3.jpg'
// import img4 from '../images/4.jpg'
// import img5 from '../images/5.jpg'
// import img6 from '../images/6.jpg'
// import img7 from '../images/7.jpg'
// import img8 from '../images/8.jpg'
import data from '../api/index.js'
import { useToast } from '@/util/toast'

export default {
  name: 'YoshinoDetail',
  components: { AppHeader, AppFooter, BackToTop, GalleryLightbox },
  setup() {
    const { showToast } = useToast()
    const lightbox = ref(null)
    const activeMainTab = ref('profile')
    const activeSubTab = ref('personality')

    const mainTabs = [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ]

    const galleryItems = [
      { isImage: true, bg: img1, badge: '立绘', overlay: '四糸乃 · 官方角色立绘' },
      { isImage: false, bg: 'linear-gradient(135deg, #1e3a5f, #0f1b2d)', icon: '🖼️', label: '美图 01', badge: '美图', overlay: '四糸乃 · 美图 01' },
      { isImage: false, bg: 'linear-gradient(135deg, #1e3a5f, #0f1b2d)', icon: '🖼️', label: '美图 02', badge: '美图', overlay: '四糸乃 · 美图 02' },
      { isImage: false, bg: 'linear-gradient(135deg, #1e3a5f, #0f1b2d)', icon: '🖼️', label: '美图 03', badge: '美图', overlay: '四糸乃 · 美图 03' },
      { isImage: false, bg: 'linear-gradient(135deg, #1e3a5f, #0f1b2d)', icon: '🖼️', label: '美图 04', badge: '美图', overlay: '四糸乃 · 美图 04' },
      { isImage: false, bg: 'linear-gradient(135deg, #1e3a5f, #0f1b2d)', icon: '🖼️', label: '美图 05', badge: '美图', overlay: '四糸乃 · 美图 05' },
      { isImage: false, bg: 'linear-gradient(135deg, #1e3a5f, #0f1b2d)', icon: '🖼️', label: '美图 06', badge: '美图', overlay: '四糸乃 · 美图 06' },
      { isImage: false, bg: 'linear-gradient(135deg, #1e3a5f, #0f1b2d)', icon: '🖼️', label: '美图 07', badge: '美图', overlay: '四糸乃 · 美图 07' }
    ]

    const videoItems = ref([
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1gb411g73U/', title: '【约会大作战】四糸乃的60个超卡哇伊瞬间，awsl！', desc: '四糸乃 剪辑' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV18x41167TY/', title: '【约会大作战】四糸乃角色歌', desc: '四糸乃 角色歌' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1ht411c7RY/', title: '前方高能！！盘点约会大作战中四糸乃那些高能，高萌场面！', desc: '四糸乃 剪辑' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1M4411Q7dP/', title: '现在是四糸乃洗脑时间!', desc: '四糸乃 洗脑向剪辑' }
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

    return { data, animeCover, gameCover, gameCover2, lightbox, activeMainTab, activeSubTab, mainTabs, galleryItems, videoItems, particleStyle, showToastMsg, openLightbox }
  }
}
</script>

<style>
.yoshino-page .detail-page { min-height: 100vh; }

/* ===== Hero ===== */
.yoshino-page .hero {
  position: relative; min-height: 70vh; padding: 80px 0 50px;
  display: flex; align-items: center; overflow: hidden;
  background: linear-gradient(135deg, #0a1020 0%, #0a1a3a 25%, #102040 50%, #0a1a3a 75%, #0a1020 100%);
}
.yoshino-page .hero-glow {
  position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; opacity: 0.25;
}
.yoshino-page .hero-glow-1 { width: 500px; height: 500px; background: #3b82f6; top: -80px; left: -80px; animation: float 8s ease-in-out infinite; }
.yoshino-page .hero-glow-2 { width: 400px; height: 400px; background: #06b6d4; bottom: -60px; right: -50px; animation: float 10s ease-in-out infinite reverse; }
.yoshino-page .hero-bg-particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.yoshino-page .particle { position: absolute; border-radius: 50%; background: rgba(59,130,246,0.3); animation: pixelFloat var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
.yoshino-page .hero-grid {
  position: absolute; inset: 0; z-index: 1;
  background-image: linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
}
.yoshino-page .hero-content {
  position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
  align-items: center; padding: 0 24px; max-width: 1060px; margin: 0 auto; width: 100%;
}
@media (max-width: 1024px) { .yoshino-page .hero-content { grid-template-columns: 1fr; text-align: center; gap: 32px; } }
.yoshino-page .hero-text { display: flex; flex-direction: column; gap: 10px; }
@media (max-width: 1024px) { .yoshino-page .hero-text { align-items: center; } }
.yoshino-page .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(96,165,250,0.1)); border: 1px solid rgba(59,130,246,0.4); padding: 6px 16px; border-radius: 50px; font-size: 13px; color: #60a5fa; font-weight: 600; width: fit-content; margin-bottom: 6px; box-shadow: 0 0 20px rgba(59,130,246,0.2); }
.yoshino-page .hero-badge .dot { width: 7px; height: 7px; background: #3b82f6; border-radius: 50%; animation: pulseGlow 2s ease-in-out infinite; }
.yoshino-page .hero-name-jp {
  font-size: clamp(40px, 7vw, 64px); font-weight: 900; line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, #60a5fa 40%, #3b82f6 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  letter-spacing: 0.05em; filter: drop-shadow(0 0 30px rgba(59,130,246,0.3));
}
.yoshino-page .hero-name-sub { font-size: 16px; color: #60a5fa; font-weight: 400; letter-spacing: 0.06em; }
.yoshino-page .hero-title-badge { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(96,165,250,0.12) 100%); border: 1px solid rgba(59,130,246,0.4); padding: 10px 24px; border-radius: 12px; font-size: 18px; color: #60a5fa; font-weight: 700; width: fit-content; margin-top: 4px; box-shadow: 0 4px 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.08); backdrop-filter: blur(8px); letter-spacing: 0.02em; }
.yoshino-page .tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.yoshino-page .tags .tag { padding: 6px 16px; font-size: 13px; border: 1px solid rgba(59,130,246,0.25); background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(96,165,250,0.06)); border-radius: 50px; font-weight: 600; color: #60a5fa; box-shadow: 0 0 12px rgba(59,130,246,0.1); }
@media (max-width: 1024px) { .yoshino-page .hero-title-badge { margin: 0 auto; } .yoshino-page .tags { justify-content: center; } }
.yoshino-page .hero-visual { display: flex; justify-content: center; align-items: center; position: relative; }
.yoshino-page .hero-avatar-wrapper { position: relative; width: 280px; height: 280px; }
@media (max-width: 768px) { .yoshino-page .hero-avatar-wrapper { width: 220px; height: 220px; } }
.yoshino-page .hero-avatar-ring {
  position: absolute; inset: -14px; border-radius: 50%; border: 3px solid transparent;
  background: linear-gradient(135deg, #3b82f6, #60a5fa, #3b82f6) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; animation: spinSlow 8s linear infinite;
}
.yoshino-page .hero-avatar { width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 0 60px rgba(59,130,246,0.4), 0 0 120px rgba(59,130,246,0.15); }

/* ===== Breadcrumb ===== */
.yoshino-page .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; margin-bottom: 20px; flex-wrap: wrap; padding-top: 16px; }
.yoshino-page .breadcrumb a { color: #64748b; transition: color 0.2s; }
.yoshino-page .breadcrumb a:hover { color: #3b82f6; }
.yoshino-page .breadcrumb .sep { color: #cbd5e1; }
.yoshino-page .breadcrumb .current { color: #3b82f6; font-weight: 600; }

/* ===== Main Tab Nav ===== */
.yoshino-page .main-tab-nav { z-index: 900; background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid #f1f5f9; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.yoshino-page .main-tab-nav .container { display: flex; gap: 0; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.yoshino-page .main-tab-nav .container::-webkit-scrollbar { display: none; }
.yoshino-page .main-tab-btn { flex-shrink: 0; padding: 16px 24px; font-size: 14px; font-weight: 600; font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; border: none; background: none; cursor: pointer; color: #64748b; transition: all 0.25s ease; position: relative; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.yoshino-page .main-tab-btn:hover { color: #1e293b; background: #f8fafc; }
.yoshino-page .main-tab-btn.active { color: #3b82f6; }
.yoshino-page .main-tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 16px; right: 16px; height: 3px; background: linear-gradient(135deg, #3b82f6, #06b6d4); border-radius: 2px 2px 0 0; box-shadow: 0 0 8px rgba(59,130,246,0.4); }
.yoshino-page .main-tab-icon { font-size: 18px; }
@media (max-width: 480px) { .yoshino-page .main-tab-btn { padding: 14px 16px; font-size: 13px; } .yoshino-page .main-tab-icon { font-size: 16px; } }
.yoshino-page .tab-panel-main { animation: fadeIn 0.35s ease-out; }

/* ===== Info Grid ===== */
.yoshino-page .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 1024px) { .yoshino-page .info-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .yoshino-page .info-grid { grid-template-columns: 1fr; } }
.yoshino-page .info-card { background: #fff; border-radius: 18px; padding: 26px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(59,130,246,0.08); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); display: flex; align-items: flex-start; gap: 16px; }
.yoshino-page .info-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(59,130,246,0.15); }
.yoshino-page .info-card-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.yoshino-page .info-card-icon.blue { background: #eff6ff; } .info-card-icon.pink { background: #fce7f3; } .info-card-icon.cyan { background: #ecfeff; }
.yoshino-page .info-card-text h4 { font-size: 11px; color: #94a3b8; font-weight: 500; margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
.yoshino-page .info-card-text p { font-size: 15px; color: #0f172a; font-weight: 600; }

/* ===== Content Tabs ===== */
.yoshino-page .tabs-card { background: #fff; border-radius: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden; }
.yoshino-page .tabs-nav { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; }
.yoshino-page .tab-btn { padding: 18px 28px; font-size: 15px; font-weight: 600; font-family: inherit; border: none; background: none; cursor: pointer; color: #94a3b8; transition: all 0.2s; position: relative; white-space: nowrap; }
.yoshino-page .tab-btn:hover { color: #64748b; }
.yoshino-page .tab-btn.active { color: #3b82f6; }
.yoshino-page .tab-btn.active::after { content: ''; position: absolute; bottom: 0; left: 20%; right: 20%; height: 3px; background: linear-gradient(135deg, #3b82f6, #06b6d4); border-radius: 2px; }
.yoshino-page .tab-panel { display: none; padding: 32px; }
.yoshino-page .tab-panel.active { display: block; animation: fadeIn 0.4s ease; }
@media (max-width: 768px) { .yoshino-page .tab-panel { padding: 20px; } .yoshino-page .tab-btn { padding: 14px 18px; font-size: 14px; } }
.yoshino-page .tab-panel p { font-size: 15px; line-height: 2.1; color: #475569; white-space: pre-line; margin-bottom: 14px; font-weight: 400; }
.yoshino-page .tab-panel p:last-child { margin-bottom: 0; }
.yoshino-page .key-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
.yoshino-page .key-tag { display: inline-flex; align-items: center; gap: 4px; padding: 6px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04)); border: 1px solid rgba(59,130,246,0.25); color: #2563eb; }

/* ===== Anime Section ===== */
.yoshino-page .anime-section { background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); }
.yoshino-page .anime-hero-card { display: grid; grid-template-columns: 280px 1fr; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
@media (max-width: 768px) { .yoshino-page .anime-hero-card { grid-template-columns: 1fr; } }
.yoshino-page .anime-cover { position: relative; min-height: 280px; background: linear-gradient(135deg, #0a1030 0%, #1a2a5e 40%, #102040 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; overflow: hidden; }
.yoshino-page .anime-cover::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 70%); }
.yoshino-page .anime-cover-image { position: absolute; inset: 0; background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; }
.yoshino-page .anime-cover-emoji { font-size: 64px; opacity: 0.6; position: relative; z-index: 1; }
.yoshino-page .anime-cover-badge { position: relative; z-index: 1; margin-top: 12px; padding: 6px 16px; background: rgba(6,182,212,0.2); border: 1px solid rgba(6,182,212,0.3); border-radius: 50px; font-size: 12px; color: #67e8f9; font-weight: 600; }
.yoshino-page .anime-info { padding: 36px; display: flex; flex-direction: column; gap: 16px; }
@media (max-width: 768px) { .yoshino-page .anime-info { padding: 24px; } }
.yoshino-page .anime-info-label { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #3b82f6; }
.yoshino-page .anime-info-label::before { content: ''; width: 20px; height: 2px; background: #3b82f6; border-radius: 1px; }
.yoshino-page .anime-info-title { font-size: clamp(20px, 3vw, 28px); font-weight: 800; color: #0f172a; }
.yoshino-page .anime-info-title-jp { font-size: 14px; color: #94a3b8; }
.yoshino-page .anime-info-meta { display: flex; flex-wrap: wrap; gap: 20px; }
.yoshino-page .anime-meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #64748b; }
.yoshino-page .anime-tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.yoshino-page .anime-tag { padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.yoshino-page .anime-tag.dark { background: #f1f5f9; color: #475569; }
.yoshino-page .anime-tag.live { background: #dcfce7; color: #16a34a; }
.yoshino-page .anime-info-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.yoshino-page .btn-bilibili { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 15px; font-weight: 700; font-family: inherit; background: linear-gradient(135deg, #fb7299, #fc8bab); color: #fff; box-shadow: 0 4px 16px rgba(251,114,153,0.4); cursor: pointer; transition: all 0.3s ease; text-decoration: none; }
.yoshino-page .btn-steam { background: linear-gradient(135deg, #1b2838, #2a475e); box-shadow: 0 4px 16px rgba(27,40,56,0.4); }
.yoshino-page .btn-bilibili:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(251,114,153,0.55); }
.yoshino-page .btn-steam:hover { box-shadow: 0 8px 24px rgba(27,40,56,0.6); }
.yoshino-page .btn-outline-sm { display: inline-flex; align-items: center; gap: 6px; padding: 12px 20px; border-radius: 12px; font-size: 14px; font-weight: 600; font-family: inherit; background: transparent; color: #64748b; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s ease; }
.yoshino-page .btn-outline-sm:hover { border-color: #3b82f6; color: #3b82f6; transform: translateY(-2px); }

/* ===== Gallery ===== */
.yoshino-page .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 1024px) { .yoshino-page .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .yoshino-page .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
.yoshino-page .gallery-item { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; aspect-ratio: 3/4; background: linear-gradient(135deg, #1a2a5e, #102040); transition: all 0.3s ease; }
.yoshino-page .gallery-item:hover { transform: scale(1.03); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
.yoshino-page .gallery-item-inner { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; transition: all 0.3s ease; }
.yoshino-page .gallery-item:hover .gallery-item-inner { transform: scale(1.05); }
.yoshino-page .gallery-item-icon { font-size: 56px; margin-bottom: 12px; }
.yoshino-page .gallery-item-label { font-size: 12px; color: #94a3b8; font-weight: 500; }
.yoshino-page .gallery-item-badge { position: absolute; top: 12px; right: 12px; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; background: rgba(0,0,0,0.5); color: #e2e8f0; }
.yoshino-page .gallery-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
.yoshino-page .gallery-item:hover .gallery-item-overlay { opacity: 1; }
.yoshino-page .gallery-overlay-text { color: #fff; font-size: 13px; font-weight: 500; }

/* ===== Abilities ===== */
.yoshino-page .abilities-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .yoshino-page .abilities-list { grid-template-columns: 1fr; } }
.yoshino-page .ability-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
.yoshino-page .ability-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(59,130,246,0.15); }
.yoshino-page .ability-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04)); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.yoshino-page .ability-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.yoshino-page .ability-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }

/* ===== Videos ===== */
.yoshino-page .videos-section { padding: 48px 0 64px; }
.yoshino-page .video-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 640px) { .yoshino-page .video-grid { grid-template-columns: 1fr; } }
.yoshino-page .video-card { display: block; text-decoration: none; color: inherit; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: pointer; }
.yoshino-page .video-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(59,130,246,0.15); }
.yoshino-page .video-cover { position: relative; aspect-ratio: 16/9; background: linear-gradient(135deg, #0a1030, #1a2a5e); display: flex; align-items: center; justify-content: center; }
.yoshino-page .video-play-btn { width: 48px; height: 48px; border-radius: 50%; background: rgba(59,130,246,0.85); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(59,130,246,0.4); transition: all 0.3s ease; }
.yoshino-page .video-play-btn span { color: #fff; font-size: 16px; margin-left: 3px; }
.yoshino-page .video-card:hover .video-play-btn { transform: scale(1.15); background: rgba(59,130,246,1); }
.yoshino-page .video-duration { position: absolute; bottom: 8px; right: 8px; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.75); color: #fff; font-size: 11px; font-weight: 600; }
.yoshino-page .video-info { padding: 14px 16px; }
.yoshino-page .video-info h4 { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.yoshino-page .video-info p { font-size: 12px; color: #94a3b8; }

/* Section sub-title */
.yoshino-page .section-sub-title { font-size: 20px; font-weight: 800; color: #0f172a; padding: 12px 0; border-bottom: 2px solid #f1f5f9; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
.yoshino-page .section-sub-title::before { content: ''; display: inline-block; width: 4px; height: 20px; border-radius: 2px; background: linear-gradient(180deg, #3b82f6, #60a5fa); flex-shrink: 0; }

/* Relationships */
.yoshino-page .relationships-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media (max-width: 640px) { .yoshino-page .relationships-grid { grid-template-columns: 1fr; } }
.yoshino-page .relationship-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.04); display: flex; gap: 16px; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); border-left: 4px solid #3b82f6; }
.yoshino-page .relationship-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(59,130,246,0.15); }
.yoshino-page .rel-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: #f8fafc; }
.yoshino-page .rel-info h4 { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.yoshino-page .rel-info p { font-size: 13.5px; color: #64748b; line-height: 1.75; }
.yoshino-page .rel-type { display: inline-flex; align-items: center; gap: 3px; padding: 2px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; }
.yoshino-page .rel-romance { background: #fce7f3; color: #be185d; }
.yoshino-page .rel-family { background: #dbeafe; color: #1d4ed8; }
.yoshino-page .rel-friend { background: #d1fae5; color: #047857; }
.yoshino-page .rel-other { background: #f1f5f9; color: #475569; }
</style>
