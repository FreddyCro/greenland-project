<template lang="pug">
.g-two-chart(:id="id" :ref="id")
  .g-two-chart__first
    g-svg-chart(:src="first", :alt="alt")
  .g-two-chart__second(:class="{ 'g-two-chart__second--hidden': !isActive }")
    g-svg-chart(:src="second", :alt="alt")
</template>

<script>
import GSvgChart from '@/components/g-svg-chart.vue';
import { onceIntersectionObserver } from '@/assets/js/observer.js';

export default {
  name: 'g-two-chart',
  components: {
    GSvgChart,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    first: {
      type: String,
    },
    second: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    onceIntersectionObserver(this.$refs[this.id], this.handleActive);
  },
  methods: {
    handleActive() {
      this.isActive = true;
    },
  },
};
</script>

<style lang="scss">
.g-two-chart {
  position: relative;

  &__second {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.333s 1s ease-in-out;

    &--hidden {
      opacity: 0;
    }
  }
}
</style>
