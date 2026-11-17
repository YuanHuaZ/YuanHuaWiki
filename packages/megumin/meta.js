/**
 * megumin 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'megumin',
  name: '惠惠',
  nameSub: 'Megumin',
  series: '为美好的世界献上祝福！',
  image,
  cardSize: '145% auto',
  cardPos: 'center 12%',
  cardBg: '#fff',
  tags: [
    { text: '爆裂魔法', cls: 'tag-red' },
    { text: '中二', cls: 'tag-purple' },
    { text: '红魔族', cls: 'tag-orange' }
  ]
}
