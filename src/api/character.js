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

import meguruMeta from '@packages/meguru/meta.js'
import phrolovaMeta from '@packages/phrolova/meta.js'
import nanamiMeta from '@packages/nanami/meta.js'
import soyoMeta from '@packages/soyo/meta.js'
import sagiriMeta from '@packages/sagiri/meta.js'
import remMeta from '@packages/rem/meta.js'
import kanaMeta from '@packages/kana/meta.js'
import hutaoMeta from '@packages/hutao/meta.js'
import elainaMeta from '@packages/elaina/meta.js'
import tomoriMeta from '@packages/tomori/meta.js'
import komariMeta from '@packages/komari/meta.js'
import yoshinoMeta from '@packages/yoshino/meta.js'

/**
 * 角色详情数据懒加载表
 * 新增角色时：创建 packages/<id>/meta.js 与 api/index.js，并在下方登记一行
 */
const loaders = {
  meguru: () => import('@packages/meguru/api/index.js'),
  phrolova: () => import('@packages/phrolova/api/index.js'),
  nanami: () => import('@packages/nanami/api/index.js'),
  soyo: () => import('@packages/soyo/api/index.js'),
  sagiri: () => import('@packages/sagiri/api/index.js'),
  rem: () => import('@packages/rem/api/index.js'),
  kana: () => import('@packages/kana/api/index.js'),
  hutao: () => import('@packages/hutao/api/index.js'),
  elaina: () => import('@packages/elaina/api/index.js'),
  tomori: () => import('@packages/tomori/api/index.js'),
  komari: () => import('@packages/komari/api/index.js'),
  yoshino: () => import('@packages/yoshino/api/index.js')
}

/** 该角色是否已接入详情数据包 */
export function hasCharacterData(id) {
  return Object.prototype.hasOwnProperty.call(loaders, id)
}

/** 首页列表：直接引用各角色包的 meta，hasDetail 由懒加载表派生，不手工维护 */
const characters = [
  meguruMeta,
  phrolovaMeta,
  nanamiMeta,
  soyoMeta,
  sagiriMeta,
  remMeta,
  kanaMeta,
  hutaoMeta,
  elainaMeta,
  tomoriMeta,
  komariMeta,
  yoshinoMeta
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
