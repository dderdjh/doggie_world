<template>
  <div>
    <search></search>
    <swipe></swipe>
    <navigator></navigator>
  </div>
</template>
<script>
import Search from "./common/Search.vue"
import Navigator from "./common/Navigator.vue"
import Swipe from "./Swipe.vue"
export default {
  components:{
    search:Search,
    swipe:Swipe,
    navigator:Navigator
  }
}
</script>