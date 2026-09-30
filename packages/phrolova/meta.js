/**
 * phrolova 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
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
  id: 'phrolova',
  name: '弗洛洛',
  nameSub: 'Phrolova',
  series: '鸣潮',
  image,
  cardBg: '#fff',
  cardSize: '150% 150%',
  tags: [
    { text: '湮灭', cls: 'tag-red' },
    { text: '音感仪', cls: 'tag-purple' },
    { text: '指挥家', cls: 'tag-red' },
    { text: '残星会', cls: 'tag-dark' },
    { text: '五星角色', cls: 'tag-gold' }
  ]
}
