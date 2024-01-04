import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import axios from 'axios'
import * as Vue from 'vue'
// declare const require: any
// @ts-expect-error: store use js
import store from './store'

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
