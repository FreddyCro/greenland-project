<template lang="pug">
.g-two-chart(:id="id" :ref="id")
  .g-two-chart__first
    g-svg-chart(:src="first", :alt="alt")
  .g-two-chart__second(:class="{ 'g-two-chart__second--hidden': !isActive }")
    g-svg-chart(:src="second", :alt="alt")
</template>

<script>
import GSvgChart from '@/components/g-svg-chart.vue';

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
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.g-two-chart {
  position: relative;

  @include rwd-max(xs) {
    margin-left: $spacing-5;
    margin-right: $spacing-5;
  }

  &__second {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.333s ease-in-out;

    &--hidden {
      opacity: 0;
    }
  }
}
</style>
