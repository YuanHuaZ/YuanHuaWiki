/**
 * kotoko 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'kotoko',
  name: '岩永琴子',
  nameSub: 'Iwanaga Kotoko',
  series: '虚构推理',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '侦探', cls: 'tag-purple' },
    { text: '妖怪', cls: 'tag-dark' },
    { text: '毒舌', cls: 'tag-red' },
    { text: '大小姐', cls: 'tag-pink' }
  ]
}
