<template>
    <div>
      <div class="container">
        <div @click="active?active=false:active='tab1'" ><strong>广州</strong><div class="triangle"></div></div>
        <div @click="active?active=false:active='tab2'"><strong>资质</strong><div class="triangle"></div></div>
        <div @click="active?active=false:active='tab3'"><strong>信誉</strong><div class="triangle"></div></div>
      </div>
      <!-- 添加三个面板 -->
      <mt-tab-container v-model="active" >
          <mt-tab-container-item id="tab1">
            <div>广州</div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab2">
            <div class="a_container">
             <ul style="list-style-type: none" >
             <li><a href="">不限</a></li>
             <li><a href="">实名验证</a></li>
             <li><a href="">商家验证</a></li>
             <li><a href="">平台验证</a></li>
             </ul>
            </div>  
          </mt-tab-container-item>
          <mt-tab-container-item id="tab3">
            <div class="a_container">
             <ul  style="list-style-type: none" >
             <li><a href="">不限</a></li>
             <li><a href="">交易量</a></li>
             <li><a href="">好评数</a></li>
             </ul>
            </div> 
          </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{active:''}
    }
}
</script>
<style scoped>
    .container{
        line-height: 60px;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ddd;
    }
    .triangle{
        width:0;
        height:0;
        border-right:7px solid transparent;
        border-left:7px solid transparent;
        border-top:7px solid black;
        float: right;
        margin-top: 25px;
        margin-left: 5px
        
    }
    .a_container{
        z-index: 0
    }
    .a_container li{
        line-height: 25px;
        border-bottom: 1px solid #ddd;
        margin-left: -30px;
    }
    .a_container a{
        text-decoration: none;
        color: black;
    }
</style>