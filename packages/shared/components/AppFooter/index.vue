<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>🎮 YuanHuaWiki</h3>
          <p>一个记录我喜欢的动漫、游戏角色的个人收藏站。<br>每个角色都曾在我心中留下独特的印记 ✨</p>
        </div>
        <div class="footer-col">
          <h4>快速链接</h4>
          <ul>
            <li><router-link to="/">🏠 首页</router-link></li>
            <li><router-link to="/">📋 角色列表</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>关于本站</h4>
          <ul>
            <li><a href="https://github.com/YuanHuaZ/YuanHuaWiki" target="_blank">📦 GitHub 仓库</a></li>
            <li><a href="https://yuanhuaz.github.io/YuanHuaWiki/" target="_blank">🌐 在线访问</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>友情链接</h4>
          <ul>
            <li><a href="https://www.bilibili.com" target="_blank">📺 Bilibili</a></li>
            <li><a href="https://bgm.tv" target="_blank">📚 Bangumi</a></li>
            <li><a href="https://moegirl.uk" target="_blank">📖 萌娘百科</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 YuanHuaWiki. 个人角色收藏站，角色版权归原作所有。</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'AppFooter' }
</script>

<style>
.footer {
  background: #0f172a;
  color: #94a3b8;
  padding: 64px 0 32px;
  border-top: 3px solid;
  border-image: linear-gradient(90deg, #a855f7, #ec4899, #06b6d4) 1;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}
.footer-brand h3 {
  font-size: 22px;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}
.footer-brand p { font-size: 14px; line-height: 1.8; color: #94a3b8; }
.footer-col h4 {
  font-size: 13px;
  font-weight: 700;
  color: #cbd5e1;
  margin-bottom: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-col a { color: #64748b; font-size: 14px; transition: all 0.2s; }
.footer-col a:hover { color: #c084fc; padding-left: 2px; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 24px;
  text-align: center;
  font-size: 13px;
  color: #475569;
  letter-spacing: 0.02em;
}
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .footer { padding: 48px 0 24px; }
}
@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
