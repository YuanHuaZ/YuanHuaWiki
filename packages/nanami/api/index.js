/**
 * nanami 角色数据包 — 由 CharacterDetailLayout 布局组件消费
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
import gameCover from '../images/b.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.jpg'
import sp4 from '../images/sp4.jpg'

export default {
  ...meta,
  nameJp: '七海千秋',
  title: '超高校级的游戏玩家',
  info: [
    { icon: '🎂', label: '生日', value: '3月14日', iconClass: 'purple' },
    { icon: '🩸', label: '血型', value: 'O型', iconClass: 'pink' },
    { icon: '♓', label: '星座', value: '双鱼座', iconClass: 'cyan' },
    { icon: '📏', label: '身高', value: '160cm', iconClass: 'purple' },
    { icon: '⚖️', label: '体重', value: '46kg', iconClass: 'pink' },
    { icon: '🏫', label: '学校', value: '希望之峰学园', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '花泽香菜', iconClass: 'purple' },
    { icon: '📺', label: '所属作品', value: '超级弹丸论破2：再见绝望学园', iconClass: 'pink' },
    { icon: '🎯', label: '角色定位', value: '女主角 / 核心角色', iconClass: 'cyan' }
  ],
  review: '最初是因为跟第五人格联动才去玩的，只看外貌的话其实一开始我并不喜欢，反而觉得盾子挺好看的，但是看了剧情就完全不这么觉得了，盾子就是纯出生，而七海真的太美好了，前期七海一路都是像新手指引一样一直在引导日向，但学籍裁判上表现出的智商很高，甚至经常反驳狛枝，也经常提供关键线索，到了第五章真的想不到，我一直在投狛枝，真的觉得七海不可能是凶手，就算我是七海也不可能是。七海选择相信大家被处刑了，最后跟大家告别，真的哭了，这么好的人都得被处刑，终章揭露一切，是我们亲手把我们的希望七海投出去的，仿佛只剩下绝望了，但是她还在，或许说她一直都在，她是我们希望的象征，引领我们击败盾子。本以为到这就结束了，直到看了弹丸论破3，现实的七海是班长，她团结了一盘散沙的大家，也让没有能力的日向交到了朋友，但是，盾子又一次杀死了她，七海无法到达同学的面前，而同学们只能眼睁睁看着七海被处刑，真的是无尽绝望，更绝望的是七海死在日向面前但日向不记得她了，当时你能救她的，为什么记不起来，七海从来没嫌弃过你没能力，你为什么觉得没能力配不上七海，让大家看七海的二次处刑小高你真是纯纯的恶趣味，以致于我当时看完后好几个晚上睡觉都是七海被处刑的画面，难受的不行。',
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🎮 重度游戏宅', '😴 随时随地犯困', '💜 外冷内热', '✨ 不灭的希望信念'],
      content: [
        '七海千秋是一个<span class="highlight">性格温和、安静内向</span>的少女。她大部分时间都沉浸在游戏世界中，对现实世界的社交活动不太擅长，常常在对话中引用游戏术语和概念。',
        '她拥有<span class="highlight">超乎常人的游戏天赋</span>，几乎任何类型的游戏都能迅速上手并精通。但与此相对的是，她经常因为通宵玩游戏而在白天昏昏欲睡，随时随地都可能睡着——无论是在课堂上、走廊里，甚至是在与其他人的对话中。',
        '尽管表面看起来冷漠且不善言辞，七海<span class="highlight-pink">内心却极其善良温柔</span>。她总是默默关心着同伴们，在关键时刻会展现出惊人的勇气和决断力。她不会说华丽的言语，但会用实际行动来保护重要的人。',
        '她对「希望」有着强烈的信念，相信只要不放弃，就一定能找到通向光明的道路。这种坚定源于她<span class="highlight">内心深处对同伴的信任与爱</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 淡粉色短发', '👁️ 薄荷绿眼眸', '🧥 猫耳连帽衫', '🎮 掌机不离手'],
      content: [
        '七海千秋拥有<span class="highlight">淡粉色的短发</span>，发梢带着些许自然卷曲，前额刘海微微遮住左眼，给人一种慵懒而可爱的印象。她的眼眸是<span class="highlight">清澈的薄荷绿色</span>，如同初春的新芽，总是带着几分困倦和温柔。',
        '她日常穿着一件宽松的淡粉色连帽衫，帽子部分设计成<span class="highlight-pink">猫耳形状</span>，背后有一个大大的 <span class="highlight">「GAME」</span> 字样，是她作为游戏玩家的标志性装扮。连帽衫下搭配着深色的百褶裙和黑色过膝袜。',
        '她的右手几乎总是握着一台<span class="highlight">掌上游戏机</span>，那是她最珍贵的伙伴。当她专注玩游戏时，那双平时半睁的眼睛会罕见地完全睁开，闪烁着炽热的光芒。',
        '整个人的气质让人联想到<span class="highlight-pink">一只慵懒的猫</span>——安静、自我，但又在不经意间流露出令人心动的可爱。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏫 希望之峰学园 77期', '🎮 超高校级的游戏玩家', '💻 新世界程序', '🌟 班级精神支柱'],
      content: [
        '七海千秋是<span class="highlight">希望之峰学园第77届学生</span>，被评选为<span class="highlight">「超高校级的游戏玩家」</span>。她对所有类型的游戏都有着无与伦比的天赋，从经典RPG到格斗游戏，从解谜游戏到射击游戏，无一不精。',
        '在新世界程序的虚拟空间中，她是日向创最早结识的同学之一，并逐渐成为了他<span class="highlight-pink">最亲密的伙伴</span>。作为班级中最早认识到同学们之间羁绊重要性的人之一，七海在推动大家相互了解、共同面对挑战方面发挥了不可替代的作用。',
        '她的真实身份蕴含着《弹丸论破2》<span class="highlight">最深刻的秘密</span>——七海千秋不仅是同学们的精神支柱，更是整个故事的灵魂人物。她的存在象征着在最黑暗的时刻依然不灭的<span class="highlight">希望之光</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🏝️ 贾巴沃克岛', '🎭 修学旅行', '⚖️ 学级裁判', '💻 新世界程序'],
      content: [
        '《超级弹丸论破2：再见绝望学园》的故事发生在一个名为<span class="highlight">「贾巴沃克岛」</span>的南国岛屿上。七海千秋与日向创以及其他同学们被带到这座岛上，被迫参与黑白熊主持的「修学旅行」——实际上是一场<span class="highlight-pink">残酷的杀戮游戏</span>。',
        '在游戏过程中，七海以她独特的方式支持着日向创。她总是<span class="highlight">用游戏的比喻来解释眼前的困境</span>，虽然听起来有些不着边际，但往往一针见血。当同学们陷入相互猜忌时，她坚持相信大家，努力维护着班级的团结。',
        '在经历了一系列令人心碎的审判和牺牲之后，真相终于浮出水面——整个岛屿世界实际上是一个名为<span class="highlight">「新世界程序」</span>的虚拟现实。七海千秋在现实世界中已经……但她留下的意志，成为了<span class="highlight-pink">唤醒同伴、战胜绝望</span>的关键。'
      ],
      quote: '看吧，放手去做总会有办法的。如果是你的话，一定能够创造未来。',
      quoteAuthor: '—— 七海千秋'
    }
  ],
  abilities: [
    { icon: '🎮', name: '游戏精通', desc: '对所有类型的电子游戏都有<span class="highlight">超乎常人的天赋</span>。据说<span class="highlight-pink">没有任何游戏能难倒她超过一天</span>。' },
    { icon: '🧩', name: '逻辑推理', desc: '常年沉浸解谜游戏所培养出的<span class="highlight">敏锐分析能力</span>。在学级裁判中能迅速抓住关键线索。' },
    { icon: '💡', name: '希望之力', desc: '在绝望深渊中依然<span class="highlight">保持对未来的信念</span>。她的存在本身就是同学们的<span class="highlight-pink">精神支柱</span>。' },
    { icon: '🛡️', name: '团结之力', desc: '擅长用<span class="highlight">游戏的团队合作理念</span>来凝聚伙伴，<span class="highlight-pink">呼吁大家团结一致</span>。' }
  ],
  relationships: [
    { icon: '👦', name: '日向创', type: '亲密伙伴', desc: '在新世界程序的虚拟空间中，七海是日向<span class="highlight">最早结识的同学之一</span>。她逐渐成为了日向<span class="highlight-pink">最亲密的伙伴</span>，两人之间的羁绊是弹丸论破2最感人的情感线之一。', cls: 'rel-romance' },
    { icon: '🏫', name: '77期同学们', type: '同伴', desc: '作为希望之峰学园77期的学生，七海是班级的<span class="highlight">精神支柱</span>。她总是用游戏的比喻来解释困境，<span class="highlight-pink">坚持相信大家</span>，努力维护班级团结。', cls: 'rel-friend' },
    { icon: '🐻', name: '黑白熊', type: '对立', desc: '残酷杀戮游戏的主谋。七海深知黑白熊的<span class="highlight">真正目的</span>，她始终拒绝屈服于绝望，<span class="highlight-pink">努力寻找破局的方法</span>。', cls: 'rel-other' }
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
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '💬', label: '评价' }
    ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0f0a1a 0%, #1a0a2e 25%, #1a1030 50%, #0d1a2e 75%, #0a0a1a 100%)",
    "glow1": "#a855f7",
    "glow2": "#ec4899",
    "particleBg": "rgba(168,85,247,0.3)",
    "gridImage": "linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(192,132,252,0.1))",
    "badgeBorder": "1px solid rgba(168,85,247,0.4)",
    "badgeColor": "#c084fc",
    "badgeShadow": "0 0 20px rgba(168,85,247,0.2)",
    "dotBg": "#a855f7",
    "nameGrad": "linear-gradient(135deg, #fff 0%, #c084fc 40%, #a855f7 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#c084fc",
    "titleBadgeBg": "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(192,132,252,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(168,85,247,0.4)",
    "titleBadgeColor": "#c084fc",
    "tagBg": "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(192,132,252,0.06))",
    "tagBorder": "1px solid rgba(168,85,247,0.25)",
    "tagColor": "#c084fc",
    "ringGrad": "linear-gradient(135deg, #a855f7, #c084fc, #a855f7) border-box",
    "avatarShadow": "0 0 60px rgba(168,85,247,0.4), 0 0 120px rgba(168,85,247,0.15)",
    "videoPlayBg": "rgba(168,85,247,0.85)",
    "reviewBg": "linear-gradient(135deg, #0f0a1a 0%, #1a0a2e 25%, #1a1030 50%, #0a0a1a 100%)",
    "reviewDots": "radial-gradient(circle, #a855f7 1px, transparent 1px)",
    "reviewOverlay": "rgba(168,85,247,0.15)",
    "reviewAvatarShadow": "0 0 0 4px rgba(168,85,247,0.3), 0 4px 20px rgba(168,85,247,0.3)",
    "reviewLabelBg": "rgba(168,85,247,0.25)",
    "reviewLabelColor": "#c084fc",
    "reviewDescColor": "#c084fc",
    "reviewBodyBorder": "1px solid rgba(168,85,247,0.06)",
    "videoFallback": "linear-gradient(135deg, #1a0a2e, #2d1b4e)"
  },
  works: {
    anime: [
    {
      cover: animeCover,
      label: "主要登场作品",
      title: "弹丸论破3 -The End of 希望之峰学园- 绝望篇",
      titleJp: "ダンガンロンパ3 -The End of 希望ヶ峰学園- 絶望編",
      meta: [
      { icon: "🏢", label: "制作：", value: "Lerche" },
      { icon: "📅", label: "播出：", value: "2016年7月" },
      { icon: "📺", label: "集数：", value: "全11话" },
      { icon: "🎤", label: "CV：", value: "花泽香菜" }
      ],
      desc: "希望之峰学园第77届学生们的过往故事。七海千秋作为<span class=\"highlight\">「超高校级的游戏玩家」</span>，在班级中经历了<span class=\"highlight-pink\">从希望到绝望的转变</span>。",
      tags: [
      { cls: "dark", text: "悬疑" },
      { cls: "dark", text: "推理" },
      { cls: "dark", text: "校园" },
      { cls: "live", text: "正版引进" }
      ],
      action:       { url: "https://www.bilibili.com/bangumi/play/ep90847?spm_id_from=333.337.0.0", cls: "btn-bilibili", icon: "📺", text: "在Bilibili观看" }
    }
    ],
    game: [
    {
      cover: gameCover,
      label: "主要登场游戏",
      title: "超级弹丸论破2：再见绝望学园",
      titleJp: "スーパーダンガンロンパ2 さよなら絶望学園",
      meta: [
      { icon: "🏢", label: "开发商：", value: "Spike Chunsoft" },
      { icon: "📅", label: "发售：", value: "2012年7月26日" },
      { icon: "🎮", label: "平台：", value: "PSP / PS Vita / PC" },
      { icon: "🎤", label: "CV：", value: "花泽香菜" }
      ],
      desc: "被带到贾巴沃克岛的<span class=\"highlight\">77届学生们</span>被迫参与黑白熊的<span class=\"highlight-pink\">「修学旅行」</span>。七海千秋是日向创最早结识的同学之一，用<span class=\"highlight\">游戏的比喻</span>鼓励着陷入困境的同伴。",
      tags: [
      { cls: "dark", text: "推理" },
      { cls: "dark", text: "冒险" },
      { cls: "dark", text: "视觉小说" }
      ],
      action:       { url: "https://store.steampowered.com/app/413420/Danganronpa_2_Goodbye_Despair/", cls: "btn-bilibili btn-steam", icon: "🎮", text: "在Steam购买" }
    }
    ],
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '七海千秋 · 官方角色立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '七海千秋 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '七海千秋 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '七海千秋 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '七海千秋 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '七海千秋 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '七海千秋 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '七海千秋 · 美图 07' }
    ],
  videos: [
      { cover: sp1, url: 'https://www.bilibili.com/video/BV1yt4y1s7yN', title: 'ヒステリックナイトガール【弹丸论破2】手书【live2d动画】', desc: '七海千秋 手书' },
      { cover: sp2, url: 'https://www.bilibili.com/video/BV1Br4y1Z7ge', title: '⚠️OTOMEROID/', desc: '七海千秋 手书' },
      { cover: sp3, url: 'https://www.bilibili.com/video/BV1iS4y1u78t', title: '【弹丸论破2手书】BABY【七海千秋中心】', desc: '七海千秋 手书' },
      { cover: sp4, url: 'https://www.bilibili.com/video/BV1WjQAYnEgT', title: '【弹丸论破2手书】ずっとずっとずっと【2025七海千秋生贺】', desc: '七海千秋 手书' }
    ]
}
