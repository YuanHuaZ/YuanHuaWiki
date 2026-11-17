/**
 * linyuxia 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'linyuxia',
  name: '林雨霞',
  nameSub: 'Lin Yuxia',
  series: '明日方舟',
  image,
  cardBg: '#fff',
  cardSize: '200% auto',
  tags: [
    { text: '龙门', cls: 'tag-amber' },
    { text: '富婆', cls: 'tag-orange' },
    { text: '情报通', cls: 'tag-purple' },
    { text: '毒舌', cls: 'tag-red' }
  ]
}
