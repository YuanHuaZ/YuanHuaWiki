/**
 * kaoruko 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '和栗薰子',
  title: '蛋糕店常客的学姐',
  info: [
    { icon: '🎂', label: '生日', value: '7月22日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '148cm', iconClass: 'pink' },
    { icon: '🩸', label: '血型', value: 'B型', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '井上穗乃花', iconClass: 'purple' },
    { icon: '🏫', label: '学校', value: '桔梗女校', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '薰香花朵凛然绽放', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🌸 直率坦荡', '💪 全力以赴', '🍰 甜食控', '😊 天然亲和'],
      content: [
        '薰子是那种<span class="highlight">想什么就说什么</span>的女孩。喜欢就说喜欢，好吃就说好吃，从不藏着掖着。',
        '她对每件事都全力以赴——学习、逛街、吃饭都是。<span class="highlight-pink">这种不设防的坦率</span>，是凛太郎最先被击中的地方。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 黑色长直发', '👁️ 明净的眼眸', '🎀 女校制服', '🧣 冬日围巾'],
      content: [
        '黑色长直发配上干净的脸，穿桔梗女校的制服。<span class="highlight">看起来是标准的大小姐学校学生</span>。',
        '但一开口就露馅：语速快、笑得大声，吃到好吃的会<span class="highlight-pink">眼睛发亮地晃脚</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏫 桔梗女校', '🍰 蛋糕店常客', '👦 与凛太郎相遇', '🏠 普通家庭'],
      content: [
        '她是桔梗女校的学生，每月会去凛太郎家的蛋糕店<span class="highlight">一两次</span>。',
        '两家学校之间有微妙的偏见，她的出现让这份偏见<span class="highlight-pink">第一次有了裂缝</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🍰 店里相遇', '😶 外表凶狠的他', '🌸 一点点靠近', '💗 青春恋爱'],
      content: [
        '凛太郎因为高大凶狠的外表被人误解，只有薰子<span class="highlight">不带任何预设地跟他说话</span>。',
        '故事没有大事件，只有蛋糕店、放学路和慢慢靠近的两个人。<span class="highlight-pink">干净的校园恋爱</span>，干净得让人想起自己的高中。'
      ],
      quote: '好吃的东西，就是要说好吃啊。',
      quoteAuthor: '—— 和栗薰子'
    }
  ],
  abilities: [
    { icon: '🌸', name: '直率', grade: 'EX', desc: '不设防的表达，<span class="highlight">能一瞬间拆掉别人的壳</span>。' },
    { icon: '🍰', name: '甜食雷达', grade: 'S', desc: '对蛋糕店的敏锐度惊人，<span class="highlight-pink">每月固定报到</span>。' },
    { icon: '💪', name: '全力以赴', grade: 'A', desc: '无论做什么都不留余地，<span class="highlight">包括喜欢一个人</span>。' }
  ],
  relationships: [
    { icon: '🎂', name: '䌷凛太郎', type: '恋人', desc: '蛋糕店家的儿子，被她<span class="highlight">第一个当成普通人看见</span>。', cls: 'rel-romance' },
    { icon: '👦', name: '宇佐美翔平 / 夏泽朔', type: '同学', desc: '凛太郎的朋友，<span class="highlight-pink">热闹的三人组</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🌸',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2d0610 25%, #3f0816 50%, #4c0a1b 75%, #0a0a14 100%)",
    "glow1": "#f08fa8",
    "glow2": "#f0af8f",
    "particleBg": "rgba(240,143,168,0.3)",
    "gridImage": "linear-gradient(rgba(240,143,168,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240,143,168,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(240,143,168,0.2), rgba(240,175,143,0.1))",
    "badgeBorder": "1px solid rgba(240,143,168,0.4)",
    "badgeColor": "#f4bdcc",
    "badgeShadow": "0 2px 12px rgba(240,143,168,0.15)",
    "dotBg": "#f08fa8",
    "nameGrad": "linear-gradient(135deg, #fae1e7 0%, #ea7190 35%, #f08fa8 65%, #f4bdcc 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#ee96ac",
    "titleBadgeBg": "linear-gradient(135deg, rgba(240,143,168,0.2) 0%, rgba(240,175,143,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(240,143,168,0.4)",
    "titleBadgeColor": "#f4bdcc",
    "tagBg": "linear-gradient(135deg, rgba(240,143,168,0.12), rgba(240,143,168,0.06))",
    "tagBorder": "1px solid rgba(240,143,168,0.25)",
    "tagColor": "#ee96ac",
    "ringGrad": "linear-gradient(135deg, #f08fa8, #f0af8f, #f4bdcc, #f08fa8) border-box",
    "avatarShadow": "0 0 60px rgba(240,143,168,0.4), 0 0 120px rgba(240,143,168,0.15)",
    "placeholderBg": "linear-gradient(180deg, #480a1a 0%, #28050e 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(240,143,168,0.5))",
    "videoPlayBg": "rgba(240,143,168,0.85)",
    "videoFallback": "linear-gradient(135deg, #360713, #510b1d)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '薰香花朵凛然绽放',
        titleJp: '薫る花は凛と咲く',
        meta: [
          { icon: "🏢", label: "制作：", value: "CloverWorks" },
          { icon: "📅", label: "播出：", value: "2025年7月" },
          { icon: "🎤", label: "CV：", value: "井上穗乃花" }
        ],
        desc: '被当成不良少年的蛋糕店儿子，与隔壁女校的常客少女。一段<span class="highlight">近在咫尺却又隔着校门</span>的青春故事。',
        tags: [
          { cls: "dark", text: "校园" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "日常" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '2025 年最舒服的校园恋爱之一。没有狗血、没有算计，就是两个好人慢慢靠近。薰子那种「先笑出来再说」的性格，看完会让人心情变好。'
}
