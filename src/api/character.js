/**
 * 角色 API — 当前使用静态数据，后续可接入后端
 *
 * 数据来源约定：
 *   - 身份信息（id / name / nameSub / series / seriesShort / image / tags）
 *     只在 packages/<id>/meta.js 维护一份，首页卡片与详情页共用
 *   - 详情内容（资料 / 作品 / 画廊 / 视频 / 主题色 / 评价）
 *     位于 packages/<id>/api/index.js，按 id 懒加载
 *   本文件不再重复存放任何角色字段，只负责「汇总卡片」与「登记详情加载器」
 */

import remMeta from '@packages/rem/meta.js'
import sagiriMeta from '@packages/sagiri/meta.js'
import ceciliaMeta from '@packages/cecilia/meta.js'
import komariMeta from '@packages/komari/meta.js'
import tsukikoMeta from '@packages/tsukiko/meta.js'
import toxicoMeta from '@packages/toxico/meta.js'
import keiMeta from '@packages/kei/meta.js'
import elainaMeta from '@packages/elaina/meta.js'
import yueMeta from '@packages/yue/meta.js'
import meguminMeta from '@packages/megumin/meta.js'
import kanaMeta from '@packages/kana/meta.js'
import itsukiMeta from '@packages/itsuki/meta.js'
import tomoriMeta from '@packages/tomori/meta.js'
import kotokoMeta from '@packages/kotoko/meta.js'
import kaorukoMeta from '@packages/kaoruko/meta.js'
import lilyMeta from '@packages/lily/meta.js'
import yoshinoMeta from '@packages/yoshino/meta.js'
import soyoMeta from '@packages/soyo/meta.js'
import ayaMeta from '@packages/aya/meta.js'
import rekeMeta from '@packages/reke/meta.js'
import prickettMeta from '@packages/prickett/meta.js'
import azusaMeta from '@packages/azusa/meta.js'
import anjuMeta from '@packages/anju/meta.js'
import miyuMeta from '@packages/miyu/meta.js'
import manakaMeta from '@packages/manaka/meta.js'
import ariharaMeta from '@packages/arihara/meta.js'
import lunaMeta from '@packages/luna/meta.js'
import faustMeta from '@packages/faust/meta.js'
import asumiMeta from '@packages/asumi/meta.js'
import nanamiMeta from '@packages/nanami/meta.js'
import celestiaMeta from '@packages/celestia/meta.js'
import tracyMeta from '@packages/tracy/meta.js'
import eyjafjallaMeta from '@packages/eyjafjalla/meta.js'
import linyuxiaMeta from '@packages/linyuxia/meta.js'
import duskMeta from '@packages/dusk/meta.js'
import phrolovaMeta from '@packages/phrolova/meta.js'
import emaMeta from '@packages/ema/meta.js'
import meguruMeta from '@packages/meguru/meta.js'
import hodMeta from '@packages/hod/meta.js'
import murasameMeta from '@packages/murasame/meta.js'
import noaMeta from '@packages/noa/meta.js'
import hellaMeta from '@packages/hella/meta.js'
import coquelicMeta from '@packages/coquelic/meta.js'
import millyMeta from '@packages/milly/meta.js'
import tsumugiMeta from '@packages/tsumugi/meta.js'
import kannaMeta from '@packages/kanna/meta.js'
import hutaoMeta from '@packages/hutao/meta.js'
import c37Meta from '@packages/37/meta.js'
import yingMeta from '@packages/ying/meta.js'
import graceMeta from '@packages/grace/meta.js'

/**
 * 角色详情数据懒加载表
 * 新增角色时：创建 packages/<id>/meta.js 与 api/index.js，并在下方登记一行
 */
const loaders = {
  rem: () => import('@packages/rem/api/index.js'),
  sagiri: () => import('@packages/sagiri/api/index.js'),
  cecilia: () => import('@packages/cecilia/api/index.js'),
  komari: () => import('@packages/komari/api/index.js'),
  tsukiko: () => import('@packages/tsukiko/api/index.js'),
  toxico: () => import('@packages/toxico/api/index.js'),
  kei: () => import('@packages/kei/api/index.js'),
  elaina: () => import('@packages/elaina/api/index.js'),
  yue: () => import('@packages/yue/api/index.js'),
  megumin: () => import('@packages/megumin/api/index.js'),
  kana: () => import('@packages/kana/api/index.js'),
  itsuki: () => import('@packages/itsuki/api/index.js'),
  tomori: () => import('@packages/tomori/api/index.js'),
  kotoko: () => import('@packages/kotoko/api/index.js'),
  kaoruko: () => import('@packages/kaoruko/api/index.js'),
  lily: () => import('@packages/lily/api/index.js'),
  yoshino: () => import('@packages/yoshino/api/index.js'),
  soyo: () => import('@packages/soyo/api/index.js'),
  aya: () => import('@packages/aya/api/index.js'),
  reke: () => import('@packages/reke/api/index.js'),
  prickett: () => import('@packages/prickett/api/index.js'),
  azusa: () => import('@packages/azusa/api/index.js'),
  anju: () => import('@packages/anju/api/index.js'),
  miyu: () => import('@packages/miyu/api/index.js'),
  manaka: () => import('@packages/manaka/api/index.js'),
  arihara: () => import('@packages/arihara/api/index.js'),
  luna: () => import('@packages/luna/api/index.js'),
  faust: () => import('@packages/faust/api/index.js'),
  asumi: () => import('@packages/asumi/api/index.js'),
  nanami: () => import('@packages/nanami/api/index.js'),
  celestia: () => import('@packages/celestia/api/index.js'),
  tracy: () => import('@packages/tracy/api/index.js'),
  eyjafjalla: () => import('@packages/eyjafjalla/api/index.js'),
  linyuxia: () => import('@packages/linyuxia/api/index.js'),
  dusk: () => import('@packages/dusk/api/index.js'),
  phrolova: () => import('@packages/phrolova/api/index.js'),
  ema: () => import('@packages/ema/api/index.js'),
  meguru: () => import('@packages/meguru/api/index.js'),
  hod: () => import('@packages/hod/api/index.js'),
  murasame: () => import('@packages/murasame/api/index.js'),
  noa: () => import('@packages/noa/api/index.js'),
  hella: () => import('@packages/hella/api/index.js'),
  coquelic: () => import('@packages/coquelic/api/index.js'),
  milly: () => import('@packages/milly/api/index.js'),
  tsumugi: () => import('@packages/tsumugi/api/index.js'),
  kanna: () => import('@packages/kanna/api/index.js'),
  hutao: () => import('@packages/hutao/api/index.js'),
  37: () => import('@packages/37/api/index.js'),
  ying: () => import('@packages/ying/api/index.js'),
  grace: () => import('@packages/grace/api/index.js')
}

/** 该角色是否已接入详情数据包 */
export function hasCharacterData(id) {
  return Object.prototype.hasOwnProperty.call(loaders, id)
}

/** 首页列表：直接引用各角色包的 meta，hasDetail 由懒加载表派生，不手工维护 */
const characters = [
  remMeta,
  sagiriMeta,
  ceciliaMeta,
  komariMeta,
  tsukikoMeta,
  toxicoMeta,
  keiMeta,
  elainaMeta,
  yueMeta,
  meguminMeta,
  kanaMeta,
  itsukiMeta,
  tomoriMeta,
  kotokoMeta,
  kaorukoMeta,
  lilyMeta,
  yoshinoMeta,
  soyoMeta,
  ayaMeta,
  rekeMeta,
  prickettMeta,
  azusaMeta,
  anjuMeta,
  miyuMeta,
  manakaMeta,
  ariharaMeta,
  lunaMeta,
  faustMeta,
  asumiMeta,
  nanamiMeta,
  celestiaMeta,
  tracyMeta,
  eyjafjallaMeta,
  linyuxiaMeta,
  duskMeta,
  phrolovaMeta,
  emaMeta,
  meguruMeta,
  hodMeta,
  murasameMeta,
  noaMeta,
  hellaMeta,
  coquelicMeta,
  millyMeta,
  tsumugiMeta,
  kannaMeta,
  hutaoMeta,
  c37Meta,
  yingMeta,
  graceMeta
].map(meta => ({ ...meta, hasDetail: hasCharacterData(meta.id) }))

export function getCharacterList() {
  return characters
}

/** 加载某个角色的完整详情数据；不存在或失败时返回 null */
export async function loadCharacter(id) {
  const loader = loaders[id]
  if (!loader) return null
  try {
    const mod = await loader()
    return mod.default || mod
  } catch (err) {
    console.error(`[YuanHuaWiki] 加载角色数据失败: ${id}`, err)
    return null
  }
}
