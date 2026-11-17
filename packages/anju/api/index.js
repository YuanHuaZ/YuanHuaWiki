/**
 * anju 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '隐杏珠',
  title: '柠檬水工厂 主音吉他',
  info: [
    { icon: '🎤', label: '声优', value: '天季ひより', iconClass: 'purple' },
    { icon: '🎸', label: '乐队', value: 'Lemonade Factory（主音吉他）', iconClass: 'pink' },
    { icon: '🏫', label: '学校', value: '鸾镜女学院', iconClass: 'cyan' },
    { icon: '💇', label: '发色', value: '紫发（粉发为接发）', iconClass: 'purple' },
    { icon: '🎧', label: '属性', value: '地雷系 / 优等生', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: 'LimeLight Lemonade Jam', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😤 小傲娇', '🎭 隐藏私生活', '🌀 内耗纠结', '💢 高攻低防'],
      content: [
        '杏珠是那种<span class="highlight">表面活泼、内里一直在纠结</span>的女孩。她喜欢恶作剧、爱挑逗人，但一被反击就紧张到不行。',
        '她把真实的自己藏得很深：地雷系、吉他、打工，全都不能说。这种内耗让她<span class="highlight-pink">重要的事总要拖到最后一刻才做</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 紫发 + 粉色接发', '👁️ 绿色眼眸', '🎀 双丸子头', '👗 地雷系穿搭'],
      content: [
        '本来的发色偏紫，那撮粉色是接上去的——<span class="highlight">是她「在外面做自己」的开关</span>。',
        '地雷系穿搭、贝雷帽、黑色过膝袜。在鸾镜学院里她会换回<span class="highlight-pink">优等生的乖巧样子</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🎸 父亲是乐队成员', '🏫 鸾镜女学院优等生', '🥤 便利店打工', '🎶 Lemonade Factory'],
      content: [
        '父亲以前是乐队成员，她从小接触吉他，也因此爱上了和同龄人不同的东西——<span class="highlight">于是被孤立，于是学会隐藏</span>。',
        '她是鸾镜女学院的优等生，成绩原本每科九十多。为了不遇到同校的大小姐同学，她跑去上班族常去的店打工，<span class="highlight-pink">还要求老板替她保密</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🥤 打工相识', '🎸 加入乐队', '💥 成绩下滑', '😭 当街大哭'],
      content: [
        '她因为憧憬主角在舞台上发光的样子，加入了「柠檬水工厂」，<span class="highlight">成了主音吉他手</span>。',
        '加入乐队后成绩暴跌、被老师约谈。意识到自己喜欢上主角之后，她在内耗中反复挣扎，最后<span class="highlight-pink">不小心把心意说漏了嘴，当场哭出来</span>。'
      ],
      quote: '我、我才没有在等你呢！',
      quoteAuthor: '—— 隐杏珠'
    }
  ],
  abilities: [
    { icon: '🎸', name: '主音吉他', grade: 'S', desc: '从小学起练出来的手艺，<span class="highlight">是她在舞台上唯一不伪装的部分</span>。' },
    { icon: '📚', name: '学力', grade: 'A', desc: '原本每科九十多的优等生，<span class="highlight-pink">只是后来被乐队拖垮了</span>。' },
    { icon: '🎭', name: '演技', grade: 'S', desc: '在学校演乖学生、在店里演普通人，<span class="highlight">切换自如却越来越累</span>。' }
  ],
  relationships: [
    { icon: '🏄', name: '冲浪雪鹰', type: '同事 / 恋人', desc: '打工时认识的男孩，<span class="highlight">把她拉进了乐队</span>。', cls: 'rel-romance' },
    { icon: '🎹', name: '阳见惠凪', type: '队友', desc: '乐队同伴，<span class="highlight-pink">看穿她的人之一</span>。', cls: 'rel-friend' },
    { icon: '🌙', name: '岛越月望', type: '同学 / 队友', desc: '同校的大小姐，<span class="highlight">让她既亲近又紧张</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🎸',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #240b28 25%, #320f39 50%, #3d1245 75%, #0a0a14 100%)",
    "glow1": "#c86bd8",
    "glow2": "#d86ba8",
    "particleBg": "rgba(200,107,216,0.3)",
    "gridImage": "linear-gradient(rgba(200,107,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,107,216,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(200,107,216,0.2), rgba(216,107,168,0.1))",
    "badgeBorder": "1px solid rgba(200,107,216,0.4)",
    "badgeColor": "#e7c4ed",
    "badgeShadow": "0 2px 12px rgba(200,107,216,0.15)",
    "dotBg": "#c86bd8",
    "nameGrad": "linear-gradient(135deg, #f4e4f6 0%, #ce7fdb 35%, #c86bd8 65%, #e7c4ed 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#d9a1e3",
    "titleBadgeBg": "linear-gradient(135deg, rgba(200,107,216,0.2) 0%, rgba(216,107,168,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(200,107,216,0.4)",
    "titleBadgeColor": "#e7c4ed",
    "tagBg": "linear-gradient(135deg, rgba(200,107,216,0.12), rgba(200,107,216,0.06))",
    "tagBorder": "1px solid rgba(200,107,216,0.25)",
    "tagColor": "#d9a1e3",
    "ringGrad": "linear-gradient(135deg, #c86bd8, #d86ba8, #e7c4ed, #c86bd8) border-box",
    "avatarShadow": "0 0 60px rgba(200,107,216,0.4), 0 0 120px rgba(200,107,216,0.15)",
    "placeholderBg": "linear-gradient(180deg, #3a1141 0%, #200a24 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(200,107,216,0.5))",
    "videoPlayBg": "rgba(200,107,216,0.85)",
    "videoFallback": "linear-gradient(135deg, #2b0d30, #411349)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'LimeLight Lemonade Jam',
        titleJp: 'LimeLight Lemonade Jam',
        meta: [
          { icon: "🎮", label: "开发：", value: "ゆずソフト" },
          { icon: "📅", label: "发售：", value: "2025年9月26日" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "🎸", label: "主题：", value: "乐队" }
        ],
        desc: '一群年轻人凑成乐队的故事。主音吉他手把真实的自己藏在接发和琴弦后面，<span class="highlight">只有上台时才敢亮出来</span>。',
        tags: [
          { cls: "dark", text: "乐队" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "青春" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '柚子社这几年最会写「内耗型女主」的一次。杏珠的可爱不在于傲娇，而在于她明明那么努力藏，还是会被看穿。'
}
