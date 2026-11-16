/**
 * tracy 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

export default {
  id: 'tracy',
  name: '特雷西',
  nameSub: 'Tracy Reznik',
  series: '第五人格',
  image: null,
  tags: [
    { text: '机械师', cls: 'tag-blue' },
    { text: '傀儡', cls: 'tag-amber' },
    { text: '内向', cls: 'tag-purple' },
    { text: '坚强', cls: 'tag-cyan' }
  ]
}
