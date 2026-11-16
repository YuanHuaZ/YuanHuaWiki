/**
 * miyu 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

export default {
  id: 'miyu',
  name: '佐原海夕',
  nameSub: 'Miyu Sahara',
  series: 'P5X',
  image: null,
  tags: [
    { text: '木偶师', cls: 'tag-cyan' },
    { text: '大小姐', cls: 'tag-amber' },
    { text: '兄控', cls: 'tag-pink' },
    { text: '离家出走', cls: 'tag-purple' }
  ]
}
