<template>
  <div :class="['detail-page', pageClass, 'cdl']" :style="themeVars">
    <AppHeader />

    <!-- ============ 扉页 ============ -->
    <section class="hero">
      <div class="hero-grain"></div>
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="hero-grid"></div>

      <div class="hero-content">
        <div class="hero-text animate-fade-in">
          <p class="hero-kicker">
            <span class="kicker-line"></span>
            {{ data.series }}
          </p>

          <h1 class="hero-name-jp">{{ data.nameJp }}</h1>
          <p class="hero-name-sub">{{ data.nameSub }}</p>
          <p v-if="data.title" class="hero-title">{{ data.title }}</p>

          <div class="tags">
            <span v-for="(t, i) in data.tags" :key="i" :class="['tag', t.cls]">{{ t.text }}</span>
          </div>
        </div>

        <div class="hero-visual animate-slide-up delay-200">
          <figure class="hero-portrait">
            <div v-if="data.image" class="portrait-image" :style="avatarStyle"></div>
            <div v-else class="portrait-image portrait-placeholder">
              <span>{{ data.placeholderEmoji || '⭐' }}</span>
            </div>
            <figcaption class="portrait-caption">{{ data.name }} · Character File</figcaption>
          </figure>
        </div>
      </div>

      <div class="hero-foot"></div>
    </section>

    <!-- ============ 面包屑 ============ -->
    <div class="container">
      <nav class="breadcrumb">
        <router-link to="/">首页</router-link>
        <span class="sep">/</span>
        <router-link to="/">角色档案</router-link>
        <span class="sep">/</span>
        <span class="current">{{ data.name }}</span>
      </nav>
    </div>

    <!-- ============ 主导航 ============ -->
    <nav class="main-tab-nav">
      <div class="container">
        <button
          v-for="tab in data.mainTabs"
          :key="tab.key"
          :class="['main-tab-btn', { active: activeMainTab === tab.key }]"
          @click="activeMainTab = tab.key"
        >
          <span class="main-tab-icon">{{ tab.icon }}</span>
          <span>{{ tab.label }}</span>
        </button>
      </div>
    </nav>

    <!-- ============ Profile ============ -->
    <div v-show="activeMainTab === 'profile'" class="tab-panel-main">
      <section class="section">
        <div class="container">
          <div class="block-heading">
            <p class="block-kicker">Dossier</p>
            <h2>基本资料</h2>
          </div>

          <div class="info-grid">
            <div v-for="(item, idx) in data.info" :key="idx" class="info-cell">
              <span class="info-cell-icon">{{ item.icon }}</span>
              <div class="info-cell-text">
                <h4>{{ item.label }}</h4>
                <p>{{ item.value }}</p>
              </div>
            </div>
          </div>

          <div class="tabs-card animate-slide-up delay-300">
            <div class="tabs-nav">
              <button
                v-for="tab in data.tabs"
                :key="tab.key"
                :class="['tab-btn', { active: activeSubTab === tab.key }]"
                @click="activeSubTab = tab.key"
              >
                <span class="tab-btn-icon">{{ tab.icon }}</span>{{ tab.label }}
              </button>
            </div>

            <div v-for="tab in data.tabs" :key="tab.key" :class="['tab-panel', { active: activeSubTab === tab.key }]">
              <div v-if="tab.tags" class="key-tags-row">
                <span v-for="(t, i) in tab.tags" :key="i" class="key-tag">{{ t }}</span>
              </div>

              <div class="prose">
                <p v-for="(para, i) in tab.content" :key="i" v-html="para"></p>
              </div>

              <blockquote v-if="tab.quote" class="pull-quote">
                <p>{{ tab.quote }}</p>
                <cite>{{ tab.quoteAuthor }}</cite>
              </blockquote>

              <div v-if="tab.quotes" class="quotes-block">
                <blockquote v-for="(q, qi) in tab.quotes" :key="qi" class="pull-quote">
                  <p>{{ q.text }}</p>
                  <cite>{{ q.author }}</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ============ 相关作品 ============ -->
    <div v-for="tabKey in workTabKeys" :key="tabKey" v-show="activeMainTab === tabKey" class="tab-panel-main">
      <section class="section works-section">
        <div class="container" :class="{ 'work-stack': worksOf(tabKey).length > 1 }">
          <div v-for="(w, wi) in worksOf(tabKey)" :key="wi" class="work-card">
            <div class="work-cover">
              <div v-if="w.cover" class="work-cover-image" :style="{ backgroundImage: `url(${w.cover})` }"></div>
            </div>

            <div class="work-info">
              <p class="work-label">{{ w.label }}</p>
              <h3 class="work-title">{{ w.title }}</h3>
              <p class="work-title-jp">{{ w.titleJp }}</p>

              <div class="work-meta">
                <div v-for="(m, mi) in w.meta" :key="mi" class="work-meta-item">
                  <span class="meta-label">{{ m.label }}</span>
                  <span class="meta-value">{{ m.value }}</span>
                </div>
              </div>

              <p class="work-desc" v-html="w.desc"></p>

              <div class="work-tags">
                <span v-for="(t, ti) in w.tags" :key="ti" :class="['tag', t.cls]">{{ t.text }}</span>
              </div>

              <div v-if="w.action" class="work-actions">
                <a :href="w.action.url" :class="['btn-action', actionVariant(w.action)]" target="_blank" rel="noopener">
                  <span>{{ w.action.text }}</span>
                  <span class="btn-arrow">→</span>
                </a>
              </div>
              <div v-else-if="w.notice" class="work-actions">
                <span class="work-notice">{{ w.notice }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ============ Gallery ============ -->
    <div v-show="activeMainTab === 'gallery'" class="tab-panel-main">
      <section class="section gallery-section">
        <div class="container">
          <div class="block-heading">
            <p class="block-kicker">Plates</p>
            <h2>图版</h2>
          </div>

          <div class="gallery-grid">
            <figure
              v-for="(item, idx) in data.gallery"
              :key="idx"
              class="gallery-item"
              @click="openLightbox(item)"
            >
              <div v-if="item.isImage" class="gallery-item-inner">
                <img :src="item.bg" class="gallery-img" loading="lazy" decoding="async" alt="">
              </div>
              <div v-else class="gallery-item-inner gallery-item-empty">
                <span class="empty-frame" aria-hidden="true"></span>
                <span class="gallery-item-label">{{ item.label }}</span>
              </div>

              <figcaption class="gallery-plate-caption">
                <span class="plate-no">{{ String(idx + 1).padStart(2, '0') }}</span>
                <span v-if="item.badge" class="plate-kind">{{ item.badge }}</span>
                <span class="plate-text">{{ item.overlay || item.label }}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>

    <!-- ============ Videos ============ -->
    <div v-show="activeMainTab === 'videos'" class="tab-panel-main">
      <section class="section videos-section">
        <div class="container">
          <div class="block-heading">
            <p class="block-kicker">Footage</p>
            <h2>影像</h2>
          </div>

          <div class="video-grid">
            <a
              v-for="(v, idx) in data.videos"
              :key="idx"
              :href="v.url || '#'"
              :target="v.url ? '_blank' : undefined"
              rel="noopener"
              class="video-card"
            >
              <div class="video-cover">
                <img v-if="v.cover" :src="v.cover" class="video-cover-img" loading="lazy" decoding="async" alt="">
                <span class="video-play"><span>▶</span></span>
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

    <!-- ============ Abilities ============ -->
    <div v-show="activeMainTab === 'abilities'" class="tab-panel-main">
      <section class="section">
        <div class="container">
          <div class="block-heading">
            <p class="block-kicker">Abilities</p>
            <h2>能力</h2>
          </div>

          <div class="entry-list">
            <div v-for="(ab, idx) in data.abilities" :key="'ab-' + idx" class="entry">
              <span class="entry-icon">{{ ab.icon }}</span>
              <div class="entry-body">
                <h4>{{ ab.name }}</h4>
                <p v-html="ab.desc"></p>
              </div>
              <span class="entry-no">{{ String(idx + 1).padStart(2, '0') }}</span>
            </div>
          </div>

          <div class="block-heading block-heading--sub">
            <p class="block-kicker">Relations</p>
            <h2>关系</h2>
          </div>

          <div class="entry-list">
            <div v-for="(rel, idx) in data.relationships" :key="'rel-' + idx" class="entry">
              <span class="entry-icon">{{ rel.icon }}</span>
              <div class="entry-body">
                <h4>
                  {{ rel.name }}
                  <span :class="['rel-type', rel.cls]">{{ rel.type }}</span>
                </h4>
                <p v-html="rel.desc"></p>
              </div>
              <span class="entry-no">{{ String(idx + 1).padStart(2, '0') }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ============ Review ============ -->
    <div v-show="activeMainTab === 'review'" class="tab-panel-main">
      <section class="review-head">
        <div class="container review-head-inner">
          <div class="review-avatar" :style="{ backgroundImage: `url(${data.image})` }"></div>
          <div>
            <p class="block-kicker">Personal Review</p>
            <h2 class="review-title">关于{{ data.name }}的评价</h2>
            <p class="review-sub">来自站长的个人感想与回忆</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <article class="review-body">
            <p v-if="data.review" class="review-text">{{ data.review }}</p>
            <p v-else class="review-empty">暂无评价，敬请期待。</p>
          </article>
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

    // theme → CSS 变量 --acc-*
    // 注意：--acc-accent 由 src/styles/detail-enhancements.css 按角色提供，
    // 这里不生成同名变量（inline style 会盖掉样式表，导致强调色失效）。
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

    function openLightbox(item) { lightbox.value.open(item) }

    // 外链按钮配色变体：由数据中的 action.cls 决定
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
      themeVars, pageClass, workTabKeys, worksOf,
      avatarStyle, openLightbox, actionVariant
    }
  }
}
</script>

<style>
/* ============================================================
   角色详情 —— Editorial Archive
   强调色：--acc-accent / -soft / -line（按角色在 detail-enhancements.css 提供）
   ============================================================ */
.cdl { background: var(--paper); }

/* ================= 扉页 ================= */
.cdl .hero {
  position: relative;
  min-height: 620px;
  display: flex; align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
  background: var(--night);
  isolation: isolate;
}
.cdl .hero::before {
  content: '';
  position: absolute; inset: 0; z-index: -2;
  background:
    radial-gradient(ellipse 60% 70% at 78% 26%, var(--acc-accent-soft, rgba(200,168,106,.1)), transparent 70%),
    linear-gradient(100deg, #161d24 0%, #161d24 52%, #1b232b 100%);
}
.cdl .hero-grain {
  position: absolute; inset: 0; pointer-events: none; opacity: .45;
  background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.026) 0 1px, transparent 1px 3px);
  mix-blend-mode: soft-light;
}
.cdl .hero-grid {
  position: absolute; inset: 0; pointer-events: none; opacity: .5;
  background-image:
    linear-gradient(rgba(244,239,228,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244,239,228,.03) 1px, transparent 1px);
  background-size: 84px 84px;
}
.cdl .hero-glow {
  position: absolute; border-radius: 50%; pointer-events: none;
  filter: blur(140px); opacity: .26;
}
.cdl .hero-glow-1 {
  width: 460px; height: 460px; top: -140px; left: -120px;
  background: var(--acc-accent, #a5803c);
}
.cdl .hero-glow-2 {
  width: 380px; height: 380px; right: -100px; bottom: -160px;
  background: var(--acc-glow-2, #c8a86a); opacity: .14;
}

.cdl .hero-content {
  position: relative; z-index: 2;
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  align-items: center;
  gap: 56px;
  width: min(var(--page), calc(100% - 48px));
  margin: 0 auto;
}

.cdl .hero-text { display: flex; flex-direction: column; }

.cdl .hero-kicker {
  display: flex; align-items: center; gap: 12px;
  font-size: 10px; font-weight: 700;
  letter-spacing: .24em; text-transform: uppercase;
  color: var(--gold-line);
}
.cdl .kicker-line { width: 32px; height: 1px; background: var(--gold-line); }

.cdl .hero-name-jp {
  margin-top: 24px;
  font-family: var(--serif);
  font-size: clamp(46px, 6.4vw, 84px);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: .02em;
  color: #f7f3ea;
}

.cdl .hero-name-sub {
  margin-top: 16px;
  font-size: 11.5px; font-weight: 600;
  letter-spacing: .2em; text-transform: uppercase;
  color: rgba(244,239,228,.52);
}

.cdl .hero-title {
  position: relative;
  margin-top: 22px;
  padding-left: 18px;
  font-family: var(--serif);
  font-size: clamp(16px, 1.9vw, 20px);
  font-style: italic;
  letter-spacing: .01em;
  color: var(--acc-accent);
  border-left: 1px solid var(--acc-accent-line);
  line-height: 1.5;
}

.cdl .hero-text .tags {
  display: flex; flex-wrap: wrap; gap: 7px; margin-top: 28px;
}
.cdl .hero-text .tags .tag {
  padding: 4px 11px;
  font-size: 10.5px; letter-spacing: .08em;
  border-color: rgba(244,239,228,.24);
  color: rgba(244,239,228,.74);
}
.cdl .hero-text .tags .tag.tag-dark {
  border-color: var(--gold-line);
  background: var(--gold-line);
  color: var(--night);
}

/* ---- 立绘装裱 ---- */
.cdl .hero-visual { display: flex; justify-content: flex-end; }
.cdl .hero-portrait {
  position: relative;
  width: min(100%, 322px);
  margin: 0;
}
.cdl .hero-portrait::before {
  content: '';
  position: absolute; inset: -16px -16px 38px 16px;
  border: 1px solid rgba(200,168,106,.26);
  pointer-events: none;
}
.cdl .portrait-image {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  background-color: var(--night-2);
  box-shadow: 0 34px 70px -20px rgba(0,0,0,.6);
}
.cdl .portrait-image::after {
  content: '';
  position: absolute; inset: 9px;
  border: 1px solid rgba(244,239,228,.14);
  pointer-events: none;
}
.cdl .portrait-placeholder {
  display: flex; align-items: center; justify-content: center;
  font-size: 72px;
}
.cdl .portrait-caption {
  margin-top: 14px;
  font-size: 9px; font-weight: 600;
  letter-spacing: .2em; text-transform: uppercase;
  color: rgba(244,239,228,.36);
  text-align: right;
}

.cdl .hero-foot {
  position: absolute; left: 4vw; right: 4vw; bottom: 0; height: 1px;
  background: rgba(244,239,228,.12);
}

/* ================= 面包屑 ================= */
.cdl .breadcrumb {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  padding: 20px 0;
  font-size: 11.5px; font-weight: 500;
  letter-spacing: .08em; text-transform: uppercase;
  color: var(--ink-4);
  border-bottom: 1px solid var(--rule);
}
.cdl .breadcrumb a { color: var(--ink-4); transition: color .25s var(--ease); }
.cdl .breadcrumb a:hover { color: var(--acc-accent); }
.cdl .breadcrumb .sep { color: var(--rule-2); }
.cdl .breadcrumb .current { color: var(--ink); font-weight: 700; }

/* ================= 主导航 ================= */
.cdl .main-tab-nav {
  position: sticky; top: 58px; z-index: 900;
  background: rgba(248,245,238,.93);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border-bottom: 1px solid var(--rule);
}
.cdl .main-tab-nav .container { display: flex; gap: 0; overflow-x: auto; scrollbar-width: none; }
.cdl .main-tab-nav .container::-webkit-scrollbar { display: none; }

.cdl .main-tab-btn {
  position: relative; flex-shrink: 0;
  display: flex; align-items: center; gap: 8px;
  padding: 17px 22px;
  border: 0; background: none; cursor: pointer;
  font-family: var(--sans);
  font-size: 12.5px; font-weight: 600;
  letter-spacing: .06em;
  color: var(--ink-4);
  white-space: nowrap;
  transition: color .25s var(--ease);
}
.cdl .main-tab-btn::after {
  content: '';
  position: absolute; left: 22px; right: 22px; bottom: -1px; height: 1px;
  background: var(--acc-accent);
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.cdl .main-tab-btn:hover { color: var(--ink-2); }
.cdl .main-tab-btn.active { color: var(--ink); }
.cdl .main-tab-btn.active::after { transform: scaleX(1); }
.cdl .main-tab-icon { font-size: 13px; opacity: .8; }

/* ================= 区块标题 ================= */
.cdl .block-heading { margin-bottom: 30px; }
.cdl .block-heading--sub { margin-top: 68px; }
.cdl .block-kicker {
  font-family: var(--sans);
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .24em; text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
}
.cdl .block-heading h2 {
  display: flex; align-items: center; gap: 16px;
  font-family: var(--serif);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 400;
  color: var(--ink);
  letter-spacing: .01em;
}
.cdl .block-heading h2::after {
  content: ''; flex: 1; height: 1px; background: var(--rule);
}

/* ================= 著录表（info） ================= */
.cdl .info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--rule);
  margin-bottom: 64px;
}
.cdl .info-cell {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 24px 26px;
  border-bottom: 1px solid var(--rule);
  transition: background .3s var(--ease);
}
.cdl .info-cell:nth-child(3n + 1) { padding-left: 0; }
.cdl .info-cell:not(:nth-child(3n)) { border-right: 1px solid var(--rule); }
.cdl .info-cell-icon {
  flex-shrink: 0; width: 26px;
  font-size: 16px; line-height: 1.4;
  opacity: .85;
  filter: grayscale(.15);
}
.cdl .info-cell-text h4 {
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .16em; text-transform: uppercase;
  color: var(--ink-4);
  margin-bottom: 5px;
  transition: color .3s var(--ease);
}
.cdl .info-cell-text p {
  font-size: 14.5px; font-weight: 500;
  color: var(--ink);
  line-height: 1.55;
  letter-spacing: .01em;
}
.cdl .info-cell:hover .info-cell-text h4 { color: var(--acc-accent); }

/* ================= 折叠 tabs ================= */
.cdl .tabs-nav {
  display: flex; gap: 30px;
  overflow-x: auto; scrollbar-width: none;
  border-bottom: 1px solid var(--rule);
}
.cdl .tabs-nav::-webkit-scrollbar { display: none; }
.cdl .tab-btn {
  position: relative; flex-shrink: 0;
  padding: 16px 0;
  border: 0; background: none; cursor: pointer;
  font-family: var(--sans);
  font-size: 13px; font-weight: 600;
  letter-spacing: .04em;
  color: var(--ink-4);
  white-space: nowrap;
  transition: color .25s var(--ease);
}
.cdl .tab-btn::after {
  content: '';
  position: absolute; left: 0; right: 0; bottom: -1px; height: 1px;
  background: var(--acc-accent);
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.cdl .tab-btn:hover { color: var(--ink-2); }
.cdl .tab-btn.active { color: var(--ink); }
.cdl .tab-btn.active::after { transform: scaleX(1); }
.cdl .tab-btn-icon { margin-right: 7px; font-size: 13px; opacity: .85; }

.cdl .tab-panel { display: none; padding: 40px 0 8px; }
.cdl .tab-panel.active { display: block; animation: fadeIn .45s var(--ease); }

/* 关键标签 */
.cdl .key-tags-row { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 28px; }
.cdl .key-tag {
  padding: 4px 11px;
  border: 1px solid var(--acc-accent-line);
  background: var(--acc-accent-soft);
  color: var(--acc-accent);
  font-size: 10.5px; font-weight: 600;
  letter-spacing: .05em;
}

/* 正文 */
.cdl .prose { max-width: 760px; }
.cdl .prose p {
  font-size: 15.5px;
  line-height: 2.05;
  color: var(--ink-2);
  margin-bottom: 20px;
  white-space: pre-line;
  letter-spacing: .01em;
}
.cdl .prose p:last-child { margin-bottom: 0; }
.cdl .prose p:first-child {
  font-size: 16.5px;
  line-height: 1.95;
  color: var(--ink);
}

/* 引文 */
.cdl .pull-quote {
  position: relative;
  margin: 32px 0;
  padding: 2px 0 2px 26px;
  border-left: 1px solid var(--gold);
}
.cdl .pull-quote p {
  font-family: var(--serif);
  font-size: 18px;
  font-style: italic;
  line-height: 1.9;
  color: var(--ink-2);
  white-space: pre-line;
}
.cdl .pull-quote cite {
  display: block;
  margin-top: 10px;
  font-family: var(--sans);
  font-style: normal;
  font-size: 10px; font-weight: 600;
  letter-spacing: .16em; text-transform: uppercase;
  color: var(--ink-4);
}
.cdl .quotes-block .pull-quote + .pull-quote { margin-top: 18px; }

/* ================= 作品 ================= */
.cdl .works-section { background: var(--paper-2); }
.cdl .work-stack { display: flex; flex-direction: column; gap: 40px; }

.cdl .work-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  border: 1px solid var(--rule);
  background: var(--paper);
  transition: border-color .4s var(--ease);
}
.cdl .work-card:hover { border-color: var(--rule-2); }

.cdl .work-cover {
  position: relative;
  min-height: 320px;
  background: var(--night);
  overflow: hidden;
}
.cdl .work-cover::after {
  content: '';
  position: absolute; inset: 10px;
  border: 1px solid rgba(244,239,228,.14);
  pointer-events: none;
}
.cdl .work-cover-image {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
}

.cdl .work-info { padding: 40px 42px; display: flex; flex-direction: column; gap: 14px; }
.cdl .work-label {
  display: flex; align-items: center; gap: 10px;
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .22em; text-transform: uppercase;
  color: var(--acc-accent);
}
.cdl .work-label::before { content: ''; width: 22px; height: 1px; background: var(--acc-accent); }
.cdl .work-title {
  font-family: var(--serif);
  font-size: clamp(22px, 2.8vw, 30px);
  font-weight: 400;
  color: var(--ink);
  line-height: 1.3;
}
.cdl .work-title-jp {
  font-size: 12px; letter-spacing: .06em;
  color: var(--ink-4);
  margin-top: -6px;
}
.cdl .work-meta {
  display: flex; flex-wrap: wrap; gap: 26px;
  padding: 16px 0;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  margin: 4px 0;
}
.cdl .work-meta-item { display: flex; flex-direction: column; gap: 3px; }
.cdl .meta-label {
  font-size: 9px; font-weight: 700;
  letter-spacing: .14em; text-transform: uppercase;
  color: var(--ink-5);
}
.cdl .meta-value { font-size: 13.5px; font-weight: 500; color: var(--ink-2); }
.cdl .work-desc { font-size: 14.5px; line-height: 1.95; color: var(--ink-3); }
.cdl .work-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.cdl .work-tags .tag { border-color: var(--rule-2); color: var(--ink-3); font-size: 10px; }
.cdl .work-tags .tag.dark { border-color: var(--ink-3); background: transparent; color: var(--ink-2); }
.cdl .work-tags .tag.live { border-color: #a9cbb8; background: transparent; color: #3f7a5c; }

.cdl .work-actions { margin-top: 6px; }
.cdl .work-notice {
  display: inline-block;
  padding: 6px 14px;
  border: 1px dashed var(--rule-2);
  font-size: 11.5px; font-weight: 600;
  letter-spacing: .04em;
  color: var(--ink-4);
}

/* 外链按钮：统一细线方框，仅用左边线色区分来源 */
.cdl .btn-action {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 11px 22px;
  border: 1px solid var(--ink);
  background: transparent;
  color: var(--ink);
  font-family: var(--sans);
  font-size: 12px; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase;
  transition: background .3s var(--ease), color .3s var(--ease), border-color .3s var(--ease);
}
.cdl .btn-action .btn-arrow { font-size: 13px; transition: transform .3s var(--ease); }
.cdl .btn-action:hover { color: var(--paper); background: var(--ink); }
.cdl .btn-action:hover .btn-arrow { transform: translateX(4px); }
.cdl .btn-action.bilibili { border-left: 3px solid #fb7299; }
.cdl .btn-action.steam { border-left: 3px solid #2a475e; }
.cdl .btn-action.silver { border-left: 3px solid #9aa2aa; }
.cdl .btn-action.orange { border-left: 3px solid #ea580c; }
.cdl .btn-action.duo { border-left: 3px solid #60a5fa; }

/* ================= 图版 ================= */
.cdl .gallery-section { background: var(--paper-2); }
.cdl .gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px 22px;
}
.cdl .gallery-item {
  position: relative;
  margin: 0;
  cursor: pointer;
  background: var(--paper-3);
  border: 1px solid var(--rule);
  transition: border-color .4s var(--ease), box-shadow .45s var(--ease);
}
.cdl .gallery-item:hover {
  border-color: var(--gold);
  box-shadow: 0 24px 40px -22px rgba(24,32,39,.36);
}
.cdl .gallery-item-inner {
  aspect-ratio: 3 / 4;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 10px; padding: 18px; text-align: center;
  overflow: hidden;
}
.cdl .gallery-img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top center;
  transition: transform 1.1s var(--ease-out);
}
.cdl .gallery-item:hover .gallery-img { transform: scale(1.04); }

/* 空图位：细线方框 + 对角斜线，像档案里待补的图版 */
.cdl .gallery-item-empty {
  position: relative;
  background: var(--paper-3);
  background-image:
    linear-gradient(var(--rule) 1px, transparent 1px),
    linear-gradient(90deg, var(--rule) 1px, transparent 1px);
  background-size: 26px 26px;
  gap: 16px;
}
.cdl .empty-frame {
  position: relative;
  display: block;
  width: 58px; height: 58px;
  border: 1px solid var(--rule-2);
  background: var(--paper-2);
}
.cdl .empty-frame::before,
.cdl .empty-frame::after {
  content: '';
  position: absolute; left: 50%; top: 50%;
  width: 82px; height: 1px;
  background: var(--rule-2);
  transform-origin: center;
}
.cdl .empty-frame::before { transform: translate(-50%, -50%) rotate(45deg); }
.cdl .empty-frame::after { transform: translate(-50%, -50%) rotate(-45deg); }
.cdl .gallery-item-label { font-size: 11px; color: var(--ink-3); letter-spacing: .1em; }

.cdl .gallery-plate-caption {
  display: flex; align-items: baseline; gap: 10px;
  padding: 11px 13px;
  border-top: 1px solid var(--rule);
  background: var(--paper);
}
.cdl .plate-no {
  font-family: var(--serif);
  font-size: 11px;
  color: var(--gold);
  letter-spacing: .04em;
}
.cdl .plate-kind {
  padding: 1px 6px;
  border: 1px solid var(--rule-2);
  font-size: 8.5px; font-weight: 700;
  letter-spacing: .12em;
  color: var(--ink-4);
  flex-shrink: 0;
}
.cdl .plate-text {
  font-size: 10.5px; font-weight: 500;
  letter-spacing: .04em;
  color: var(--ink-3);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* ================= 影像 ================= */
.cdl .video-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 26px; }
.cdl .video-card {
  display: block;
  border: 1px solid var(--rule);
  background: var(--paper);
  transition: border-color .4s var(--ease), box-shadow .4s var(--ease);
}
.cdl .video-card:hover { border-color: var(--gold); box-shadow: 0 24px 44px -24px rgba(24,32,39,.3); }
.cdl .video-cover {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--night);
  overflow: hidden;
}
.cdl .video-cover-img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 1.1s var(--ease-out), opacity .4s;
  opacity: .92;
}
.cdl .video-card:hover .video-cover-img { transform: scale(1.035); opacity: 1; }
.cdl .video-play {
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  display: flex; align-items: center; justify-content: center;
  width: 52px; height: 52px;
  border: 1px solid rgba(255,255,255,.72);
  background: rgba(22,29,36,.36);
  backdrop-filter: blur(6px);
  color: #fff;
  transition: background .3s, border-color .3s, transform .4s var(--ease);
}
.cdl .video-play span { font-size: 13px; margin-left: 3px; }
.cdl .video-card:hover .video-play {
  background: var(--gold);
  border-color: var(--gold);
  transform: translate(-50%, -50%) scale(1.08);
}
.cdl .video-info { padding: 18px 20px 20px; border-top: 1px solid var(--rule); }
.cdl .video-info h4 {
  font-family: var(--serif);
  font-size: 16px; font-weight: 400;
  color: var(--ink);
  margin-bottom: 5px;
}
.cdl .video-info p { font-size: 12px; color: var(--ink-4); letter-spacing: .02em; }

/* ================= 条目列表（能力 / 关系） ================= */
.cdl .entry-list { border-top: 1px solid var(--rule); }
.cdl .entry {
  display: grid;
  grid-template-columns: 34px 1fr 40px;
  align-items: start;
  gap: 18px;
  padding: 26px 0;
  border-bottom: 1px solid var(--rule);
  transition: background .3s var(--ease);
}
.cdl .entry:hover { background: var(--acc-accent-soft); }
.cdl .entry-icon { font-size: 19px; line-height: 1.6; opacity: .85; }
.cdl .entry-body h4 {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  font-family: var(--serif);
  font-size: 18px; font-weight: 400;
  color: var(--ink);
  margin-bottom: 7px;
}
.cdl .entry-body p { font-size: 14px; line-height: 1.9; color: var(--ink-3); }
.cdl .entry-no {
  font-family: var(--serif);
  font-size: 11px;
  color: var(--ink-5);
  text-align: right;
  padding-top: 4px;
  letter-spacing: .04em;
}

.cdl .rel-type {
  display: inline-flex; align-items: center;
  padding: 2px 9px;
  border: 1px solid var(--rule-2);
  font-family: var(--sans);
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--ink-3);
}
.cdl .rel-romance { border-color: #d9a7bd; color: #a8567a; }
.cdl .rel-family { border-color: #a9bdd9; color: #4a6b96; }
.cdl .rel-friend { border-color: #a9cbb8; color: #3f7a5c; }
.cdl .rel-other { border-color: var(--rule-2); color: var(--ink-3); }

/* ================= 评价 ================= */
.cdl .review-head {
  padding: 72px 0 56px;
  background: var(--paper-2);
  border-bottom: 1px solid var(--rule);
}
.cdl .review-head-inner { display: flex; align-items: center; gap: 26px; }
.cdl .review-avatar {
  width: 76px; height: 96px; flex-shrink: 0;
  background-color: var(--paper-3);
  background-position: top center;
  background-size: cover;
  border: 1px solid var(--gold-line);
  padding: 0;
}
.cdl .review-title {
  font-family: var(--serif);
  font-size: clamp(24px, 3.2vw, 36px);
  font-weight: 400;
  color: var(--ink);
  margin: 8px 0 6px;
}
.cdl .review-sub { font-size: 12px; letter-spacing: .06em; color: var(--ink-4); }

.cdl .review-body { max-width: 760px; }
.cdl .review-text {
  font-size: 16px;
  line-height: 2.15;
  color: var(--ink-2);
  white-space: pre-line;
  letter-spacing: .012em;
}
.cdl .review-text::first-line { color: var(--ink); }
.cdl .review-empty {
  padding: 40px 0;
  text-align: center;
  font-family: var(--serif);
  font-size: 16px;
  color: var(--ink-4);
}

/* ================= 响应式 ================= */
@media (max-width: 1100px) {
  .cdl .hero-content { grid-template-columns: 1fr .8fr; gap: 36px; }
  .cdl .hero-portrait { width: min(100%, 280px); }
}
@media (max-width: 900px) {
  .cdl .hero { min-height: auto; padding: 118px 0 64px; }
  .cdl .hero-content { grid-template-columns: 1fr; gap: 44px; }
  .cdl .hero-visual { justify-content: center; }
  .cdl .hero-portrait { width: 220px; }
  .cdl .info-grid { grid-template-columns: repeat(2, 1fr); }
  .cdl .info-cell:not(:nth-child(3n)) { border-right: 0; }
  .cdl .info-cell:nth-child(odd) { padding-left: 0; padding-right: 22px; border-right: 1px solid var(--rule); }
  .cdl .info-cell:nth-child(even) { padding-left: 22px; }
  .cdl .work-card { grid-template-columns: 240px 1fr; }
  .cdl .work-info { padding: 32px; }
  .cdl .gallery-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .cdl .main-tab-nav { top: 54px; }
  .cdl .main-tab-btn { padding: 14px 15px; font-size: 12px; }
  .cdl .main-tab-btn::after { left: 15px; right: 15px; }
  .cdl .work-card { grid-template-columns: 1fr; }
  .cdl .work-cover { min-height: 220px; }
  .cdl .work-cover-image { position: relative; height: 220px; }
  .cdl .video-grid { grid-template-columns: 1fr; }
  .cdl .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 18px 14px; }
}
@media (max-width: 640px) {
  .cdl .hero-name-jp { font-size: 42px; }
  .cdl .info-grid { grid-template-columns: 1fr; }
  .cdl .info-cell,
  .cdl .info-cell:nth-child(odd),
  .cdl .info-cell:nth-child(even) {
    padding-left: 0; padding-right: 0;
    border-right: 0;
  }
  .cdl .tab-panel { padding: 28px 0 4px; }
  .cdl .prose p { font-size: 15px; line-height: 2; }
  .cdl .prose p:first-child { font-size: 15.5px; }
  .cdl .pull-quote p { font-size: 16px; }
  .cdl .work-info { padding: 24px 20px 28px; }
  .cdl .review-head { padding: 48px 0 36px; }
  .cdl .review-head-inner { gap: 18px; }
  .cdl .review-avatar { width: 60px; height: 76px; }
  .cdl .review-text { font-size: 15px; line-height: 2.05; }
  .cdl .entry { grid-template-columns: 26px 1fr; gap: 14px; }
  .cdl .entry-no { display: none; }
}
</style>
