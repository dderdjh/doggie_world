import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入第三方组件库mint-ui
import MintUI from "mint-ui"
//引入min-ui样式文件
import "mint-ui/lib/style.css"
// 将mint-ui注册vue
Vue.use(MintUI)
//引入axios库
import axios from "axios"
// 配置请求时保存session信息
axios.defaults.withCredentials=true;
//配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
//注册
Vue.prototype.axios=axios;
//引入第三方模块
import Vuex from "vuex";
// 注册实例
Vue.use(Vuex)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
