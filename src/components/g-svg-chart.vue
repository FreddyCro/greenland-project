<template lang="pug">
.g-svg-chart
  g-pic(
    :src="src"
    ext="svg"
    :use2x="false"
    :use3x="false"
    :webp="false"
  )
</template>

<script>
import GPic from '@/components/g-pic.vue';
export default {
  name: 'g-svg-chart',
  components: {
    GPic,
  },
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
};
</script>
