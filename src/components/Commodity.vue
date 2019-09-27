<template>
    <div id="commodity">
        <h3>商城</h3>
        <ul class="ul_options"  @touchend="options_detail">
            <li data-index="0">品种<div></div></li>
            <li data-index="1" class="selected">类别<div></div></li>
            <li data-index="2">品牌<div></div></li>
        </ul>
        <div v-if="options_son==0"></div>
        <ul class="ul_options_son" v-else-if="options_son==1" >
            <li class="selected">全部</li>
            <li>狗狗</li>
            <li>猫猫</li>
        </ul>
         <ul class="ul_options_son"  v-else-if="options_son==2">
            <li class="selected">全部</li>
            <li>宠粮</li>
            <li>零食</li>
        </ul>
         <ul class="ul_options_son" v-else>
            <li class="selected">全部</li>
            <li>皇家</li>
            <li>冠能</li>
        </ul>
        <div class="product_description">
            
        </div>
        <div class="product_description">
            <div v-for="(item,index) of health_product_list" :key="index">
                <img :src="item.img" alt="">
                <h4>{{item.title}}</h4>
                <p>{{item.explain}}</p>
                <b>¥{{item.price}}</b>
                <span>会员价</span>
                <s>¥{{item.original_price}}</s>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            options_son:0,
            health_product_list:[
                {
                    img:require("../assets/img/bjp01.png"),
                    title:"MAG 螯合液体钙220ml 犬猫通用",
                    explain:"补钙壮骨易易吸收",
                    price:49,
                    original_price:98
                },
                {
                    img:require("../assets/img/bjp02.png"),
                    title:"MAG羊奶粉母乳配方400g",
                    explain:"黄金奶源更贴近母乳",
                    price:69,
                    original_price:138
                },
                {
                    img:require("../assets/img/bjp03.png"),
                    title:"红狗RedDog 犬猫通用肽钙膏 120g",
                    explain:"养宠必备补钙膏",
                    price:65,
                    original_price:98
                },
                {
                    img:require("../assets/img/bjp04.png"),
                    title:"红狗RedDog 鱼油美毛膏 120g",
                    explain:"让爱宠毛发焕发自然光彩",
                    price:65,
                    original_price:98
                }
            ],
        }
    },
    methods: {
        options_detail(e){
           if(e.target.nodeName=="LI"){
               const index = parseInt(e.target.dataset.index)
                if(this.options_son == index+1){
                    this.options_son = 0;
                }else{
                    this.options_son = index+1
                }
            }
        } 
    }  
    
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
         background: rgba(80, 80, 80, 0.1);
         height: 100%;
         float: left;
         width: 100%;
         z-index: 100;
         height: 100rem
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
    .selected{
        color: orangered
    }

    .product_description{
        display: flex;
        flex-wrap: wrap;
     }
    .product_description>div{
        width: 50%;
        padding: 0 0.7rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    .product_description img{
        height: 10rem;
     }
    .product_description h4{
        margin-top: 1rem;
        margin-bottom:0.8rem; 
        line-height: 1.3rem
    }
    .product_description p{
        margin-top:0rem; 
        color: gray;
        font-size: 0.9rem;
    }
    .product_description b{
        margin-right: 0.3rem;
        color:orangered;
    }
    .product_description span{
        border: 2px solid orange;
        color: orange;
        border-radius: 6px;
        font-size: 0.6rem;
        padding: 0 0.2rem;
    }
    .product_description s{
        color:gray;
        font-size: 0.9rem;
        margin-left: 2.5rem;
    }
</style>