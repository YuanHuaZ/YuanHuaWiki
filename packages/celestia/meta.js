/**
 * celestia 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

import image from './images/1.jpg'

export default {
  id: 'celestia',
  name: '塞蕾丝缇雅',
  nameSub: 'Celestia Ludenberg',
  series: '弹丸论破',
  image,
  cardSize: '145% auto',
  tags: [
    { text: '赌徒', cls: 'tag-red' },
    { text: '哥特萝莉', cls: 'tag-purple' },
    { text: '谎言', cls: 'tag-dark' },
    { text: '红茶', cls: 'tag-amber' }
  ]
}
