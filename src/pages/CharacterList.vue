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
.archive-section { background: var(--paper); padding: 96px 0 112px; }
.archive-heading {
  display: flex; align-items: flex-end; justify-content: space-between; gap: 24px;
  padding-bottom: 26px; border-bottom: 1px solid var(--rule-2);
  margin-bottom: 38px;
}
.archive-eyebrow {
  margin-bottom: 10px; color: var(--gold);
  font: 700 10px var(--sans); letter-spacing: 0.24em; text-transform: uppercase;
}
.archive-heading h2 {
  color: var(--ink); font: 400 clamp(34px, 4.2vw, 52px)/1.05 var(--serif);
  letter-spacing: 0.01em;
}
.archive-description { margin-top: 12px; color: var(--ink-3); font-size: 13.5px; letter-spacing: 0.02em; }
.archive-count {
  padding-bottom: 6px; color: var(--ink-4);
  font: 11px var(--sans); letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap;
}
.archive-count strong {
  color: var(--gold); font: 400 30px/1 var(--serif); letter-spacing: 0.02em;
  margin-right: 4px;
}
.empty-state { padding: 88px 24px; text-align: center; color: var(--ink-3); }
.empty-state p { margin-bottom: 20px; font-size: 14px; letter-spacing: 0.04em; }
.empty-state button {
  padding: 10px 20px; border: 1px solid var(--rule-2); color: var(--ink);
  background: transparent; cursor: pointer; font: 600 12px var(--sans);
  letter-spacing: 0.1em; text-transform: uppercase;
  transition: all 0.3s var(--ease);
}
.empty-state button:hover { border-color: var(--gold); color: var(--gold); background: var(--gold-soft); }
@media (max-width: 768px) {
  .archive-section { padding: 58px 0 70px; }
  .archive-heading { align-items: flex-start; flex-direction: column; gap: 12px; padding-bottom: 22px; margin-bottom: 26px; }
  .archive-count { padding: 0; }
  .archive-count strong { font-size: 24px; }
}
</style>
