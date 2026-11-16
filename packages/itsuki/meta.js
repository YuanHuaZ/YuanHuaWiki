/**
 * itsuki 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'itsuki',
  name: '中野五月',
  nameSub: 'Nakano Itsuki',
  series: '五等分的花嫁',
  image,
  tags: [
    { text: '吃货', cls: 'tag-amber' },
    { text: '努力家', cls: 'tag-orange' },
    { text: '五胞胎', cls: 'tag-pink' },
    { text: '认真', cls: 'tag-blue' }
  ]
}
