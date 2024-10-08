import Vue from "vue";
import Vuex from "vuex";
import product from "./product"; // Renamed productModule to product
import cart from "./cart"; // Renamed cartModule to cart

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    product,
    cart,
  },
});
