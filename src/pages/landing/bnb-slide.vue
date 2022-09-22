<template lang="pug">
.bnb-slide(:ref="`bnb-slide-${id}`" :class="classname")
  .bnb-slide-half.bnb-slide__sec-wrapper
    .bnb-slide__sec.bnb-slide__sec--chart(
      v-if="firstChart && secondChart"
      :class="{'bnb-slide__sec--active': isBnbEnter}"
      :style="{ minHeight: $store.state.fullVideoHeight }"
    )
      g-two-chart(
        :id="`bnb-slide-media-${id}`",
        :first="firstChart",
        :second="secondChart",
        :alt="alt"
        :is-active="isPrimEnter"
        :chart-caption="chartCaption"
      )
    .bnb-slide__sec.bnb-slide__sec--vid(
      v-if="vid"
      :class="{'bnb-slide__sec--active': isBnbEnter}"
    )
      g-vid-w-control(
        :src="vid"
        :ext="ext"
        :poster="poster",
        :poster-ext="posterExt"
        :id="`video-${id}`",
        :force-stop="!isBnbEnter"
        :use-play="usePlay"
        :use-sound="useSound"
        :full-screen="true"
      )
  .bnb-slide-half.bnb-slide__prim(:ref="`bnb-slide-prim-${id}`")
    .bnb-slide__prim-content-container
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
    chartCaption: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    usePlay: {
      type: Boolean,
      default: true,
    },
    useSound: {
      type: Boolean,
      default: true,
    },
    useOffset: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isBnbEnter: false,
      isPrimEnter: false,
    };
  },
  mounted() {
    // handle bnb slide
    linearIntersectionObserver(
      this.$refs[`bnb-slide-${this.id}`],
      () => {
        this.isBnbEnter = true;
      },
      () => {
        this.isBnbEnter = false;
      },
      {
        rootMargin: `${window.innerHeight * -0.3}px 0px ${
          window.innerHeight * -0.3
        }px 0px`,
      }
    );

    // handle prim
    linearIntersectionObserver(
      this.$refs[`bnb-slide-prim-${this.id}`],
      () => {
        this.isPrimEnter = true;
      },
      () => {
        this.isPrimEnter = false;
      },
      {
        rootMargin: this.useOffset
          ? `0px 0px ${window.innerHeight * -0.2}px 0px`
          : '0px 0px 0px 0px',
        threshold: 0,
      }
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;

  @include rwd-min(md) {
    flex-direction: row;
  }

  &-half {
    position: relative;
    width: 100%;

    @include rwd-min(md) {
      width: 50%;
    }
  }

  &__prim {
    position: relative;
    width: 100%;
    margin: 200px auto 800px auto;
    padding: $spacing-9;
    background-color: rgba($color: $bg-white, $alpha: 0.9);

    @include rwd-min(sm) {
      margin: 200px auto 1000px auto;
    }

    @include rwd-min(md) {
      width: 50%;
      display: flex;
      justify-content: center;
      margin: 100vh auto;
    }
  }

  &__prim-content-container {
    @include rwd-min(xl) {
      max-width: 470px;
    }
  }

  &__sec-wrapper {
    position: sticky;
    top: 0;
    /* top: 50%; */
    width: 100%;
    display: flex;
    justify-content: center;
    /* transform: translateY(-50%); */

    @include rwd-min(md) {
      top: 0;
      width: 50%;
      /* transform: translateY(0); */
    }
  }

  &__sec {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s ease-in-out;

    &--active {
      opacity: 1;
    }

    &--chart {
      @include rwd-min(md) {
        justify-content: flex-end;
        padding: $spacing-10;
      }

      @include rwd-min(xl) {
        img {
          max-width: 469px !important;
          max-height: 329px !important;
        }
      }
    }

    @include rwd-min(md) {
      height: 100vh;
    }
  }

  .g-vid-w-control {
    width: 100%;
    height: 100%;
  }

  .g-vid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }
}
</style>
