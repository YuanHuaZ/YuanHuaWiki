/**
 * azusa 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '布良梓',
  title: '第二宿舍宿舍长',
  info: [
    { icon: '🎤', label: '声优', value: '佐藤しずく（南条爱乃）', iconClass: 'purple' },
    { icon: '🏠', label: '身份', value: '月长学院第二宿舍宿舍长', iconClass: 'pink' },
    { icon: '🏛️', label: '所属', value: '特区管理事务局 风纪班', iconClass: 'cyan' },
    { icon: '🧬', label: '种族', value: '人类', iconClass: 'purple' },
    { icon: '🎯', label: '特技', value: '手枪狙击（风纪班 No.1）', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: 'DRACU-RIOT!', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😊 开朗活泼', '🫶 爱照顾人', '👶 讨厌被当小孩', '🧼 洁癖'],
      content: [
        '梓是那种<span class="highlight">把「照顾人」当成本能</span>的女孩。宿舍里谁出事，第一个冲过去的永远是她。',
        '但她极度讨厌被当成小孩子——幼儿体型是她的逆鳞。<span class="highlight-pink">一被当小孩就会认真生气</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 黑色短发', '👁️ 蓝色眼眸', '⛩️ 巫女服', '🧦 单根辫'],
      content: [
        '黑色短发，右侧留着一束较长的发，蓝色眼睛，个子很小。<span class="highlight">因为找不到合身的制服，出勤时穿的是巫女服</span>。',
        '这套巫女服不是装饰——她是对吸血鬼讨伐祭舞的舞姬，<span class="highlight-pink">也是本土的吸血鬼猎人</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏝️ 海上都市', '🏛️ 特区管理事务局', '🐺 吸血鬼猎人', '👵 安娜的外孙女'],
      content: [
        '故事发生在海上都市，吸血鬼与人类共处。梓是管理局风纪班的战斗人员，<span class="highlight">也是宿舍里唯一的人类少女</span>。',
        '她的外婆是安娜·莱缇库鲁。这条血脉让她<span class="highlight-pink">既是管理者，也是猎人</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🔫 佑斗入班', '🩸 黑户问题', '💔 安娜之死', '🌊 人与吸血鬼'],
      content: [
        '男主角佑斗加入风纪班后，梓第一次有了后辈，<span class="highlight">开心得藏不住</span>。',
        '她个人线把整个世界的矛盾掀开：黑户问题、人类与吸血鬼的对立，直至安娜的牺牲。<span class="highlight-pink">这是全作最「重」的一条线</span>。'
      ],
      quote: '有困难的时候找我就对了！',
      quoteAuthor: '—— 布良梓'
    }
  ],
  abilities: [
    { icon: '🔫', name: '手枪狙击', grade: 'EX', desc: '风纪班第一的射击技术，<span class="highlight">特殊子弹可换多种效果</span>。' },
    { icon: '💃', name: '祭舞', grade: 'A', desc: '对吸血鬼讨伐的祭祀之舞，<span class="highlight-pink">也是她猎人身份的来源</span>。' },
    { icon: '🫶', name: '照顾人', grade: 'S', desc: '从做饭到安抚，<span class="highlight">宿舍里的万能担当</span>。' }
  ],
  relationships: [
    { icon: '🚹', name: '六连佑斗', type: '后辈 / 恋人', desc: '她第一个后辈，<span class="highlight">也是她拼命想保护的人</span>。', cls: 'rel-romance' },
    { icon: '👮', name: '矢来美羽', type: '同事', desc: '同为风纪班的人类，<span class="highlight-pink">并肩作战的搭档</span>。', cls: 'rel-friend' },
    { icon: '👵', name: '安娜·莱缇库鲁', type: '外婆', desc: '传奇的吸血鬼猎人，<span class="highlight">她血脉与宿命的起点</span>。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🔫',
  avatarSize: '145% auto',
  avatarBg: '#fff',
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #0b2528 25%, #0f3339 50%, #123e45 75%, #0a0a14 100%)",
    "glow1": "#35b6c9",
    "glow2": "#3560c9",
    "particleBg": "rgba(53,182,201,0.3)",
    "gridImage": "linear-gradient(rgba(53,182,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(53,182,201,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(53,182,201,0.2), rgba(53,96,201,0.1))",
    "badgeBorder": "1px solid rgba(53,182,201,0.4)",
    "badgeColor": "#c4e8ed",
    "badgeShadow": "0 2px 12px rgba(53,182,201,0.15)",
    "dotBg": "#35b6c9",
    "nameGrad": "linear-gradient(135deg, #e4f4f6 0%, #7fd0db 35%, #35b6c9 65%, #c4e8ed 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#a1dae3",
    "titleBadgeBg": "linear-gradient(135deg, rgba(53,182,201,0.2) 0%, rgba(53,96,201,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(53,182,201,0.4)",
    "titleBadgeColor": "#c4e8ed",
    "tagBg": "linear-gradient(135deg, rgba(53,182,201,0.12), rgba(53,182,201,0.06))",
    "tagBorder": "1px solid rgba(53,182,201,0.25)",
    "tagColor": "#a1dae3",
    "ringGrad": "linear-gradient(135deg, #35b6c9, #3560c9, #c4e8ed, #35b6c9) border-box",
    "avatarShadow": "0 0 60px rgba(53,182,201,0.4), 0 0 120px rgba(53,182,201,0.15)",
    "placeholderBg": "linear-gradient(180deg, #113a41 0%, #0a2124 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(53,182,201,0.5))",
    "videoPlayBg": "rgba(53,182,201,0.85)",
    "videoFallback": "linear-gradient(135deg, #0d2c30, #134249)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'DRACU-RIOT!',
        titleJp: 'DRACU-RIOT!',
        meta: [
          { icon: "🎮", label: "主要登场作品", value: "ゆずソフト" },
          { icon: "📅", label: "发售：", value: "2012年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '海上都市里，人类与吸血鬼共存的实验。一个人类少女既是管理者，也是猎人，<span class="highlight">夹在两个种族之间</span>。',
        tags: [
          { cls: "dark", text: "吸血鬼" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "科幻" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '布良梓 · 官方立绘' }
  ],
  videos: []
}
