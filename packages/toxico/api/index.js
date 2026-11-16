/**
 * toxico 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '毒毒子',
  title: '新人黑魔法师',
  info: [
    { icon: '📏', label: '身高', value: '159cm', iconClass: 'purple' },
    { icon: '⚖️', label: '体重', value: '46kg', iconClass: 'pink' },
    { icon: '🎂', label: '年龄', value: '18岁', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '大地叶', iconClass: 'purple' },
    { icon: '🏛️', label: '所属', value: '萌芽市公会', iconClass: 'cyan' },
    { icon: '📺', label: '所属作品', value: '不道德公会', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😪 毫无干劲', '😐 无表情', '🗯️ 毒舌', '💰 只为钱工作'],
      content: [
        '毒毒子是那种<span class="highlight">把「没干劲」写在骨子里</span>的人。她当冒险者纯粹是为了赚钱，做任何体力活都提不起精神，说话还专挑人的痛处戳。',
        '她极度嗜睡、面无表情，跑两步就喘。可一旦真的动起手，<span class="highlight-pink">炎、冰、雷的范围魔法</span>能把敌我一起卷进去。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 黑色双马尾', '👁️ 蓝色眼眸', '🪄 魔法杖', '🧦 黑色连裤袜'],
      content: [
        '黑发双马尾，蓝色的眼睛，一对豆豆眉，表情常年空白。身材纤细，<span class="highlight">看起来完全不像能扛输出的法师</span>。',
        '手里那根魔法杖是她的全部装备。穿黑色连裤袜，走路慢慢悠悠，<span class="highlight-pink">像是随时会原地睡着</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🧪 父母以「毒」赐名', '🛡️ 天生抗毒', '🌱 新人冒险者', '👭 花畑的青梅竹马'],
      content: [
        '父母用「毒」为她起了咒名，命名即赐予能力——所以她<span class="highlight">天生对毒免疫</span>，连体液都能解毒，体质差却从没生过病。',
        '作为公会新人，她被交给王牌守卫基克尔带练。第一次出任务就因为体力不支<span class="highlight-pink">瘫在半路</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['⚡ 打到自己人', '🍖 烤焦熊掌', '🕷️ 为基克尔解毒', '😴 训练即躺平'],
      content: [
        '她的第一次实战堪称灾难：一气之下放出大型雷魔法，<span class="highlight">把自己和队友一起打得遍体鳞伤</span>。',
        '料理比拼把熊掌烤成焦炭，训练几组俯卧撑就倒下。但在基克尔被毒针刺中奄奄一息时，是她<span class="highlight-pink">用自己的体液把人从鬼门关拉了回来</span>。'
      ],
      quote: '钱给够，我就动。',
      quoteAuthor: '—— 毒毒子'
    }
  ],
  abilities: [
    { icon: '⚡', name: '范围属性魔法', grade: 'S', desc: '炎、冰、雷三系高威力范围魔法，<span class="highlight">威力惊人但命中率感人</span>。' },
    { icon: '🧪', name: '抗毒体质', grade: 'A', desc: '天生的毒免疫，体液还能解毒，<span class="highlight-pink">是队伍里最可靠的保命底牌</span>。' },
    { icon: '🍳', name: '料理白痴', grade: 'F', desc: '能把熊掌烤成焦炭的厨艺，<span class="highlight">唯一稳定的输出</span>。' }
  ],
  relationships: [
    { icon: '🛡️', name: '基克尔', type: '老板 / 队长', desc: '公会的王牌守卫，被指派来带她成长。<span class="highlight">她嘴上嘲讽，真出事时最靠得住</span>。', cls: 'rel-friend' },
    { icon: '🌻', name: '花畑', type: '青梅竹马 / 队友', desc: '从小一起长大，也是<span class="highlight-pink">唯一知道她另一面的人</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🧪',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #1d270c 25%, #293611 50%, #324215 75%, #0a0a14 100%)",
    "glow1": "#93c13f",
    "glow2": "#47c13f",
    "particleBg": "rgba(147,193,63,0.3)",
    "gridImage": "linear-gradient(rgba(147,193,63,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147,193,63,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(147,193,63,0.2), rgba(71,193,63,0.1))",
    "badgeBorder": "1px solid rgba(147,193,63,0.4)",
    "badgeColor": "#deeac7",
    "badgeShadow": "0 2px 12px rgba(147,193,63,0.15)",
    "dotBg": "#93c13f",
    "nameGrad": "linear-gradient(135deg, #f0f5e5 0%, #b9d685 35%, #93c13f 65%, #deeac7 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#cadfa5",
    "titleBadgeBg": "linear-gradient(135deg, rgba(147,193,63,0.2) 0%, rgba(71,193,63,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(147,193,63,0.4)",
    "titleBadgeColor": "#deeac7",
    "tagBg": "linear-gradient(135deg, rgba(147,193,63,0.12), rgba(147,193,63,0.06))",
    "tagBorder": "1px solid rgba(147,193,63,0.25)",
    "tagColor": "#cadfa5",
    "ringGrad": "linear-gradient(135deg, #93c13f, #47c13f, #deeac7, #93c13f) border-box",
    "avatarShadow": "0 0 60px rgba(147,193,63,0.4), 0 0 120px rgba(147,193,63,0.15)",
    "placeholderBg": "linear-gradient(180deg, #2f3e14 0%, #1a230b 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(147,193,63,0.5))",
    "videoPlayBg": "rgba(147,193,63,0.85)",
    "videoFallback": "linear-gradient(135deg, #232e0f, #354516)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '不道德公会',
        titleJp: '不徳のギルド',
        meta: [
          { icon: "🏢", label: "制作：", value: "TNK" },
          { icon: "📅", label: "播出：", value: "2022年10月" },
          { icon: "📺", label: "集数：", value: "全12话" },
          { icon: "🎤", label: "CV：", value: "大地叶" }
        ],
        desc: '新人守卫带着一群问题新人跑任务的奇幻喜剧。毒毒子负责<span class="highlight">用最大火力制造最大混乱</span>，然后面无表情地收工。',
        tags: [
          { cls: "dark", text: "奇幻" },
          { cls: "dark", text: "冒险" },
          { cls: "dark", text: "喜剧" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '毒毒子属于那种「一眼看过去最没干劲、打起来最离谱」的角色。她不装、不热血、不逞强，就是懒懒地放一发大魔法把场面炸平，然后回去睡觉。很对我的胃口。'
}
