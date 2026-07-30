<template>
  <div class="list-page">
    <AppHeader />
    <HeroSection @search="onSearch" />

    <section id="character-list" class="archive-section">
      <div class="container">
        <div class="archive-heading">
          <div>
            <p class="archive-eyebrow">The collection</p>
            <h2>角色档案</h2>
            <p class="archive-description">每一页，都是一次重新相遇。</p>
          </div>
          <div class="archive-count"><strong>{{ visibleCount }}</strong> / {{ totalCount }} entries</div>
        </div>

        <div class="character-grid">
          <CharacterCard v-for="(char, idx) in filteredCharacters" :key="char.id" :character="char" :index="idx" />
        </div>

        <div v-if="filteredCharacters.length === 0" class="empty-state">
          <p>未找到匹配的角色档案。</p>
          <button type="button" @click="resetFilters">重置筛选</button>
        </div>
      </div>
    </section>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'
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
      const query = searchQuery.value.trim().toLowerCase()
      return characters.value.filter(character => {
        const matchesQuery = !query || `${character.name} ${character.nameSub} ${character.series}`.toLowerCase().includes(query)
        return matchesQuery
      })
    })
    const visibleCount = computed(() => filteredCharacters.value.length)
    const totalCount = computed(() => characters.value.length)
    function onSearch(query) { searchQuery.value = query }
    function resetFilters() { searchQuery.value = '' }
    function onToast(event) { showToast(event.detail.message, event.detail.type) }

    onMounted(() => window.addEventListener('toast', onToast))
    onUnmounted(() => window.removeEventListener('toast', onToast))

    return { filteredCharacters, visibleCount, totalCount, onSearch, resetFilters }
  }
}
</script>

<style>
.archive-section { background: #f4f2ed; padding: 92px 0 108px; }
.archive-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; padding-bottom: 30px; border-bottom: 1px solid #cfcac0; }
.archive-eyebrow { margin-bottom: 6px; color: #9c7953; font: 700 10px Inter,sans-serif; letter-spacing: .16em; text-transform: uppercase; }
.archive-heading h2 { color: #202d37; font: 400 clamp(33px,4vw,52px)/1 Georgia,'Noto Serif SC',serif; letter-spacing: 0; }
.archive-description { margin-top: 10px; color: #75808a; font-size: 14px; }
.archive-count { padding-bottom: 5px; color: #879098; font: 11px Inter,sans-serif; letter-spacing: .1em; text-transform: uppercase; white-space: nowrap; }
.archive-count strong { color: #9c7953; font: 400 29px/1 Georgia,serif; letter-spacing: 0; }
.empty-state { padding: 80px 24px; text-align: center; color: #66717a; }.empty-state p { margin-bottom: 18px; }.empty-state button { padding: 9px 16px; border: 1px solid #263640; color: #263640; background: transparent; cursor: pointer; font: inherit; }
@media (max-width:768px) { .archive-section { padding: 55px 0 68px; }.archive-heading { align-items: start; flex-direction: column; gap: 10px; padding-bottom: 23px; }.archive-count { padding: 0; } }
</style>
