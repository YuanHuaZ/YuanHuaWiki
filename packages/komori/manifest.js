import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/komori',
    name: 'KomoriDetail',
    component: Detail,
    meta: { title: '小鞠知花 | 败犬女主太多了' }
  }
])

export default {
  name: 'komori',
  description: '小鞠知花角色详情',
  api: () => import('./api/index.js')
}
