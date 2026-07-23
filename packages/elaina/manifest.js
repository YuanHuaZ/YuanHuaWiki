import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/elaina',
    name: 'ElainaDetail',
    component: Detail,
    meta: { title: '伊蕾娜 | 魔女之旅' }
  }
])

export default {
  name: 'elaina',
  description: '伊蕾娜角色详情',
  api: () => import('./api/index.js')
}
