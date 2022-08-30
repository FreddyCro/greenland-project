<template lang="pug">
.gallery-pic(:class="picClass")
  g-pic(
    :src="src"
    ext="jpg"
    :alt="text"
    classname="gallery-pic__img"
    :webp="true"
    :use-prefix="false",
  )
  .gallery-pic__text(v-html="text")

</template>

<script>
import GPic from '@/components/g-pic.vue';

export default {
  name: 'gallery-pic',
  props: {
    src: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    isTitle: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: '1',
    },
  },
  components: {
    GPic,
  },
  computed: {
    picClass() {
      return {
        'gallery-pic--title': this.isTitle,
        'gallery-pic--w1': this.width === '1',
        'gallery-pic--w2': this.width === '2',
        'gallery-pic--w3': this.width === '3',
        'gallery-pic--h1': this.height === '1',
        'gallery-pic--h2': this.height === '2',
        'gallery-pic--h3': this.height === '3',
      };
    },
  },
};
</script>

<style lang="scss">
.gallery-pic {
  position: relative;
  width: 100%;
  overflow: hidden;

  &--h1 {
    height: $gallery-pic-height;

    @include rwd-min(sm) {
      height: $gallery-pic-height-sm;
    }

    @include rwd-min(md) {
      height: $gallery-pic-height-md;
    }
  }

  &--h2 {
    height: calc($gallery-pic-height * 2);

    @include rwd-min(sm) {
      height: calc($gallery-pic-height-sm * 2);
    }

    @include rwd-min(md) {
      height: calc($gallery-pic-height-md * 2);
    }
  }

  &--h3 {
    height: calc($gallery-pic-height * 3);

    @include rwd-min(sm) {
      height: calc($gallery-pic-height-sm * 3);
    }

    @include rwd-min(md) {
      height: calc($gallery-pic-height-md * 3);
    }
  }

  &__text {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $spacing-5;
    color: $bg-white;
    opacity: 0;
    transition: 0.333s ease-in-out;

    &:hover {
      opacity: 0.8;
      /* background-color: $black-1; */
    }
  }

  &__img {
    img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
