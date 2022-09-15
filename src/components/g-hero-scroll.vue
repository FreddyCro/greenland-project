<template>
  <div class="g-hero-scroll" :class="{'g-hero-scroll--fade-out': shouldFadeOut}">
    <div class="g-hero-scroll__text">{{ str.heroReadMore }}</div>
    <div class="g-hero-scroll__line"></div>
  </div>
</template>

<script>
import debounce from 'debounce';
import str from '@/assets/string/common.json';

export default {
  name: 'g-hero-scroll',
  props: {
    fadeOut: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      str,
      shouldFadeOut: false,
    };
  },
  mounted() {
    if (this.fadeOut) {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    }
  },
  destroyed() {
    if (this.fadeOut) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll: debounce(function () {
      if (window.scrollY > 0) {
        this.shouldFadeOut = true;
      } else {
        this.shouldFadeOut = false;
      }
    }, 100),
  },
};
</script>

<style lang="scss">
.g-hero-scroll {
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  transition: .25s ease-in-out;

  &--fade-out {
    opacity: 0;
  }

  &__text {
    @include general-font-smaller;

    margin-bottom: $spacing-2;
    color: $bg-white;
    font-weight: $font-weight-thin;
  }

  &__line {
    width: 1px;
    height: 116px;
    background-color: $footer-gray;
  }
}
</style>
