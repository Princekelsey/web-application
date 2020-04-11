<template>
  <div class="orderDetails">
    <Title name="Order" title="Details" />
    <Loading v-if="pending" />
    <b-alert
      show
      variant="success"
      v-if="this.$route.query.success"
    >Thank you for submitting your order. It will be shipped in 7 working days</b-alert>

    <table class="table" v-if="order.items">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>

      <tr v-for="(item, index) in order.items" :key="item.productId + '-' + index">
        <td>
          <b-link :to="'/products/' + item.productId">
            <img :src="item.optionImage" class="product-image img-fluid" />
          </b-link>
        </td>
        <td>{{item.price }}</td>
        <td>{{item.qty }}</td>
        <td>{{item.total.toFixed(2) }}</td>
        <td>
          <b-link :to="'/products/'+ item.productId">
            <CustomButton variant="primary">Product details</CustomButton>
          </b-link>
        </td>
      </tr>
    </table>
    <div class="container" v-if="order.items">
      <div class="row">
        <div class="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <h5 class="mr-5">
            <span class="text-title">total :</span>
            <strong>${{total}}</strong>
          </h5>
        </div>
      </div>
    </div>

    <div class="container mt-5" v-if="!order.items">
      <div class="row">
        <div class="col-10 mx-auto text-center text-title">
          <h1>no products in this order</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CustomButton from "./CustomButton";
import Title from "./Title";
import Loading from "./Loading";
export default {
  name: "OrderDetails",
  data: function() {
    return {
      order: null,
      selectedOption: {},
      qty: 1,
      pending: false
    };
  },
  components: {
    CustomButton,
    Title,
    Loading
  },
  computed: {
    total: function() {
      let sum = 0;
      if (this.order.items) {
        for (const item of this.order.items) {
          sum += item.total;
        }
      }
      return sum.toFixed(2);
    }
  },
  mounted() {
    this.pending = true;
    axios
      .get("https://euas.person.ee/user/orders/" + this.$route.params.orderId)
      .then(response => {
        this.pending = false;
        this.order = response.data;

        console.log(this.order);
      })
      .catch(error => {
        console.log(error);
        this.pending = false;
      });
  }
  // methods: {},
};
</script>
<style scoped>
.product-image {
  max-height: 100px;
  max-width: 100px;
}
</style>
