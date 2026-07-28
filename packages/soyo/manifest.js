import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/soyo',
    name: 'SoyoDetail',
    component: Detail,
    meta: { title: '長崎素世 | BanG Dream! It\'s MyGO!!!!!' }
  }
])

export default {
  name: 'soyo',
  description: '長崎素世角色详情',
  api: () => import('./api/index.js')
}
