<template>
  <picture class="g-vid">
    <template v-for="(media, index) in parsedMedia">
      {# webp #}
      <source
        v-if="webp"
        :srcset="parsedWebpSrcset[index]"
        :media="media"
        type="image/webp"
        :key="`webp-${media}`"
      />

      {# jpg/png #}
      <source
        v-if="srcset.length > 0"
        :srcset="parsedSrcset[index]"
        :media="media"
        :key="`normal-${media}`"
      />
    </template>
    <img src="{{ src }}" alt="{{ alt }}" :loading="loading" />
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
  compouted: {
    parsedMedia() {
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;

      return this.srcset.map((item) => {
        return `(min-width: ${item.size}px)`;
      });
    },
    parsedSrcset() {
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;

      return this.srcset.map((item) => {
        // TODO: @2x and @3x
        return `${item.src}.${this.ext}`;
      });

      // return this.srcset.map((item) => {
      //   return `${item.src}-${item.size}.${this.ext} ${item.size}w`;
      // }).join(', ');
    },
    parsedWebpSrcset() {
      if (!this.webp) return;
      if (!this.srcset) return;
      if (this.srcset.length === 0) return;
    },
  },
};
</script>
