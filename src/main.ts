import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import ant from 'ant-design-vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(ant).use(store).use(router).mount('#app')
