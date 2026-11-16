/**
 * tsukiko 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '筒隐月子',
  title: '不笑猫的契约者',
  info: [
    { icon: '🎂', label: '生日', value: '2月2日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '150cm', iconClass: 'pink' },
    { icon: '🩸', label: '血型', value: 'A型', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '小仓唯', iconClass: 'purple' },
    { icon: '📺', label: '所属作品', value: '变态王子与不笑猫', iconClass: 'cyan' },
    { icon: '🏫', label: '身份', value: '筒隐家次女 / 高一学生', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🐱 后天面瘫', '💬 毒舌只对前辈', '🍚 吃货', '🖤 忍耐力惊人'],
      content: [
        '她原本是个<span class="highlight">喜怒哀乐全写在脸上</span>的女孩。因为讨厌自己情绪起伏太大，她向不笑猫像许愿丢掉「本音」，从此再也没法用表情和语气表达情绪。',
        '表情没了，情绪还在：高兴的时候会<span class="highlight-pink">哼歌、拉那束像尾巴一样的头发</span>。对横寺阳人说话的语气辛辣得不像话，却是她独有的亲昵方式。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 黑色短发', '🎀 右侧束发', '👁️ 蓝色眼眸', '🐾 猫耳发饰'],
      content: [
        '黑色短发，右侧特意绑成一束，走起路来像尾巴。蓝色的眼睛配上小小的个子，横寺阳人说她<span class="highlight">像一只猫</span>。',
        '常戴猫耳发饰，穿黑色及膝袜。表情是空的，但<span class="highlight-pink">眼神会替她说话</span>——这也是很多人一眼就记住她的原因。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏠 筒隐家次女', '👭 与姐姐相依为命', '🧒 儿童福祉社', '🐈 不笑猫像'],
      content: [
        '她是名家筒隐的次女，父母在她懂事之前就去世了，<span class="highlight">和姐姐筑紫相依为命</span>。受姐姐影响加入儿童福祉社，失去表情后暂时退到二线。',
        '向不笑猫许愿的代价是「丢掉真心话」。后来她本来有机会取回表情，却<span class="highlight-pink">把那个装着本音的包子让给了姐姐</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🤝 与姐姐和解', '🧺 照顾阳人', '🍀 寻找不需要表情的人', '💗 第一顺位'],
      content: [
        '故事从一个不肯笑的女孩和一个满口借口的男孩撞在一起开始。她包容阳人所有的变态行径，<span class="highlight">嘴上骂他，行动上却从不拒绝</span>。',
        '她真正在意的只有一件事——<span class="highlight-pink">在对方心里是不是第一顺位</span>。为此她甚至向不笑猫许愿，把阳人的家搬到了自家仓库。'
      ],
      quote: '前辈真是个无可救药的变态呢。',
      quoteAuthor: '—— 筒隐月子'
    }
  ],
  abilities: [
    { icon: '🐱', name: '无表情', grade: 'S', desc: '失去表情反而成了最强的<span class="highlight">情绪屏障</span>，谁也读不出她在想什么——除了那束会晃的头发。' },
    { icon: '🍳', name: '料理与按摩', grade: 'A', desc: '擅长做饭、画图和按摩，是筒隐家<span class="highlight-pink">实际的战斗力</span>。' },
    { icon: '🖤', name: '无限包容', grade: 'EX', desc: '不管阳人做了什么都能原谅。这种近乎无底线的忍耐，才是她最可怕也最动人的地方。' }
  ],
  relationships: [
    { icon: '👦', name: '横寺阳人', type: '前辈 / 恋人', desc: '满口借口的变态前辈。她一边嫌弃一边<span class="highlight">把他圈进自己的生活</span>。', cls: 'rel-romance' },
    { icon: '👧', name: '筒隐筑紫', type: '姐姐', desc: '曾经关系恶劣，后来和解。她把表情<span class="highlight-pink">让给了姐姐</span>。', cls: 'rel-family' },
    { icon: '🐰', name: '小豆梓', type: '朋友 / 情敌', desc: '同为不笑猫的「受害者」，也是<span class="highlight">能说上话的朋友</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🐱',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #121721 25%, #1a202e 50%, #1f2737 75%, #0a0a14 100%)",
    "glow1": "#7c8fb5",
    "glow2": "#8a7cb5",
    "particleBg": "rgba(124,143,181,0.3)",
    "gridImage": "linear-gradient(rgba(124,143,181,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,143,181,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(124,143,181,0.2), rgba(138,124,181,0.1))",
    "badgeBorder": "1px solid rgba(124,143,181,0.4)",
    "badgeColor": "#d0d6e1",
    "badgeShadow": "0 2px 12px rgba(124,143,181,0.15)",
    "dotBg": "#7c8fb5",
    "nameGrad": "linear-gradient(135deg, #e9ecf1 0%, #98a6c2 35%, #7c8fb5 65%, #d0d6e1 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#b3bdd0",
    "titleBadgeBg": "linear-gradient(135deg, rgba(124,143,181,0.2) 0%, rgba(138,124,181,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(124,143,181,0.4)",
    "titleBadgeColor": "#d0d6e1",
    "tagBg": "linear-gradient(135deg, rgba(124,143,181,0.12), rgba(124,143,181,0.06))",
    "tagBorder": "1px solid rgba(124,143,181,0.25)",
    "tagColor": "#b3bdd0",
    "ringGrad": "linear-gradient(135deg, #7c8fb5, #8a7cb5, #d0d6e1, #7c8fb5) border-box",
    "avatarShadow": "0 0 60px rgba(124,143,181,0.4), 0 0 120px rgba(124,143,181,0.15)",
    "placeholderBg": "linear-gradient(180deg, #1d2534 0%, #11151d 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(124,143,181,0.5))",
    "videoPlayBg": "rgba(124,143,181,0.85)",
    "videoFallback": "linear-gradient(135deg, #161c27, #212a3b)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '变态王子与不笑猫',
        titleJp: '変態王子と笑わない猫。',
        meta: [
          { icon: "🏢", label: "制作：", value: "J.C.STAFF" },
          { icon: "📅", label: "播出：", value: "2013年4月" },
          { icon: "📺", label: "集数：", value: "全12话" },
          { icon: "🎤", label: "CV：", value: "小仓唯" }
        ],
        desc: '想要丢掉「表面功夫」的男孩，遇上想要丢掉「真心话」的女孩。一座会实现愿望的不笑猫像，把两个人的<span class="highlight">别扭青春</span>搅成一团。',
        tags: [
          { cls: "dark", text: "校园" },
          { cls: "dark", text: "恋爱喜剧" },
          { cls: "dark", text: "奇幻" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '月子最妙的地方是「没有表情却全是情绪」。动画里她一句话都不多，可那束头发一动，观众就知道她在闹别扭。看完会理解为什么那么多人说她是最治愈的面瘫。'
}
