import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/hutao',
    name: 'HutaoDetail',
    component: Detail,
    meta: { title: '胡桃 | 原神' }
  }
])

export default {
  name: 'hutao',
  description: '胡桃角色详情',
  api: () => import('./api/index.js')
}
