<template>
  <div ref="block-chart" class="block-chart">
    <div class="block-chart-trigger-container">
      <div
        v-for="(rect, index) in Object.values(rects)"
        class="block-chart-trigger"
        :ref="`block-chart-rect-${index}`"
        :key="`block-chart-rect-${rect.year}`"
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
        v-for="rect in Object.values(rects)"
        :key="`block-chart-rect-${rect.year}`"
        x="0"
        y="0"
        :width="calcSize(rect.value, rect.active)"
        :height="calcSize(rect.value, rect.active)"
        :fill="rect.color"
        :stroke="rect.color"
      />
    </svg>
  </div>
</template>

<script>
import { linearIntersectionObserver } from '@/assets/js/observer.js';
// import { calcElementProgress } from '@/assets/js/progress.js';

const config = {
  minValue: 1127,
  maxValue: 1173.2,
  minWidth: 350,
  minHeight: 300,
  maxWidth: 140,
  maxHeight: 120,
};

export default {
  name: 'block-chart',
  data() {
    return {
      isEnter: false,
      rects: {
        2015: { year: 2015, value: 1127, color: '#DDE2EC', active: true },
        2016: { year: 2016, value: 1140.1, color: '', active: false },
        2017: { year: 2017, value: 1148.2, color: '', active: false },
        2018: { year: 2018, value: 1164.2, color: '', active: false },
        2019: { year: 2019, value: 1173.2, color: '#285F92', active: false },
      },
    };
  },
  mounted() {
    const vm = this;

    window.requestAnimationFrame(vm.handleScroll);

    linearIntersectionObserver(
      this.$refs['block-chart'],
      () => {
        console.log('enter');
        vm.isEnter = true;
        window.addEventListener('scroll', vm.handleScroll, { passive: true });
      },
      () => {
        console.log('leave');
        vm.isEnter = false;
        window.removeEventListener('scroll', vm.handleScroll);
      }
    );
  },
  methods: {
    calcSize(value, active) {
      const { minValue, maxValue, minWidth, maxWidth } = config;

      if (!active) {
        return minWidth;
      }
      return (
        minWidth +
        ((value - minValue) / (maxValue - minValue)) * (maxWidth - minWidth)
      );
    },
    handleScroll() {
      if (this.isEnter) {
        // const rects = Object.values(this.rects);
        // const length = Object.keys(this.rects).length;
        // const progress = calcElementObservableProgress(
        //   this.$refs['block-chart']
        // );
        // const step = 1 / length;

        // rects.forEach((rect, index) => {
        //   if (progress >= index * step && progress < (index + 1) * step) {
        //     rect.active = true;
        //     console.log(index, 'active');
        //   } else {
        //     rect.active = false;
        //   }
        // });

        // console.log(progress);
      }
    },
  },
};
</script>

<style lang="scss">
.block-chart {
  position: relative;
}

.block-chart-trigger-container {
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translate(0, 50%);
}

.block-chart-trigger {
  border: solid 1px red;
}

.block-chart-svg {
  transform: scaleY(-1);
  transform-origin: center;
}
</style>
