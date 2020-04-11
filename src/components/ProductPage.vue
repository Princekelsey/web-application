<template>
  <div class="container py-5">
    <Loading v-if="pending" />
    <Modal :product="selectedOption" v-if="isOpen" @closeModal="closeModal" />
    <div class="row">
      <div class="col-10 mx-auto text-center text-blue my-5">
        <h1>{{ product.title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-10 mx-auto col-md-3 my-3">
        <img
          :src="selectedOption.image"
          class="img-fluid"
          alt="title"
          style="height: 70% ; width: 100%"
        />
      </div>
      <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
        <h3>Brand : {{ product.title }}</h3>
        <p class="text-capitalize font-weight-bold mt-1 mb-0">product information:</p>
        <p class="text-muted">{{ product.description }}</p>
        <h4 class="text-blue">
          <strong>
            price :
            <span>$</span>
            {{ selectedOption.price }}
          </strong>
        </h4>

        <p
          class="text-capitalize font-weight-bold mt-1 mb-0 text-muted"
        >Option selected: {{ selectedOption.title }}</p>

        <b-button-group>
          <b-button
            v-for="option in product.options"
            :key="option.name"
            @click="changeOption(option)"
          >{{ option.title }}</b-button>
        </b-button-group>
        <div class="d-flex pt-2">
          <div>
            <span class="btn btn-black mx-1" v-on:click="remove">-</span>
            <span class="btn btn-black mx-1">{{qty}}</span>
            <span class="btn btn-black mx-1" v-on:click="add">+</span>
          </div>
        </div>
        <p class="pt-2 text-muted">
          <b-alert v-if="this.qty > this.selectedOption.qty" show variant="warning">
            There are not more than {{ selectedOption.qty }} in the
            stock
          </b-alert>
          items in stock: {{ selectedOption.qty }}
        </p>
        <h4 class="text-blue">
          <strong>
            Total: ${{
            (this.qty * this.selectedOption.price).toFixed(2)
            }}
          </strong>
        </h4>

        <div class="pt-3">
          <b-link to="/">
            <CustomButton>back to products</CustomButton>
          </b-link>
          <b-link @click="addToCart">
            <CustomButton :cart="true">add to cart</CustomButton>
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CustomButton from "./CustomButton";
import Loading from "./Loading";
import Modal from "./Modal";
import { mapActions } from "vuex";
export default {
  name: "ProductPage",
  components: {
    CustomButton,
    Modal,
    Loading
  },
  data: function() {
    return {
      product: {},
      selectedOption: {},
      qty: 1,
      isOpen: false,
      pending: false
    };
  },
  mounted() {
    this.pending = true;
    axios
      .get("https://euas.person.ee/products/" + this.$route.params.productId)
      .then(response => {
        this.product = response.data;
        this.selectedOption = this.product.options[0];
        this.pending = false;
      })
      .catch(error => {
        console.log(error);
        this.pending = false;
      });
  },
  methods: {
    ...mapActions(["addOrder"]),
    changeOption: function(option) {
      this.selectedOption = option;
    },
    add: function() {
      if (this.qty < this.selectedOption.qty) {
        this.qty++;
      }
    },
    remove: function() {
      if (this.qty > 1) {
        this.qty--;
      }
    },
    addToCart: function() {
      if (!this.$root.$data.cart.items) this.$root.$data.cart.items = [];
      this.$root.$data.cart.items.push({
        productId: this.product.id,
        qty: this.qty,
        optionCode: this.selectedOption.code,
        optionImage: this.selectedOption.image,
        price: this.selectedOption.price,
        total: this.selectedOption.price * this.qty
      });
      this.$root.$data.saveCart();
      this.isOpen = true;
      this.addOrder({
        productId: this.product.id,
        qty: this.qty,
        optionCode: this.selectedOption.code,
        optionImage: this.selectedOption.image,
        price: this.selectedOption.price,
        total: this.selectedOption.price * this.qty
      });
      // this.$router.push("/cart");
    },
    closeModal: function() {
      this.isOpen = false;
    }
  }
};
</script>
<style scoped>
.product-image {
  width: 300px;
  height: 300px;
}
</style>
