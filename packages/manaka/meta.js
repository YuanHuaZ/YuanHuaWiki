/**
 * manaka 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'manaka',
  name: '长尾爱歌',
  nameSub: 'Nagao Manaka',
  series: 'P5X',
  image,
  tags: [
    { text: '歌手', cls: 'tag-cyan' },
    { text: '轮椅', cls: 'tag-blue' },
    { text: '沉重', cls: 'tag-purple' },
    { text: '坚强', cls: 'tag-amber' }
  ]
}
