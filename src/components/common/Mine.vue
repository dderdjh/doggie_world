<template>
    <div style="overflow:auto">
        <div class="header" >
            <h2>我的</h2><img src="../../assets/img/set.png" alt="" style="width:40px;height:40px;">
        </div>
        <div class="tabar">
            <div class="circle" @click="toLogin"></div>
            <div class="circle_r">
                <h2 class="c_login" @click="toLogin">点击头像登录</h2>
                <span class="desc">宠物市场购宠、售宠专业有保障</span>
            </div>
        </div>
        <div class="tabar_b">
            <div>
                <h2>0分</h2>
                <span style="align-items:center">积分</span>
            </div>
             <div>
                <h2>0张</h2>
                <span>优惠券</span>
            </div>
        </div>
        <div class="batar">
            <div>
                <img src="../../assets/img/mine_buy_icon.png" alt="">
                <h4>待付款</h4>
            </div>
            <div>
                <img src="../../assets/img/mine_buy_icon.png" alt="">
                <h4>待发货</h4>
            </div>
            <div>
                <img src="../../assets/img/mine_buy_icon.png" alt="">
                <h4>已发货</h4>
            </div>
            <div>
                <img src="../../assets/img/mine_buy_icon.png" alt="">
                <h4>待评价</h4>
            </div>
            <div>
                <img src="../../assets/img/mine_buy_icon.png" alt="">
                <h4>退款</h4>
            </div>
        </div>
        <div>
            <div class="batar_foot"><span>切换身份</span><span>卖家<img src="../../assets/img/ic_more.png" alt=""></span></div>
            <div class="batar_foot"><span>我的收藏</span><img src="../../assets/img/ic_more.png" alt=""></div>
            <div class="batar_foot"><span>绑定微信</span><img src="../../assets/img/ic_more.png" alt=""></div>
            <div class="batar_foot"><span>购宠协议</span><img src="../../assets/img/ic_more.png" alt=""></div>
            <div class="batar_foot"><span>用户帮助</span><img src="../../assets/img/ic_more.png" alt=""></div>
            <div class="batar_foot"><span>客户热线</span><span>400-688-0259<img src="../../assets/img/ic_more.png" alt=""></span></div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toLogin(){
            this.$router.push("Login");
        }
    }
}
</script>
<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;  
        background:#f5f1f1;
    }
    .header h2{
        margin-left: 40%;
    }
    .tabar{
        clear: both;
        display: flex;
        margin-top: 0px;
        background:#f5f1f1;
    }
    .circle{
        width: 70px;height:70px;
        border-radius: 50%;
        background: url(../../assets/img/user_def.png)   no-repeat;
        background-size:contain;
        margin-right: 15px;
        margin-left:10px;
    }
    .c_login{margin-bottom:4px;}
    .desc{
        font-size:16px;
        color:#666;
        margin-top:0px
    }
    .tabar_b{
        clear:both;
        display: flex;
        justify-content: space-around;
        margin-top:0px;
        background:#f5f1f1;
    }
    .batar img{
        width:60px;
        height: 60px;   
    }
    .batar h4{
        margin-top: 0px; 
        text-align: center;  
    }
    .batar{
        clear: both;
        display: flex;
        justify-content: space-around;
        background:#f5f1f1;
        margin-top:3px;
    }
    .batar_foot{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background:#f5f1f1;
        border-bottom: 1px solid #ccc;
        margin-top: 3px;
       
    }
    .batar_foot span{
        display: block;
        line-height: 50px;
        font-size:20px;
        color:#556;

    }
</style>
