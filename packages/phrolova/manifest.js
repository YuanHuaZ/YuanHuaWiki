import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/phrolova',
    name: 'PhrolovaDetail',
    component: Detail,
    meta: { title: '弗洛洛 | 鸣潮' }
  }
])

export default {
  name: 'phrolova',
  description: '弗洛洛角色详情',
  api: () => import('./api/index.js')
}
