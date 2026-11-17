/**
 * faust 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '浮士德',
  title: '边狱公司 1 号罪人',
  info: [
    { icon: '🏷️', label: '编号', value: '1 号罪人', iconClass: 'purple' },
    { icon: '📚', label: '身份', value: '无所不知的学者', iconClass: 'pink' },
    { icon: '🧠', label: '特质', value: '理性 / 求知', iconClass: 'cyan' },
    { icon: '🚌', label: '所属', value: '边狱公司（Limbus Company）', iconClass: 'purple' },
    { icon: '📖', label: '母题', value: '与恶魔的契约', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '边狱巴士', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🧠 极端理性', '❓ 永远在求问', '🤝 团队里的定盘星', '🕳️ 藏着不知道的事'],
      content: [
        '浮士德说话永远像在陈述结论：<span class="highlight">不带情绪、不留余地</span>。她的判断极少出错，所以队伍里没人敢随便反驳。',
        '但她追求的不是「正确」，是「知道」。<span class="highlight-pink">为此她愿意和任何存在做交易</span>——这正是她的名字。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['📕 随身书册', '🧥 边狱制服', '👁️ 冷静的眼神', '💇 浅色长发'],
      content: [
        '边狱公司的标准制服，剪裁利落，颜色压得很暗。<span class="highlight">她手里总拿着书或记录</span>。',
        '长相清冷，说话时几乎不看人，视线永远落在<span class="highlight-pink">她正在读的那一页上</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🚌 罪人之一', '📚 知识的代行者', '🤝 与但丁的配合', '🧩 未公开的过去'],
      content: [
        '她是边狱公司收容的「罪人」之一，随巴士穿行于都市。<span class="highlight">她的罪与「知道得太多」有关</span>。',
        '在队伍里，她负责推理与情报，是少数能<span class="highlight-pink">直接把但丁的指令翻译成结论的人</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🚌 金枝回收', '📖 知识的代价', '🧠 判断与牺牲', '🕳️ 未知的答案'],
      content: [
        '她的每一次出场都在推进「信息」：<span class="highlight">哪条路能走、谁在说谎、代价是什么</span>。',
        '而她自己始终是那个提出问题的人——<span class="highlight-pink">为什么这个世界是这样</span>。这个问题她还没得到答案。'
      ],
      quote: '这是浮士德已经知道的事。',
      quoteAuthor: '—— 浮士德'
    }
  ],
  abilities: [
    { icon: '📖', name: '渊博', grade: 'EX', desc: '跨越领域的知识储备，<span class="highlight">几乎能回答任何问题</span>。' },
    { icon: '🧠', name: '推演', grade: 'S', desc: '从碎片推整体，<span class="highlight-pink">在战斗前就结束战斗</span>。' },
    { icon: '🤝', name: '交涉', grade: 'A', desc: '与任何存在谈条件的能力，<span class="highlight">代价由她承担</span>。' }
  ],
  relationships: [
    { icon: '🕯️', name: '但丁', type: '同行者', desc: '边狱巴士的「钟表头」，<span class="highlight">她替他翻译这个世界</span>。', cls: 'rel-friend' },
    { icon: '🚌', name: '边狱罪人们', type: '同僚', desc: '一车问题人物，<span class="highlight-pink">她负责让他们活到下一站</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '📕',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #0e2325 25%, #133134 50%, #183c3f 75%, #0a0a14 100%)",
    "glow1": "#3f9fa8",
    "glow2": "#3f62a8",
    "particleBg": "rgba(63,159,168,0.3)",
    "gridImage": "linear-gradient(rgba(63,159,168,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(63,159,168,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(63,159,168,0.2), rgba(63,98,168,0.1))",
    "badgeBorder": "1px solid rgba(63,159,168,0.4)",
    "badgeColor": "#c9e6e8",
    "badgeShadow": "0 2px 12px rgba(63,159,168,0.15)",
    "dotBg": "#3f9fa8",
    "nameGrad": "linear-gradient(135deg, #e6f3f4 0%, #8acbd1 35%, #3f9fa8 65%, #c9e6e8 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#a8d7db",
    "titleBadgeBg": "linear-gradient(135deg, rgba(63,159,168,0.2) 0%, rgba(63,98,168,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(63,159,168,0.4)",
    "titleBadgeColor": "#c9e6e8",
    "tagBg": "linear-gradient(135deg, rgba(63,159,168,0.12), rgba(63,159,168,0.06))",
    "tagBorder": "1px solid rgba(63,159,168,0.25)",
    "tagColor": "#a8d7db",
    "ringGrad": "linear-gradient(135deg, #3f9fa8, #3f62a8, #c9e6e8, #3f9fa8) border-box",
    "avatarShadow": "0 0 60px rgba(63,159,168,0.4), 0 0 120px rgba(63,159,168,0.15)",
    "placeholderBg": "linear-gradient(180deg, #16383b 0%, #0d2021 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(63,159,168,0.5))",
    "videoPlayBg": "rgba(63,159,168,0.85)",
    "videoFallback": "linear-gradient(135deg, #112a2d, #193f43)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '边狱巴士公司',
        titleJp: 'Limbus Company',
        meta: [
          { icon: "🏢", label: "开发：", value: "Project Moon" },
          { icon: "📅", label: "上线：", value: "2023年2月" },
          { icon: "🕹️", label: "类型：", value: "策略 RPG" },
          { icon: "💻", label: "平台：", value: "PC / 移动" }
        ],
        desc: '一辆巴士穿行在崩坏的都市里，回收「金枝」。车上的罪人各怀秘密，<span class="highlight">而浮士德知道得最多</span>。',
        tags: [
          { cls: "dark", text: "暗黑" },
          { cls: "dark", text: "策略" },
          { cls: "dark", text: "RPG" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: 'Project Moon 写「聪明人」的方式很对我口味：她不炫技，只是平静地宣布结论，然后世界就按她说的那样运转。最迷人的是她也有不知道的东西。'
}
