<template lang="pug">
.g-slide(:ref="`g-slide-${id}`" :class="classname")
  .g-slide-bg-wrapper(:class="{ 'g-slide-bg-wrapper--last': isLast }")
    .g-slide-bg(
      :class="{ 'g-slide-bg--active': isEnter, 'g-slide-bg--fade-in': isContentEnter }"
      :style="{ minHeight: windowHeight }"
    )
      .g-slide-bg__vid-wrapper(v-if="src")
        g-vid-w-control(
          :id="`g-slide-vid-${id}`"
          :src="src",
          :ext="ext",
          :poster="poster",
          :poster-ext="posterExt",
          :use-webm="true",
          :use-play="usePlay",
          :use-sound="useSound",
          :full-screen="true",
          :classname="`${classname}-vid`",
          :force-stop="!isEnter"
        )

      slot(name="bg")

  .last-trigger(
    v-if="isLast"
    :ref="`g-slide-last-trigger-${id}`"
    :style="{ height: windowHeight }"
  )
  .g-slide-content(
    :ref="`g-slide-content-${id}`"
    :class="{ 'g-slide-content--active': isEnter, 'g-slide-content--last': isLast }"
    :style="{ minHeight: windowHeight }"
  )
    slot(name="content")
</template>

<script>
import GVidWControl from '@/components/g-vid-w-control.vue';
import { linearIntersectionObserver } from '@/assets/js/observer.js';
import { getWindowHeight } from '@/assets/mixins.js';

export default {
  name: 'g-slide',
  mixins: [getWindowHeight],
  components: {
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
    theme: {
      type: String,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
    },
    ext: {
      type: String,
      default: 'mp4',
    },
    poster: {
      type: String,
    },
    posterExt: {
      type: String,
    },
    useWebm: {
      type: Boolean,
      default: false,
    },
    usePlay: {
      type: Boolean,
      default: true,
    },
    useSound: {
      type: Boolean,
      default: true,
    },
    forceStop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isEnter: false,
      isContentEnter: false,
    };
  },
  mounted() {
    if (this.isLast) {
      linearIntersectionObserver(
        this.$refs[`g-slide-last-trigger-${this.id}`],
        this.handleEnter,
        this.handleLeave
      );
    } else {
      linearIntersectionObserver(
        this.$refs[`g-slide-${this.id}`],
        this.handleEnter,
        this.handleLeave
      );

      linearIntersectionObserver(
        this.$refs[`g-slide-content-${this.id}`],
        () => {
          this.isContentEnter = true;
        },
        () => {
          this.isContentEnter = false;
        }
      );
    }

    // get window height
    this.addResizeHandler();
  },
  destroyed() {
    this.removeResizeHandler();
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
.g-slide {
  .last-trigger {
    opacity: 0;
    pointer-events: none;
  }
}
.g-slide-bg-wrapper {
  &--last {
    min-height: auto;
  }
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
    pointer-events: all;
  }

  &::before {
    content: '';
    z-index: 3;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    opacity: 0;
    transition: 0.5s ease-in-out;
    pointer-events: none;
  }

  &--fade-in {
    &::before {
      opacity: 1;
    }
  }

  &__vid-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

.g-slide-content {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 600px;
  z-index: 2;
  color: $font-color-light;

  @include rwd-min(md) {
    margin-bottom: 100vh;
  }

  &--last {
    margin-bottom: 0;
    background-color: $bg-white;
    color: $font-color;
  }
}
</style>
