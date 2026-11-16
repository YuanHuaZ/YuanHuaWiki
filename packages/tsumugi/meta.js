/**
 * tsumugi 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'tsumugi',
  name: '紬文德斯',
  nameSub: 'Tsumugi Wenders',
  series: '夏日口袋',
  image,
  tags: [
    { text: '巫女', cls: 'tag-cyan' },
    { text: '异国血统', cls: 'tag-amber' },
    { text: '温柔', cls: 'tag-green' },
    { text: '夏日', cls: 'tag-pink' }
  ]
}
