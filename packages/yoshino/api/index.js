/**
 * yoshino 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 * theme: 主题色（映射为 CSS 变量 --acc-*）
 * works: 相关作品卡片（anime/game）
 * gallery / videos: 画廊与视频数据
 */

import meta from '../meta.js'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/13.jpg'
import img14 from '../images/14.jpg'
import img15 from '../images/15.jpg'
import img16 from '../images/16.jpg'
import img1 from '../images/1.jpg'
import animeCover from '../images/a.jpg'
import gameCover from '../images/b.jpg'
import gameCover2 from '../images/b2.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'

export default {
  ...meta,
  nameJp: '氷芽川四糸乃',
  title: '隐居者（Hermit）',
  info: [
    { icon: '🎤', label: '声优', value: '野水伊織', iconClass: 'blue' },
    { icon: '🎂', label: '生日', value: '3月20日', iconClass: 'pink' },
    { icon: '♓', label: '星座', value: '双鱼座', iconClass: 'cyan' },
    { icon: '📏', label: '身高', value: '144cm', iconClass: 'blue' },
    { icon: '⚖️', label: '体重', value: '34kg', iconClass: 'pink' },
    { icon: '🔢', label: '识别名', value: '隐居者（Hermit）', iconClass: 'cyan' },
    { icon: '👼', label: '天使', value: '冰结傀儡（Zadkiel）', iconClass: 'blue' },
    { icon: '👗', label: '灵装', value: '神威灵装·四番（El）', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '约会大作战', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🐰 极度胆怯', '💧 爱哭', '🎭 靠四糸奈交流', '💙 内心温柔'],
      content: [
        '四糸乃是<span class="highlight">极度腼腆内向</span>的少女，性格温驯而胆怯。她几乎不敢与人进行直接的眼神交流，一旦面对陌生人就会<span class="highlight-pink">害怕得说不出话</span>，严重时甚至会哭出来。',
        '她左手常拿着兔子手偶<span class="highlight">「四糸奈」</span>，这是由灵力链接而存在的<span class="highlight-pink">独立人格</span>，也是她最好的朋友和精神依靠。四糸奈用开朗的语气代替四糸乃说话，成为了她<span class="highlight-pink">与外界交流的唯一窗口</span>。',
        '尽管外表柔弱，四糸乃的<span class="highlight">内心其实渴望与他人建立联系</span>。她害怕孤独，害怕伤害别人，更害怕被别人伤害。这份温柔正是她<span class="highlight-pink">作为精灵却不愿战斗</span>的原因——她只是想要一个可以安心容身的地方。',
        '在与五河士道的相遇后，四糸乃<span class="highlight-pink">逐渐变得勇敢</span>。虽然依然腼腆，但她学会了在重要时刻用自己的声音说话。她的成长是约会大作战中<span class="highlight">最令人心疼也最令人欣慰</span>的故事线之一。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💙 水蓝色长发', '👁️ 蓝色眼眸', '🧥 绿色兔耳斗篷', '🐰 左手兔型手偶'],
      content: [
        '四糸乃拥有一头<span class="highlight">柔顺的水蓝色长发</span>，如同冬日初雪般纯净梦幻。刘海整齐地覆盖在前额，两侧各有一缕<span class="highlight-pink">较长的鬓发</span>垂至胸前，更增添了几分少女的柔弱感。长相宛若<span class="highlight">法国娃娃般美丽</span>，是典型的梦幻美少女。',
        '她的眼睛是<span class="highlight">清澈的蓝色</span>，如同融化的冰水般晶莹剔透。大多数时候，那双眼睛中总是<span class="highlight-pink">噙着泪水</span>，让人忍不住想要保护她。当她难得露出笑容时，整个世界都仿佛变得明亮起来。',
        '四糸乃的灵装为<span class="highlight">「神威灵装·四番（El）」</span>——一件饰有<span class="highlight-pink">兔耳的绿色斗篷</span>，充满童话般的梦幻感。左手永远戴着名为「四糸奈」的<span class="highlight">兔子手偶</span>——这是她由灵力链接而生的、最重要的伙伴。',
        '她的身材属于<span class="highlight-pink">娇小玲珑</span>的类型。右手习惯性地<span class="highlight">攥着斗篷边缘</span>——这是她紧张时的标志性小动作。实际上她已存在<span class="highlight">约37年</span>，外表却始终维持在<span class="highlight-pink">13岁左右的少女模样</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🌊 第二精灵', '👼 天使·冰结傀儡', '🏷️ 识别名·隐居者', '💙 与士道相遇'],
      content: [
        '四糸乃是士道见到的<span class="highlight">第二个精灵</span>，识别名为<span class="highlight">「隐居者（Hermit）」</span>。与大多数精灵不同，她<span class="highlight-pink">极端厌恶战斗</span>，只希望能安静地、不伤害任何人地活着。',
        '她的天使是<span class="highlight">「冰结傀儡（Zadkiel）」</span>——一只由冰构成的巨大兔型傀儡。Zadkiel在平时以小巧可爱的形态陪伴在四糸乃身边，战斗时则会<span class="highlight-pink">巨大化并释放强大的冰冻能力</span>。',
        '四糸乃最初因为无法控制自己的力量而被AST（対精霊部隊）追杀。她<span class="highlight">独自一人躲在雨中</span>，默默地哭泣着。直到五河士道的出现——他不惧怕她，反而对她<span class="highlight-pink">伸出了温柔的手</span>。',
        '在与士道和拉塔托斯克（Ratatoskr）相遇后，四糸乃<span class="highlight">逐渐走出了孤独的阴影</span>。她开始学会用自己的声音说话，学会了相信别人，也学会了<span class="highlight-pink">为了重要的人鼓起勇气</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🌧️ 雨中的相遇', '💙 第一次约会', '👼 天使的暴走', '🐰 四糸奈的秘密'],
      content: [
        '四糸乃的故事始于一场<span class="highlight">连绵不断的雨</span>。AST的追捕使她陷入了极度恐慌，她的灵力引发了一场几乎淹没整座城市的暴雨。在这片灰暗的雨幕中，五河士道<span class="highlight-pink">不带任何敌意地走向了她</span>——这是两人命运交织的开始。',
        '士道在拉塔托斯克的支援下与四糸乃进行<span class="highlight">约会</span>，目标是<span class="highlight-pink">通过接吻封印她的灵力</span>。这场约会对士道来说是前所未有的挑战——因为四糸乃几乎不开口说话，所有交流都要通过<span class="highlight">四糸奈</span>来进行。',
        '当四糸乃的情绪波动到极限时，她的天使<span class="highlight">Zadkiel会失控暴走</span>。这让士道第一次切身体会到精灵的<span class="highlight-pink">孤独与恐惧</span>——四糸乃并不想伤害任何人，她只是太害怕了。',
        '最终，士道用一个温暖的拥抱和一句「我会保护你」打动了四糸乃。当两人的唇相触的那一刻，<span class="highlight">暴雨骤停，阳光破云而出</span>。四糸乃的灵力被封印，而她终于<span class="highlight-pink">找到了属于自己的容身之处</span>——就在士道的身边。'
      ],
      quote: '四糸奈是我的理想，是我心目中的英雄。我希望变得像四糸奈一样强大、坚强、帅气。',
      quoteAuthor: '—— 氷芽川四糸乃'
    }
  ],
  abilities: [
    { icon: '👼', name: '冰结傀儡（Zadkiel）', grade: 'S', desc: '四糸乃的天使，<span class="highlight">巨大的冰之兔型傀儡</span>。能自由操控冰与水，释放<span class="highlight-pink">足以冻结整座城市</span>的极寒之力。平时以迷你尺寸陪伴在侧。' },
    { icon: '❄️', name: '冰水操控', grade: 'A', desc: '随意操控<span class="highlight">冰与水的形态变化</span>。从召唤暴雨到冻结万物，从制造冰墙到<span class="highlight-pink">创造冰之分身</span>，能力范围极为广泛。' },
    { icon: '🛡️', name: '冻铠（Siryon）', grade: 'A', desc: 'Zadkiel的上级技能。<span class="highlight">将冰结傀儡化为盔甲包裹全身</span>，使力量更加集中强大。双手十指交合可<span class="highlight-pink">形成巨大的圆锥体冰块</span>，以夹带灵力的雨水及寒气张开防御结界。' },
    { icon: '🐰', name: '四糸奈（灵力人格）', grade: 'B', desc: '由灵力链接而生的<span class="highlight">独立人格</span>，四糸乃最好的朋友与精神依靠。<span class="highlight-pink">代替内向的她与他人对话</span>，失去四糸奈时四糸乃会陷入极度恐慌并可能失控暴走。' }
  ],
  relationships: [
    { icon: '👦', name: '五河士道', type: '拯救者/恋人', desc: '四糸乃<span class="highlight">第一个信任的人类</span>。士道在雨中向她伸出手的那一刻，成为了她<span class="highlight-pink">从孤独中走出来的起点</span>。封印后视士道为最重要的人，会努力用自己的声音表达感情。', cls: 'rel-romance' },
    { icon: '🐰', name: '四糸奈', type: '不可替代的搭档', desc: '由灵力链接而生的<span class="highlight">独立人格</span>，四糸乃最好的朋友与精神依靠。<span class="highlight-pink">代替内向的四糸乃与他人对话</span>。失去四糸奈时四糸乃会陷入极度恐慌并可能暴走——因为那是她<span class="highlight">唯一能表达自我的窗口</span>。', cls: 'rel-friend' },
    { icon: '👧', name: '五河琴里', type: '司令/妹妹', desc: '拉塔托斯克的司令官，士道的妹妹。琴里在攻略四糸乃时<span class="highlight">提供了关键的支援</span>，虽然方式有时过于<span class="highlight-pink">激进直接</span>，但四糸乃对此心怀感激。', cls: 'rel-friend' },
    { icon: '🌸', name: '夜刀神十香', type: '同为精灵的伙伴', desc: '与四糸乃同期被封印的<span class="highlight">精灵同伴</span>。十香的直率开朗与四糸乃的腼腆形成<span class="highlight-pink">鲜明对比</span>，但两人在一起时意外地和谐——十香会保护四糸乃，四糸乃则以温柔回馈。', cls: 'rel-friend' }
  ],
  // ===== 布局数据（自 views/Detail.vue 迁移）=====
  placeholderEmoji: "⭐",
  avatarSize: "cover",
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a1020 0%, #0a1a3a 25%, #102040 50%, #0a1a3a 75%, #0a1020 100%)",
    "glow1": "#3b82f6",
    "glow2": "#06b6d4",
    "particleBg": "rgba(59,130,246,0.3)",
    "gridImage": "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(96,165,250,0.1))",
    "badgeBorder": "1px solid rgba(59,130,246,0.4)",
    "badgeColor": "#60a5fa",
    "badgeShadow": "0 0 20px rgba(59,130,246,0.2)",
    "dotBg": "#3b82f6",
    "nameGrad": "linear-gradient(135deg, #fff 0%, #60a5fa 40%, #3b82f6 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#60a5fa",
    "titleBadgeBg": "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(96,165,250,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(59,130,246,0.4)",
    "titleBadgeColor": "#60a5fa",
    "tagBg": "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(96,165,250,0.06))",
    "tagBorder": "1px solid rgba(59,130,246,0.25)",
    "tagColor": "#60a5fa",
    "ringGrad": "linear-gradient(135deg, #3b82f6, #60a5fa, #3b82f6) border-box",
    "avatarShadow": "0 0 60px rgba(59,130,246,0.4), 0 0 120px rgba(59,130,246,0.15)",
    "videoPlayBg": "rgba(59,130,246,0.85)",
    "videoFallback": "linear-gradient(135deg, #0f172a, #1e3a5f)"
  },
  works: {
    anime: [
    {
      cover: animeCover,
      label: "主要登场作品",
      title: "约会大作战",
      titleJp: "デート・ア・ライブ",
      meta: [
      { icon: "🏢", label: "制作：", value: "AIC PLUS+（第1季）/ J.C.STAFF（第3季）" },
      { icon: "📅", label: "播出：", value: "2013年~2022年（共4季）" },
      { icon: "📺", label: "集数：", value: "全四季48话 + 剧场版" },
      { icon: "🎤", label: "CV：", value: "野水伊織" }
      ],
      desc: "四月十日的春假期间，五河士道在雨中邂逅了灵力失控中的第二精灵——<span class=\"highlight\">「隐居者」四糸乃</span>。为了拯救她免于被AST消灭的命运，士道必须通过<span class=\"highlight-pink\">约会和接吻</span>来封印她的灵力。",
      tags: [
      { cls: "dark", text: "恋爱" },
      { cls: "dark", text: "奇幻" },
      { cls: "dark", text: "战斗" },
      { cls: "live", text: "正版引进" }
      ],
      action:       { url: "https://www.bilibili.com/bangumi/play/ep102835?spm_id_from=333.337.0.0", cls: "btn-bilibili", icon: "📺", text: "在Bilibili观看" }
    }
    ],
    game: [
    {
      cover: gameCover2,
      label: "相关游戏 1",
      title: "约会大作战：莲反乌托邦",
      titleJp: "デート・ア・ライブ 蓮ディストピア",
      meta: [
      { icon: "🏢", label: "开发商：", value: "Compile Heart / Sting" },
      { icon: "📅", label: "发售：", value: "2024年" },
      { icon: "🎮", label: "平台：", value: "PS4 / Nintendo Switch / PC" },
      { icon: "🎤", label: "CV：", value: "野水伊織" }
      ],
      desc: "系列最新作，讲述了一个<span class=\"highlight\">以莲为核心的全新故事</span>。<span class=\"highlight-pink\">四糸乃在本作中继续登场</span>，与士道和其他精灵们共同面对新的危机。",
      tags: [
      { cls: "dark", text: "视觉小说" },
      { cls: "dark", text: "恋爱冒险" }
      ],
      action:       { url: "https://store.steampowered.com/app/2627780/DATE_A_LIVE_Ren_Dystopia/", cls: "btn-bilibili btn-steam", icon: "🎮", text: "在Steam购买" }
    },
    {
      cover: gameCover,
      label: "相关游戏 2",
      title: "约会大作战：凛绪轮回",
      titleJp: "デート・ア・ライブ 凜緒リンカーネイション",
      meta: [
      { icon: "🏢", label: "开发商：", value: "Compile Heart / Sting" },
      { icon: "📅", label: "发售：", value: "2019年" },
      { icon: "🎮", label: "平台：", value: "PS4 / PC" },
      { icon: "🎤", label: "CV：", value: "野水伊織" }
      ],
      desc: "系列三部曲的整合与重制版，包含了<span class=\"highlight\">凛祢乌托邦、或守Install、凛绪轮回</span>全部内容。<span class=\"highlight-pink\">四糸乃在所有篇章中均有登场</span>。",
      tags: [
      { cls: "dark", text: "视觉小说" },
      { cls: "dark", text: "恋爱冒险" }
      ],
      action:       { url: "https://store.steampowered.com/app/1047440/DATE_A_LIVE_Rio_Reincarnation/", cls: "btn-bilibili btn-steam", icon: "🎮", text: "在Steam购买" }
    }
    ],
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '四糸乃 · 官方角色立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '氷芽川四糸乃 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '氷芽川四糸乃 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '氷芽川四糸乃 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '氷芽川四糸乃 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '氷芽川四糸乃 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '氷芽川四糸乃 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '氷芽川四糸乃 · 美图 07' },
      { isImage: true, bg: img9, badge: '美图', overlay: '氷芽川四糸乃 · 美图 08' },
      { isImage: true, bg: img10, badge: '美图', overlay: '氷芽川四糸乃 · 美图 09' },
      { isImage: true, bg: img11, badge: '美图', overlay: '氷芽川四糸乃 · 美图 10' },
      { isImage: true, bg: img12, badge: '美图', overlay: '氷芽川四糸乃 · 美图 11' },
      { isImage: true, bg: img13, badge: '美图', overlay: '氷芽川四糸乃 · 美图 12' },
      { isImage: true, bg: img14, badge: '美图', overlay: '氷芽川四糸乃 · 美图 13' },
      { isImage: true, bg: img15, badge: '美图', overlay: '氷芽川四糸乃 · 美图 14' },
      { isImage: true, bg: img16, badge: '美图', overlay: '氷芽川四糸乃 · 美图 15' }
  ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1gb411g73U/', title: '【约会大作战】四糸乃的60个超卡哇伊瞬间，awsl！', desc: '四糸乃 剪辑' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV18x41167TY/', title: '【约会大作战】四糸乃角色歌', desc: '四糸乃 角色歌' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1ht411c7RY/', title: '前方高能！！盘点约会大作战中四糸乃那些高能，高萌场面！', desc: '四糸乃 剪辑' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1M4411Q7dP/', title: '现在是四糸乃洗脑时间!', desc: '四糸乃 洗脑向剪辑' }
    ]
}
