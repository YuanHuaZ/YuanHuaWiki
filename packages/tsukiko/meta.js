/**
 * tsukiko 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'tsukiko',
  name: '筒隐月子',
  nameSub: 'Tsutsukakushi Tsukiko',
  series: '变态王子与不笑猫',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '无表情', cls: 'tag-purple' },
    { text: '毒舌', cls: 'tag-red' },
    { text: '猫系', cls: 'tag-amber' },
    { text: '妹妹', cls: 'tag-pink' }
  ]
}
