import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
import Login from './views/Login.vue'
=======
import Search from "./components/common/Search.vue"
import Navigator from "./components/common/Navigator.vue"
import FooterBar from "./components/common/FooterBar.vue"
import Mine from "./components/common/Mine.vue"
>>>>>>> e22943ea92ea0687d025443260e533c0e5ccb82e


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
    {
      path: '/',
      name: 'home',
      component: Home
    },
<<<<<<< HEAD
	{path:"/Login",component:Login},
=======
    {
      path: "/Swipe",
      name: "swipe",
      component: Swipe
    }
>>>>>>> e22943ea92ea0687d025443260e533c0e5ccb82e
    
  ]
})
