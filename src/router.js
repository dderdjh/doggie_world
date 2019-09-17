import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from "./components/common/Search.vue"
import Navigator from "./components/common/Navigator.vue"
import FooterBar from "./components/common/FooterBar.vue"


//############组件临时测试区##############
import Swipe from "./components/Swipe.vue"
//#######################################
Vue.use(Router)
export default new Router({
  routes: [
    {path:`/Search`,component:Search},
    {path:`/Navigator`,component:Navigator},
    {path:`/FooterBar`,component:FooterBar},
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
