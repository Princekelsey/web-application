<template>
  <div class="shoppingCart">

    <h2> Shopping cart</h2>

    <table class="table">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>

      <tr  v-for="(item, index) in this.$root.$data.cart.items" :key="item.productId + '-' + index">
        <td>
          <b-link :to="'/products/' + item.productId"> 
          <img :src="item.optionImage" class="option-image" />
          </b-link>
        </td>
        <td>{{item.price }}</td>
        <td>{{item.qty }} </td>
        <td>{{item.total }} </td>
        <td>
          <b-button variant="danger"
          @click="removeItem(index)">Remove </b-button>
        </td>
      </tr>
      <tr>
        <td>Total: </td>  
        <td>{{total}}</td>
      </tr>
    </table>
    <b-button variant="success" size="lg"
     @click="orderNow"
    v-if="this.items.length"
    > Order Now!</b-button>
    
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: 'shoppingCart',
  computed:{
    items:function () {
      return this.$root.$data.cart.items || [];
    },
    total:function() {
      let sum=0
      for (const item of this.items ){
        sum+=item.total
      }
      return sum
    }
  },
  methods: {
    removeItem: function (index) {
      if(!this.$root.$data.cart.items) this.$root.$data.cart.items= []
      this.$root.$data.cart.items.splice(index, 1);
      console.log(this.$root.$data.cart.items)
      this.$root.$data.saveCart();
    },
    orderNow: function(){
      let data= this.$root.$data
      axios.post("https://euas.person.ee/user/carts/"+ this.$root.$data.cart.id + "/orders",
      this.$root.$data.cart).then(function(res){
        console.log(res.data);
        
      data.reinitCart();
      })
      this.$router.push('/orderlisting')
    }
  }  
}
</script>
<style scoped>
.option-image{
  max-height: 50px;
  max-width: 50px;
}

</style>
