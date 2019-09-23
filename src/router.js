import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Search from "./components/common/Search.vue"
import Navigator from "./components/common/Navigator.vue"
import FooterBar from "./components/common/FooterBar.vue"
import Mine from "./components/common/Mine.vue"
import Store from "./components/common/Store.vue"
import Product from "./components/common/Product.vue"
import Rate from "./components/common/Rate.vue"


//############组件临时测试区##############
import Swipe from "./components/Swipe.vue"
//#######################################
Vue.use(Router)
export default new Router({
  routes: [
    {path:`/Search`,component:Search},
    {path:`/Navigator`,component:Navigator},
    {path:`/FooterBar`,component:FooterBar},
    {path:`/Mine`,component:Mine},
    {path:`/Store`,component:Store},
    {path:`/product`,component:Product},
    {path:`/Rate`,component:Rate},
    {
      path: '/',
      name: 'home',
      component: Home
    },
	  {
      path:"/Login",
      name:'login',
      component:Login
    },
    {
      path: "/Swipe",
      name: "swipe",
      component: Swipe
    }
    
  ]
})
