<template>
  <div class="main-app">
    <h1 class="title">結帳</h1>
    <div class="main-content">
      <stepper :step="step" />
      <buyerInformation v-if="step === 1" />
      <deliveryMethod
        :initialDeliveryMethod="deliveryMethod"
        v-if="step === 2"
        @deliveryMethodChanege="deliveryMethodChanege"
      />
      <payInformation v-if="step === 3" />
      <controlPannel
        :initialStep="step"
        @after-previous-step="afterPreviousStep"
        @after-next-step="afterNextStep"
      />
      <cartList
        :deliveryMethod="deliveryMethod"
        :initialCartItems="cartItems"
        @cartItemChange="aftercartItemChange"
      />
    </div>
  </div>
</template>



<script>
import stepper from "../components/stepper.vue";
import buyerInformation from "../components/buyerInformation.vue";
import deliveryMethod from "../components/deliveryMethod.vue";
import payInformation from "../components/payInformation.vue";
import cartList from "../components/cartList.vue";
import controlPannel from "../components/controlPannel.vue";

const dummyData = {
  cartItems: [
    {
      id: 1,
      img: "https://i.postimg.cc/K13ZX6B9/1.png",
      name: "破壞補丁修身牛仔褲",
      price: 3999,
      amount: 1,
      totalAmount: 3999,
    },
    {
      id: 2,
      img: "https://i.postimg.cc/Y0RBPrTr/2.png",
      name: "刷色直筒牛仔褲",
      price: 1299,
      amount: 1,
      totalAmount: 1299,
    },
  ],
  deliveryMethod: "免費",
};

export default {
  data() {
    return {
      step: 1,
      cartItems: [],
      deliveryMethod: "",
    };
  },
  components: {
    stepper,
    buyerInformation,
    deliveryMethod,
    payInformation,
    controlPannel,
    cartList,
  },
  methods: {
    fetchData() {
      this.cartItems = dummyData.cartItems;
      this.deliveryMethod = dummyData.deliveryMethod;
    },
    afterPreviousStep(nowStep) {
      this.step = nowStep;
    },
    afterNextStep(nowStep) {
      this.step = nowStep;
    },
    aftercartItemChange(newCartItems) {
      this.cartItems = newCartItems;
    },
    deliveryMethodChanege(method) {
      this.deliveryMethod = method;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

