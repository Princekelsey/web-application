<template>
  <div class="Category">
    <Title :name="this.$route.params.categoryAlias" title="category" />
    <productpanel :categoryAlias="this.$route.params.categoryAlias" />
  </div>
</template>

<script>
import productpanel from "./productpanel.vue";
import Title from "./Title";
export default {
  name: "Category",
  components: {
    productpanel,
    Title
  }
};
</script>
<style scoped>
</style>
