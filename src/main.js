import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
// 请求拦截
axios.interceptors.request.use(config => {
    // console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    // 最后必须 return config
    return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

// 手动注册
Vue.component('tree-table', TreeTable)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
