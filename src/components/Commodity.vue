<template>
    <div id="commodity">
        <h3>商城</h3>
        <ul class="ul_options" >
            <li @click="options_detail">品种<div></div></li>
            <li @click="options_detail">类别<div></div></li>
            <li @click="options_detail">品牌<div></div></li>
        </ul>
        <ul class="ul_options_son"  v-show="options_son">
            <li>全部</li>
            <li>狗狗</li>
            <li>猫猫</li>
        </ul>
         <ul class="ul_options_son"  v-show="options_son">
            <li>套餐</li>
            <li>狗狗</li>
            <li>猫猫</li>
        </ul>
         <ul class="ul_options_son"  v-show="options_son">
            <li>品牌</li>
            <li>皇家</li>
            <li>猫猫</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            options_son:false
        }
    },
    methods: {
        options_detail:function(){
        }
    },

}
</script>

<style scoped>
    #commodity>h3{
        text-align: center
    }

    /* 选项导航栏 */
    #commodity>.ul_options{
        list-style: none;
        width: 100%;
        border-top: 0.005rem solid #dddddd;
        border-bottom: 0.005rem solid #dddddd;
        display: flex;
        justify-content: space-around ;
        padding:1.2rem 0;
        margin: 0
    }
    #commodity>.ul_options>li{
        width: 30%;
        text-align: center;
        box-sizing: border-box;
        padding: 0 1.7rem
    }
    #commodity>.ul_options>li+li{
        border-left: 0.03rem solid #dddddd;
    }
    #commodity>.ul_options>li>div{    
        float: right;
        border:0.25rem solid  #ffffff;
        border-top:0.25rem solid #dddddd;
        margin-top:0.4rem; 
    }

    /* 具体选项样式 */
    #commodity>.ul_options_son{
         list-style: none;
         margin: 0;
         color: dimgray;
         padding: 0;
         background: #dddddd;
         height: 100%;
         float: left;
         z-index: 100;
    }
    #commodity>.ul_options_son>li{
          height: 2.5rem;
          line-height: 2.5rem;
          background:#ffffff;
          padding-left: 1.2rem;
    }
    #commodity>.ul_options_son>li+li{
        border-top:0.1rem solid #dddddd;
    }
    

</style>