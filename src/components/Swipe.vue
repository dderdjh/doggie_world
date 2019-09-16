<template>
  <div class="swipeWrap">
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="../assets/img/ease_chat_face_normal.png" >
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/__picker_ic_photo_black_48dp.png" >
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/ic_buy_notice.png" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style scoped>
  .swipeWrap{
    width: 100%;
    height:200px;
  }
</style>