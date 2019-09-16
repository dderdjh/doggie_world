<template>
  <div class="home">
    <h1>{{tit}}</h1>
    <button @click="change">嗯</button>
    
  </div>
</template>

<script>

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
    
  },
}
</script>
