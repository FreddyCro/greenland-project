<template lang="pug">
.g-slide(:ref="`g-slide-${id}`" :class="classname")
  .g-slide-bg-wrapper
    .g-slide-bg(:class="{ 'g-slide-bg--active': isEnter }")
      slot(name="bg")

  .g-slide-content(:class="{ 'g-slide-content--active': isEnter, 'g-slide-content--last': isLast }")
    slot(name="content")
</template>

<script>
import { linearIntersectionObserver } from '@/assets/js/observer.js';
export default {
  name: 'g-slide-bg',
  props: {
    id: {
      type: String,
      default: '',
    },
    classname: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isEnter: false,
    };
  },
  mounted() {
    linearIntersectionObserver(
      this.$refs[`g-slide-${this.id}`],
      this.handleEnter,
      this.handleLeave
    );
  },
  methods: {
    handleEnter() {
      this.isEnter = true;
    },
    handleLeave() {
      this.isEnter = false;
    },
  },
};
</script>

<style lang="scss">
.g-slide-bg-wrapper {
  min-height: 100vh;
}

.g-slide-bg {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.25s ease-in-out;
  pointer-events: none;

  &--active {
    opacity: 1;
  }
}

.g-slide-content {
  position: relative;
  display: flex;
  align-items: center;
  /* min-height: 100vh; */
  margin-bottom: 100vh;
  z-index: 2;
  opacity: 0;
  background-color: rgba($color: $black, $alpha: 0.4);
  color: $font-color-light;
  transition: 0.5s ease-in-out;

  &--last {
    margin-bottom: 0;
  }

  &--active {
    opacity: 1;
  }
}
</style>
