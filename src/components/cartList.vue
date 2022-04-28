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
            <button
              @click.prevent.stop="minusAmount(cartItem.id)"
              class="amount_btn minus"
            >
              <i class="fas fa-minus"></i>
            </button>
            <span>{{ cartItem.amount }}</span>
            <button
              @click.prevent.stop="addAmount(cartItem.id)"
              class="amount_btn plus"
            >
              <i class="fas fa-plus"></i>
            </button>
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
      <div class="fee total-cost">${{ totalAmount }}</div>
    </div>
  </div>
</template>


<script>
const LOCALSTORAGE_KEY = "cartItems_localStorage";

export default {
  props: {
    initialCartItems: {
      type: Array,
    },
  },
  data() {
    return {
      cartItems: [],
      totalAmount: Number,
    };
  },
  methods: {
    fetchCartItem() {
      const localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      console.log(localData);
      //筆記 注意資料類型 , 這邊是陣列 , 判斷要加.length
      this.cartItems =
        localData.length !== 0 ? localData : this.initialCartItems;
    },
    addAmount(id) {
      this.cartItems = this.cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          };
        } else {
          return { ...cartItem };
        }
      });
    },
    minusAmount(id) {
      // 先檢查數量 是否為 1 ,  因為 1-1=0  所以要刪除項目 功能要另外處理
      const index = this.cartItems.findIndex((cartItem) => cartItem.id === id);
      if (this.cartItems[index].amount === 1) {
        this.cartItems.splice(index, 1);
        return;
      }
      //若不是1 , 則 將對應的項目 數量-1
      else
        this.cartItems = this.cartItems.map((cartItem) => {
          if (cartItem.id === id) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          } else {
            return { ...cartItem };
          }
        });
    },
    countMoney() {
      let money = 0;
      this.cartItems.forEach((cartItem) => {
        money = money + cartItem.amount * cartItem.price;
        return money;
      });
      console.log(money);
      this.totalAmount = money;
    },
    saveStorage() {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.cartItems));
    },
  },
  watch: {
    cartItems: {
      handler: function () {
        this.countMoney();
        this.saveStorage();
      },
      deep: true,
    },
  },
  created() {
    this.fetchCartItem();
    this.countMoney();
  },
};
</script>