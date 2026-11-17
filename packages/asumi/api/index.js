/**
 * asumi 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '锦亚澄',
  title: '学生会书记 / 雪景四季',
  info: [
    { icon: '🎂', label: '生日', value: '12月1日', iconClass: 'purple' },
    { icon: '🎂', label: '年龄', value: '16岁', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '紬雪乃', iconClass: 'cyan' },
    { icon: '🏫', label: '身份', value: '千玉学园学生会书记', iconClass: 'purple' },
    { icon: '🎧', label: '另一面', value: 'VTuber「雪景四季」', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '常轨脱离 Creative', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😇 小天使', '🙈 不擅长面对男生', '🎧 舞台上判若两人', '🍖 肉包至上'],
      content: [
        '亚澄被主角称作「小天使」——<span class="highlight">性格好到不像真的</span>，说话轻声细语，对谁都很温柔。',
        '但一上直播，她会变成另一个人：自信、会玩梗、掌控全场。<span class="highlight-pink">两个都是她，只是一个藏在另一个后面</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 蓝色短发', '👁️ 绿色眼眸', '🎀 雪花发饰', '🎧 耳机与兜帽'],
      content: [
        '蓝色短发配绿色眼睛，戴着雪花造型的发饰，常穿兜帽和耳机。<span class="highlight">看起来就是个安静的后辈</span>。',
        '「雪景四季」形态下眼睛会变成红色，服装也完全不同——<span class="highlight-pink">那是她给自己造的另一张脸</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏫 千玉学园', '✍️ 学生会书记', '🎤 20 万粉 VTuber', '🎼 P 主 miasuP'],
      content: [
        '她很少去学校，因为<span class="highlight">在人多的地方会紧张到说不出话</span>。',
        '背地里她是拥有二十万粉丝的 VTuber「雪景四季」；再往前，她以「miasuP」名义投过播放量五百万的曲子。<span class="highlight-pink">父母都是音乐人，却常年不在家</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🍖 便利店相遇', '📝 加入学生会', '🎤 文化祭', '🌟 站上大舞台'],
      content: [
        '两人的相遇始于最后一个肉包——她把肉包分给主角，<span class="highlight">分法是「自己三分之一」</span>。',
        '从加入学生会到文化祭演出，她一步步走到人前。<span class="highlight-pink">最后那场演出，她既是雪景四季，也是锦亚澄</span>。'
      ],
      quote: '不擅长面对男生的我，却对学长一点也讨厌不起来呢。',
      quoteAuthor: '—— 锦亚澄'
    }
  ],
  abilities: [
    { icon: '🎤', name: '歌唱', grade: 'EX', desc: '被称作天使的嗓音，<span class="highlight">专业级实力</span>。' },
    { icon: '🎼', name: '作曲', grade: 'A', desc: '以 miasuP 名义活动的创作能力，<span class="highlight-pink">写过播放量五百万的曲子</span>。' },
    { icon: '🎧', name: '直播', grade: 'S', desc: '镜头一开就切换人格，<span class="highlight">能独自撑起整场</span>。' }
  ],
  relationships: [
    { icon: '📖', name: '和泉智宏', type: '学长 / 恋人', desc: '把她拉进学生会的人，<span class="highlight">也是她第一个不害怕的男生</span>。', cls: 'rel-romance' },
    { icon: '🎨', name: '常磐华乃', type: '队友 / 妈妈役', desc: '「雪景四季」的模型与服装都出自她手，<span class="highlight-pink">是她的创造者</span>。', cls: 'rel-friend' },
    { icon: '🎀', name: '和泉妃爱', type: '小姑', desc: '主角的妹妹，<span class="highlight">两人关系微妙又有趣</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🎧',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #09122a 25%, #0c193b 50%, #0f1f48 75%, #0a0a14 100%)",
    "glow1": "#8fa8e8",
    "glow2": "#aa8fe8",
    "particleBg": "rgba(143,168,232,0.3)",
    "gridImage": "linear-gradient(rgba(143,168,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(143,168,232,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(143,168,232,0.2), rgba(170,143,232,0.1))",
    "badgeBorder": "1px solid rgba(143,168,232,0.4)",
    "badgeColor": "#c1cff0",
    "badgeShadow": "0 2px 12px rgba(143,168,232,0.15)",
    "dotBg": "#8fa8e8",
    "nameGrad": "linear-gradient(135deg, #e2e8f8 0%, #7997e2 35%, #8fa8e8 65%, #c1cff0 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#9cb1e8",
    "titleBadgeBg": "linear-gradient(135deg, rgba(143,168,232,0.2) 0%, rgba(170,143,232,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(143,168,232,0.4)",
    "titleBadgeColor": "#c1cff0",
    "tagBg": "linear-gradient(135deg, rgba(143,168,232,0.12), rgba(143,168,232,0.06))",
    "tagBorder": "1px solid rgba(143,168,232,0.25)",
    "tagColor": "#9cb1e8",
    "ringGrad": "linear-gradient(135deg, #8fa8e8, #aa8fe8, #c1cff0, #8fa8e8) border-box",
    "avatarShadow": "0 0 60px rgba(143,168,232,0.4), 0 0 120px rgba(143,168,232,0.15)",
    "placeholderBg": "linear-gradient(180deg, #0e1d44 0%, #081026 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(143,168,232,0.5))",
    "videoPlayBg": "rgba(143,168,232,0.85)",
    "videoFallback": "linear-gradient(135deg, #0a1633, #10214c)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '常轨脱离 Creative',
        titleJp: '常軌脱離 Creative',
        meta: [
          { icon: "🎮", label: "开发：", value: "Madosoft" },
          { icon: "📅", label: "发售：", value: "2021年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "📺", label: "衍生：", value: "2024年10月动画" }
        ],
        desc: '抽签当上学生会长的男主，一个一个把问题学生拉进学生会。<span class="highlight">第三个是那个总在便利店的学妹</span>。',
        tags: [
          { cls: "dark", text: "校园" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "青春" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: '「台上台下两个人」的设定很多人写过，但亚澄的可爱在于她两个身份都很真诚。她不是在演，是在找能呼吸的地方。'
}
