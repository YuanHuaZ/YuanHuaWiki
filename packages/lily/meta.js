/**
 * lily 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 */

export default {
  id: 'lily',
  name: '天音莉莉',
  nameSub: 'Amane Riri',
  series: '愚蠢天使与恶魔共舞',
  image: null,
  tags: [
    { text: '天使', cls: 'tag-cyan' },
    { text: '腹黑', cls: 'tag-purple' },
    { text: '颜艺', cls: 'tag-amber' },
    { text: '傲娇', cls: 'tag-pink' }
  ]
}
