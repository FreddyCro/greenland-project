<template lang="pug">
.gallery-vid
  video(
    playsinline
    autoplay
    loop
    type="video/mp4"
    muted
    :poster="poster"
  )
    source(:src="src")
  .gallery-pic__text(v-html="text")
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
  height: calc($gallery-pic-height * 2);
  overflow: hidden;

  @include rwd-min(sm) {
    height: calc($gallery-pic-height-sm * 2);
  }

  @include rwd-min(md) {
    height: calc($gallery-pic-height-md * 2);
  }

  video {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    color: $bg-white;
  }

  &__text {
    writing-mode: vertical-rl;
  }
}
</style>
