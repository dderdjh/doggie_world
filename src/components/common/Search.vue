<template>
  <div>
  <div class="container">
    <img src="../../assets/img/ic_mycoin.png" style="width:41px;height:41px">
    <input type="text" placeholder="搜索宠物、商家、品牌" class="search" >
    <img src="../../assets/img/detail_share.png" alt="" style="width:41px;height:41px">
  </div>
  </div>
</template>
<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
    padding-top:7px;
  }
  .search{
    width:70%;
    border-radius: 25px;
    border:0px;
    background:url(../../assets/img/ic_search.png) 20px rgba(211, 217, 224, 0.4) no-repeat;
    text-indent:80px;
  }
</style>