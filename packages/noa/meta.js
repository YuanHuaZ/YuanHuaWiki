/**
 * noa 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'noa',
  name: '白雪乃爱',
  nameSub: 'Shirayuki Noa',
  series: '天使嚣嚣',
  image,
  tags: [
    { text: '天使', cls: 'tag-cyan' },
    { text: '吃货', cls: 'tag-amber' },
    { text: '迟钝', cls: 'tag-pink' },
    { text: '金发', cls: 'tag-orange' }
  ]
}
