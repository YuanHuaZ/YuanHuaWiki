/**
 * tomori 角色数据包 — 由 CharacterDetailLayout 布局组件消费
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
  nameJp: '友利奈绪',
  title: '星之海学园学生会会长',
  info: [
    { icon: '🎂', label: '生日', value: '7月7日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '155cm', iconClass: 'pink' },
    { icon: '🌟', label: '能力', value: '不可视（限定对象）', iconClass: 'cyan' },
    { icon: '👁️', label: '能力范围', value: '仅限一人', iconClass: 'purple' },
    { icon: '📖', label: '武器', value: '相机', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '佐仓绫音（日）', iconClass: 'cyan' },
    { icon: '📺', label: '所属作品', value: 'Charlotte', iconClass: 'purple' },
    { icon: '🏫', label: '所属', value: '星之海学园学生会', iconClass: 'pink' },
    { icon: '🎯', label: '角色定位', value: '女主角 / 核心角色', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😤 傲娇强势', '💪 责任感强', '💜 温柔内敛', '📸 好奇心旺盛'],
      content: [
        '友利奈绪是<span class="highlight">星之海学园学生会会长</span>，性格表面上显得有些<span class="highlight-pink">强势和傲娇</span>。她做事雷厉风行，说话也常常带着命令的口吻，但这些都是因为她<span class="highlight">有着强烈的责任感</span>。',
        '虽然外表看起来有些<span class="highlight-pink">盛气凌人</span>，但奈绪内心其实<span class="highlight">非常温柔和善良</span>。她一直在默默守护着那些拥有特殊能力的学生们，努力让他们能够<span class="highlight-pink">过上正常的生活</span>。',
        '她对<span class="highlight">摄影有着浓厚的兴趣</span>，经常用相机记录生活中的点点滴滴。这个爱好也反映了她<span class="highlight-pink">善于观察和发现美好</span>的一面。',
        '奈绪在面对乙坂有宇时，从最初的<span class="highlight">怀疑到逐渐信任</span>，再到<span class="highlight-pink">深深的爱恋</span>。她虽然不善于表达自己的感情，但会用行动来<span class="highlight">默默关心着身边的人</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 粉色长发', '👁️ 碧蓝眼眸', '👗 星之海校服', '📸 相机配件'],
      content: [
        '友利奈绪拥有一头<span class="highlight">漂亮的粉色长发</span>，发丝柔顺飘逸，常常扎成一个<span class="highlight-pink">俏皮的侧马尾</span>，显得青春活力十足。',
        '她的眼眸是<span class="highlight">清澈的碧蓝色</span>，如同晴朗的初空一般晶莹剔透。这双眼睛总是<span class="highlight-pink">闪烁着好奇和坚定的光芒</span>，让人不由自主地被她吸引。',
        '她身着<span class="highlight">星之海学园的校服</span>，蓝白相间的制服设计简洁大方，完美衬托出她<span class="highlight-pink">青春活力的气质</span>。作为学生会会长，她总是保持着整洁端庄的形象。',
        '奈绪常常随身携带一台<span class="highlight">数码相机</span>，这是她记录生活的重要工具。相机不仅是她的爱好象征，也在<span class="highlight-pink">特殊能力者搜寻行动中</span>发挥了重要作用。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏫 学生会会长', '⚡ 特殊能力者', '👦 乙坂有宇的搭档', '💕 重要的人'],
      content: [
        '友利奈绪是<span class="highlight">星之海学园的学生会会长</span>，这个学园专门接收拥有特殊能力的学生。她领导学生会负责<span class="highlight-pink">调查和保护这些特殊能力者</span>，确保他们不会被社会发现。',
        '她拥有<span class="highlight">"不可视"的特殊能力</span>，但这个能力有一个特殊的限制——<span class="highlight-pink">只能对一个人生效</span>。当她使用能力时，只能在特定一个人的视线中隐身。',
        '奈绪有一个<span class="highlight">哥哥</span>，她的哥哥也是特殊能力者之一。因为哥哥的遭遇，奈绪对<span class="highlight-pink">特殊能力者群体有着深厚的感情</span>，这也是她投身于保护工作的原因。',
        '在与乙坂有宇相遇后，奈绪成为了他<span class="highlight">最重要的搭档和伙伴</span>。两人一起经历了许多冒险，从最初的合作关系<span class="highlight-pink">逐渐发展出深厚的感情</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['📸 初次相遇', '⚡ 能力觉醒', '🌍 世界之旅', '💕 约定与等待'],
      content: [
        '奈绪与乙坂有宇的相遇始于<span class="highlight">星之海学园</span>。起初她只是将有宇当作需要保护的特殊能力者之一，但随着接触的深入，她<span class="highlight-pink">逐渐发现了有宇身上更多的可能性</span>。',
        '在有宇经历了一系列变故后，奈绪始终<span class="highlight">陪伴在他身边</span>。即使面对巨大的危险和困难，她也<span class="highlight-pink">从未放弃过有宇</span>，这种坚定的支持成为了有宇继续前进的动力。',
        '剧情后期，有宇踏上了<span class="highlight">环游世界夺取特殊能力者的旅程</span>。奈绪虽然无法同行，但她<span class="highlight-pink">在学园中默默等待着有宇的归来</span>，这份等待充满了坚定和爱意。',
        '故事的高潮中，有宇<span class="highlight">失去了所有的记忆</span>，但奈绪并没有放弃。她最终<span class="highlight-pink">在病房中见到了失忆后的有宇</span>，尽管有宇已经不记得她是谁，奈绪依然<span class="highlight">选择陪伴在他身边</span>，印证了那份不变的羁绊。'
      ],
      quote: '我是你的恋人。',
      quoteAuthor: '—— 友利奈绪'
    }
  ],
  abilities: [
    { icon: '👁️', name: '不可视', desc: '奈绪的特殊能力，能在<span class="highlight">一个人的视线中隐身</span>。虽然范围有限，但在执行<span class="highlight-pink">秘密任务时非常实用</span>。是她调查特殊能力者时的关键技能。' },
    { icon: '📸', name: '相机调查', desc: '利用数码相机<span class="highlight">记录和追踪特殊能力者</span>的活动。奈绪擅长通过影像资料<span class="highlight-pink">分析和定位目标</span>，是学生会的核心调查手段。' },
    { icon: '💪', name: '领导力', desc: '作为学生会会长，奈绪拥有<span class="highlight">出色的领导能力</span>。她能够有效组织和指挥学生会成员，<span class="highlight-pink">协调各方力量</span>完成各种任务。' },
    { icon: '💕', name: '坚定的信念', desc: '奈绪最强大的力量来自她<span class="highlight">内心深处对重要之人的守护之心</span>。无论面对什么样的困难和挫折，她都<span class="highlight-pink">从未动摇过自己的信念</span>。' }
  ],
  relationships: [
    { icon: '👦', name: '乙坂有宇', type: '恋人/搭档', desc: 'Charlotte的男主角。最初奈绪将他视为需要保护的特殊能力者，但在共同经历中<span class="highlight">逐渐产生了深厚的感情</span>。两人一起踏上了改变命运的旅程，有宇最终成为了奈绪<span class="highlight-pink">最重要的人</span>。', cls: 'rel-romance' },
    { icon: '👤', name: '奈绪的哥哥', type: '家人', desc: '同样是特殊能力者。因为哥哥的遭遇，奈绪对<span class="highlight">特殊能力者群体有着深厚的感情</span>，这也是她投身于保护工作的<span class="highlight-pink">重要原因</span>。', cls: 'rel-family' },
    { icon: '🏫', name: '星之海学园学生会', type: '同伴', desc: '奈绪作为学生会会长，带领成员们<span class="highlight">调查和保护特殊能力者</span>。学生会是她最信赖的后盾，也是她<span class="highlight-pink">归属感的重要来源</span>。', cls: 'rel-friend' }
  ],
  // ===== 布局数据（自 views/Detail.vue 迁移）=====
  placeholderEmoji: "🏫",
  avatarSize: "cover",
  avatarBg: "#fff",
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关番剧' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a1a 0%, #0a1628 25%, #1a0d2e 50%, #0f1028 75%, #0a0a1a 100%)",
    "glow1": "#60a5fa",
    "glow2": "#f472b6",
    "particleBg": "rgba(96,165,250,0.3)",
    "gridImage": "linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(96,165,250,0.1))",
    "badgeBorder": "1px solid rgba(96,165,250,0.4)",
    "badgeColor": "#93c5fd",
    "badgeShadow": "0 0 16px rgba(96,165,250,0.2)",
    "dotBg": "#60a5fa",
    "nameGrad": "linear-gradient(135deg, #bfdbfe 0%, #93c5fd 40%, #f472b6 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#bfdbfe",
    "titleBadgeBg": "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(244,114,182,0.12))",
    "titleBadgeBorder": "1px solid rgba(96,165,250,0.4)",
    "titleBadgeColor": "#bfdbfe",
    "tagBg": "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(96,165,250,0.06))",
    "tagBorder": "1px solid rgba(96,165,250,0.25)",
    "tagColor": "#60a5fa",
    "ringGrad": "linear-gradient(135deg, #60a5fa, #f472b6, #bfdbfe, #60a5fa) border-box",
    "avatarShadow": "0 0 60px rgba(96,165,250,0.4), 0 0 120px rgba(96,165,250,0.15)",
    "placeholderBg": "linear-gradient(180deg, #1e3a5f 0%, #1a0d2e 50%, #0a0a1a 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(96,165,250,0.5))",
    "videoPlayBg": "rgba(96,165,250,0.85)",
    "videoFallback": "linear-gradient(135deg, #0a1628, #1e3a5f)"
  },
  works: {
    anime: [
    {
      cover: animeCover,
      label: "主要登场作品",
      title: "Charlotte | シャーロット",
      titleJp: "Charlotte",
      meta: [
      { icon: "🏢", label: "制作：", value: "P.A.WORKS" },
      { icon: "📅", label: "播出：", value: "2015年7月" },
      { icon: "📺", label: "集数：", value: "全13话" },
      { icon: "🎤", label: "CV：", value: "佐仓绫音" }
      ],
      desc: "在少数青春期少年少女中会引发<span class=\"highlight\">特殊能力现象</span>。友利奈绪作为星之海学园学生会会长，一直<span class=\"highlight-pink\">默默守护着这些特殊能力者</span>，并与乙坂有宇一起踏上了改变命运的旅程。",
      tags: [
      { cls: "dark", text: "校园" },
      { cls: "dark", text: "超能力" },
      { cls: "dark", text: "青春" },
      { cls: "live", text: "正版引进" }
      ],
      action:       { url: "https://www.bilibili.com/bangumi/play/ep63840?spm_id_from=333.337.0.0", cls: "btn-tomori", icon: "📺", text: "在Bilibili观看" }
    }
    ],
    game: [],
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '友利奈绪 · 官方立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '友利奈绪 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '友利奈绪 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '友利奈绪 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '友利奈绪 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '友利奈绪 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '友利奈绪 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '友利奈绪 · 美图 07' }
  ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1TR4y1j7zB/', title: '【𝟖𝐊】Charlotte NCOP 全站最高画质 夏洛特OP无字幕 Bravely You', desc: '夏洛特OP无字幕' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1Tu411Q74X/', title: '【𝟖𝐊𝟔𝟎𝐅𝐏𝐒】"我是你的恋人" Charlotte NCED03 全站最高画质 夏洛特第13话ED无字幕 君の文字', desc: '夏洛特第13话ED无字幕' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1Xt41157Ge/', title: '【前方高萌/治愈/夏洛特】友利奈绪——多少人心中的理想型女友', desc: '友利奈绪治愈向剪辑' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1P34y1S78D/', title: '【Charlotte/夏洛特】友利奈绪，新婚快乐！', desc: '友利奈绪剪辑' }
    ]
}
