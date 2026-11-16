/**
 * ema 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '樱羽艾玛',
  title: '囚犯编号 658',
  info: [
    { icon: '🎂', label: '生日', value: '3月5日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '156cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '三木谷奈奈', iconClass: 'cyan' },
    { icon: '🔢', label: '囚犯编号', value: '658', iconClass: 'purple' },
    { icon: '📖', label: '原罪', value: '受厌恶之人', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '魔法少女的魔女审判', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😊 表面开朗', '🙈 害怕被讨厌', '🧠 头脑聪明', '🖤 会故意装笨'],
      content: [
        '艾玛看起来是那种「阳光、好相处、永远不会生气」的孩子。<span class="highlight">但那是一种防御</span>。',
        '她极度怕被讨厌、怕被丢下。为了不被排斥，她会<span class="highlight-pink">故意做错事、故意装笨</span>，把自己变成没有威胁的人。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 白短发（发梢樱花色）', '👁️ 樱粉眼眸', '🎀 贝雷帽', '👗 樱花白裙'],
      content: [
        '白色短发，发梢染着樱花色，眼睛也是樱粉的。<span class="highlight">右侧鬓发比左侧长，是她的记号</span>。',
        '贝雷帽上系着黑色缎带，点缀樱花。笑起来有虎牙，<span class="highlight-pink">整个人的配色就是一朵樱花</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏝️ 孤岛牢狱', '⚖️ 预备魔女', '🩸 魔女因子', '💔 月代雪事件'],
      content: [
        '她体内被检测出「魔女因子」，和其他十二位少女一起被关在孤岛牢狱，<span class="highlight">等待一场叫「魔女审判」的杀戮游戏</span>。',
        '初中时她没能为被霸凌的好友月代雪站出来。<span class="highlight-pink">那件事成了她的原罪</span>，也成了她记忆里的洞。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🌙 醒来在牢房', '🔍 搜查与反驳', '⚖️ 魔女审判', '🌸 与希罗和解'],
      content: [
        '故事从她在昏暗牢房里醒来开始。<span class="highlight">每一起命案之后，她都必须找出真凶</span>。',
        '她怕被讨厌，却在关键时刻爆发出惊人的推理力。<span class="highlight-pink">最终她鼓起勇气向希罗道歉，两人重归于好</span>。'
      ],
      quote: '大家都去死就好了。',
      quoteAuthor: '—— 樱羽艾玛'
    }
  ],
  abilities: [
    { icon: '🔍', name: '搜查', grade: 'EX', desc: '现场调查与证据整理，<span class="highlight">审判前就把答案握在手里</span>。' },
    { icon: '🧠', name: '反驳', grade: 'S', desc: '抓住证词里的矛盾，<span class="highlight-pink">一句话掀翻整段讨论</span>。' },
    { icon: '🌸', name: '魔女杀手', grade: '??', desc: '完全魔女化后能瞬间杀死带有魔女因子的个体，<span class="highlight">代价是她自己</span>。' }
  ],
  relationships: [
    { icon: '🖤', name: '二阶堂希罗', type: '挚友 / 决裂', desc: '曾托付她守护月代雪的人，<span class="highlight">也是她最不敢面对的人</span>。', cls: 'rel-friend' },
    { icon: '🕯️', name: '月代雪', type: '好友', desc: '被她「视而不见」的那个人，<span class="highlight-pink">她原罪的源头</span>。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🌸',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2f040f 25%, #420615 50%, #50071a 75%, #0a0a14 100%)",
    "glow1": "#f58fa9",
    "glow2": "#f5b08f",
    "particleBg": "rgba(245,143,169,0.3)",
    "gridImage": "linear-gradient(rgba(245,143,169,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,143,169,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(245,143,169,0.2), rgba(245,176,143,0.1))",
    "badgeBorder": "1px solid rgba(245,143,169,0.4)",
    "badgeColor": "#f7bbca",
    "badgeShadow": "0 2px 12px rgba(245,143,169,0.15)",
    "dotBg": "#f58fa9",
    "nameGrad": "linear-gradient(135deg, #fbdfe6 0%, #f06b8d 35%, #f58fa9 65%, #f7bbca 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#f391aa",
    "titleBadgeBg": "linear-gradient(135deg, rgba(245,143,169,0.2) 0%, rgba(245,176,143,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(245,143,169,0.4)",
    "titleBadgeColor": "#f7bbca",
    "tagBg": "linear-gradient(135deg, rgba(245,143,169,0.12), rgba(245,143,169,0.06))",
    "tagBorder": "1px solid rgba(245,143,169,0.25)",
    "tagColor": "#f391aa",
    "ringGrad": "linear-gradient(135deg, #f58fa9, #f5b08f, #f7bbca, #f58fa9) border-box",
    "avatarShadow": "0 0 60px rgba(245,143,169,0.4), 0 0 120px rgba(245,143,169,0.15)",
    "placeholderBg": "linear-gradient(180deg, #4b0718 0%, #2a040e 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(245,143,169,0.5))",
    "videoPlayBg": "rgba(245,143,169,0.85)",
    "videoFallback": "linear-gradient(135deg, #380512, #54081b)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '魔法少女的魔女审判',
        titleJp: '魔法少女の魔女裁判',
        meta: [
          { icon: "🎮", label: "开发：", value: "Acacia" },
          { icon: "📅", label: "发售：", value: "2025年7月18日" },
          { icon: "🕹️", label: "类型：", value: "文字冒险 / 推理" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '十三个携带魔女因子的少女被关进孤岛牢狱。每死一个人，就要开一次<span class="highlight">魔女审判</span>。',
        tags: [
          { cls: "dark", text: "悬疑" },
          { cls: "dark", text: "哥特" },
          { cls: "dark", text: "推理" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '2025 年最让我意外的剧本。艾玛那种「明明很聪明却拼命装笨」的写法非常扎人——她不是被害者模板，她是带着罪活着的人。'
}
