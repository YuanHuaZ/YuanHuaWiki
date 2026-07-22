import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/rem',
    name: 'RemDetail',
    component: Detail,
    meta: { title: '雷姆 | Re:从零开始的异世界生活' }
  }
])

export default {
  name: 'rem',
  description: '雷姆角色详情',
  api: () => import('./api/index.js')
}
