/**
 * 37 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: '37',
  name: '37',
  nameSub: '37',
  series: '重返未来1999',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '神秘学家', cls: 'tag-purple' },
    { text: '浮冰', cls: 'tag-blue' },
    { text: '数学', cls: 'tag-amber' },
    { text: '天真', cls: 'tag-cyan' }
  ]
}
