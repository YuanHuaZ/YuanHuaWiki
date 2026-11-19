/**
 * kotoko 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '岩永琴子',
  title: '妖怪们的智慧之神',
  info: [
    { icon: '🎂', label: '年龄', value: '初登场 17 岁', iconClass: 'purple' },
    { icon: '🎤', label: '声优', value: '鬼头明里', iconClass: 'pink' },
    { icon: '🦯', label: '特征', value: '右眼义眼 / 左腿义肢', iconClass: 'cyan' },
    { icon: '👑', label: '身份', value: '妖怪的智慧之神', iconClass: 'purple' },
    { icon: '💗', label: '恋人', value: '樱川九郎', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '虚构推理', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🧠 思维极快', '🗯️ 满口黄段子', '👑 大小姐做派', '💗 死缠烂打'],
      content: [
        '琴子最出名的是那张嘴：<span class="highlight">正经的推理和糟糕的玩笑混在一起</span>，能在同一句话里把气氛搅乱又拉回来。',
        '她思维快到离谱，能凭一己之力构建一整套严密的谎言去「解释」真相。代价是<span class="highlight-pink">每次推完都要睡很久</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['🎩 贝雷帽', '🦯 手杖', '💇 金色卷发', '👗 大小姐裙装'],
      content: [
        '个子小得总被当成小孩，金发卷曲，戴贝雷帽、拄手杖，<span class="highlight">一身大小姐打扮</span>。',
        '右眼是义眼，左腿是义肢。她说手杖只是为了让父母安心——<span class="highlight-pink">真跑起来 50 米只要 9 秒多</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['👻 11 岁被妖怪掳走', '🩸 以单眼单脚为代价', '⚖️ 成为智慧之神', '🕵️ 解决怪异纠纷'],
      content: [
        '11 岁那年她被妖怪们带走，以<span class="highlight">失去右眼和左腿</span>为代价，成为它们的「智慧之神」与仲裁者。',
        '从此她替妖怪解决纠纷，也借妖怪的情报解决人间的事件。她是<span class="highlight-pink">人与怪异之间唯一的翻译</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏥 医院一见钟情', '💗 向九郎告白', '🗯️ 虚构的真相', '🌙 一起面对怪异'],
      content: [
        '她 15 岁在医院遇见樱川九郎，一见钟情，两年后直接告白——<span class="highlight">成功的</span>。',
        '此后她拉着这个连怪异都害怕的男人，一起处理各种离奇事件。她的做法不是揭穿真相，而是<span class="highlight-pink">编一个更合理的「真相」让人接受</span>。'
      ],
      quote: '真相是什么并不重要，重要的是让人相信的那个故事。',
      quoteAuthor: '—— 岩永琴子'
    }
  ],
  abilities: [
    { icon: '👻', name: '与妖怪沟通', grade: 'EX', desc: '能看见、听见、指挥遍布各处的妖怪，<span class="highlight">情报网覆盖整座城市</span>。' },
    { icon: '🧠', name: '虚构推理', grade: 'EX', desc: '构建严密谎言的能力。<span class="highlight-pink">比真相更能说服人的「真相」</span>。' },
    { icon: '🦯', name: '妖怪的加护', grade: 'A', desc: '被妖怪们称作「公主」，<span class="highlight">关键时刻总有人替她挡下</span>。' }
  ],
  relationships: [
    { icon: '🖤', name: '樱川九郎', type: '恋人', desc: '连怪异都惧怕的男人。<span class="highlight">她死缠烂打追到手的唯一目标</span>。', cls: 'rel-romance' },
    { icon: '👮', name: '弓原纱季', type: '情敌 / 协助者', desc: '九郎的前女友，<span class="highlight-pink">嘴上嫌弃却总在帮忙</span>。', cls: 'rel-other' },
    { icon: '👻', name: '妖怪们', type: '臣下 / 家人', desc: '把她当成智慧之神，<span class="highlight">也是她真正的靠山</span>。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🎩',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #160c27 25%, #1e1037 50%, #251443 75%, #0a0a14 100%)",
    "glow1": "#9d7bd8",
    "glow2": "#d37bd8",
    "particleBg": "rgba(157,123,216,0.3)",
    "gridImage": "linear-gradient(rgba(157,123,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(157,123,216,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(157,123,216,0.2), rgba(211,123,216,0.1))",
    "badgeBorder": "1px solid rgba(157,123,216,0.4)",
    "badgeColor": "#d4c6ec",
    "badgeShadow": "0 2px 12px rgba(157,123,216,0.15)",
    "dotBg": "#9d7bd8",
    "nameGrad": "linear-gradient(135deg, #ebe5f6 0%, #a283d8 35%, #9d7bd8 65%, #d4c6ec 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#baa3e1",
    "titleBadgeBg": "linear-gradient(135deg, rgba(157,123,216,0.2) 0%, rgba(211,123,216,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(157,123,216,0.4)",
    "titleBadgeColor": "#d4c6ec",
    "tagBg": "linear-gradient(135deg, rgba(157,123,216,0.12), rgba(157,123,216,0.06))",
    "tagBorder": "1px solid rgba(157,123,216,0.25)",
    "tagColor": "#baa3e1",
    "ringGrad": "linear-gradient(135deg, #9d7bd8, #d37bd8, #d4c6ec, #9d7bd8) border-box",
    "avatarShadow": "0 0 60px rgba(157,123,216,0.4), 0 0 120px rgba(157,123,216,0.15)",
    "placeholderBg": "linear-gradient(180deg, #23133f 0%, #140a23 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(157,123,216,0.5))",
    "videoPlayBg": "rgba(157,123,216,0.85)",
    "videoFallback": "linear-gradient(135deg, #1a0e2f, #271547)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '虚构推理',
        titleJp: '虚構推理',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "Brain's Base" },
          { icon: "📅", label: "播出：", value: "2020年1月 / 2023年1月" },
          { icon: "📺", label: "集数：", value: "两季各 12 话" },
          { icon: "🎤", label: "CV：", value: "鬼头明里" }
        ],
        desc: '成为妖怪智慧之神的少女，与让怪异恐惧的男人，一起处理离奇事件。<span class="highlight">推理的终点不是真相，而是「让人信服的故事」</span>。',
        tags: [
          { cls: "dark", text: "悬疑" },
          { cls: "dark", text: "奇幻" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '岩永琴子 · 官方立绘' }
  ],
  videos: []
}
