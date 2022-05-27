import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/global.css'
import {router} from "@/route";
import {Avatar} from "@element-plus/icons-vue";
import {ShoppingCart} from "@element-plus/icons-vue";

const app = createApp(App)
app.use(router)
// eslint-disable-next-line vue/multi-word-component-names
app.component("Avatar",Avatar)
app.component("ShoppingCart",ShoppingCart)
app.use(ElementPlus)
app.mount('#app')
export default app
