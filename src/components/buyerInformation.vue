<template>
  <div class="form-panel">
    <form id="a-form">
      <div class="form-content">
        <div class="part">
          <h2 class="page-name">寄送地址</h2>
          <div class="delivery-address__wrapper">
            <div class="gender-wrapper">
              <label>稱謂</label>
              <div class="select-wrapper">
                <select
                  v-model="buyerInformation.gender"
                  name="gender"
                  class="gender"
                >
                  <option value="men">先生</option>
                  <option value="women">女士</option>
                </select>
              </div>
            </div>
            <div class="name-wrapper">
              <label>姓名</label>
              <input
                v-model="buyerInformation.name"
                type="text"
                class="name"
                placeholder="請輸入姓名"
              />
            </div>
            <div class="phone-wrapper">
              <label>電話</label>
              <input
                v-model="buyerInformation.phone"
                type="text"
                class="phone"
                placeholder="請輸入行動電話"
              />
            </div>
            <div class="email-wrapper">
              <label>Email</label>
              <input
                v-model="buyerInformation.email"
                type="text"
                class="email"
                placeholder="請輸入電子郵件"
              />
            </div>
            <div class="county-wrapper">
              <label>縣市</label>
              <div class="select-wrapper">
                <select
                  v-model="buyerInformation.county"
                  name="county"
                  id="county"
                  required
                >
                  <option value="" disabled selected>請選擇縣市</option>
                  <option value="Taipei">台北市</option>
                  <option value="Taichung">台中市</option>
                </select>
              </div>
            </div>
            <div class="address-wrapper">
              <label>地址</label>
              <input
                v-model="buyerInformation.address"
                type="text"
                class="address"
                placeholder="請輸入地址"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
const STORAGE_KEY = "buyer-information";

export default {
  data() {
    return {
      buyerInformation: {
        gender: "men",
        name: "",
        phone: "",
        email: "",
        county: "",
        address: "",
      },
    };
  },
  methods: {
    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.buyerInformation));
    },
    fetchStorage() {
      const StorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
      this.buyerInformation = StorageData ? StorageData : this.buyerInformation;
    },
  },
  watch: {
    buyerInformation: {
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
