<template>
  <div class="home">
 <search></search>
 <swipe></swipe>
 <navigator></navigator>
 <footerBar></footerBar>

    
  </div>
</template>

<script>
import Search from '../components/common/Search.vue'
import Swipe from '../components/Swipe.vue'
import Navigator from '../components/common/Navigator.vue'
import FooterBar from '../components/common/FooterBar.vue'
export default {
  data(){
    return{
      tit: "狗子世界",
    }
  },
  
  methods:{
    change(){
      this.tit = "没时间解释了,啊啊啊啊啊"
    }
  },
  components: {
    "search":Search,
    "swipe":Swipe,
    "navigator":Navigator,
    "footerBar":FooterBar,
  },
}
</script>
