<template>
  <div id="step-control" class="stepper-panel">
    <div class="step" :class="[{ active: step === 1 }, { checked: step > 1 }]">
      <div :class="{ 'fas fa-check': step > 1 }" class="circle-container"></div>
      <span class="step-label">寄送地址</span>
    </div>
    <div class="step" :class="[{ active: step === 2 }, { checked: step > 2 }]">
      <div class="circle-container" :class="{ 'fas fa-check': step > 2 }"></div>
      <span class="connect-line"></span>
      <span class="step-label">運送方式</span>
    </div>
    <div class="step" :class="{ active: step === 3 }">
      <div :class="{ 'fas fa-check': step > 3 }" class="circle-container"></div>
      <span class="connect-line"></span>
      <span class="step-label">付款資訊</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>