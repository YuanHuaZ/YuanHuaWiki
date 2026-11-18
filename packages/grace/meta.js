/**
 * grace 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'grace',
  name: '莉莉',
  nameSub: 'Lily',
  series: '鸣潮',
  image,
  cardSize: '145% auto',
  hasReview: true,
  tags: [
    { text: '衍射', cls: 'tag-amber' },
    { text: '佩枪', cls: 'tag-cyan' },
    { text: '调香师', cls: 'tag-pink' },
    { text: '治疗', cls: 'tag-green' }
  ]
}
