/**
 * 角色 API — 当前使用静态数据，后续可接入后端
 */

import meguruImg from '@packages/meguru/images/1.jpg'
import phrolovaImg from '@packages/phrolova/images/1.jpg'
import nanamiImg from '@packages/nanami/images/1.jpg'
import soyoImg from '@packages/soyo/images/1.jpg'
import sagiriImg from '@packages/sagiri/images/1.jpg'
import remImg from '@packages/rem/images/1.jpg'
import kanaImg from '@packages/kana/images/1.jpg'
import hutaoImg from '@packages/hutao/images/1.jpg'
import elainaImg from '@packages/elaina/images/1.jpg'
import tomoriImg from '@packages/tomori/images/1.jpg'
import komariImg from '@packages/komari/images/1.jpg'
import yoshinoImg from '@packages/yoshino/images/1.jpg'

const characters = [
  {
    id: 'meguru',
    name: '因幡巡',
    nameSub: 'Inaba Meguru',
    series: '魔女的夜宴',
    image: meguruImg,
    hasDetail: true,
    tags: [
      { text: 'Ciallo～', cls: 'tag-orange' },
      { text: '游戏宅', cls: 'tag-purple' },
      { text: '小恶魔', cls: 'tag-pink' },
      { text: '治愈', cls: 'tag-cyan' }
    ]
  },
  {
    id: 'phrolova',
    name: '弗洛洛',
    nameSub: 'Phrolova',
    series: '鸣潮',
    image: phrolovaImg,
    hasDetail: true,
    tags: [
      { text: '湮灭', cls: 'tag-red' },
      { text: '音感仪', cls: 'tag-purple' },
      { text: '指挥家', cls: 'tag-red' },
      { text: '残星会', cls: 'tag-dark' }
    ]
  },
  {
    id: 'nanami',
    name: '七海千秋',
    nameSub: 'Nanami Chiaki',
    series: '超级弹丸论破2',
    image: nanamiImg,
    hasDetail: true,
    tags: [
      { text: '天然呆', cls: 'tag-purple' },
      { text: '温柔', cls: 'tag-pink' },
      { text: '游戏宅', cls: 'tag-cyan' },
      { text: '女主角', cls: 'tag-green' }
    ]
  },
  {
    id: 'soyo',
    name: '長崎素世',
    nameSub: 'Nagasaki Soyo',
    series: 'BanG Dream! It\'s MyGO!!!!!',
    image: soyoImg,
    hasDetail: true,
    tags: [
      { text: '温柔', cls: 'tag-green' },
      { text: '贝斯手', cls: 'tag-cyan' },
      { text: '表面天使', cls: 'tag-pink' },
      { text: '内心沉重', cls: 'tag-purple' }
    ]
  },
  {
    id: 'rem',
    name: '雷姆',
    nameSub: 'Rem',
    series: 'Re:从零开始的异世界生活',
    image: remImg,
    hasDetail: true,
    tags: [
      { text: '鬼族', cls: 'tag-blue' },
      { text: '女仆', cls: 'tag-pink' },
      { text: '温柔', cls: 'tag-green' },
      { text: '女主角', cls: 'tag-cyan' }
    ]
  },
  {
    id: 'hutao',
    name: '胡桃',
    nameSub: 'Hu Tao',
    series: '原神',
    image: hutaoImg,
    hasDetail: true,
    tags: [
      { text: '火元素', cls: 'tag-red' },
      { text: '长柄武器', cls: 'tag-purple' },
      { text: '往生堂堂主', cls: 'tag-dark' },
      { text: '璃月', cls: 'tag-orange' }
    ]
  },
  {
    id: 'elaina',
    name: '伊蕾娜',
    nameSub: 'Elaina',
    series: '魔女之旅',
    image: elainaImg,
    hasDetail: true,
    tags: [
      { text: '魔法使', cls: 'tag-purple' },
      { text: '旅人', cls: 'tag-cyan' },
      { text: '自恋', cls: 'tag-pink' },
      { text: '女主角', cls: 'tag-green' }
    ]
  },
  {
    id: 'tomori',
    name: '友利奈绪',
    nameSub: 'Tomori Nao',
    series: 'Charlotte',
    image: tomoriImg,
    hasDetail: true,
    tags: [
      { text: '超能力者', cls: 'tag-purple' },
      { text: '学生会会长', cls: 'tag-blue' },
      { text: '傲娇', cls: 'tag-pink' },
      { text: '女主角', cls: 'tag-green' }
    ]
  },
  {
    id: 'komari',
    name: '小鞠知花',
    nameSub: 'Komari Chika',
    series: '败犬女主太多了',
    image: komariImg,
    hasDetail: true,
    tags: [
      { text: '社恐', cls: 'tag-purple' },
      { text: '文艺部', cls: 'tag-blue' },
      { text: '努力家', cls: 'tag-amber' },
      { text: '败犬女主', cls: 'tag-cyan' }
    ]
  },
  {
    id: 'kana',
    name: '有马加奈',
    nameSub: 'Arima Kana',
    series: '我推的孩子',
    image: kanaImg,
    hasDetail: true,
    tags: [
      { text: '傲娇', cls: 'tag-pink' },
      { text: '天才', cls: 'tag-orange' },
      { text: '童星', cls: 'tag-amber' },
      { text: '女主角', cls: 'tag-cyan' }
    ]
  },
  {
    id: 'sagiri',
    name: '和泉纱雾',
    nameSub: 'Izumi Sagiri',
    series: '埃罗芒阿老师',
    image: sagiriImg,
    hasDetail: true,
    tags: [
      { text: '插画师', cls: 'tag-purple' },
      { text: '家里蹲', cls: 'tag-blue' },
      { text: '傲娇', cls: 'tag-pink' },
      { text: '女主角', cls: 'tag-cyan' }
    ]
  },
  {
    id: 'yoshino',
    name: '氷芽川四糸乃',
    nameSub: 'Himekawa Yoshino',
    series: '约会大作战',
    image: yoshinoImg,
    hasDetail: true,
    tags: [
      { text: '精灵', cls: 'tag-blue' },
      { text: '冰与水', cls: 'tag-cyan' },
      { text: '胆小', cls: 'tag-purple' },
      { text: '女主角', cls: 'tag-pink' }
    ]
  }
]

export function getCharacterList() {
  return characters
}


export function getCharacterById(id) {
  return characters.find(c => c.id === id) || null
}

/**
 * 角色详情数据懒加载表
 * 每个角色的完整数据（资料 / 作品 / 画廊 / 视频 / 主题色）位于 packages/<id>/api/index.js
 * 新增角色时：创建 packages/<id>/ 数据包，并在下方登记一行
 */
const loaders = {
  meguru: () => import('@packages/meguru/api/index.js'),
  phrolova: () => import('@packages/phrolova/api/index.js'),
  nanami: () => import('@packages/nanami/api/index.js'),
  soyo: () => import('@packages/soyo/api/index.js'),
  sagiri: () => import('@packages/sagiri/api/index.js'),
  rem: () => import('@packages/rem/api/index.js'),
  kana: () => import('@packages/kana/api/index.js'),
  hutao: () => import('@packages/hutao/api/index.js'),
  elaina: () => import('@packages/elaina/api/index.js'),
  tomori: () => import('@packages/tomori/api/index.js'),
  komari: () => import('@packages/komari/api/index.js'),
  yoshino: () => import('@packages/yoshino/api/index.js')
}

export function hasCharacterData(id) {
  return Object.prototype.hasOwnProperty.call(loaders, id)
}

/** 加载某个角色的完整详情数据；不存在或失败时返回 null */
export async function loadCharacter(id) {
  const loader = loaders[id]
  if (!loader) return null
  try {
    const mod = await loader()
    return mod.default || mod
  } catch (err) {
    console.error(`[YuanHuaWiki] 加载角色数据失败: ${id}`, err)
    return null
  }
}
