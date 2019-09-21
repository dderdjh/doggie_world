<template>
  <div>
    <div class="title1"><h4>活跃商家</h4></div>
    <div class="container">
    <div class="container1">
            <img src="../../assets/img/ic_error.png" alt="" class="profile-img">
         <span class="storeName">广宠旗舰店纯种宠物名猫俱乐部</span>
    </div>
    <div class="container1">
            <img src="../../assets/img/ic_error.png" alt="" class="profile-img">
         <span class="storeName">广宠旗舰店纯种宠物名猫俱乐部</span>
    </div>
    <div class="container1">
            <img src="../../assets/img/ic_error.png" alt="" class="profile-img">
         <span class="storeName">广宠旗舰店纯种宠物名猫俱乐部</span>
    </div>
    <div class="container1">
            <img src="../../assets/img/ic_error.png" alt="" class="profile-img">
         <span class="storeName">广宠旗舰店纯种宠物名猫俱乐部</span>
    </div>
    <div class="container1">
            <img src="../../assets/img/ic_error.png" alt="" class="profile-img">
         <span class="storeName">广宠旗舰店纯种宠物名猫俱乐部</span>
    </div>
    </div>
    <div class="title1"><h4>信用优选商家</h4></div>
    <div class="products">
      <img class="profile-img" src="../../assets/img/ic_error.png" alt="">
      <div>
        <span>精品萌宠30天售后保障犬舍支持担保交易</span>
        <span>广东广州天河区天河</span>
        <span>在售244只 担保交易68只</span>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
    .title1{
        clear: both;
        border-bottom: 1px solid #dddddd;
    }
    .title1 h4{
        color: #666;
        line-height:20px;
    }
    .container{
      display: flex;
      justify-content: space-around;
      border-bottom: 3px solid #dddddd;
    }
    .container1{
        width: 80px;
        height: 80px;
        text-align: center;
    }
    .storeName{
       display: block; 
       width: 80px;
       font-size:12px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       
    }
    .profile-img{
        clear: both;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        background: pink;
        margin-top: 10px;
        
    }
    .products{
      display: flex;
      font-size: 12px; 
    }
     .products span{
       display: block;
       margin-top: 8px;
     }
</style>