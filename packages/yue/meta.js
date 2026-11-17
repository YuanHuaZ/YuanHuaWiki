/**
 * yue 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'yue',
  name: '月',
  nameSub: 'Yue',
  series: '平凡职业造就世界最强',
  image,
  cardSize: '200% auto',
  tags: [
    { text: '吸血鬼', cls: 'tag-red' },
    { text: '忠诚', cls: 'tag-pink' },
    { text: '软萌', cls: 'tag-cyan' },
    { text: '银发', cls: 'tag-amber' }
  ]
}
