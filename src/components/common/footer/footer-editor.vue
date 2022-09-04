<template lang="pug">
section.footer-editor
  .footer-editor__item(
    v-for="item, index in data"
    :key="`editor-item-${index}`"
  )
    .footer-editor__item-title(v-text="item.title")
    .footer-editor__item-members
      span(
        v-for="member, indexMember in item.members"
        :key="`editor-member-${indexMember}`"
        v-text="member"
      )
</template>

<script>
export default {
  name: 'footer-editor',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/_nmd-mixins';

.footer-editor {
  margin: 0 auto;

  &__item {
    position: relative;
    width: 100%;
    display: flex;
  }

  &__item-title,
  &__item-members {
    flex-shrink: 0;
    margin-bottom: 0;
    color: #7b7a7a;
    font-size: 0.875rem;
    line-height: 1.5;

    @include pc {
      font-size: 1rem;
    }

    &:first-child {
      width: 45%;
      text-align: right;
      padding-right: 10px;

      @include pc {
        width: 50%;
      }
    }

    &:last-child {
      width: 55%;
      text-align: left;
      padding-left: 10px;

      @include pc {
        width: 50%;
      }
    }

    span {
      display: block;
    }
  }
}

br {
  @include pc {
    display: none;
  }
}
</style>
