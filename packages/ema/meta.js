/**
 * ema 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'ema',
  name: '樱羽艾玛',
  nameSub: 'Sakuraba Ema',
  series: '魔法少女的魔女审判',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '怕生', cls: 'tag-cyan' },
    { text: '推理', cls: 'tag-purple' },
    { text: '魔女', cls: 'tag-dark' }
  ]
}
