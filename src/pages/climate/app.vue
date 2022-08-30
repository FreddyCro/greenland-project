<template lang="pug">
#app.u-article.greenland
  //- hero
  section.gc-hero
    .gc-hero-vid-wrapper
      g-vid(
        src="/vid/climate/greenland_climate_video1",
        ext="mp4",
        poster="/img/climate/greenland_climate_preview1",
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
      src="/img/climate/greenland_climate_pic2"
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
        src="/vid/climate/greenland_climate_video3",
        ext="mp4"
        poster="/img/climate/greenland_climate_preview3",
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
      src="/img/climate/greenland_climate_pic4_1"
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
      src="/img/climate/greenland_climate_pic4_3"
      ext="jpg"
      alt=""
      classname="gc-collage-img1"
      :webp="true"
    )
    p.caption(v-html="str.collageImg1Caption")

  .u-container
    section.u-section.gc-collage
      h2(v-html="str.collageTitle")
      p(
        v-for="p, index in str.collageText"
        :key="`gc-collage-${index}`"
        v-html="p"
      )

    //- section protection
    //- chart
    p.caption(v-html="str.protectionImg1Caption")
    section.u-section.gc-protection
      h2(v-html="str.protectionTitle")
      p(
        v-for="p, index in str.protectionText" :key="`gc-protection-${index}`"
        v-html="p"
      )

</template>

<script>
import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import str from '@/assets/string/climate.json';

export default {
  name: 'App',
  components: {
    GPic,
    GVid,
    GVidWControl,
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
