/**
 * linyuxia 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '林雨霞',
  title: '龙门青年企业家协会会长',
  info: [
    { icon: '🎂', label: '生日', value: '11月9日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '166cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '伊藤加奈惠', iconClass: 'cyan' },
    { icon: '🐭', label: '种族', value: '扎拉克', iconClass: 'purple' },
    { icon: '🏷️', label: '代号', value: '林（Lin）', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '明日方舟', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🍵 优雅', '🕶️ 城府', '🗯️ 毒舌', '💰 只谈利益'],
      content: [
        '她说话很客气，句句带着笑，<span class="highlight">但每句都在称量你的价值</span>。',
        '「信任会被背叛，利益不会」是她的信条。<span class="highlight-pink">可她的行动总比嘴上软一点</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 深色长发', '👁️ 细长的眼', '🧥 定制大衣', '🎩 礼帽与手套'],
      content: [
        '深色长发、细长的眼睛，穿剪裁极好的大衣，戴礼帽和手套。<span class="highlight">站在龙门街头像一张名片</span>。',
        '她的指甲修得极短——那是随时能动手的意思。<span class="highlight-pink">优雅只是她的第一层皮</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏙️ 龙门', '💼 青年企业家协会会长', '🐭 扎拉克族', '👨 父亲老李'],
      content: [
        '她挂着许多头衔：青年企业家协会会长、大学客座讲师、商会轮值发言人……<span class="highlight">每一个都是真的</span>。',
        '她是龙门近卫局那位「老李」的女儿。这个身份让她<span class="highlight-pink">能在黑白之间自由行走</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🤝 主动合作', '📊 情报与交易', '🏙️ 玉门事件之后', '🕶️ 她要的秩序'],
      content: [
        '玉门事件之后，她主动找上罗德岛，提出建立药品渠道。<span class="highlight">条件开得漂亮，动机却不全说</span>。',
        '她做事从不白做：帮你解决麻烦，也顺手解决自己的敌人。<span class="highlight-pink">但她守的那条线，比谁都清楚</span>。'
      ],
      quote: '信任会被背叛，利益不会。',
      quoteAuthor: '—— 林雨霞'
    }
  ],
  abilities: [
    { icon: '📊', name: '情报网', grade: 'EX', desc: '龙门地下的每一条线都通到她手里，<span class="highlight">没有她查不到的事</span>。' },
    { icon: '🕶️', name: '交涉', grade: 'S', desc: '把谈判变成单向定价，<span class="highlight-pink">对方还以为自己赚了</span>。' },
    { icon: '🍵', name: '法术', grade: 'A', desc: '扎拉克族的源石技艺，<span class="highlight">优雅但致命</span>。' }
  ],
  relationships: [
    { icon: '👨', name: '老李（林舸瑞）', type: '父亲', desc: '龙门近卫局的老警探，<span class="highlight">她所有分寸感的来源</span>。', cls: 'rel-family' },
    { icon: '👮‍♀️', name: '陈晖洁', type: '好友', desc: '两人互不点破的默契，<span class="highlight-pink">信里全是言外之意</span>。', cls: 'rel-friend' },
    { icon: '🏙️', name: '鼠王', type: '上级 / 影子', desc: '龙门真正的秩序制定者，<span class="highlight">她在他手下做事</span>。', cls: 'rel-other' }
  ],
  placeholderEmoji: '🍵',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #0a2922 25%, #0e3930 50%, #11463a 75%, #0a0a14 100%)",
    "glow1": "#2fbfa0",
    "glow2": "#2f8abf",
    "particleBg": "rgba(47,191,160,0.3)",
    "gridImage": "linear-gradient(rgba(47,191,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,191,160,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(47,191,160,0.2), rgba(47,138,191,0.1))",
    "badgeBorder": "1px solid rgba(47,191,160,0.4)",
    "badgeColor": "#c4eee5",
    "badgeShadow": "0 2px 12px rgba(47,191,160,0.15)",
    "dotBg": "#2fbfa0",
    "nameGrad": "linear-gradient(135deg, #e3f7f3 0%, #7eddc9 35%, #2fbfa0 65%, #c4eee5 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#9fe4d5",
    "titleBadgeBg": "linear-gradient(135deg, rgba(47,191,160,0.2) 0%, rgba(47,138,191,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(47,191,160,0.4)",
    "titleBadgeColor": "#c4eee5",
    "tagBg": "linear-gradient(135deg, rgba(47,191,160,0.12), rgba(47,191,160,0.06))",
    "tagBorder": "1px solid rgba(47,191,160,0.25)",
    "tagColor": "#9fe4d5",
    "ringGrad": "linear-gradient(135deg, #2fbfa0, #2f8abf, #c4eee5, #2fbfa0) border-box",
    "avatarShadow": "0 0 60px rgba(47,191,160,0.4), 0 0 120px rgba(47,191,160,0.15)",
    "placeholderBg": "linear-gradient(180deg, #104137 0%, #09251f 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(47,191,160,0.5))",
    "videoPlayBg": "rgba(47,191,160,0.85)",
    "videoFallback": "linear-gradient(135deg, #0c3129, #124a3e)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '明日方舟',
        titleJp: 'アークナイツ',
        meta: [
          { icon: "🏢", label: "开发：", value: "鹰角网络" },
          { icon: "📅", label: "上线：", value: "2019年5月" },
          { icon: "🕹️", label: "类型：", value: "塔防 RPG" },
          { icon: "💻", label: "平台：", value: "移动" }
        ],
        desc: '龙门这座城市没有干净的生意。她坐在牌桌最里面，<span class="highlight">笑着把所有人的底牌都数清楚</span>。',
        tags: [
          { cls: "dark", text: "末世" },
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
  review: '方舟里最会写「聪明人」的一批角色之一。她不做慈善，也不装好人，可你真出事的时候，她会用最不体面的方式帮你。'
}
