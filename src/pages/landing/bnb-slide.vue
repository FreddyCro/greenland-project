<template lang="pug">
.bnb-slide(:ref="`bnb-slide-${id}`" :class="classname")
  .bnb-slide-half.bnb-slide__sec-wrapper
    .bnb-slide-half.bnb-slide__sec(:class="{'bnb-slide__sec--active': isActive}")
      g-two-chart(
        v-if="firstChart && secondChart"
        :id="`bnb-slide-media-${id}`",
        :first="firstChart",
        :second="secondChart",
        :alt="alt"
        :is-active="isActive"
      )
      g-vid-w-control(
        v-if="vid"
        :src="vid"
        :ext="ext"
        :poster="poster",
        :poster-ext="posterExt"
        :id="`bnb-slide-media-${id}`",
        :force-stop="!isActive"
      )
  .bnb-slide-half.bnb-slide__prim(:ref="`bnb-slide-prim-${id}`")
    slot
</template>

<script>
import GTwoChart from '@/components/g-two-chart.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import { linearIntersectionObserver } from '@/assets/js/observer.js';

export default {
  name: 'bnb-slide',
  components: {
    GTwoChart,
    GVidWControl,
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
    vid: {
      type: String,
      default: '',
    },
    ext: {
      type: String,
      default: 'mp4',
    },
    poster: {
      type: String,
      default: '',
    },
    posterExt: {
      type: String,
      default: 'jpg',
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
      this.$refs[`bnb-slide-prim-${this.id}`],
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
    height: 100%;

    @include rwd-min(md) {
      width: 50%;
    }
  }

  &__prim {
    position: relative;
    margin: 100vh auto;
    padding: $spacing-9;
    background-color: rgba($color: $bg-white, $alpha: 0.9);
  }

  &__sec-wrapper {
    position: relative;
    overflow: hidden;
  }

  &__sec {
    position: fixed;
    left: 0;
    top: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    opacity: 0;
    pointer-events: none;
    transition: 0.333s ease-in-out;

    &--active {
      opacity: 1;
      pointer-events: all;
    }

    @include rwd-min(md) {
      width: 50%;
    }
  }
}
</style>
