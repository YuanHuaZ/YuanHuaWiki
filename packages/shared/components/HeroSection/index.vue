<template>
  <section class="home-hero" aria-labelledby="home-title">
    <div class="hero-noise"></div>
    <div class="hero-rule hero-rule-top"></div>
    <div class="hero-rule hero-rule-bottom"></div>
    <div class="home-hero__inner">
      <div class="home-hero__copy">
        <p class="hero-kicker"><span></span> Character archive / 2026</p>
        <h1 id="home-title">YuanHua<br><em>Wiki</em></h1>
        <p class="hero-intro">收藏那些在故事里闪闪发光，后来也留在心里的角色。</p>
        <label class="hero-search" for="character-search">
          <span class="search-mark" aria-hidden="true"></span>
          <input id="character-search" v-model="searchQuery" type="search" placeholder="搜索角色、作品或英文名" @input="$emit('search', searchQuery)">
          <button v-if="searchQuery" type="button" class="search-clear" aria-label="清除搜索" @click="clearSearch">×</button>
        </label>
        <div class="hero-meta">
          <div><strong>{{ characterCount }}</strong><span> 位角色档案</span></div>
          <div><strong>{{ seriesCount }}</strong><span> 部作品收录</span></div>
        </div>
        <a class="hero-browse" href="#character-list">浏览全部角色 <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-portrait" aria-hidden="true">
        <div class="portrait-caption">FEATURED<br>COLLECTION</div>
        <div class="portrait-frame portrait-frame--back"></div>
        <div class="portrait-image portrait-image--main" :style="imageStyle(featured[0])"></div>
        <div class="portrait-frame portrait-frame--front"></div>
        <div class="portrait-image portrait-image--small portrait-image--one" :style="imageStyle(featured[1])"></div>
        <div class="portrait-image portrait-image--small portrait-image--two" :style="imageStyle(featured[2])"></div>
        <div class="portrait-number">01 <span>/ {{ characterCount.toString().padStart(2, '0') }}</span></div>
      </div>
    </div>
    <div class="hero-quotes">
      <div class="hero-quotes__track">
        <span>「我并不向往和很多人拥有表面交情，我只想和一个人深交到底。」—— 因幡巡</span>
        <span>「生老病死，天地万象，尽在吾辈。」—— 胡桃</span>
        <span>「我要成为你推的孩子。」—— 有马加奈</span>
        <span>「既然你话都说出口了，就负起责任。你逃不掉了——靠你了，社长。」—— 小鞠知花</span>
        <span>「看吧，放手去做总会有办法的。如果是你的话，一定能够创造未来。」—— 七海千秋</span>
        <span>「我等过很久，我不会再等了。」—— 弗洛洛</span>
        <span>「我只是个旅人、只是个魔女，仅此而已。既非无所不能，也不可能万事如意。」—— 伊蕾娜</span>
        <span>「我大概一辈子都忘不了CRYCHIC了。」—— 長崎素世</span>
        <span>「从这里开始吧。从一开始……不，从零开始。」—— 雷姆</span>
        <span>「我是你的恋人。」—— 友利奈绪</span>
        <span>「不，我不认识叫那种名字的人。」—— 和泉纱雾</span>
        <span>「四糸奈是我的理想，是我心目中的英雄。我希望变得像四糸奈一样强大、坚强、帅气。」—— 四糸乃</span>
        <span aria-hidden="true">「我并不向往和很多人拥有表面交情，我只想和一个人深交到底。」—— 因幡巡</span>
        <span aria-hidden="true">「生老病死，天地万象，尽在吾辈。」—— 胡桃</span>
        <span aria-hidden="true">「我要成为你推的孩子。」—— 有马加奈</span>
        <span aria-hidden="true">「既然你话都说出口了，就负起责任。你逃不掉了——靠你了，社长。」—— 小鞠知花</span>
        <span aria-hidden="true">「看吧，放手去做总会有办法的。如果是你的话，一定能够创造未来。」—— 七海千秋</span>
        <span aria-hidden="true">「我等过很久，我不会再等了。」—— 弗洛洛</span>
        <span aria-hidden="true">「我只是个旅人、只是个魔女，仅此而已。既非无所不能，也不可能万事如意。」—— 伊蕾娜</span>
        <span aria-hidden="true">「我大概一辈子都忘不了CRYCHIC了。」—— 長崎素世</span>
        <span aria-hidden="true">「从这里开始吧。从一开始……不，从零开始。」—— 雷姆</span>
        <span aria-hidden="true">「我是你的恋人。」—— 友利奈绪</span>
        <span aria-hidden="true">「不，我不认识叫那种名字的人。」—— 和泉纱雾</span>
        <span aria-hidden="true">「四糸奈是我的理想，是我心目中的英雄。我希望变得像四糸奈一样强大、坚强、帅气。」—— 四糸乃</span>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { getCharacterList } from '@/api/character.js'

export default {
  name: 'HeroSection',
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('')
    const characters = getCharacterList()
    const featured = computed(() => [
      characters.find(character => character.id === 'meguru'),
      characters.find(character => character.id === 'phrolova'),
      characters.find(character => character.id === 'nanami')
    ])
    const characterCount = characters.length
    const seriesCount = new Set(characters.map(character => character.series)).size

    function imageStyle(character) { return character ? { backgroundImage: `url(${character.image})` } : {} }
    function clearSearch() { searchQuery.value = ''; emit('search', '') }

    return { searchQuery, characterCount, seriesCount, featured, imageStyle, clearSearch }
  }
}
</script>

<style>
.home-hero { position: relative; min-height: 720px; overflow: hidden; color: #f5f1e9; background: #18212c; isolation: isolate; }
.home-hero::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #18212c 0%, #18212c 47%, rgba(24,33,44,.82) 64%, rgba(24,33,44,.25) 100%); z-index: -1; }
.home-hero::after { content: ''; position: absolute; right: -7%; top: 0; width: 61%; height: 100%; background: linear-gradient(90deg, #18212c 0%, transparent 28%), url('../../../meguru/images/1.jpg') center 21% / cover no-repeat; opacity: .13; filter: saturate(.6) contrast(1.1); z-index: -2; }
.hero-noise { position: absolute; inset: 0; opacity: .22; pointer-events: none; background-image: radial-gradient(rgba(255,255,255,.36) .6px, transparent .6px); background-size: 5px 5px; mix-blend-mode: soft-light; }
.hero-rule { position: absolute; height: 1px; left: 5vw; right: 5vw; background: rgba(245,241,233,.22); }.hero-rule-top { top: 112px; }.hero-rule-bottom { bottom: 42px; }
.home-hero__inner { width: min(1280px, calc(100% - 48px)); min-height: 720px; margin: 0 auto; display: grid; grid-template-columns: minmax(390px,.9fr) 1.1fr; align-items: center; gap: 26px; padding: 132px 0 78px; }
.home-hero__copy { position: relative; z-index: 2; padding-left: 4.8vw; }.hero-kicker { display: flex; align-items: center; gap: 10px; color: #d8c59c; font-family: Inter,sans-serif; font-size: 11px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }.hero-kicker span { width: 28px; height: 1px; background: #d8c59c; }
.home-hero h1 { margin: 23px 0 16px; font-family: Georgia,'Noto Serif SC',serif; font-size: clamp(60px,7.8vw,112px); font-weight: 400; line-height: .8; letter-spacing: 0; color: #f7f3ea; }.home-hero h1 em { color: #d8c59c; font-weight: 400; }.hero-intro { max-width: 330px; color: #c5cbd0; font-size: 15px; line-height: 1.9; letter-spacing: .04em; }
.hero-search { width: min(100%,390px); display: flex; align-items: center; margin-top: 31px; padding: 0 12px 0 17px; border-bottom: 1px solid rgba(245,241,233,.52); transition: border-color .2s ease; }.hero-search:focus-within { border-color: #d8c59c; }.search-mark { width: 14px; height: 14px; margin-right: 12px; border: 1.5px solid #d8c59c; border-radius: 50%; position: relative; flex: 0 0 auto; }.search-mark::after { content: ''; width: 6px; height: 1.5px; background: #d8c59c; position: absolute; right: -5px; bottom: -2px; transform: rotate(45deg); }.hero-search input { width: 100%; min-width: 0; padding: 13px 0; color: #fff; background: transparent; border: 0; outline: 0; font: 14px 'Noto Sans SC',sans-serif; }.hero-search input::placeholder { color: #9fa9b2; }.search-clear { width: 28px; height: 28px; border: 0; background: transparent; color: #d8c59c; font: 26px/1 Arial,sans-serif; cursor: pointer; }
.hero-meta { display: flex; gap: 30px; margin-top: 31px; }.hero-meta div { display: flex; flex-direction: column; gap: 2px; }.hero-meta strong { color: #f5f1e9; font: 400 28px/1 Georgia,serif; }.hero-meta span { color: #9fa9b2; font-size: 11px; letter-spacing: .08em; }.hero-browse { display: inline-flex; gap: 13px; align-items: center; margin-top: 35px; color: #f5f1e9; font-size: 13px; font-weight: 600; letter-spacing: .06em; }.hero-browse span { color: #d8c59c; font-size: 19px; line-height: 1; }
.hero-portrait { position: relative; height: 500px; align-self: end; }.portrait-frame { position: absolute; border: 1px solid rgba(216,197,156,.58); }.portrait-frame--back { width: min(41vw,492px); height: 456px; right: 8%; bottom: 32px; }.portrait-frame--front { width: min(37vw,447px); height: 422px; right: 0; bottom: 0; }.portrait-image { position: absolute; background-repeat: no-repeat; background-color: #eae7e1; }.portrait-image--main { width: min(36vw,430px); height: 510px; right: 5%; bottom: 0; background-size: 124%; background-position: 50% 0%; filter: saturate(.93) contrast(1.04); }.portrait-image--main::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg,transparent 60%,rgba(24,33,44,.32)); }.portrait-image--small { width: 132px; height: 156px; background-size: 130%; border: 6px solid #18212c; box-shadow: 0 14px 30px rgba(0,0,0,.18); }.portrait-image--one { left: 1%; top: 55px; background-position: 50% 0%; }.portrait-image--two { left: 12%; bottom: -19px; background-position: 51% 0%; }.portrait-caption { position: absolute; top: 20px; right: 47%; z-index: 2; color: #d8c59c; font: 700 10px/1.6 Inter,sans-serif; letter-spacing: .16em; }.portrait-number { position: absolute; right: 2%; top: 4px; color: #f5f1e9; font: 400 34px/1 Georgia,serif; z-index: 3; }.portrait-number span { color: #a9afb1; font: 400 12px Inter,sans-serif; letter-spacing: .08em; }
@media (max-width:900px) { .home-hero { min-height: 750px; }.home-hero__inner { grid-template-columns: .9fr 1fr; width: min(100% - 32px,780px); }.home-hero__copy { padding-left: 0; }.home-hero h1 { font-size: 72px; }.portrait-image--small { display: none; }.portrait-frame--back { right: 1%; }.portrait-image--main { right: 4%; } }
@media (max-width:650px) { .home-hero { min-height: 760px; }.home-hero::after { width: 100%; right: -20%; opacity: .1; }.hero-rule-top { top: 82px; }.home-hero__inner { display: block; min-height: 760px; padding: 120px 0 44px; }.home-hero__copy { padding-left: 0; }.home-hero h1 { font-size: 69px; }.hero-intro { font-size: 14px; }.hero-portrait { height: 273px; margin: 8px -16px 0; }.portrait-frame--back { width: 250px; height: 230px; right: 22px; bottom: 20px; }.portrait-frame--front { width: 225px; height: 209px; right: 7px; bottom: 0; }.portrait-image--main { width: 216px; height: 270px; right: 17px; }.portrait-caption { display: none; }.portrait-number { top: 30px; right: 25px; font-size: 24px; }.hero-rule-bottom { bottom: 24px; } }
.hero-quotes { position: absolute; right: 5vw; bottom: 42px; left: 5vw; overflow: hidden; padding-top: 13px; border-top: 1px solid rgba(245,241,233,.22); }.hero-quotes__track { display: flex; width: max-content; animation: hero-quote-scroll 65s linear infinite; }.hero-quotes span { padding: 0 34px; color: rgba(245,241,233,.64); font: 12px/1.5 serif; letter-spacing: .05em; white-space: nowrap; }.hero-quotes span::before { content: '*'; margin-right: 34px; color: #d8c59c; }@keyframes hero-quote-scroll { to { transform: translateX(-50%); } }@media (prefers-reduced-motion: reduce) { .hero-quotes__track { animation: none; } }
</style>
