<template>
  <div class="g-vid-w-control">
    <g-vid
      :src="src"
      :ext="ext"
      :poster="poster"
      :posterExt="posterExt"
      :id="id"
      :classname="classname"
    />

    <div class="g-vid-w-control__btns">
      <button class="g-vid-w-control__btn" @click="handlePlayClick">
        <img v-if="isPlaying" src="/img/icon/video_play_logo.svg" alt="play" />
        <img v-else src="/img/icon/video_pause_logo.svg" alt="paused" />
      </button>
      <button class="g-vid-w-control__btn" @click="handleMuteClick">
        <img
          v-if="$store.state.sound"
          src="/img/icon/video_turn_on_volume_logo.svg"
          alt="volume on"
        />
        <img
          v-else
          src="/img/icon/video_turn_off_volume_logo.svg"
          alt="volume off"
        />
      </button>
    </div>
  </div>
</template>

<script>
import GVid from '@/components/g-vid.vue';

export default {
  name: 'g-vid-w-control',
  components: {
    GVid,
  },
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
    },
    id: {
      type: String,
      required: true,
    },
    classname: {
      type: String,
    },
    usePlay: {
      type: Boolean,
      default: true,
    },
    useSound: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isPlaying: false,
      isMuted: false,
    };
  },
  methods: {
    handlePlayClick() {
      this.isPlaying = !this.isPlaying;
      const video = document.querySelector(`#${this.id}`);

      if (this.isPlaying) video.pause();
      else video.play();
    },
    handleMuteClick() {
      this.isMuted = !this.isMuted;

      // TODO: muted all sound video
    },
  },
};
</script>

<style lang="scss">
.g-vid-w-control {
  position: relative;

  &__btns {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__btn {
    @include reset-btn;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: $spacing-5;

    &:hover {
      background-color: #fff;
    }

    &:last-child {
      margin-left: 0;
    }
  }
}
</style>
