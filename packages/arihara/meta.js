/**
 * arihara 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'arihara',
  name: '在原七海',
  nameSub: 'Arihara Nanami',
  series: 'RIDDLE JOKER',
  image,
  cardBg: '#fff',
  cardSize: '145% auto',
  tags: [
    { text: '妹妹', cls: 'tag-pink' },
    { text: '治愈', cls: 'tag-green' },
    { text: '黑客', cls: 'tag-purple' },
    { text: '中二', cls: 'tag-cyan' }
  ]
}
