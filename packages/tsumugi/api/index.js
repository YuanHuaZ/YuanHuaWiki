/**
 * tsumugi 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '紬文德斯',
  title: '岛上的寻我者',
  info: [
    { icon: '🎤', label: '声优', value: '高森奈津美', iconClass: 'purple' },
    { icon: '🌍', label: '血统', value: '德国血统', iconClass: 'pink' },
    { icon: '🏝️', label: '出身', value: '鸟白岛', iconClass: 'cyan' },
    { icon: '⛩️', label: '身份', value: '岛上神社相关', iconClass: 'purple' },
    { icon: '🔍', label: '目的', value: '寻找「自己」', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: 'Summer Pockets', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🌊 温柔', '❓ 迷茫', '📖 爱读书', '⏳ 只属于夏天'],
      content: [
        '紬说话很慢，句子之间留着空白，<span class="highlight">像在边想边说</span>。她对岛上的一切都好奇。',
        '她一直在找「自己」——<span class="highlight-pink">找自己是谁、从哪来、为什么在这里</span>。这份迷茫是她全部的魅力。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 浅色长发', '👁️ 温和的眼', '👗 白色连衣裙', '🌊 海风与光'],
      content: [
        '浅色长发，穿白色连衣裙，站在夏天的海边<span class="highlight">像一块被晒暖的石头</span>。',
        '她身上总有一点不属于这个季节的气息，<span class="highlight-pink">看得越久越明显</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏝️ 鸟白岛', '🌍 德国血统', '📚 寻找记忆', '⏳ 夏日限定'],
      content: [
        '她出现在鸟白岛的夏天，带着异国的血统和一段不完整的记忆。<span class="highlight">岛上的人似乎都认识她，又说不出她是谁</span>。',
        '她的存在与这座岛的夏天绑在一起。<span class="highlight-pink">夏天结束，很多东西就会消失</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🌊 夏天的岛', '📖 一起找答案', '🏮 祭典', '⏳ 必须告别'],
      content: [
        '男主角来到岛上过暑假，遇见她，然后一起<span class="highlight">把她的过去一块块拼回来</span>。',
        '越接近答案，越清楚这段日子有尽头。<span class="highlight-pink">这条线的主题是「明知会结束，还要不要开始」</span>。'
      ],
      quote: '这个夏天，可以一直持续下去就好了。',
      quoteAuthor: '—— 紬文德斯'
    }
  ],
  abilities: [
    { icon: '🌊', name: '岛的记忆', grade: 'S', desc: '她与这座岛的历史相连，<span class="highlight">能找到别人找不到的东西</span>。' },
    { icon: '📖', name: '温柔的倾听', grade: 'A', desc: '安静地听人说话，<span class="highlight-pink">比任何安慰都有效</span>。' },
    { icon: '⏳', name: '夏日限定', grade: 'EX', desc: '只在这个季节存在，<span class="highlight">也因此格外用力地活着</span>。' }
  ],
  relationships: [
    { icon: '🏄', name: '鹰原羽依里', type: '同伴 / 恋人', desc: '陪她一起找答案的人，<span class="highlight">也是她最舍不得告别的人</span>。', cls: 'rel-romance' },
    { icon: '👧', name: '岛上的少女们', type: '朋友', desc: '夏天的同伴，<span class="highlight-pink">一起度过最短也最长的假期</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🌊',
  avatarSize: '145% auto',
  avatarBg: null,
  review: '一开始是因为白羽的颜值看的，不过第一次见到紬就喜欢上了，因为初见她表现出的是单纯开朗，先过完鸥的剧情后才发现，key社的剧情依旧不简单，果然一边过着欢快的暑假，另一边整成了悬疑，真相揭露后发现，紬只是真正的紬的布偶熊，对紬的执念让她化作紬的样子，但，即使如此，男主依旧表白了，你在我眼里你就是紬，一个活生生的人，紬也很想真的去体验人的生活，体验人的恋爱，但夏日结束她终归要离开，不过在这最后的几天，选择带她过完一年的节日，真的很感动，在最后选择当做紬的生日，在紬所唱的《紬的夏日》中紬消失了，仿佛与紬所经历的一切不过是一场梦，但眼角的泪，手中的玩偶熊，以及口中仍在继续唱着的歌说明紬是真实存在的。当紬见到了大紬，大紬说她所做的已经够多了，她也应该去体验自己的生活了，因为有她爱的人还在那里等她，当男主再次打开灯塔的门，她回来了。',
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '💬', label: '评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #0c2724 25%, #103732 50%, #14433d 75%, #0a0a14 100%)",
    "glow1": "#5ecfc0",
    "glow2": "#5e9ccf",
    "particleBg": "rgba(94,207,192,0.3)",
    "gridImage": "linear-gradient(rgba(94,207,192,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,207,192,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(94,207,192,0.2), rgba(94,156,207,0.1))",
    "badgeBorder": "1px solid rgba(94,207,192,0.4)",
    "badgeColor": "#c6ece7",
    "badgeShadow": "0 2px 12px rgba(94,207,192,0.15)",
    "dotBg": "#5ecfc0",
    "nameGrad": "linear-gradient(135deg, #e5f6f3 0%, #83d8cd 35%, #5ecfc0 65%, #c6ece7 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#a3e0d8",
    "titleBadgeBg": "linear-gradient(135deg, rgba(94,207,192,0.2) 0%, rgba(94,156,207,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(94,207,192,0.4)",
    "titleBadgeColor": "#c6ece7",
    "tagBg": "linear-gradient(135deg, rgba(94,207,192,0.12), rgba(94,207,192,0.06))",
    "tagBorder": "1px solid rgba(94,207,192,0.25)",
    "tagColor": "#a3e0d8",
    "ringGrad": "linear-gradient(135deg, #5ecfc0, #5e9ccf, #c6ece7, #5ecfc0) border-box",
    "avatarShadow": "0 0 60px rgba(94,207,192,0.4), 0 0 120px rgba(94,207,192,0.15)",
    "placeholderBg": "linear-gradient(180deg, #133f39 0%, #0b2320 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(94,207,192,0.5))",
    "videoPlayBg": "rgba(94,207,192,0.85)",
    "videoFallback": "linear-gradient(135deg, #0e2f2b, #154740)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'Summer Pockets',
        titleJp: 'Summer Pockets',
        meta: [
          { icon: "🎮", label: "主要登场作品", value: "Key" },
          { icon: "📅", label: "发售：", value: "2018年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '一个只有夏天的小岛，和几个把遗憾藏在蝉鸣里的女孩。<span class="highlight">紬的线最像一场会醒的梦</span>。',
        tags: [
          { cls: "dark", text: "治愈" },
          { cls: "dark", text: "夏日" },
          { cls: "dark", text: "催泪" }
        ],
        action: null
      }
    ],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'Summer Pockets',
        titleJp: 'Summer Pockets',
        meta: [
          { icon: "🎮", label: "主要登场作品", value: "Key" },
          { icon: "📅", label: "发售：", value: "2018年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '一个只有夏天的小岛，和几个把遗憾藏在蝉鸣里的女孩。<span class="highlight">紬的线最像一场会醒的梦</span>。',
        tags: [
          { cls: "dark", text: "治愈" },
          { cls: "dark", text: "夏日" },
          { cls: "dark", text: "催泪" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '紬文德斯 · 官方立绘' }
  ],
  videos: []
}
