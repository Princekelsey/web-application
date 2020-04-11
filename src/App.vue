<template>
  <div id="app">
    <Header />

    <!-- mt is margin top  -->
    <b-row>
      <b-col cols="2" class="bg-dark siderBar">
        <CategoriesMenu />
      </b-col>
      <b-col cols="10" class="mt-3">
        <router-view :key="$route.fullPath"></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CategoriesMenu from "./components/CategoriesMenu.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    CategoriesMenu,
    Header
  }
};
</script>
<style>
:root {
  --mainBlue: #2a2a72;
  --lightBlue: #009ffd;
  --mainWhite: #f3f3f3;
  --mainDark: #232528;
  --mainRed: #ec4c4c;
}
.siderBar {
  height: 100vmax;
}
.text-title {
  letter-spacing: 0.3rem;
  text-transform: uppercase;
}

.text-blue {
  color: var(--mainBlue);
}

.text-bright {
  color: var(--lightBlue);
}

.btn-black {
  background: transparent !important;
  text-transform: capitalize;
  font-size: 0.8rem !important;
  color: var(--mainDark) !important;
  border-radius: 0 !important;
  border: 0.1rem solid var(--mainDark) !important;
}

.btn-black:hover {
  background: var(--mainDark) !important;
  color: var(--mainWhite) !important;
}

.cart-icon {
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--mainRed);
}
</style>
