/**
 * cecilia 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '塞西莉亚',
  title: '小镇教堂的圣女',
  info: [
    { icon: '🎂', label: '生日', value: '某个冬天', iconClass: 'purple' },
    { icon: '💇', label: '发色', value: '浅绿色', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '泽田姬（TV动画）', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '白圣女与黑牧师', iconClass: 'purple' },
    { icon: '⛪', label: '身份', value: '小镇教堂的圣女', iconClass: 'cyan' },
    { icon: '🎯', label: '角色定位', value: '女主角', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🕊️ 天然呆', '🌱 喜怒形于色', '😴 在劳伦斯面前很懒散', '💚 治愈系'],
      content: [
        '塞西莉亚是个<span class="highlight">天然呆到像小动物一样的女孩</span>。镇上的人信赖她、仰慕她，可她一转身就会平地摔、把水坑踩得满身泥。',
        '她的情绪全写在脸上：被劳伦斯夸一句就<span class="highlight-pink">高兴得藏不住</span>，看到他和别人亲近就闹别扭。只有在劳伦斯面前，她才敢把那份懒散和任性露出来。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 浅绿长发', '👁️ 绿色眼眸', '🥻 头纱与圣女服', '👢 过膝靴'],
      content: [
        '浅绿色的长发垂到腰际，盘起时露出后颈，两侧留出不对称的鬓发。绿色的眼睛<span class="highlight">干净得像林间的光</span>，看向劳伦斯时会微微发亮。',
        '圣女服外披着薄薄的头纱，脚下是过膝靴。她怕打雷，每次雷雨夜都会<span class="highlight-pink">抱着枕头往劳伦斯房间跑</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['⛪ 教会的圣女', '👵 奶奶玛丽亚娜拉', '🌲 森林深处长大', '🌊 预知梦救下城镇'],
      content: [
        '她还没懂事就接受了天启，成为圣女，被没有血缘的奶奶玛丽亚娜拉<span class="highlight">在森林深处的小屋里养大</span>，学会了圣女该懂的一切。',
        '奶奶去世那晚，她梦见有人被洪水冲走，于是连着几天站在路边请求镇上拆桥。刚当上牧师的劳伦斯信了她，<span class="highlight-pink">两人一起说服居民拆掉了那座桥</span>——几天后真的下了百年不遇的暴雨。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['💌 暗恋劳伦斯', '🍰 巧克力蛋糕', '⛈️ 怕打雷', '👭 与海泽丽塔'],
      content: [
        '她喜欢劳伦斯，却<span class="highlight">完全不知道怎么表达</span>。收到他写下自己名字的纸片会偷偷珍藏，看到他和其他人举止亲密就一个人胡思乱想。',
        '故事没有大风大浪，只有小教堂里一天天的<span class="highlight-pink">祈祷、做饭、争吵和和好</span>。她在劳伦斯的指导下做出第一块巧克力蛋糕，亲手送出去的那一刻，比任何圣迹都更像奇迹。'
      ],
      quote: '我啊，只要能在你身边，就已经很幸福了。',
      quoteAuthor: '—— 塞西莉亚'
    }
  ],
  abilities: [
    { icon: '🕊️', name: '天启', grade: 'EX', desc: '圣女与生俱来的<span class="highlight">预知能力</span>，能在梦中看见灾厄的片段。正是这份天启让她救下了整座城镇。' },
    { icon: '💚', name: '治愈与祈祷', grade: 'S', desc: '作为圣女的本职。她的祈祷能让不安的人<span class="highlight-pink">平静下来</span>，也是镇上居民依赖她的原因。' },
    { icon: '🌱', name: '天然呆的感染力', grade: 'A', desc: '平地摔、把事搞砸、然后又笑着站起来——这种毫无防备的笨拙，反而<span class="highlight">让身边的人都软了心</span>。' }
  ],
  relationships: [
    { icon: '⛪', name: '劳伦斯', type: '暗恋对象', desc: '收留她的黑牧师。她所有的小心思都绕着这个人转，<span class="highlight">夸奖、嫉妒、赌气</span>，全是他。', cls: 'rel-romance' },
    { icon: '👵', name: '玛丽亚娜拉', type: '奶奶', desc: '没有血缘却把她养大的圣女奶奶，教会了她<span class="highlight-pink">做圣女的一切</span>，也是她心里最柔软的地方。', cls: 'rel-family' },
    { icon: '👭', name: '海泽丽塔', type: '朋友', desc: '占卜师口中「新的邂逅」。两人一见如故，成了<span class="highlight">能一起说悄悄话的朋友</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🕊️',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #132014 25%, #1a2d1c 50%, #203722 75%, #0a0a14 100%)",
    "glow1": "#86b98a",
    "glow2": "#86b9a8",
    "particleBg": "rgba(134,185,138,0.3)",
    "gridImage": "linear-gradient(rgba(134,185,138,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(134,185,138,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(134,185,138,0.2), rgba(134,185,168,0.1))",
    "badgeBorder": "1px solid rgba(134,185,138,0.4)",
    "badgeColor": "#d0e1d2",
    "badgeShadow": "0 2px 12px rgba(134,185,138,0.15)",
    "dotBg": "#86b98a",
    "nameGrad": "linear-gradient(135deg, #e9f1ea 0%, #99c29c 35%, #86b98a 65%, #d0e1d2 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#b4d0b6",
    "titleBadgeBg": "linear-gradient(135deg, rgba(134,185,138,0.2) 0%, rgba(134,185,168,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(134,185,138,0.4)",
    "titleBadgeColor": "#d0e1d2",
    "tagBg": "linear-gradient(135deg, rgba(134,185,138,0.12), rgba(134,185,138,0.06))",
    "tagBorder": "1px solid rgba(134,185,138,0.25)",
    "tagColor": "#b4d0b6",
    "ringGrad": "linear-gradient(135deg, #86b98a, #86b9a8, #d0e1d2, #86b98a) border-box",
    "avatarShadow": "0 0 60px rgba(134,185,138,0.4), 0 0 120px rgba(134,185,138,0.15)",
    "placeholderBg": "linear-gradient(180deg, #1e3420 0%, #111d12 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(134,185,138,0.5))",
    "videoPlayBg": "rgba(134,185,138,0.85)",
    "videoFallback": "linear-gradient(135deg, #162718, #223a24)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '白圣女与黑牧师',
        titleJp: '白聖女と黒牧師',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "动画工房" },
          { icon: "📅", label: "播出：", value: "2023年7月" },
          { icon: "📺", label: "集数：", value: "全12话" },
          { icon: "🎤", label: "CV：", value: "泽田姬" }
        ],
        desc: '远离人烟的小教堂里，懒散的圣女和一本正经的黑牧师过着<span class="highlight">鸡同鸭讲的日常</span>。一个把心事全写在脸上，一个迟钝到毫无察觉——甜得发闷的治愈恋爱喜剧。',
        tags: [
          { cls: "dark", text: "奇幻" },
          { cls: "dark", text: "治愈" },
          { cls: "dark", text: "恋爱" },
          { cls: "live", text: "正版引进" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '塞西莉亚 · 官方立绘' }
  ],
  videos: []
}
