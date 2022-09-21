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
import { sendGA } from '@/assets/mixins';
import { linearIntersectionObserver } from '@/assets/js/observer.js';

export default {
  name: 'g-vid',
  mixins: [sendGA],
  props: {
    videoName: {
      type: String,
    },
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
      default: false,
    },
    useObserver: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      video: null,
      observerPlaying: false,
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
    observerPlaying: {
      handler(value) {
        if (value) this.video.play();
        else this.video.pause();
      },
    },
  },
  mounted() {
    this.video = this.$refs[this.id];

    if (this.useObserver) {
      this.video.onloadstart = () => {
        linearIntersectionObserver(
          this.video,
          () => {
            this.observerPlaying = true;
          },
          () => {
            this.observerPlaying = false;
          }
        );
      };
    }

    // handle GA
    let isDone = false;
    let stageTime = 0;
    const progressGA = (currentTime, duration) => {
      const gap = duration / 10;
      const newStageTime = Math.ceil(currentTime / gap);

      if (newStageTime > stageTime) {
        stageTime = newStageTime;

        if (stageTime === 10) {
          isDone = true;
        }

        this.sendGA({
          item: {
            category: 'video_percent',
            action: 'play',
            label: `${this.videoName || this.id}_${stageTime * 10}%`,
          },
        });
      }
    };

    this.video.ontimeupdate = (e) => {
      if (!this.isPlaying && !this.observerPlaying) return;
      if (isDone) return;
      progressGA(e.target.currentTime, e.target.duration);
    };
  },
};
</script>

<style lang="scss">
.g-vid {
  width: 100%;
  max-width: 100%;
}
</style>
