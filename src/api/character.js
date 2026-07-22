/**
 * 角色 API — 当前使用静态数据，后续可接入后端
 */

import nanamiImg from '@packages/nanami/images/nanami.jpg'
import remImg from '@packages/rem/images/rem1.jpg'

const tagClasses = ['tag-purple', 'tag-pink', 'tag-cyan', 'tag-green', 'tag-orange', 'tag-blue', 'tag-amber']

const characters = [
  {
    id: 'nanami',
    name: '七海千秋',
    nameSub: 'Nanami Chiaki',
    series: '弹丸论破2',
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
    id: 'kana',
    name: '有马加奈',
    nameSub: 'Arima Kana',
    series: '我推的孩子',
    image: null,
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
