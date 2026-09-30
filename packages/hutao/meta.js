/**
 * hutao 角色身份信息 —— 首页卡片与详情页共用的唯一数据源
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
  id: 'hutao',
  name: '胡桃',
  nameSub: 'Hu Tao',
  series: '原神',
  image,
  tags: [
    { text: '火元素', cls: 'tag-red' },
    { text: '长柄武器', cls: 'tag-purple' },
    { text: '往生堂堂主', cls: 'tag-dark' },
    { text: '璃月', cls: 'tag-orange' },
    { text: '五星角色', cls: 'tag-gold' }
  ]
}
