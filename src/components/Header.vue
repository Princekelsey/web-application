<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="sticky-top">
    <!-- <b-navbar-brand href="/">E-Shop</b-navbar-brand> -->
    <router-link class="navbar-brand" to="/">E-Shop</router-link>
    <ul class="navbar-nav align-items-center">
      <li class="nav-item">
        <b-nav-item href="/orderlisting" class="ml-1">Order List</b-nav-item>
      </li>
    </ul>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/cart">
          <CustomButton>
            <span class="mr-2">
              <i class="fas fa-cart-plus"></i>
            </span>
            my cart
          </CustomButton>
          <!-- <i class="fas fa-cart-plus"></i>
          <b-badge variant="light" class="ml-1">0</b-badge>-->
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import CustomButton from "./CustomButton";
export default {
  name: "Header",
  components: {
    CustomButton
  },
  data() {
    return {
      body: (
        <template>
          <span class="mr-2">
            <i class="fas fa-cart-plus"></i>
          </span>
        </template>
      )
    };
  }
};
</script>

<style scoped>
nav {
  background: var(--mainBlue) !important;
}
</style>
