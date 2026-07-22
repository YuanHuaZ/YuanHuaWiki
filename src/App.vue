<template>
  <div id="app-root">
    <router-view :key="$route.fullPath" />
    <ToastContainer />
  </div>
</template>

<script>
import ToastContainer from '@/components/ToastContainer.vue'

export default {
  name: 'App',
  components: { ToastContainer }
}
</script>
