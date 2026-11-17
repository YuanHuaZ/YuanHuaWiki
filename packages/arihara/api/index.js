/**
 * arihara 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '在原七海',
  title: '超能力妹妹',
  info: [
    { icon: '🎤', label: '声优', value: '石原舞', iconClass: 'purple' },
    { icon: '🩸', label: '血型', value: 'A型', iconClass: 'pink' },
    { icon: '✨', label: '星幽能力', value: '治愈能力强化', iconClass: 'cyan' },
    { icon: '👨‍👧', label: '身份', value: '在原晓的义妹 / 组织辅助要员', iconClass: 'purple' },
    { icon: '🥟', label: '习惯', value: '生气就包饺子', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: 'RIDDLE JOKER', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😊 认真坦率', '🙈 初期怕生', '🥟 生气包饺子', '🎭 一点中二'],
      content: [
        '七海是个<span class="highlight">认真、坦率、家事万能</span>的女孩。对外人有点怕生，熟起来之后特别好处。',
        '她有个奇怪的习惯：生气就包饺子，越气包得越多，<span class="highlight-pink">哥哥和父亲必须全部吃完</span>，不然会更生气。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 金色长发', '👁️ 赤红双瞳', '🎀 红色蝴蝶结', '🖤 组织制服'],
      content: [
        '金色长发扎成双马尾，红色蝴蝶结当头饰，赤红色的眼睛。<span class="highlight">组织的制服是黑色系，配白手套和帽子</span>。',
        '私下穿得很居家，系上围裙就更像<span class="highlight-pink">「这个家的实际管理者」</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['👨‍👧 没有血缘的妹妹', '🏢 组织辅助要员', '✨ 星幽使', '💻 黑客技术'],
      content: [
        '她是在原晓没有血缘的妹妹，同时是组织里的辅助要员——<span class="highlight">既是家人，也是同事</span>。',
        '小时候因为家庭原因学了编程和黑客技术，现在水平相当高。<span class="highlight-pink">星幽能力是「治愈能力强化」</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏫 学园潜入', '🕵️ 任务与日常', '💗 兄妹的距离', '🌱 各自的选择'],
      content: [
        '故事从兄妹俩一起潜入学园执行任务开始。<span class="highlight">任务要求隐藏身份，日常却越来越真</span>。',
        '她一边抱怨「照顾认真的哥哥很麻烦」，一边把一切都打理好。<span class="highlight-pink">这条线的核心是「家人」和「喜欢」的界线</span>。'
      ],
      quote: '照顾哥哥真的很麻烦啊……真是的。',
      quoteAuthor: '—— 在原七海'
    }
  ],
  abilities: [
    { icon: '✨', name: '治愈能力强化', grade: 'S', desc: '星幽能力，<span class="highlight">能大幅强化治疗效果</span>。' },
    { icon: '💻', name: '黑客技术', grade: 'A', desc: '从小练出来的技术，<span class="highlight-pink">组织任务里的关键支援</span>。' },
    { icon: '🥟', name: '料理', grade: 'EX', desc: '家事万能，<span class="highlight">饺子是她的情绪计量器</span>。' }
  ],
  relationships: [
    { icon: '🕵️', name: '在原晓', type: '哥哥 / 恋人', desc: '没有血缘的哥哥，<span class="highlight">既是家人也是最在意的人</span>。', cls: 'rel-romance' },
    { icon: '👩', name: '三司绫濑', type: '同学', desc: '学生会长，<span class="highlight-pink">任务中的关键人物</span>。', cls: 'rel-friend' },
    { icon: '👩‍🏫', name: '式部茉优', type: '学姐', desc: '成熟又爱撒娇的前辈，<span class="highlight">常被她照顾</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🥟',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #0d261e 25%, #12352a 50%, #164133 75%, #0a0a14 100%)",
    "glow1": "#5fc9a8",
    "glow2": "#5facc9",
    "particleBg": "rgba(95,201,168,0.3)",
    "gridImage": "linear-gradient(rgba(95,201,168,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(95,201,168,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(95,201,168,0.2), rgba(95,172,201,0.1))",
    "badgeBorder": "1px solid rgba(95,201,168,0.4)",
    "badgeColor": "#c8eadf",
    "badgeShadow": "0 2px 12px rgba(95,201,168,0.15)",
    "dotBg": "#5fc9a8",
    "nameGrad": "linear-gradient(135deg, #e5f5f0 0%, #87d4bc 35%, #5fc9a8 65%, #c8eadf 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#a6decc",
    "titleBadgeBg": "linear-gradient(135deg, rgba(95,201,168,0.2) 0%, rgba(95,172,201,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(95,201,168,0.4)",
    "titleBadgeColor": "#c8eadf",
    "tagBg": "linear-gradient(135deg, rgba(95,201,168,0.12), rgba(95,201,168,0.06))",
    "tagBorder": "1px solid rgba(95,201,168,0.25)",
    "tagColor": "#a6decc",
    "ringGrad": "linear-gradient(135deg, #5fc9a8, #5facc9, #c8eadf, #5fc9a8) border-box",
    "avatarShadow": "0 0 60px rgba(95,201,168,0.4), 0 0 120px rgba(95,201,168,0.15)",
    "placeholderBg": "linear-gradient(180deg, #153d30 0%, #0c221b 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(95,201,168,0.5))",
    "videoPlayBg": "rgba(95,201,168,0.85)",
    "videoFallback": "linear-gradient(135deg, #0f2e24, #174536)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'RIDDLE JOKER',
        titleJp: 'RIDDLE JOKER',
        meta: [
          { icon: "🎮", label: "开发：", value: "ゆずソフト" },
          { icon: "📅", label: "发售：", value: "2018年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '兄妹以「组织要员」身份潜入学园执行任务。白天是学生，晚上是特工，<span class="highlight">而最难的任务是处理彼此的距离</span>。',
        tags: [
          { cls: "dark", text: "超能力" },
          { cls: "dark", text: "校园" },
          { cls: "dark", text: "恋爱" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '七海是那种「越日常越打动人」的角色。她的可爱全在细节里：包饺子、抱怨、把哥哥的衬衫叠得整整齐齐。'
}
