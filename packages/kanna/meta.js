/**
 * kanna 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'kanna',
  name: '明月栞那',
  nameSub: 'Akizuki Kanna',
  series: '星光咖啡馆与死神之蝶',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '死神', cls: 'tag-purple' },
    { text: '机械白痴', cls: 'tag-amber' },
    { text: '小恶魔', cls: 'tag-pink' },
    { text: '咖啡', cls: 'tag-cyan' }
  ]
}
