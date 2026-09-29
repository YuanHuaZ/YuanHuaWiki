# 项目长期记忆 — YuanHuaWiki

## 架构演进

### 2026-09-29 角色详情页重构

- **旧架构**：每个角色包含 `manifest.js` + `views/Detail.vue`（400-560 行，70% 复制粘贴），路由通过 `require.context` 自动扫描 manifest.js，存在专属路由与通用 `/character/:id` 双轨。
- **新架构**：
  - `packages/shared/components/CharacterDetailLayout`：统一模板与样式，主题色通过 `--acc-*` CSS 变量注入。
  - 角色包仅保留 `api/index.js`：原字段 + 新增 `theme` / `mainTabs` / `works` / `gallery` / `videos` / `avatarSize` / `avatarBg` / `placeholderEmoji`。
  - 路由统一为 `/character/:id`，`src/api/character.js` 中维护 `loadCharacter(id)` 映射表实现懒加载（每个角色独立 chunk）。
  - `src/pages/CharacterDetail.vue` 变为完整详情入口；新增 `src/pages/NotFound.vue`。
  - 删除 12 个 `manifest.js`、12 个 `views/Detail.vue`、`src/pages/detail-shared.css`，删除 router 的 `registerPackage`。

## 新增角色流程（重构后）

1. 创建 `packages/<id>/api/index.js`（字段参考现有包）。
2. 准备图片到 `packages/<id>/images/`（1.jpg 为头像，a.jpg 为作品封面，sp1.jpg 起为视频封面，1-8.jpg 为画廊）。
3. 在 `src/api/character.js` 的 `loaders` 表中添加 `id: () => import('@packages/<id>/api/index.js')`。
4. 在 `src/api/character.js` 的列表数组中添加摘要（id/name/nameSub/series/image/tags）。
5. （可选）在 `detail-enhancements.css` 添加 `.xxx-page` 的 `--detail-*` 变量增强覆盖。

## 环境约定

- Node 优先使用 managed 版本 `C:\Users\zrf\.workbuddy\binaries\node\versions\22.22.2-2\node.exe`。
- Python 优先使用 managed 版本 `3.13.12`。
- 构建产物位于 `dist/`（已被 `.gitignore` 忽略）。
- 当前 publicPath 固定为 `/YuanHuaWiki/`，适合 GitHub Pages 子目录部署。
