import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/sagiri',
    name: 'SagiriDetail',
    component: Detail,
    meta: { title: '和泉纱雾 | 埃罗芒阿老师' }
  }
])

export default {
  name: 'sagiri',
  description: '和泉纱雾角色详情',
  api: () => import('./api/index.js')
}
