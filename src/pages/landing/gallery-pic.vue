<template lang="pug">
.gallery-pic
  .gallery-pic__content-wrapper
    .gallery-pic__content
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
  },
  components: {
    GPic,
  },
};
</script>

<style lang="scss">
.gallery-pic {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__content-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 $spacing-2 $spacing-2 $spacing-2;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__text {
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
    transition: 0.333s ease-in-out;

    &:hover {
      opacity: 0.8;
      background-color: rgba($color: #285f92, $alpha: 0.6);
    }
  }

  &__img {
    img {
      position: relative;
      height: 100%;
      max-width: none;
    }
  }
}
</style>
