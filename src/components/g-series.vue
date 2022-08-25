<template lang="pug">
.g-series
  h2(v-html="str.seriesTitle")
  a(:href="str.seriesLandingUrl")
    p(v-html="str.seriesLandingTitle")
    button(v-html="str.seriesButtonText")
  a(:href="str.seriesClimateUrl")
    p(v-html="str.seriesClimateTitle")
    button(v-html="str.seriesButtonText") 
  a(:href="str.seriesFishingUrl")
    p(v-html="str.seriesFishingTitle")
    button(v-html="str.seriesButtonText")
  a(:href="str.seriesFarmingUrl")
    p(v-html="str.seriesFarmingTitle")
    button(v-html="str.seriesButtonText")
  a(:href="str.seriesLivingUrl")
    p(v-html="str.seriesLivingTitle")
    button(v-html="str.seriesButtonText")
</template>

<script>
import str from '@/assets/string/series.json';

export default {
  name: 'g-series',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      str,
    };
  },
};
</script>
