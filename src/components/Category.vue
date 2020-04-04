<template>
  <div class=Category>
    categories page for  {{this.$route.params.categoryAlias}}
    <productpanel :categoryAlias="this.$route.params.categoryAlias"/>
    
  </div>
</template>

<script>
import productpanel from './productpanel.vue'
export default {
 name: 'Category',
  components:{
    productpanel
  }
}
</script>
<style scoped>

</style>
