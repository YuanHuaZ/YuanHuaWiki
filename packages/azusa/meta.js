/**
 * azusa 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'azusa',
  name: '布良梓',
  nameSub: 'Mera Azusa',
  series: 'Dracu-Riot!',
  image,
  cardBg: '#fff',
  cardSize: '145% auto',
  tags: [
    { text: '宿舍长', cls: 'tag-amber' },
    { text: '狙击', cls: 'tag-blue' },
    { text: '萝莉', cls: 'tag-pink' },
    { text: '人类', cls: 'tag-cyan' }
  ]
}
