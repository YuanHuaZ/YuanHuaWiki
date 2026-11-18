/**
 * grace 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '莉莉',
  title: '绮梦织香',
  info: [
    { icon: '✨', label: '共鸣属性', value: '衍射', iconClass: 'purple' },
    { icon: '🔫', label: '武器类型', value: '佩枪', iconClass: 'pink' },
    { icon: '⭐', label: '稀有度', value: '五星', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '醋醋（中）/ 高森奈津美（日）', iconClass: 'purple' },
    { icon: '👩‍⚕️', label: '身份', value: '调香师 · 心理疗愈师', iconClass: 'pink' },
    { icon: '🏙️', label: '归属', value: '联邦城', iconClass: 'cyan' },
    { icon: '📅', label: '实装版本', value: '3.8', iconClass: 'purple' },
    { icon: '🏷️', label: '别号', value: '忧郁小葡萄', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🌼 温柔', '🔍 心思细腻', '💪 努力', '🫥 格格不入'],
      content: [
        '莉莉是个<span class="highlight">温柔到近乎固执的人</span>。她学不会阻止战争，就把力气全用在救眼前这一个人身上。',
        '聪明、努力、心思细腻，是所有人眼里最优秀的医生。<span class="highlight-pink">只是回到新联邦之后，她总觉得自己与周遭差了一个时代</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 紫粉色长发', '👁️ 红色眼眸', '🌼 百合花环', '🎀 黑色头纱'],
      content: [
        '粉紫色的及腰长发扎成麻花辫，红色瞳孔。<span class="highlight">头顶一圈由百合编成的花环</span>，几朵散在发丝间。',
        '黑色宽大头纱边缘带蕾丝，黑白拼接连衣裙是露肩设计，裙身缀着金属绑带与四叶草挂件。<span class="highlight-pink">裙摆后拖着一整片粉紫渐变的薄纱</span>，像星点落在夜里。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🧪 调香师', '🕊️ 心理疗愈师', '🎼 绮梦织香', '🩹 战争的旁观者'],
      content: [
        '她本来只是一名调香师，因为嗅觉远超常人，能靠香气分辨情绪与精神。<span class="highlight">战争把她卷了进去</span>。',
        '在联邦城的共鸣者战争中，她用能力为战士编织短暂的幻梦，成了前线唯一的心理疗愈师。<span class="highlight-pink">她救不了所有人，但她一个都不肯放弃</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🚂 灵魂列车', '🌌 星星落地', '🫂 新的乘客', '🌼 好梦'],
      content: [
        '她做过一个梦：星星落在地上，变成触手可及的人。<span class="highlight">她不用再抬头思念，而是和他们一起坐上那列车</span>。',
        '她以为时间会永远停在那节车厢里，直到一位新的乘客闯进来——<span class="highlight-pink">让时间重新开始流动</span>。3.8 版本的故事就沿着这列车展开。'
      ],
      quote: '如果存在一个与现实无异的梦，你愿意永远沉溺在其中吗？',
      quoteAuthor: '—— 莉莉'
    }
  ],
  abilities: [
    { icon: '🌼', name: '绮梦织香', grade: 'EX', desc: '靠远超常人的嗅觉调制香息，<span class="highlight">让人坠入短暂的幻梦</span>，以此疗愈精神创伤。入梦者所见、所历皆不相同。' },
    { icon: '🔔', name: '坠于幻梦摇篮', grade: 'S', desc: '召唤持续存在的「梦铃」，<span class="highlight-pink">后台自动治疗、加盾、聚怪</span>，全程不打断队友动作。' },
    { icon: '🌗', name: '绮梦香息', grade: 'S', desc: '分「美梦」与「梦魇」两种形态可切换，<span class="highlight">伤害与治疗都基于生命值倍率</span>，越肉越强。' }
  ],
  relationships: [
    { icon: '🌊', name: '漂泊者', type: '同行者', desc: '闯进那节车厢的「新乘客」，<span class="highlight">让她的时间重新流动的人</span>。', cls: 'rel-romance' },
    { icon: '🦊', name: '心月狐', type: '同奏体系', desc: '同奏队的核心输出，<span class="highlight-pink">她的「落梦归魂」正好补上那口攻击力</span>。', cls: 'rel-friend' },
    { icon: '🎐', name: '西格莉卡', type: '声骸体系', desc: '声骸队的主 C，<span class="highlight">两人的增益叠起来才是完整循环</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🌼',
  avatarSize: '145% auto',
  avatarBg: null,
  review: '初见立绘确实好看，还是我喜欢的紫毛，所以一开始也并没有对剧情抱太多期待，只要完完整整讲完一个故事就好。但题材是反战确实更能够让人共情吧，等不会回来的妈妈的小男孩，战场上的钢琴家与吉他手，怎么看都确实是战争时期会发生的事，甚至他们死前都没想明白，明明是一国的人，我们为什么要打仗？莉莉即使知道高层不把人命当命，她也无能为力，毕竟她只是一个护士，她所能做的唯有在战场上救人。作为第五战区的“送命军”，他们何尝不知道自己必死的结局呢？绝望中的人需要希望的寄托，只要赢了就能回家了。当战友一个个倒下，莉莉最终举起了指挥官教她用的手枪，对准了自己，仿佛自杀就能解脱。被救了之后她选择引导战友们的亡魂，让战友安息，当她自由并再次回到国家却发现国家已经忘了当年的人们，所以她选择引导所有死去的人们，待到所有人安息，再一次“自杀”解脱，但她选择来杀她的阿漂却带她见到了不一样的世界，外面的世界多美好，你有机会去看，而死去战友的灵魂也让她不要再执着过去了，她做的足够多了接下来该做自己了。阿漂救莉莉的代价是忘记阿漂，虽然莉莉知道后很难过，但不是约好了我们的初见不该是这样，我们的初见应该很美好才对，下次见面就是我们的初次见面，到那时我们会像梦中一样见证世界的美好。',
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '💬', label: '评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #1d082b 25%, #290b3c 50%, #310e49 75%, #0a0a14 100%)",
    "glow1": "#bb7ae6",
    "glow2": "#e67ad2",
    "particleBg": "rgba(187,122,230,0.3)",
    "gridImage": "linear-gradient(rgba(187,122,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(187,122,230,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(187,122,230,0.2), rgba(230,122,210,0.1))",
    "badgeBorder": "1px solid rgba(187,122,230,0.4)",
    "badgeColor": "#dec1f1",
    "badgeShadow": "0 2px 12px rgba(187,122,230,0.15)",
    "dotBg": "#bb7ae6",
    "nameGrad": "linear-gradient(135deg, #efe2f8 0%, #b877e4 35%, #bb7ae6 65%, #dec1f1 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#ca9ae9",
    "titleBadgeBg": "linear-gradient(135deg, rgba(187,122,230,0.2) 0%, rgba(230,122,210,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(187,122,230,0.4)",
    "titleBadgeColor": "#dec1f1",
    "tagBg": "linear-gradient(135deg, rgba(187,122,230,0.12), rgba(187,122,230,0.06))",
    "tagBorder": "1px solid rgba(187,122,230,0.25)",
    "tagColor": "#ca9ae9",
    "ringGrad": "linear-gradient(135deg, #bb7ae6, #e67ad2, #dec1f1, #bb7ae6) border-box",
    "avatarShadow": "0 0 60px rgba(187,122,230,0.4), 0 0 120px rgba(187,122,230,0.15)",
    "placeholderBg": "linear-gradient(180deg, #2e0d45 0%, #1a0727 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(187,122,230,0.5))",
    "videoPlayBg": "rgba(187,122,230,0.85)",
    "videoFallback": "linear-gradient(135deg, #230a34, #340f4d)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '所属游戏',
        title: '鸣潮',
        titleJp: 'Wuthering Waves',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "库洛游戏" },
          { icon: "📅", label: "上线：", value: "2024年5月" },
          { icon: "🕹️", label: "类型：", value: "开放世界 ARPG" },
          { icon: "🌼", label: "实装：", value: "3.8「旧梦凋零」" }
        ],
        desc: '一个被战争推着走的调香师。她的战场不在前线，在每个人的梦里——<span class="highlight">能做的就是把眼前这个人救回来</span>。',
        tags: [
          { cls: "dark", text: "末世" },
          { cls: "dark", text: "开放世界" },
          { cls: "live", text: "国服" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '莉莉 · 官方立绘' }
  ],
  videos: []
}
