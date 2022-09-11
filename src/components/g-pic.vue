<template>
  <picture class="g-pic" :class="classname || ''">
    <template v-for="(media, index) in parsedMedia">
      <source
        v-if="webp"
        :media="media"
        :srcset="parsedWebpSrcset[index]"
        type="image/webp"
        :key="`webp-${media}`"
      />
      <source
        v-if="srcset.length > 0"
        :media="media"
        :srcset="parsedSrcset[index]"
        :key="`normal-${media}`"
      />
    </template>
    <img :src="`${src}_pc.${ext}`" :alt="alt" :loading="loading" />
  </picture>
</template>

<script>
const handeImage = ({ src, srcset, ext, use2x, use3x, usePrefix }) => {
  // console.log(src, srcset, ext);
  if (!srcset) return;
  if (srcset.length === 0) return;

  const srcsetList = [];

  if (srcset.includes('pc')) {
    let pc = `${src}${usePrefix ? '_pc' : ''}.${ext} 1x`;

    if (use2x) {
      pc += `, ${src}${usePrefix ? '_pc' : ''}@2x.${ext} 2x`;
    }

    if (use3x) {
      pc += `, ${src}${usePrefix ? '_pc' : ''}@3x.${ext} 3x`;
    }

    srcsetList.push(pc);
  }

  if (srcset.includes('pad')) {
    let pad = `${src}${usePrefix ? '_pad' : ''}.${ext} 1x`;

    if (use2x) {
      pad += `, ${src}${usePrefix ? '_pad' : ''}@2x.${ext} 2x`;
    }

    if (use3x) {
      pad += `, ${src}${usePrefix ? '_pad' : ''}@3x.${ext} 3x`;
    }

    srcsetList.push(pad);
  }

  if (srcset.includes('mob')) {
    let mob = `${src}${usePrefix ? '_mob' : ''}.${ext} 1x`;

    if (use2x) {
      mob += `, ${src}${usePrefix ? '_mob' : ''}@2x.${ext} 2x`;
    }

    if (use3x) {
      mob += `, ${src}${usePrefix ? '_mob' : ''}@3x.${ext} 3x`;
    }

    srcsetList.push(mob);
  }

  return srcsetList;
};

export default {
  name: 'GPic',
  props: {
    id: {
      type: String,
    },
    classname: {
      type: String,
    },
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: Array,
      default: () => ['mob', 'pad', 'pc'],
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
    usePrefix: {
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

      if (this.srcset.includes('pc')) {
        media.push('(min-width: 1024px)');
      }

      if (this.srcset.includes('pad')) {
        media.push('(min-width: 768px)');
      }

      if (this.srcset.includes('mob')) {
        media.push('');
      }

      return media;
    },
    parsedSrcset() {
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;

      return handeImage({
        src: this.src,
        srcset: this.srcset,
        ext: this.ext,
        use2x: this.use2x,
        use3x: this.use3x,
        usePrefix: this.usePrefix,
      });
    },
    parsedWebpSrcset() {
      if (!this.webp) return;
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;

      return handeImage({
        src: this.src,
        srcset: this.srcset,
        ext: 'webp',
        use2x: this.use2x,
        use3x: this.use3x,
        usePrefix: this.usePrefix,
      });
    },
  },
};
</script>
