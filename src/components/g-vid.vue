<template>
  <video
    v-if="src"
    :ref="id"
    :id="id"
    :class="`g-vid ${classname}`"
    playsinline
    autoplay
    loop
    type="video/mp4"
    muted
    :poster="poster ? `${poster}_${$store.state.device}.${posterExt}` : ''"
  >
    <source :src="rwdSrc" />
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
  },
  computed: {
    rwdSrc() {
      return `${this.src}_${this.$store.state.device || ''}.${this.ext}`;
    },
  },
  watch: {
    rwdSrc: {
      handler() {
        this.$refs[this.id].load();
        this.$refs[this.id].play();
      },
    },
  },
};
</script>

<style lang="scss">
.g-vid {
  max-width: 100%;
}
</style>
