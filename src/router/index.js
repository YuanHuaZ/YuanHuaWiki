import { createRouter, createWebHistory } from 'vue-router'

// Package route registry — each package registers its routes via manifest
const packageRoutes = []

export function registerPackage(routes) {
  packageRoutes.push(...routes)
}

// Auto-import all package manifests
const requirePackage = require.context('@packages', true, /manifest\.js$/)
requirePackage.keys().forEach(key => requirePackage(key))

// Framework-level pages (not tied to a specific character package)
const CharacterList = () => import('@/pages/CharacterList.vue')
const CharacterDetail = () => import('@/pages/CharacterDetail.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...packageRoutes,
    {
      path: '/',
      name: 'CharacterList',
      component: CharacterList,
      meta: { title: 'YuanHuaWiki — 我喜欢的角色' }
    },
    {
      path: '/character/:id',
      name: 'CharacterDetail',
      component: CharacterDetail,
      props: true,
      meta: { title: '角色详情' }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
