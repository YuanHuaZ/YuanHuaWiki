/**
 * luna 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'luna',
  name: '月下',
  nameSub: 'Luna',
  series: '崩坏3rd',
  image,
  cardSize: 'cover',
  tags: [
    { text: '吸血鬼', cls: 'tag-red' },
    { text: '德丽莎', cls: 'tag-blue' },
    { text: '萝莉', cls: 'tag-pink' },
    { text: '贪吃', cls: 'tag-amber' }
  ]
}
