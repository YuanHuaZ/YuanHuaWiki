/**
 * dusk 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '夕',
  title: '炎国画家',
  info: [
    { icon: '🎂', label: '生日', value: '11月11日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '162cm', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: 'yukana', iconClass: 'cyan' },
    { icon: '🐉', label: '种族', value: '未公开（巨兽）', iconClass: 'purple' },
    { icon: '🎨', label: '职业', value: '术师 / 画家', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '明日方舟', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🎨 只对画有兴趣', '🛋️ 不想出门也不想工作', '🗯️ 毒舌', '🌀 有点怕'],
      content: [
        '夕对绝大多数事都没兴趣，<span class="highlight">包括工作、社交和出门</span>。她在走廊上做了个门，然后就不出来了。',
        '可她的画会让见过的人念念不忘。<span class="highlight-pink">她高兴起来还是会画的，只是不爱给人看</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 黑色长发', '👁️ 红色眼眸', '🐉 角与纹身', '👗 炎国风长衣'],
      content: [
        '黑发红瞳，头侧有角，身上有纹身，穿一身炎国风的长衣。<span class="highlight">整个人像一幅还没干的水墨</span>。',
        '她赤脚、穿高跟鞋、走路没声音。<span class="highlight-pink">门后是她自己的小天地，别人进去会看到山</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🐉 岁相之一', '🎨 炎国画家', '🏮 被年拽来罗德岛', '🌌 画中世界'],
      content: [
        '她是「岁」的碎片之一，与年、令等同源。<span class="highlight">活得比任何人都久</span>。',
        '她被年以访客身份拽到罗德岛，住在偏僻走道的墙内。<span class="highlight-pink">她的房间大概是罗德岛最不像房间的地方</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏮 被拽上岸', '🖌️ 画中自在', '🌌 岁相之影', '🗡️ 她必须出手的时候'],
      content: [
        '她大部分时间都在睡、在画、在躲人。<span class="highlight">但牵扯到「岁」的时候，她比谁都认真</span>。',
        '她的画笔既是创作也是杀器——<span class="highlight-pink">画出来的东西会真的存在</span>。'
      ],
      quote: '我只是想安静地画完这幅画。',
      quoteAuthor: '—— 夕'
    }
  ],
  abilities: [
    { icon: '🖌️', name: '画中造物', grade: 'EX', desc: '笔下的山水与生灵会具现化，<span class="highlight">攻守一体</span>。' },
    { icon: '🌌', name: '岁相之力', grade: 'S', desc: '巨兽碎片的权能，<span class="highlight-pink">足以改写一片空间</span>。' },
    { icon: '🛋️', name: '不动如山', grade: 'A', desc: '能连续几天不出门，<span class="highlight">罗德岛记录保持者</span>。' }
  ],
  relationships: [
    { icon: '🔥', name: '年', type: '姐妹', desc: '把她硬拽来罗德岛的人，<span class="highlight">两人互相嫌弃又离不开</span>。', cls: 'rel-family' },
    { icon: '📜', name: '令', type: '姐妹', desc: '岁相中的另一位，<span class="highlight-pink">能和她聊到一处去</span>。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🖌️',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #15191e 25%, #1d232a 50%, #242a33 75%, #0a0a14 100%)",
    "glow1": "#7f8fa6",
    "glow2": "#867fa6",
    "particleBg": "rgba(127,143,166,0.3)",
    "gridImage": "linear-gradient(rgba(127,143,166,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(127,143,166,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(127,143,166,0.2), rgba(134,127,166,0.1))",
    "badgeBorder": "1px solid rgba(127,143,166,0.4)",
    "badgeColor": "#d4d8de",
    "badgeShadow": "0 2px 12px rgba(127,143,166,0.15)",
    "dotBg": "#7f8fa6",
    "nameGrad": "linear-gradient(135deg, #ebedef 0%, #a0abba 35%, #7f8fa6 65%, #d4d8de 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#b9c0ca",
    "titleBadgeBg": "linear-gradient(135deg, rgba(127,143,166,0.2) 0%, rgba(134,127,166,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(127,143,166,0.4)",
    "titleBadgeColor": "#d4d8de",
    "tagBg": "linear-gradient(135deg, rgba(127,143,166,0.12), rgba(127,143,166,0.06))",
    "tagBorder": "1px solid rgba(127,143,166,0.25)",
    "tagColor": "#b9c0ca",
    "ringGrad": "linear-gradient(135deg, #7f8fa6, #867fa6, #d4d8de, #7f8fa6) border-box",
    "avatarShadow": "0 0 60px rgba(127,143,166,0.4), 0 0 120px rgba(127,143,166,0.15)",
    "placeholderBg": "linear-gradient(180deg, #212730 0%, #13161b 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(127,143,166,0.5))",
    "videoPlayBg": "rgba(127,143,166,0.85)",
    "videoFallback": "linear-gradient(135deg, #191e24, #262c36)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '明日方舟',
        titleJp: 'アークナイツ',
        meta: [
          { icon: "🏢", label: "开发：", value: "鹰角网络" },
          { icon: "📅", label: "上线：", value: "2019年5月" },
          { icon: "🕹️", label: "类型：", value: "塔防 RPG" },
          { icon: "💻", label: "平台：", value: "移动" }
        ],
        desc: '巨兽「岁」的碎片散落人间，化作一个个不肯低头的存在。<span class="highlight">夕是其中最懒、也最像画的一笔</span>。',
        tags: [
          { cls: "dark", text: "末世" },
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
  review: '夕这种「强到离谱但只想躺着」的设定太好用了。她不用力的时候最好看，一出手就是整片天地变成画。'
}
