import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import baseURL from "@/common/config";
App.config.globalProperties.$axios = axios
axios.defaults.baseURL = baseURL
createApp(App).mount('#app')
