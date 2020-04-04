<template>
  <div id="app">
    <b-container>
      
      <b-row>
  
         <b-col cols="12" ><Header/> </b-col> 
        
      </b-row>
  <!-- mt is margin top  -->
      <b-row>
        <b-col cols="2" class="mt-3"> <CategoriesMenu/> </b-col>
        <b-col cols="10" class="mt-3">
        <router-view :key="$route.fullPath"></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CategoriesMenu from './components/CategoriesMenu.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components:{
    CategoriesMenu,
    Header
  }
  

}
</script>
<style>


</style>
