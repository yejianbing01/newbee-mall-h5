import 'vant/lib/index.css'
import '@/style/base.scss'
import '@/style/theme.scss'

import 'lib-flexible/flexible'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
