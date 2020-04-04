<template>
  <div class="orderListing">

   to check all the orders 

   <table class="table">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>

       <tr  v-for="(item, index) in orders" :key="item.productId + '-' + index">
            <td>
              {{item.productId}}
            </td>
            <td>{{item.price}}</td>
            <td>{{item.qty}} </td>
            <td>{{item.total }} </td>
            <td>
              <b-link :to="'/productdetails/'+ item.productId"> 
            <b-button variant="primary">More details </b-button>
              </b-link> 
            </td>
        </tr>
        <tr>
            <td>Total : </td>
            <td>{{total}}</td>
        </tr>
   </table>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'orderListing',
  computed:{
  
    total:function() {
      let sum=0
      for (const item of this.orders ){
        sum+=item.total
       
      }
      
      return sum
    }
  },
 data(){
    return{
      orders:[]
    };
  },
  mounted(){
      axios
    .get("https://euas.person.ee/user/orders")
    .then(response =>{
    this.orders=response.data[0].items;
  })
  }

}
</script>


<style scoped>

</style>
