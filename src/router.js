import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


//############组件临时测试区##############
import Swipe from "./components/Swipe.vue"
//#######################################
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/Swipe",
      name: "swipe",
      component: Swipe
    }
    
  ]
})
