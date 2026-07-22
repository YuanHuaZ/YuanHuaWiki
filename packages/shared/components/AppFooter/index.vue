<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>🎮 YuanHuaWiki</h3>
          <p>记录我喜欢的动漫角色。<br>每个角色都有属于自己的故事。</p>
        </div>
        <div class="footer-col">
          <h4>快速链接</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/">角色列表</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>帮助中心</h4>
          <ul>
            <li><a href="#">使用条款</a></li>
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">联系方式</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>友情链接</h4>
          <ul>
            <li><a href="#">ACG社区</a></li>
            <li><a href="#">Bilibili番剧</a></li>
            <li><a href="#">同人创作站</a></li>
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
  padding: 60px 0 32px;
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
  font-size: 20px;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 8px;
}
.footer-brand p { font-size: 14px; line-height: 1.7; }
.footer-col h4 {
  font-size: 14px;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 16px;
  letter-spacing: 1px;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-col a { color: #64748b; font-size: 14px; transition: color 0.2s; }
.footer-col a:hover { color: #a855f7; }
.footer-bottom {
  border-top: 1px solid #1e293b;
  padding-top: 24px;
  text-align: center;
  font-size: 13px;
  color: #475569;
}
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
}
@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
