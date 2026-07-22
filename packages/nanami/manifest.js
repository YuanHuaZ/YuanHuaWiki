import { registerPackage } from '@/router'

const Detail = () => import('./views/Detail.vue')

registerPackage([
  {
    path: '/character/nanami',
    name: 'NanamiDetail',
    component: Detail,
    meta: { title: '七海千秋 | 超高校级的游戏玩家' }
  }
])

export default {
  name: 'nanami',
  description: '七海千秋角色详情',
  api: () => import('./api/index.js')
}
