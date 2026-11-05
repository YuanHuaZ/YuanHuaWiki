<template>
  <CharacterDetailLayout v-if="character" :data="character" />

  <NotFound v-else-if="loaded" />

  <div v-else class="detail-loading">
    <div class="loading-spinner"></div>
    <p>正在翻开这页档案…</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CharacterDetailLayout from '@packages/shared/components/CharacterDetailLayout/index.vue'
import NotFound from '@/pages/NotFound.vue'
import { loadCharacter } from '@/api/character.js'

const SITE_TITLE = 'YuanHuaWiki — 我喜欢的角色'

export default {
  name: 'CharacterDetail',
  components: { CharacterDetailLayout, NotFound },
  setup() {
    const route = useRoute()
    const character = ref(null)
    const loaded = ref(false)

    async function load(id) {
      loaded.value = false
      character.value = await loadCharacter(id)
      loaded.value = true
      document.title = character.value
        ? character.value.name + ' | ' + character.value.series + ' — YuanHuaWiki'
        : SITE_TITLE
    }

    watch(() => route.params.id, id => { if (id) load(id) }, { immediate: true })

    return { character, loaded }
  }
}
</script>

<style scoped>
.detail-loading {
  min-height: 70vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 20px;
  background: var(--paper);
  color: var(--ink-4);
  font-size: 12px;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.detail-loading .loading-spinner {
  width: 30px; height: 30px;
  border: 1px solid var(--rule-2);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spinSlow .9s linear infinite;
}
</style>
