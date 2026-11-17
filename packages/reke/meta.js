/**
 * reke 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'reke',
  name: '蕾克',
  nameSub: 'Reke',
  series: 'Black Souls',
  image,
  cardSize: 'cover',
  tags: [
    { text: '小红帽', cls: 'tag-red' },
    { text: '无口', cls: 'tag-dark' },
    { text: '剑士', cls: 'tag-purple' },
    { text: '短命', cls: 'tag-blue' }
  ]
}
