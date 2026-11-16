/**
 * coquelic 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '可可莉克',
  title: '花园业师',
  info: [
    { icon: '🎂', label: '生日', value: '9月23日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '156cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '樱小舞 / M・A・O', iconClass: 'cyan' },
    { icon: '🏷️', label: '编号', value: 'MBCC-S-053', iconClass: 'purple' },
    { icon: '🌺', label: '异能', value: '绯花剑落', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '无期迷途', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🌺 优雅从容', '🗯️ 说话带刺', '👑 业师的威严', '🕯️ 病入末期'],
      content: [
        '她管部下叫「小花朵」，说话永远慢半拍、带着笑。<span class="highlight">优雅到不像在经营一个杀手组织</span>。',
        '但她的身体已经撑不住了。狂厄感染到了末期，<span class="highlight-pink">她是用最后的力气在维持体面</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 深红长发', '🌺 玫瑰与花饰', '👗 深色长裙', '🗡️ 细剑'],
      content: [
        '深红色长发、花朵装饰、深色长裙。<span class="highlight">她本人就是一朵开在废墟里的花</span>。',
        '武器是一柄细剑，出手极快，<span class="highlight-pink">花与剑在她手里不分彼此</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🌺 花园组织领导者', '👑 权贵遇袭案幕后', '🩸 狂厄末期', '🏢 首要收容对象'],
      content: [
        '她是花园组织的最高领导者，<span class="highlight">疑似指导或参与的权贵遇袭事件不可计数</span>。',
        '因策划针对上庭要员的行动暴露身份，被列入首要收容名单。<span class="highlight-pink">档案显示她的感染已到末期</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🌺 花园', '🗡️ 上庭', '🏢 收容', '🌸 花的余烬'],
      content: [
        '她的组织像一座花园：<span class="highlight">每朵花都要自己开、自己谢</span>。',
        '被收容后她情绪趋于平稳，很少再用异能。<span class="highlight-pink">她把最后的时间用来教人种花</span>。'
      ],
      quote: '我知道我很漂亮，所以你才想每时每刻都看着我。',
      quoteAuthor: '—— 可可莉克'
    }
  ],
  abilities: [
    { icon: '🌺', name: '绯花剑落', grade: 'EX', desc: '把精神力化作狂厄之花，<span class="highlight">依附目标进行操控或治疗</span>。' },
    { icon: '🗡️', name: '协同斩击', grade: 'S', desc: '友方普攻时概率触发追击，<span class="highlight-pink">攻防一体的体系核心</span>。' },
    { icon: '👑', name: '业师', grade: 'A', desc: '统御组织的手腕，<span class="highlight">连敌人都承认她的分量</span>。' }
  ],
  relationships: [
    { icon: '🌸', name: '花园的「小花朵」们', type: '部下', desc: '她一手带出来的人，<span class="highlight">也是她最后的牵挂</span>。', cls: 'rel-family' },
    { icon: '🕵️', name: '局长', type: '收容者', desc: '她口中的「小花朵」之一，<span class="highlight-pink">却是唯一敢和她平视的人</span>。', cls: 'rel-other' }
  ],
  placeholderEmoji: '🌺',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2c0717 25%, #3d0a21 50%, #4a0c28 75%, #0a0a14 100%)",
    "glow1": "#db2777",
    "glow2": "#db4027",
    "particleBg": "rgba(219,39,119,0.3)",
    "gridImage": "linear-gradient(rgba(219,39,119,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(219,39,119,0.2), rgba(219,64,39,0.1))",
    "badgeBorder": "1px solid rgba(219,39,119,0.4)",
    "badgeColor": "#f2bfd6",
    "badgeShadow": "0 2px 12px rgba(219,39,119,0.15)",
    "dotBg": "#db2777",
    "nameGrad": "linear-gradient(135deg, #f9e1ec 0%, #e675a7 35%, #db2777 65%, #f2bfd6 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#eb99bd",
    "titleBadgeBg": "linear-gradient(135deg, rgba(219,39,119,0.2) 0%, rgba(219,64,39,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(219,39,119,0.4)",
    "titleBadgeColor": "#f2bfd6",
    "tagBg": "linear-gradient(135deg, rgba(219,39,119,0.12), rgba(219,39,119,0.06))",
    "tagBorder": "1px solid rgba(219,39,119,0.25)",
    "tagColor": "#eb99bd",
    "ringGrad": "linear-gradient(135deg, #db2777, #db4027, #f2bfd6, #db2777) border-box",
    "avatarShadow": "0 0 60px rgba(219,39,119,0.4), 0 0 120px rgba(219,39,119,0.15)",
    "placeholderBg": "linear-gradient(180deg, #460c26 0%, #270715 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(219,39,119,0.5))",
    "videoPlayBg": "rgba(219,39,119,0.85)",
    "videoFallback": "linear-gradient(135deg, #34091c, #4f0d2a)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '无期迷途',
        titleJp: '無期迷途',
        meta: [
          { icon: "🏢", label: "开发：", value: "自意网络" },
          { icon: "📅", label: "上线：", value: "2022年10月" },
          { icon: "🕹️", label: "类型：", value: "策略 RPG" },
          { icon: "💻", label: "平台：", value: "移动" }
        ],
        desc: '花园的业师，一个把杀戮经营成园艺的人。<span class="highlight">她的优雅，是病到最后也不肯松手的东西</span>。',
        tags: [
          { cls: "dark", text: "都市" },
          { cls: "dark", text: "策略" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '无期迷途美术与文本结合得最好的角色之一。她明明随时会死，却始终保持着那点讲究——这种「不合时宜的体面」比任何悲情独白都有力。'
}
