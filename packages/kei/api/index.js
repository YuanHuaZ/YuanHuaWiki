/**
 * kei 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '轻井泽惠',
  title: 'D 班的辣妹',
  info: [
    { icon: '🎂', label: '生日', value: '3月8日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '154cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '竹达彩奈', iconClass: 'cyan' },
    { icon: '🏫', label: '班级', value: '1年D班 → 3年A班', iconClass: 'purple' },
    { icon: '🆔', label: '学号', value: 'S01T004718', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '欢迎来到实力至上主义的教室', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['💄 强势辣妹', '🎭 全是伪装', '🩹 怕再被欺凌', '🫂 只对一个人服软'],
      content: [
        '表面上她是D班女生集团的中心，说话轻浮、气场最强。<span class="highlight">但这层辣妹外壳是纯粹的自我保护</span>——她怕的不是被讨厌，是被再一次踩进泥里。',
        '真实的她并不坚强：一旦有人要撕开她的过去，她会本能地选择<span class="highlight-pink">最能保护自己的做法</span>，哪怕代价是出卖别人。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 蜂蜜色高马尾', '👁️ 紫瞳', '🩹 左腹疤痕', '👗 校服系腰'],
      content: [
        '蜂蜜色的长卷发高高扎成马尾，白色皮肤，是那种<span class="highlight">走在走廊里会被全班看见</span>的漂亮。',
        '左胸下方的腹部有一道因霸凌留下的疤。这道疤是她的<span class="highlight-pink">心理阴影的实体</span>，也是她绝不肯让人看见的地方。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏫 高度育成高校', '👑 女生集团顶点', '💔 中学遭霸凌', '🤝 与平田假交往'],
      content: [
        '中学时期她遭受过几乎涵盖所有形式的霸凌，被打、被逼吃地上的食物、抽屉里塞动物尸体。<span class="highlight">这段经历把她重塑成了另一个人</span>。',
        '开学后她与班级领袖平田洋介公开交往，本质是<span class="highlight-pink">互相利用的伪装恋爱</span>——她需要保护，他需要挡箭牌。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🎯 被绫小路看破', '🤐 秘密与交易', '💗 11.5 卷告白', '🌱 走出阴影'],
      content: [
        '绫小路清隆看破了她的秘密，以此为筹码让她成为自己的「棋子」。<span class="highlight">两人的关系从交易开始</span>，却一路走成了彼此的例外。',
        '她慢慢走出霸凌的阴影，结束与平田的假情侣关系，在11.5卷<span class="highlight-pink">接受了绫小路的告白</span>。这是她第一次为自己而活。'
      ],
      quote: '青春什么的，不需要。朋友什么的，不需要。最重要的事情，是保护我自己。',
      quoteAuthor: '—— 轻井泽惠'
    }
  ],
  abilities: [
    { icon: '🎭', name: '伪装', grade: 'S', desc: '把脆弱藏进辣妹外壳的能力。她能在任何场合<span class="highlight">立刻切换成最安全的样子</span>。' },
    { icon: '👀', name: '洞察人心', grade: 'A', desc: '校方评价「机敏思考力」B-。她比谁都清楚<span class="highlight-pink">班上谁在算计谁</span>。' },
    { icon: '🫂', name: '死心塌地', grade: 'EX', desc: '一旦认定了谁，就会把自己全部押上去。<span class="highlight">这份偏执是她最大的武器</span>。' }
  ],
  relationships: [
    { icon: '♟️', name: '绫小路清隆', type: '恋人', desc: '从要挟与被要挟开始的关系。他是唯一<span class="highlight">见过她最狼狈样子还没走的人</span>。', cls: 'rel-romance' },
    { icon: '🤵', name: '平田洋介', type: '假情侣 / 同学', desc: '互相利用的伪装恋爱，<span class="highlight-pink">第9卷正式结束</span>。', cls: 'rel-other' },
    { icon: '👭', name: '松下千秋 / 森宁宁', type: '朋友', desc: '女生集团里的同伴，<span class="highlight">日常行动基本绑在一起</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '💄',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2c1e07 25%, #3d2a0a 50%, #4a340d 75%, #0a0a14 100%)",
    "glow1": "#e0a94a",
    "glow2": "#bfe04a",
    "particleBg": "rgba(224,169,74,0.3)",
    "gridImage": "linear-gradient(rgba(224,169,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(224,169,74,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(224,169,74,0.2), rgba(191,224,74,0.1))",
    "badgeBorder": "1px solid rgba(224,169,74,0.4)",
    "badgeColor": "#f2dfc0",
    "badgeShadow": "0 2px 12px rgba(224,169,74,0.15)",
    "dotBg": "#e0a94a",
    "nameGrad": "linear-gradient(135deg, #f9f0e2 0%, #e6bc75 35%, #e0a94a 65%, #f2dfc0 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#ebcd99",
    "titleBadgeBg": "linear-gradient(135deg, rgba(224,169,74,0.2) 0%, rgba(191,224,74,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(224,169,74,0.4)",
    "titleBadgeColor": "#f2dfc0",
    "tagBg": "linear-gradient(135deg, rgba(224,169,74,0.12), rgba(224,169,74,0.06))",
    "tagBorder": "1px solid rgba(224,169,74,0.25)",
    "tagColor": "#ebcd99",
    "ringGrad": "linear-gradient(135deg, #e0a94a, #bfe04a, #f2dfc0, #e0a94a) border-box",
    "avatarShadow": "0 0 60px rgba(224,169,74,0.4), 0 0 120px rgba(224,169,74,0.15)",
    "placeholderBg": "linear-gradient(180deg, #46300c 0%, #271b07 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(224,169,74,0.5))",
    "videoPlayBg": "rgba(224,169,74,0.85)",
    "videoFallback": "linear-gradient(135deg, #342409, #4e370d)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '欢迎来到实力至上主义的教室',
        titleJp: 'ようこそ実力至上主義の教室へ',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "Lerche" },
          { icon: "📅", label: "播出：", value: "2017年7月" },
          { icon: "📺", label: "集数：", value: "全12话" },
          { icon: "🎤", label: "CV：", value: "竹达彩奈" }
        ],
        desc: '只有实力才有价值的学校，全员被扔进点数与班级排名的绞肉机。轻井泽惠是其中最会<span class="highlight">用伪装活下去</span>的那一个。',
        tags: [
          { cls: "dark", text: "校园" },
          { cls: "dark", text: "悬疑" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '轻井泽惠 · 官方立绘' }
  ],
  videos: []
}
