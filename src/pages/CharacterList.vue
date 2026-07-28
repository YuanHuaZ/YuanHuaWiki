<template>
  <div class="list-page">
    <AppHeader />
    <HeroSection @search="onSearch" />

    <div class="hero-transition">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc"/>
      </svg>
    </div>

    <section class="section" id="character-list">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group">
            <h2>📋 角色列表</h2>
            <p>点击卡片查看完整角色资料</p>
          </div>
          <div class="result-count">
            显示 <span>{{ visibleCount }}</span> / <span>{{ totalCount }}</span> 个角色
          </div>
        </div>

        <div class="character-grid">
          <CharacterCard
            v-for="(char, idx) in filteredCharacters"
            :key="char.id"
            :character="char"
            :index="idx"
          />
        </div>

        <div v-if="filteredCharacters.length === 0" class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3>没有找到匹配的角色</h3>
          <p>试试更换搜索关键词</p>
          <button class="btn btn-outline" @click="searchQuery = ''">重置搜索</button>
        </div>
      </div>
    </section>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AppHeader from '@packages/shared/components/AppHeader/index.vue'
import AppFooter from '@packages/shared/components/AppFooter/index.vue'
import HeroSection from '@packages/shared/components/HeroSection/index.vue'
import CharacterCard from '@packages/shared/components/CharacterCard/index.vue'
import BackToTop from '@packages/shared/components/BackToTop/index.vue'
import { getCharacterList } from '@/api/character.js'
import { useToast } from '@/util/toast'

export default {
  name: 'CharacterList',
  components: { AppHeader, AppFooter, HeroSection, CharacterCard, BackToTop },
  setup() {
    const characters = ref(getCharacterList())
    const searchQuery = ref('')
    const { showToast } = useToast()

    const filteredCharacters = computed(() => {
      if (!searchQuery.value) return characters.value
      const q = searchQuery.value.toLowerCase()
      return characters.value.filter(c => {
        const text = `${c.name} ${c.nameSub} ${c.series}`.toLowerCase()
        return text.includes(q)
      })
    })

    const visibleCount = computed(() => filteredCharacters.value.length)
    const totalCount = computed(() => characters.value.length)

    function onSearch(query) {
      searchQuery.value = query
    }

    function onToast(e) {
      showToast(e.detail.message, e.detail.type)
    }

    onMounted(() => window.addEventListener('toast', onToast))
    onUnmounted(() => window.removeEventListener('toast', onToast))

    return { filteredCharacters, searchQuery, visibleCount, totalCount, onSearch }
  }
}
</script>

<style>
.list-page { min-height: 100vh; }
.hero-transition {
  position: relative;
  z-index: 3;
  margin-top: -1px;
  line-height: 0;
  background: #0a0a1a;
}
.hero-transition svg { width: 100%; height: auto; display: block; }
.character-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
@media (max-width: 1200px) { .character-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; } }
@media (max-width: 768px) { .character-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
@media (max-width: 480px) { .character-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }

.result-count {
  font-size: 12px; color: #7c3aed; font-weight: 600;
  background: linear-gradient(135deg, #faf5ff, #fdf2f8);
  padding: 6px 14px; border-radius: 20px;
  border: 1px solid rgba(168,85,247,0.12);
  box-shadow: 0 2px 8px rgba(168,85,247,0.06);
}
.result-count span { color: #7c3aed; font-weight: 700; }

.empty-state {
  text-align: center; padding: 80px 24px;
  grid-column: 1 / -1;
}
.empty-state-icon { font-size: 64px; margin-bottom: 16px; }
.empty-state h3 { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
.empty-state p { font-size: 14px; color: #94a3b8; margin-bottom: 20px; }
</style>
