/**
 * murasame 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'murasame',
  name: '丛雨',
  nameSub: 'Murasame',
  series: '千恋万花',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '神刀', cls: 'tag-purple' },
    { text: '傲娇', cls: 'tag-red' },
    { text: '和风', cls: 'tag-amber' },
    { text: '怕鬼', cls: 'tag-dark' }
  ]
}
