<template>
  <picture class="g-vid">
    <template v-for="(media, index) in parsedMedia">
      <source
        v-if="webp"
        :srcset="parsedWebpSrcset[index]"
        :media="media"
        type="image/webp"
        :key="`webp-${media}`"
      />
      <source
        v-if="srcset.length > 0"
        :srcset="parsedSrcset[index]"
        :media="media"
        :key="`normal-${media}`"
      />
    </template>
    <img :src="`${src}_pc.${ext}`" :alt="alt" :loading="loading" />
  </picture>
</template>

<script>
export default {
  name: 'GPic',
  props: {
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: Array,
    },
    ext: {
      type: String,
      default: 'jpg',
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    alt: {
      type: String,
      required: true,
    },
    loading: {
      type: String,
      default: 'lazy',
    },
    use2x: {
      type: Boolean,
      default: true,
    },
    use3x: {
      type: Boolean,
      default: true,
    },
    webp: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    parsedMedia() {
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;

      const media = [];

      if (this.srcset.includes('mob')) {
        media.push('(min-width: 768px)');
      }

      if (this.srcset.includes('pad')) {
        media.push('(min-width: 1024px)');
      }

      return media;
    },
    parsedSrcset() {
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;

      const srcset = [];

      if (this.srcset.includes('mob')) {
        let mob = `${this.src}_mob.${this.ext} 1x`;

        if (this.use2x) {
          mob += `, ${this.src}_mob@2x.${this.ext} 2x`;
        }

        if (this.use3x) {
          mob += `, ${this.src}_mob@3x.${this.ext} 3x`;
        }

        srcset.push(mob);
      }

      if (this.srcset.includes('pad')) {
        let pad = `${this.src}_pad.${this.ext} 1x`;

        if (this.use2x) {
          pad += `, ${this.src}_pad@2x.${this.ext} 2x`;
        }

        if (this.use3x) {
          pad += `, ${this.src}_pad@3x.${this.ext} 3x`;
        }

        srcset.push(pad);
      }

      if (this.srcset.includes('pc')) {
        let pc = `${this.src}_pc.${this.ext} 1x`;

        if (this.use2x) {
          pc += `, ${this.src}_pc@2x.${this.ext} 2x`;
        }

        if (this.use3x) {
          pc += `, ${this.src}_pc@3x.${this.ext} 3x`;
        }

        srcset.push(pc);
      }

      return srcset;
    },
    parsedWebpSrcset() {
      if (!this.webp) return;
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;

      return [];
    },
  },
};
</script>
