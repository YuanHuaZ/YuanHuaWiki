/**
 * sagiri 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
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
  id: 'sagiri',
  name: '和泉纱雾',
  nameSub: 'Izumi Sagiri',
  series: 'エロマンガ先生',
  seriesShort: '埃罗芒阿老师',
  image,
  cardSize: '140% auto',
  tags: [
    { text: '插画师', cls: 'tag-purple' },
    { text: '家里蹲', cls: 'tag-blue' },
    { text: '傲娇', cls: 'tag-pink' }
  ]
}
