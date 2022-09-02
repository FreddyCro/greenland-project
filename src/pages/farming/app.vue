<template lang="pug">
#app.u-article.greenland
  //- hero
  section.gf-hero
    .gf-hero-vid-wrapper
      g-vid(
        src="../vid/farming/greenland_farming_video1",
        ext="mp4",
        poster="../img/farming/greenland_farming_preview1",
        poster-ext="webp"
        id="gf-hero-vid",
        classname="gf-hero-vid"
      )

  //- section intro
  section.u-section.gf-intro
    h1(v-html="str.introTitle")
    h2(v-html="str.introSubTitle")
    p(
      v-for="p, index in str.introText1"
      :key="`gf-introText1-${index}`"
      v-html="p"
    )
    .u-full-bg-container
      g-pic(
        src="../img/farming/greenland_farming_pic2"
        ext="jpg"
        :alt="str.introTitle"
        classname="gc-intro-img-1"
        :webp="true"
      )
    p(
      v-for="p, index in str.introText2"
      :key="`gf-introText2-${index}`"
      v-html="p"
    )
    .u-full-bg-container
      g-vid(
        src="../vid/farming/greenland_farming_video3",
        ext="mp4",
        poster="../img/farming/greenland_farming_preview3",
        poster-ext="webp"
        id="gf-intro-vid-1",
        classname="gf-intro-vid-1"
      )
    p(
      v-for="p, index in str.introText3"
      :key="`gf-introText3-${index}`"
      v-html="p"
    )

  //- section skill
  section.u-section.gf-skill
    .u-full-bg-container
      g-pic(
        src="../img/farming/greenland_farming_pic4_1"
        ext="jpg"
        :alt="str.skillImg1Caption"
        classname="gf-skill-img1"
        :webp="true"
      )
    h2(v-html="str.skillTitle")
    p(
      v-for="p, index in str.skillText1"
      :key="`gf-skillText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/greenland_farming_pic4_3"
      ext="jpg"
      :alt="str.farmImg1Caption"
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
    .u-full-bg-container
      g-pic(
        src="../img/farming/greenland_farming_pic5_1"
        ext="jpg"
        :alt="str.farmWeatherImg1Caption"
        classname="gf-farm-img1"
        :webp="true"
      )
    h2(v-html="str.farmTitle")
    p(
      v-for="p, index in str.farmText1"
      :key="`gf-farmText1-${index}`"
      v-html="p"
    )
    h1 here is a chart
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
      src="../img/farming/greenland_farming_pic5_3"
      ext="jpg"
      :alt="str.farmWeatherImg1Caption"
      classname="gf-farmWeather-img2"
      :webp="true"
    )
    p(
      v-for="p, index in str.farmWeatherText2"
      :key="`gf-farmWeatherText2-${index}`"
      v-html="p"
    )
    .flourish-embed.flourish-chart(data-src="visualisation/10985230")
    p.caption(v-html="str.farmWeatherImg2Caption")

  //- section farm sheep
  section.u-section.gf-farm-sheep
    h3(v-html="str.farmSheepTitle")
    p(
      v-for="p, index in str.farmSheepText1"
      :key="`gf-farmSheepText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/greenland_farming_pic5_5"
      ext="jpg"
      :alt="str.farmSheepImg1Caption"
      classname="gf-farmSheep-img1"
      :webp="true"
    )
    p.caption(v-html="str.farmSheepImg1Caption")
    p(
      v-for="p, index in str.farmSheepText2"
      :key="`gf-farmSheepText2-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/greenland_farming_pic5_6"
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
      src="../img/farming/greenland_farming_chart5_7"
      ext="svg"
      :alt="str.farmSheepImg3Caption"
      classname="gf-farmSheep-img3"
      :webp="false"
      :no2x="true"
      :no3x="true"
    )
    p.caption(v-html="str.farmSheepImg3Caption")
    p(
      v-for="p, index in str.farmSheepText4"
      :key="`gf-farmSheepText4-${index}`"
      v-html="p"
    )

  //- section sale
  section.u-section.gf-sale
    .u-full-bg-container
      g-pic(
        src="../img/farming/greenland_farming_pic6_1"
        ext="jpg"
        :alt="str.saleTitle"
        classname="gf-sale-img"
        :webp="true"
      )
    h2(v-html="str.saleTitle")
    p(
      v-for="p, index in str.saleText1"
      :key="`gf-saleText1-${index}`"
      v-html="p"
    )
    g-pic(
      src="../img/farming/greenland_farming_pic6_2"
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
    .flourish-embed.flourish-chart(data-src="visualisation/10995303")
    p.caption(v-html="str.saleCreativeImg1Caption")
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
      src="../img/farming/greenland_farming_pic6_3"
      ext="jpg"
      :alt="str.saleSelfImg1Caption"
      classname="gf-sale-culture-img1"
      :webp="true"
    )
    p.caption(v-html="str.saleSelfImg1Caption")

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
import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import GSeries from '@/components/g-series.vue';
import GFooterLogo from '@/components/g-footer-logo.vue';
import FooterEditor from '@/components/common/footer-editor.vue';
import str from '@/assets/string/farming.json';

export default {
  name: 'App',
  components: {
    GPic,
    GVid,
    GVidWControl,
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
