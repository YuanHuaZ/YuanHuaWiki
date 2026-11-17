/**
 * eyjafjalla 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'eyjafjalla',
  name: '艾雅法拉',
  nameSub: 'Eyjafjalla',
  series: '明日方舟',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '术师', cls: 'tag-red' },
    { text: '火山', cls: 'tag-orange' },
    { text: '学者', cls: 'tag-purple' },
    { text: '羊', cls: 'tag-amber' }
  ]
}
