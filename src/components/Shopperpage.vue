<template>
  <div>
    <store></store>
    <product></product>
  </div>
</template>
<script>
import Store from "./common/Store.vue"
import Product from "./common/Product.vue"


export default {
  components:{
    store:Store,
    product: Product
  }
}
</script>