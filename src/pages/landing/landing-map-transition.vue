<template lang="pug">
.gl-transition(:class="{'gl-transition--active': isSectionEnter}")
  .gl-transition__trigger-1(ref="trigger-1")
  .gl-transition__trigger-2(ref="trigger-2")
  .gl-transition__content
    .gl-transition__content-text(:class="{'gl-transition__content-text--active': isTextEnter}")
      p(
        v-for="p, index in text"
        :key="`transitionText-${index}`"
      )
        span(v-html="p")
</template>

<script>
import { linearIntersectionObserver } from '@/assets/js/observer.js';

export default {
  name: 'landing-map-transition',
  props: {
    text: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isSectionEnter: false,
      isTextEnter: false,
    };
  },
  mounted() {
    linearIntersectionObserver(
      this.$refs['trigger-1'],
      () => {
        this.isSectionEnter = true;
      },
      () => {
        this.isSectionEnter = false;
      }
    );

    linearIntersectionObserver(
      this.$refs['trigger-2'],
      () => {
        this.isTextEnter = true;
      },
      () => {
        this.isTextEnter = false;
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.gl-transition {
  position: relative;
  height: 300vh;
  margin-bottom: 36vh;
  opacity: 0;
  transition: 0.5s ease-in-out;

  &--active {
    opacity: 1;
  }

  &__content {
    @include bg-3x('/img/landing/greenland_pic7_1', 'jpg', true);

    position: sticky;
    top: 0;
    width: 100%;
    height: 125vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: bottom center;
  }

  &__content-text {
    margin: 0 auto;
    text-align: center;
    opacity: 0;
    transition: 0.5s ease-in-out;

    &--active {
      opacity: 1;
    }

    p + p {
      margin-top: $spacing-2 !important;
    }

    span {
      background-color: #fff;
    }
  }
}

.gl-transition__trigger-1 {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 50%;
}

.gl-transition__trigger-2 {
  position: absolute;
  top: 50vh;
  width: 100%;
  height: 60vh;
}
</style>
