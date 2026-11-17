/**
 * cecilia 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'cecilia',
  name: '塞西莉亚',
  nameSub: 'Cecilia',
  series: '白圣女与黑牧师',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '圣女', cls: 'tag-green' },
    { text: '天然呆', cls: 'tag-pink' },
    { text: '温柔', cls: 'tag-cyan' }
  ]
}
