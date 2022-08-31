<template lang="pug">
.g-footer-logo
  .g-footer-logo__logo-container
    img.g-footer-logo__logo(
      v-for="logo, index in logos"
      :key="`footer-logo-${index}`"
      :src="logo.src"
      :alt="logo.alt"
    )

  p.g-footer-logo__text(v-html="str.footerNote")
</template>

<script>
import str from '@/assets/string/common.json';

export default {
  name: 'g-footer-logo',
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
    };
  },
};
</script>

<style lang="scss">
.g-footer-logo {
  text-align: center;
}
</style>
