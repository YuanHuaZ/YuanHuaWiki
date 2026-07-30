import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'
import './styles/detail-enhancements.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
