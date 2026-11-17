/**
 * soyo 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 * theme: 主题色（映射为 CSS 变量 --acc-*）
 * works: 相关作品卡片（anime/game）
 * gallery / videos: 画廊与视频数据
 */

import meta from '../meta.js'
import soyoImg from '../images/1.jpg'
import animeCover from '../images/a.jpg'
import gameCover from '../images/b.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'
import sp5 from '../images/sp5.jpg'
import sp6 from '../images/sp6.jpg'
import sp7 from '../images/sp7.jpg'
import sp8 from '../images/sp8.jpg'

export default {
  ...meta,
  nameJp: '長崎素世',
  title: 'MyGO!!!!!贝斯手',
  info: [
    { icon: '🎂', label: '生日', value: '5月27日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '162cm', iconClass: 'pink' },
    { icon: '♊', label: '星座', value: '双子座', iconClass: 'cyan' },
    { icon: '🎸', label: '担当', value: '贝斯手', iconClass: 'purple' },
    { icon: '🏫', label: '学校', value: '月之森女子学园', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '小日向美香（日）', iconClass: 'cyan' },
    { icon: '🎵', label: '所属乐队', value: 'MyGO!!!!!', iconClass: 'purple' },
    { icon: '⭐', label: '血型', value: 'A型', iconClass: 'pink' },
    { icon: '🎯', label: '角色定位', value: 'MyGO!!!!! / 前CRYCHIC成员', iconClass: 'cyan' }
  ],
  review: '最初看的时候觉得soyo是个夹子好恶心，而且好像在计划着什么，肯定不是什么好人，直到第七集爆了真的被吓到了，第八集惊世一跪更是让我想到了我的经历，然后我才发现soyo好像跟我也是同一类人，都是活在过去不肯向前走的人，也都有着同样的经历，都算不上什么好人，但不一样的是她有爱音，有高松灯，她们把soyo拉回了舞台，并且mygo会带着她一路前进。有时候也在想什么时候也能遇到属于我的爱音和高松灯呢。',
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['表面温柔体贴', '善解人意', '内心沉重', '执着于过去'],
      content: [
        '長崎素世表面上是<span class="highlight">一个温柔体贴、善解人意的好女孩</span>。她在乐队中扮演着<span class="highlight-pink">润滑剂的角色</span>，总是关心着每一位成员的感受。',
        '然而，素世的内心远比表面上看到的要<span class="highlight">复杂和沉重得多</span>。她对过去的乐队CRYCHIC有着<span class="highlight-pink">极深的执念</span>，尤其是对前队友丰川祥子的感情，让她在很长一段时间里都无法释怀。',
        '她会为了<span class="highlight">重建CRYCHIC</span>而精心策划，利用自己的温柔外表来获取他人的信任。这种<span class="highlight-pink">表里不一的一面</span>在剧情中被揭露时，给所有人带来了巨大的冲击。',
        '但素世并非一个纯粹的反面角色。她的<span class="highlight">执着源于对音乐和友情的真挚感情</span>，只是这种感情被她以<span class="highlight-pink">一种扭曲的方式表达了出来</span>。在经历了一系列事件后，她逐渐学会了面对现实。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['栗色长发', '温柔眼眸', '优雅气质', '制服造型'],
      content: [
        '長崎素世拥有一头<span class="highlight">柔顺的亚麻色长发</span>，发丝自然地垂落在肩膀两侧，显得<span class="highlight-pink">温婉而优雅</span>。她的发型简洁大方，完美衬托出她温柔的气质。',
        '她的眼眸是<span class="highlight">温暖的绿色</span>，如同春日里新发的嫩叶，总是流露出<span class="highlight-pink">关切和善意</span>。但在这温柔的目光深处，偶尔也能看到一丝<span class="highlight">难以言喻的沉重</span>。',
        '她身着<span class="highlight">月之森女子学园的制服</span>，整洁得体的穿着彰显出她<span class="highlight-pink">良好的教养和品格</span>。舞台演出时则穿着MyGO!!!!!的乐队服装。',
        '作为贝斯手，她在演出时<span class="highlight">抱着贝斯的姿态优雅而专注</span>，手指在琴弦上灵活跳动，<span class="highlight-pink">演奏出支撑整个乐队的低音线条</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['MyGO!!!!!贝斯手', '前CRYCHIC成员', '月之森女子学园', '关键人物'],
      content: [
        '長崎素世是<span class="highlight">MyGO!!!!!乐队的贝斯手</span>，在乐队中负责低音部分。她的贝斯演奏<span class="highlight-pink">稳定而富有感情</span>，是乐队不可或缺的声音基础。',
        '在此之前，素世曾是<span class="highlight">CRYCHIC乐队的成员</span>。CRYCHIC是一支由丰川祥子组建的乐队，但在<span class="highlight-pink">某个事件后突然解散</span>，这成为了素世心中无法愈合的伤口。',
        '她就读于<span class="highlight">月之森女子学园</span>，在学校里是<span class="highlight-pink">品学兼优的好学生</span>，深受老师和同学的喜爱。她还在吹奏乐部担任低音提琴手，音乐素养深厚。',
        '在MyGO!!!!!的故事中，素世是<span class="highlight">连接过去与现在的关键人物</span>。她对CRYCHIC的执念不仅影响着自己，也<span class="highlight-pink">深刻地影响着整个乐队的走向和命运</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['CRYCHIC解散', '伪装与崩溃', '爱音的坚持', '成长与释然'],
      content: [
        '素世最初以<span class="highlight">温柔体贴的好孩子形象</span>出现在故事中。她主动关心高松灯，帮助她融入乐队，<span class="highlight-pink">看似是一个完美的队友</span>。',
        '然而随着剧情推进，素世<span class="highlight">真实的想法逐渐浮出水面</span>。她接近MyGO!!!!!的真正目的是为了<span class="highlight-pink">重建曾经的CRYCHIC</span>，而丰川祥子的回归才是她最终的目标。',
        '当她的计划被揭露时，素世<span class="highlight">展现出了令人震惊的另一面</span>。她的情绪崩溃和对祥子的执着，让所有人看到了她<span class="highlight-pink">温柔面具下的痛苦和执念</span>。这是整个动画中最具冲击力的转折之一。',
        '在素世最孤立无助的时刻，<span class="highlight">千早爱音</span>一次次地主动接近她——叫她"soyorin"，拉她回排练室，即使被冷眼相待也不放弃。<span class="highlight-pink">爱音那种毫无心机的坦率</span>，让习惯了用温柔面具保护自己的素世<span class="highlight">第一次感受到了不需要伪装也可以被接纳</span>。在爱音的影响下，素世逐渐正视过去，在MyGO!!!!!中找到了真正属于自己的位置。'
      ],
      quote: '我大概一辈子都忘不了CRYCHIC了。',
      quoteAuthor: '—— 長崎素世'
    }
  ],
  abilities: [
    { icon: '🎸', name: '贝斯演奏', desc: '素世的贝斯技术<span class="highlight">扎实而富有表现力</span>。她的演奏风格<span class="highlight-pink">稳定而温暖</span>，为乐队的声音提供了坚实的根基。' },
    { icon: '💬', name: '社交能力', desc: '素世拥有<span class="highlight">极强的社交能力和亲和力</span>。她能够轻松地与任何人建立关系，<span class="highlight-pink">在团队中扮演着沟通的桥梁</span>。' },
    { icon: '🎭', name: '表里切换', desc: '素世最特殊的能力——<span class="highlight">在温柔天使和沉重内心之间自由切换</span>。表面上的她完美无瑕，<span class="highlight-pink">内心的执念却深沉而强烈</span>。' },
    { icon: '💔', name: '执念之力', desc: '对CRYCHIC的<span class="highlight">强烈执念</span>驱动着素世的行动。这份执着虽然<span class="highlight-pink">曾经将她引向歧途</span>，但也展现了她对音乐和友情<span class="highlight">真挚而深沉的感情</span>。' }
  ],
  relationships: [
    { icon: '🎸', name: '千早爱音', type: '乐队成员', desc: 'MyGO!!!!!的吉他手。爱音给素世起了<span class="highlight">"soyorin"的昵称</span>，两人从最初的<span class="highlight-pink">塑料姐妹花般的互动</span>到逐渐建立真正的信任，关系微妙而有趣。', cls: 'rel-friend' },
    { icon: '🎤', name: '高松灯', type: '乐队成员', desc: 'MyGO!!!!!的主唱。素世最初<span class="highlight">以关心的姿态接近灯</span>，但在真实面目揭露后，两人的关系经历了<span class="highlight-pink">巨大的考验和修复</span>。', cls: 'rel-friend' },
    { icon: '🎹', name: '丰川祥子', type: '前队友/执念', desc: 'CRYCHIC的键盘手，素世<span class="highlight">最深的执念所在</span>。素世一直渴望着与祥子<span class="highlight-pink">重建曾经的乐队</span>，这份感情是整个故事的核心矛盾之一。', cls: 'rel-other' },
    { icon: '🥁', name: '椎名立希', type: '乐队成员', desc: 'MyGO!!!!!的鼓手。立希对素世的<span class="highlight">真实面目最为警觉</span>，两人之间有着<span class="highlight-pink">微妙而紧张的关系</span>。', cls: 'rel-friend' }
  ],
  // ===== 布局数据（自 views/Detail.vue 迁移）=====
  placeholderEmoji: "⭐",
  avatarSize: "cover",
  avatarBg: '#fff',
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '💬', label: '评价' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #fefce8 0%, #fef9c3 30%, #fef3c7 70%, #fefce8 100%)",
    "glow1": "#C8A97E",
    "glow2": "#BFA06A",
    "particleBg": "rgba(200,169,126,0.15)",
    "gridImage": "linear-gradient(rgba(200,169,126,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,126,0.1) 1px, transparent 1px)",
    "badgeBg": "rgba(200,169,126,0.15)",
    "badgeBorder": "1px solid rgba(200,169,126,0.3)",
    "badgeColor": "#8B6914",
    "dotBg": "#C8A97E",
    "nameColor": "#0f172a",
    "nameSubColor": "#8B6914",
    "titleBadgeBg": "rgba(200,169,126,0.12)",
    "titleBadgeBorder": "1px solid rgba(200,169,126,0.3)",
    "titleBadgeColor": "#8B6914",
    "tagBg": "rgba(200,169,126,0.08)",
    "tagBorder": "1px solid rgba(200,169,126,0.2)",
    "tagColor": "#8B6914",
    "ringGrad": "linear-gradient(135deg, #C8A97E, #D4B896, #C8A97E) border-box",
    "avatarShadow": "0 0 60px rgba(200,169,126,0.4), 0 0 120px rgba(200,169,126,0.15)",
    "videoPlayBg": "rgba(200,169,126,0.85)",
    "reviewBg": "linear-gradient(135deg, #fdfaf5 0%, #f9f2e7 30%, #f5ead5 70%, #fdfaf5 100%)",
    "reviewDots": "radial-gradient(circle, #C8A97E 1px, transparent 1px)",
    "reviewOverlay": "rgba(200,169,126,0.12)",
    "reviewAvatarShadow": "0 0 0 4px rgba(200,169,126,0.2), 0 4px 20px rgba(200,169,126,0.25)",
    "reviewLabelBg": "rgba(200,169,126,0.15)",
    "reviewLabelColor": "#8B6914",
    "reviewDescColor": "#8B6914",
    "reviewBodyBorder": "1px solid rgba(200,169,126,0.08)",
    "videoFallback": "linear-gradient(135deg, #2d2518, #3a3020)"
  },
  works: {
    anime: [
    {
      cover: animeCover,
      label: "主要登场作品",
      title: "BanG Dream! It's MyGO!!!!!",
      titleJp: "BanG Dream! It's MyGO!!!!!",
      meta: [
      { icon: "🏢", label: "制作：", value: "SANZIGEN" },
      { icon: "📅", label: "播出：", value: "2023年7月" },
      { icon: "📺", label: "集数：", value: "全13话" },
      { icon: "🎤", label: "CV：", value: "小日向美香" }
      ],
      desc: "在月之森女子学园就读的<span class=\"highlight\">長崎素世</span>，怀着对过去乐队CRYCHIC的<span class=\"highlight-pink\">深深执念</span>，加入了新乐队MyGO!!!!!。然而，她真正想要的<span class=\"highlight\">并非眼前这支乐队</span>，而是那个已经回不来的过去。",
      tags: [
      { cls: "dark", text: "音乐" },
      { cls: "dark", text: "青春" },
      { cls: "dark", text: "乐队" }
      ],
      action:       { url: "https://www.bilibili.com/bangumi/play/ep1183102?spm_id_from=333.337.0.0", cls: "btn-bilibili", icon: "📺", text: "在Bilibili观看" }
    }
    ],
    game: [
    {
      cover: gameCover,
      label: "主要登场游戏",
      title: "BanG Dream! 少女乐团派对",
      titleJp: "BanG Dream! ガールズバンドパーティ!",
      meta: [
      { icon: "🏢", label: "开发商：", value: "Craft Egg" },
      { icon: "📅", label: "发行：", value: "2017年3月" },
      { icon: "🎮", label: "类型：", value: "音乐节奏" },
      { icon: "🎤", label: "CV：", value: "小日向美香" }
      ],
      desc: "在音乐节奏游戏<span class=\"highlight\">「BanG Dream! 少女乐团派对」</span>中，MyGO!!!!!作为新乐队加入。素世以<span class=\"highlight-pink\">温柔的外表和复杂的内心</span>，成为了游戏中最具话题性的角色之一。",
      tags: [
      { cls: "dark", text: "音乐" },
      { cls: "dark", text: "节奏" },
      { cls: "dark", text: "二次元" }
      ],
      action:       { url: "https://game.bilibili.com/bangdream/#p1", cls: "btn-bilibili", icon: "🏠", text: "前往官网" }
    }
    ],
  },
  gallery: [
      { isImage: true, bg: soyoImg, badge: '立绘', overlay: '長崎素世 · 官方角色立绘' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d2518, #1a1510)', icon: '🎵', label: '美图 · 待补充', badge: '美图', overlay: '長崎素世 · 美图 01' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d2518, #1a1510)', icon: '🎶', label: '美图 · 待补充', badge: '美图', overlay: '長崎素世 · 美图 02' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d2518, #1a1510)', icon: '🎼', label: '美图 · 待补充', badge: '美图', overlay: '長崎素世 · 美图 03' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d2518, #1a1510)', icon: '🎹', label: '美图 · 待补充', badge: '美图', overlay: '長崎素世 · 美图 04' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d2518, #1a1510)', icon: '🎻', label: '美图 · 待补充', badge: '美图', overlay: '長崎素世 · 美图 05' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d2518, #1a1510)', icon: '🎤', label: '美图 · 待补充', badge: '美图', overlay: '長崎素世 · 美图 06' },
      { isImage: false, bg: 'linear-gradient(135deg, #2d2518, #1a1510)', icon: '🥁', label: '美图 · 待补充', badge: '美图', overlay: '長崎素世 · 美图 07' }
    ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1GK421v7zv/', title: '【填词/MyGO】素颜', desc: '長崎素世 填词' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1odwVefE8U/', title: '【MyGO/素世】坏心思的神明，给我带来了禮物。', desc: '長崎素世 MAD' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1fk4y1w7ha/', title: '【mygo填词/爱素对唱】有点坏', desc: '長崎素世 填词' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1Au411E78P/', title: '【MyGO】爱音和素世的「最佳损友」', desc: '長崎素世 剪辑' },
      { cover: sp5, url: 'https://www.bilibili.com/video/BV1DC4y1w76G/', title: '「 手 写 的 从 前 」，想要的永远', desc: '長崎素世 填词' },
      { cover: sp6, url: 'https://www.bilibili.com/video/BV1hs421G7ex/', title: '【填词/MyGO】家有そよ', desc: '長崎素世 填词' },
      { cover: sp7, url: 'https://www.bilibili.com/video/BV1aH4y1c7UJ/', title: '【填词/MyGO】习惯拥有', desc: '長崎素世 填词' },
      { cover: sp8, url: 'https://www.bilibili.com/video/BV1nzB7Y9EmS/', title: '长期溯时导致的！', desc: '長崎素世 剪辑' }
    ]
}
