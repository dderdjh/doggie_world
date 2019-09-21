<template>
  <div>
    <h2>消息</h2>
    <div class="msg_list" v-for="(item,index) of mags" :key="index">
      <img :src="item.img_src">
      <div>
         <p>{{item.msg_inform}}</p>
         <p>{{item.msg_details}}</p>
      </div>
      <p>{{item.msg_timer}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      mags:[
        {
          img_src:require("../assets/img/ic_chat_notice.png"),
          msg_inform:"平台通知",
          msg_details:"2018年修订版用户手册",
          msg_timer:"刚刚"
        },
        {
          img_src:require("../assets/img/ic_chat_notice.png"),
          msg_inform:"求购通知",
          msg_details:"柴犬",
          msg_timer:"刚刚"
        },
        {
          img_src:require("../assets/img/ic_error.png"),
          msg_inform:"宠物官方市场",
          msg_details:"购宠售宠问题就问小助手",
          msg_timer:"刚刚"
        },
        {
          img_src:require("../assets/img/ic_error.png"),
          msg_inform:"养宠顾问",
          msg_details:"养宠用品问题就问小顾问",
          msg_timer:"刚刚"
        }     
      ]
    }
  }
}
</script>
<style scoped>
  h2{
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: 900;
  }
  .msg_list{
    display: flex;
    width:100%;
    height: 3.5rem;
    margin-bottom: 1.1rem;
    padding: 0;
  }

  .msg_list>img {
    width: 3.4rem;
    height: 3.4rem;
    border-radius:50%; 
    margin-left:0.7rem; 
 
  }
  .msg_list>div {
    margin-left: 1.1rem;
       width: 68%
  }
  .msg_list>div p{
    margin-top: 0.4rem;
    margin-bottom: 0.6rem; 
    font-size: 1.1rem;
    overflow: hidden;
  }
  .msg_list>div p+p{
    font-size: 0.82rem;
    color: gray;
  }
  .msg_list>p {
    margin-top: 0.5rem;
    font-size: 0.82rem;
    color:gray;
  }

</style>