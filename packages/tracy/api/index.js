/**
 * tracy 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '特蕾西',
  title: '机械师',
  info: [
    { icon: '🏷️', label: '职业', value: '机械师', iconClass: 'purple' },
    { icon: '⚙️', label: '特长', value: '机械制造 / 傀儡操控', iconClass: 'pink' },
    { icon: '👨‍👧', label: '家人', value: '钟表匠父亲', iconClass: 'cyan' },
    { icon: '🎭', label: '阵营', value: '求生者', iconClass: 'purple' },
    { icon: '🕯️', label: '性格', value: '内向 / 执拗', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '第五人格', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🔧 机械痴', '🙈 内向', '🫂 依赖傀儡', '💪 不认输'],
      content: [
        '特蕾西不太会和人打交道，<span class="highlight">她更擅长和齿轮说话</span>。机器不会骗人，坏了就修，很简单。',
        '她的傀儡是她最好的伙伴——也是她<span class="highlight-pink">把「不敢说的话」寄托出去的地方</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 棕色乱发', '🔧 工装与护目镜', '🧤 油污的手', '⚙️ 随身工具'],
      content: [
        '棕色短发总是乱的，工装上沾着机油，护目镜挂在额前。<span class="highlight">一看就是刚从工作台前站起来</span>。',
        '她手上常年有细小的伤痕，指甲修得很短。<span class="highlight-pink">那是长年和金属打交道留下的</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🕰️ 钟表匠的女儿', '⚙️ 机械天才', '🏚️ 庄园的来信', '🎭 求生游戏'],
      content: [
        '她的父亲是钟表匠，她从小就泡在零件堆里。<span class="highlight">机械是她唯一确定的世界</span>。',
        '一封来自庄园的邀请把她带到了那场游戏。<span class="highlight-pink">她想找的东西，和父亲有关</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['✉️ 庄园邀请', '🎭 求生与追猎', '🤖 傀儡替身', '🕯️ 活下去'],
      content: [
        '在庄园里，她的能力被放大成生存技巧：<span class="highlight">傀儡去开机关、去引开追猎者</span>。',
        '她不适合正面交锋，所以每一步都要算。<span class="highlight-pink">和她修钟表的方式一样，一格一格地算</span>。'
      ],
      quote: '能动就行，剩下的我来修。',
      quoteAuthor: '—— 特蕾西'
    }
  ],
  abilities: [
    { icon: '🤖', name: '傀儡操控', grade: 'EX', desc: '远程操控傀儡行动，<span class="highlight">等于多出一个自己</span>。' },
    { icon: '⚙️', name: '机械修理', grade: 'S', desc: '密码机与器械的修理速度极快，<span class="highlight-pink">队伍的核心工程兵</span>。' },
    { icon: '🧠', name: '冷静计算', grade: 'A', desc: '不靠直觉，靠推算。<span class="highlight">每一步都有依据</span>。' }
  ],
  relationships: [
    { icon: '🕰️', name: '父亲', type: '家人', desc: '教会她一切的人，<span class="highlight">也是她不断追查的起点</span>。', cls: 'rel-family' },
    { icon: '🎭', name: '其他求生者', type: '同伴', desc: '她不擅长交流，<span class="highlight-pink">却总把最难的活接过来</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '⚙️',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2d1a06 25%, #3e2509 50%, #4c2d0b 75%, #0a0a14 100%)",
    "glow1": "#e59b4a",
    "glow2": "#d5e54a",
    "particleBg": "rgba(229,155,74,0.3)",
    "gridImage": "linear-gradient(rgba(229,155,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(229,155,74,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(229,155,74,0.2), rgba(213,229,74,0.1))",
    "badgeBorder": "1px solid rgba(229,155,74,0.4)",
    "badgeColor": "#f3dabe",
    "badgeShadow": "0 2px 12px rgba(229,155,74,0.15)",
    "dotBg": "#e59b4a",
    "nameGrad": "linear-gradient(135deg, #f9eee1 0%, #e9b072 35%, #e59b4a 65%, #f3dabe 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#edc496",
    "titleBadgeBg": "linear-gradient(135deg, rgba(229,155,74,0.2) 0%, rgba(213,229,74,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(229,155,74,0.4)",
    "titleBadgeColor": "#f3dabe",
    "tagBg": "linear-gradient(135deg, rgba(229,155,74,0.12), rgba(229,155,74,0.06))",
    "tagBorder": "1px solid rgba(229,155,74,0.25)",
    "tagColor": "#edc496",
    "ringGrad": "linear-gradient(135deg, #e59b4a, #d5e54a, #f3dabe, #e59b4a) border-box",
    "avatarShadow": "0 0 60px rgba(229,155,74,0.4), 0 0 120px rgba(229,155,74,0.15)",
    "placeholderBg": "linear-gradient(180deg, #472a0a 0%, #281806 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(229,155,74,0.5))",
    "videoPlayBg": "rgba(229,155,74,0.85)",
    "videoFallback": "linear-gradient(135deg, #362008, #502f0c)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: '第五人格',
        titleJp: 'Identity V',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "网易" },
          { icon: "📅", label: "上线：", value: "2018年4月" },
          { icon: "🕹️", label: "类型：", value: "非对称对抗" },
          { icon: "💻", label: "平台：", value: "移动 / PC" }
        ],
        desc: '一场在庄园里进行的追猎游戏。机械师不擅长跑，<span class="highlight">但她能让机器替她跑</span>。',
        tags: [
          { cls: "dark", text: "哥特" },
          { cls: "dark", text: "对抗" },
          { cls: "live", text: "国服" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '特蕾西 · 官方立绘' }
  ],
  videos: []
}
