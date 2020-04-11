<template>
  <div class="modal">
    <div class="container">
      <div class="row">
        <div id="modal" class="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
          <h5>item added to the cart</h5>
          <img :src="product.image" alt="title" class="img-fluid" />
          <h5>{{product.title}}</h5>
          <h5 class="text-muted" v-if="product.price">price : ${{product.price}}</h5>
          <b-link to="/" @click="closeModal">
            <CustomButton>store</CustomButton>
          </b-link>
          <b-link to="/cart" @click="closeModal">
            <CustomButton :cart="true">go to cart</CustomButton>
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton";
export default {
  name: "Modal",
  props: ["product"],
  components: {
    CustomButton
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal #modal {
  background: #ffff;
}
</style>>
