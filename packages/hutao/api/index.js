/**
 * hutao 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 * theme: 主题色（映射为 CSS 变量 --acc-*）
 * works: 相关作品卡片（anime/game）
 * gallery / videos: 画廊与视频数据
 */

import hutaoImg from '../images/1.jpg'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import gameCover from '../images/a.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'

export default {
  id: 'hutao',
  name: '胡桃',
  nameSub: 'Hu Tao',
  nameJp: '胡桃',
  title: '往生堂第七十七代堂主',
  series: '原神',
  image: hutaoImg,
  tags: [
    { text: '火元素', cls: 'tag-red' },
    { text: '长柄武器', cls: 'tag-purple' },
    { text: '往生堂堂主', cls: 'tag-dark' },
    { text: '璃月', cls: 'tag-orange' },
    { text: '五星角色', cls: 'tag-gold' }
  ],
  info: [
    { icon: '🎂', label: '生日', value: '7月15日', iconClass: 'red' },
    { icon: '📏', label: '身高', value: '157cm', iconClass: 'pink' },
    { icon: '🌟', label: '稀有度', value: '★★★★★', iconClass: 'gold' },
    { icon: '🔥', label: '神之眼', value: '火', iconClass: 'red' },
    { icon: '⚔️', label: '武器', value: '长柄武器', iconClass: 'purple' },
    { icon: '🎤', label: '声优', value: '陶典（中）', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '原神 | Genshin Impact', iconClass: 'cyan' },
    { icon: '🏛️', label: '所属', value: '往生堂', iconClass: 'purple' },
    { icon: '🎯', label: '角色定位', value: '输出 / 元素爆发', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🔥 古灵精怪', '😄 乐观开朗', '🌸 温柔细腻', '💀 生死豁达'],
      content: [
        '胡桃是璃月港<span class="highlight">往生堂第七十七代堂主</span>，年纪轻轻便肩负起管理丧葬事务的重任。她性格古灵精怪，常常语出惊人，<span class="highlight-pink">让人摸不透她的心思</span>。',
        '她热衷于推销往生堂的业务，甚至会<span class="highlight">在各种场合寻找潜在客户</span>，这种看似古怪的行为背后，其实是她对<span class="highlight-pink">生死之道的豁达理解</span>。',
        '虽然外表看起来大大咧咧，但胡桃内心<span class="highlight">非常温柔细腻</span>。她对待每一位逝者都<span class="highlight-pink">极其认真负责</span>，确保他们能够安心走完最后一程。',
        '胡桃对生死的理解远超常人。她认为<span class="highlight">生与死本就是自然的一部分</span>，不必过分畏惧或悲伤。这种<span class="highlight-pink">超然的态度</span>使她能够在面对死亡时保持从容。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 棕褐双马尾', '👁️ 梅花瞳孔', '👗 乾坤泰卦服饰', '🦋 蝴蝶元素'],
      content: [
        '胡桃拥有一头<span class="highlight">棕褐色的长发</span>，扎成标志性的双马尾，发梢渐变为<span class="highlight-pink">火红的颜色</span>，如同燃烧的火焰般绚烂。',
        '她的眼眸是独特的<span class="highlight">梅花形状瞳孔</span>，呈现出深邃的红褐色，仿佛蕴含着生死轮回的<span class="highlight-pink">神秘力量</span>。',
        '胡桃的服装以<span class="highlight">黑红为主色调</span>，融入了大量中国传统文化元素。她的外套上绣有<span class="highlight-pink">乾坤泰卦图案</span>，体现了她对阴阳之道的理解。',
        '她的身上随处可见<span class="highlight">蝴蝶元素</span>——蝴蝶装饰、蝴蝶结等，这些不仅是装饰，更象征着<span class="highlight-pink">灵魂的蜕变与超度</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏛️ 往生堂堂主', '📜 第七十七代', '🔥 火元素神之眼', '🌸 璃月守护者'],
      content: [
        '胡桃是<span class="highlight">往生堂第七十七代堂主</span>，年纪轻轻便继承了这一重要的职位。往生堂是璃月港<span class="highlight-pink">负责丧葬事务的机构</span>，在璃月有着悠久的历史和崇高的地位。',
        '虽然年纪不大，但胡桃对<span class="highlight">生死之道有着深刻的理解</span>。她的学识和能力甚至得到了<span class="highlight-pink">钟离的认可与辅佐</span>，这位神秘顾问在往生堂中扮演着重要角色。',
        '胡桃拥有<span class="highlight">火元素的神之眼</span>，这使她能够操控火焰之力进行战斗。她的战斗风格<span class="highlight-pink">灵动而华丽</span>，将长柄武器与火元素完美结合。',
        '作为璃月港的重要人物之一，胡桃与<span class="highlight">往生堂在璃月有着悠久的历史和崇高的地位</span>。她与凝光、刻晴等璃月重要人物<span class="highlight-pink">保持着良好的合作关系</span>，共同守护着璃月的安宁。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏮 初登场璃月', '🦋 引蝶之章', '🌸 海灯节', '💀 生死之诗'],
      content: [
        '胡桃在《原神》中通过传说任务<span class="highlight">「引蝶之章」</span>首次登场。旅行者在无妄坡遇见了正在举行仪式的胡桃，由此<span class="highlight-pink">展开了一段关于生死边界的故事</span>。',
        '胡桃的传说任务<span class="highlight">"引蝶之章"</span>中，她帮助一位年轻人理解<span class="highlight-pink">了生死离别的意义</span>。通过一系列事件，她展示了自己作为<span class="highlight">往生堂堂主的专业素养与温柔内心</span>。',
        '在任务中，胡桃写了一首<span class="highlight-pink">关于生死的诗</span>，虽然风格依旧古灵精怪，但字里行间透露出<span class="highlight">对生命的珍视与对死亡的坦然</span>。',
        '胡桃与钟离之间的<span class="highlight-pink">互动也是剧情的一大亮点</span>。虽然她是堂主，但对这位知识渊博的客卿<span class="highlight">充满了敬意与信任</span>，两人之间的关系既有趣又温馨。'
      ],
      quote: '生老病死，天地万象，尽在吾辈。',
      quoteAuthor: '—— 胡桃'
    }
  ],
  abilities: [
    { icon: '🔥', name: '往生秘传枪法', desc: '使用长柄武器进行<span class="highlight">至多六段的连续枪击</span>，重击可向前方突进。招式<span class="highlight-pink">灵活多变，如同翩翩起舞</span>，是胡桃持续输出的基础手段。' },
    { icon: '🦋', name: '蝶引来生', desc: '胡桃的<span class="highlight">核心战斗技能</span>，消耗生命值获得<span class="highlight-pink">火元素附魔</span>，大幅提升攻击力。此时她的攻击将附带额外的火元素伤害，<span class="highlight">输出能力显著提升</span>。' },
    { icon: '💀', name: '安神秘法',  desc: '召唤强大的<span class="highlight">火焰之力</span>对范围内敌人造成<span class="highlight-pink">巨额火元素伤害</span>。此技能不仅威力巨大，视觉效果也极为华丽，是胡桃<span class="highlight">最具标志性的技能</span>。' },
    { icon: '🌸', name: '往生堂主的智慧',  desc: '作为往生堂堂主，胡桃对<span class="highlight">生死之道有着超乎常人的理解</span>。这种智慧不仅体现在战斗中，更体现在她<span class="highlight-pink">对待生命的态度</span>上。' }
  ],
  relationships: [
    { icon: '🧔', name: '钟离', type: '客卿/顾问', desc: '往生堂的神秘客卿，知识渊博、举止优雅。胡桃对他<span class="highlight">充满敬意与信任</span>，虽然常让他跑腿办事，但实际上<span class="highlight-pink">非常依赖这位可靠的顾问</span>。两人关系亦师亦友。', cls: 'rel-friend' },
    { icon: '👻', name: '七七', type: '业务相关', desc: '不卜庐的僵尸药师。胡桃认为七七<span class="highlight">作为已死之人却仍在世间徘徊</span>，理应被送去往生。她<span class="highlight-pink">一直想超度七七</span>，但每次都未能成功，这也成了两人之间有趣的互动。', cls: 'rel-other' },
    { icon: '👩‍🍳', name: '香菱', type: '好友', desc: '万民堂的厨师，与胡桃关系很好。两人经常<span class="highlight">一起讨论美食与人生</span>，胡桃也很喜欢香菱做的<span class="highlight-pink">各种创意料理</span>，尽管有些料理看起来也很"黑暗"。', cls: 'rel-friend' }
  ],
  // ===== 布局数据（自 views/Detail.vue 迁移）=====
  placeholderEmoji: "🏮",
  avatarSize: "cover",
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a1a 0%, #1a0a0a 25%, #2e1a0d 50%, #280a10 75%, #0a0a1a 100%)",
    "glow1": "#f97316",
    "glow2": "#ef4444",
    "particleBg": "rgba(249,115,22,0.3)",
    "gridImage": "linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(251,146,60,0.1))",
    "badgeBorder": "1px solid rgba(249,115,22,0.4)",
    "badgeColor": "#fdba74",
    "badgeShadow": "0 0 20px rgba(249,115,22,0.2)",
    "dotBg": "#f97316",
    "nameGrad": "linear-gradient(135deg, #fff 0%, #fb923c 40%, #f97316 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#fdba74",
    "titleBadgeBg": "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(251,146,60,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(249,115,22,0.4)",
    "titleBadgeColor": "#fdba74",
    "tagBg": "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,146,60,0.06))",
    "tagBorder": "1px solid rgba(249,115,22,0.25)",
    "tagColor": "#fdba74",
    "ringGrad": "linear-gradient(135deg, #f97316, #fb923c, #f97316) border-box",
    "avatarShadow": "0 0 60px rgba(249,115,22,0.4), 0 0 120px rgba(249,115,22,0.15)",
    "placeholderBg": "linear-gradient(180deg, #5e2f1f 0%, #2e1a0a 50%, #0a0a1a 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(249,115,22,0.5))",
    "videoPlayBg": "rgba(249,115,22,0.85)",
    "videoFallback": "linear-gradient(135deg, #1a0a0a, #5e2f1f)"
  },
  works: {
    anime: [
    {
      cover: gameCover,
      label: "主要登场作品",
      title: "原神 | Genshin Impact",
      titleJp: "Genshin Impact",
      meta: [
      { icon: "🏢", label: "开发：", value: "miHoYo / 米哈游" },
      { icon: "📅", label: "发行：", value: "2020年9月" },
      { icon: "🎮", label: "类型：", value: "开放世界ARPG" },
      { icon: "🎤", label: "CV：", value: "陶典（中）" }
      ],
      desc: "在提瓦特大陆上，旅行者结识了众多伙伴。胡桃作为<span class=\"highlight\">往生堂第七十七代堂主</span>，以她<span class=\"highlight-pink\">独特的性格和强大的火元素力量</span>成为了璃月地区最受欢迎的角色之一。",
      tags: [
      { cls: "dark", text: "开放世界" },
      { cls: "dark", text: "ARPG" },
      { cls: "dark", text: "二次元" },
      { cls: "live", text: "免费游玩" }
      ],
      action:       { url: "https://www.yuanshen.com/#/", cls: "btn-hutao", icon: "🎮", text: "前往官网" }
    }
    ],
    game: [],
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '胡桃 · 官方角色立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '胡桃 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '胡桃 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '胡桃 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '胡桃 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '胡桃 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '胡桃 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '胡桃 · 美图 07' }
    ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1Dp4y1H7RE/', title: '胡桃单曲《嗷》', desc: '胡桃 原创单曲' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1o3411g7BP/', title: '【原神夏日放映节】动画短片—「燃火之蝶」', desc: '胡桃 动画短片' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1qb4y1o7jK/', title: '【原神手书】胡桃个人向-《起风了》', desc: '胡桃 个人向手书' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1aH4y1z7dA/', title: '胡桃单曲《三拜红尘凉》', desc: '胡桃 原创单曲' }
    ]
}
