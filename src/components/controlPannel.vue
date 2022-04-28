<template>
  <div class="control-panel" id="btn-control">
    <button
      v-if="initialStep !== 1"
      @click.prevent.stop="PreviousStep()"
      class="btn btn-back"
    >
      ← 上一步
    </button>
    <button
      v-if="initialStep !== 3"
      @click.prevent.stop="NextStep()"
      class="btn btn-next"
    >
      下一步 →
    </button>
    <button class="btn btn-next" v-if="initialStep === 3">確認下單</button>
  </div>
</template>


<script>
export default {
  props: {
    initialStep: {
      type: Number,
    },
  },
  data() {
    return {
      newstep: "",
    };
  },
  methods: {
    PreviousStep() {
      this.newstep = this.initialStep - 1;
      this.$emit("after-previous-step", this.newstep);
    },
    NextStep() {
      this.newstep = this.initialStep + 1;
      this.$emit("after-next-step", this.newstep);
    },
  },
};
</script>