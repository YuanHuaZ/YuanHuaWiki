/**
 * aya 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'aya',
  name: '丸山彩',
  nameSub: 'Maruyama Aya',
  series: 'BanG Dream!',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '主唱', cls: 'tag-pink' },
    { text: '努力家', cls: 'tag-amber' },
    { text: '自搜中毒', cls: 'tag-purple' },
    { text: '爱哭', cls: 'tag-cyan' }
  ]
}
