<template lang="pug">
.g-quote
  h2(v-html="text")
</template>

<script>
export default {
  name: 'g-quote',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.g-quote {
  margin-top: $spacing-5;
  margin-bottom: $spacing-10;

  h2 {
    font-size: 28px;
    color: #808080;
    font-weight: $font-weight-semibold;

    @include rwd-min(sm) {
      font-size: 32px;
    }
  }
}
</style>
