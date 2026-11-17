/**
 * reke 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '蕾克',
  title: '小红帽',
  info: [
    { icon: '🏷️', label: '别名', value: '小红帽', iconClass: 'purple' },
    { icon: '💇', label: '发色', value: '金黄色', iconClass: 'cyan' },
    { icon: '👁️', label: '瞳色', value: '蓝色', iconClass: 'pink' },
    { icon: '🐺', label: '搭档', value: '魄罗', iconClass: 'purple' },
    { icon: '⚔️', label: '身份', value: '童话【小红帽】', iconClass: 'cyan' },
    { icon: '🎮', label: '所属作品', value: 'BLACK SOULS 系列', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['😐 面瘫无口', '🔪 对杀人毫不犹豫', '🐺 只对魄罗温柔', '🕯️ 短命'],
      content: [
        '蕾克几乎不说话。她的沉默不是冷漠，而是<span class="highlight">被童话反复碾过之后剩下的东西</span>。',
        '她对杀人没有犹豫，对死亡也没有恐惧。唯一会让她软下来的，是那头灰狼魄罗——<span class="highlight-pink">她只对它有好感</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['🔴 血红斗篷', '💇 金色长发', '👁️ 蓝色眼眸', '🗡️ 短刃'],
      content: [
        '红色的斗篷、金色的长发、蓝色的眼睛，一眼就能认出是「小红帽」。<span class="highlight">但这个童话早就烂掉了</span>。',
        '她的衣服方便活动，也方便洗掉血迹。身上那点红色，<span class="highlight-pink">分不清是布料还是别的</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🌲 小红帽之森', '🪓 杀死祖父', '🐺 与魄罗同行', '♻️ 轮回之中'],
      content: [
        '童话里的她是被祖父玷污的小红帽，杀了祖父、让狼吃掉尸体，<span class="highlight">从此被祖母憎恨</span>。',
        '她比谁都清楚，这个世界的童话残忍得离谱。<span class="highlight-pink">而她只是其中一个被写坏的句子</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['⛵ 水上小船', '💰 买下她', '🪞 镜子穿行', '🌅 最后的朝霞'],
      content: [
        '一代里她住在森林深处的小屋，主角可以花魂把她「买下」，让她加入队伍。<span class="highlight">她并不反抗，也不期待</span>。',
        '二代里她借白兔之力来到不思议之国追查黑幕。里路线中她斩下爱丽丝的头颅，把主角从无尽的欢爱里拽出来——<span class="highlight-pink">代价是她只有二十年的寿命</span>。'
      ],
      quote: '我是不会死的，在斩下「你」的头颅之前。',
      quoteAuthor: '—— 蕾克'
    }
  ],
  abilities: [
    { icon: '🗡️', name: '剑术', grade: 'EX', desc: '干净利落，<span class="highlight">不留多余动作</span>。' },
    { icon: '🐺', name: '魄罗', grade: 'S', desc: '灰狼伙伴，<span class="highlight-pink">她唯一的情感锚点</span>。' },
    { icon: '🪞', name: '镜子穿行', grade: 'A', desc: '借镜子在场景间移动，<span class="highlight">童话里的捷径</span>。' }
  ],
  relationships: [
    { icon: '🐺', name: '魄罗', type: '搭档', desc: '吃掉祖父尸体的灰狼。她说<span class="highlight">「我只对魄罗有感觉」</span>。', cls: 'rel-family' },
    { icon: '🖤', name: '格林', type: '主角', desc: '被她创造、被她追着砍、也把她带出轮回的人。', cls: 'rel-romance' },
    { icon: '👑', name: '玛丽·安', type: '敌对', desc: '里路线中的关键人物，<span class="highlight-pink">与她的死直接相关</span>。', cls: 'rel-other' }
  ],
  placeholderEmoji: '🩸',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'videos', icon: '🎬', label: '相关视频' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #2a0c09 25%, #3a110d 50%, #471510 75%, #0a0a14 100%)",
    "glow1": "#c0392b",
    "glow2": "#c0902b",
    "particleBg": "rgba(192,57,43,0.3)",
    "gridImage": "linear-gradient(rgba(192,57,43,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,57,43,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(192,57,43,0.2), rgba(192,144,43,0.1))",
    "badgeBorder": "1px solid rgba(192,57,43,0.4)",
    "badgeColor": "#efc7c2",
    "badgeShadow": "0 2px 12px rgba(192,57,43,0.15)",
    "dotBg": "#c0392b",
    "nameGrad": "linear-gradient(135deg, #f7e5e3 0%, #e0857b 35%, #c0392b 65%, #efc7c2 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#e6a49d",
    "titleBadgeBg": "linear-gradient(135deg, rgba(192,57,43,0.2) 0%, rgba(192,144,43,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(192,57,43,0.4)",
    "titleBadgeColor": "#efc7c2",
    "tagBg": "linear-gradient(135deg, rgba(192,57,43,0.12), rgba(192,57,43,0.06))",
    "tagBorder": "1px solid rgba(192,57,43,0.25)",
    "tagColor": "#e6a49d",
    "ringGrad": "linear-gradient(135deg, #c0392b, #c0902b, #efc7c2, #c0392b) border-box",
    "avatarShadow": "0 0 60px rgba(192,57,43,0.4), 0 0 120px rgba(192,57,43,0.15)",
    "placeholderBg": "linear-gradient(180deg, #43140f 0%, #260b08 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(192,57,43,0.5))",
    "videoPlayBg": "rgba(192,57,43,0.85)",
    "videoFallback": "linear-gradient(135deg, #320f0b, #4b1611)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: 'BLACK SOULS',
        titleJp: 'BLACK SOULS',
        meta: [
          { icon: "🎮", label: "主要登场作品", value: "寿司勇者トロ" },
          { icon: "🕹️", label: "类型：", value: "黑暗童话 RPG" },
          { icon: "💻", label: "平台：", value: "PC" },
          { icon: "📦", label: "系列：", value: "BS1 / BS2" }
        ],
        desc: '把格林童话全部拧成暗黑版本的 RPG。小红帽在这里不是被拯救的人，<span class="highlight">是提着刀走到最后的那一个</span>。',
        tags: [
          { cls: "dark", text: "黑暗奇幻" },
          { cls: "dark", text: "同人" },
          { cls: "dark", text: "RPG" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '蕾克 · 官方立绘' }
  ],
  videos: []
}
