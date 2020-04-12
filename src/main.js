import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import MainPage from "./components/MainPage.vue";
import ProductPage from "./components/ProductPage.vue";
import Category from "./components/Category.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import axios from "axios";
import OrderListing from "./components/OrderListing.vue";
import OrderDetails from "./components/OrderDetails.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: MainPage },

    { path: "/cart", component: ShoppingCart },
    { path: "/orderlisting", component: OrderListing },
    { path: "/orders/:orderId", component: OrderDetails },
    { path: "/categories/:categoryAlias", component: Category },
    { path: "/products/:productId", component: ProductPage }
  ],
  mode: "history"
});

axios.defaults.headers.common["Authorization"] = "Bearer prince.ajuobi@eek.ee";

if (localStorage.cartId) {
  axios
    .get("https://euas.person.ee/user/carts/" + localStorage.cartId)
    .then(response => {
      localStorage.cartId = response.data.id;
      new Vue({
        store,
        render: h => h(App),
        router: router,
        data: {
          cart: response.data,
          saveCart() {
            axios.put(
              "https://euas.person.ee/user/carts/" + this.cart.id,
              this.cart
            );
          },
          reinitCart() {
            axios.post("https://euas.person.ee/user/carts").then(response => {
              localStorage.cartId = response.data.id;
              this.cart = response.data;
            });
          }
        }
      }).$mount("#app");
    });
} else {
  axios.post("https://euas.person.ee/user/carts").then(response => {
    localStorage.cartId = response.data.id;
    new Vue({
      store,
      render: h => h(App),
      router: router,
      data: {
        cart: response.data,
        saveCart() {
          axios.put(
            "https://euas.person.ee/user/carts/" + this.cart.id,
            this.cart
          );
        },
        reinitCart() {
          axios.post("https://euas.person.ee/user/carts").then(response => {
            localStorage.cartId = response.data.id;
            this.cart = response.data;
          });
        }
      }
    }).$mount("#app");
  });
}
