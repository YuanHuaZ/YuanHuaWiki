/**
 * lily 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '天音莉莉',
  title: '人见人爱的天使',
  info: [
    { icon: '📏', label: '身高', value: '143cm', iconClass: 'purple' },
    { icon: '🎤', label: '声优', value: '佐仓绫音', iconClass: 'pink' },
    { icon: '😇', label: '真实身份', value: '天使', iconClass: 'cyan' },
    { icon: '🎓', label: '身份', value: '转学生 / 校园偶像', iconClass: 'purple' },
    { icon: '💢', label: '弱点', value: '高攻低防', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '愚蠢天使与恶魔共舞', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😇 人见人爱', '🖤 腹黑', '💢 高攻低防', '🍋 醋缸'],
      content: [
        '她一出场就是全校瞩目的人气偶像：笑、温柔、有礼貌，<span class="highlight">挑不出任何缺点</span>。',
        '但那是天使的皮。真面目是个爱下套、爱看人吃瘪的<span class="highlight-pink">腹黑 S 型</span>，嘴上占尽上风，被人一反击就立刻脸红炸毛。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 金色长直发', '👁️ 橙色眼眸', '🪽 伪装的羽翼', '👗 制服短裙'],
      content: [
        '金色长直发、橙色眼睛，个子只有 143cm，<span class="highlight">标准的幼儿体型</span>。',
        '背后那对华丽的大翅膀其实是<span class="highlight-pink">自己伪造的装饰品</span>——本体的翅膀根本不是这个形状。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['😇 下凡的天使', '🎯 本为净化而来', '🧣 给恶魔套项圈', '🏠 同居'],
      content: [
        '她来到人间是为了履行净化恶魔的使命，目标就是同班同学阿久津。<span class="highlight">结果她改了主意</span>。',
        '她没有净化他，而是给他套上项圈——<span class="highlight-pink">让这个恶魔给自己打工</span>。至于到底谁更像恶魔，不太好说。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🤝 欢喜冤家', '🧠 恋爱头脑战', '😹 疯狂颜艺', '🏠 同居日常'],
      content: [
        '两个人的日常基本是「你来我往的算计」：她设局，他反套路，<span class="highlight">谁先脸红谁就输</span>。',
        '在解决了她哥哥兹维的冲突之后，两人直接同居。<span class="highlight-pink">嘴上说监视，实际上越来越像恋爱</span>。'
      ],
      quote: '到底谁才是恶魔啊？',
      quoteAuthor: '—— 天音莉莉'
    }
  ],
  abilities: [
    { icon: '😇', name: '天使之力', grade: 'S', desc: '净化恶魔的本职能力。<span class="highlight">虽然她在往反方向用</span>。' },
    { icon: '🧠', name: '谋略', grade: 'A', desc: '擅长布局和下套，<span class="highlight-pink">把人一步步引到自己的节奏里</span>。' },
    { icon: '😹', name: '颜艺', grade: 'EX', desc: '情绪一崩就颜艺全开，<span class="highlight">是她在作品里最出圈的地方</span>。' }
  ],
  relationships: [
    { icon: '😈', name: '阿久津雅虎', type: '恋人', desc: '本该被净化的恶魔，成了<span class="highlight">同住一个屋檐下的欢喜冤家</span>。', cls: 'rel-romance' },
    { icon: '🧑', name: '兹维', type: '假哥哥', desc: '天使一方派来的监视者，<span class="highlight-pink">冲突后被阿久津摆平</span>。', cls: 'rel-family' },
    { icon: '👧', name: '绫小路绫音', type: '情敌', desc: '同校的对手，<span class="highlight">两人针锋相对</span>。', cls: 'rel-other' }
  ],
  placeholderEmoji: '😇',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2f2004 25%, #422d05 50%, #503607 75%, #0a0a14 100%)",
    "glow1": "#f0b64a",
    "glow2": "#c9f04a",
    "particleBg": "rgba(240,182,74,0.3)",
    "gridImage": "linear-gradient(rgba(240,182,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240,182,74,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(240,182,74,0.2), rgba(201,240,74,0.1))",
    "badgeBorder": "1px solid rgba(240,182,74,0.4)",
    "badgeColor": "#f7e2ba",
    "badgeShadow": "0 2px 12px rgba(240,182,74,0.15)",
    "dotBg": "#f0b64a",
    "nameGrad": "linear-gradient(135deg, #fbf1df 0%, #f1c26a 35%, #f0b64a 65%, #f7e2ba 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#f3d190",
    "titleBadgeBg": "linear-gradient(135deg, rgba(240,182,74,0.2) 0%, rgba(201,240,74,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(240,182,74,0.4)",
    "titleBadgeColor": "#f7e2ba",
    "tagBg": "linear-gradient(135deg, rgba(240,182,74,0.12), rgba(240,182,74,0.06))",
    "tagBorder": "1px solid rgba(240,182,74,0.25)",
    "tagColor": "#f3d190",
    "ringGrad": "linear-gradient(135deg, #f0b64a, #c9f04a, #f7e2ba, #f0b64a) border-box",
    "avatarShadow": "0 0 60px rgba(240,182,74,0.4), 0 0 120px rgba(240,182,74,0.15)",
    "placeholderBg": "linear-gradient(180deg, #4b3306 0%, #2a1d04 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(240,182,74,0.5))",
    "videoPlayBg": "rgba(240,182,74,0.85)",
    "videoFallback": "linear-gradient(135deg, #392605, #553a07)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '愚蠢天使与恶魔共舞',
        titleJp: '愚かな天使は悪魔と踊る',
        meta: [
          { icon: "🏢", label: "制作：", value: "童园" },
          { icon: "📅", label: "播出：", value: "2024年1月" },
          { icon: "📺", label: "集数：", value: "全12话" },
          { icon: "🎤", label: "CV：", value: "佐仓绫音" }
        ],
        desc: '天使下凡净化恶魔，却把恶魔养成了同居对象。每天都是<span class="highlight">互相算计、互相心动</span>的恋爱头脑战。',
        tags: [
          { cls: "dark", text: "喜剧" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "奇幻" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '佐仓绫音配腹黑小恶魔简直量身定做。她越是想装天使，破功的时候就越可爱——尤其是被反将一军之后那张脸。'
}
