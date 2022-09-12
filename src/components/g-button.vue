<template lang="pug">
button.g-button(:class="classname || ''")
  span(v-html="text")
  span.g-button__arrow
    svg(
      width="11"
      height="8"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    )
      path(d="M1 7C0.447715 7 5.3647e-08 7.44772 0 8C-5.3647e-08 8.55228 0.447715 9 1 9L1 7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928933C14.9526 0.538409 14.3195 0.538409 13.9289 0.928933C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9L21 9L21 7L1 7L1 9Z")
</template>

<script>
export default {
  name: 'g-button',
  props: {
    text: {
      type: String,
      default: '',
    },
    classname: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.g-button {
  @include reset-btn;

  position: relative;
  height: 50px;
  padding: 0 $spacing-7;
  color: $font-color;
  border-radius: 30px;
  border: solid 1px $font-color;
  transition: 0.15s ease-in-out;

  /* &:hover {
    .g-button__arrow {
      transform: translate($spacing-1, -50%);
    }
  } */

  &__arrow {
    position: absolute;
    right: $spacing-3;
    top: 50%;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    transition: 0.15s ease-in-out;

    path {
      fill: $font-color;
    }
  }
}
</style>
