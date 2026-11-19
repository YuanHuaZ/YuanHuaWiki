/**
 * aya 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'

export default {
  ...meta,
  nameJp: '丸山彩',
  title: 'Pastel*Palettes 主唱',
  info: [
    { icon: '🎂', label: '生日', value: '12月27日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '156cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '前岛亚美', iconClass: 'cyan' },
    { icon: '🎸', label: '乐队', value: 'Pastel*Palettes（主唱兼队长）', iconClass: 'purple' },
    { icon: '🏫', label: '学校', value: '花咲川女子学园', iconClass: 'pink' },
    { icon: '🍳', label: '喜欢', value: '蛋包饭、汉堡排', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['✨ 拼命努力', '😭 泪点极低', '🔍 自搜中毒', '💗 憧憬偶像'],
      content: [
        '彩是个彻头彻尾的努力家。她因为憧憬偶像而进入艺能界，当了三年练习生才拿到主唱的位置，<span class="highlight">全靠一股不服输的劲</span>。',
        '但她的内核非常脆弱：容易怯场、即兴发挥一塌糊涂、被捉弄就哭。<span class="highlight-pink">看到「可爱的人在努力」会直接哭出来</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 粉色中长发', '👁️ 粉色眼眸', '🎀 演出双马尾', '👗 偶像装'],
      content: [
        '柔和的粉发垂到肩头，发尾微卷，刘海齐平略带斜分。<span class="highlight">平时披发，上台才扎成高双马尾</span>。',
        '常服偏爱浅色、碎花和首饰。她的自我介绍词是<span class="highlight-pink">「丸山之上缤纷彩！我是丸山彩！」</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🎸 偶像乐队主唱', '🏢 艺能事务所', '🍔 快餐店打工', '📱 网络自搜'],
      content: [
        'Pastel*Palettes 是事务所策划的偶像乐队，彩担任主唱兼队长。<span class="highlight">她不是天赋型，是被推上去的</span>。',
        '为了生活她还在快餐店打工，和松原花音是同事。她没变装也不太会被认出来——<span class="highlight-pink">这件事让她相当不甘心</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🎬 出道', '😰 怯场', '🌟 五人成团', '🎤 站上舞台'],
      content: [
        '故事从她第一次站上舞台开始：紧张、失误、被观众质疑，<span class="highlight">然后第二天继续练</span>。',
        '五个性格完全不同的人被凑成一支乐队，从互相不合到彼此托底。<span class="highlight-pink">彩是那个把大家黏起来的人</span>。'
      ],
      quote: '丸山之上缤纷彩！我是丸山彩！',
      quoteAuthor: '—— 丸山彩'
    }
  ],
  abilities: [
    { icon: '🎤', name: '主唱', grade: 'A', desc: '清亮又带点甜的声线，<span class="highlight">现场越唱越稳</span>。' },
    { icon: '💪', name: '努力', grade: 'EX', desc: '天赋不够就用练习填。<span class="highlight-pink">她的成长全是汗水堆的</span>。' },
    { icon: '😭', name: '共情', grade: 'S', desc: '看到别人拼命就会哭，<span class="highlight">也因此最能接住队友的情绪</span>。' }
  ],
  relationships: [
    { icon: '🎸', name: '冰川日菜', type: '队友', desc: '天才吉他手，<span class="highlight">最爱捉弄她的人</span>。', cls: 'rel-friend' },
    { icon: '🎹', name: '白鹭千圣', type: '队友', desc: '冷静可靠的伙伴，<span class="highlight-pink">彩经常依赖她</span>。', cls: 'rel-friend' },
    { icon: '🍔', name: '松原花音', type: '同事 / 队友', desc: '一起打工的温柔同伴，<span class="highlight">两人一起慌一起撑</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🎤',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2e0517 25%, #400720 50%, #4e0927 75%, #0a0a14 100%)",
    "glow1": "#f49ac1",
    "glow2": "#f4a89a",
    "particleBg": "rgba(244,154,193,0.3)",
    "gridImage": "linear-gradient(rgba(244,154,193,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,154,193,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(244,154,193,0.2), rgba(244,168,154,0.1))",
    "badgeBorder": "1px solid rgba(244,154,193,0.4)",
    "badgeColor": "#f6bcd5",
    "badgeShadow": "0 2px 12px rgba(244,154,193,0.15)",
    "dotBg": "#f49ac1",
    "nameGrad": "linear-gradient(135deg, #fae0eb 0%, #ed6da5 35%, #f49ac1 65%, #f6bcd5 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#f193bc",
    "titleBadgeBg": "linear-gradient(135deg, rgba(244,154,193,0.2) 0%, rgba(244,168,154,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(244,154,193,0.4)",
    "titleBadgeColor": "#f6bcd5",
    "tagBg": "linear-gradient(135deg, rgba(244,154,193,0.12), rgba(244,154,193,0.06))",
    "tagBorder": "1px solid rgba(244,154,193,0.25)",
    "tagColor": "#f193bc",
    "ringGrad": "linear-gradient(135deg, #f49ac1, #f4a89a, #f6bcd5, #f49ac1) border-box",
    "avatarShadow": "0 0 60px rgba(244,154,193,0.4), 0 0 120px rgba(244,154,193,0.15)",
    "placeholderBg": "linear-gradient(180deg, #4a0824 0%, #290514 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(244,154,193,0.5))",
    "videoPlayBg": "rgba(244,154,193,0.85)",
    "videoFallback": "linear-gradient(135deg, #37061b, #530929)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'BanG Dream!',
        titleJp: 'バンドリ！',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "ISSEN × 三次元" },
          { icon: "📅", label: "播出：", value: "2017年1月" },
          { icon: "🎤", label: "CV：", value: "前岛亚美" }
        ],
        desc: '少女乐队企划的核心动画。偶像乐队 Pastel*Palettes 的主唱，<span class="highlight">用努力补天赋</span>的那一个。',
        tags: [
          { cls: "dark", text: "音乐" },
          { cls: "dark", text: "校园" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'BanG Dream!',
        titleJp: 'バンドリ！',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "ISSEN × 三次元" },
          { icon: "📅", label: "播出：", value: "2017年1月" },
          { icon: "🎤", label: "CV：", value: "前岛亚美" }
        ],
        desc: '少女乐队企划的核心动画。偶像乐队 Pastel*Palettes 的主唱，<span class="highlight">用努力补天赋</span>的那一个。',
        tags: [
          { cls: "dark", text: "音乐" },
          { cls: "dark", text: "校园" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '丸山彩 · 官方立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '丸山彩 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '丸山彩 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '丸山彩 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '丸山彩 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '丸山彩 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '丸山彩 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '丸山彩 · 美图 07' },
      { isImage: true, bg: img9, badge: '美图', overlay: '丸山彩 · 美图 08' },
      { isImage: true, bg: img10, badge: '美图', overlay: '丸山彩 · 美图 09' },
      { isImage: true, bg: img11, badge: '美图', overlay: '丸山彩 · 美图 10' },
      { isImage: true, bg: img12, badge: '美图', overlay: '丸山彩 · 美图 11' }
  ],
  videos: []
}
