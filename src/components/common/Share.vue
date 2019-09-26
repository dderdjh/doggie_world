<template>
  <div class="navibar">
      <img src="../../assets/img/ic_home_hot.png" alt=""
      style="width:80px;height:15px">
    <div class="navibar_box">
      <div class="navibar_list" :class="{navibar_top:animate}">
        <p v-for="(item,index) in navibarList">{{item.name}}</p>
      </div>
    </div>
    <a class="loadmore" href="">更多&gt;</a>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      animate: false,

      navibarList: [
        { name: "蔚县鑫龙良犬养殖 特价阿拉斯加￥1999"},
        { name: "遇见猫公馆 特价英国短毛猫￥1099"},
        { name: "西安壹三零九猫舍 特价龙猫￥1999"},
        {name: "九九六良犬养殖 癞皮狗￥2000"}
      ]
    };
  },
  created: function() {
    // 页面显示
    setInterval(this.showNavibar, 3000);
  },
  methods: {
    showNavibar: function() {
      this.animate = true;
      setTimeout(() => {
        this.navibarList.push(this.navibarList[0]);
        this.navibarList.shift();
        this.animate = false;
      }, 500);
    }
  }
};
</script>
<style scoped>
.navibar {
  width: 100%;
  height: 50px;
  align-items: center;
  color: black;
  display: flex;
  box-sizing: border-box;
}
.navibar_box {
  width:65%;
  height: 30px;
  overflow: hidden; 
  
}
.navibar_list p{
    font-size:12px;
    margin-top:10px;
}
.loadmore{
    text-decoration: none;color: black;
}
.navibar_top {
  transition: all 1s;
  margin-top: -30px;
}
</style>
