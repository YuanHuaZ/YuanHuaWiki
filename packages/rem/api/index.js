/**
 * rem 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 * theme: 主题色（映射为 CSS 变量 --acc-*）
 * works: 相关作品卡片（anime/game）
 * gallery / videos: 画廊与视频数据
 */

import remImg from '../images/1.jpg'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import animeCover from '../images/a.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'

export default {
  id: 'rem',
  name: '雷姆',
  nameSub: 'Rem',
  nameJp: '雷姆',
  title: '罗兹瓦尔宅邸女仆',
  series: 'Re:从零开始的异世界生活',
  image: remImg,
  tags: [
    { text: '鬼族', cls: 'tag-blue' },
    { text: '女仆', cls: 'tag-pink' },
    { text: '温柔', cls: 'tag-green' },
    { text: '毒舌', cls: 'tag-purple' },
    { text: '女主角', cls: 'tag-orange' }
  ],
  info: [
    { icon: '🎂', label: '生日', value: '2月2日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '154cm', iconClass: 'pink' },
    { icon: '⚖️', label: '体重', value: '保密', iconClass: 'cyan' },
    { icon: '👿', label: '种族', value: '鬼族', iconClass: 'purple' },
    { icon: '🎤', label: '声优', value: '水濑祈', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: 'Re:从零开始的异世界生活', iconClass: 'cyan' },
    { icon: '🏠', label: '身份', value: '罗兹瓦尔宅邸女仆', iconClass: 'purple' },
    { icon: '💙', label: '发色', value: '蓝色', iconClass: 'cyan' },
    { icon: '🎯', label: '角色定位', value: '女主角 / 核心角色', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['💙 表面毒舌', '💪 战斗能力出众', '💜 内心温柔', '✨ 无私奉献'],
      content: [
        '雷姆是罗兹瓦尔宅邸的<span class="highlight">双胞胎女仆中的妹妹</span>，拥有蓝色的短发和刘海遮住左眼的特征。她表面上对人也<span class="highlight-pink">十分毒舌</span>，尤其是对姐姐拉姆之外的人。',
        '但在这层外壳之下，雷姆<span class="highlight">内心深处极其温柔善良</span>。她对自己的能力缺乏自信，常常认为自己不如姐姐，战斗力<span class="highlight-pink">在宅邸中也算一般</span>，但她从不因此而退缩。',
        '雷姆有着<span class="highlight">极为强烈的奉献精神</span>，为了所爱之人可以毫不犹豫地牺牲自己。她的爱是纯粹的、不求回报的，这种性格使她成为了<span class="highlight-pink">全剧最受欢迎的角色之一</span>。',
        '她对昴的感情经历了从怀疑到信任、再到<span class="highlight">深深的爱恋</span>的过程。即使知道昴心中最爱的是爱蜜莉雅，她依然<span class="highlight-pink">毫无保留地支持着他</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 蓝色短发', '👁️ 蓝色眼眸', '👗 黑白女仆装', '🌸 粉色发饰'],
      content: [
        '雷姆拥有一头<span class="highlight">漂亮的蓝色短发</span>，刘海遮住左眼，右侧的头发用粉色的发夹别起。她的眼眸同样是<span class="highlight">清澈的蓝色</span>，如同晴朗天空下的大海。',
        '作为女仆，她日常穿着<span class="highlight-pink">黑白色的女仆装</span>，头戴白色的喀秋莎头饰。女仆装的设计简洁大方，但在细节处体现了<span class="highlight">罗兹瓦尔宅邸的品味与风格</span>。',
        '战斗时，她会戴上<span class="highlight">金属手套和护具</span>，手持流星锤——虽然武器看起来笨重，但她使用起来却<span class="highlight-pink">异常灵活迅猛</span>。',
        '额头中央藏着一只<span class="highlight">发光的角</span>，这是鬼族的象征。平时被刘海遮住，只有在战斗或情绪激动时才会<span class="highlight-pink">显现发光</span>，此时她的战斗力会大幅提升。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['👿 鬼族幸存者', '🏠 罗兹瓦尔宅邸', '👯 拉姆的妹妹', '⚔️ 战斗女仆'],
      content: [
        '雷姆是<span class="highlight">鬼族的幸存者</span>，与双胞胎姐姐拉姆一同在罗兹瓦尔宅邸担任女仆。鬼族在数年前遭到魔女教的袭击，<span class="highlight-pink">几乎全族覆灭</span>，只有雷姆和拉姆幸存下来。',
        '在幼年时期，雷姆一直生活在<span class="highlight">姐姐拉姆的阴影下</span>。拉姆被称为天才，而雷姆则被认为是平庸之辈。这种自卑感让雷姆一直<span class="highlight-pink">将自己视为姐姐的替代品</span>，直到后来才逐渐找到自己的价值。',
        '来到罗兹瓦尔宅邸后，雷姆承担了<span class="highlight">大部分的家务工作</span>，包括打扫、洗衣、料理等，而拉姆则因为失去角后魔力大减，主要负责指挥和监督。雷姆<span class="highlight-pink">以姐姐为荣</span>，始终尊重和照顾着拉姆。',
        '在遇见菜月昴之后，雷姆的人生发生了<span class="highlight">重大转变</span>。虽然起初对昴充满怀疑，但经历了多次生死考验后，她<span class="highlight-pink">深深爱上了昴</span>，并成为他最坚定的支持者之一。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏰 罗兹瓦尔宅邸篇', '🐋 白鲸讨伐战', '💀 魔女教袭击', '❤️ 从零开始的告白'],
      content: [
        '雷姆首次登场于《Re:从零开始的异世界生活》的<span class="highlight">罗兹瓦尔宅邸篇</span>。起初她对昴充满警惕，甚至在一次轮回中<span class="highlight-pink">残忍地杀害了昴</span>。但在昴拼死拯救村民后，她逐渐改变了对昴的看法。',
        '在白鲸讨伐战中，雷姆<span class="highlight">拼尽全力</span>与白鲸周旋，用流星锤击中了怪物的角，为昴和库珥修的联合作战<span class="highlight-pink">争取了宝贵的时间</span>。',
        '魔女教袭击村庄时，雷姆独自一人<span class="highlight">面对强大的怠惰大罪司教</span>。尽管最终不敌，但她为了保护昴和村民而<span class="highlight-pink">英勇战斗到最后一刻</span>，展现了令人动容的牺牲精神。',
        '雷姆对昴的告白是<span class="highlight">全剧最感人的场景之一</span>——在昴最崩溃、最想放弃的时刻，是雷姆的话给了他继续前进的勇气。她说：「<span class="highlight-pink">昴是雷姆的英雄</span>」。'
      ],
      quote: '从这里开始吧。从一开始……不，从零开始。',
      quoteAuthor: '—— 雷姆'
    }
  ],
  abilities: [
    { icon: '🔨', name: '流星锤术', desc: '使用铁球流星锤进行战斗，虽然武器看起来笨重但运用起来<span class="highlight">颇为灵活</span>。凭借鬼族的力量和顽强的意志<span class="highlight-pink">弥补了技巧上的不足</span>。' },
    { icon: '👿', name: '鬼化', desc: '激活鬼族血脉后，额头上的角会发光，<span class="highlight">力量会得到一定提升</span>。能吸收周围的魔力恢复伤势，但<span class="highlight-pink">消耗极大且容易失控</span>，使用过度会失去理智。' },
    { icon: '🛡️', name: '家务全能', desc: '擅长各种家务，包括料理、打扫、洗衣等。她的料理水平<span class="highlight">在宅邸中公认第一</span>，做出的菜肴<span class="highlight-pink">能让人感受到满满的幸福</span>。' },
    { icon: '❤️', name: '奉献之爱', desc: '为了所爱之人<span class="highlight">可以毫不犹豫地牺牲自己</span>。这种纯粹无私的爱与奉献精神，使她成为了<span class="highlight-pink">支撑昴继续前进的精神支柱</span>。' }
  ],
  relationships: [
    { icon: '👦', name: '菜月昴', type: '恋人', desc: '雷姆最深爱的人。虽然起初对昴充满怀疑，但在经历了多次<span class="highlight">生死考验后深深爱上了他</span>。在昴最崩溃的时刻，是雷姆的<span class="highlight-pink">"昴是雷姆的英雄"</span>给了他继续前进的勇气。', cls: 'rel-romance' },
    { icon: '👩', name: '拉姆', type: '双胞胎姐姐', desc: '雷姆的双胞胎姐姐。幼年时拉姆被称为天才，雷姆一直<span class="highlight">生活在姐姐的阴影下</span>。但雷姆始终以姐姐为荣，<span class="highlight-pink">始终尊重和照顾着拉姆</span>，姐妹感情深厚。', cls: 'rel-family' },
    { icon: '🏠', name: '罗兹瓦尔', type: '主人', desc: '罗兹瓦尔宅邸的主人，收留了鬼族幸存的姐妹俩。他对雷姆姐妹<span class="highlight">有着复杂的目的</span>，但确实为她们提供了<span class="highlight-pink">一个可以栖身的家</span>。', cls: 'rel-other' }
  ],
  // ===== 布局数据（自 views/Detail.vue 迁移）=====
  placeholderEmoji: "💙",
  avatarSize: "150% auto",
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a1a 0%, #0a1628 25%, #0d1a2e 50%, #0a1228 75%, #0a0a1a 100%)",
    "glow1": "#3b82f6",
    "glow2": "#06b6d4",
    "particleBg": "rgba(59,130,246,0.3)",
    "gridImage": "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.1))",
    "badgeBorder": "1px solid rgba(59,130,246,0.4)",
    "badgeColor": "#93c5fd",
    "badgeShadow": "0 0 16px rgba(59,130,246,0.2)",
    "dotBg": "#3b82f6",
    "nameGrad": "linear-gradient(135deg, #dbeafe 0%, #93c5fd 40%, #06b6d4 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#93c5fd",
    "titleBadgeBg": "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.12))",
    "titleBadgeBorder": "1px solid rgba(59,130,246,0.4)",
    "titleBadgeColor": "#a5f3fc",
    "tagBg": "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.06))",
    "tagBorder": "1px solid rgba(59,130,246,0.25)",
    "tagColor": "#3b82f6",
    "ringGrad": "linear-gradient(135deg, #3b82f6, #06b6d4, #93c5fd, #3b82f6) border-box",
    "avatarShadow": "0 0 60px rgba(59,130,246,0.4), 0 0 120px rgba(59,130,246,0.15)",
    "placeholderBg": "linear-gradient(180deg, #1e3a5f 0%, #0f1b2d 50%, #0a0a1a 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(59,130,246,0.5))",
    "videoPlayBg": "rgba(59,130,246,0.85)",
    "videoFallback": "linear-gradient(135deg, #0a1628, #1e3a5f)"
  },
  works: {
    anime: [
    {
      cover: animeCover,
      label: "主要登场作品",
      title: "Re:从零开始的异世界生活",
      titleJp: "Re:ゼロから始める異世界生活",
      meta: [
      { icon: "🏢", label: "制作：", value: "WHITE FOX" },
      { icon: "📅", label: "播出：", value: "2016年4月" },
      { icon: "📺", label: "集数：", value: "全25话" },
      { icon: "🎤", label: "CV：", value: "水濑祈" }
      ],
      desc: "普通高中生菜月昴被召唤到异世界，在罗兹瓦尔宅邸遇到了<span class=\"highlight\">双胞胎女仆雷姆和拉姆</span>。雷姆作为<span class=\"highlight-pink\">鬼族幸存者与战斗女仆</span>，在故事中扮演着至关重要的角色。",
      tags: [
      { cls: "dark", text: "异世界" },
      { cls: "dark", text: "奇幻" },
      { cls: "dark", text: "冒险" },
      { cls: "live", text: "正版引进" }
      ],
      action:       { url: "https://www.bilibili.com/bangumi/play/ep307056?spm_id_from=333.337.0.0", cls: "btn-bilibili", icon: "📺", text: "在Bilibili观看" }
    }
    ],
    game: [],
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '雷姆 · 官方角色立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '雷姆 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '雷姆 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '雷姆 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '雷姆 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '雷姆 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '雷姆 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '雷姆 · 美图 07' }
    ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1Ls411i7Zc', title: '轮到蕾姆来帮你洗脑了！', desc: '雷姆 洗脑向剪辑' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1GZ4y1v7SM', title: '【Re:0】只是一分钟的告白却是我六年的救赎', desc: '雷姆 告白剪辑' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1js411a7yH', title: '【Re异世界】前前前世(雷姆,就算你被全世界忘记,你的名字会一直被我记在心里！)', desc: '雷姆 MV' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1Vs411x79o', title: '【从零开始的异世界生活】手书 两个不同的结局', desc: '雷姆 手书' }
    ]
}
