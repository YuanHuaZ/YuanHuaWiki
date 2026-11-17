/**
 * anju 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'anju',
  name: '隐杏珠',
  nameSub: 'Nabari Anju',
  series: 'Limelight Lemonade Jam',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '吉他手', cls: 'tag-purple' },
    { text: '地雷系', cls: 'tag-pink' },
    { text: '傲娇', cls: 'tag-red' },
    { text: '优等生', cls: 'tag-blue' }
  ]
}
