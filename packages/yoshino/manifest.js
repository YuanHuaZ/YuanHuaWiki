import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/yoshino',
    name: 'YoshinoDetail',
    component: Detail,
    meta: { title: '四糸乃 | 第二精灵 · 隐居者' }
  }
])

export default {
  name: 'yoshino',
  description: '四糸乃角色详情',
  api: () => import('./api/index.js')
}
