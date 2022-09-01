<template lang="pug">
#app.u-article.greenland
  //- hero
  section.gc-hero
    .gc-hero-vid-wrapper
      g-vid(
        src="../vid/climate/greenland_climate_video1",
        ext="mp4",
        poster="../img/climate/greenland_climate_preview1",
        poster-ext="webp"
        id="gc-hero-vid",
        classname="gc-hero-vid"
      )

  //- section intro
  section.u-section.gc-intro
    .u-container
      h1(v-html="str.introTitle")
      p(
        v-for="p, index in str.introSectionText"
        :key="`gc-introSectionText-${index}`"
        v-html="p"
      )

  .u-full-bg-container
    g-pic(
      src="../img/climate/greenland_climate_pic2"
      ext="jpg"
      alt=""
      classname="gc-intro-bg"
      :webp="true"
    )

  //- section 2
  section.u-section.gc-section2
    .u-container
      p(
        v-for="p, index in str.section2Text"
        :key="`gc-section2-${index}`"
        v-html="p"
      )
    .u-full-vid-container
      g-vid-w-control(
        src="../vid/climate/greenland_climate_video3",
        ext="mp4"
        poster="../img/climate/greenland_climate_preview3",
        poster-ext="webp"
        id="gc-vid3",
        classname="gc-vid3"
      )

  //- section transition
  section.u-section.gc-transition
    .u-container
      p(
        v-for="p, index in str.transitionText"
        :key="`gc-transition-${index}`"
        v-html="p"
      )

  //- section morten
  .u-full-img-container
    g-pic(
      src="../img/climate/greenland_climate_pic4_1"
      ext="jpg"
      alt=""
      classname="gc-morten-cover"
      :webp="true"
    )
  .u-wide-img-container
    p.caption(v-html="str.mortenCoverCaption")

  section.u-section.gc-morten
    .u-container
      h2(v-html="str.mortenTitle")
      p(
        v-for="p, index in str.mortenText"
        :key="`gc-morten-${index}`"
        v-html="p"
      )

  //- section collage
  .u-wide-img-container
    g-pic(
      src="../img/climate/test"
      ext="jpg"
      alt=""
      classname="gc-collage-img1"
      :webp="true"
    )
    p.caption(v-html="str.collageImg1Caption")

  .u-container
    //- section collage
    section.u-section.gc-collage
      h2(v-html="str.collageTitle")
      p(
        v-for="p, index in str.collageText1"
        :key="`gc-collageText1-${index}`"
        v-html="p"
      )

    //- section protection
    //- chart
    p.caption(v-html="str.protectionImg1Caption")
    section.u-section.gc-protection
      h2(v-html="str.protectionTitle")
      p(
        v-for="p, index in str.protectionText1" :key="`gc-protectionText1-${index}`"
        v-html="p"
      )
      g-pic(
        src="../img/climate/test"
        ext="jpg"
        :alt="str.protectionImg2Caption"
        classname="gc-protection-img1"
        :webp="true"
      )
      p.caption(v-html="str.protectionImg2Caption")
      p(
        v-for="p, index in str.protectionText2" :key="`gc-protectionText2-${index}`"
        v-html="p"
      )

    //- section jp
    section.u-section.gc-jp
      h2(v-html="str.jpTitle")
      p(
        v-for="p, index in str.jpText1" :key="`gc-jpText1-${index}`"
        v-html="p"
      )
      g-pic(
        src="../img/climate/test"
        ext="jpg"
        :alt="str.jpImg1Caption"
        classname="gc-jp-img1"
        :webp="true"
      )
      p(
        v-for="p, index in str.jpText2" :key="`gc-jpText2-${index}`"
        v-html="p"
      )
      g-pic(
        src="../img/climate/test"
        ext="jpg"
        :alt="str.jpImg2Caption"
        classname="gc-jp-img2"
        :webp="true"
      )

    //- section sea
    section.u-section.gc-sea
      h2(v-html="str.seaTitle")
      p(
        v-for="p, index in str.seaText1" :key="`gc-seaText1-${index}`"
        v-html="p"
      )
      g-pic(
        src="../img/climate/test"
        ext="jpg"
        :alt="str.seaImg1Caption"
        classname="gc-sea-img1"
        :webp="true"
      )

    //- section science
    section.u-section.gc-science
      h2(v-html="str.scienceTitle")
      p(
        v-for="p, index in str.scienceText1" :key="`gc-scienceText1-${index}`"
        v-html="p"
      )
      g-pic(
        src="../img/climate/test"
        ext="jpg"
        :alt="str.scienceImg1Caption"
        classname="gc-science-img1"
        :webp="true"
      )
      p(
        v-for="p, index in str.scienceText2" :key="`gc-scienceText2-${index}`"
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
import str from '@/assets/string/climate.json';

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

<style lang="scss" scoped>
.gc-hero {
}
.gc-hero-vid-wrapper {
}
</style>
