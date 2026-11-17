/**
 * prickett 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'prickett',
  name: '普利凯特',
  nameSub: 'Prickett',
  series: 'Black Souls2',
  image,
  cardSize: 'cover',
  tags: [
    { text: '偶像', cls: 'tag-pink' },
    { text: '红之女王', cls: 'tag-red' },
    { text: '姐姐系', cls: 'tag-purple' },
    { text: '腹黑', cls: 'tag-dark' }
  ]
}
