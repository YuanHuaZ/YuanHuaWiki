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

<style>
.detail-loading {
  min-height: 60vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 18px;
  color: #94a3b8; font-size: 14px; letter-spacing: 0.04em;
}
.detail-loading .loading-spinner {
  width: 34px; height: 34px; border-radius: 50%;
  border: 3px solid #e2e8f0; border-top-color: #94a3b8;
  animation: spinSlow 0.9s linear infinite;
}
</style>
