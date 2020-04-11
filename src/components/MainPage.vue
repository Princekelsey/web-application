<template>
  <div class="MainPage">
    <productpanel title="Recommended Sales" section="recommended" />

    <productpanel title="Buy Now" section="buynow" />

    <productpanel title="Top Selling" section="topselling" />
  </div>
</template>


<script>
import productpanel from "./productpanel.vue";
export default {
  name: "MainPage",
  components: {
    productpanel
  }
};
</script>
<style scoped>
</style>
