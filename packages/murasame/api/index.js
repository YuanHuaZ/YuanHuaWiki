/**
 * murasame 角色数据包 — 由 CharacterDetailLayout 布局组件消费
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
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/13.jpg'
import img14 from '../images/14.jpg'
import img15 from '../images/15.jpg'
import img16 from '../images/16.jpg'

export default {
  ...meta,
  nameJp: '丛雨',
  title: '神刀之魂',
  info: [
    { icon: '🎤', label: '声优', value: '佐藤美柑', iconClass: 'purple' },
    { icon: '💇', label: '发色', value: '绿色', iconClass: 'pink' },
    { icon: '👁️', label: '瞳色', value: '红色', iconClass: 'cyan' },
    { icon: '🗡️', label: '本体', value: '神刀「丛雨丸」', iconClass: 'purple' },
    { icon: '🏮', label: '存在', value: '约五百年', iconClass: 'pink' },
    { icon: '🎮', label: '所属作品', value: '千恋＊万花', iconClass: 'cyan' }
  ],
  tabs: [
    {
      key: 'personality', label: '性格特点', icon: '💭',
      tags: ['⚡ 元气', '🗯️ 傲娇', '🍋 醋缸', '👻 怕鬼'],
      content: [
        '丛雨平时像个精力过剩的小孩：说话大声、爱闹、动不动就炸毛。<span class="highlight">五百年了也没长大</span>。',
        '但她意外地怕幽灵鬼怪——自己就是灵体，却怕同类。<span class="highlight-pink">这种矛盾是她最好笑也最可爱的地方</span>。'
      ]
    },
    {
      key: 'appearance', label: '外貌特征', icon: '👁️',
      tags: ['💇 绿色长发', '👁️ 红色眼眸', '🎀 两侧束发', '👘 清凉和服'],
      content: [
        '绿色的及膝长发，两侧用绳结扎起，红色眼睛。<span class="highlight">个子娇小，穿一身清凉的日式服装</span>。',
        '腰间系着红色束腰，走路带着铃铛声。<span class="highlight-pink">普通人看不见她，只有特定的人能</span>。'
      ]
    },
    {
      key: 'background', label: '身份背景', icon: '📖',
      tags: ['🗡️ 丛雨丸的管理者', '🕯️ 五百年前的祭品', '🏮 建实神社', '😔 心怀愧疚'],
      content: [
        '她原本是五百年前的人类，名叫「绫」。<span class="highlight">患了肺病，为了逃避死亡的恐惧自愿成为祭品</span>。',
        '人们赞颂她伟大，可她父母当年极力反对。<span class="highlight-pink">这份愧疚她背了五百年</span>。'
      ]
    },
    {
      key: 'story', label: '剧情简介', icon: '📜',
      tags: ['🗡️ 刀被折断', '😳 被摸到', '⛩️ 神体与结界', '🌸 变回凡人'],
      content: [
        '男主角将臣把刀折断时，她突然从空中出现——<span class="highlight">这是两人的第一次见面</span>。',
        '丛雨线里，她的神体被找到，结界减弱。最终她变回凡人，<span class="highlight-pink">第一次走进校园、第一次吃东西</span>。'
      ],
      quote: '吾名为丛雨，此刀的管理者。',
      quoteAuthor: '—— 丛雨'
    }
  ],
  abilities: [
    { icon: '🗡️', name: '神力', grade: 'EX', desc: '作为神刀之魂的灵力，<span class="highlight">能修复刀身、净化污秽</span>。' },
    { icon: '⚡', name: '元气', grade: 'S', desc: '五百年的孤独没磨掉她的活力，<span class="highlight-pink">这点比任何神力都难得</span>。' },
    { icon: '👻', name: '怕鬼', grade: 'F', desc: '嘴上说不怕，真遇到会<span class="highlight">唱歌壮胆</span>。' }
  ],
  relationships: [
    { icon: '🗡️', name: '有地将臣', type: '主人 / 恋人', desc: '拔出丛雨丸的人，<span class="highlight">也是唯一能碰到她的人</span>。', cls: 'rel-romance' },
    { icon: '⛩️', name: '朝武芳乃', type: '同伴', desc: '能看到她的人之一，<span class="highlight-pink">穗织的巫女</span>。', cls: 'rel-friend' },
    { icon: '🧹', name: '常陆茉子', type: '同伴', desc: '照顾她生活的人，<span class="highlight">像姐姐一样</span>。', cls: 'rel-friend' }
  ],
  placeholderEmoji: '🗡️',
  avatarSize: '145% auto',
  avatarBg: null,
  mainTabs: [
      { key: 'profile', icon: '📋', label: '角色资料' },
      { key: 'game', icon: '🎮', label: '相关游戏' },
      { key: 'gallery', icon: '🖼️', label: '图片画廊' },
      { key: 'abilities', icon: '⭐', label: '能力关系' }
  ],
  theme: {
    "heroBg": "linear-gradient(135deg, #0a0a14 0%, #0f2418 25%, #143322 50%, #193e29 75%, #0a0a14 100%)",
    "glow1": "#5fbf8a",
    "glow2": "#5fbcbf",
    "particleBg": "rgba(95,191,138,0.3)",
    "gridImage": "linear-gradient(rgba(95,191,138,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(95,191,138,0.05) 1px, transparent 1px)",
    "badgeBg": "linear-gradient(135deg, rgba(95,191,138,0.2), rgba(95,188,191,0.1))",
    "badgeBorder": "1px solid rgba(95,191,138,0.4)",
    "badgeColor": "#cae7d7",
    "badgeShadow": "0 2px 12px rgba(95,191,138,0.15)",
    "dotBg": "#5fbf8a",
    "nameGrad": "linear-gradient(135deg, #e7f4ec 0%, #8ccfaa 35%, #5fbf8a 65%, #cae7d7 100%)",
    "nameColor": "transparent",
    "nameSubColor": "#aadabf",
    "titleBadgeBg": "linear-gradient(135deg, rgba(95,191,138,0.2) 0%, rgba(95,188,191,0.12) 100%)",
    "titleBadgeBorder": "1px solid rgba(95,191,138,0.4)",
    "titleBadgeColor": "#cae7d7",
    "tagBg": "linear-gradient(135deg, rgba(95,191,138,0.12), rgba(95,191,138,0.06))",
    "tagBorder": "1px solid rgba(95,191,138,0.25)",
    "tagColor": "#aadabf",
    "ringGrad": "linear-gradient(135deg, #5fbf8a, #5fbcbf, #cae7d7, #5fbf8a) border-box",
    "avatarShadow": "0 0 60px rgba(95,191,138,0.4), 0 0 120px rgba(95,191,138,0.15)",
    "placeholderBg": "linear-gradient(180deg, #173a27 0%, #0d2116 50%, #0a0a14 100%)",
    "emojiShadow": "drop-shadow(0 0 30px rgba(95,191,138,0.5))",
    "videoPlayBg": "rgba(95,191,138,0.85)",
    "videoFallback": "linear-gradient(135deg, #112c1d, #1a422c)"
  },
  works: {
    anime: [],
    game: [
      {
        cover: null,
        label: '主要登场作品',
        title: '千恋＊万花',
        titleJp: '千恋＊万花',
        meta: [
          { icon: "🎮", label: "主要登场作品", value: "ゆずソフト" },
          { icon: "📅", label: "发售：", value: "2016年" },
          { icon: "🕹️", label: "类型：", value: "恋爱冒险" },
          { icon: "💻", label: "平台：", value: "PC" }
        ],
        desc: '以结缘闻名的温泉小镇穗织。一把断掉的神刀里，住着一个<span class="highlight">等了五百年的女孩</span>。',
        tags: [
          { cls: "dark", text: "和风" },
          { cls: "dark", text: "恋爱" },
          { cls: "dark", text: "奇幻" }
        ],
        action: null
      }
    ]
  },
  gallery: [
      { isImage: true, bg: img1, badge: '立绘', overlay: '丛雨 · 官方立绘' },
      { isImage: true, bg: img2, badge: '美图', overlay: '丛雨 · 美图 01' },
      { isImage: true, bg: img3, badge: '美图', overlay: '丛雨 · 美图 02' },
      { isImage: true, bg: img4, badge: '美图', overlay: '丛雨 · 美图 03' },
      { isImage: true, bg: img5, badge: '美图', overlay: '丛雨 · 美图 04' },
      { isImage: true, bg: img6, badge: '美图', overlay: '丛雨 · 美图 05' },
      { isImage: true, bg: img7, badge: '美图', overlay: '丛雨 · 美图 06' },
      { isImage: true, bg: img8, badge: '美图', overlay: '丛雨 · 美图 07' },
      { isImage: true, bg: img9, badge: '美图', overlay: '丛雨 · 美图 08' },
      { isImage: true, bg: img10, badge: '美图', overlay: '丛雨 · 美图 09' },
      { isImage: true, bg: img11, badge: '美图', overlay: '丛雨 · 美图 10' },
      { isImage: true, bg: img12, badge: '美图', overlay: '丛雨 · 美图 11' },
      { isImage: true, bg: img13, badge: '美图', overlay: '丛雨 · 美图 12' },
      { isImage: true, bg: img14, badge: '美图', overlay: '丛雨 · 美图 13' },
      { isImage: true, bg: img15, badge: '美图', overlay: '丛雨 · 美图 14' },
      { isImage: true, bg: img16, badge: '美图', overlay: '丛雨 · 美图 15' }
  ],
  videos: []
}
