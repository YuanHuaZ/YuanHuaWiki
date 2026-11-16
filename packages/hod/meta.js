/**
 * hod 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

export default {
  id: 'hod',
  name: 'Hod',
  nameSub: 'Hod',
  series: '脑叶公司',
  image: null,
  tags: [
    { text: '训练层', cls: 'tag-amber' },
    { text: '温柔', cls: 'tag-green' },
    { text: '自我怀疑', cls: 'tag-purple' },
    { text: '笨拙', cls: 'tag-pink' }
  ]
}
