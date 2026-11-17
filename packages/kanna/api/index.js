/**
 * kanna 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '明月栞那',
  title: '百年死神',
  info: [
    { icon: '🎤', label: '声优', value: '麻仓亚恋', iconClass: 'purple' },
    { icon: '💇', label: '发色', value: '白色', iconClass: 'pink' },
    { icon: '👁️', label: '瞳色', value: '粉色', iconClass: 'cyan' },
    { icon: '☠️', label: '身份', value: '死神（存活百年以上）', iconClass: 'purple' },
    { icon: '☕', label: '特长', value: '煮咖啡', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '星光咖啡馆与死神之蝶', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['☠️ 百年死神', '😈 小恶魔', '☕ 咖啡高手', '📵 机械白痴'],
      content: [
        '栞那对人友好、说话和气，偶尔会顺势捉弄人，<span class="highlight">发出「尼嘻嘻」的笑声</span>。',
        '但她完全跟不上时代：不会用智能设备，知识停留在很久以前。<span class="highlight-pink">这种脱节感意外地可爱</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 白色长发', '👁️ 粉色眼眸', '🧥 披肩与吊带袜', '⚰️ 长柄镰刀'],
      content: [
        '白色长发、粉色眼睛，穿披肩与吊带袜，头上有一撮呆毛。<span class="highlight">优雅里带一点危险</span>。',
        '武器是长柄镰刀。<span class="highlight-pink">睡觉时会把头发扎成双马尾</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['☠️ 引导灵魂', '🐈 与猫妖搭档', '☕ 星光咖啡馆', '🕯️ 百年孤独'],
      content: [
        '她的工作是引导灵魂——处理那些还在人间游荡的、衰弱的灵魂。<span class="highlight">搭档是猫妖御帝</span>。',
        '为了救昂晴的同学，也为了回收蝴蝶，她筹备开了「星光咖啡馆」。<span class="highlight-pink">她在人间待了太久，久到有了牵挂</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['☕ 咖啡馆开业', '🦋 蝴蝶升空', '🍳 蛋包饭', '💗 死神的选择'],
      content: [
        '她邀请昂晴来打工，<span class="highlight">一步步把他拉进自己的世界</span>。',
        '她煮的咖啡备受好评，做的蛋包饭被评价为「温柔的味道」。<span class="highlight-pink">最终她要面对的是：死神能不能留在人间</span>。'
      ],
      quote: '尼嘻嘻～',
      quoteAuthor: '—— 明月栞那'
    }
  ],
  abilities: [
    { icon: '☠️', name: '灵魂引导', grade: 'EX', desc: '看见并引导灵魂，<span class="highlight">死神最本职的能力</span>。' },
    { icon: '☕', name: '咖啡', grade: 'S', desc: '被咖啡馆客人公认的手艺，<span class="highlight-pink">是她留在人间的理由之一</span>。' },
    { icon: '⚰️', name: '镰刀', grade: 'A', desc: '长柄镰刀的战斗技巧，<span class="highlight">看着优雅，下手很准</span>。' }
  ],
  relationships: [
    { icon: '🧑‍🍳', name: '高岭昂晴', type: '恋人', desc: '被她拉来打工的学生，<span class="highlight">也是她留在人间的原因</span>。', cls: 'rel-romance' },
    { icon: '🐈', name: '御帝', type: '搭档', desc: '猫妖，<span class="highlight-pink">唯一陪了她百年的存在</span>。', cls: 'rel-family' },
    { icon: '👭', name: '咖啡馆众人', type: '同伴', desc: '四季夏目、墨染希等店员，<span class="highlight">她重建的「家」</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '☕',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #160e25 25%, #1f1334 50%, #26173f 75%, #0a0a14 100%)",
    "glow1": "#b39ddb",
    "glow2": "#d79ddb",
    "particleBg": "rgba(179,157,219,0.3)",
    "gridImage": "linear-gradient(rgba(179,157,219,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(179,157,219,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(179,157,219,0.2), rgba(215,157,219,0.1))",
    "badgeBorder": "1px solid rgba(179,157,219,0.4)",
    "badgeColor": "#d4c9e9",
    "badgeShadow": "0 2px 12px rgba(179,157,219,0.15)",
    "dotBg": "#b39ddb",
    "nameGrad": "linear-gradient(135deg, #ebe6f4 0%, #a389d2 35%, #b39ddb 65%, #d4c9e9 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#baa8dc",
    "titleBadgeBg": "linear-gradient(135deg, rgba(179,157,219,0.2) 0%, rgba(215,157,219,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(179,157,219,0.4)",
    "titleBadgeColor": "#d4c9e9",
    "tagBg": "linear-gradient(135deg, rgba(179,157,219,0.12), rgba(179,157,219,0.06))",
    "tagBorder": "1px solid rgba(179,157,219,0.25)",
    "tagColor": "#baa8dc",
    "ringGrad": "linear-gradient(135deg, #b39ddb, #d79ddb, #d4c9e9, #b39ddb) border-box",
    "avatarShadow": "0 0 60px rgba(179,157,219,0.4), 0 0 120px rgba(179,157,219,0.15)",
    "placeholderBg": "linear-gradient(180deg, #23163c 0%, #140c22 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(179,157,219,0.5))",
    "videoPlayBg": "rgba(179,157,219,0.85)",
    "videoFallback": "linear-gradient(135deg, #1a102d, #281943)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '星光咖啡馆与死神之蝶',
        titleJp: '星光咖啡馆と死神の蝶',
        meta: [
          { icon: "🎮", label: "开发：", value: "ゆずソフト" },
          { icon: "📅", label: "发售：", value: "2020年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '一家开在街角的咖啡馆，一位活过百年的死神。<span class="highlight">她煮咖啡，也送人离开</span>。',
        tags: [
          { cls: "dark", text: "奇幻" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "治愈" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '柚子社里气质最特别的一位。她的「脱节」不是笑点设定，是百年孤独的证据。越甜越让人心里发酸。'
}
