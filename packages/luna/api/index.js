/**
 * luna 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '月下',
  title: '月下初拥',
  info: [
    { icon: '🎂', label: '生日', value: '3月28日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '145cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '花泽香菜', iconClass: 'cyan' },
    { icon: '🧬', label: '装甲', value: '月下初拥（Luna Kindred）', iconClass: 'purple' },
    { icon: '👑', label: '本体', value: '德丽莎·阿波卡利斯', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '崩坏3rd', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🦇 吸血鬼本能', '🍬 嗜甜', '👑 学园长的威严', '🌙 孤独'],
      content: [
        '月下初拥是德丽莎的吸血鬼形态：<span class="highlight">优雅、危险、又有点孩子气</span>。她会在优雅地说话的同时，认真惦记着下一块甜点。',
        '作为学园长的那份责任感还在，只是被夜色和饥渴<span class="highlight-pink">染上了另一层颜色</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 银白长发', '👁️ 红色眼眸', '🦇 蝙蝠之翼', '👗 黑红礼裙'],
      content: [
        '银白色的长发、红色的瞳孔，一身黑红配色的礼裙。<span class="highlight">比起学园长，更像童话里的贵族</span>。',
        '背后生着蝙蝠般的翼，行动轻盈得没有声音。<span class="highlight-pink">一抬手就是成群的暗影</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['👑 天命学园长', '🧬 卡斯兰娜血统', '🦇 吸血鬼装甲', '🌙 夜的支配'],
      content: [
        '德丽莎·阿波卡利斯是天命组织的学园长，<span class="highlight">也是卡斯兰娜家族的一员</span>。',
        '「月下初拥」这套装甲把她推向血族的方向——<span class="highlight-pink">力量与代价同时到来</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🌃 夜色降临', '🩸 血之契约', '🕯️ 学园长的另一面', '🌙 独自守夜'],
      content: [
        '这套装甲代表的不只是战斗力，还有<span class="highlight">她必须独自背下的那部分黑暗</span>。',
        '她依然会为学园里的人挡在前面，只是方式变得更安静、更冷。<span class="highlight-pink">夜里她一个人站在月下的样子，比战斗更让人记得</span>。'
      ],
      quote: '在月光下，慢慢陪我聊聊吧。',
      quoteAuthor: '—— 月下'
    }
  ],
  abilities: [
    { icon: '🦇', name: '暗影支配', grade: 'EX', desc: '召唤蝙蝠与暗影，<span class="highlight">范围压制极强</span>。' },
    { icon: '🩸', name: '血族体质', grade: 'S', desc: '远超常人的恢复与速度，<span class="highlight-pink">代价是永远的饥渴</span>。' },
    { icon: '👑', name: '学园长的统率', grade: 'A', desc: '临场指挥与判断，<span class="highlight">从不因形态改变</span>。' }
  ],
  relationships: [
    { icon: '👧', name: '琪亚娜', type: '学生 / 家人', desc: '天命的学生，<span class="highlight">也是她最放不下的孩子</span>。', cls: 'rel-family' },
    { icon: '🎓', name: '天命众人', type: '部下', desc: '学园的同僚与学生们，<span class="highlight-pink">她守夜的理由</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🦇',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2b080b 25%, #3d0b10 50%, #4a0d13 75%, #0a0a14 100%)",
    "glow1": "#e0505f",
    "glow2": "#e09550",
    "particleBg": "rgba(224,80,95,0.3)",
    "gridImage": "linear-gradient(rgba(224,80,95,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(224,80,95,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(224,80,95,0.2), rgba(224,149,80,0.1))",
    "badgeBorder": "1px solid rgba(224,80,95,0.4)",
    "badgeColor": "#f2c0c5",
    "badgeShadow": "0 2px 12px rgba(224,80,95,0.15)",
    "dotBg": "#e0505f",
    "nameGrad": "linear-gradient(135deg, #f9e2e4 0%, #e57682 35%, #e0505f 65%, #f2c0c5 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#ea99a2",
    "titleBadgeBg": "linear-gradient(135deg, rgba(224,80,95,0.2) 0%, rgba(224,149,80,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(224,80,95,0.4)",
    "titleBadgeColor": "#f2c0c5",
    "tagBg": "linear-gradient(135deg, rgba(224,80,95,0.12), rgba(224,80,95,0.06))",
    "tagBorder": "1px solid rgba(224,80,95,0.25)",
    "tagColor": "#ea99a2",
    "ringGrad": "linear-gradient(135deg, #e0505f, #e09550, #f2c0c5, #e0505f) border-box",
    "avatarShadow": "0 0 60px rgba(224,80,95,0.4), 0 0 120px rgba(224,80,95,0.15)",
    "placeholderBg": "linear-gradient(180deg, #450c12 0%, #27070a 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(224,80,95,0.5))",
    "videoPlayBg": "rgba(224,80,95,0.85)",
    "videoFallback": "linear-gradient(135deg, #34090e, #4e0e14)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '崩坏3rd',
        titleJp: '崩壊3rd',
        meta: [
          { icon: "🏢", label: "开发：", value: "miHoYo" },
          { icon: "🕹️", label: "类型：", value: "动作 RPG" },
          { icon: "💻", label: "平台：", value: "移动 / PC" },
          { icon: "🦇", label: "形态：", value: "月下初拥" }
        ],
        desc: '女武神对抗崩坏的世界。学园长德丽莎的吸血鬼形态，<span class="highlight">把温柔与危险长在同一张脸上</span>。',
        tags: [
          { cls: "dark", text: "末世" },
          { cls: "dark", text: "动作" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '德丽莎本来就是个「装大人的小孩」，月下初拥把这点放大成了夜色下的孤独感。喜欢她这套装甲胜过任何战斗形态。'
}
