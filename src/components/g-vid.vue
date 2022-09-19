<template>
  <video
    v-if="src"
    :ref="id"
    :id="id"
    class="g-vid"
    :class="classname || ''"
    playsinline
    :autoplay="isPlaying ? false : true"
    loop
    type="video/mp4"
    :muted="$store.state.sound ? false : true"
    :poster="rwdSrcPoster"
    :preload="preload"
    :style="style"
  >
    <source v-if="useWebm" :src="rwdSrcWebm" type="video/webm" />
    <source :src="rwdSrc" type="video/mp4" />
  </video>
</template>

<script>

export default {
  name: 'g-vid',
  props: {
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
      default: 'jpg',
    },
    id: {
      type: String,
    },
    classname: {
      type: String,
    },
    useWebm: {
      type: Boolean,
      default: false,
    },
    preload: {
      type: String,
      default: 'auto',
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
    isPlaying: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      video: null,
    };
  },
  computed: {
    rwdSrc() {
      if (!this.$store.state.device) return '';
      return `${this.src}_${this.$store.state.device || ''}.${this.ext}`;
    },
    rwdSrcWebm() {
      if (!this.$store.state.device) return '';
      if (!this.useWebm) return '';

      return `${this.src}_${this.$store.state.device || ''}.webm`;
    },
    rwdSrcPoster() {
      if (!this.$store.state.device) return '';
      return `${this.poster}_${this.$store.state.device || ''}.${
        this.posterExt
      }`;
    },
    style() {
      if (!this.fullScreen) return {};

      const style = { height: this.$store.state.fullVideoHeight };
      return style;
    },
  },
  watch: {
    rwdSrc: {
      handler() {
        this.video.load();
        if (this.isPlaying) this.video.play();
        else this.video.pause();
      },
    },
    isPlaying: {
      handler(value) {
        if (value) this.video.play();
        else this.video.pause();
      },
    },
  },
  mounted() {
    this.video = this.$refs[this.id];
  },
};
</script>

<style lang="scss">
.g-vid {
  width: 100%;
  max-width: 100%;
}
</style>
