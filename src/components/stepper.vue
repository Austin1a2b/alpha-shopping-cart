<template>
  <div class id="step-control">
    <div class="stepper-panel">
      <div
        class="step"
        :class="[{ active: step === 1 }, { checked: step > 1 }]"
      >
        <div class="circle-container fas"></div>
        <span class="step-label">寄送地址</span>
      </div>
      <div
        class="step"
        :class="[{ active: step === 2 }, { checked: step > 2 }]"
      >
        <div class="circle-container fas"></div>
        <span class="connect-line"></span>
        <span class="step-label">運送方式</span>
      </div>
      <div class="step" :class="{ active: step === 3 }">
        <div class="circle-container fas"></div>
        <span class="connect-line"></span>
        <span class="step-label">付款資訊</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    step: {
      type: Number,
    },
  },
};
</script>