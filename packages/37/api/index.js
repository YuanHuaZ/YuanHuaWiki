/**
 * 37 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '37',
  title: '神秘学家',
  info: [
    { icon: '🏷️', label: '名字', value: '37（Thirty-seven）', iconClass: 'purple' },
    { icon: '🏝️', label: '出身', value: '阿派朗岛', iconClass: 'pink' },
    { icon: '🧊', label: '意象', value: '浮冰 / 海浪', iconClass: 'cyan' },
    { icon: '📐', label: '偏好', value: '数学与秩序', iconClass: 'purple' },
    { icon: '🌊', label: '身份', value: '神秘学家', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '重返未来1999', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🧊 天真', '📐 痴迷数字', '🌊 冷静得不像孩子', '❓ 追问意义'],
      content: [
        '37 说话直白、反应慢半拍，<span class="highlight">像个刚到人间的孩子</span>。但她的直觉准得可怕。',
        '她把世界当成一道题：数字、秩序、规律。<span class="highlight-pink">在她眼里，一切都能被算出来</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 浅色短发', '👁️ 澄澈的眼', '🧊 冰与水元素', '👗 素色长衣'],
      content: [
        '浅色短发、澄澈的眼睛，穿素色长衣，整个人<span class="highlight">像一块没化的浮冰</span>。',
        '她身边常有水与冰的痕迹。<span class="highlight-pink">安静的时候，连海都会停下来听</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏝️ 阿派朗岛', '🔢 数字「37」', '🌊 浮冰之上', '🔮 神秘学'],
      content: [
        '她来自阿派朗岛，<span class="highlight">名字本身就是一个数字</span>。',
        '她与浮冰、海浪共生，能听见水的声音。<span class="highlight-pink">她的「神秘学」不是咒语，是理解世界的方式</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🌊 漂流的岛', '🤝 与人相遇', '📐 解题', '🧊 她选择的答案'],
      content: [
        '故事从她离开熟悉的岛开始。<span class="highlight">外界的一切对她都是新题目</span>。',
        '她一次次追问「为什么」，也一次次给出别人想不到的答案。<span class="highlight-pink">到最后，她要解的是「自己」这道题</span>。'
      ],
      quote: '这个世界的规律，是可以被数出来的。',
      quoteAuthor: '—— 37'
    }
  ],
  abilities: [
    { icon: '🧊', name: '冰与水', grade: 'EX', desc: '操纵浮冰与水流，<span class="highlight">攻守都极稳</span>。' },
    { icon: '📐', name: '数字直觉', grade: 'S', desc: '把混乱算出秩序，<span class="highlight-pink">战场上的最优解</span>。' },
    { icon: '🌊', name: '海的共鸣', grade: 'A', desc: '与水相关的感知，<span class="highlight">能听见别人听不见的声音</span>。' }
  ],
  relationships: [
    { icon: '🧑‍🔬', name: '拉普拉斯众人', type: '同伴', desc: '把她带进人类世界的一群人，<span class="highlight">也是她最早的「题目」</span>。', cls: 'rel-friend' },
    { icon: '🌊', name: '阿派朗岛', type: '故乡', desc: '她的来处，<span class="highlight-pink">也是她不断回望的地方</span>。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🧊',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #091e2a 25%, #0c2a3b 50%, #0f3348 75%, #0a0a14 100%)",
    "glow1": "#8fc7e8",
    "glow2": "#8f93e8",
    "particleBg": "rgba(143,199,232,0.3)",
    "gridImage": "linear-gradient(rgba(143,199,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(143,199,232,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(143,199,232,0.2), rgba(143,147,232,0.1))",
    "badgeBorder": "1px solid rgba(143,199,232,0.4)",
    "badgeColor": "#c1dff0",
    "badgeShadow": "0 2px 12px rgba(143,199,232,0.15)",
    "dotBg": "#8fc7e8",
    "nameGrad": "linear-gradient(135deg, #e2f0f8 0%, #79bbe2 35%, #8fc7e8 65%, #c1dff0 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#9ccce8",
    "titleBadgeBg": "linear-gradient(135deg, rgba(143,199,232,0.2) 0%, rgba(143,147,232,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(143,199,232,0.4)",
    "titleBadgeColor": "#c1dff0",
    "tagBg": "linear-gradient(135deg, rgba(143,199,232,0.12), rgba(143,199,232,0.06))",
    "tagBorder": "1px solid rgba(143,199,232,0.25)",
    "tagColor": "#9ccce8",
    "ringGrad": "linear-gradient(135deg, #8fc7e8, #8f93e8, #c1dff0, #8fc7e8) border-box",
    "avatarShadow": "0 0 60px rgba(143,199,232,0.4), 0 0 120px rgba(143,199,232,0.15)",
    "placeholderBg": "linear-gradient(180deg, #0e3044 0%, #081b26 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(143,199,232,0.5))",
    "videoPlayBg": "rgba(143,199,232,0.85)",
    "videoFallback": "linear-gradient(135deg, #0a2433, #10364c)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '重返未来：1999',
        titleJp: 'Reverse: 1999',
        meta: [
          { icon: "🏢", label: "开发：", value: "深蓝互动" },
          { icon: "📅", label: "上线：", value: "2023年10月" },
          { icon: "🕹️", label: "类型：", value: "策略卡牌" },
          { icon: "💻", label: "平台：", value: "移动 / PC" }
        ],
        desc: '时间倒流的 1999 年，神秘学家与普通人共存。<span class="highlight">37 是其中最不像人间的那一个</span>。',
        tags: [
          { cls: "dark", text: "神秘学" },
          { cls: "dark", text: "策略" },
          { cls: "live", text: "国服" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '她的台词很少，但每一句都像从另一个维度递过来的。美术和设定咬得极紧——冰、水、数字、天真，全部长在同一个人身上。'
}
