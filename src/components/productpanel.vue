<template>
  <div class="productpanel">
    <h3 class="title">{{ title }}</h3>
    <Loading v-if="pending" />
    <!-- {{categoryAlias}} -->
    <b-card-group deck>
      <ProductCard
        :product="product"
        v-for="product in products"
        :key="product.id"
      />
    </b-card-group>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "./Loading";
export default {
  name: "ProductPanel",
  props: {
    title: String,
    categoryAlias: String,
    section: String
  },
  components: {
    ProductCard,
    Loading
  },
  data() {
    return {
      products: [],
      pending: true
    };
  },
  mounted() {
    this.pending = true;
    if (this.categoryAlias) {
      axios
        .get(
          "https://euas.person.ee/categories/" +
            this.categoryAlias +
            "/products"
        )
        .then(response => {
          this.products = response.data;
          this.pending = false;
          console.log(this.products);
        })
        .catch(err => {
          console.log(err);
          this.pending = false;
        });
    } else {
      axios
        .get("https://euas.person.ee/products/tags/" + this.section)
        .then(response => {
          this.pending = false;
          this.products = response.data;
        })
        .catch(err => {
          console.log(err);
          this.pending = false;
        });
    }
  }
};
</script>

<style scoped>
.productpanel {
  /* border:1px   solid red; */
  margin-bottom: 15px;
}

.title {
  color: var(--lightBlue);
}
</style>
