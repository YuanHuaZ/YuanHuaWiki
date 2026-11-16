/**
 * noa 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '白雪乃爱',
  title: '守护魔王的天使',
  info: [
    { icon: '🎤', label: '声优', value: '濑户乃麻里惠', iconClass: 'purple' },
    { icon: '💇', label: '发色', value: '金色', iconClass: 'pink' },
    { icon: '👁️', label: '瞳色', value: '蓝色', iconClass: 'cyan' },
    { icon: '😇', label: '身份', value: '天使 / 守护者', iconClass: 'purple' },
    { icon: '🍟', label: '爱好', value: '漫画 / 动画 / 美食', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '天使☆嚣嚣 RE-BOOT!', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😇 圣洁又好奇', '🍟 地上文化中毒', '🙈 对下流事反应极大', '🤝 僚机中的战斗机'],
      content: [
        '乃爱是带着使命下凡的天使，<span class="highlight">工作认真、待人真诚</span>。但她几乎没接触过人间，一落地就迷上了漫画、动画和薯片。',
        '她越是想维持圣洁，越容易被地上文化击穿。<span class="highlight-pink">反应过来就会发出开水壶一样的爆鸣</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 金色长发', '👁️ 蓝色眼眸', '🪽 羽翼', '🎀 双马尾与缎带'],
      content: [
        '金色长发、蓝色眼睛，个子小小的，看起来比实际年龄还幼。<span class="highlight">穿天使装时背后有羽翼</span>。',
        '常服是水手服或居家打扮，头发扎成双马尾。<span class="highlight-pink">一激动翅膀会不自觉抖</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['😇 天使', '😈 魔王转世的守护者', '🕯️ 前世是战乙女', '🏠 谷风家'],
      content: [
        '她下凡的目的是守护魔王转世的谷风李空。<span class="highlight">通过接吻镇压他体内的魔王之力</span>。',
        '她的前世是刺杀死魔王的战乙女。<span class="highlight-pink">这个真相让两人的关系变得沉重</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🕊️ 降临', '💋 镇压仪式', '📚 地上生活', '🖤 堕天与选择'],
      content: [
        '故事从她飘落到李空身边开始。<span class="highlight">她一本正经地执行任务，却总和常识擦肩而过</span>。',
        '爱上李空之后，她作为天使逐渐不合格，开始变成人类。<span class="highlight-pink">这条线的终点是她必须在天使和人类之间选一个</span>。'
      ],
      quote: '乃爱，是来守护你的。',
      quoteAuthor: '—— 白雪乃爱'
    }
  ],
  abilities: [
    { icon: '😇', name: '天使之力', grade: 'S', desc: '净化与镇压的力量，<span class="highlight">专门克制魔王之力</span>。' },
    { icon: '🪽', name: '飞行', grade: 'A', desc: '天使的基本能力，<span class="highlight-pink">穿墙也不在话下</span>。' },
    { icon: '🍟', name: '地上文化吸收', grade: 'B', desc: '学什么都快，<span class="highlight">包括不该学的</span>。' }
  ],
  relationships: [
    { icon: '😈', name: '谷风李空', type: '守护对象 / 恋人', desc: '魔王转世的少年，<span class="highlight">她下凡的唯一理由</span>。', cls: 'rel-romance' },
    { icon: '👧', name: '谷风天音', type: '义妹', desc: '李空的妹妹，<span class="highlight-pink">经常把她耍得团团转</span>。', cls: 'rel-family' },
    { icon: '🌟', name: '星河辉耶', type: '战友', desc: '同为守护者，<span class="highlight">并肩作战的伙伴</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '😇',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #302403 25%, #443304 50%, #523d04 75%, #0a0a14 100%)",
    "glow1": "#f5c542",
    "glow2": "#bdf542",
    "particleBg": "rgba(245,197,66,0.3)",
    "gridImage": "linear-gradient(rgba(245,197,66,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,66,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(245,197,66,0.2), rgba(189,245,66,0.1))",
    "badgeBorder": "1px solid rgba(245,197,66,0.4)",
    "badgeColor": "#f9e8b8",
    "badgeShadow": "0 2px 12px rgba(245,197,66,0.15)",
    "dotBg": "#f5c542",
    "nameGrad": "linear-gradient(135deg, #fcf4de 0%, #f5cf66 35%, #f5c542 65%, #f9e8b8 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#f6da8d",
    "titleBadgeBg": "linear-gradient(135deg, rgba(245,197,66,0.2) 0%, rgba(189,245,66,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(245,197,66,0.4)",
    "titleBadgeColor": "#f9e8b8",
    "tagBg": "linear-gradient(135deg, rgba(245,197,66,0.12), rgba(245,197,66,0.06))",
    "tagBorder": "1px solid rgba(245,197,66,0.25)",
    "tagColor": "#f6da8d",
    "ringGrad": "linear-gradient(135deg, #f5c542, #bdf542, #f9e8b8, #f5c542) border-box",
    "avatarShadow": "0 0 60px rgba(245,197,66,0.4), 0 0 120px rgba(245,197,66,0.15)",
    "placeholderBg": "linear-gradient(180deg, #4d3a04 0%, #2c2102 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(245,197,66,0.5))",
    "videoPlayBg": "rgba(245,197,66,0.85)",
    "videoFallback": "linear-gradient(135deg, #3a2b03, #574105)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '天使☆嚣嚣 RE-BOOT!',
        titleJp: '天使☆騒々 RE-BOOT!',
        meta: [
          { icon: "🎮", label: "开发：", value: "ゆずソフト" },
          { icon: "📅", label: "发售：", value: "2023年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '魔王转世的少年，和下来守护他的天使。日常是甜的，<span class="highlight">设定却是疼的</span>。',
        tags: [
          { cls: "dark", text: "奇幻" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "喜剧" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '乃爱身上有个很妙的反差：她是最「圣洁」的角色，也是最好笑的那个。而当你笑够了，剧本又开始讲她前世欠下的债。'
}
