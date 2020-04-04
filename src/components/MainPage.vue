<template>
  <div class="MainPage">
    <h2> Welcome!</h2>

    <productpanel title="Recommended" section="recommended"/>

    <productpanel title="BuyNow" section="buynow"/>

    <productpanel title="TopSelling" section="topselling"/>
    
  </div>
</template>


<script>
import productpanel from './productpanel.vue'
export default {
  name: 'MainPage',
  components:{
    productpanel
  }
  
}
</script>
<style scoped>

</style>
