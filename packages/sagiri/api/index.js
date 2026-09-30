/**
 * sagiri 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 * theme: 主题色（映射为 CSS 变量 --acc-*）
 * works: 相关作品卡片（anime/game）
 * gallery / videos: 画廊与视频数据
 */

import meta from '../meta.js'
import sagiriImg from '../images/1.jpg'
import animeCover from '../images/a.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'

export default {
  ...meta,
  nameJp: '和泉纱雾',
  title: '埃罗芒阿老师',
  info: [
    { icon: '🎂', label: '生日', value: '5月10日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '152cm', iconClass: 'pink' },
    { icon: '♉', label: '星座', value: '金牛座', iconClass: 'cyan' },
    { icon: '🎨', label: '职业', value: '插画师（埃罗芒阿老师）', iconClass: 'purple' },
    { icon: '🏫', label: '学校', value: '中学二年级', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '藤田咲（日）', iconClass: 'cyan' },
    { icon: '📚', label: '所属作品', value: '埃罗芒阿老师', iconClass: 'purple' },
    { icon: '🏠', label: '身份', value: '和泉征宗的义妹', iconClass: 'pink' },
    { icon: '🎯', label: '角色定位', value: '女主角', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😤 傲娇', '🏠 家里蹲', '🎨 天才插画师', '👻 怕生'],
      content: [
        '和泉纱雾是一个<span class="highlight">极度怕生的家里蹲</span>。她几乎从不离开自己的房间，甚至连下楼吃饭都需要哥哥和泉正宗把饭端到门口。这种<span class="highlight-pink">极端的社交恐惧</span>让她在学校也几乎没有朋友。',
        '纱雾有着<span class="highlight">强烈的傲娇性格</span>。她明明很在意哥哥，却总是用粗暴的态度来掩饰自己的害羞。她的经典反应就是<span class="highlight-pink">在害羞时大喊"笨蛋"然后躲回房间</span>。',
        '作为插画家，纱雾展现出了<span class="highlight">惊人的才华和专注力</span>。一旦进入创作状态，她可以连续工作很长时间，画出的插画质量极高，这也是她作为<span class="highlight-pink">"埃罗芒阿老师"在业界广受好评</span>的原因。',
        '虽然表面上对哥哥态度很差，但纱雾<span class="highlight">内心深处非常依赖和珍惜正宗</span>。随着故事的发展，她逐渐学会了<span class="highlight-pink">表达自己的真实感情</span>，也开始尝试走出房间面对外面的世界。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 银白长发', '👁️ 蓝色眼眸', '👗 宽松衣物', '🎭 面具'],
      content: [
        '和泉纱雾拥有一头<span class="highlight">漂亮的银白色长发</span>，发丝柔顺飘逸，常常散落在肩膀上。这头银发是<span class="highlight-pink">她最显著的外貌特征之一</span>，让她看起来如同精灵般纯净。',
        '她的眼眸是<span class="highlight">清澈的蓝色</span>，如同透明的宝石。这双大眼睛总是带着<span class="highlight-pink">些许怯意和好奇</span>，反映出她内向但又对世界充满探索欲的复杂内心。',
        '因为长期待在家里，纱雾的<span class="highlight">皮肤非常白皙</span>。她平时穿着<span class="highlight-pink">宽松舒适的衣物</span>，不太在意自己的穿着打扮，但一旦出门就会精心打扮。',
        '纱雾有一个标志性的<span class="highlight">山姥面具</span>，她在不得不出门或面对陌生人时会戴上它来<span class="highlight-pink">给自己勇气</span>。这个面具成为了她角色形象的重要组成部分。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🎨 埃罗芒阿老师', '👦 义妹', '🏠 家里蹲', '📚 轻小说插画师'],
      content: [
        '和泉纱雾的真实身份就是<span class="highlight">人气插画家"埃罗芒阿老师"</span>。她为哥哥和泉正宗撰写的轻小说绘制插画，两人虽然住在一起却<span class="highlight-pink">互不知晓对方的真实身份</span>。',
        '纱雾是正宗的<span class="highlight">义妹</span>，两人并没有血缘关系。她的父母在她很小的时候就去世了，之后被<span class="highlight-pink">和泉家收养</span>，成为了正宗的妹妹。',
        '她是一名<span class="highlight">中学二年级的学生</span>，但由于极度的社交恐惧，她几乎<span class="highlight-pink">从未正常上过学</span>。她的世界几乎完全局限于自己的房间里。',
        '纱雾和正宗之间有着<span class="highlight">深厚的童年羁绊</span>。两人在小时候曾短暂相遇，这段<span class="highlight-pink">珍贵的回忆</span>成为了后来故事中感情线的重要伏笔。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🎨 身份揭露', '💕 兄妹关系', '🌍 走出房间', '❤️ 告白'],
      content: [
        '和泉正宗是一名轻小说作家，他与<span class="highlight">负责自己作品插画的"埃罗芒阿老师"合作</span>，却从未见过对方的真面目。某天他震惊地发现，<span class="highlight-pink">埃罗芒阿老师竟然就是自己从不露面的义妹纱雾</span>。',
        '知道真相后的正宗开始<span class="highlight">试图拉近与纱雾的距离</span>。他鼓励她出门、交朋友、面对自己的恐惧。纱雾虽然嘴上说着<span class="highlight-pink">"才不是为了哥哥"</span>，但内心其实非常开心。',
        '故事中，纱雾经历了<span class="highlight">从封闭自我到逐渐敞开内心</span>的成长过程。她从完全不敢出门，到<span class="highlight-pink">能够戴着面具走在街上</span>，再到最终摘下面具面对人群，每一步都是巨大的进步。',
        '在故事的高潮部分，纱雾终于<span class="highlight">向正宗表达了自己的真实感情</span>。她摘下了代表恐惧的面具，<span class="highlight-pink">以最真实的自己站在哥哥面前</span>，完成了从"埃罗芒阿老师"到"和泉纱雾"的蜕变。'
      ],
      quote: '不，我不认识叫那种名字的人。',
      quoteAuthor: '—— 和泉纱雾'
    }
  ],
  abilities: [
    { icon: '🎨', name: '插画天赋', desc: '纱雾拥有<span class="highlight">天才级的插画能力</span>。她笔下的角色栩栩如生，色彩运用<span class="highlight-pink">极为出色</span>，这也是她作为"埃罗芒阿老师"大受欢迎的原因。' },
    { icon: '😤', name: '傲娇防御', desc: '纱雾的<span class="highlight">傲娇属性达到了极致</span>。面对害羞的情况时，她会自动进入<span class="highlight-pink">"笨蛋！"模式</span>，用愤怒来掩饰内心的动摇。' },
    { icon: '🏠', name: '家里蹲生存', desc: '作为资深家里蹲，纱雾<span class="highlight">精通一切室内生存技能</span>。她可以在完全不外出的情况下<span class="highlight-pink">维持正常生活</span>，网络购物和外卖是她的生命线。' },
    { icon: '💕', name: '纯粹的喜欢', desc: '纱雾对正宗的感情<span class="highlight">纯粹而深沉</span>。虽然表达方式笨拙，但她<span class="highlight-pink">愿意为了哥哥走出自己的舒适区</span>，这份勇气来自她内心深处最真挚的爱。' }
  ],
  relationships: [
    { icon: '👦', name: '和泉正宗', type: '义兄/恋人', desc: '和泉正宗是纱雾的<span class="highlight">义兄</span>，也是她最重要的人。纱雾对正宗怀有<span class="highlight-pink">超越兄妹的感情</span>，但一开始只能用傲娇的方式表达。', cls: 'rel-romance' },
    { icon: '👧', name: '山田妖精', type: '朋友/同行', desc: '同为轻小说插画师的<span class="highlight">山田妖精</span>是纱雾少有的朋友。她性格外向开朗，与纱雾形成了<span class="highlight-pink">鲜明的对比</span>。', cls: 'rel-friend' },
    { icon: '👧', name: '千寿村征', type: '同行/后辈', desc: '轻小说作家<span class="highlight">千寿村征</span>是正宗的忠实粉丝，也是纱雾在创作道路上的<span class="highlight-pink">伙伴和同行</span>。', cls: 'rel-friend' },
    { icon: '👤', name: '神野惠', type: '朋友', desc: '正宗的同学<span class="highlight">神野惠</span>是少数能让纱雾感到<span class="highlight-pink">放松的外人之一</span>，她温柔体贴的性格很容易让人放下戒备。', cls: 'rel-friend' }
  ],
  // ===== 布局数据（自 views/Detail.vue 迁移）=====
  placeholderEmoji: "⭐",
  avatarSize: "cover",
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #18181b 0%, #27272a 25%, #3f3f46 50%, #3f3f46 75%, #18181b 100%)",
    "glow1": "#f4f4f5",
    "glow2": "#a1a1aa",
    "particleBg": "rgba(244,244,245,0.3)",
    "gridImage": "linear-gradient(rgba(244,244,245,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.06) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(244,244,245,0.2), rgba(228,228,231,0.1))",
    "badgeBorder": "1px solid rgba(244,244,245,0.4)",
    "badgeColor": "#e4e4e7",
    "badgeShadow": "0 0 20px rgba(244,244,245,0.2)",
    "dotBg": "#f4f4f5",
    "nameGrad": "linear-gradient(135deg, #fff 0%, #e4e4e7 40%, #f4f4f5 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#e4e4e7",
    "titleBadgeBg": "linear-gradient(135deg, rgba(244,244,245,0.2) 0%, rgba(228,228,231,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(244,244,245,0.4)",
    "titleBadgeColor": "#e4e4e7",
    "tagBg": "linear-gradient(135deg, rgba(244,244,245,0.12), rgba(228,228,231,0.06))",
    "tagBorder": "1px solid rgba(244,244,245,0.25)",
    "tagColor": "#e4e4e7",
    "ringGrad": "linear-gradient(135deg, #f4f4f5, #e4e4e7, #f4f4f5) border-box",
    "avatarShadow": "0 0 60px rgba(244,244,245,0.4), 0 0 120px rgba(244,244,245,0.15)",
    "videoPlayBg": "rgba(244,244,245,0.85)",
    "videoFallback": "linear-gradient(135deg, #27272a, #3f3f46)"
  },
  works: {
    anime: [
    {
      cover: animeCover,
      label: "主要登场作品",
      title: "埃罗芒阿老师",
      titleJp: "エロマンガ先生",
      meta: [
      { icon: "🏢", label: "制作：", value: "A-1 Pictures" },
      { icon: "📅", label: "播出：", value: "2017年4月" },
      { icon: "📺", label: "集数：", value: "全12话" },
      { icon: "🎨", label: "CV：", value: "藤田咲" }
      ],
      desc: "高中生作家和泉正宗与<span class=\"highlight\">从不露面的插画家\"埃罗芒阿老师\"合作</span>。某天他发现，这位画出色情插画的<span class=\"highlight-pink\">神秘插画师竟然是自己家里蹲的义妹纱雾</span>。两人从此开始了全新的关系。",
      tags: [
      { cls: "dark", text: "恋爱" },
      { cls: "dark", text: "喜剧" },
      { cls: "dark", text: "日常" }
      ],
      action:       { url: "https://www.bilibili.com/bangumi/play/ep103917?spm_id_from=333.337.0.0", cls: "btn-bilibili", icon: "📺", text: "在Bilibili观看" }
    }
    ],
    game: [],
  },
  gallery: [
      { isImage: true, bg: sagiriImg, badge: '立绘', overlay: '和泉纱雾 · 官方角色立绘' },
      { isImage: false, bg: 'linear-gradient(135deg, #27272a, #18181b)', icon: '🖌️', label: '美图 · 待补充', badge: '美图', overlay: '和泉纱雾 · 美图 01' },
      { isImage: false, bg: 'linear-gradient(135deg, #27272a, #18181b)', icon: '🎨', label: '美图 · 待补充', badge: '美图', overlay: '和泉纱雾 · 美图 02' },
      { isImage: false, bg: 'linear-gradient(135deg, #27272a, #18181b)', icon: '🖌️', label: '美图 · 待补充', badge: '美图', overlay: '和泉纱雾 · 美图 03' },
      { isImage: false, bg: 'linear-gradient(135deg, #27272a, #18181b)', icon: '🎨', label: '美图 · 待补充', badge: '美图', overlay: '和泉纱雾 · 美图 04' },
      { isImage: false, bg: 'linear-gradient(135deg, #27272a, #18181b)', icon: '🖌️', label: '美图 · 待补充', badge: '美图', overlay: '和泉纱雾 · 美图 05' },
      { isImage: false, bg: 'linear-gradient(135deg, #27272a, #18181b)', icon: '🎨', label: '美图 · 待补充', badge: '美图', overlay: '和泉纱雾 · 美图 06' },
      { isImage: false, bg: 'linear-gradient(135deg, #27272a, #18181b)', icon: '🖌️', label: '美图 · 待补充', badge: '美图', overlay: '和泉纱雾 · 美图 07' }
    ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1zT4y177Am/', title: '【AMV】ヒトリゴト/自言自语 -OP（完整版）《埃罗芒阿老师》（中/日文字幕）', desc: '和泉纱雾 AMV' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1M7411a7Hp/', title: '再 来 亿 遍', desc: '和泉纱雾 剪辑' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1M84y1y7oy/', title: '💕和泉纱雾心动挑战💕你能坚持30秒吗？', desc: '和泉纱雾 剪辑' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1wQ4y1K7us/', title: '埃罗芒阿老师☆AWSL', desc: '和泉纱雾 手书' }
    ]
}
