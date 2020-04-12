<template>
  <div class="MainPage">
    <ProductPanel title="Recommended Sales" section="recommended" />

    <ProductPanel title="Buy Now" section="buynow" />

    <ProductPanel title="Top Selling" section="topselling" />
  </div>
</template>

<script>
import ProductPanel from "./ProductPanel";
export default {
  name: "MainPage",
  components: {
    ProductPanel
  }
};
</script>
<style scoped></style>
