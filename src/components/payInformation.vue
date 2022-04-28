<template>
  <div class="form-panel">
    <form id="a-form">
      <div class="form-content">
        <div class="part">
          <h2 class="page-name">付款資訊</h2>
          <div class="credit-card credit-card__name">
            <label for="">持卡人姓名</label>
            <input
              v-model="payInformation.creditCardName"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div class="credit-card credit-card__number">
            <label for="">卡號</label>
            <input
              v-model="payInformation.creditCardNumber"
              type="text"
              placeholder="1111 2222 3333 4444"
            />
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <div class="credit-card credit-card__date">
              <label for="">有效期限</label>
              <input
                v-model="payInformation.creditCardDate"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div class="credit-card credit-card__cvc">
              <label for="">CVC/CCV</label>
              <input
                v-model="payInformation.creditCardCVC"
                type="text"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const STORAGE_KEY = "pay-information";

export default {
  data() {
    return {
      payInformation: {
        creditCardName: "",
        creditCardNumber: "",
        creditCardDate: "",
        creditCardCVC: "",
      },
    };
  },
  methods: {
    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.payInformation));
    },
    fetchStorage() {
      const StorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
      this.payInformation = StorageData ? StorageData : this.payInformation;
    },
  },
  watch: {
    payInformation: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
  created() {
    this.fetchStorage();
  },
};
</script>