<template lang="">
  <div>
    <p class="lead">Product Cart</p>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <!-- cartItem -->
        <CartItem
          v-for="items in cartItems"
          :key="items.id"
          :cartItems="items"
        />
      </tbody>
    </table>
    <hr />
    <button class="btn btn-success btn-lg">
      Checkout
      <span>(${{ totalAmount }})</span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";
export default {
  name: "CartList",

  components: {
    CartItem,
  },

  computed: {
    ...mapGetters(["cartItems", "totalAmount"]),
  },

  created() {
    this.$store.dispatch("fetchCartItems");
  },
};
</script>
