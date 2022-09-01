<template lang="pug">
#app.u-article.greenland
  //- hero
  section.gf-hero

  //- section intro
  section.u-section.gf-intro
    h1(v-html="str.introTitle")
    h2(v-html="str.introSubTitle")
    p(
      v-for="p, index in str.introText1"
      :key="`gf-introText1-${index}`"
      v-html="p"
    )
    p(
      v-for="p, index in str.introText2"
      :key="`gf-introText2-${index}`"
      v-html="p"
    )
    p(
      v-for="p, index in str.introText3"
      :key="`gf-introText3-${index}`"
      v-html="p"
    )

  //- section skill
  section.u-section.gf-skill
    h2(v-html="str.skillTitle")
    p(
      v-for="p, index in str.skillText1"
      :key="`gf-skillText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.skillImg1Caption"
      classname="gf-skill-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.skillText2"
      :key="`gf-skillText2-${index}`"
      v-html="p"
    )

  //- section farm
  section.u-section.gf-farm
    h2(v-html="str.farmTitle")
    p(
      v-for="p, index in str.farmText1"
      :key="`gf-farmText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.farmImg1Caption"
      classname="gf-farm-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.farmText2"
      :key="`gf-farmText2-${index}`"
      v-html="p"
    )

  //- section farm weather
  section.u-section.gf-farm-weather
    h3(v-html="str.farmWeatherTitle")
    p(
      v-for="p, index in str.farmWeatherText1"
      :key="`gf-farmWeatherText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.farmWeatherImg1Caption"
      classname="gf-farmWeather-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.farmWeatherText2"
      :key="`gf-farmWeatherText2-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.farmWeatherImg2Caption"
      classname="gf-farmWeather-img2"
      :webp="true"
    )

  //- section farm sheep
  section.u-section.gf-farm-sheep
    h3(v-html="str.farmSheepTitle")
    p(
      v-for="p, index in str.farmSheepText1"
      :key="`gf-farmSheepText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.farmSheepImg1Caption"
      classname="gf-farmSheep-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.farmSheepText2"
      :key="`gf-farmSheepText2-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.farmSheepImg2Caption"
      classname="gf-farmSheep-img2"
      :webp="true"
    )
    p(
      v-for="p, index in str.farmSheepText3"
      :key="`gf-farmSheepText3-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.farmSheepImg3Caption"
      classname="gf-farmSheep-img3"
      :webp="true"
    )
    p(
      v-for="p, index in str.farmSheepText4"
      :key="`gf-farmSheepText4-${index}`"
      v-html="p"
    )

  //- section sale
  section.u-section.gf-sale
    h2(v-html="str.saleTitle")
    p(
      v-for="p, index in str.saleText1"
      :key="`gf-saleText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.saleImg1Caption"
      classname="gf-sale-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.saleText2"
      :key="`gf-saleText2-${index}`"
      v-html="p"
    )

  //- section sale creative
  section.u-section.gf-sale-creative
    h3(v-html="str.saleCreativeTitle")
    p(
      v-for="p, index in str.saleCreativeText1"
      :key="`gf-saleCreativeText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.saleCreativeImg1Caption"
      classname="gf-sale-creative-img1"
      :webp="true"
    )
    p(
      v-for="p, index in str.saleCreativeText2"
      :key="`gf-saleCreativeText2-${index}`"
      v-html="p"
    )

  //- section sale culture
  section.u-section.gf-sale-culture
    h3(v-html="str.saleCultureTitle")
    p(
      v-for="p, index in str.saleCultureText1"
      :key="`gf-saleCultureText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/test"
      ext="jpg"
      :alt="str.saleSelfImg1Caption"
      classname="gf-sale-culture-img1"
      :webp="true"
    )

  //- section sale self
  section.u-section.gf-sale-self
    h3(v-html="str.saleSelfTitle")
    p(
      v-for="p, index in str.saleSelfText1"
      :key="`gf-saleSelfText1-${index}`"
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
import str from '@/assets/string/farming.json';

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
