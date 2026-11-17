/**
 * ying 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'ying',
  name: '影',
  nameSub: 'Umbrosa',
  series: '王者荣耀',
  image,
  cardSize: 'cover',
  tags: [
    { text: '战士', cls: 'tag-red' },
    { text: '黯羽东君', cls: 'tag-dark' },
    { text: '复仇', cls: 'tag-purple' },
    { text: '话痨', cls: 'tag-amber' },
    { text: '白发', cls: 'tag-cyan' }
  ]
}
