<template lang="pug">
.bnb-slide(:ref="`bnb-slide-${id}`" :class="classname")
  .bnb-slide-half.bnb-slide__sec
    g-two-chart(
      :id="id",
      :first="firstChart",
      :second="secondChart",
      :alt="alt"
      :is-active="isActive"
    )
  .bnb-slide-half.bnb-slide__prim(:ref="`bnb-slide-prim-${id}`")
    slot
</template>

<script>
import GTwoChart from '@/components/g-two-chart.vue';
import { linearIntersectionObserver } from '@/assets/js/observer.js';

export default {
  name: 'bnb-slide',
  components: {
    GTwoChart,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    classname: {
      type: String,
      default: '',
    },
    firstChart: {
      type: String,
      default: '',
    },
    secondChart: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    linearIntersectionObserver(
      this.$refs[`g-slide-prim-${this.id}`],
      this.handleEnter,
      this.handleLeave
    );
  },
  methods: {
    handleEnter() {
      this.isActive = true;
    },
    handleLeave() {
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss">
.bnb-slide {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &-half {
    position: relative;
    width: 50%;
    height: 100%;
  }

  &__prim {
    margin-top: 50vh;
  }

  &__sec {
  }
}
</style>
