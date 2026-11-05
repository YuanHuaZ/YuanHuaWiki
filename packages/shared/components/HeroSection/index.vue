<template>
  <section class="home-hero" aria-labelledby="home-title">
    <div class="hero-grain"></div>
    <div class="hero-vignette"></div>
    <div class="hero-rule hero-rule-top"></div>

    <div class="hero-inner">
      <div class="hero-copy">
        <p class="hero-kicker">
          <span class="kicker-line"></span>
          Character Archive — Vol. 01
        </p>

        <h1 id="home-title">YuanHua<br><em>Wiki</em></h1>

        <p class="hero-intro">收藏那些在故事里闪闪发光，<br>后来也留在心里的角色。</p>

        <label class="hero-search" for="character-search">
          <span class="search-mark" aria-hidden="true"></span>
          <input
            id="character-search"
            v-model="searchQuery"
            type="search"
            placeholder="搜索角色、作品或英文名"
            @input="$emit('search', searchQuery)"
          >
          <button v-if="searchQuery" type="button" class="search-clear" aria-label="清除搜索" @click="clearSearch">×</button>
        </label>

        <div class="hero-meta">
          <div class="meta-item">
            <strong>{{ characterCount }}</strong>
            <span>Characters</span>
          </div>
          <div class="meta-divider"></div>
          <div class="meta-item">
            <strong>{{ seriesCount }}</strong>
            <span>Series</span>
          </div>
        </div>

        <a class="hero-browse" href="#character-list">
          <span>浏览全部角色</span>
          <span class="browse-arrow" aria-hidden="true">↓</span>
        </a>
      </div>

      <div class="hero-mosaic" aria-hidden="true">
        <span class="mosaic-caption">FEATURED&nbsp;SELECTION</span>

        <div class="frame frame-back"></div>
        <div class="plate plate-main" :style="imageStyle(featured[0])"></div>
        <div class="frame frame-front"></div>

        <div class="plate plate-sm plate-one" :style="imageStyle(featured[1])"></div>
        <div class="plate plate-sm plate-two" :style="imageStyle(featured[2])"></div>

        <div class="mosaic-index">
          <span class="index-now">01</span>
          <span class="index-all">/ {{ String(characterCount).padStart(2, '0') }}</span>
        </div>
      </div>
    </div>

    <div class="hero-quotes">
      <div class="hero-quotes__track">
        <span v-for="(q, i) in quotesDoubled" :key="i" :aria-hidden="i >= quotes.length ? 'true' : null">{{ q }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { getCharacterList } from '@/api/character.js'

const QUOTES = [
  '「我并不向往和很多人拥有表面交情，我只想和一个人深交到底。」—— 因幡巡',
  '「生老病死，天地万象，尽在吾辈。」—— 胡桃',
  '「既然你话都说出口了，就负起责任。你逃不掉了——靠你了，社长。」—— 小鞠知花',
  '「看吧，放手去做总会有办法的。如果是你的话，一定能够创造未来。」—— 七海千秋',
  '「我等过很久，我不会再等了。」—— 弗洛洛',
  '「我只是个旅人、只是个魔女，仅此而已。既非无所不能，也不可能万事如意。」—— 伊蕾娜',
  '「我大概一辈子都忘不了CRYCHIC了。」—— 長崎素世',
  '「从这里开始吧。从一开始……不，从零开始。」—— 雷姆',
  '「我是你的恋人。」—— 友利奈绪',
  '「不，我不认识叫那种名字的人。」—— 和泉纱雾',
  '「四糸奈是我的理想，是我心目中的英雄。」—— 四糸乃'
]

export default {
  name: 'HeroSection',
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('')
    const characters = getCharacterList()
    const featured = computed(() => [
      characters.find(c => c.id === 'meguru'),
      characters.find(c => c.id === 'phrolova'),
      characters.find(c => c.id === 'nanami')
    ])
    const characterCount = characters.length
    const seriesCount = new Set(characters.map(c => c.series)).size
    const quotesDoubled = [...QUOTES, ...QUOTES]

    function imageStyle(character) {
      return character ? { backgroundImage: `url(${character.image})` } : {}
    }
    function clearSearch() {
      searchQuery.value = ''
      emit('search', '')
    }

    return { searchQuery, characterCount, seriesCount, featured, imageStyle, clearSearch, quotesDoubled, quotes: QUOTES }
  }
}
</script>

<style scoped>
.home-hero {
  position: relative;
  min-height: 780px;
  overflow: hidden;
  background: var(--night);
  color: var(--night-ink);
  isolation: isolate;
}

/* 背景：右侧立绘残影 + 暗角 */
.home-hero::before {
  content: '';
  position: absolute; inset: 0; z-index: -2;
  background:
    radial-gradient(ellipse 70% 80% at 88% 30%, rgba(200, 168, 106, .10), transparent 62%),
    linear-gradient(90deg, #161d24 0%, #161d24 48%, rgba(22,29,36,.9) 66%, rgba(22,29,36,.5) 100%);
}
.home-hero::after {
  content: '';
  position: absolute; right: -2%; top: 0; width: 54%; height: 100%; z-index: -1;
  background:
    linear-gradient(90deg, #161d24 0%, rgba(22,29,36,.82) 32%, rgba(22,29,36,.42) 68%, rgba(22,29,36,.18) 100%),
    url('../../../meguru/images/1.jpg') center 20% / cover no-repeat;
  opacity: .1;
  filter: grayscale(.4) contrast(1.1) saturate(.65);
}

.hero-grain {
  position: absolute; inset: 0; pointer-events: none; opacity: .5;
  background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.028) 0 1px, transparent 1px 3px);
  mix-blend-mode: soft-light;
}
.hero-vignette {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 90% 90% at 50% 45%, transparent 40%, rgba(10,14,18,.55) 100%);
}

.hero-rule { position: absolute; height: 1px; left: 4vw; right: 4vw; background: rgba(244,239,228,.14); }
.hero-rule-top { top: 96px; }

.hero-inner {
  position: relative;
  width: min(var(--page), calc(100% - 48px));
  min-height: 780px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(360px, .92fr) 1.08fr;
  align-items: center;
  gap: 40px;
  padding: 118px 0 96px;
}

/* ---------- 文案 ---------- */
.hero-copy { position: relative; z-index: 3; }

.hero-kicker {
  display: flex; align-items: center; gap: 12px;
  font-size: 10px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase;
  color: var(--gold-line);
}
.kicker-line { width: 34px; height: 1px; background: var(--gold-line); }

.home-hero h1 {
  margin: 26px 0 0;
  font-family: var(--serif);
  font-size: clamp(58px, 7.6vw, 108px);
  font-weight: 400;
  line-height: .86;
  letter-spacing: -.02em;
  color: #f7f3ea;
}
.home-hero h1 em {
  font-style: italic;
  color: var(--gold-line);
  letter-spacing: -.01em;
}

.hero-intro {
  margin-top: 26px;
  max-width: 340px;
  color: rgba(244,239,228,.62);
  font-size: 14.5px;
  line-height: 1.95;
  letter-spacing: .02em;
}

/* ---------- 搜索 ---------- */
.hero-search {
  position: relative;
  display: flex; align-items: center;
  width: min(100%, 340px);
  margin-top: 36px;
  padding: 0 0 0 0;
  border-bottom: 1px solid rgba(244,239,228,.28);
  transition: border-color .35s var(--ease);
}
.hero-search::after {
  content: ''; position: absolute; left: 0; bottom: -1px; height: 1px; width: 100%;
  background: var(--gold-line);
  transform: scaleX(0); transform-origin: left;
  transition: transform .45s var(--ease);
}
.hero-search:focus-within { border-color: transparent; }
.hero-search:focus-within::after { transform: scaleX(1); }

.search-mark {
  position: relative; flex: 0 0 auto;
  width: 13px; height: 13px; margin-right: 14px;
  border: 1px solid var(--gold-line); border-radius: 50%;
}
.search-mark::after {
  content: ''; position: absolute; right: -5px; bottom: -3px;
  width: 6px; height: 1px; background: var(--gold-line); transform: rotate(45deg);
}
.hero-search input {
  width: 100%; min-width: 0;
  padding: 13px 0;
  border: 0; outline: 0; background: transparent;
  color: #fff; font-size: 14px; letter-spacing: .02em;
}
.hero-search input::placeholder { color: rgba(244,239,228,.34); }
.hero-search input::-webkit-search-cancel-button { display: none; }
.search-clear {
  width: 26px; height: 26px; flex: 0 0 auto;
  border: 0; background: transparent; color: var(--gold-line);
  font-size: 20px; line-height: 1; cursor: pointer; opacity: .7;
  transition: opacity .2s;
}
.search-clear:hover { opacity: 1; }

/* ---------- 统计 ---------- */
.hero-meta { display: flex; align-items: center; gap: 26px; margin-top: 32px; }
.meta-item { display: flex; flex-direction: column; gap: 3px; }
.meta-item strong {
  font-family: var(--serif); font-weight: 400;
  font-size: 30px; line-height: 1; color: #f7f3ea;
  font-variant-numeric: tabular-nums;
}
.meta-item span {
  font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
  color: rgba(244,239,228,.4);
}
.meta-divider { width: 1px; height: 30px; background: rgba(244,239,228,.16); }

/* ---------- 浏览入口 ---------- */
.hero-browse {
  display: inline-flex; align-items: center; gap: 14px;
  margin-top: 38px;
  font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
  color: rgba(244,239,228,.9);
  transition: color .3s var(--ease);
}
.hero-browse:hover { color: var(--gold-line); }
.browse-arrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 26px; height: 26px; border: 1px solid rgba(244,239,228,.24);
  font-size: 12px;
  transition: border-color .3s, transform .3s var(--ease);
}
.hero-browse:hover .browse-arrow { border-color: var(--gold-line); transform: translateY(3px); }

/* ---------- 立绘拼贴 ---------- */
.hero-mosaic {
  position: relative;
  height: 540px;
  align-self: end;
}

.hero-mosaic .plate {
  position: absolute;
  background-repeat: no-repeat;
  background-color: var(--night-2);
  background-position: top center;
  box-shadow: 0 30px 70px rgba(0,0,0,.5);
}

/* 装裱内衬线 */
.hero-mosaic .plate::after {
  content: '';
  position: absolute; inset: 10px;
  border: 1px solid rgba(244,239,228,.16);
  pointer-events: none;
}

.plate-main {
  width: min(35vw, 404px);
  height: 526px;
  right: 7%;
  bottom: 0;
  background-size: 132%;
  background-position: 50% 0%;
  filter: saturate(.94) contrast(1.05);
  animation: slideUp .9s var(--ease) both;
}

.frame { position: absolute; border: 1px solid rgba(200,168,106,.34); pointer-events: none; }
.frame-back { width: min(32vw, 372px); height: 466px; right: 15%; bottom: 40px; }
.frame-back::before,
.frame-front::before {
  content: ''; position: absolute; width: 40px; height: 1px; background: var(--gold-line);
  top: -1px; left: -1px;
}
.frame-front { width: min(33vw, 384px); height: 428px; right: 2%; bottom: 18px; }

.plate-sm {
  width: 122px; height: 152px;
  background-size: 136%;
  border: 5px solid var(--night);
  box-shadow: 0 18px 40px rgba(0,0,0,.48);
  animation: slideUp .9s var(--ease) both;
}
.plate-one { left: 7%; top: 38px; animation-delay: .12s; }
.plate-two { left: 16%; bottom: -10px; animation-delay: .22s; }

.mosaic-caption {
  position: absolute; top: 18px; right: 44%; z-index: 2;
  writing-mode: vertical-rl;
  font-size: 8.5px; font-weight: 700; letter-spacing: .28em;
  color: var(--gold-line);
}
.mosaic-index {
  position: absolute; right: 0; top: 4px; z-index: 3;
  display: flex; align-items: baseline; gap: 6px;
  font-family: var(--serif);
}
.index-now { font-size: 34px; line-height: 1; color: #f7f3ea; }
.index-all { font-size: 11px; letter-spacing: .1em; color: rgba(244,239,228,.42); }

/* ---------- 引文滚动条 ---------- */
.hero-quotes {
  position: absolute; left: 4vw; right: 4vw; bottom: 0;
  overflow: hidden;
  padding: 14px 0;
  border-top: 1px solid rgba(244,239,228,.14);
}
.hero-quotes__track {
  display: flex; width: max-content;
  animation: hero-quote-scroll 78s linear infinite;
}
.hero-quotes span {
  display: inline-flex; align-items: center;
  padding: 0 38px;
  font-family: var(--serif);
  font-size: 11.5px; font-style: italic;
  letter-spacing: .04em; white-space: nowrap;
  color: rgba(244,239,228,.52);
}
.hero-quotes span::before {
  content: '✦'; margin-right: 38px; font-style: normal;
  font-size: 7px; color: var(--gold-line);
}
@keyframes hero-quote-scroll { to { transform: translateX(-50%); } }

/* ---------- 响应式 ---------- */
@media (max-width: 1100px) {
  .hero-inner { grid-template-columns: .95fr 1.05fr; gap: 24px; }
  .plate-main { height: 470px; }
  .frame-back { height: 420px; }
  .frame-front { height: 380px; }
  .hero-mosaic { height: 490px; }
}
@media (max-width: 900px) {
  .home-hero { min-height: 820px; }
  .hero-inner {
    grid-template-columns: 1fr;
    min-height: 820px;
    padding: 130px 0 110px;
    gap: 0;
  }
  .hero-mosaic { height: 320px; align-self: auto; margin-top: 18px; }
  /* 移动端改用居中定位，避免容器变窄后 right 百分比导致溢出。
     用 margin-left 而非 translateX：卡片有 slideUp 动画（fill: both），
     动画结束后 transform: none 会盖掉 translateX。 */
  .plate-main {
    left: 50%; right: auto;
    margin-left: -105px;
    width: 210px; height: 278px;
  }
  .frame-back {
    left: 50%; right: auto;
    margin-left: -116px;
    width: 232px; height: 250px;
    bottom: 26px;
  }
  .frame-front {
    left: 50%; right: auto;
    margin-left: -100px;
    width: 200px; height: 228px;
    bottom: 12px;
  }
  .plate-sm { display: none; }
  .mosaic-caption { display: none; }
  .mosaic-index { right: 6%; top: 10px; }
  .index-now { font-size: 24px; }
}
@media (max-width: 640px) {
  .home-hero { min-height: 720px; }
  .hero-inner { min-height: 720px; padding: 104px 0 68px; }
  .home-hero h1 { font-size: 56px; margin-top: 18px; }
  .hero-intro { font-size: 13.5px; margin-top: 18px; }
  .hero-search { margin-top: 24px; }
  .hero-meta { margin-top: 22px; gap: 20px; }
  .meta-item strong { font-size: 26px; }
  .hero-browse { margin-top: 26px; }
  .hero-mosaic { height: 244px; margin-top: 10px; }
  .plate-main { width: 164px; height: 218px; margin-left: -82px; }
  .frame-back { width: 182px; height: 196px; margin-left: -91px; bottom: 20px; }
  .frame-front { width: 158px; height: 180px; margin-left: -79px; bottom: 8px; }
  .hero-rule-top { top: 72px; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-quotes__track { animation: none; }
}
</style>
