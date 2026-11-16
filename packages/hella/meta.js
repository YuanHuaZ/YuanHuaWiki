/**
 * hella 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'hella',
  name: '海拉',
  nameSub: 'Hella',
  series: '无期迷途',
  image,
  tags: [
    { text: '自愈', cls: 'tag-green' },
    { text: '嘴臭', cls: 'tag-dark' },
    { text: '傲娇', cls: 'tag-pink' },
    { text: '辛迪加', cls: 'tag-purple' }
  ]
}
