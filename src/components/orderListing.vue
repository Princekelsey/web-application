<template>
  <div class="orderListing">
    <Title name="Order" title="lists" />
    <Loading v-if="pending" />
    <table class="table text-center table-bordered table-striped table-hover" v-if="orders.length">
      <tr>
        <th>Order ID</th>
        <th>Items</th>
        <th>Total Amount</th>
        <th>Action</th>
      </tr>

      <tr v-for="(item, index) in orders" :key="item.id + '-' + index">
        <td>{{ item.id}}</td>
        <td>{{ item.items ? item.items.length : 0 }}</td>
        <td>{{ item.items ? orderAmount(item) : 0 }}</td>
        <td>
          <b-link :to="'/orders/' + item.id">
            <CustomButton>Order details</CustomButton>
          </b-link>
        </td>
      </tr>
      <!-- <tr>
        <td>
          <strong>Total :</strong>
        </td>
        <td>{{ total }}</td>
      </tr>-->
    </table>
  </div>
</template>

<script>
import axios from "axios";
import CustomButton from "./CustomButton";
import Title from "./Title";
import Loading from "./Loading";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "orderListing",
  components: {
    CustomButton,
    Title,
    Loading
  },
  computed: mapGetters(["getOrders"]),

  data() {
    return {
      total: "",
      orders: [],
      pending: false
    };
  },
  methods: {
    ...mapActions(["addSingleOrder"]),
    orderAmount: function(order) {
      let sum = 0;
      for (const item of order.items) {
        sum += item.total;
      }
      return sum.toFixed(2);
    }
  },
  mounted() {
    this.pending = true;
    let sum = 0;
    for (const item of this.getOrders) {
      sum += item.total;
      this.total = sum.toFixed(2);
    }

    axios
      .get("https://euas.person.ee/user/orders")
      .then(response => {
        this.pending = false;
        console.log(response.data);
        this.orders = response.data;
        // this.selectedOption = this.product.options[0];
      })
      .catch(error => {
        console.log(error);
        this.pending = false;
      });
  }
};
</script>

<style scoped>
.option-image {
  max-height: 50px;
  max-width: 50px;
}
</style>
