/**
 * prickett 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '普利凯特',
  title: '红之偶像',
  info: [
    { icon: '🏷️', label: '别名', value: '第二代红之女王', iconClass: 'purple' },
    { icon: '💇', label: '发色', value: '粉色', iconClass: 'cyan' },
    { icon: '👁️', label: '瞳色', value: '红色', iconClass: 'pink' },
    { icon: '🎤', label: '口头禅', value: '句尾加「✰」', iconClass: 'purple' },
    { icon: '🏰', label: '领域', value: 'Queenland', iconClass: 'cyan' },
    { icon: '🎮', label: '所属作品', value: 'BLACK SOULS 2', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🎤 天生的偶像', '✰ 句尾带星', '🖤 深藏算计', '💔 自我牺牲'],
      content: [
        '她把 Queenland 改造成了一座永远在开演唱会的游乐园，<span class="highlight">让所有人笑着忘记这里是地狱</span>。',
        '甜腻的语气、句尾的「✰」，全是精心设计的表演。她比谁都清楚这场梦会醒，<span class="highlight-pink">所以更用力地演</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 粉色长发', '👁️ 红色眼眸', '👑 偶像礼服', '🎲 骰子'],
      content: [
        '粉色长发、红色眼睛，一身华丽的偶像礼服，站在舞台中央<span class="highlight">像一颗会发光的糖</span>。',
        '战斗时她掷骰子——掷到六，脸上的表情会瞬间变成别的东西。<span class="highlight-pink">那一刻她不再是偶像</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['👑 第二代红之女王', '🎡 Queenland 的建造者', '🧵 蠕动潜行的一部分', '🕯️ 罪与救赎'],
      content: [
        '她曾是「蠕动潜行的少女们」的一部分，因把格林拖进无尽轮回而<span class="highlight">背负着罪</span>。',
        '她与 Node 合谋，想给格林一条真正能走出去的路。<span class="highlight-pink">这场盛大的游乐园，是她搭的舞台</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🎤 剧场演唱会', '💌 契约', '🎡 约会', '💍 戒指与真相'],
      content: [
        '在 Queenland 的剧场里，她会为观众唱那首《Star Dream Gazer》——<span class="highlight">全游戏最不合画风的歌</span>。',
        '契约满级后她主动提出约会，玩遍整座游乐园，最后把戒指交给格林。<span class="highlight-pink">戒指能听懂「亲爱的小姑娘」的语言</span>，也是她留下的最后线索。'
      ],
      quote: '所以，请迈开脚步，跑起来吧，不要停下，也不要回头。',
      quoteAuthor: '—— 普利凯特'
    }
  ],
  abilities: [
    { icon: '🎤', name: '偶像歌声', grade: 'EX', desc: '能让整座城市跟着她做梦的歌声，<span class="highlight">也是她最真的部分</span>。' },
    { icon: '🎲', name: '骰子', grade: 'S', desc: '战斗与命运都交给骰子。<span class="highlight-pink">掷出六时她会露出真面目</span>。' },
    { icon: '👑', name: '红之女王的权能', grade: 'A', desc: '统治 Queenland 的力量，<span class="highlight">足以改写一片领域</span>。' }
  ],
  relationships: [
    { icon: '🖤', name: '格林', type: '契约者 / 爱人', desc: '她为他搭了一座游乐园，<span class="highlight">也为他准备了退路</span>。', cls: 'rel-romance' },
    { icon: '🐰', name: '爱丽丝', type: '另一个她', desc: '0 SEN 时在她房里一闪而过的身影，<span class="highlight-pink">她始终活在爱丽丝的影子里</span>。', cls: 'rel-other' },
    { icon: '🧸', name: 'Node', type: '同谋', desc: '一起策划了那场逃亡的同伴，<span class="highlight">也是唯一懂她的人</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🎪',
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
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2a0914 25%, #3b0c1d 50%, #480f23 75%, #0a0a14 100%)",
    "glow1": "#d6336c",
    "glow2": "#d65933",
    "particleBg": "rgba(214,51,108,0.3)",
    "gridImage": "linear-gradient(rgba(214,51,108,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(214,51,108,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(214,51,108,0.2), rgba(214,89,51,0.1))",
    "badgeBorder": "1px solid rgba(214,51,108,0.4)",
    "badgeColor": "#f0c1d2",
    "badgeShadow": "0 2px 12px rgba(214,51,108,0.15)",
    "dotBg": "#d6336c",
    "nameGrad": "linear-gradient(135deg, #f8e2ea 0%, #e2799e 35%, #d6336c 65%, #f0c1d2 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#e89cb6",
    "titleBadgeBg": "linear-gradient(135deg, rgba(214,51,108,0.2) 0%, rgba(214,89,51,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(214,51,108,0.4)",
    "titleBadgeColor": "#f0c1d2",
    "tagBg": "linear-gradient(135deg, rgba(214,51,108,0.12), rgba(214,51,108,0.06))",
    "tagBorder": "1px solid rgba(214,51,108,0.25)",
    "tagColor": "#e89cb6",
    "ringGrad": "linear-gradient(135deg, #d6336c, #d65933, #f0c1d2, #d6336c) border-box",
    "avatarShadow": "0 0 60px rgba(214,51,108,0.4), 0 0 120px rgba(214,51,108,0.15)",
    "placeholderBg": "linear-gradient(180deg, #440e21 0%, #260812 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(214,51,108,0.5))",
    "videoPlayBg": "rgba(214,51,108,0.85)",
    "videoFallback": "linear-gradient(135deg, #330a18, #4c0f25)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'BLACK SOULS 2',
        titleJp: 'BLACK SOULS II',
        meta: [
          { icon: "🎮", label: "主要登场作品", value: "寿司勇者トロ" },
          { icon: "🕹️", label: "类型：", value: "黑暗童话 RPG" },
          { icon: "💻", label: "平台：", value: "PC" },
          { icon: "🎡", label: "舞台：", value: "Queenland" }
        ],
        desc: '比一代更疯、更艳、更痛。红之偶像在游乐园里唱着歌，<span class="highlight">把最残酷的真相藏进最甜的旋律</span>。',
        tags: [
          { cls: "dark", text: "黑暗奇幻" },
          { cls: "dark", text: "同人" },
          { cls: "dark", text: "RPG" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '普利凯特 · 官方立绘' }
  ],
  videos: []
}
