/**
 * manaka 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '长尾爱歌',
  title: '天使的歌姬',
  info: [
    { icon: '📏', label: '身高', value: '158cm', iconClass: 'purple' },
    { icon: '🎂', label: '年龄', value: '15岁', iconClass: 'pink' },
    { icon: '🩸', label: '血型', value: 'A型', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: 'MoeMi（日）/ 潘敏（中）', iconClass: 'purple' },
    { icon: '🎭', label: '代号', value: 'ANGE', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: 'P5X / 女神异闻录：夜幕魅影', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🎙️ 天使的歌声', '😔 沉重', '🤝 渴望被需要', '💪 康复中'],
      content: [
        '她的嗓音干净到被称为「天使的歌声」。<span class="highlight">但这份天赋也把她推下了楼顶</span>。',
        '被网络恶意评论击垮后，她一度失去唱歌的欲望。现在的她怕生、敏感、爱钻牛角尖，<span class="highlight-pink">却每天都在做康复训练</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 蓝色长发', '👁️ 粉色眼眸', '🪶 羽毛发饰', '♿ 轮椅'],
      content: [
        '蓝色长发配上粉色眼睛，头上有羽毛状的发饰。<span class="highlight">整个人像一件易碎品</span>。',
        '她长期坐在轮椅上，把麦克风支架当拐杖用。<span class="highlight-pink">站起来唱歌是她给自己的目标</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🌐 翻唱歌手 ANGE', '💬 网络暴力', '👵 祖母千津子', '🏥 康复训练'],
      content: [
        '她曾以「ANGE」为名在网上投稿翻唱，清澈的歌声被许多人喜欢。<span class="highlight">然后恶意评论来了</span>。',
        '是祖母长尾千津子和主人公把她从楼顶劝了下来。<span class="highlight-pink">现在她一边康复，一边找重新开口的理由</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏙️ 楼顶', '🎭 成为怪盗', '🎤 重新歌唱', '🪶 一步步站起来'],
      content: [
        '她轻生的那个夜晚，是主人公觉醒的契机之一。<span class="highlight">从此两人的命运绑在一起</span>。',
        '成为怪盗后，她第一次在别人面前完整唱完一首歌。<span class="highlight-pink">歌声不是用来被评价的，是用来传达的</span>。'
      ],
      quote: '我想把声音，传达到有人需要的地方。',
      quoteAuthor: '—— 长尾爱歌'
    }
  ],
  abilities: [
    { icon: '🎙️', name: '千籁重歌', grade: 'EX', desc: '让同伴进入额外回合，<span class="highlight">把状态回溯到最该出手的一刻</span>。' },
    { icon: '💚', name: '治疗与净化', grade: 'S', desc: '解除异常、回复生命，<span class="highlight-pink">像她本人一样温柔</span>。' },
    { icon: '💪', name: '康复训练', grade: 'A', desc: '每天一点点的复健，<span class="highlight">比任何技能都难</span>。' }
  ],
  relationships: [
    { icon: '🕶️', name: '主人公', type: '被拯救 / 拯救', desc: '把她从楼顶拉回来的人，<span class="highlight">也是她重新歌唱的理由</span>。', cls: 'rel-romance' },
    { icon: '👵', name: '长尾千津子', type: '祖母', desc: '爵士乐手，<span class="highlight-pink">她歌声最初的来处</span>。', cls: 'rel-family' },
    { icon: '🎧', name: '鹿野莓', type: '同好', desc: '一起追动画的朋友，<span class="highlight">少数能聊得来的人</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🎙️',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #05182e 25%, #072141 50%, #08284f 75%, #0a0a14 100%)",
    "glow1": "#6ba8f0",
    "glow2": "#7c6bf0",
    "particleBg": "rgba(107,168,240,0.3)",
    "gridImage": "linear-gradient(rgba(107,168,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(107,168,240,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(107,168,240,0.2), rgba(124,107,240,0.1))",
    "badgeBorder": "1px solid rgba(107,168,240,0.4)",
    "badgeColor": "#bbd6f6",
    "badgeShadow": "0 2px 12px rgba(107,168,240,0.15)",
    "dotBg": "#6ba8f0",
    "nameGrad": "linear-gradient(135deg, #e0ecfb 0%, #6ca8ee 35%, #6ba8f0 65%, #bbd6f6 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#92bef1",
    "titleBadgeBg": "linear-gradient(135deg, rgba(107,168,240,0.2) 0%, rgba(124,107,240,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(107,168,240,0.4)",
    "titleBadgeColor": "#bbd6f6",
    "tagBg": "linear-gradient(135deg, rgba(107,168,240,0.12), rgba(107,168,240,0.06))",
    "tagBorder": "1px solid rgba(107,168,240,0.25)",
    "tagColor": "#92bef1",
    "ringGrad": "linear-gradient(135deg, #6ba8f0, #7c6bf0, #bbd6f6, #6ba8f0) border-box",
    "avatarShadow": "0 0 60px rgba(107,168,240,0.4), 0 0 120px rgba(107,168,240,0.15)",
    "placeholderBg": "linear-gradient(180deg, #08264a 0%, #04152a 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(107,168,240,0.5))",
    "videoPlayBg": "rgba(107,168,240,0.85)",
    "videoFallback": "linear-gradient(135deg, #061d38, #082b53)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: '女神异闻录：夜幕魅影',
        titleJp: 'P5X',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "完美世界 黑羽工作室 × Atlus" },
          { icon: "📅", label: "上线：", value: "2024年4月" },
          { icon: "🕹️", label: "类型：", value: "回合制 JRPG" },
          { icon: "💻", label: "平台：", value: "移动 / PC" }
        ],
        desc: '一个被恶意评论击垮的少女，在怪盗团里慢慢学会重新开口。<span class="highlight">她的战斗方式，是把声音还给别人</span>。',
        tags: [
          { cls: "dark", text: "都市" },
          { cls: "dark", text: "怪盗" },
          { cls: "dark", text: "RPG" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '长尾爱歌 · 官方立绘' }
  ],
  videos: []
}
