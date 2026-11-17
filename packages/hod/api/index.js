/**
 * hod 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: 'Hod',
  title: '训练层的 Sephirah',
  info: [
    { icon: '🏷️', label: '身份', value: '训练层 Sephirah', iconClass: 'purple' },
    { icon: '📘', label: '职责', value: '新人培训', iconClass: 'pink' },
    { icon: '💚', label: '性格', value: '温柔 / 笨拙', iconClass: 'cyan' },
    { icon: '🏢', label: '所属', value: '脑叶公司', iconClass: 'purple' },
    { icon: '🕯️', label: '心结', value: '被员工讨厌的过去', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '脑叶公司', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['💚 想帮所有人', '😔 自我怀疑', '🗣️ 说话小心翼翼', '🫂 害怕被否定'],
      content: [
        'Hod 是那种<span class="highlight">真心想让每个人都过得好</span>的人。她会记住每个员工的名字，也会为他们的死自责很久。',
        '但她的善意常常帮倒忙。被指责之后，她会<span class="highlight-pink">缩回去、反复道歉、然后更不知道该怎么做</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 棕色短发', '👁️ 温和的眼', '📘 抱着的教材', '🧥 深色制服'],
      content: [
        '棕色短发、眼神温和，怀里总抱着教材或名册。<span class="highlight">看起来像刚上任的老师</span>。',
        '她的姿态总是稍微前倾，像是在<span class="highlight-pink">随时准备听人说话</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏢 脑叶公司', '📘 训练层负责人', '🤖 Sephirah', '🕳️ 被抹去的过去'],
      content: [
        '她是脑叶公司训练层的 Sephirah，负责把一批批新人送进那座<span class="highlight">吃人的设施</span>。',
        '她记得自己被「改造」成现在这个样子，却记不清更早的事。<span class="highlight-pink">那些记忆被封在核心抑制里</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['📘 新人入职', '😞 培训失败', '💔 与员工的冲突', '🕯️ 面对自己'],
      content: [
        '她负责教会新人怎么活下去，<span class="highlight">可她教的东西往往救不了人</span>。',
        '在核心抑制中，她必须直面自己「善意造成的伤害」。<span class="highlight-pink">那不是别人的错，是她的</span>。'
      ],
      quote: '我只是……想让大家都好好的。',
      quoteAuthor: '—— Hod'
    }
  ],
  abilities: [
    { icon: '📘', name: '培训', grade: 'S', desc: '把复杂的规则讲清楚，<span class="highlight">新人少死几次全靠她</span>。' },
    { icon: '💚', name: '共情', grade: 'EX', desc: '能察觉别人情绪的细微变化，<span class="highlight-pink">也因此更容易受伤</span>。' },
    { icon: '🫂', name: '安抚', grade: 'A', desc: '在崩溃的设施里，<span class="highlight">她的声音是少数让人安心的事</span>。' }
  ],
  relationships: [
    { icon: '🧑‍💼', name: '员工们', type: '学生', desc: '她一批批带进来的人，<span class="highlight">也是她一次次失去的人</span>。', cls: 'rel-friend' },
    { icon: '🔧', name: '其他 Sephirah', type: '同僚', desc: '各有各的伤，<span class="highlight-pink">彼此看不惯又离不开</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '📘',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #271a0c 25%, #372410 50%, #432b14 75%, #0a0a14 100%)",
    "glow1": "#c98a4b",
    "glow2": "#bec94b",
    "particleBg": "rgba(201,138,75,0.3)",
    "gridImage": "linear-gradient(rgba(201,138,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,138,75,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(201,138,75,0.2), rgba(190,201,75,0.1))",
    "badgeBorder": "1px solid rgba(201,138,75,0.4)",
    "badgeColor": "#ebd9c6",
    "badgeShadow": "0 2px 12px rgba(201,138,75,0.15)",
    "dotBg": "#c98a4b",
    "nameGrad": "linear-gradient(135deg, #f6ede5 0%, #d8ad83 35%, #c98a4b 65%, #ebd9c6 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#e0c2a3",
    "titleBadgeBg": "linear-gradient(135deg, rgba(201,138,75,0.2) 0%, rgba(190,201,75,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(201,138,75,0.4)",
    "titleBadgeColor": "#ebd9c6",
    "tagBg": "linear-gradient(135deg, rgba(201,138,75,0.12), rgba(201,138,75,0.06))",
    "tagBorder": "1px solid rgba(201,138,75,0.25)",
    "tagColor": "#e0c2a3",
    "ringGrad": "linear-gradient(135deg, #c98a4b, #bec94b, #ebd9c6, #c98a4b) border-box",
    "avatarShadow": "0 0 60px rgba(201,138,75,0.4), 0 0 120px rgba(201,138,75,0.15)",
    "placeholderBg": "linear-gradient(180deg, #3f2913 0%, #23170b 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(201,138,75,0.5))",
    "videoPlayBg": "rgba(201,138,75,0.85)",
    "videoFallback": "linear-gradient(135deg, #2f1f0e, #472e15)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: '脑叶公司',
        titleJp: 'Lobotomy Corporation',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "Project Moon" },
          { icon: "📅", label: "发售：", value: "2016年" },
          { icon: "🕹️", label: "类型：", value: "模拟经营 / 恐怖" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '管理一家收容怪物的公司，代价是员工的血。<span class="highlight">训练层的那位，负责把新人送进地狱</span>。',
        tags: [
          { cls: "dark", text: "暗黑" },
          { cls: "dark", text: "模拟" },
          { cls: "dark", text: "恐怖" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: 'Hod · 官方立绘' }
  ],
  videos: []
}
