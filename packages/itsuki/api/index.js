/**
 * itsuki 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '中野五月',
  title: '五胞胎的五女',
  info: [
    { icon: '🎂', label: '生日', value: '5月5日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '159cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '水濑祈', iconClass: 'cyan' },
    { icon: '👨‍👩‍👧', label: '身份', value: '中野家五女', iconClass: 'purple' },
    { icon: '🎯', label: '目标', value: '成为教师', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '五等分的花嫁', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🍖 吃到停不下来', '📚 一本正经', '💢 容易炸毛', '💗 笨拙的关心'],
      content: [
        '五月是五姐妹里最「正」的那个：认真、守规矩、说话直来直去，<span class="highlight">看不惯的事一定当场说出来</span>。',
        '但她的正直经常和食欲打架。手里永远拿着肉包，<span class="highlight-pink">生气的时候也在吃</span>，这是她最有辨识度的地方。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 红棕色长发', '👁️ 蓝色眼眸', '⭐ 星星发夹', '🎀 微卷发尾'],
      content: [
        '红棕色的长发垂到腰际，发尾微微卷起，一侧别着星星发夹。<span class="highlight">五姐妹同脸不同气质</span>，她是最端庄的那个。',
        '校服穿得最规整，说话时习惯双手抱胸。手里十次有八次<span class="highlight-pink">拿着吃的</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['👩‍👧 母亲是教师', '🏫 成绩中上', '🍱 家里掌勺', '💭 想站上讲台'],
      content: [
        '母亲中野零奈是教师，去世后五月<span class="highlight">把「成为像母亲那样的老师」当成了目标</span>。',
        '五姐妹里她的成绩不算拔尖，却是最肯下笨功夫的那个。她的努力<span class="highlight-pink">从来不是天赋型的漂亮</span>，而是一页一页啃出来的。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🍱 家教风太郎', '💢 一开始最抗拒', '📖 一起补习', '🎓 走向讲台'],
      content: [
        '上杉风太郎来当家教时，五月是<span class="highlight">反对得最激烈的那一个</span>，甚至当面把话说得很绝。',
        '但在一次次补习和相处里，她慢慢承认了对方的能力，也开始正视自己。<span class="highlight-pink">她的成长线是五姐妹里最「踏实」的</span>。'
      ],
      quote: '我要成为像妈妈那样的老师。',
      quoteAuthor: '—— 中野五月'
    }
  ],
  abilities: [
    { icon: '📚', name: '笨功夫', grade: 'A', desc: '不是天才型选手，但<span class="highlight">能把不会的东西一点点啃会</span>。' },
    { icon: '🍖', name: '食欲', grade: 'EX', desc: '五姐妹里最能吃的一个，<span class="highlight-pink">肉包是她的本体</span>。' },
    { icon: '🗣️', name: '直率', grade: 'S', desc: '有话直说，不绕弯子。<span class="highlight">这份正直有时伤人，有时救人</span>。' }
  ],
  relationships: [
    { icon: '📖', name: '上杉风太郎', type: '家教 / 在意的人', desc: '从最抗拒到最信任，<span class="highlight">她的态度转变最明显</span>。', cls: 'rel-romance' },
    { icon: '👭', name: '一花 / 二乃 / 三玖 / 四叶', type: '姐妹', desc: '五胞胎，<span class="highlight-pink">同脸不同性格</span>，吵吵闹闹但彼此支撑。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🍖',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2b080e 25%, #3c0b14 50%, #490e18 75%, #0a0a14 100%)",
    "glow1": "#e0576f",
    "glow2": "#e08f57",
    "particleBg": "rgba(224,87,111,0.3)",
    "gridImage": "linear-gradient(rgba(224,87,111,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(224,87,111,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(224,87,111,0.2), rgba(224,143,87,0.1))",
    "badgeBorder": "1px solid rgba(224,87,111,0.4)",
    "badgeColor": "#f1c0c9",
    "badgeShadow": "0 2px 12px rgba(224,87,111,0.15)",
    "dotBg": "#e0576f",
    "nameGrad": "linear-gradient(135deg, #f8e2e6 0%, #e4778a 35%, #e0576f 65%, #f1c0c9 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#e99aa8",
    "titleBadgeBg": "linear-gradient(135deg, rgba(224,87,111,0.2) 0%, rgba(224,143,87,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(224,87,111,0.4)",
    "titleBadgeColor": "#f1c0c9",
    "tagBg": "linear-gradient(135deg, rgba(224,87,111,0.12), rgba(224,87,111,0.06))",
    "tagBorder": "1px solid rgba(224,87,111,0.25)",
    "tagColor": "#e99aa8",
    "ringGrad": "linear-gradient(135deg, #e0576f, #e08f57, #f1c0c9, #e0576f) border-box",
    "avatarShadow": "0 0 60px rgba(224,87,111,0.4), 0 0 120px rgba(224,87,111,0.15)",
    "placeholderBg": "linear-gradient(180deg, #450d17 0%, #27070d 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(224,87,111,0.5))",
    "videoPlayBg": "rgba(224,87,111,0.85)",
    "videoFallback": "linear-gradient(135deg, #340a11, #4d0e19)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '五等分的花嫁',
        titleJp: '五等分の花嫁',
        meta: [
          { icon: "🏢", label: "制作：", value: "手冢 Production" },
          { icon: "📅", label: "播出：", value: "2019年1月" },
          { icon: "📺", label: "集数：", value: "全12话" },
          { icon: "🎤", label: "CV：", value: "水濑祈" }
        ],
        desc: '五胞胎姐妹与一个穷家教。成绩、家计、恋爱，全都要一起解决——<span class="highlight">而五月负责把最难听的话先说出口</span>。',
        tags: [
          { cls: "dark", text: "校园" },
          { cls: "dark", text: "恋爱" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '五姐妹里最容易被低估的一位。她不够甜、不够萌，甚至有点倔，但她是唯一一个从头到尾都在认真规划未来的。那份「笨拙的正经」很难不喜欢。'
}
