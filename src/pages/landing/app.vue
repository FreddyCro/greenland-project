<template lang="pug">
#app.greenland
  section.gla-hero
    h1(v-html="str.heroTitle")
  section.gla-intro
    p(v-html="str.introText")
    button(v-html="str.introAnchorClimateTitle")
    button(v-html="str.introAnchorFishingTitle")
    button(v-html="str.introAnchorFarmingTitle")
  section.gla-hot
    h2(v-html="str.hotTitle")
    p(v-html="str.hotText")
  section.gla-melt
    h2(v-html="str.meltTitle")
    p(v-html="str.meltText")
  section.gla-snow
    h2(v-html="str.snowTitle")
    p(v-html="str.snowText")
  section.gla-speed
    h2(v-html="str.speedTitle")
    p(v-html="str.speedText")
  section.gla-cultrue
    h2(v-html="str.cultrueTitle")
    p(v-html="str.cultrueText")
  section.gla-transition

  .gla-map
    section.gla-map-mystery
      h2(v-html="str.mapMysteryTitle")
      p(v-html="str.mapMysteryText")
    section.gla-map-scientist
      h2(v-html="str.mapScientistTitle")
      p(v-html="str.mapScientistPin")
      p(v-html="str.mapScientistText1")
      img
      p(v-html="str.mapScientistText2")
      a(
        :href="str.mapScientistStoryUrl"
        v-html="str.mapScientistStoryTitle"
      )
    section.gla-map-fishing
      h2(v-html="str.mapFishingTitle")
      p(v-html="str.mapFishingPin")
      p(v-html="str.mapFishingText1")
      img
      p(v-html="str.mapFishingText2")
      a(
        :href="str.mapFishingStoryUrl"
        v-html="str.mapFishingStoryTitle"
      )
    section.gla-map-farming
      h2(v-html="str.mapFarmingTitle")
      p(v-html="str.mapFarmingPin")
      p(v-html="str.mapFarmingText1")
      img
      p(v-html="str.mapFarmingText2")
      a(
        :href="str.mapFarmingStoryUrl"
        v-html="str.mapFarmingStoryTitle"
      )
    section.gla-map-living
      h2(v-html="str.mapLivingTitle")
      p(v-html="str.mapLivingPin")
      p(v-html="str.mapLivingText1")
      img
      p(v-html="str.mapLivingText2")
      a(
        :href="str.mapLivingStoryUrl"
        v-html="str.mapLivingStoryTitle"
      )

  .gla-gallery
    h2(v-html="str.galleryIceTitle")
    p(v-html="str.galleryIceDesc2")
    p(v-html="str.galleryIceDesc3")
    p(v-html="str.galleryIceDesc4")
    p(v-html="str.galleryIceDesc5")
    p(v-html="str.galleryIceDesc6")
    p(v-html="str.galleryIceDesc7")
    p(v-html="str.galleryIceDesc8")
    p(v-html="str.galleryIceDesc9")

    h2(v-html="str.galleryCityTitle")
    p(v-html="str.galleryCityDesc2")
    p(v-html="str.galleryCityDesc3")
    p(v-html="str.galleryCityDesc4")
    p(v-html="str.galleryCityDesc5")
    p(v-html="str.galleryCityDesc6")
    p(v-html="str.galleryCityDesc7")
    p(v-html="str.galleryCityDesc8")
    p(v-html="str.galleryCityDesc9")

    h2(v-html="str.galleryGreenTitle")
    p(v-html="str.galleryGreenDesc2")
    p(v-html="str.galleryGreenDesc3")
    p(v-html="str.galleryGreenDesc4")
    p(v-html="str.galleryGreenDesc5")
    p(v-html="str.galleryGreenDesc6")
    p(v-html="str.galleryGreenDesc7")
    p(v-html="str.galleryGreenDesc8")
    p(v-html="str.galleryGreenDesc9")

  g-series
</template>

<script>
import GSeries from '@/components/g-series.vue';
import str from '@/assets/string/landing.json';

export default {
  name: 'App',
  components: {
    GSeries,
  },
  data() {
    return {
      str,
    };
  },
};
</script>

<style></style>
