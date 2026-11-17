/**
 * kana 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 * theme: 主题色（映射为 CSS 变量 --acc-*）
 * works: 相关作品卡片（anime/game）
 * gallery / videos: 画廊与视频数据
 */

import meta from '../meta.js'
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
  ...meta,
  nameJp: '有马加奈',
  title: '天才童星',
  info: [
    { icon: '🎂', label: '生日', value: '7月4日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '150cm', iconClass: 'pink' },
    { icon: '⭐', label: '称号', value: '天才童星', iconClass: 'cyan' },
    { icon: '🏫', label: '学校', value: '阳东高中', iconClass: 'purple' },
    { icon: '🎤', label: '声优', value: '潘惠美', iconClass: 'pink' },
    { icon: '📺', label: '所属作品', value: '我推的孩子', iconClass: 'cyan' },
    { icon: '🎬', label: '职业', value: '演员 / 偶像', iconClass: 'purple' },
    { icon: '💖', label: '代表色', value: '白色', iconClass: 'pink' },
    { icon: '🎯', label: '角色定位', value: '女主角 / 前天才童星', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🎭 演技天才', '💔 落魄童星', '😤 口是心非', '💪 不服输'],
      content: [
        '有马加奈是一个<span class="highlight">傲娇又倔强</span>的少女。从小被誉为天才童星，能<span class="highlight-pink">在十秒内流下眼泪</span>，是业界公认的演技派。但随着年龄增长，她的童星光环逐渐褪去。',
        '她表面上一副<span class="highlight">嘴硬不服输</span>的样子，对阿库亚总是摆出冷淡的态度，但实际上<span class="highlight-pink">十分在意身边的人</span>。常常口是心非，明明很关心却偏要装作不在乎。',
        '加奈深知演艺圈的残酷，对自己<span class="highlight">"过气童星"的身份耿耿于怀</span>。但她从未放弃成为顶级演员的梦想，始终坚持<span class="highlight-pink">靠实力说话</span>，拒绝靠关系或炒作上位。',
        '加入B小町后，她<span class="highlight">逐渐找回了自信</span>。虽然嘴上抱怨连连，但实际上<span class="highlight-pink">非常珍惜这个重新出发的机会</span>，在偶像活动和演艺事业上都全力以赴。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 红色短发', '👁️ 蓝色眼眸', '🧢 帽子收藏家', '👗 时尚穿搭'],
      content: [
        '有马加奈拥有一头<span class="highlight">醒目的红色短发</span>，通常自然披散或随意扎起。她的眼眸是<span class="highlight">清澈的蓝色</span>，如同晴朗的初空，总是闪烁着不服输的光芒。',
        '她最大的标志是<span class="highlight-pink">永远戴着不同的帽子</span>——贝雷帽、棒球帽、渔夫帽、毛线帽……几乎每次登场都会换一顶新帽子，<span class="highlight">帽子收藏家</span>的称号名副其实。',
        '她的私服品味<span class="highlight-pink">相当时尚</span>，偏爱简约又带点女人味的穿搭风格。在偶像演出时则穿着B小町的<span class="highlight">红白色演出服</span>，符合她热情洋溢的舞台形象。',
        '表情丰富多变——在阿库亚面前常常<span class="highlight">皱着眉头一脸嫌弃</span>，但在舞台上则<span class="highlight-pink">自信满满光芒四射</span>，这种反差是她最大的魅力。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🎬 前天才童星', '🎤 B小町成员', '🏫 阳东高中学生', '💔 过气艺人'],
      content: [
        '有马加奈幼年时被誉为<span class="highlight">天才童星</span>，凭借精湛的演技在演艺圈红极一时，尤其以<span class="highlight-pink">十秒落泪</span>的绝技闻名业界。但随着年龄增长，童星的光环逐渐消退。',
        '她与星野阿库亚在童年时期有过<span class="highlight">共同出演的经历</span>。成年后两人在阳东高中重逢，加奈一眼就认出了阿库亚，而阿库亚起初却没能认出她<span class="highlight-pink">，这让她颇为不爽</span>。',
        '在阿库亚的邀请下，她加入了<span class="highlight">新生B小町偶像团体</span>，与星野露比、MEM啾一起活动。起初她对偶像工作充满抵触，认为偶像<span class="highlight-pink">"不需要演技"</span>，但逐渐在其中找到了自己的价值。',
        '加奈的母亲曾是她演艺事业的<span class="highlight">最大推手</span>，但随着加奈逐渐过气，母女关系也变得微妙。这段经历让加奈对演艺圈<span class="highlight-pink">既爱又恨</span>，成为了她性格纠结的根源。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🎭 幼年共演', '🏫 高中重逢', '🎤 B小町出道', '💘 恋爱的修罗场'],
      content: [
        '在《我推的孩子》中，有马加奈<span class="highlight">首次登场于幼年时期</span>，曾与星野阿库亚<span class="highlight-pink">共同出演过电影</span>。之后她在阳东高中与阿库亚重逢，加奈立刻认出了阿库亚，但阿库亚却没能认出与童年时期相比变化很大的加奈。',
        '阿库亚出于<span class="highlight">"为了目的可以利用任何人"</span>的心态接近加奈，邀请她加入B小町。加奈虽然嘴上拒绝，但<span class="highlight-pink">内心其实很高兴</span>有人记得她，最终答应了邀请。',
        '在B小町的活动中，加奈展现出了<span class="highlight">偶像的天赋</span>。她的舞台表现力极强，<span class="highlight-pink">粉丝数量稳步增长</span>。同时她也在各种演艺工作中努力证明自己，试图摆脱过气童星的标签。',
        '加奈对阿库亚的感情是<span class="highlight">全剧最复杂的感情线之一</span>——她一边嫌弃阿库亚的"人渣行为"，一边又<span class="highlight-pink">无法控制地被他吸引</span>，陷入了"嘴上说不要身体却很诚实"的经典傲娇困境。'
      ],
      quote: '我要成为你推的孩子。',
      quoteAuthor: '—— 有马加奈'
    }
  ],
  abilities: [
    { icon: '🎭', name: '十秒落泪',  desc: '能在十秒内<span class="highlight">随时流下眼泪</span>，是加奈作为童星时期最著名的绝技。不需要眼药水或情绪酝酿，<span class="highlight-pink">纯粹靠身体控制</span>，堪称演技的极致体现。' },
    { icon: '🎤', name: '舞台表现力',  desc: '作为B小町的核心成员，加奈的<span class="highlight">舞台感染力极强</span>。即使初次登台也能<span class="highlight-pink">瞬间点燃全场</span>，这种能力源于她多年积累的表演经验。' },
    { icon: '💪', name: '不服输精神',  desc: '在演艺圈最残酷的环境中<span class="highlight">依然坚持梦想</span>。即使被贴上过气标签、被业界遗忘，她也从未放弃，<span class="highlight-pink">靠自己的努力一步一步往上爬</span>。' },
    { icon: '🍳', name: '料理能力',  desc: '<span class="highlight">完全不会做饭</span>。曾经试图给阿库亚做便当，结果是<span class="highlight-pink">连自己都吃不下去的黑暗料理</span>。好在阿库亚并不嫌弃，反而觉得这样的加奈很可爱。' }
  ],
  relationships: [
    { icon: '👦', name: '星野阿库亚', type: '恋人/共演伙伴', desc: '童年时期与阿库亚<span class="highlight">有过共同出演的经历</span>。高中重逢后加奈一眼认出了他。在阿库亚的邀请下加入B小町，<span class="highlight-pink">对阿库亚有着复杂的感情</span>——嘴上嫌弃却逐渐被吸引，是经典的傲娇困境。', cls: 'rel-romance' },
    { icon: '👩', name: '星野露比', type: 'B小町同伴', desc: '新生B小町的成员之一。加奈与露比一起作为偶像<span class="highlight">共同活动</span>。虽然两人性格迥异，但在舞台上<span class="highlight-pink">配合默契</span>，共同支撑着B小町。', cls: 'rel-friend' },
    { icon: '👩', name: 'MEM啾', type: 'B小町同伴', desc: 'B小町的另一位成员。加奈、露比和MEM啾<span class="highlight">三人组成了新生B小町</span>。虽然加奈对偶像工作最初充满抵触，但在同伴的影响下<span class="highlight-pink">逐渐找到了自己的价值</span>。', cls: 'rel-friend' },
    { icon: '👩', name: '加奈的母亲', type: '家人', desc: '曾是加奈演艺事业的<span class="highlight">最大推手</span>。但随着加奈逐渐过气，母女关系变得<span class="highlight-pink">微妙而紧张</span>。这段经历是加奈对演艺圈既爱又恨的根源。', cls: 'rel-family' }
  ],
  // ===== 布局数据（自 views/Detail.vue 迁移）=====
  placeholderEmoji: "🎭",
  avatarSize: "cover",
  avatarBg: '#fff',
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #fff5f5 0%, #fef2f8 25%, #fdf4ff 50%, #f5f3ff 75%, #fff 100%)",
    "glow1": "#f9a8d4",
    "glow2": "#e9d5ff",
    "particleBg": "rgba(244,63,94,0.15)",
    "gridImage": "linear-gradient(rgba(244,63,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.04) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(244,63,94,0.2), rgba(251,113,133,0.1))",
    "badgeBorder": "1px solid rgba(244,63,94,0.4)",
    "badgeColor": "#fb7185",
    "badgeShadow": "0 0 20px rgba(244,63,94,0.2)",
    "dotBg": "#f43f5e",
    "nameGrad": "linear-gradient(135deg, #fff 0%, #fb7185 40%, #f43f5e 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#fb7185",
    "titleBadgeBg": "linear-gradient(135deg, rgba(244,63,94,0.2) 0%, rgba(251,113,133,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(244,63,94,0.4)",
    "titleBadgeColor": "#fb7185",
    "tagBg": "linear-gradient(135deg, rgba(244,63,94,0.12), rgba(251,113,133,0.06))",
    "tagBorder": "1px solid rgba(244,63,94,0.25)",
    "tagColor": "#fb7185",
    "ringGrad": "linear-gradient(135deg, #f43f5e, #fb7185, #f43f5e) border-box",
    "avatarShadow": "0 0 60px rgba(244,63,94,0.4), 0 0 120px rgba(244,63,94,0.15)",
    "placeholderBg": "linear-gradient(180deg, #f1f5f9 0%, #fdf2f8 50%, #fef2f8 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(244,63,94,0.3))",
    "videoPlayBg": "rgba(236,72,153,0.85)",
    "videoFallback": "linear-gradient(135deg, #0a1628, #1e3a5f)"
  },
  works: {
    anime: [
    {
      cover: animeCover,
      label: "主要登场作品",
      title: "我推的孩子",
      titleJp: "【推しの子】",
      meta: [
      { icon: "🏢", label: "制作：", value: "动画工房" },
      { icon: "📅", label: "播出：", value: "2023年4月" },
      { icon: "📺", label: "集数：", value: "全11话" },
      { icon: "🎤", label: "CV：", value: "潘惠美" }
      ],
      desc: "有马加奈作为<span class=\"highlight\">过气天才童星</span>登场，在星野阿库亚的邀请下加入新生B小町，<span class=\"highlight-pink\">重新找到了属于自己的舞台</span>。她在演艺圈挣扎求存的故事感动了无数观众。",
      tags: [
      { cls: "dark", text: "演艺圈" },
      { cls: "dark", text: "偶像" },
      { cls: "dark", text: "恋爱" }
      ],
      action: null,
      notice: "暂无B站正版"
    }
    ],
    game: [],
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '有马加奈 · 官方角色立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '有马加奈 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '有马加奈 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '有马加奈 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '有马加奈 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '有马加奈 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '有马加奈 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '有马加奈 · 美图 07' }
    ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1fs4y1z74E', title: '【中日歌词/', desc: '有马加奈 角色歌' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1QE2xYUEi3', title: '【4K60帧/', desc: 'B小町 MV' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1yF411d7tM', title: 'TVアニメ『【推しの子】』／B小町「STAR☆T☆RAIN」「サインはB」「HEART\'s♡KISS」New Arrange Ver. 試聴映像', desc: 'B小町 MV' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1ui4y1C7Jt', title: '【TOS2021/', desc: '有马加奈 MAD' }
    ]
}
