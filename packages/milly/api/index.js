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
      quote: '你让我知道原来爱不是永远的甜蜜，不会永远心有灵犀，我们的爱人不一定真的强大完美，也许不那么懂彼此，也许终有一天会走散在人群。',
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
  review: '刚看立绘其实是没想抽的欲望的，好看是好看但是不够戳我，过剧情发现居然是跟繁花一样的非局长视角，是一个被抓到船上的悲惨舞女，本来受罚的她遇到了船上的头牌蜜莉，蜜莉一直表现出开朗乐观，但开始我总觉得像白切黑，不过看到她那着一张照片说是她的爱人我就知道了肯定是局长，因为在新城，在辛迪加，也只有局长配称为救世主。蜜莉一直鼓励着莎莉，相信爱情，相信她的爱人会来救她，因为蜜莉始终相信爱情，就像当初在西区的废墟中被局长救出来一样。当她们费尽千辛万苦向莎莉男友求救时，他来了，但却选择救她，终于莎莉绝望，她不再相信爱情，情绪崩溃，加上船上的人说出局长已死的消息，她终于反驳蜜莉，蜜莉的爱人不可能来救她们的，但蜜莉又何尝不知道这一切呢，她只是在绝望的经历里给了自己一个能够活下去的希望而已。看到这里我依旧认为是蜜莉被说破防黑化，然后局长击败拯救蜜莉，但看到蜜莉伤害莎莉，莎莉的男友真的来救她时，你看，这种爱情不就是真实存在的吗？蜜莉伤害人是给予力量救她们，最后蜜莉独自留下，一个原为普级禁闭者独自击败了boss，即使到这里我还是觉得局长会及时赶到救下蜜莉，但，蜜莉直到死前，所看见的只是当初西区救她的局长的幻想，而不是真正的局长，我本觉得为什么局长不能早到那么一点呢，那就能救下蜜莉了，但仔细一想，似乎只有be才能配的上这一切的经历。是爱情给了绝望中的蜜莉，让她能够不断开导被抓的人们，让她始终不放弃，让她能够独自面对，因为如果是局长在的话一定会这么做吧，既如此我也选择这么做，她真的做到了爱人所做的事。蜜莉的故事就仿佛她的boss曲一样：”我问上天“谁能拯救我？”结果答案是我自己。现在我看到了曙光，知晓了真爱的含义。我要用熊熊能量燃烧我的生命。我生来就该发光。这算是我见过最好的爱情故事了，既是be也感觉算是he。',
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '💬', label: '评价' }
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
        desc: '一个靠「让人快乐」杀人的舞者。<span class="highlight">她的甜不是伪装，是武器</span>。',
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
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '蜜莉 · 官方立绘' }
  ],
  videos: []
}
