<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-lead">
        <p class="footer-kicker">End of Volume</p>
        <h2 class="footer-title">每一页，<br><em>都是一次重新相遇。</em></h2>
      </div>

      <div class="footer-grid">
        <div class="footer-brand">
          <h3>YuanHua<em>Wiki</em></h3>
          <p>一个记录我喜欢的动漫、游戏角色的个人收藏站。每个角色都曾在这里留下独特的印记。</p>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/">角色列表</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Archive</h4>
          <ul>
            <li><a href="https://github.com/YuanHuaZ/YuanHuaWiki" target="_blank" rel="noopener">GitHub 仓库</a></li>
            <li><a href="https://yuanhuaz.github.io/YuanHuaWiki/" target="_blank" rel="noopener">在线访问</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Elsewhere</h4>
          <ul>
            <li><a href="https://www.bilibili.com" target="_blank" rel="noopener">Bilibili</a></li>
            <li><a href="https://bgm.tv" target="_blank" rel="noopener">Bangumi</a></li>
            <li><a href="https://moegirl.uk" target="_blank" rel="noopener">萌娘百科</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 YuanHuaWiki — 个人角色收藏站，角色版权归原作所有。</p>
        <span class="footer-mark">Y</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'AppFooter' }
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--night);
  color: rgba(244, 239, 228, .58);
  padding: 88px 0 32px;
  border-top: 1px solid var(--rule-2);
  overflow: hidden;
}
/* 顶部金色细线 */
.footer::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-line) 20%, var(--gold-line) 80%, transparent);
  opacity: .55;
}
/* 极淡的纸纹 */
.footer::after {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.02) 0 1px, transparent 1px 4px);
}

.footer .container { position: relative; z-index: 1; }

/* ---------- 大标语 ---------- */
.footer-lead {
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(244, 239, 228, .1);
  margin-bottom: 56px;
}
.footer-kicker {
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .26em; text-transform: uppercase;
  color: var(--gold-line);
  margin-bottom: 20px;
}
.footer-title {
  font-family: var(--serif);
  font-size: clamp(26px, 3.6vw, 44px);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: .01em;
  color: #f7f3ea;
}
.footer-title em { font-style: italic; color: var(--gold-line); }

/* ---------- 四列 ---------- */
.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 64px;
}

.footer-brand h3 {
  font-family: var(--serif);
  font-size: 22px; font-weight: 400;
  color: #f7f3ea;
  margin-bottom: 14px;
  letter-spacing: .01em;
}
.footer-brand h3 em { font-style: italic; color: var(--gold-line); }
.footer-brand p {
  max-width: 300px;
  font-size: 13px; line-height: 1.95;
  color: rgba(244, 239, 228, .46);
}

.footer-col h4 {
  font-size: 9.5px; font-weight: 700;
  letter-spacing: .22em; text-transform: uppercase;
  color: rgba(244, 239, 228, .34);
  margin-bottom: 18px;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.footer-col a {
  position: relative;
  display: inline-block;
  font-size: 13px;
  color: rgba(244, 239, 228, .72);
  transition: color .3s var(--ease), padding-left .3s var(--ease);
}
.footer-col a::before {
  content: '';
  position: absolute; left: 0; top: 50%; width: 0; height: 1px;
  background: var(--gold-line);
  transition: width .3s var(--ease);
}
.footer-col a:hover { color: var(--gold-line); padding-left: 16px; }
.footer-col a:hover::before { width: 10px; }

/* ---------- 版权条 ---------- */
.footer-bottom {
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  padding-top: 26px;
  border-top: 1px solid rgba(244, 239, 228, .1);
}
.footer-bottom p {
  font-size: 11.5px; letter-spacing: .04em;
  color: rgba(244, 239, 228, .3);
}
.footer-mark {
  display: flex; align-items: center; justify-content: center;
  width: 30px; height: 30px; flex-shrink: 0;
  border: 1px solid rgba(200, 168, 106, .3);
  font-family: var(--serif); font-size: 14px;
  color: var(--gold-line);
}

/* ---------- 响应式 ---------- */
@media (max-width: 900px) {
  .footer { padding: 64px 0 28px; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px 28px; margin-bottom: 44px; }
  .footer-lead { padding-bottom: 36px; margin-bottom: 36px; }
}
@media (max-width: 560px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px 20px; }
  .footer-brand { grid-column: 1 / -1; }
  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 14px; }
}
</style>
