<template>
  <div class="Category">
    <Title :name="this.$route.params.categoryAlias" title="category" />
    <ProductPanel :categoryAlias="this.$route.params.categoryAlias" />
  </div>
</template>

<script>
import ProductPanel from "./ProductPanel.vue";
import Title from "./Title";
export default {
  name: "Category",
  components: {
    ProductPanel,
    Title
  }
};
</script>
<style scoped></style>
