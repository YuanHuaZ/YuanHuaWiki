import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/kana',
    name: 'KanaDetail',
    component: Detail,
    meta: { title: '有马加奈 | 我推的孩子' }
  }
])

export default {
  name: 'kana',
  description: '有马加奈角色详情',
  api: () => import('./api/index.js')
}
