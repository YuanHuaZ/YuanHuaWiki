/**
 * asumi 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'asumi',
  name: '锦亚澄',
  nameSub: 'Nishiki Asumi',
  series: '常轨脱离',
  image,
  cardSize: '145% auto',
  tags: [
    { text: 'VTuber', cls: 'tag-pink' },
    { text: '学妹', cls: 'tag-cyan' },
    { text: '小天使', cls: 'tag-green' },
    { text: '歌手', cls: 'tag-purple' }
  ]
}
