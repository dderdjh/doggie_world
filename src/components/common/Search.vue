<template>
  <div>
  <div class="container">
    <img src="../../assets/img/ic_mycoin.png" style="width:41px;height:41px">
    <input type="text" placeholder="搜索宠物、商家、品牌" class="search" >
    <div @click="showVuePopup(true)">
      <img src="../../assets/img/detail_share.png" alt="" style="width:41px;height:41px">
    </div>
    <div class="vue-popup">
      <div class="mask" v-show="show" @click="showVuePopup()"></div>
      <transition name="slide">
        <div class="popup-content" v-show="show">
          <div class="share" >
          <p style="font-size:20px"><strong>选择分享方式</strong></p>
        <div class="sharing_container">
            <div class="container_style">
                <div class="b_circle"><img src="../../assets/img/umeng_socialize_wechat.png" alt="">
                </div>
                <p>微信好友</p>
            </div>
            <div class="container_style">
                 <div class="b_circle">
                     <img src="../../assets/img/umeng_socialize_wxcircle.png" alt="">
                 </div>
                <p>微信朋友圈</p>
            </div>
            <div class="container_style">
                 <div class="b_circle">
                     <img src="../../assets/img/umeng_socialize_qq.png" alt="">
                 </div>
                <p>QQ</p>
            </div>
            <div class="container_style">
                <div class="b_circle">
                    <img src="../../assets/img/umeng_socialize_fav.png" alt="">
                    </div>
                <p>生成海报</p>
            </div>
          </div> 
    </div>
        </div>
      </transition>

      </div>
    </div>
  </div>
</template>
<script>
export default {
   name: 'Fixed',
    data() {
        return {
            show: false
        }
    },
    methods: {
        showVuePopup(flag) {
            this.show = flag
        }
    }
}
</script>
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
  /* 弹出框内容样式 */
    .share{
      width: 100%;
      position: fixed;
      z-index:10000;
      background-color: white;
      
  }
   p{
       text-align: center;
       font-size: 15px;

   } 
   .sharing_container{
       display: flex;
       justify-content: space-between;
       
   }
   .container_style{
       width: 25%;
       text-align: center;  
   }
   .container_style p{
       margin-left: 4px;
   }
   .b_circle{
       width: 50px;
       height: 50px;
       border-radius: 50%;
       border:1px solid #cccccc;
       margin-left:25px   
   }
   .container_style img{
       width: 80%;
       margin-top: 5px;
   }
  /* transition样式 */
.vue-popup .popup-content {
  position: absolute;
  height:150px;
  bottom:0;
  left: 0;
  width: 100%;
  background-color: white;
  -webkit-transition: all 0.02s ease-in;
  transition: all 0.02s ease-in;
  
}
.mask {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.02s ease-in;
}
</style>