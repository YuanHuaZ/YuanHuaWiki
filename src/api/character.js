/**
 * 角色 API — 当前使用静态数据，后续可接入后端
 */

import nanamiImg from '@packages/nanami/images/1.jpg'
import remImg from '@packages/rem/images/1.jpg'
import kanaImg from '@packages/kana/images/1.jpg'
import phrolovaImg from '@packages/phrolova/images/1.jpg'
import hutaoImg from '@packages/hutao/images/1.jpg'
import elainaImg from '@packages/elaina/images/1.jpg'
import tomoriImg from '@packages/tomori/images/1.jpg'
import komariImg from '@packages/komari/images/1.jpg'

const tagClasses = ['tag-purple', 'tag-pink', 'tag-cyan', 'tag-green', 'tag-orange', 'tag-blue', 'tag-amber']

const characters = [
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
    id: 'phrolova',
    name: '弗洛洛',
    nameSub: 'Phrolova',
    series: '鸣潮',
    image: phrolovaImg,
    hasDetail: true,
    tags: [
      { text: '湮灭', cls: 'tag-red' },
      { text: '音感仪', cls: 'tag-purple' },
      { text: '指挥家', cls: 'tag-dark' },
      { text: '残星会', cls: 'tag-dark' }
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
      { text: '青梅竹马', cls: 'tag-blue' },
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
  }
]

// 占位角色（作品1 角色1 ~ 作品46 角色46）
for (let i = 1; i <= 46; i++) {
  characters.push({
    id: `char-${i}`,
    name: `角色 ${i}`,
    nameSub: `Character ${i}`,
    series: `作品${i}`,
    image: null,
    hasDetail: false,
    tags: [{ text: '待更新', cls: tagClasses[i % tagClasses.length] }]
  })
}

export function getCharacterList() {
  return characters
}


export function getCharacterById(id) {
  return characters.find(c => c.id === id) || null
}
