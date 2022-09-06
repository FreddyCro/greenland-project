<template lang="pug">
.g-svg-chart
  img(:src="src", :alt="alt")
</template>

<script>
export default {
  name: 'g-svg-chart',
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

<style></style>
