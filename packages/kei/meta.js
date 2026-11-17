/**
 * kei 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'kei',
  name: '轻井泽惠',
  nameSub: 'Karuizawa Kei',
  series: '欢迎来到实力至上主义的教室',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '辣妹', cls: 'tag-pink' },
    { text: '假面', cls: 'tag-purple' },
    { text: '坚强', cls: 'tag-amber' }
  ]
}
