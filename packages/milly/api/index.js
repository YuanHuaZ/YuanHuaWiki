/**
 * milly 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '蜜莉',
  title: '极乐边境的舞者',
  info: [
    { icon: '🎂', label: '生日', value: '7月9日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '168cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '筱筝', iconClass: 'cyan' },
    { icon: '🏷️', label: '编号', value: 'MBCC-S-459', iconClass: 'purple' },
    { icon: '🍯', label: '异能', value: '极乐蜜语', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '无期迷途', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🍯 甜到发腻', '🎭 舞台人格', '💔 缺爱', '🌀 危险的温柔'],
      content: [
        '蜜莉说话像在撒娇：<span class="highlight">甜、慢、带点黏</span>。她喜欢听别人的爱情故事，尤其是在夜里。',
        '但她的甜是有毒的。<span class="highlight-pink">「极乐蜜语」能让人兴奋到死</span>——她的温柔本身就是凶器。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 蜜色长发', '👁️ 慵懒的眼', '👗 舞者礼服', '🍯 蜂巢纹样'],
      content: [
        '蜜色长发、慵懒的眼神，穿舞者礼服，身上有蜂巢状的纹样。<span class="highlight">她整个人像一勺化开的蜂蜜</span>。',
        '身材高挑（168cm），站姿是练过的舞台架子。<span class="highlight-pink">一看就知道曾经红过</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🚢 极乐边境号', '💃 当红舞者', '💥 爆炸中心', '🏢 MBCC 收容'],
      content: [
        '她曾在「极乐边境」上做舞者，红极一时。<span class="highlight">爆炸发生时她就在爆心</span>。',
        '身受重伤后被管理局收容。<span class="highlight-pink">她的档案里写着「重要涉案人员」</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🎭 舞台', '💥 爆炸', '🩸 重伤', '🍯 甜的代价'],
      content: [
        '她靠让人快乐活着，<span class="highlight">也靠让人过度快乐而杀人</span>。',
        '被收容后她依旧想给人「最好的相遇」。<span class="highlight-pink">她只是想要有人愿意听她说话</span>。'
      ],
      quote: '能不能说说，你会爱什么样的人？',
      quoteAuthor: '—— 蜜莉'
    }
  ],
  abilities: [
    { icon: '🍯', name: '极乐蜜语', grade: 'EX', desc: '操控他人情绪，<span class="highlight">让人兴奋到应激身亡</span>。' },
    { icon: '💃', name: '舞蹈', grade: 'S', desc: '舞台出身的肢体控制，<span class="highlight-pink">在战斗里同样是杀招</span>。' },
    { icon: '🎭', name: '共情', grade: 'A', desc: '她真的会听你说话，<span class="highlight">这才是最危险的部分</span>。' }
  ],
  relationships: [
    { icon: '🕵️', name: '局长', type: '收容者 / 观众', desc: '她最想讨好的「观众」，<span class="highlight">也是唯一没被她的甜害死的人</span>。', cls: 'rel-other' },
    { icon: '💃', name: '极乐边境的旧识', type: '过去', desc: '她已经回不去的舞台，<span class="highlight-pink">和那场爆炸一起烧掉了</span>。', cls: 'rel-other' }
  ],
  placeholderEmoji: '🍯',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #321501 25%, #461e02 50%, #552402 75%, #0a0a14 100%)",
    "glow1": "#f97316",
    "glow2": "#f9f716",
    "particleBg": "rgba(249,115,22,0.3)",
    "gridImage": "linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,247,22,0.1))",
    "badgeBorder": "1px solid rgba(249,115,22,0.4)",
    "badgeColor": "#fbd3b6",
    "badgeShadow": "0 2px 12px rgba(249,115,22,0.15)",
    "dotBg": "#f97316",
    "nameGrad": "linear-gradient(135deg, #fdeadd 0%, #f9a062 35%, #f97316 65%, #fbd3b6 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#f9b88a",
    "titleBadgeBg": "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(249,247,22,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(249,115,22,0.4)",
    "titleBadgeColor": "#fbd3b6",
    "tagBg": "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.06))",
    "tagBorder": "1px solid rgba(249,115,22,0.25)",
    "tagColor": "#f9b88a",
    "ringGrad": "linear-gradient(135deg, #f97316, #f9f716, #fbd3b6, #f97316) border-box",
    "avatarShadow": "0 0 60px rgba(249,115,22,0.4), 0 0 120px rgba(249,115,22,0.15)",
    "placeholderBg": "linear-gradient(180deg, #502202 0%, #2d1301 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(249,115,22,0.5))",
    "videoPlayBg": "rgba(249,115,22,0.85)",
    "videoFallback": "linear-gradient(135deg, #3c1902, #592602)"
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
        desc: '一个靠「让人快乐」杀人的舞者。<span class="highlight">她的甜不是伪装，是武器</span>。',
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
  review: '设计上非常「危险甜心」的一位。她的声音一出来就让人放松警惕，而档案越往下读越冷——这种反差是无期迷途的看家本领。'
}
