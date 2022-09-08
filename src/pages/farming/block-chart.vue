<template>
  <div ref="block-chart" class="block-chart">
    <div class="block-chart-trigger-container">
      <div
        v-for="(rect, index) in Object.values(rects)"
        class="block-chart-trigger"
        :ref="`block-chart-trigger-${index}`"
        :key="`block-chart-trigger-${rect.year}`"
      ></div>
    </div>
    <svg
      class="block-chart-svg"
      width="350"
      height="300"
      viewBox="0 0 350 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        v-for="rect in Object.values(rects).reverse()"
        :key="`block-chart-rect-${rect.year}`"
        x="0"
        y="0"
        :width="calcWidth(rect.value, rect.active)"
        :height="calcHeight(rect.value, rect.active)"
        :fill="rect.color"
        :stroke="rect.color"
      />
    </svg>
  </div>
</template>

<script>
import { onceIntersectionObserver } from '@/assets/js/observer.js';

const config = {
  minValue: 1127,
  maxValue: 1173.2,
  minWidth: 140,
  minHeight: 120,
  maxWidth: 350,
  maxHeight: 300,
};

export default {
  name: 'block-chart',
  data() {
    return {
      // isEnter: false,
      rects: {
        2015: { year: 2015, value: 1127, color: '#DDE2EC', active: true },
        2016: { year: 2016, value: 1140.1, color: '#bbc6da', active: false },
        2017: { year: 2017, value: 1148.2, color: '#99abc8', active: false },
        2018: { year: 2018, value: 1164.2, color: '#7791b6', active: false },
        2019: { year: 2019, value: 1173.2, color: '#285F92', active: false },
      },
    };
  },
  mounted() {
    const vm = this;
    const rects = Object.values(vm.rects);

    rects.forEach((rect, index) => {
      onceIntersectionObserver(
        vm.$refs['block-chart-trigger-' + index][0],
        () => {
          rect.active = true;
        }
      );
    });
  },
  methods: {
    calcWidth(value, active) {
      const { minValue, maxValue, minWidth, maxWidth } = config;

      if (!active) {
        return minWidth;
      } else {
        return (
          minWidth +
          ((value - minValue) / (maxValue - minValue)) * (maxWidth - minWidth)
        );
      }
    },
    calcHeight(value, active) {
      const { minValue, maxValue, minHeight, maxHeight } = config;

      if (!active) {
        return minHeight;
      } else {
        return (
          minHeight +
          ((value - minValue) / (maxValue - minValue)) * (maxHeight - minHeight)
        );
      }
    },
  },
};
</script>

<style lang="scss">
.block-chart {
  position: relative;
  text-align: center;
}

.block-chart-trigger-container {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translate(0, -50%);
}

.block-chart-trigger {
  opacity: 0;
  pointer-events: none;
}

.block-chart-svg {
  transform: scaleY(-1);
  transform-origin: center;

  rect {
    transition: 0.15s ease-in-out;
  }
}
</style>
