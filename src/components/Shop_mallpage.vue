<template>
  <div class="container">
    <h2>商城</h2>
    <!-- 轮播图 -->
    <div class="shopping_swipe">
      <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) of swipe_img" :key="index">
        <img :src="item"/>
      </mt-swipe-item>
    </mt-swipe>
    </div>
    <!-- 商品类别 -->
    <div class="commodity_option">
      <div><img src="../assets/img/ic_navigator_zhuliang.png"><p>主粮</p></div>
      <div><img src="../assets/img/ic_navigator_lingshi.png"><p>零食</p></div>
      <div><img src="../assets/img/ic_navigator_baojian.png"><p>保健品</p></div>
      <div><img src="../assets/img/ic_navigator_yongpin.png"><p>用品</p></div>
    </div>
    <!-- 分割线 -->
    <hr>
    <!-- 套餐 -->
    <div class="set_meal">
        <p>套餐</p>
        <div>
          <div>
            <div>
              <p>小体型犬</p>
              <p>低至99元起</p>
            </div>
            <img src="../assets/img/ic_tab_newyear_normal_02.png">
          </div>
          <div>
            <div>
              <p>中体型犬</p>
              <p>地址99元起</p>
            </div>
            <img src="../assets/img/ic_tab_newyear_normal_02.png">
          </div>
          <div>
            <div>
              <p>大体型犬</p>
              <p>低至99元起</p>
            </div>
            <img src="../assets/img/ic_tab_newyear_normal_02.png">
          </div>
          <div>
            <div>
              <p>猫咪套餐</p>
              <p>地址99元起</p>
            </div>
           <img src="../assets/img/ic_tab_newyear_normal_02.png">
          </div>
        </div>
    </div>
    <hr>
    <!-- 品牌 -->
    <p class="pet_brand_p">品牌</p>
    <div class="pet_brand">
      <div v-for="(item,index) of pet_brand" :key="index">
        <img :src="item.img">
        <p>{{item.name}}</p>
      </div>
    </div>

    <hr>
    <!-- 主粮 -->
    <p class="main_grain">主粮
      <img src="../assets/img/ic_more.png" alt="">
      <span>更多</span>
    </p>
    <div class="main_grain_list">
      <div v-for="(item,index) of main_grain_list" :key="index">
        <img :src="item.img" alt="">
        <h4>{{item.title}}</h4>
        <p>{{item.explain}}</p>
        <b>¥{{item.price}}</b>
        <span>会员价</span>
        <s>¥{{item.original_price}}</s>
      </div>
    </div>

    <hr>
   <!-- 零食 -->
    <p class="main_grain">零食
      <img src="../assets/img/ic_more.png" alt="">
      <span>更多</span>
    </p>
    <div class="main_grain_list">
      <div v-for="(item,index) of snacks_list" :key="index">
        <img :src="item.img" alt="">
        <h4>{{item.title}}</h4>
        <p>{{item.explain}}</p>
        <b>¥{{item.price}}</b>
        <span>会员价</span>
        <s>¥{{item.original_price}}</s>
      </div>
    </div>

    <hr>
    <!-- 保健品 -->
    <p class="main_grain">保健品
      <img src="../assets/img/ic_more.png" alt="">
      <span>更多</span>
    </p>
    <div class="main_grain_list">
      <div v-for="(item,index) of health_product_list" :key="index">
        <img :src="item.img" alt="">
        <h4>{{item.title}}</h4>
        <p>{{item.explain}}</p>
        <b>¥{{item.price}}</b>
        <span>会员价</span>
        <s>¥{{item.original_price}}</s>
      </div>
    </div>

    <hr>
    <!-- 用品 -->
    <p class="main_grain">用品
      <img src="../assets/img/ic_more.png" alt="">
      <span>更多</span>
    </p>
    <div class="main_grain_list">
      <div v-for="(item,index) of articlesn_list" :key="index">
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
  data() {
    return {
      // 轮播图片
      swipe_img:[
        require("../assets/img/banner1.png"),
        require("../assets/img/banner2.png"),
        require("../assets/img/banner3.png"),
        require("../assets/img/banner4.png")
      ],
      // 品牌列表
      pet_brand:[
        {
          name:'皇家',
          img: require("../assets/img/banner1.png")
        },
        {
          name:'冠能',
          img: require("../assets/img/banner1.png")
        },
        {
          name:'伯纳天纯',
          img: require("../assets/img/banner1.png")
        },
        {
          name:'巴西淘淘',
          img: require("../assets/img/banner1.png")
        },
        {
          name:'拜耳',
          img: require("../assets/img/banner1.png")
        }
        ,
        {
          name:'弗莱恩',
          img: require("../assets/img/banner1.png")
        }
        ,
        {
          name:'红狗',
          img: require("../assets/img/banner1.png")
        },
        { 
         name:'MAG',
          img: require("../assets/img/banner1.png")
        },
      ],
      //主食列表
      main_grain_list:[
        {
           img:require("../assets/img/main_grain_01.png"),
           title:"伯纳天纯 沙丁鱼+紫薯 蔓越莓幼猫粮 10KG",
           explain:"天然无谷低敏配方",
           price:398,
           original_price:489
        },
        {
           img:require("../assets/img/main_grain_02.png"),
           title:"伯纳天纯 金枪鱼马铃薯蔓月莓成猫粮 10KG",
           explain:"天然无谷低敏配方",
           price:340,
           original_price:469
        },
        {
           img:require("../assets/img/main_grain_03.png"),
           title:"伯纳天纯 低敏无谷中大型成犬粮 15KG",
           explain:"天然无谷低敏配方",
           price:398,
           original_price:529
        },
        {
           img:require("../assets/img/main_grain_04.png"),
           title:"伯纳天纯 低敏无谷中大型幼犬粮 15KG",
           explain:"天然无谷低敏配方",
           price:398,
           original_price:559
        }
      ],
      //  零食列表
      snacks_list:[
        {
           img:require("../assets/img/snacks01.png"),
           title:"蒙贝-骨肉香髓70g",
           explain:"天然牛骨才有这个味",
           price:29,
           original_price:38
        },
        {
           img:require("../assets/img/snacks02.png"),
           title:"日清 杯是高级猫罐头礼盒限量版",
           explain:"附赠猫碗和木制汤勺",
           price:88,
           original_price:138
        },
        {
           img:require("../assets/img/snacks03.png"),
           title:"伯纳天纯 低敏无谷中大型成犬粮 15KG",
           explain:"天然无谷低敏配方",
           price:398,
           original_price:529
        },
        {
           img:require("../assets/img/snacks04.png"),
           title:"伯纳天纯 低敏无谷中大型幼犬粮 15KG",
           explain:"天然无谷低敏配方",
           price:398,
           original_price:559
        }
      ],
      // 保健品列表
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
      //用品列表
      articlesn_list:[
        {
           img:require("../assets/img/articles01.png"),
           title:"乐福 米奇支架窝( 颜色可选 )",
           explain:"秘密温馨小窝",
           price:65,
           original_price:98
        },
        {
           img:require("../assets/img/articles02.png"),
           title:"乐福 纯色双肩透明太空包 ( 颜色可选 )",
           explain:"携宠出行新方式",
           price:78,
           original_price:128
        },
        {
           img:require("../assets/img/articles03.png"),
           title:"乐福 印花双肩透明太空包( 颜色可选 )",
           explain:"携宠出行新方式",
           price:88,
           original_price:128
        },
        {
           img:require("../assets/img/articles04.png"),
           title:"JOYPET 猫咪除味免洗香波",
           explain:"日本进口免洗香波",
           price:39,
           original_price:59
        }
      ]
    }
  },
}
</script>

<style  scoped>
  .container{
    position:relative;
    overflow:auto;
    margin-bottom: 4rem
  }
  .container> h2 {
    text-align: center;
    width: 100%;
    top: 0;
    font-size: 1.3rem;
    position: fixed; 
    z-index: 100;
    background: #ffffff; 
    height: 3.3rem;
    margin-top:0; 
    line-height: 3.3rem;
  }
/* 轮播图 */
  .shopping_swipe {
    width:100%;
    height: 10rem;
    margin-top:3.3rem; 
  }
  .shopping_swipe img{
    width: 101%;
    margin-left:-0.1rem; 
    height: 10rem;
  }
/* 商品类别 */
  .commodity_option{
    display: flex;
    justify-content: space-around
  }
  .commodity_option>div{
    width: 25%;
    text-align: center;
  }
  .commodity_option>div>img{
    width: 80%
  }
  .commodity_option>div>p{
    margin-top:-0.1rem; 
    font-size: 0.9rem;
    font-weight: 700;
  }
/* 分割线 */
  hr{
    border: 0.15rem solid #ddd;
    background: #d3d3d3;
  }

  .set_meal{
    padding: 0;
    border: 0rem;
  }
  .set_meal p{
     margin: 0;
     font-size: 0.9rem;
     font-weight: 700;
     margin-left:0.7rem; 
  }
  .set_meal p+p{
     margin-top: 0.7rem;
     margin-bottom: 1.2rem;
     font-size: 0.3rem;
     color: gray;
  }
  .set_meal>p{
    margin-bottom: 1rem;
    height: 1rem;
    font-size: 0.9rem;
    font-weight: 700;
  }
  .set_meal>div{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .set_meal>div>div{
    width: 50%;
    display: flex;
  }
  .set_meal>div>div>div{
    width: 60%;
  }
  .set_meal>div img{
    width: 30%;
    height: 3rem;
  }

/* 品牌 */
  .pet_brand{
    display: flex;
    flex-wrap: wrap;
  }
  .pet_brand_p{
    font-weight:700;
    margin: 0.8rem 0.5rem; 
  }
  .pet_brand>div{
    width: 25%;
    height: 5rem;
    text-align: center;
    box-sizing: border-box;
    padding: 0.2rem;
    margin-bottom: 0.7rem;
  }
  .pet_brand img{
    width: 100%;
    height: 3.5rem
  }
  .pet_brand>div>p{
    margin-top: 0.3rem;
    font-size: 0.8rem;
  }

  /* 主粮 */
  .main_grain{
    font-size: 1rem;
    font-weight: 700;
    margin-left:0.5rem; 
  }
  .main_grain>span{
    float:right;
    height: 1rem;
    font-size: 0.7rem;
    color: gray;
    margin-right:0.3rem 
  }
  .main_grain img{
    float:right;
    height: 0.8rem;
    margin-right:0.2rem; 
  }
  .main_grain_list{
    display: flex;
    flex-wrap: wrap;
  }
  .main_grain_list>div{
    width: 50%;
    padding: 0 0.7rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
  .main_grain_list img{
    height: 10rem;
  }
  .main_grain_list h4{
    margin-top: 1rem;
    margin-bottom:0.8rem; 
    line-height: 1.3rem
  }
  .main_grain_list p{
    margin-top:0rem; 
    color: gray;
    font-size: 0.9rem;
  }
  .main_grain_list b{
    margin-right: 0.3rem;
    color:orangered;
  }
  .main_grain_list span{
    border: 2px solid orange;
    color: orange;
    border-radius: 6px;
    font-size: 0.6rem;
    padding: 0 0.2rem;
  }
  .main_grain_list s{
    color:gray;
    font-size: 0.9rem;
    margin-left: 2.5rem;
  }
</style>