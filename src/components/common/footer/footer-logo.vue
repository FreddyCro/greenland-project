<template lang="pug">
.g-footer-logo
  .u-container
    .g-footer-logo__logo-container.show-mob
      img.g-footer-logo__logo(
        v-for="logo, index in logosMob"
        :key="`footer-logo-${index}`"
        :src="`${PUBLIC_PATH}${logo.src}`"
        :alt="logo.alt"
      )
    .g-footer-logo__logo-container.hide-mob
      img.g-footer-logo__logo(
        v-for="logo, index in logos"
        :key="`footer-logo-${index}`"
        :src="`${PUBLIC_PATH}${logo.src}`"
        :alt="logo.alt"
      )

    p.smaller.g-footer-logo__text(v-html="str.footerNote")
</template>

<script>
import str from '@/assets/string/common.json';
import { env } from '@/assets/mixins';

export default {
  name: 'g-footer-logo',
  mixins: [env],
  data() {
    return {
      str,
      logos: [
        {
          src: 'img/logo_oright.svg',
          alt: '歐萊德',
        },
        {
          src: 'img/logo_udn.svg',
          alt: '聯合報系',
        },
        {
          src: 'img/logo_visionproject.svg',
          alt: '願景工程',
        },
      ],
      logosMob: [
        {
          src: 'img/logo_udn.svg',
          alt: '聯合報系',
        },
        {
          src: 'img/logo_oright.svg',
          alt: '歐萊德',
        },
        {
          src: 'img/logo_visionproject.svg',
          alt: '願景工程',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.g-footer-logo {
  &__logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-5;

    @include rwd-min(sm) {
      flex-direction: row;
      margin-bottom: $spacing-3;
    }
  }

  &__logo {
    width: 120px;

    @include rwd-max(xs) {
      margin-bottom: $spacing-5;
    }
  }

  &__text {
    color: #808080;
    font-size: $p-smaller;
  }
}
</style>
