/**
 * kaoruko 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'kaoruko',
  name: '和栗薰子',
  nameSub: 'Waguri Kaoruko',
  series: '薰香花朵凛然绽放',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '辣妹', cls: 'tag-pink' },
    { text: '直率', cls: 'tag-cyan' },
    { text: '吃货', cls: 'tag-amber' },
    { text: '温柔', cls: 'tag-green' }
  ]
}
