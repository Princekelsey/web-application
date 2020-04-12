<template>
  <div>
    <Modal :product="product" v-if="isOpen" @closeModal="closeModal" />
    <b-card
      :title="product.title"
      :img-src="product.image"
      img-alt="image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{ product.description }}</b-card-text>

      <template v-slot:footer>
        <div class="text-center">
          <b-link :to="'/products/' + product.id">
            <CustomButton>More details</CustomButton>
          </b-link>
          <b-link @click="addToCart()">
            <CustomButton :cart="true">Add to Cart</CustomButton>
          </b-link>
        </div>
      </template>
    </b-card>
  </div>
</template>

<script>
import CustomButton from "./CustomButton";
import Modal from "./Modal";

export default {
  name: "ProductCard",
  props: {
    product: Object
  },
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    CustomButton,
    Modal
  },
  methods: {
    addToCart: function() {
      if (!this.$root.$data.cart.items) this.$root.$data.cart.items = [];
      this.$root.$data.cart.items.push({
        productId: this.product.id,
        qty: 1,
        optionCode: this.product.options[0].code,
        optionImage: this.product.options[0].image,
        price: this.product.options[0].price,
        total: this.product.options[0].price
      });
      this.$root.$data.saveCart();
      this.isOpen = true;
      // this.$router.push("/cart");
      this.addOrder({
        productId: this.product.id,
        qty: 1,
        optionCode: this.product.options[0].code,
        optionImage: this.product.options[0].image,
        price: this.product.options[0].price,
        total: this.product.options[0].price
      });
    },
    closeModal: function() {
      this.isOpen = false;
    }
    // openModal: function() {
    //   this.isOpen = true;
    // }
  }
};
</script>

<style scoped></style>
