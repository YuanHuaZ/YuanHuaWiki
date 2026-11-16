/**
 * dusk 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

export default {
  id: 'dusk',
  name: '夕',
  nameSub: 'Dusk',
  series: '明日方舟',
  image: null,
  tags: [
    { text: '画家', cls: 'tag-purple' },
    { text: '墨', cls: 'tag-dark' },
    { text: '冰美人', cls: 'tag-blue' },
    { text: '宅', cls: 'tag-cyan' }
  ]
}
