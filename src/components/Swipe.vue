<template>
  <div class="swipeWrap">
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="../assets/img/banner1.png" >
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner2.png" >
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner3.png" >
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner4.png" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style scoped>
  .swipeWrap{
    width: 100%;
    height:179px;
  }
  .swipeWrap img{
    width:100%;
    height:200px;
  }
</style>