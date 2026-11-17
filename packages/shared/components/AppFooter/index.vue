<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <p class="footer-kicker">Personal archive</p>
          <h3>YuanHua<span>Wiki</span></h3>
          <p class="footer-desc">一个记录我喜欢的动漫、游戏角色的个人收藏站。<br>每个角色都曾在我心中留下独特的印记。</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>站内</h4>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/">角色档案</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>关于</h4>
            <ul>
              <li><a href="https://github.com/YuanHuaZ/YuanHuaWiki" target="_blank" rel="noopener">GitHub 仓库</a></li>
              <li><a href="https://yuanhuaz.github.io/YuanHuaWiki/" target="_blank" rel="noopener">在线访问</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>友链</h4>
            <ul>
              <li><a href="https://www.bilibili.com" target="_blank" rel="noopener">Bilibili</a></li>
              <li><a href="https://bgm.tv" target="_blank" rel="noopener">Bangumi</a></li>
              <li><a href="https://moegirl.uk" target="_blank" rel="noopener">萌娘百科</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 YuanHuaWiki</span>
        <span>个人角色收藏站 · 角色版权归原作所有</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'AppFooter' }
</script>

<style scoped>
.footer { background: #1b262e; color: #9aa5ad; padding: 72px 0 28px; position: relative; }
.footer::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, #c9a86a, transparent);
  background-size: 200% 100%; animation: goldSweep 7s linear infinite;
}
.footer-top { display: grid; grid-template-columns: 1.4fr 2fr; gap: 64px; padding-bottom: 52px; border-bottom: 1px solid rgba(245, 242, 234, 0.1); }
.footer-kicker { font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #c9a86a; margin-bottom: 14px; }
.footer-brand h3 {
  font-family: Georgia, 'Noto Serif SC', serif; font-size: 34px; font-weight: 400;
  color: #f5f2ea; letter-spacing: 0.01em; line-height: 1;
}
.footer-brand h3 span { color: #c9a86a; font-style: italic; }
.footer-desc { margin-top: 18px; font-size: 13.5px; line-height: 1.95; color: #8b969e; letter-spacing: 0.02em; }
.footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.footer-col h4 {
  font-family: Georgia, 'Noto Serif SC', serif; font-size: 13px; font-weight: 400;
  color: #e6ded0; margin-bottom: 16px; letter-spacing: 0.1em;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.footer-col a {
  position: relative; color: #8b969e; font-size: 13px; letter-spacing: 0.03em;
  transition: color 0.28s ease, padding-left 0.28s ease;
}
.footer-col a::before {
  content: ''; position: absolute; left: 0; top: 50%; width: 0; height: 1px;
  background: #c9a86a; transition: width 0.28s ease;
}
.footer-col a:hover { color: #f5f2ea; padding-left: 14px; }
.footer-col a:hover::before { width: 9px; }
.footer-bottom {
  display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  padding-top: 24px; font-size: 11.5px; letter-spacing: 0.08em; color: #6f7a82;
}
@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr; gap: 40px; padding-bottom: 36px; }
}
@media (max-width: 768px) {
  .footer { padding: 52px 0 22px; }
  .footer-brand h3 { font-size: 28px; }
  .footer-links { gap: 22px; }
  .footer-bottom { flex-direction: column; gap: 6px; }
}
</style>
