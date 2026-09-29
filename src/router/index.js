import { createRouter, createWebHashHistory } from 'vue-router'

const SITE_TITLE = 'YuanHuaWiki — 我喜欢的角色'

const CharacterList = () => import('@/pages/CharacterList.vue')
const CharacterDetail = () => import('@/pages/CharacterDetail.vue')
const NotFound = () => import('@/pages/NotFound.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'CharacterList',
      component: CharacterList,
      meta: { title: SITE_TITLE }
    },
    {
      // 统一详情路由：数据按 :id 从 packages/<id>/api 懒加载
      path: '/character/:id',
      name: 'CharacterDetail',
      component: CharacterDetail,
      meta: { title: SITE_TITLE }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: { title: `页面未找到 — YuanHuaWiki` }
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// 浏览器标签标题跟随路由；详情页数据加载完成后会覆盖为「角色名 | 作品名」
router.afterEach(to => {
  document.title = (to.meta && to.meta.title) || SITE_TITLE
})

export default router
