/**
 * faust 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'faust',
  name: '浮士德',
  nameSub: 'Faust',
  series: '边狱巴士',
  image,
  tags: [
    { text: '学者', cls: 'tag-purple' },
    { text: '冷静', cls: 'tag-blue' },
    { text: '求知', cls: 'tag-cyan' },
    { text: '罪人', cls: 'tag-dark' }
  ]
}
