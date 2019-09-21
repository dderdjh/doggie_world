<template>
    <div>
    <div class="s-head">
       <div class="area" >
         <div class="btn" @click="toggle()">广州<div class="triangle"></div></div>
         <div v-show="isShow" class="a_container">广州</div> 
        </div> 
       <div class="area">
         <div class="btn" @click="toggle()">资质<div class="triangle"></div></div> 
         <div v-show="isShow">
             <ul style="list-style-type: none">
             <li><a>不限</a></li>
             <li><a>实名验证</a></li>
             <li><a>商家验证</a></li>
             <li><a>平台验证</a></li>
             </ul>
         </div>
        </div> 
       <div class="area">
         <div class="btn"  @click="toggle()">信誉<div class="triangle"></div>
         </div>
          <div v-show="isShow">
             <ul  style="list-style-type: none">
             <li><a>不限</a></li>
             <li><a>交易量</a></li>
             <li><a>好评数</a></li>
             </ul>
         </div> 
        </div> 
    </div>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow:false
        }
    },
    methods: {
        toggel:function(){
            this.isShow=!this.isShow
        }
    },
}
</script>
<style scoped>
    .s-head{
        display: flex;
        justify-content: space-around;
       border-bottom: 1px solid #ccc;
    }
    .btn{
        border:0px;
        background: none;
        line-height: 50px;
    }   
    .triangle{
        width:0;
        height:0;
        border-right:7px solid transparent;
        border-left:7px solid transparent;
        border-top:7px solid black;
        float: right;
        margin-top: 20px;
        margin-left: 3px
        
    }
    .show a{
        display: block;
    }
    

</style>