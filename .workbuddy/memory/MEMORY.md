# 项目长期记忆 — YuanHuaWiki

## 架构演进

### 2026-11-05 整体 UI 大改：Editorial Archive 设计系统

**问题**：站内并存三套视觉语言 —— 首页「米白纸感 + 衬线 + 金棕」、详情页「深色蓝紫霓虹 + 白色圆角卡」、卡片「紫粉渐变光晕 + 3px 圆角」。风格割裂是"不好看"的真正原因，不是配色需微调。

**方案**：以首页已有基因（纸/墨/金/衬线）为基准，升级为一套完整设计系统，全站统一。

- **Token 层**（`src/styles/global.css` 重写，`:root`）：
  `--paper/-2/-3/-4` 纸面阶梯、`--ink/-2/-3/-4/-5` 墨字阶梯、`--rule/-2` 细线、`--gold/-gold-2/-gold-line/-gold-wash` 金棕、`--night/-2/-3/-night-ink` 深墨扉页、`--serif`(Georgia+Noto Serif SC) / `--sans`(Inter+Noto Sans SC)、`--ease`、`--page`。
  原则：**零圆角（标签除外）、极轻阴影、靠细线分层、正文靠留白**。
- **角色签名色**：`--acc-accent / -soft / -line` 只在 `src/styles/detail-enhancements.css` 按 `.xxx-page` 定义（12 个角色各一个饱和色）。**注意**：`CharacterDetailLayout` 的 `themeVars` 是 inline style，优先级高于样式表，所以它**不能生成 `--acc-accent`**，否则整页强调色被 theme 覆盖。
- **组件重写**：AppHeader（透明→纸面收窄 + 金色滚动进度线）、HeroSection（深墨扉页 + 装裱式立绘拼贴 + 竖排 caption）、CharacterCard（图版 + 下方著录信息，序号/作品名压在图上）、AppFooter（版权页，去 emoji 与彩虹渐变）、BackToTop（方角细线）、CharacterDetailLayout（扉页 + 著录表式 info + 细线 tab + 条目式能力/关系 + 左对齐书页正文）、GalleryLightbox（细线画框）、ToastContainer（深墨 + 左金线）、NotFound（巨号淡衬线 404）。
- **图版占位**：`gallery` 里 `isImage:false` 的项不再用数据里的橙粉渐变，改为纸面网格 + 细线方框打叉（档案缺图感）。
- **详情页 info** 从「浮起白卡」改成「细线著录表」（3 列，`nth-child(3n)` 控制边框与缩进），移动端降为 1 列。

**验证**：`npm run build` 通过（15 个异步 chunk）；用 headless Edge 逐页截图核对 —— 桌面 1440、平板 1024、移动 390，以及详情页 profile/相关作品/图版/评价/能力五个 tab。

### 2026-09-29 角色详情页重构

- **旧架构**：每个角色包含 `manifest.js` + `views/Detail.vue`（400-560 行，70% 复制粘贴），路由通过 `require.context` 自动扫描 manifest.js，存在专属路由与通用 `/character/:id` 双轨。
- **新架构**：
  - `packages/shared/components/CharacterDetailLayout`：统一模板与样式，主题色通过 `--acc-*` CSS 变量注入。
  - 角色包仅保留 `api/index.js`：原字段 + 新增 `theme` / `mainTabs` / `works` / `gallery` / `videos` / `avatarSize` / `avatarBg` / `placeholderEmoji`。
  - 路由统一为 `/character/:id`，`src/api/character.js` 中维护 `loadCharacter(id)` 映射表实现懒加载（每个角色独立 chunk）。
  - `src/pages/CharacterDetail.vue` 变为完整详情入口；新增 `src/pages/NotFound.vue`。
  - 删除 12 个 `manifest.js`、12 个 `views/Detail.vue`、`src/pages/detail-shared.css`，删除 router 的 `registerPackage`。

### 2026-09-30 消除角色数据双份 + 清理死代码

- **问题**：`src/api/character.js` 的列表数组与 `packages/<id>/api/index.js` 各存一份 `name/nameSub/series/image/tags`，已实际漂移 **9/12** 个角色（6 个角色卡片少第 5 个标签、nanami 第 4 个标签不同、sagiri/tomori 作品名不同）。漂移在 09-29 重构前就存在（重构只是把旧值抄了过去）。
- **新数据源约定**：
  - 新增 `packages/<id>/meta.js` —— 身份字段（`id/name/nameSub/series/seriesShort?/image/tags`）的**唯一来源**。
  - `src/api/character.js` 改为静态 import 12 个 meta 组成列表，不再存放任何角色字段；`hasDetail` 由 `loaders` 表**派生**（`hasCharacterData`）。
  - `packages/<id>/api/index.js` 顶部 `import meta from '../meta.js'`，`export default { ...meta, ... }`。
  - 删除死导出 `getCharacterById`。
- **`seriesShort`**：卡片用短作品名（`seriesShort || series`），详情页 hero 用 `series` 全名。仅 sagiri（`エロマンガ先生` → 卡片 `埃罗芒阿老师`）、tomori（`Charlotte | シャーロット` → 卡片 `Charlotte`）需要。
- **冲突取舍**：以角色包为准（较新、手工维护的那份），卡片因此修正 7 个角色的标签。
- **死代码清理**：`CharacterDetailLayout` 中 5 处无引用样式（`.info-card-icon.amber`、`.anime-cover-badge`、`.anime-tag.not-available`、`.btn-outline-sm`、`.video-duration`）、`CharacterCard` 与 `global.css` 的 `.card-hidden`、`vue.config.js` 的 `@assets` 别名（指向不存在的目录）。
  - 注意：`.anime-tag.live` **在用**（works 数据里 `cls: "live"` 出现 7 次），不可误删。
- **卡片立绘适配下沉到数据**：`CharacterCard` 原按 id 硬编码白底/缩放名单（模板与 script 各写一遍），现改为读 `cardBg` / `cardSize`。已填：kana/meguru/phrolova/soyo/tomori 有 `cardBg: '#fff'`；soyo/sagiri/rem `cardSize: '140% auto'`，phrolova `'150% 150%'`。
- **信息卡图标配色补全**：`CharacterDetailLayout` 原只有 `purple/pink/cyan/amber`，而数据用到 `red/orange/blue/gold`（11 处回落默认蓝）；已补 `.info-card-icon.blue/.red/.orange/.gold`，`.amber` 因无数据使用保持删除。原则：**只定义数据实际用到的取值**。
- 验证方式：`npm run build`（15 个异步 chunk，懒加载分包完好）+ 一份数据层断言脚本（把 `.jpg` 导入打桩后真实 import，校验 12 个角色的列表/详情字段一致、卡片适配字段与迁移前一致、布局所需结构齐全）。

## 已知坑（改样式前必看）

### 样式来源冲突（global.css 的 !important 覆盖层）— 2026-11-05 已全部清除
`src/styles/global.css` 曾长期被当作「覆盖层」，用 `!important` 压制组件样式，导致同一元素两份定义、取值不一致。2026-11-05 整体 UI 大改时**整个文件重写为设计系统基础层**，组件内重复定义同步删除，`!important` 归零。

| 位置 | 状态 | 说明 |
|------|------|------|
| 角色卡片（`CharacterCard`） | ✅ 已合并 | 原 28 条规则并入组件 |
| 返回顶部（`BackToTop`） | ✅ 已重写 | 改为方角细线按钮，样式只在组件内定义 |
| 详情页（`CharacterDetailLayout`） | ✅ 已重写 | `detail-enhancements.css` 从 18 处 `!important` 覆盖层缩到只剩「每角色强调色变量」 |
| `.empty-state` / `.footer` | ✅ 已重写 | 重复声明消除 |

**关键机制（本次实测确认）**：
- CSS `!important` 优先于行内 `style`，也优先于更高特异性的选择器。
- 没有 `!important` 的冲突：先比特异性，再比源码顺序。实测 **`index.css`（global）先加载，组件样式在懒加载 chunk 里后加载** → 同优先级时组件赢。
- 拿不准就**不要靠肉眼看**：用「级联求值器」脚本算出每条 `(media, selector, prop)` 的胜出值，改动前后对比，零差异才写回。

### 其他
- **无头浏览器截图有最小视口**：Edge/Chrome `--headless --window-size=390,844` 时**布局视口会被钳到约 500px**，截图却按 390 裁切 → 看起来"右侧卡片被截断/元素溢出"，实际 CSS 完全正常。390 真机效果要用「父页面内嵌 390px iframe + 截图父页面」验证（`public/debug.html` 临时方案，验完删除）。判断依据：在 iframe 里读 `innerWidth / scrollWidth / getBoundingClientRect`，比肉眼可靠。
- **仓库统一 CRLF**（`core.autocrlf=true`）。写脚本处理源文件时：读取后归一化为 `\n`，写出时还原 `\r\n`，否则 `git diff` 会出现整文件重写。
- **改文档里的 ASCII 框图**：按「原始行显示宽度」补空格（全角字符按 2 列），不要按改后文本自身宽度补，否则整块会缩掉。

## 卡片图片渲染的关键参数（改清晰度前必看）

- 卡片图片区实测 **284×379 CSS px**（`.container` 1280 − padding 48 = 1232，4 列 gap 22）。窗口 ≤1200px 变 3 列，卡片变大约 19%。
- 显示分两步：`.card-image-inner` 的内联 `backgroundImage` + `backgroundSize`（来自 `meta.js` 的 `cardSize`）+ `backgroundPosition: top center`。`cover` 按 `max(284/w, 379/h)` 缩放；`140% auto` 宽取 1.4×284；`150% 150%` 绘制 426×568.5。
- **`cardSize` 是提升"观感清晰度"的主要手段**：源图宽 ÷ dpr ÷ 284 就是安全上限，在上限内拉近不会变糊，只是把没用上的像素用起来。多数立绘构图是全身、人物偏小，拉近到 200~260% 观感改善明显。
- 12 张 `1.jpg` 的真实格式与扩展名不符：WebP = elaina/kana/phrolova，PNG = meguru/soyo，AVIF = hutao，其余 6 张才是真 JPEG。判断方法：读文件头魔数。
- 已知弱图：**kana**（源图被放大过，有效分辨率约为标注的一半 → 只能换图）、rem（560×880 仅 34KB）、yoshino（500×571）、meguru（PNG 734×2263）。

## 离线复现卡片渲染（不启浏览器）

用 Pillow 按上述 CSS 规则裁切+缩放即可精确模拟卡片实际观感，比截图更快更稳（agent-browser 会强制 `dpr=1` 且截图会冻结 CSS 动画导致卡片 `opacity:0` 全黑）。诊断产物放在 `.workbuddy/diagnostics/`。

**教训（重要）**：判断"图糊不糊"不能只看像素数、也不能只看锐度指标（边缘能量、降采样往返 RMSE 都会被画面内容和压缩噪点带偏）。**必须看 1:1 裁切图**，或者按显示尺寸离线复现后再看。

## 新增角色流程（2026-09-30 后）

1. 创建 `packages/<id>/meta.js`：`id/name/nameSub/series/image/tags`（+ 可选 `seriesShort`）。
2. 创建 `packages/<id>/api/index.js`：顶部 `import meta from '../meta.js'`，`export default { ...meta, nameJp, title, info, tabs, mainTabs, theme, works, gallery, videos, ... }`。
3. 准备图片到 `packages/<id>/images/`（1.jpg 为头像，a.jpg 为作品封面，sp1.jpg 起为视频封面，1-8.jpg 为画廊）。
4. 在 `src/api/character.js` 中：① import 该 meta；② `characters` 数组追加该 meta；③ `loaders` 表追加 `id: () => import('@packages/<id>/api/index.js')`。`hasDetail` 自动派生，无需手写。
5. （可选）在 `detail-enhancements.css` 添加 `.xxx-page` 的 `--detail-*` 变量增强覆盖。

## 环境约定

- Node 优先使用 managed 版本 `C:\Users\zrf\.workbuddy\binaries\node\versions\22.22.2-2\node.exe`。
- Python 优先使用 managed 版本 `3.13.12`。
- 构建产物位于 `dist/`（已被 `.gitignore` 忽略）。
- 当前 publicPath 固定为 `/YuanHuaWiki/`，适合 GitHub Pages 子目录部署。
