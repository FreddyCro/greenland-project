<template lang="pug">
.gl-transition(:class="{'gl-transition--active': isSectionEnter}")
  .gl-transition__trigger-1(ref="trigger-1")
  .gl-transition__trigger-2(ref="trigger-2")
  .gl-transition__content(:style="style")
    .gl-transition__content-bg
      g-pic(
        src="img/landing/greenland_pic7_1"
        ext="jpg"
        :webp="true"
        classname="u-full-vh-img"
      )
  .gl-transition__text(:class="{'gl-transition__text--active': isTextEnter}")
    p(
      v-for="p, index in text"
      :key="`transitionText-${index}`"
    )
      span(v-html="p")
</template>

<script>
import GPic from '@/components/g-pic.vue';
import { linearIntersectionObserver } from '@/assets/js/observer.js';

export default {
  name: 'landing-map-transition',
  components: {
    GPic,
  },
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
  computed: {
    style() {
      const style = { height: this.$store.state.fullVideoHeight };
      return style;
    },
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

<style lang="scss">
.gl-transition {
  position: relative;
  height: 1800px;
  opacity: 0;
  transition: 0.5s ease-in-out;
  font-family: 'Noto Serif TC', 'Noto Sans TC', 'Microsoft JhengHei', Roboto,
    sans-serif;

  &--active {
    opacity: 1;
  }

  @include rwd-min(sm) {
    height: 2400px;
  }

  @include rwd-min(md) {
    height: 300vh;
  }

  &__content {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  &__content-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    img {
      object-position: bottom center;
    }
  }

  &__text {
    position: relative;
    margin: 0 auto;
    text-align: center;
    padding-bottom: $spacing-10;
    opacity: 0;
    transition: 0.5s ease-in-out;

    &--active {
      opacity: 1;
    }

    p + p {
      margin-top: $spacing-2 !important;
    }

    span {
      padding: 0 $spacing-5;
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
  pointer-events: none;
}

.gl-transition__trigger-2 {
  position: absolute;
  top: 300px;
  width: 100%;
  height: 200px;
  pointer-events: none;

  @include rwd-min(sm) {
    height: 400px;
  }

  @include rwd-min(md) {
    height: 30vh;
  }
}
</style>
