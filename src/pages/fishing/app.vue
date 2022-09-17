<template lang="pug">
#app.u-article.u-paragraph.greenland
  nmd-header(
    :outlink="headerList"
    :title="str.metaTitle"
    :url="str.metaUrl"
    :description="str.metaDescription"
  )
  
  //- section hero
  g-slide(id="hero" classname="gfi-hero-slide")
    section.u-section-full.gfi-hero-vid-wrapper(slot="bg")
      g-vid(
        :src="`${VIDEO_PATH}fishing/greenland_fishing_video1`",
        ext="mp4",
        poster="../img/fishing/greenland_fishing_preview1",
        poster-ext="webp"
        :use-webm="true"
        id="gfi-hero-vid",
        classname="u-full-vh-vid"
      )
      g-hero-scroll(:fadeOut="true")
    section.u-section.gfi-hero(slot="content")
      .u-container
        .g-hero-title
          h1(v-html="str.introTitle")
          h2(v-html="str.introSubTitle")
        p(
          v-for="p, index in str.introText1"
          :key="`gfi-introText1-${index}`"
          v-html="p"
        )

  //- section intro
  g-slide(id="intro" classname="gfi-intro-slide")
    section(slot="bg")
      g-pic(
        src="../img/fishing/greenland_fishing_pic2"
        ext="jpg"
        :alt="str.introTitle"
        classname="u-full-vh-img"
        :webp="true"
      )
    section.u-section.gf-intro(slot="content")
      .u-container
        p(
          v-for="p, index in str.introText2"
          :key="`gfi-introText2-${index}`"
          v-html="p"
        )

  //- section transition
  g-slide(id="transition" classname="gfi-transition-slide" :is-last="true")
    section(slot="bg")
      g-vid-w-control(
        :src="`${VIDEO_PATH}fishing/greenland_fishing_video3`",
        ext="mp4"
        poster="../img/fishing/greenland_fishing_preview3",
        poster-ext="webp"
        :use-webm="true"
        id="gc-vid3",
        classname="u-full-vh-vid gfi-transition-vid"
      )
  
    section.u-section.gfi-transition(slot="content")
      .u-container
        p(
          v-for="p, index in str.introText3"
          :key="`gfi-introText3-${index}`"
          v-html="p"
        )

  //- section ja
  g-pic(
    src="../img/fishing/greenland_fishing_pic4_1"
    ext="jpg"
    :alt="str.janBeforeImg1Caption"
    classname="u-full-width-img"
    :webp="true"
  )

  section.u-section.gfi-ja
    .u-container
      h2(v-html="str.janTitle")
      p(
        v-for="p, index in str.janText1"
        :key="`gfi-janText1-${index}`"
        v-html="p"
      )

  //- section ja-before
  section.u-section.gfi-ja-before
    .u-container
      h3(v-html="str.janBeforeTitle")
      p(
        v-for="p, index in str.janBeforeText1"
        :key="`gfi-janBeforeText1-${index}`"
        v-html="p"
      )

  .u-container-lg
    g-pic(
      src="../img/fishing/greenlnad_fishing_pic4_2"
      ext="jpg"
      :alt="str.janBeforeImg1Caption"
      classname="gf-ja-before-img1"
      :webp="true"
    )
    p.caption(v-html="str.janBeforeImg1Caption")

  //- section ja-protection
  section.u-section.gfi-ja-protection
    .u-container
      h3(v-html="str.janProtectionTitle")
      p(
        v-for="p, index in str.janProtectionText1"
        :key="`gfi-janProtectionText1-${index}`"
        v-html="p"
      )

  g-pic(
    src="../img/fishing/greenland_fishing_pic5_1"
    ext="jpg"
    :alt="str.janProtectionTitle"
    classname="u-full-width-img"
    :webp="true"
  )

  //- section crisis
  section.u-section.gfi-crisis
    .u-container
      h2(v-html="str.crisisTitle")
      p(
        v-for="p, index in str.crisisText1"
        :key="`gfi-crisisText1-${index}`"
        v-html="p"
      )

  //- section crisis-plastic
  section.u-section.gfi-crisis-plastic
    .u-container
      h3(v-html="str.crisisPlasticTitle")
      p(
        v-for="p, index in str.crisisPlasticText1"
        :key="`gfi-crisisPlasticText1-${index}`"
        v-html="p"
      )
      
  //- chart
  .u-container
    .flourish-embed.flourish-chart(data-src="visualisation/10851355")
    p.caption(v-html="str.crisisPlasticImg1Caption")

  section.u-section
    .u-container
      p(
        v-for="p, index in str.crisisPlasticText2"
        :key="`gfi-crisisPlasticText2-${index}`"
        v-html="p"
      )

  .u-container-lg
    g-pic(
      src="../img/fishing/greenland_fishing_pic5_3"
      ext="jpg"
      :alt="str.crisisPlasticImg2Caption"
      classname="gf-crisis-plastic-img2"
      :webp="true"
    )
    p.caption(v-html="str.crisisPlasticImg2Caption")

  section.u-section
    .u-container
      p(
        v-for="p, index in str.crisisPlasticText3"
        :key="`gfi-crisisPlasticText3-${index}`"
        v-html="p"
      )

  //- section crisis-ice
  section.u-section.gfi-crisis-ice
    .u-container
      h3(v-html="str.crisisIceTitle")
      p(
        v-for="p, index in str.crisisIceText1"
        :key="`gfi-crisisIceText1-${index}`"
        v-html="p"
      )
  .u-container
    .flourish-embed.flourish-chart(data-src="visualisation/10851378")
    p.caption(v-html="str.crisisIceImg1Caption")

  section.u-section
    .u-container
      p(
        v-for="p, index in str.crisisIceText2"
        :key="`gfi-crisisIceText2-${index}`"
        v-html="p"
      )

  //- section warm
  g-pic(
    src="../img/fishing/greenland_fishing_pic6_1"
    ext="jpg"
    :alt="str.warmTitle"
    classname="u-full-width-img"
    :webp="true"
  )

  section.u-section.gfi-warm
    .u-container
      h2(v-html="str.warmTitle")
      p(
        v-for="p, index in str.warmText1"
        :key="`gfi-warmText1-${index}`"
        v-html="p"
      )

  //- section warm-fish
  section.u-section.gfi-warm-fish
    .u-container
      h3(v-html="str.warmFishTitle")
      p(
        v-for="p, index in str.warmFishText1"
        :key="`gfi-warmFishText1-${index}`"
        v-html="p"
      )
  .u-container-lg
    g-pic(
      src="../img/fishing/greenland_fishing_pic6_2"
      ext="jpg"
      :alt="str.warmFishImg1Caption"
      classname="u-full-width-img"
      :webp="true"
    )
    p.caption.hide-mob(v-html="str.warmFishImg1Caption")
    p.caption.show-mob(v-html="str.warmFishImg1CaptionMob")

  //- section warm-warn
  section.u-section.gfi-warm-warn
    .u-container
      h3(v-html="str.warmWarnTitle")
      p(
        v-for="p, index in str.warmWarnText1"
        :key="`gfi-warmWarnText1-${index}`"
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
import str from '@/assets/string/fishing.json';
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
          url: '/',
          active: false,
        },
        {
          title: '北極站科學家篇',
          url: 'climate/',
          active: false,
        },
        {
          title: '撈海廢討海人篇',
          url: 'fishing/',
          active: true,
        },
        {
          title: '穿梭綠地牧羊人篇',
          url: 'farming/',
          active: false,
        },
        {
          title: '格陵蘭居民篇',
          url: 'living/',
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
.gfi-hero-vid-wrapper {
  position: relative;
}

.gfi-transition {
  min-height: 600px;
  display: flex;
  align-items: center;
}

.gfi-transition-vid {
  @include rwd-max(lg) {
    object-fit: contain !important;
    object-position: center;
  }
}
</style>
