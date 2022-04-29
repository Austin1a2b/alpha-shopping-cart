<template>
  <div class="form-panel">
    <form id="a-form">
      <div class="form-content">
        <div class="part">
          <h2 class="page-name">運送方式</h2>
          <div class="delivery-wrapper">
            <input
              v-model="deliveryMethod"
              type="radio"
              name="shipping-method"
              value="免費"
              class="delivery-method"
            />
            <label>
              <div class="delivery-method__name">標準運送</div>
              <div class="delivery-method__time">約3~7個工作天</div>
            </label>

            <div class="delivery-method__fee">免費</div>
          </div>
          <div class="delivery-wrapper">
            <input
              v-model="deliveryMethod"
              type="radio"
              value="500"
              name="shipping-method"
              class="delivery-method"
            />
            <label>
              <div class="delivery-method__name">DHL貨運</div>
              <div class="delivery-method__time">48小時內送達</div>
            </label>
            <div class="delivery-method__fee">$500</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  props: {
    initialDeliveryMethod: {
      type: [String, Number],
      require: true,
    },
  },
  data() {
    return {
      deliveryMethod: "",
    };
  },
  methods: {
    fetchData() {
      this.deliveryMethod = this.initialDeliveryMethod;
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    deliveryMethod() {
      this.$emit("deliveryMethodChanege", this.deliveryMethod);
    },
  },
};
</script>