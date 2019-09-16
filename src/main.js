import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Mint UI 
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"

//Axios
import axios from "axios"
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8080/";
Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.use(MintUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
