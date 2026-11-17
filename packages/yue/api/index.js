/**
 * yue 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '月',
  title: '月之吸血鬼',
  info: [
    { icon: '🎤', label: '声优', value: '大西沙织', iconClass: 'purple' },
    { icon: '🧛', label: '种族', value: '吸血鬼（真祖）', iconClass: 'pink' },
    { icon: '🏰', label: '出身', value: '迷宫深处的王座', iconClass: 'cyan' },
    { icon: '📺', label: '所属作品', value: '平凡职业造就世界最强', iconClass: 'purple' },
    { icon: '💗', label: '关系', value: '南云始的眷属 / 恋人', iconClass: 'pink' },
    { icon: '🎯', label: '角色定位', value: '女主角之一', iconClass: 'purple' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🌙 沉静寡言', '💞 一心一意', '🍬 意外的软', '👑 王族的骄傲'],
      content: [
        '月是那种<span class="highlight">话不多但每一句都算数</span>的人。她被封印了几百年，见惯了背叛，所以一旦认定某个人，就再也不会松手。',
        '对外人冷淡到近乎傲慢，转头对着始却会<span class="highlight-pink">露出那种软到不像话的表情</span>。这种反差是她最要命的地方。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 银白长发', '👁️ 红色眼眸', '👗 黑色礼裙', '🦇 吸血鬼之翼'],
      content: [
        '银白色的长发一直垂到脚踝，红色的瞳孔在暗处会微微发亮。她穿黑色礼裙，站在迷宫深处的王座前，<span class="highlight">像一幅被封印的画</span>。',
        '作为真祖吸血鬼，她能展开黑色的翼。战斗时的姿态<span class="highlight-pink">优雅得不像在杀人</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏰 迷宫的囚徒', '🧛 真祖吸血鬼', '⛓️ 被封印数百年', '🩸 与始的契约'],
      content: [
        '她本是吸血鬼的真祖，却因故被<span class="highlight">封印在奥尔库斯大迷宫的深处</span>，在那里等了不知多少年。',
        '南云始一行人闯到最深处时，她提出以「成为眷属」为条件换取自由。这不是屈服，而是她<span class="highlight-pink">对强者的认可</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🗡️ 迷宫相遇', '🩸 血之契约', '🌍 重返地面', '👑 王座之后'],
      content: [
        '始在迷宫最深处见到她时，她已经被困了几百年。<span class="highlight">一次交手，一场谈判，一份契约</span>，两人的人生从此绑在一起。',
        '她跟着始离开迷宫，第一次看见阳光、吃到甜食、被人当作同伴。对月来说，<span class="highlight-pink">始就是把她从时间里捞出来的那个人</span>。'
      ],
      quote: '我的主人，只有你一个。',
      quoteAuthor: '—— 月'
    }
  ],
  abilities: [
    { icon: '🩸', name: '吸血鬼真祖', grade: 'EX', desc: '超越常理的肉体与再生能力，<span class="highlight">在黑暗中几乎无解</span>。' },
    { icon: '🌙', name: '魔力操作', grade: 'S', desc: '数百年的积累，让她对魔力的掌控<span class="highlight-pink">精确到毫厘</span>。' },
    { icon: '🦇', name: '眷属契约', grade: 'A', desc: '通过血之契约建立主从关系，<span class="highlight">也是她与始的纽带</span>。' }
  ],
  relationships: [
    { icon: '🗡️', name: '南云始', type: '主人 / 恋人', desc: '把她从迷宫里带出来的人。<span class="highlight">她的一切都向他倾斜</span>。', cls: 'rel-romance' },
    { icon: '🐰', name: '希雅', type: '同伴', desc: '同为始的队伍成员，<span class="highlight-pink">日常斗嘴的伙伴</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🌙',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #170f24 25%, #211533 50%, #28193e 75%, #0a0a14 100%)",
    "glow1": "#a78bd0",
    "glow2": "#cf8bd0",
    "particleBg": "rgba(167,139,208,0.3)",
    "gridImage": "linear-gradient(rgba(167,139,208,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,208,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(167,139,208,0.2), rgba(207,139,208,0.1))",
    "badgeBorder": "1px solid rgba(167,139,208,0.4)",
    "badgeColor": "#d6cae7",
    "badgeShadow": "0 2px 12px rgba(167,139,208,0.15)",
    "dotBg": "#a78bd0",
    "nameGrad": "linear-gradient(135deg, #ece7f4 0%, #a78cce 35%, #a78bd0 65%, #d6cae7 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#bdaad9",
    "titleBadgeBg": "linear-gradient(135deg, rgba(167,139,208,0.2) 0%, rgba(207,139,208,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(167,139,208,0.4)",
    "titleBadgeColor": "#d6cae7",
    "tagBg": "linear-gradient(135deg, rgba(167,139,208,0.12), rgba(167,139,208,0.06))",
    "tagBorder": "1px solid rgba(167,139,208,0.25)",
    "tagColor": "#bdaad9",
    "ringGrad": "linear-gradient(135deg, #a78bd0, #cf8bd0, #d6cae7, #a78bd0) border-box",
    "avatarShadow": "0 0 60px rgba(167,139,208,0.4), 0 0 120px rgba(167,139,208,0.15)",
    "placeholderBg": "linear-gradient(180deg, #26183a 0%, #150d21 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(167,139,208,0.5))",
    "videoPlayBg": "rgba(167,139,208,0.85)",
    "videoFallback": "linear-gradient(135deg, #1c122c, #2a1a41)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '平凡职业造就世界最强',
        titleJp: 'ありふれた職業で世界最強',
        meta: [
          { icon: "🏢", label: "制作：", value: "asread × WHITE FOX" },
          { icon: "📅", label: "播出：", value: "2019年7月" },
          { icon: "📺", label: "集数：", value: "全13话" },
          { icon: "🎤", label: "CV：", value: "大西沙织" }
        ],
        desc: '被同学推落深渊的「无能」少年，在迷宫最底层爬成最强。而他在最深处遇到的，是<span class="highlight">被封印了几百年的吸血鬼真祖</span>。',
        tags: [
          { cls: "dark", text: "异世界" },
          { cls: "dark", text: "战斗" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '典型的「强强联合」型女主：不拖后腿、不无理取闹，认定了就一路跟到底。迷宫那段她从王座上站起来、决定跟人走的画面，我记了很久。'
}
