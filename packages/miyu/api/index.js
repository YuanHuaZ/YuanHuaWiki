/**
 * miyu 角色数据包 — 由 CharacterDetailLayout 布局组件消费
 */

import meta from '../meta.js'

export default {
  ...meta,
  nameJp: '佐原海夕',
  title: '街头木偶师',
  info: [
    { icon: '🎂', label: '生日', value: '4月7日', iconClass: 'purple' },
    { icon: '📏', label: '身高', value: '156cm', iconClass: 'pink' },
    { icon: '🩸', label: '血型', value: 'A型', iconClass: 'cyan' },
    { icon: '🎤', label: '声优', value: '市之濑加那', iconClass: 'purple' },
    { icon: '🎭', label: '代号', value: 'PUPPET', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: 'P5X / 女神异闻录：夜幕魅影', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['🎭 温顺外表', '💡 极有主见', '🍼 兄控', '🏃 说走就走'],
      content: [
        '第一眼是标准的大小姐：礼貌、温顺、说话轻声细语。<span class="highlight">但她的主意比谁都硬</span>。',
        '为了不按父母安排的人生走，她直接离家出走，靠街头表演养活自己。<span class="highlight-pink">叫主角「兄长大人」的时候格外真诚</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 深蓝长发', '👁️ 澄澈眼眸', '🎀 蝴蝶结发饰', '🎭 木偶道具'],
      content: [
        '深蓝色的长发，眼神干净，举止是练过的优雅。<span class="highlight">站在街头表演时反而更自然</span>。',
        '手里常带着木偶道具，动作利落。怪盗装束下<span class="highlight-pink">完全换了一个人</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🏠 富裕家庭', '🎪 街头木偶剧演员', '🌊 艺名「海月」', '🏃 离家出走'],
      content: [
        '她出生在富裕家庭，父母替她规划好了未来。<span class="highlight">她不想照做，于是走了</span>。',
        '街头表演是她的谋生方式，艺名「海月」——一种水母。<span class="highlight-pink">漂流、透明、看着柔软其实有毒</span>，很像她。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🎭 觉醒', '🎪 怪盗团', '👨‍👩‍👧 与父母', '🌊 自己的路'],
      content: [
        '她因为某个事件觉醒人格面具，成为怪盗团的一员，代号 PUPPET。<span class="highlight">这个名字既是嘲讽也是自嘲</span>。',
        '故事里她一直在证明：不靠家里也能活。<span class="highlight-pink">而父母最终看见的，是她自己选的那条路</span>。'
      ],
      quote: '兄长大人，请多指教。',
      quoteAuthor: '—— 佐原海夕'
    }
  ],
  abilities: [
    { icon: '🛡️', name: '解明支援', grade: 'S', desc: '为队伍提供护盾与精力回复，<span class="highlight">是队伍最稳的后盾</span>。' },
    { icon: '🎭', name: '木偶剧', grade: 'A', desc: '街头表演练出的手艺，<span class="highlight-pink">操控与表现力都极强</span>。' },
    { icon: '🏄', name: '冲浪板', grade: 'B', desc: '近战武器是冲浪板，<span class="highlight">怪盗形态下的反差萌</span>。' }
  ],
  relationships: [
    { icon: '🕶️', name: '主人公', type: '兄长大人', desc: '她口中「兄长大人」，<span class="highlight">是她在陌生城市里最信任的人</span>。', cls: 'rel-romance' },
    { icon: '👩', name: '多祢村理子', type: '姐姐大人', desc: '她仰慕的前辈，<span class="highlight-pink">两人关系亲密到引人侧目</span>。', cls: 'rel-friend' },
    { icon: '👨‍👩‍👧', name: '父母', type: '家人', desc: '替她安排好一切的人，<span class="highlight">也是她出走的理由</span>。', cls: 'rel-family' }
  ],
  placeholderEmoji: '🎭',
  avatarSize: 'cover',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'anime', icon: '📺', label: '相关作品' },
      { key: 'abilities', icon: '⭐', label: '能力关系' },
      { key: 'review', icon: '📝', label: '站长评价' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #091f2a 25%, #0d2b3b 50%, #0f3447 75%, #0a0a14 100%)",
    "glow1": "#4aa8d8",
    "glow2": "#4a55d8",
    "particleBg": "rgba(74,168,216,0.3)",
    "gridImage": "linear-gradient(rgba(74,168,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,168,216,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(74,168,216,0.2), rgba(74,85,216,0.1))",
    "badgeBorder": "1px solid rgba(74,168,216,0.4)",
    "badgeColor": "#c2e0f0",
    "badgeShadow": "0 2px 12px rgba(74,168,216,0.15)",
    "dotBg": "#4aa8d8",
    "nameGrad": "linear-gradient(135deg, #e3f1f8 0%, #7abee0 35%, #4aa8d8 65%, #c2e0f0 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#9dcee7",
    "titleBadgeBg": "linear-gradient(135deg, rgba(74,168,216,0.2) 0%, rgba(74,85,216,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(74,168,216,0.4)",
    "titleBadgeColor": "#c2e0f0",
    "tagBg": "linear-gradient(135deg, rgba(74,168,216,0.12), rgba(74,168,216,0.06))",
    "tagBorder": "1px solid rgba(74,168,216,0.25)",
    "tagColor": "#9dcee7",
    "ringGrad": "linear-gradient(135deg, #4aa8d8, #4a55d8, #c2e0f0, #4aa8d8) border-box",
    "avatarShadow": "0 0 60px rgba(74,168,216,0.4), 0 0 120px rgba(74,168,216,0.15)",
    "placeholderBg": "linear-gradient(180deg, #0e3143 0%, #081c26 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(74,168,216,0.5))",
    "videoPlayBg": "rgba(74,168,216,0.85)",
    "videoFallback": "linear-gradient(135deg, #0b2532, #10374c)"
  },
  works: {
    anime: [
      {
        cover: null,
        label: '主要登场作品',
        title: '女神异闻录：夜幕魅影',
        titleJp: 'P5X',
        meta: [
          { icon: "🏢", label: "开发：", value: "完美世界 黑羽工作室 × Atlus" },
          { icon: "📅", label: "上线：", value: "2024年4月" },
          { icon: "🕹️", label: "类型：", value: "回合制 JRPG" },
          { icon: "💻", label: "平台：", value: "移动 / PC" }
        ],
        desc: 'P5 世界观下的都市怪盗故事。一个离家出走的大小姐，在街头表演和怪盗身份之间，<span class="highlight">找回自己的名字</span>。',
        tags: [
          { cls: "dark", text: "都市" },
          { cls: "dark", text: "怪盗" },
          { cls: "dark", text: "RPG" }
        ],
        action: null
      }
    ],
    game: []
  },
  gallery: [],
  videos: [],
  review: 'P5X 里我最喜欢的一位。她的「乖」是真的，「倔」也是真的——能为了不听安排就去睡街头的人，温柔起来才更有分量。'
}
