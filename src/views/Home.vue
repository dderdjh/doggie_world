<template>
  <div class="home">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="homepage" >
        <homepage></homepage>
      </mt-tab-container-item>
      <mt-tab-container-item id="shoper">
        <shopperpage></shopperpage>
      </mt-tab-container-item>
      <mt-tab-container-item id="shop_mall">
        <shopmallpage></shopmallpage>
      </mt-tab-container-item>
      <mt-tab-container-item id="message">
        <messagepage></messagepage>
      </mt-tab-container-item>
      <mt-tab-container-item id="me">
        <mepage></mepage>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航条 -->
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="homepage" @click.native="changeStage(0)">
        <tabbaricon
          :selectedImage="require('../assets/img/ic_tab_homepage_pressed.png')"
          :normalImage="require('../assets/img/ic_tab_homepage_normal.png')"
          :focused="currentIndex[0].isSelect"
        ></tabbaricon>首页
      </mt-tab-item>
      <mt-tab-item id="shoper" @click.native="changeStage(1)">
        <tabbaricon
          :selectedImage="require('../assets/img/ic_tab_business_pressed.png')"
          :normalImage="require('../assets/img/ic_tab_business_normal.png')"
          :focused="currentIndex[1].isSelect"
        ></tabbaricon>商家
      </mt-tab-item>
      <mt-tab-item id="shop_mall" @click.native="changeStage(2)">
        <tabbaricon
          :selectedImage="require('../assets/img/ic_tab_mall_pressed.png')"
          :normalImage="require('../assets/img/ic_tab_mall_normal.png')"
          :focused="currentIndex[2].isSelect"
        ></tabbaricon>商城
      </mt-tab-item>
      <mt-tab-item id="message" @click.native="changeStage(3)">
        <tabbaricon
          :selectedImage="require('../assets/img/ic_tab_chat_pressed.png')"
          :normalImage="require('../assets/img/ic_tab_chat_normal.png')"
          :focused="currentIndex[3].isSelect"
        ></tabbaricon>消息
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="changeStage(4)">
        <tabbaricon
          :selectedImage="require('../assets/img/ic_tab_mine_pressed.png')"
          :normalImage="require('../assets/img/ic_tab_mine_normal.png')"
          :focused="currentIndex[4].isSelect"
        ></tabbaricon>我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Homepage from "../components/Homepage"
import Shop_mallpage from "../components/Shop_mallpage"
import Shopperpage from "../components/Shopperpage"
import Mepage from "../components/Mepage"
import Messagepage from "../components/Messagepage"
import TabBarIcon from "../components/common/TabBarIcon";


export default {
  data() {
    return {
      active: "homepage",
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },

  methods: {
    changeStage(idx) {
      for (var i = 0; i < this.currentIndex.length; i++) {
        if (i == idx) {
          this.currentIndex[i].isSelect = true;
        } else {
          this.currentIndex[i].isSelect = false;
        }
      }
    }
  },
  components: {
    homepage: Homepage,
    shopperpage:Shopperpage,
    mepage:Mepage,
    shopmallpage:Shop_mallpage,
    messagepage:Messagepage,
    tabbaricon: TabBarIcon,
    
  }
};
</script>
