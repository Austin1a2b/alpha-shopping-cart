<template>
  <div class="cart-panel">
    <h3 class="cart_title">購物籃</h3>
    <div class="cart-list">
      <!---->
      <div v-for="cartItem in cartItems" :key="cartItem.key" class="cart-item">
        <img src="https://i.postimg.cc/Y0RBPrTr/2.png" class="img goods-img" />
        <div class="goods-info">
          <div class="goods-name">{{ cartItem.name }}</div>
          <div class="goods-amount">
            <button class="amount_btn minus">
              <i class="fas fa-minus"></i>
            </button>
            <span>{{ cartItem.amount }}</span>
            <button class="amount_btn plus"><i class="fas fa-plus" ></i></button>
          </div>
          <div class="goods-price">${{ cartItem.price }}</div>
        </div>
      </div>
      <!---->
    </div>
    <div class="delivery-fee__wrapper">
      <div class="delivery-price__name">運費</div>
      <div class="fee deliver-fee">免費</div>
    </div>
    <div class="total-wrapper">
      <div class="total-price__name">小計</div>
      <div class="fee total-cost">總價(要用JS計算)</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    initialCartItems: {
      type: Array,
    },
  },
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    fetchCartItem() {
      this.cartItems = this.initialCartItems;
    },
  },

  created() {
    this.fetchCartItem();
  },
};
</script>