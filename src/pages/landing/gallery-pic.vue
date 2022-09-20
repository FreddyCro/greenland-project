<template lang="pug">
.gallery-pic(@click="sendGA({item: {category: 'collection', action: 'click', label: '圖說'}})")
  .gallery-pic__content
    g-pic(
      :src="src"
      ext="jpg"
      :alt="text"
      classname="gallery-pic__img"
      default=""
      :webp="true"
      :use-prefix="false",
    )
    
    .gallery-pic__text
      span(v-html="text")

</template>

<script>
import GPic from '@/components/g-pic.vue';
import { sendGa } from '@/assets/mixins';

export default {
  name: 'gallery-pic',
  mixins: [sendGa],
  props: {
    src: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  components: {
    GPic,
  },
};
</script>

<style lang="scss">
.gallery-pic {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @include rwd-min(sm) {
    position: absolute;
    left: 0;
    top: 0;
  }

  &:hover {
    .gallery-pic__text {
      background-color: rgba($color: #285f92, $alpha: 0.6);
      opacity: 1;

      span {
        transform: translateY(0);
      }
    }
  }

  &__content {
    width: 100%;
    height: 100%;
  }

  &__text {
    @include general-font-p;

    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $spacing-5;
    color: $bg-white;
    opacity: 0;
    pointer-events: none;
    transition: 0.333s ease-in-out;

    span {
      transform: translateY($spacing-5);
      transition: 0.333s ease-in-out;
    }
  }

  &__img {
    display: flex;

    img {
      @include rwd-min(sm) {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
