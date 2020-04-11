<template>
  <div class="shoppingCart">
    <EmptyCart v-if="!items.length" />
    <Title name="your" title="cart" v-else />

    <table class="table text-center table-bordered table-striped" v-if="items.length">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Item Total</th>
        <th>Actions</th>
      </tr>

      <tr v-for="(item, index) in   items" :key="item.productId + '-' + index">
        <td>
          <b-link :to="'/products/' + item.productId">
            <img :src="item.optionImage" class="option-image" />
          </b-link>
        </td>
        <td>{{ item.price }}</td>
        <td>
          <div class="d-flex justify-content-center">
            <div>
              <span class="btn btn-black mx-1">-</span>
              <span class="btn btn-black mx-1">{{ item.qty }}</span>
              <span class="btn btn-black mx-1">+</span>
            </div>
          </div>
        </td>
        <td>{{ item.total.toFixed(2) }}</td>
        <td>
          <b-button size="sm" variant="danger" @click="removeItem(index)">
            <i class="fas fa-trash-alt"></i>
          </b-button>
        </td>
      </tr>
    </table>
    <div class="container" v-if="items.length">
      <div class="row">
        <div class="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <b-link to="/" @click="clearCart">
            <CustomButton class="text-uppercase mb-3 px-3" :cart="true">clear cart</CustomButton>
          </b-link>
          <b-link @click="orderNow">
            <CustomButton class="text-uppercase mb-3 px-3">order now</CustomButton>
          </b-link>
          <h5 class="mr-5">
            <span class="text-title">total :</span>
            <strong>${{total}}</strong>
          </h5>
        </div>
      </div>
    </div>
    <!-- <b-button
      variant="outline-info"
      pill
      size="sm"
      @click="orderNow"
      v-if="this.items.length"
    >ORDER NOW!</b-button>-->
  </div>
</template>

<script>
import axios from "axios";
import CustomButton from "./CustomButton";
import Title from "./Title";
import EmptyCart from "./EmptyCart";
export default {
  name: "shoppingCart",
  components: {
    CustomButton,
    Title,
    EmptyCart
  },
  computed: {
    items: function() {
      console.log(this.$root.$data.cart.items);
      return this.$root.$data.cart.items || [];
    },
    total: function() {
      let sum = 0;
      for (const item of this.items) {
        sum += item.total;
      }
      return sum.toFixed(2);
    }
  },
  methods: {
    removeItem: function(index) {
      if (!this.$root.$data.cart.items) this.$root.$data.cart.items = [];
      this.$root.$data.cart.items.splice(index, 1);
      console.log(this.$root.$data.cart.items);
      this.$root.$data.saveCart();
    },
    orderNow: function() {
      let data = this.$root.$data;
      let router = this.$router;

      axios
        .post(
          "https://euas.person.ee/user/carts/" +
            this.$root.$data.cart.id +
            "/orders",
          this.$root.$data.cart
        )
        .then(function() {
          router.push("/orders/" + data.cart.id + "?success=true");
          data.reinitCart();
        });
    },
    clearCart: function() {
      let data = this.$root.$data;
      data.reinitCart();
    }
  }
};
</script>
<style scoped>
.option-image {
  max-height: 50px;
  max-width: 50px;
}
</style>
