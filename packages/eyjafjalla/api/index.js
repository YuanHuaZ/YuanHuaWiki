/**
 * eyjafjalla 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '艾雅法拉',
  title: '火山学家',
  info: [
    { icon: '🎂', label: '生日', value: '10月18日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '145cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '种田梨沙', iconClass: 'cyan' },
    { icon: '🐑', label: '种族', value: '卡普里尼', iconClass: 'purple' },
    { icon: '🌋', label: '职业', value: '术师 / 火山学家', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '明日方舟', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🌋 学术狂热', '🎓 礼貌得过分', '🫧 听力受损', '🕯️ 背着遗志'],
      content: [
        '艾雅法拉说话永远带着敬语，语气柔和，<span class="highlight">像一位刚下田野的研究员</span>。',
        '但一聊到火山，她会突然变得极有热情——<span class="highlight-pink">那是她前辈留给她的火</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 棕色卷发', '🐑 弯角与羊耳', '🧥 学者外套', '📕 火山笔记'],
      content: [
        '棕色的卷发、头侧的弯角，个子小小的，穿学者外套。<span class="highlight">看起来更像助教而不是干员</span>。',
        '她随身带着火山笔记。因为矿石病影响了听力，<span class="highlight-pink">她说话时会不自觉提高音量</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🎓 莱塔尼亚求学', '🌋 火山研究', '🕯️ 前辈的遗志', '🩺 矿石病'],
      content: [
        '她在莱塔尼亚学习，主攻火山与源石技艺的关系。<span class="highlight">这个课题是前辈留给她的</span>。',
        '矿石病让她的听力持续受损，但她从没停下野外考察。<span class="highlight-pink">她说要替前辈把这座火山看完</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🧳 抵达罗德岛', '📕 论文与田野', '🌋 火山喷发', '🕯️ 未完成的报告'],
      content: [
        '她带着未完成的研究来到罗德岛，<span class="highlight">一边治疗一边继续观测</span>。',
        '在火山事件中，她第一次把「学术」变成「战斗」——<span class="highlight-pink">那一发法术，是她替前辈落下的句号</span>。'
      ],
      quote: '前辈，我看到了，火山真的在呼吸。',
      quoteAuthor: '—— 艾雅法拉'
    }
  ],
  abilities: [
    { icon: '🌋', name: '火山法术', grade: 'EX', desc: '大范围源石技艺爆发，<span class="highlight">火力覆盖极强</span>。' },
    { icon: '📕', name: '学术洞察', grade: 'S', desc: '对源石与地质的判断，<span class="highlight-pink">战场上的情报优势</span>。' },
    { icon: '🐑', name: '温柔', grade: 'A', desc: '对谁都客气，<span class="highlight">连敌人都先道一声歉</span>。' }
  ],
  relationships: [
    { icon: '🕯️', name: '前辈', type: '导师', desc: '把课题和遗志交给她的人，<span class="highlight">是她一切努力的起点</span>。', cls: 'rel-family' },
    { icon: '🏥', name: '罗德岛众人', type: '同伴', desc: '她的雇主与病友，<span class="highlight-pink">也是她的新田野</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🌋',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2f1004 25%, #421605 50%, #501b06 75%, #0a0a14 100%)",
    "glow1": "#f0713f",
    "glow2": "#f0d83f",
    "particleBg": "rgba(240,113,63,0.3)",
    "gridImage": "linear-gradient(rgba(240,113,63,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240,113,63,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(240,113,63,0.2), rgba(240,216,63,0.1))",
    "badgeBorder": "1px solid rgba(240,113,63,0.4)",
    "badgeColor": "#f8cbba",
    "badgeShadow": "0 2px 12px rgba(240,113,63,0.15)",
    "dotBg": "#f0713f",
    "nameGrad": "linear-gradient(135deg, #fbe7df 0%, #f29069 35%, #f0713f 65%, #f8cbba 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#f4ac90",
    "titleBadgeBg": "linear-gradient(135deg, rgba(240,113,63,0.2) 0%, rgba(240,216,63,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(240,113,63,0.4)",
    "titleBadgeColor": "#f8cbba",
    "tagBg": "linear-gradient(135deg, rgba(240,113,63,0.12), rgba(240,113,63,0.06))",
    "tagBorder": "1px solid rgba(240,113,63,0.25)",
    "tagColor": "#f4ac90",
    "ringGrad": "linear-gradient(135deg, #f0713f, #f0d83f, #f8cbba, #f0713f) border-box",
    "avatarShadow": "0 0 60px rgba(240,113,63,0.4), 0 0 120px rgba(240,113,63,0.15)",
    "placeholderBg": "linear-gradient(180deg, #4c1a06 0%, #2b0e03 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(240,113,63,0.5))",
    "videoPlayBg": "rgba(240,113,63,0.85)",
    "videoFallback": "linear-gradient(135deg, #391304, #551d07)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '明日方舟',
        titleJp: 'アークナイツ',
        meta: [
          { icon: "🏢", label: "开发：", value: "鹰角网络" },
          { icon: "📅", label: "上线：", value: "2019年5月" },
          { icon: "🕹️", label: "类型：", value: "塔防 RPG" },
          { icon: "💻", label: "平台：", value: "移动" }
        ],
        desc: '天灾与源石塑造的世界。一个听力正在消失的火山学家，<span class="highlight">用最后的耳朵听完这座火山的呼吸</span>。',
        tags: [
          { cls: "dark", text: "末世" },
          { cls: "dark", text: "策略" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '方舟里写得最「学术」也最悲伤的一条线。她越礼貌、越努力，你越意识到她听不见的东西正在变多。火山那段是真的燃。'
}
