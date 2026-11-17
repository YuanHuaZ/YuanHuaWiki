/**
 * ying 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '影',
  title: '黯羽东君',
  info: [
    { icon: '⚔️', label: '定位', value: '战士（对抗路 / 打野）', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '170cm', iconClass: 'pink' },
    { icon: '🧬', label: '种族', value: '魔种', iconClass: 'cyan' },
    { icon: '🏛️', label: '阵营', value: '全知者', iconClass: 'purple' },
    { icon: '🗺️', label: '区域', value: '大河流域 · 云梦泽', iconClass: 'pink' },
    { icon: '🎤', label: '声优', value: '佟心竹（c小调）', iconClass: 'cyan' },
    { icon: '📅', label: '上线', value: '2024年9月25日', iconClass: 'purple' },
    { icon: '🕯️', label: '曾用名', value: '景 / 东君', iconClass: 'pink' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🗯️ 话痨', '🖤 病娇', '🔥 疯批', '🪶 重情'],
      content: [
        '影是个<span class="highlight">嘴上不饶人的疯子</span>。她笑着说话，句句带刺，一边调侃一边把羽刃往人脖子上送——「我不是闲人，是坏人哟~」。',
        '但她的疯是有来处的：全族被屠、自己战死、醒来已是二十年后。<span class="highlight-pink">话越多，越像是在压住那片死寂</span>。她对少数几个人仍留着旧日的软。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 白色长发', '👁️ 金色瞳孔', '🪶 赤色残翼', '🖤 翎羽装饰'],
      content: [
        '复生后的影皮肤苍白、头发凌乱干燥，彻底变成了白色，<span class="highlight">左侧那束羽毛状的头发转为赤红</span>。',
        '她只剩下半扇光亮的红羽，被云珀改造后环绕周身。发饰、耳坠、裙摆全是<span class="highlight-pink">翎羽的形状</span>——那是羽族留下的最后痕迹。瞳孔里仍留着金色的太阳余晖，昭示她曾是东君。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🪶 羽族族长之女', '🎓 巫叶学园', '☀️ 光明战神东君', '⚰️ 天缺之祸'],
      content: [
        '「景」是云梦泽羽族族长之女，朝气蓬勃、不受约束，像一颗永远不会熄灭的小太阳。<span class="highlight">在巫叶学园里，几乎所有逸闻都有她的身影</span>。',
        '二十年前的天缺之祸，她作为光明战神东君率族御敌，<span class="highlight-pink">却没等到支援，战至最后一刻</span>，羽族从此覆灭。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['⚰️ 冥界二十年', '🩸 以影为名', '🤝 全知者', '🔥 向巫神祝复仇'],
      content: [
        '生命的力量再度萌发，把她从冥界唤醒了。<span class="highlight">东君的人生已经结束</span>，她抛弃所有过往，给自己取名「影」。',
        '她与昔日故友东皇太一创立的全知者阵营合作，目标只有一个：把「罪恶的根源」毁灭殆尽，<span class="highlight-pink">看看能不能换回云梦泽真正的光明</span>。'
      ],
      quote: '云梦泽啊，光明灌溉的土地，暗影怒放的舞台！',
      quoteAuthor: '—— 影'
    }
  ],
  abilities: [
    { icon: '🪶', name: '羽刃', grade: 'EX', desc: '以经云珀改造的残翼为武器，羽片飞出时<span class="highlight">环形飞舞、锋利无比</span>，近可切割远可回旋。' },
    { icon: '⚔️', name: '远近双形态', grade: 'S', desc: '普攻有远近两种形态：近距离快速三段伤害，远距离掷出可回弹的飞刃，<span class="highlight-pink">并为敌人打上印记</span>。' },
    { icon: '🩸', name: '不屈', grade: 'EX', desc: '大招开启后获得额外生命与移速，进入「不屈」状态——<span class="highlight">即便阵亡也能缓缓复活并造成伤害</span>。' }
  ],
  relationships: [
    { icon: '🐉', name: '东皇太一', type: '故友 / 合作', desc: '巫叶学园时期的挚友，如今是<span class="highlight">全知者的领袖</span>，也是她复仇路上的盟友。', cls: 'rel-friend' },
    { icon: '⚖️', name: '大司命', type: '旧友 / 对手', desc: '同为九神巫体系的旧识。<span class="highlight-pink">两人见面必动手</span>，却也彼此最懂对方在守什么。', cls: 'rel-other' },
    { icon: '🕊️', name: '云中君', type: '晚辈', desc: '羽族后辈。她嘴上刻薄，<span class="highlight">却把仅剩的温柔都给了这一辈</span>。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🪶',
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
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #290a0f 25%, #390e16 50%, #45111a 75%, #0a0a14 100%)",
    "glow1": "#c13049",
    "glow2": "#c16c30",
    "particleBg": "rgba(193,48,73,0.3)",
    "gridImage": "linear-gradient(rgba(193,48,73,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(193,48,73,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(193,48,73,0.2), rgba(193,108,48,0.1))",
    "badgeBorder": "1px solid rgba(193,48,73,0.4)",
    "badgeColor": "#eec4cb",
    "badgeShadow": "0 2px 12px rgba(193,48,73,0.15)",
    "dotBg": "#c13049",
    "nameGrad": "linear-gradient(135deg, #f7e3e7 0%, #dd7e8e 35%, #c13049 65%, #eec4cb 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#e49fab",
    "titleBadgeBg": "linear-gradient(135deg, rgba(193,48,73,0.2) 0%, rgba(193,108,48,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(193,48,73,0.4)",
    "titleBadgeColor": "#eec4cb",
    "tagBg": "linear-gradient(135deg, rgba(193,48,73,0.12), rgba(193,48,73,0.06))",
    "tagBorder": "1px solid rgba(193,48,73,0.25)",
    "tagColor": "#e49fab",
    "ringGrad": "linear-gradient(135deg, #c13049, #c16c30, #eec4cb, #c13049) border-box",
    "avatarShadow": "0 0 60px rgba(193,48,73,0.4), 0 0 120px rgba(193,48,73,0.15)",
    "placeholderBg": "linear-gradient(180deg, #411019 0%, #25090e 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(193,48,73,0.5))",
    "videoPlayBg": "rgba(193,48,73,0.85)",
    "videoFallback": "linear-gradient(135deg, #310c13, #4a121c)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '所属游戏',
        title: '王者荣耀',
        titleJp: 'Honor of Kings',
        meta: [
          { icon: "🏢", label: "主要登场作品", value: "天美工作室群" },
          { icon: "📅", label: "上线：", value: "2015年11月" },
          { icon: "🕹️", label: "类型：", value: "MOBA" },
          { icon: "⚔️", label: "定位：", value: "战士" }
        ],
        desc: '云梦泽篇章里的新英雄。光明战神死在了二十年前，归来的只有一个叫「影」的复仇者——<span class="highlight">她既是战场上的持续输出，也是不肯倒下的那一个</span>。',
        tags: [
          { cls: "dark", text: "竞技" },
          { cls: "dark", text: "MOBA" },
          { cls: "live", text: "国服" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: meta.image, badge: '立绘', overlay: '影 · 官方立绘' }
  ],
  videos: []
}
