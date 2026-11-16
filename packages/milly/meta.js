/**
 * milly 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

export default {
  id: 'milly',
  name: '蜜莉',
  nameSub: 'Milly',
  series: '无期迷途',
  image: null,
  tags: [
    { text: '舞者', cls: 'tag-pink' },
    { text: '极乐蜜语', cls: 'tag-purple' },
    { text: '甜心', cls: 'tag-amber' },
    { text: '疯狂', cls: 'tag-red' }
  ]
}
