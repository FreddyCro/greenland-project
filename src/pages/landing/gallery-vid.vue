<template lang="pug">
.gallery-vid
  .gallery-vid__content
    video(
      playsinline
      autoplay
      loop
      type="video/mp4"
      muted
      :poster="poster"
    )
      source(:src="src")
    .gallery-vid__text(v-html="text")
</template>

<script>
export default {
  name: 'gallery-vid',
  props: {
    src: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.gallery-vid {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @include rwd-min(sm) {
    position: absolute;
    left: 0;
    top: 0;
  }

  &__content {
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
    writing-mode: vertical-lr;
    opacity: 0;
    transition: 0.333s ease-in-out;

    &:hover {
      opacity: 0.8;
      background-color: rgba($color: #285f92, $alpha: 0.6);
    }
  }

  video {
    @include rwd-min(sm) {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      color: $bg-white;
    }
  }
}
</style>
