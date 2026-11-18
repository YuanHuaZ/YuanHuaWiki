/**
 * coquelic 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'coquelic',
  name: '可可莉克',
  nameSub: 'Coquelic',
  series: '无期迷途',
  image,
  cardSize: '145% auto',
  hasReview: true,
  tags: [
    { text: '业师', cls: 'tag-red' },
    { text: '红花', cls: 'tag-pink' },
    { text: '优雅', cls: 'tag-amber' }
  ]
}
