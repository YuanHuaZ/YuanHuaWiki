/**
 * megumin 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '惠惠',
  title: '爆裂魔法使',
  info: [
    { icon: '🎂', label: '生日', value: '12月4日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '145cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '高桥李依', iconClass: 'cyan' },
    { icon: '🧙', label: '职业', value: '大魔法师（爆裂魔法）', iconClass: 'purple' },
    { icon: '👺', label: '种族', value: '红魔族', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '为美好的世界献上祝福！', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['💥 爆裂魔法至上', '🎭 中二病', '🔥 自尊心极强', '🤝 对伙伴极重情'],
      content: [
        '惠惠是那种把「一招鲜」练到极致的偏执狂。她拒绝学习任何其他魔法，只为了<span class="highlight">每天都能放出一次爆裂魔法</span>。',
        '她满口中二台词、自称「 crimson 恶魔」，看起来嚣张得不行，其实<span class="highlight-pink">对队友的在意比谁都深</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 黑色长发', '👁️ 红色眼眸', '🩹 眼罩与绷带', '🧙 尖帽与披风'],
      content: [
        '黑色长发、红色瞳孔，一只眼睛缠着眼罩，身上到处是绷带——<span class="highlight">全是她自己加的设定</span>。',
        '宽大的尖帽、深红的披风，站在队伍最前面念出咒文的样子，<span class="highlight-pink">中二得让人挪不开眼</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['👺 红魔族名门', '🏫 魔法学院首席', '💥 只学爆裂魔法', '🎒 离家出走'],
      content: [
        '她出身红魔族的名门，在魔法学院成绩顶尖，却<span class="highlight">把所有点数都投在了爆裂魔法上</span>，其他一概不学。',
        '因为这份偏执，她毕业后没有队伍愿意收。直到遇见和真，她才第一次<span class="highlight-pink">被人当作「爆裂魔法使」而不是怪人</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🌾 田里的一发', '🧑‍🤝‍🧑 加入队伍', '💥 每天一爆', '🏰 攻城战'],
      content: [
        '她与和真的相遇堪称灾难：为了「每天一爆」的执念，她在田里放了一发，<span class="highlight">把整片农田炸成了深坑</span>。',
        '加入队伍后，她每天只能放一次魔法，放完就倒地不起，需要人背回去。但在真正的危机面前，<span class="highlight-pink">那一发爆裂魔法从来不会缺席</span>。'
      ],
      quote: 'EXPLOSION！',
      quoteAuthor: '—— 惠惠'
    }
  ],
  abilities: [
    { icon: '💥', name: '爆裂魔法', grade: 'EX', desc: '红魔族最强的攻击魔法。惠惠把它练到了<span class="highlight">极致，也只练了它</span>。' },
    { icon: '🧠', name: '咒文与设定', grade: 'A', desc: '咒文越长威力越大——这是她的信条，<span class="highlight-pink">也是她中二的根源</span>。' },
    { icon: '💤', name: '一发倒', grade: 'F', desc: '放完必定脱力倒地，需要队友回收。<span class="highlight">代价与威力同样惊人</span>。' }
  ],
  relationships: [
    { icon: '🗡️', name: '和真', type: '队友 / 拌嘴对象', desc: '把她捡回队伍的人。两人天天吵架，<span class="highlight">但谁也没真走开</span>。', cls: 'rel-romance' },
    { icon: '💧', name: '阿库娅', type: '队友', desc: '废柴女神，<span class="highlight-pink">日常互相嫌弃</span>。', cls: 'rel-friend' },
    { icon: '🛡️', name: '达克妮斯', type: '队友', desc: '十字骑士，<span class="highlight">队伍里唯一靠谱的成年人</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '💥',
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
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2c0707 25%, #3d0a0a 50%, #4a0d0d 75%, #0a0a14 100%)",
    "glow1": "#e04b4b",
    "glow2": "#e0a24b",
    "particleBg": "rgba(224,75,75,0.3)",
    "gridImage": "linear-gradient(rgba(224,75,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(224,75,75,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(224,75,75,0.2), rgba(224,162,75,0.1))",
    "badgeBorder": "1px solid rgba(224,75,75,0.4)",
    "badgeColor": "#f2c0c0",
    "badgeShadow": "0 2px 12px rgba(224,75,75,0.15)",
    "dotBg": "#e04b4b",
    "nameGrad": "linear-gradient(135deg, #f9e2e2 0%, #e57575 35%, #e04b4b 65%, #f2c0c0 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#eb9999",
    "titleBadgeBg": "linear-gradient(135deg, rgba(224,75,75,0.2) 0%, rgba(224,162,75,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(224,75,75,0.4)",
    "titleBadgeColor": "#f2c0c0",
    "tagBg": "linear-gradient(135deg, rgba(224,75,75,0.12), rgba(224,75,75,0.06))",
    "tagBorder": "1px solid rgba(224,75,75,0.25)",
    "tagColor": "#eb9999",
    "ringGrad": "linear-gradient(135deg, #e04b4b, #e0a24b, #f2c0c0, #e04b4b) border-box",
    "avatarShadow": "0 0 60px rgba(224,75,75,0.4), 0 0 120px rgba(224,75,75,0.15)",
    "placeholderBg": "linear-gradient(180deg, #460c0c 0%, #270707 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(224,75,75,0.5))",
    "videoPlayBg": "rgba(224,75,75,0.85)",
    "videoFallback": "linear-gradient(135deg, #340909, #4e0d0d)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '为美好的世界献上祝福！',
        titleJp: 'この素晴らしい世界に祝福を！',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "Studio Deen" },
          { icon: "📅", label: "播出：", value: "2016年1月" },
          { icon: "📺", label: "集数：", value: "全10话" },
          { icon: "🎤", label: "CV：", value: "高桥李依" }
        ],
        desc: '被吓死转生异世界的废柴青年，凑齐了一支更废柴的队伍。红魔族的爆裂魔法使负责<span class="highlight">每天一发、发完全场安静</span>。',
        tags: [
          { cls: "dark", text: "异世界" },
          { cls: "dark", text: "喜剧" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '惠惠 · 官方立绘' }
  ],
  videos: []
}
