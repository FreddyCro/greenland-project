<template>
  <a
    class="gl-anchor"
    :href="target"
    @click="sendGA({ item: { category: 'anchor', action: 'click', label: target}})"
  >
    <div class="gl-anchor__title" v-html="text" />
    <svg
      class="gl-anchor__btn"
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="33" cy="33" r="27.5" />
      <path
        d="M27 29.8662L32.8664 35.7326L38.7327 29.8662"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<script>
import { sendGa } from '@/assets/mixins';

export default {
  name: 'anchor-btn',
  mixins: [sendGa],
  props: {
    text: {
      type: String,
    },
    target: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.gl-anchor {
  @include reset-btn;

  text-align: center;
  color: $font-color;

  &__title {
    margin-bottom: $spacing-3;
    line-height: 2;

    span {
      display: inline-block;
    }
  }

  &__title,
  circle,
  path {
    transition: 0.15s ease-in-out;
  }

  circle {
    stroke: #404040;
  }

  path {
    stroke: #404040;
  }

  &:hover {
    .gl-anchor__title {
      color: $g-blue-1;
    }

    circle {
      fill: $g-blue-1;
      stroke: $g-blue-1;
      transform: scale(1.1);
      transform-origin: center center;
    }

    path {
      stroke: #ffffff;
    }
  }
}
</style>
