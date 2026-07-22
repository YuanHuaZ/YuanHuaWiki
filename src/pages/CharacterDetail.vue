<template>
  <div class="detail-page">
    <AppHeader />

    <!-- 占位角色：简化 Hero -->
    <section class="hero hero-simple">
      <div class="hero-grid"></div>
      <div class="hero-content hero-content-simple" v-if="character">
        <div class="hero-visual animate-slide-up">
          <div class="hero-avatar-wrapper hero-avatar-simple">
            <div class="hero-avatar-ring"></div>
            <div class="hero-avatar avatar-placeholder">
              <span class="avatar-emoji">👤</span>
            </div>
          </div>
        </div>
        <div class="hero-text animate-fade-in" style="text-align:center;">
          <div class="hero-badge" style="margin:0 auto;"><span class="dot"></span> {{ character.series }}</div>
          <h1 class="hero-name-jp">{{ character.name }}</h1>
          <p class="hero-name-sub">{{ character.nameSub }}</p>
          <div class="tags" style="justify-content:center;">
            <span v-for="(t,i) in character.tags" :key="i" :class="['tag', t.cls]">{{ t.text }}</span>
          </div>
        </div>
      </div>
    </section>


    <div class="container">
      <nav class="breadcrumb">
        <router-link to="/">首页</router-link> <span class="sep">›</span>
        <router-link to="/">角色列表</router-link> <span class="sep">›</span>
        <span class="current">{{ character ? character.name : '...' }}</span>
      </nav>
    </div>

    <section class="section">
      <div class="container" style="text-align:center;padding:80px 24px;">
        <div style="font-size:64px;margin-bottom:20px;">🚧</div>
        <h2 style="font-size:22px;font-weight:700;color:#0f172a;margin-bottom:10px;">详细资料即将上线</h2>
        <p style="color:#94a3b8;font-size:15px;margin-bottom:24px;">该角色的完整资料正在整理中，敬请期待。</p>
        <router-link to="/" class="btn btn-outline">← 返回角色列表</router-link>
      </div>
    </section>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@packages/shared/components/AppHeader/index.vue'
import AppFooter from '@packages/shared/components/AppFooter/index.vue'
import BackToTop from '@packages/shared/components/BackToTop/index.vue'
import './detail-shared.css'
import { getCharacterById } from '@/api/character.js'

export default {
  name: 'CharacterDetail',
  components: { AppHeader, AppFooter, BackToTop },
  setup() {
    const route = useRoute()
    const character = computed(() => getCharacterById(route.params.id))
    return { character }
  }
}
</script>
