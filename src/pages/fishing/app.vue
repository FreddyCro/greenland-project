<template lang="pug">
#app.u-article.greenland
  //- hero
  section.gfi-hero

  //- section intro
  section.u-section.gfi-intro
    h1(v-html="str.introTitle")
    h2(v-html="str.introSubTitle")
    p(
      v-for="p, index in str.introText1"
      :key="`gfi-introText1-${index}`"
      v-html="p"
    )
    p(
      v-for="p, index in str.introText2"
      :key="`gfi-introText2-${index}`"
      v-html="p"
    )
    p(
      v-for="p, index in str.introText3"
      :key="`gfi-introText3-${index}`"
      v-html="p"
    )

  //- section ja
  section.u-section.gfi-ja
    h2(v-html="str.janTitle")
    p(
      v-for="p, index in str.janText1"
      :key="`gfi-janText1-${index}`"
      v-html="p"
    )

  //- section ja-before
  section.u-section.gfi-ja-before
    h3(v-html="str.janBeforeTitle")
    p(
      v-for="p, index in str.janBeforeText1"
      :key="`gfi-janBeforeText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.janBeforeImg1Caption"
      classname="gf-ja-before-img1"
      :webp="true"
    )

  //- section ja-protection
  section.u-section.gfi-ja-protection
    h3(v-html="str.janProtectionTitle")
    p(
      v-for="p, index in str.janProtectionText1"
      :key="`gfi-janProtectionText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.janProtectionImg1Caption"
      classname="gf-ja-protection-img1"
      :webp="true"
    )

  //- section crisis
  section.u-section.gfi-crisis
    h2(v-html="str.crisisTitle")
    p(
      v-for="p, index in str.crisisText1"
      :key="`gfi-crisisText1-${index}`"
      v-html="p"
    )

  //- section crisis-plastic
  section.u-section.gfi-crisis-plastic
    h3(v-html="str.crisisPlasticTitle")
    p(
      v-for="p, index in str.crisisPlasticText1"
      :key="`gfi-crisisPlasticText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.crisisPlasticImg1Caption"
      classname="gf-crisis-plastic-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.crisisPlasticText2"
      :key="`gfi-crisisPlasticText2-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.crisisPlasticImg2Caption"
      classname="gf-crisis-plastic-img2"
      :webp="true"
    )
    p(
      v-for="p, index in str.crisisPlasticText3"
      :key="`gfi-crisisPlasticText3-${index}`"
      v-html="p"
    )

  //- section crisis-ice
  section.u-section.gfi-crisis-ice
    h3(v-html="str.crisisIceTitle")
    p(
      v-for="p, index in str.crisisIceText1"
      :key="`gfi-crisisIceText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.crisisIceImg1Caption"
      classname="gf-crisis-ice-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.crisisIceText2"
      :key="`gfi-crisisIceText2-${index}`"
      v-html="p"
    )

  //- section warm
  section.u-section.gfi-warm
    h2(v-html="str.warmTitle")
    p(
      v-for="p, index in str.warmText1"
      :key="`gfi-warmText1-${index}`"
      v-html="p"
    )

  //- section warm-fish
  section.u-section.gfi-warm-fish
    h3(v-html="str.warmFishTitle")
    p(
      v-for="p, index in str.warmFishText1"
      :key="`gfi-warmFishText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.warmFishImg1Caption"
      classname="gf-warm-fish-img1"
      :webp="true"
    )

  //- section warm-warn
  section.u-section.gfi-warm-warn
    h3(v-html="str.warmWarnTitle")
    p(
      v-for="p, index in str.warmWarnText1"
      :key="`gfi-warmWarnText1-${index}`"
      v-html="p"
    )

  footer.gl-footer
  g-series(:list="str.seriesList")
  footer-editor
    div
      p(v-text="str.editorInterviewTitle")
      p(v-text="str.editorInterviewMembers")
    div
      p(v-text="str.editorProducerTitle")
      p(v-text="str.editorProducerMembers")
    div
      p(v-text="str.editorVisualTitle")
      p(v-text="str.editorVisualMembers")
    div
      p(v-text="str.editorEngineerTitle")
      p(v-text="str.editorEngineerMembers")
    div
      p(v-text="str.editorDirectorTitle")
      p(v-text="str.editorDirectorMembers")
    div
      p(v-text="str.editorGroupTitle")
      p(v-text="str.editorGroupMembers")
    div
      p
      p(v-text="str.editorReleaseDate")
  g-footer-logo
</template>

<script>
import GSeries from '@/components/g-series.vue';
import GFooterLogo from '@/components/g-footer-logo.vue';
import FooterEditor from '@/components/common/footer-editor.vue';
import str from '@/assets/string/fishing.json';

export default {
  name: 'App',
  components: {
    GSeries,
    GFooterLogo,
    FooterEditor,
  },
  data() {
    return {
      str,
    };
  },
};
</script>

<style lang="scss"></style>

<style lang="scss" scoped></style>
