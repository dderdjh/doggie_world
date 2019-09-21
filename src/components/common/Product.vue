<template>
  <div>
    <div class="title1"><h4>活跃商家</h4></div>
    <div class="container1">
        <div class="profile-img">
            <img src="../../assets/img/ic_error.png" alt="" style="width:50px;">
        </div>
         <span class="storeName">广宠旗舰店纯种宠物名猫俱乐部</span>
    </div>
    <div class="navigator_1">
      <a href>
        <img src="../../assets/img/ic_home_hot.png" alt style="width:80px;height:15px" />
      </a>
      <a>蔚县鑫龙良犬养殖 特价阿拉斯加￥...</a>
      <a href>更多&gt;</a>
    </div>
  </div>
</template>
<style scoped>
    .title1{
        clear: both;
        border-bottom: 1px solid #cccccc;
    }
    .title1 h4{
        color: #666;
        line-height:20px;
    }
    .container1{
        width: 80px;
        height: 80px;
        
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
    .navigator_1{
      display: flex;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
  }
  .navigator_1 a{
      text-decoration: none;
  }
</style>