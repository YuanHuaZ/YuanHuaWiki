/**
 * hella 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '海拉',
  title: '辛迪加的野猫',
  info: [
    { icon: '🎂', label: '生日', value: '12月2日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '152cm', iconClass: 'pink' },
    { icon: '⚖️', label: '体重', value: '38kg', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '钟可（中）/ 古贺葵（日）', iconClass: 'purple' },
    { icon: '🏷️', label: '编号', value: 'MBCC-S-098', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '无期迷途', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🗯️ 嘴臭', '🐀 狡黠', '💢 傲娇', '🫂 渴望同伴'],
      content: [
        '海拉是辛迪加街头混出来的孩子，<span class="highlight">嘴里没有一句好话</span>，开口就阴阳怪气。',
        '可她的刻薄底下是极强的依赖欲。<span class="highlight-pink">她骂得最凶的人，往往是她最不想失去的人</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 淡紫长发', '👁️ 淡紫眼眸', '🧢 针织帽', '👗 外套半脱'],
      content: [
        '淡紫色的长发和同色眼睛，戴针织帽，外套永远只穿一半。<span class="highlight">一身街头味</span>。',
        '个子只有 152cm，体重 38kg，<span class="highlight-pink">看着瘦弱却能徒手撕开钢筋</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏚️ 辛迪加孤儿', '🩸 帕尔马实验室', '🧬 非法人体实验', '🏢 MBCC 收容'],
      content: [
        '七岁那年父母被同伙背叛枪杀，她成了孤儿，<span class="highlight">靠盗窃诈骗走私活下来</span>。',
        '为了所谓的「朋友」一次次替人顶罪，最后被卖给帕尔马实验室做人体实验。<span class="highlight-pink">十四岁觉醒成禁闭者</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🧪 实验室', '🤝 与九十九', '🏢 被收容', '🐀 不肯配合'],
      content: [
        '在反复摧残、同期被试者几乎全死的情况下，她靠意志挺了下来，<span class="highlight">觉醒「自愈再生」</span>。',
        '被 MBCC 收容后她始终拒绝配合调查。<span class="highlight-pink">她不是不信任，是从来没被善待过</span>。'
      ],
      quote: '我？装可爱？谁说的？！人家难道不可爱吗？',
      quoteAuthor: '—— 海拉'
    }
  ],
  abilities: [
    { icon: '🩸', name: '自愈再生', grade: 'EX', desc: '修复速度是常人数万倍，<span class="highlight">数秒内补回重伤</span>。' },
    { icon: '🐀', name: '街头技巧', grade: 'S', desc: '偷、骗、跑、藏，<span class="highlight-pink">在辛迪加活下来的本事</span>。' },
    { icon: '🗯️', name: '嘴炮', grade: 'A', desc: '能把人骂到失语，<span class="highlight">也能把气氛救回来</span>。' }
  ],
  relationships: [
    { icon: '👧', name: '九十九', type: '伙伴', desc: '实验室里被安排来伤害她的人，<span class="highlight">最后成了她唯一的朋友</span>。', cls: 'rel-friend' },
    { icon: '🕵️', name: '局长', type: '收容者 / 上司', desc: '她嘴上最不服、<span class="highlight-pink">行动上最听话的人</span>。', cls: 'rel-other' }
  ],
  placeholderEmoji: '🐀',
  avatarSize: '190% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #1a0a29 25%, #240e3a 50%, #2c1146 75%, #0a0a14 100%)",
    "glow1": "#b07de0",
    "glow2": "#e07dd6",
    "particleBg": "rgba(176,125,224,0.3)",
    "gridImage": "linear-gradient(rgba(176,125,224,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(176,125,224,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(176,125,224,0.2), rgba(224,125,214,0.1))",
    "badgeBorder": "1px solid rgba(176,125,224,0.4)",
    "badgeColor": "#d9c3ee",
    "badgeShadow": "0 2px 12px rgba(176,125,224,0.15)",
    "dotBg": "#b07de0",
    "nameGrad": "linear-gradient(135deg, #ede3f7 0%, #af7dde 35%, #b07de0 65%, #d9c3ee 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#c39fe5",
    "titleBadgeBg": "linear-gradient(135deg, rgba(176,125,224,0.2) 0%, rgba(224,125,214,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(176,125,224,0.4)",
    "titleBadgeColor": "#d9c3ee",
    "tagBg": "linear-gradient(135deg, rgba(176,125,224,0.12), rgba(176,125,224,0.06))",
    "tagBorder": "1px solid rgba(176,125,224,0.25)",
    "tagColor": "#c39fe5",
    "ringGrad": "linear-gradient(135deg, #b07de0, #e07dd6, #d9c3ee, #b07de0) border-box",
    "avatarShadow": "0 0 60px rgba(176,125,224,0.4), 0 0 120px rgba(176,125,224,0.15)",
    "placeholderBg": "linear-gradient(180deg, #2a1042 0%, #170925 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(176,125,224,0.5))",
    "videoPlayBg": "rgba(176,125,224,0.85)",
    "videoFallback": "linear-gradient(135deg, #1f0c31, #2f124a)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: '无期迷途',
        titleJp: '無期迷途',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "自意网络" },
          { icon: "📅", label: "上线：", value: "2022年10月" },
          { icon: "🕹️", label: "类型：", value: "策略 RPG" },
          { icon: "💻", label: "平台：", value: "移动" }
        ],
        desc: '收容异能罪犯的 MBCC。海拉是其中最不像「罪犯」、也最难被驯服的一个，<span class="highlight">因为她从来没被当人看</span>。',
        tags: [
          { cls: "dark", text: "都市" },
          { cls: "dark", text: "策略" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '海拉 · 官方立绘' }
  ],
  videos: []
}
