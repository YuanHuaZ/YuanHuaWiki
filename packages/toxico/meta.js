/**
 * toxico 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'toxico',
  name: '毒毒子',
  nameSub: 'Toxico Dannar',
  series: '不道德公会',
  image,
  cardSize: 'cover',
  tags: [
    { text: '黑魔法师', cls: 'tag-purple' },
    { text: '无表情', cls: 'tag-dark' },
    { text: '毒舌', cls: 'tag-red' },
    { text: '嗜睡', cls: 'tag-blue' }
  ]
}
