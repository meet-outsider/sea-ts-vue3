import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import './permissions'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from "axios";
import svgIcon from './components/SvgIcon.vue'
import 'virtual:svg-icons-register'
import {pinia} from "@/pinia";
import 'element-plus/theme-chalk/src/message.scss'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.component('svg-icon', svgIcon)

app.use(router)
app.use(pinia)
app.config.globalProperties.$axios = axios;

app.mount('#app')
