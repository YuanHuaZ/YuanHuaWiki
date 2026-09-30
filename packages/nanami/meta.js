/**
 * nanami 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
 * 改这里即可同时影响卡片与详情页，无需再去 src/api/character.js 同步
 *
 * 必填：id / name / nameSub / series / image / tags
 * 可选：
 *   seriesShort  卡片用短作品名（series 是较长外文原名时填，缺省回落 series）
 *   cardBg       卡片立绘底色（立绘为白底时填 '#fff'，缺省透明）
 *   cardSize     卡片立绘 background-size（半身立绘填 '140% auto'，缺省 cover）
 */

import image from './images/1.jpg'

export default {
  id: 'nanami',
  name: '七海千秋',
  nameSub: 'Nanami Chiaki',
  series: '超级弹丸论破2',
  image,
  tags: [
    { text: '天然呆', cls: 'tag-purple' },
    { text: '温柔', cls: 'tag-pink' },
    { text: '游戏宅', cls: 'tag-cyan' },
    { text: '主角', cls: 'tag-orange' }
  ]
}
