<template>
  <tr>
    <td>{{ cartItems.title }}</td>
    <td>
      <input
        type="number"
        class="form-control"
        min="1"
        style="width: 100px"
        v-model="cartItems.qty"
      />
    </td>
    <td>${{ total }}</td>
    <td>
      <button class="btn btn-danger" @click="removeItem(cartItems)">
        Remove
      </button>
    </td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",

  props: {
    cartItems: {
      type: Object,
      required: true,
    },
  },
  computed: {
    total() {
      return (this.cartItems.qty * this.cartItems.price).toFixed(2);
    },
  },

  methods: {
    ...mapActions(["removeItem"]),
  },
};
</script>
