<template lang="pug">
#app.u-article.u-paragraph.greenland
  nmd-header(
    public-path="../"
    :outlink="headerList"
    :title="str.metaTitle"
    :url="str.metaUrl"
    :description="str.metaDescription"
  )

  //- section hero
  g-slide(id="hero" classname="gc-hero-slide")
    section.u-section-full.gf-hero-vid-wrapper(slot="bg")
      g-vid(
        src="../vid/climate/greenland_climate_video1",
        ext="mp4",
        poster="../img/climate/greenland_climate_preview1",
        poster-ext="webp"
        :use-webm="true"
        id="gc-hero-vid",
        classname="u-full-vid"
      )
      g-hero-scroll(:fadeOut="true")
    section.u-section.gc-hero(slot="content")
      .u-container
        .g-hero-title
          h1(v-html="str.introTitle")
          h2(v-html="str.introSubTitle")
        p(
          v-for="p, index in str.introSectionText"
          :key="`gc-introSectionText-${index}`"
          v-html="p"
        )

  //- section intro
  g-slide(id="intro" classname="gc-intro-slide")
    section(slot="bg")
      g-pic(
        src="../img/climate/greenland_climate_pic2"
        ext="jpg"
        :alt="str.introTitle"
        classname="u-full-vh-img"
        :webp="true"
      )
    section.u-section.gc-intro(slot="content")
      .u-container
        p(
          v-for="p, index in str.section2Text"
          :key="`gc-intro-${index}`"
          v-html="p"
        )

  //- section transition
  g-slide(id="transition" classname="gc-transition-slide" :is-last="true")
    section(slot="bg")
      g-vid-w-control(
        public-path="../"
        src="../vid/climate/greenland_climate_video3",
        ext="mp4"
        poster="../img/climate/greenland_climate_preview3",
        poster-ext="webp"
        :use-webm="true"
        id="gc-vid3",
        classname="u-full-vh-vid gc-transition-vid"
      )

    section.u-section.gc-transition(slot="content")
      .u-container
        p(
          v-for="p, index in str.transitionText"
          :key="`gc-transition-${index}`"
          v-html="p"
        )

  //- section morten
  g-pic(
    src="../img/climate/greenland_climate_pic4_1"
    ext="jpg"
    alt=""
    classname="u-full-img"
    :webp="true"
  )

  section.u-section.gc-morten
    .u-container
      h2(v-html="str.mortenTitle")
      p(
        v-for="p, index in str.mortenText"
        :key="`gc-morten-${index}`"
        v-html="p"
      )

  //- section collage
  .u-container-lg
    g-pic(
      src="../img/climate/greenland_climate_pic4_3"
      ext="jpg"
      :alt="str.collageImg1Caption"
      classname="gc-collage-img1"
      :webp="true"
    )
    p.caption(v-html="str.collageImg1Caption")

  //- section collage
  section.u-section.gc-collage
    .u-container
      h3(v-html="str.collageTitle")
      p(
        v-for="p, index in str.collageText1"
        :key="`gc-collageText1-${index}`"
        v-html="p"
      )

  .u-container
    g-pic(
      src="../img/climate/greenland_climate_chart4_2"
      classname="gc-collage-img2"
      ext="svg"
      :alt="str.protectionImg1Caption"
      :use2x="false"
      :use3x="false"
      :webp="false"
    )
    p.caption(v-html="str.protectionImg1Caption")

  //- section protection
  section.u-section.gc-protection
    .u-container
      h3(v-html="str.protectionTitle")
      p(
        v-for="p, index in str.protectionText1" :key="`gc-protectionText1-${index}`"
        v-html="p"
      )

  .u-container-lg
    g-pic(
      src="../img/climate/greenland_climate_pic4_4"
      ext="jpg"
      :alt="str.protectionImg2Caption"
      classname="gc-protection-img2"
      :webp="true"
    )
    p.caption(v-html="str.protectionImg2Caption")

  section.u-section
    .u-container
      p(
        v-for="p, index in str.protectionText2" :key="`gc-protectionText2-${index}`"
        v-html="p"
      )

  g-pic(
    src="../img/climate/greenland_climate_pic5_1"
    ext="jpg"
    :alt="str.jpImg1Caption"
    classname="u-full-width-img"
    :webp="true"
  )

  //- section jp
  section.u-section.gc-jp
    .u-container
      h2(v-html="str.jpTitle")
      p(
        v-for="p, index in str.jpText1" :key="`gc-jpText1-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/climate/greenland_climate_pic5_2"
      ext="jpg"
      :alt="str.jpImg2Caption"
      classname="gc-jp-img2"
      :webp="true"
    )
    p.caption(v-html="str.jpImg1Caption")

  section.u-section
    .u-container
      p(
          v-for="p, index in str.jpText2" :key="`gc-jpText2-${index}`"
          v-html="p"
        )

  .u-container-lg
    g-pic(
      src="../img/climate/greenland_climate_pic5_3"
      ext="jpg"
      :alt="str.jpImg2Caption"
      classname="gc-jp-img2"
      :webp="true"
    )
    p.caption(v-html="str.jpImg2Caption")

  //- section sea
  section.u-section.gc-sea
    .u-container
      h3(v-html="str.seaTitle")
      p(
        v-for="p, index in str.seaText1" :key="`gc-seaText1-${index}`"
        v-html="p"
      )
      
  g-vid-w-control(
    public-path="../"
    src="../vid/climate/greenland_climate_video6_1",
    ext="mp4"
    poster="../img/climate/greenland_climate_preview6_1",
    poster-ext="webp"
    id="gc-sea-vid",
    classname="u-full-vid"
  )
  .u-container-lg
    p.caption(v-html="str.seaImg1Caption")

  //- section science
  section.u-section.gc-science
    .u-container
      h3(v-html="str.scienceTitle")
      p(
        v-for="p, index in str.scienceText1" :key="`gc-scienceText1-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/climate/greenland_climate_pic6_2"
      ext="jpg"
      :alt="str.scienceImg1Caption"
      classname="gc-science-img1"
      :webp="true"
    )
    p.caption(v-html="str.scienceImg1Caption")

  section.u-section
    .u-container
      p(
        v-for="p, index in str.scienceText2" :key="`gc-scienceText2-${index}`"
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
        footer-logo(public-path="../")
</template>

<script>
import NmdHeader from '@/components/common/header/HeaderTypeA.vue';
import GSlide from '@/components/g-slide.vue';
import GPic from '@/components/g-pic.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import GSeries from '@/components/g-series.vue';
import GHeroScroll from '@/components/g-hero-scroll.vue';
import FooterLogo from '@/components/common/footer/footer-logo.vue';
import FooterEditor from '@/components/common/footer/footer-editor.vue';
import FooterQuestionnaire from '@/components/common/footer/footer-questionnaire.vue';
import FooterShare from '@/components/common/footer/footer-share.vue';
import str from '@/assets/string/climate.json';
import { env } from '@/assets/mixins';

export default {
  name: 'App',
  mixins: [env],
  components: {
    NmdHeader,
    GSlide,
    GPic,
    GVid,
    GVidWControl,
    GSeries,
    GHeroScroll,
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
          url: '',
          active: false,
        },
        {
          title: '北極站科學家篇',
          url: 'climate',
          active: true,
        },
        {
          title: '撈海廢討海人篇',
          url: 'fishing',
          active: false,
        },
        {
          title: '穿梭綠地牧羊人篇',
          url: 'farming',
          active: false,
        },
        {
          title: '格陵蘭居民篇',
          url: 'living',
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

<style lang="scss" scoped>
.g-hero-title {
  text-align: center;
  margin-bottom: $spacing-11 !important;

  h2 {
    @include general-font-h3;
  }
}
</style>

<style lang="scss">
.gf-hero-vid-wrapper {
  position: relative;
}

.gc-transition {
  min-height: 600px;
  display: flex;
  align-items: center;
}

.gc-transition-vid {
  @include rwd-max(lg) {
    object-fit: contain !important;
    object-position: center;
  }
}
</style>
