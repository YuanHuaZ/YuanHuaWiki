import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/tomori',
    name: 'TomoriDetail',
    component: Detail,
    meta: { title: '友利奈绪 | Charlotte' }
  }
])

export default {
  name: 'tomori',
  description: '友利奈绪角色详情',
  api: () => import('./api/index.js')
}
