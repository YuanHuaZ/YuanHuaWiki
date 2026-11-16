/**
 * celestia 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '塞蕾丝缇雅',
  title: '超高校级的赌徒',
  info: [
    { icon: '🎓', label: '才能', value: '超高校级的赌徒', iconClass: 'purple' },
    { icon: '🎤', label: '声优', value: '椎名碧流', iconClass: 'pink' },
    { icon: '👑', label: '自称', value: '欧洲贵族出身', iconClass: 'cyan' },
    { icon: '🎲', label: '喜好', value: '赌博 / 红茶', iconClass: 'purple' },
    { icon: '🖤', label: '本质', value: '谎言与伪装', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '弹丸论破', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🎲 冷静的赌徒', '🫖 红茶与礼仪', '🖤 满口谎言', '👑 贵族做派'],
      content: [
        '她永远从容：喝茶、微笑、用最优雅的语气说出最狠的判断。<span class="highlight">赌桌上她从不会慌</span>。',
        '但她的每一句话都要打折——包括名字、出身、过去。<span class="highlight-pink">说谎对她来说不是手段，是呼吸</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['🖤 哥特萝莉装', '💇 黑色双马尾', '👁️ 红色眼眸', '🎀 蕾丝与缎带'],
      content: [
        '黑色哥特萝莉裙、双马尾、红瞳，一身蕾丝与缎带。<span class="highlight">在绝望学园里像来参加茶会的</span>。',
        '她永远保持坐姿挺拔、手指并拢，连喝红茶的动作都<span class="highlight-pink">精确到角度</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🎲 赌场的不败传说', '👑 自称贵族', '🖤 真实出身成谜', '🏫 希望之峰学园'],
      content: [
        '作为「超高校级的赌徒」，她在赌桌上从未输过——<span class="highlight">因为规则、对手、甚至运气都被她算在内</span>。',
        '她自称欧洲贵族后裔，但没有任何人能证实。<span class="highlight-pink">连「塞蕾丝缇雅」这个名字本身都可能是假的</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏫 绝望学园', '🩸 第一起事件', '🎲 赌上一切的局', '👑 她想要的城堡'],
      content: [
        '在自相残杀的学园里，她比谁都冷静，也比谁都危险。<span class="highlight">她把整场杀戮当成一局牌</span>。',
        '她真正的愿望不是活下来，是「过上梦想中的生活」。<span class="highlight-pink">为此她可以押上所有人的命</span>。'
      ],
      quote: '人生就是一场赌博，而我从不输。',
      quoteAuthor: '—— 塞蕾丝缇雅'
    }
  ],
  abilities: [
    { icon: '🎲', name: '赌徒的直觉', grade: 'EX', desc: '读局、算牌、操控概率，<span class="highlight">在赌桌上近乎无敌</span>。' },
    { icon: '🖤', name: '谎言', grade: 'S', desc: '把人骗到底的说话方式，<span class="highlight-pink">连自己都能骗过去</span>。' },
    { icon: '👑', name: '临场', grade: 'A', desc: '任何局面都能保持体面，<span class="highlight">慌乱从不外露</span>。' }
  ],
  relationships: [
    { icon: '🧑‍🎓', name: '苗木诚', type: '对手', desc: '她眼里的变量，<span class="highlight">最后却成了推翻牌局的人</span>。', cls: 'rel-other' },
    { icon: '🕵️', name: '雾切响子', type: '对手', desc: '同为冷静型，<span class="highlight-pink">互相试探的两个人</span>。', cls: 'rel-other' }
  ],
  placeholderEmoji: '🎲',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2b2208 25%, #3c300c 50%, #493b0e 75%, #0a0a14 100%)",
    "glow1": "#c9a227",
    "glow2": "#92c927",
    "particleBg": "rgba(201,162,39,0.3)",
    "gridImage": "linear-gradient(rgba(201,162,39,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(146,201,39,0.1))",
    "badgeBorder": "1px solid rgba(201,162,39,0.4)",
    "badgeColor": "#f1e5c1",
    "badgeShadow": "0 2px 12px rgba(201,162,39,0.15)",
    "dotBg": "#c9a227",
    "nameGrad": "linear-gradient(135deg, #f8f3e2 0%, #e3c978 35%, #c9a227 65%, #f1e5c1 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#e9d69b",
    "titleBadgeBg": "linear-gradient(135deg, rgba(201,162,39,0.2) 0%, rgba(146,201,39,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(201,162,39,0.4)",
    "titleBadgeColor": "#f1e5c1",
    "tagBg": "linear-gradient(135deg, rgba(201,162,39,0.12), rgba(201,162,39,0.06))",
    "tagBorder": "1px solid rgba(201,162,39,0.25)",
    "tagColor": "#e9d69b",
    "ringGrad": "linear-gradient(135deg, #c9a227, #92c927, #f1e5c1, #c9a227) border-box",
    "avatarShadow": "0 0 60px rgba(201,162,39,0.4), 0 0 120px rgba(201,162,39,0.15)",
    "placeholderBg": "linear-gradient(180deg, #44370d 0%, #261f07 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(201,162,39,0.5))",
    "videoPlayBg": "rgba(201,162,39,0.85)",
    "videoFallback": "linear-gradient(135deg, #33290a, #4d3e0f)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '弹丸论破',
        titleJp: 'ダンガンロンパ',
        meta: [
          { icon: "🏢", label: "制作：", value: "Lerche" },
          { icon: "📅", label: "播出：", value: "2013年7月" },
          { icon: "📺", label: "集数：", value: "全13话" },
          { icon: "🎤", label: "CV：", value: "椎名碧流" }
        ],
        desc: '被关进学园的少年少女，只能靠互相残杀离开。学级裁判上，<span class="highlight">她的每一句话都是下一张牌</span>。',
        tags: [
          { cls: "dark", text: "悬疑" },
          { cls: "dark", text: "推理" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '弹丸里最像「反派」也最像「棋手」的角色。她不靠暴力，靠的是把所有人都当成筹码。这种人写好了非常可怕，写砸了很蠢——她属于前者。'
}
