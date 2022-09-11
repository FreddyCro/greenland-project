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
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: 16px;
    color: $bg-white;
    font-family: 'Noto Serif TC', 'Noto Sans TC', 'Microsoft JhengHei', Roboto,
      sans-serif;
    writing-mode: vertical-lr;
    opacity: 0.8;
    background-color: rgba($color: #285f92, $alpha: 0.6);

    @include rwd-min(md) {
      font-size: 42px;
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include rwd-min(sm) {
      position: absolute;
      left: 0;
      top: 0;
      color: $bg-white;
    }
  }
}
</style>
