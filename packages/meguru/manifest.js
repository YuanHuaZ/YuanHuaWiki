import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/meguru',
    name: 'MeguruDetail',
    component: Detail,
    meta: { title: '因幡巡 | Ciallo～的元气宅女' }
  }
])

export default {
  name: 'meguru',
  description: '因幡巡角色详情',
  api: () => import('./api/index.js')
}
