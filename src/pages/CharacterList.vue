<template>
  <div class="list-page">
    <AppHeader />
    <HeroSection @search="onSearch" />

    <section id="character-list" class="archive-section">
      <div class="container">
        <div class="archive-heading">
          <div class="archive-title-group">
            <p class="archive-eyebrow">The Collection</p>
            <h2>角色档案</h2>
            <p class="archive-description">每一页，都是一次重新相遇。</p>
          </div>

          <div class="archive-count">
            <strong>{{ visibleCount }}</strong>
            <span class="count-slash">/</span>
            <span class="count-total">{{ totalCount }}</span>
            <span class="count-label">Entries</span>
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
        const haystack = `${character.name} ${character.nameSub} ${character.series}`
        return !query || haystack.toLowerCase().includes(query)
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

<style scoped>
.list-page { background: var(--paper); }

.archive-section { padding: 88px 0 112px; scroll-margin-top: 76px; }

/* ---------- 目录页标题 ---------- */
.archive-heading {
  display: flex; align-items: flex-end; justify-content: space-between; gap: 32px;
  padding-bottom: 26px;
  margin-bottom: 42px;
  border-bottom: 1px solid var(--rule);
}
.archive-eyebrow {
  margin-bottom: 12px;
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .24em; text-transform: uppercase;
  color: var(--gold);
}
.archive-title-group h2 {
  font-family: var(--serif);
  font-size: clamp(34px, 4.4vw, 54px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: .01em;
  color: var(--ink);
}
.archive-description {
  margin-top: 14px;
  font-size: 13.5px;
  color: var(--ink-4);
  letter-spacing: .02em;
}

.archive-count {
  display: flex; align-items: baseline; gap: 6px;
  padding-bottom: 6px;
  white-space: nowrap;
}
.archive-count strong {
  font-family: var(--serif);
  font-size: 34px; font-weight: 400;
  line-height: 1;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.count-slash { font-family: var(--serif); font-size: 15px; color: var(--rule-2); }
.count-total { font-family: var(--serif); font-size: 15px; color: var(--ink-4); }
.count-label {
  margin-left: 8px;
  font-size: 9px; font-weight: 700;
  letter-spacing: .2em; text-transform: uppercase;
  color: var(--ink-5);
}

/* ---------- 空状态 ---------- */
.empty-state { padding: 104px 24px; text-align: center; }
.empty-state p {
  font-family: var(--serif);
  font-size: 18px;
  color: var(--ink-3);
  margin-bottom: 22px;
}
.empty-state button {
  padding: 10px 24px;
  border: 1px solid var(--ink);
  background: transparent; color: var(--ink);
  font-size: 11px; font-weight: 700;
  letter-spacing: .12em; text-transform: uppercase;
  cursor: pointer;
  transition: background .25s var(--ease), color .25s var(--ease);
}
.empty-state button:hover { background: var(--ink); color: var(--paper); }

/* ---------- 响应式 ---------- */
@media (max-width: 900px) {
  .archive-section { padding: 64px 0 80px; }
  .archive-heading { margin-bottom: 32px; padding-bottom: 20px; }
}
@media (max-width: 640px) {
  .archive-section { padding: 52px 0 68px; }
  .archive-heading { flex-direction: column; align-items: flex-start; gap: 16px; }
  .archive-description { font-size: 12.5px; }
  .archive-count { padding-bottom: 0; }
  .archive-count strong { font-size: 26px; }
}
</style>
