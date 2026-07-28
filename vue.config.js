const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/YuanHuaWiki/',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
        '@packages': require('path').resolve(__dirname, 'packages'),
        '@assets': require('path').resolve(__dirname, 'assets')
      }
    }
  }
})
