<template>
    <div>
    <div class="navigator">
    <img src="../../assets/img/ic_navigator_nearyby.png" alt="">
    <img src="../../assets/img/ic_navigator_dog.png" alt="">
    <img src="../../assets/img/ic_navigator_cat.png" alt="">
    <img src="../../assets/img/ic_navigator_pet.png" alt="">
    <img src="../../assets/img/ic_navigator_mall.png" alt="">
  </div>
  <div class="navigator_1">
      <a href=""><img src="../../assets/img/ic_home_hot.png" alt=""
      style="width:80px;height:15px"></a>
    <a>蔚县鑫龙良犬养殖 特价阿拉斯加￥...</a>
    <a href="">更多&gt;</a>
  </div>
    </div>
</template>
<style scoped>
    .navigator{
    display: flex;
    justify-content: space-around;
  }
  .navigator img{
    width: 80px;
    height: 80px
  }
  .navigator_1{
      display: flex;
      justify-content: space-between;
      height: 50px;
      background: rgb(238, 233, 233);
      line-height: 50px;
  }
  .navigator_1 a{
      text-decoration: none;
  }
</style>