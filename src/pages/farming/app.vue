<template lang="pug">
#app.u-article.greenland
  nmd-header(
    public-path="../"
    :outlink="headerList"
    :title="str.metaTitle"
    :url="str.metaUrl"
    :description="str.metaDescription"
  )
  
  //- section hero
  g-slide(id="hero" classname="gc-hero-slide")
    section.u-section-full(slot="bg")
      g-vid(
        src="../vid/farming/greenland_farming_video1",
        ext="mp4",
        poster="../img/farming/greenland_farming_preview1",
        poster-ext="webp"
        id="gf-hero-vid",
        classname="u-full-vh-vid"
      )
    section.u-section.gf-hero(slot="content")
      .u-container
        h1(v-html="str.introTitle")
        h2(v-html="str.introSubTitle")
        p(
          v-for="p, index in str.introText1"
          :key="`gf-introText1-${index}`"
          v-html="p"
        )

  //- section intro
  g-slide(id="intro" classname="gf-intro-slide")
    section(slot="bg")
      g-pic(
        src="../img/farming/greenland_farming_pic2"
        ext="jpg"
        :alt="str.introTitle"
        classname="u-full-vh-img"
        :webp="true"
      )
    section.u-section.gf-intro(slot="content")
      .u-container
        p(
          v-for="p, index in str.introText2"
          :key="`gf-introText2-${index}`"
          v-html="p"
        )

  //- section transition
  g-slide(id="transition" classname="gf-transition-slide" :is-last="true")
    section(slot="bg")
      g-vid-w-control(
        src="../vid/farming/greenland_farming_video3",
        ext="mp4",
        poster="../img/farming/greenland_farming_preview3",
        poster-ext="webp"
        id="gf-intro-vid-1",
        classname="u-full-vh-vid"
      )
    
    section.u-section.gf-transition(slot="content")
      .u-container
        p(
          v-for="p, index in str.introText3"
          :key="`gf-introText3-${index}`"
          v-html="p"
        )

  //- section skill
  g-pic(
    src="../img/farming/greenland_farming_pic4_1"
    ext="jpg"
    :alt="str.skillImg1Caption"
    classname="u-full-width-img"
    :webp="true"
  )
  section.u-section.gf-skill
    .u-container
      h2(v-html="str.skillTitle")
      p(
        v-for="p, index in str.skillText1"
        :key="`gf-skillText1-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/farming/greenland_farming_pic4_3"
      ext="jpg"
      :alt="str.farmImg1Caption"
      classname="gf-skill-img1"
      :webp="true"
    )
  section.u-section
    .u-container
      p(
        v-for="p, index in str.skillText2"
        :key="`gf-skillText2-${index}`"
        v-html="p"
      )

  //- section farm
  g-pic(
    src="../img/farming/greenland_farming_pic5_1"
    ext="jpg"
    :alt="str.farmWeatherImg1Caption"
    classname="u-full-width-img"
    :webp="true"
  )
  section.u-section.gf-farm
    .u-container
      h2(v-html="str.farmTitle")
      p(
        v-for="p, index in str.farmText1"
        :key="`gf-farmText1-${index}`"
        v-html="p"
      )
  .u-container
    block-chart
  section.u-section
    .u-container
      p(
        v-for="p, index in str.farmText2"
        :key="`gf-farmText2-${index}`"
        v-html="p"
      )

  //- section farm weather
  section.u-section.gf-farm-weather
    .u-container
      h3(v-html="str.farmWeatherTitle")
      p(
        v-for="p, index in str.farmWeatherText1"
        :key="`gf-farmWeatherText1-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/farming/greenland_farming_pic5_3"
      ext="jpg"
      :alt="str.farmWeatherImg1Caption"
      classname="gf-farmWeather-img2"
      :webp="true"
    )
    p.caption(v-html="str.farmWeatherImg1Caption")
  section.u-section
    .u-container
      p(
        v-for="p, index in str.farmWeatherText2"
        :key="`gf-farmWeatherText2-${index}`"
        v-html="p"
      )
  .u-container
    .flourish-embed.flourish-chart(data-src="visualisation/10985230")
    p.caption(v-html="str.farmWeatherImg2Caption")

  //- section farm sheep
  section.u-section.gf-farm-sheep
    .u-container
      h3(v-html="str.farmSheepTitle")
      p(
        v-for="p, index in str.farmSheepText1"
        :key="`gf-farmSheepText1-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/farming/greenland_farming_pic5_5"
      ext="jpg"
      :alt="str.farmSheepImg1Caption"
      classname="gf-farmSheep-img1"
      :webp="true"
    )
    p.caption(v-html="str.farmSheepImg1Caption")
  section.u-section
    .u-container
      p(
        v-for="p, index in str.farmSheepText2"
        :key="`gf-farmSheepText2-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/farming/greenland_farming_pic5_6"
      ext="jpg"
      :alt="str.farmSheepImg2Caption"
      classname="gf-farmSheep-img2"
      :webp="true"
    )
  .u-container
    p.caption(v-html="str.farmSheepImg2Caption")

  section.u-section
    .u-container
      p(
        v-for="p, index in str.farmSheepText3"
        :key="`gf-farmSheepText3-${index}`"
        v-html="p"
      )
  .u-container
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
  section.u-section
    .u-container
      p(
        v-for="p, index in str.farmSheepText4"
        :key="`gf-farmSheepText4-${index}`"
        v-html="p"
      )

  //- section sale
  g-pic(
    src="../img/farming/greenland_farming_pic6_1"
    ext="jpg"
    :alt="str.saleTitle"
    classname="u-full-width-img"
    :webp="true"
  )
  section.u-section.gf-sale
    .u-container
      h2(v-html="str.saleTitle")
      p(
        v-for="p, index in str.saleText1"
        :key="`gf-saleText1-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/farming/greenland_farming_pic6_2"
      ext="jpg"
      :alt="str.saleImg1Caption"
      classname="gf-sale-img1"
      :webp="true"
    )
  section.u-section
    .u-container
      p(
        v-for="p, index in str.saleText2"
        :key="`gf-saleText2-${index}`"
        v-html="p"
      )

  //- section sale creative
  section.u-section.gf-sale-creative
    .u-container
      h3(v-html="str.saleCreativeTitle")
      p(
        v-for="p, index in str.saleCreativeText1"
        :key="`gf-saleCreativeText1-${index}`"
        v-html="p"
      )
  .u-container
    .flourish-embed.flourish-chart(data-src="visualisation/10995303")
    p.caption(v-html="str.saleCreativeImg1Caption")
  section.u-section
    .u-container
      p(
        v-for="p, index in str.saleCreativeText2"
        :key="`gf-saleCreativeText2-${index}`"
        v-html="p"
      )

  //- section sale culture
  section.u-section.gf-sale-culture
    .u-container
      h3(v-html="str.saleCultureTitle")
      p(
        v-for="p, index in str.saleCultureText1"
        :key="`gf-saleCultureText1-${index}`"
        v-html="p"
      )
  .u-container-lg
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
    .u-container
      h3(v-html="str.saleSelfTitle")
      p(
        v-for="p, index in str.saleSelfText1"
        :key="`gf-saleSelfText1-${index}`"
        v-html="p"
      )

  footer.g-footer
    g-series(
      public-path="../"
      :list="str.seriesList"
    )
    .u-section.g-footer__copyright-wrapper
      .u-container.g-footer__copyright
        footer-editor(:data="editor")
        footer-share(
          :title="str.metaTitle"
          :url="str.metaUrl"
          :description="str.metaDescription"
        )
        footer-questionnaire
        footer-logo

</template>

<script>
import NmdHeader from '@/components/common/header/HeaderTypeA.vue';
import GSlide from '@/components/g-slide.vue';
import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import GSeries from '@/components/g-series.vue';
import BlockChart from '@/pages/farming/block-chart.vue';
import FooterLogo from '@/components/common/footer/footer-logo.vue';
import FooterEditor from '@/components/common/footer/footer-editor.vue';
import FooterQuestionnaire from '@/components/common/footer/footer-questionnaire.vue';
import FooterShare from '@/components/common/footer/footer-share.vue';
import str from '@/assets/string/farming.json';

export default {
  name: 'App',
  components: {
    NmdHeader,
    GSlide,
    GPic,
    GVid,
    GVidWControl,
    GSeries,
    BlockChart,
    FooterLogo,
    FooterEditor,
    FooterQuestionnaire,
    FooterShare,
  },
  data() {
    return {
      str,
      headerList: [
        {
          title: '解凍格陵蘭',
          url: '/',
          active: true,
        },
        {
          title: '北極站科學家篇',
          url: '/climate',
          active: false,
        },
        {
          title: '撈海廢討海人篇',
          url: '/fishing',
          active: false,
        },
        {
          title: '穿梭綠地牧羊人篇',
          url: '/farming',
          active: false,
        },
        {
          title: '格陵蘭居民篇',
          url: '/living',
          active: false,
        },
      ],
      editor: [
        {
          title: str.editorInterviewTitle,
          members: str.editorInterviewMembers,
        },
        {
          title: str.editorProducerTitle,
          members: str.editorProducerMembers,
        },
        {
          title: str.editorVisualTitle,
          members: str.editorVisualMembers,
        },
        {
          title: str.editorEngineerTitle,
          members: str.editorEngineerMembers,
        },
        {
          title: str.editorDirectorTitle,
          members: str.editorDirectorMembers,
        },
        {
          title: str.editorGroupTitle,
          members: str.editorGroupMembers,
        },
        {
          title: '',
          members: [str.editorReleaseDate],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.gf-transition {
  min-height: 600px;
  display: flex;
  align-items: center;
}
</style>

<style lang="scss" scoped></style>
