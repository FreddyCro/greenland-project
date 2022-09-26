<template lang="pug">
#app.u-article.greenland
  nmd-header(
    :outlink="headerList"
    :title="str.metaTitle"
    :url="str.metaUrl"
    :description="str.metaDescription"
  )
  
  //- section hero
  section.gl-hero
    h1(v-html="str.heroTitle")
    .gl-hero-vid-wrapper
      g-vid(
        video-name="冰川"
        :src="`${VIDEO_PATH}landing/greenland_video1_1`",
        ext="mp4",
        poster="img/landing/greenland_preview1_1",
        poster-ext="webp"
        id="gl-vid1",
        classname="u-full-vh-vid gl-hero-vid"
        :use-webm="true"
        :use-observer="true"
        :full-screen="true"
      )

  //- section intro
  section.u-section.gl-intro
    .u-container.u-paragraph
      p(
        v-for="p, index in str.introText"
        :key="`introText-${index}`"
        v-html="p"
      )

      .gl-intro__anchor-container
        anchor-btn(
          :text="str.introAnchorClimateTitle"
          :target="'#climate'"
        )
        anchor-btn(
          :text="str.introAnchorFishingTitle"
          :target="'#fishing'"
        )
        anchor-btn(
          :text="str.introAnchorFarmingTitle"
          :target="'#farming'"
        )

  //- section hot
  section.u-section.gl-hot
    bnb-slide(
      id="hot",
      classname="gl-hot-slide",
      first-chart="img/landing/greenland_chart2_1",
      second-chart="img/landing/greenland_chart2_2",
      :chart-caption="str.hotChartCaption",
      :alt="str.hotTitle"
      :use-offset="true"
    )
      .u-paragraph
        h2.landing-h2(v-html="str.hotTitle")
        p(
          v-for="p, index in str.hotText"
          :key="`hotText-${index}`"
          v-html="p"
        )

  //- section melt
  section.u-section.gl-melt
    bnb-slide(
      id="melt",
      classname="gl-melt-slide",
      first-chart="img/landing/greenland_chart3_1"
      second-chart="img/landing/greenland_chart3_2"
      :chart-caption="str.meltChartCaption",
      :alt="str.hotTitle"
      :use-offset="true"
    )
      .u-paragraph
        h2.landing-h2(v-html="str.meltTitle")
        p(
          v-for="p, index in str.meltText"
          :key="`meltText-${index}`"
          v-html="p"
        )

  //- section snow
  section.gl-snow
    bnb-slide(      
      :vid="`${VIDEO_PATH}landing/greenland_video4_1`",
      ext="mp4"
      poster="img/landing/greenland_preview4_1"
      poster-ext="webp"
      id="google-earth"
      classname="gl-snow-slide"
      :use-play="false"
      :use-sound="false"
    )
      .u-paragraph
        h2.landing-h2(v-html="str.snowTitle")
        p(
          v-for="p, index in str.snowText"
          :key="`snowText-${index}`"
          v-html="p"
        )

  //- section speed
  section.gl-speed
    bnb-slide(
      :vid="`${VIDEO_PATH}landing/greenland_video5_1`",
      ext="mp4"
      poster="img/landing/greenland_preview5_1",
      poster-ext="webp"
      id="wiliam"
    )
      .u-paragraph
        h2.landing-h2(v-html="str.speedTitle")
        p(
          v-for="p, index in str.speedText"
          :key="`speedText-${index}`"
          v-html="p"
        )

  //- section culture
  section.gl-culture
    bnb-slide(
      :vid="`${VIDEO_PATH}landing/greenland_video6_1`",
      ext="mp4"
      poster="img/landing/greenland_preview6_1",
      poster-ext="webp"
      id="minister"
    )
      .u-paragraph
        h2.landing-h2(v-html="str.cultureTitle")
        p(
          v-for="p, index in str.cultureText"
          :key="`cultureText-${index}`"
          v-html="p"
        )

  landing-map-transition(:text="str.transitionText")
  landing-map

  section.u-section.gl-gallery
    gallery

  footer.g-footer
    g-series(:list="str.seriesList")
    .u-section.g-footer__copyright-wrapper
      .u-container.g-footer__copyright
        footer-editor(:data="editor")
        footer-share(
          :title="str.metaTitle"
          :description="str.metaDescription"
        )
        footer-questionnaire
        footer-logo(public-path="./")
</template>

<script>
import AnchorBtn from '@/pages/landing/anchor-btn.vue';
import BnbSlide from '@/pages/landing/bnb-slide.vue';
import FooterLogo from '@/components/common/footer/footer-logo.vue';
import FooterEditor from '@/components/common/footer/footer-editor.vue';
import FooterQuestionnaire from '@/components/common/footer/footer-questionnaire.vue';
import FooterShare from '@/components/common/footer/footer-share.vue';
import GPic from '@/components/g-pic.vue';
import GTwoChart from '@/components/g-two-chart.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import Gallery from '@/pages/landing/gallery.vue';
import GSeries from '@/components/g-series.vue';
import GHeroScroll from '@/components/g-hero-scroll.vue';
import LandingMap from '@/pages/landing/landing-map.vue';
import LandingMapTransition from '@/pages/landing/landing-map-transition.vue';
import NmdHeader from '@/components/common/header/HeaderTypeA.vue';
import str from '@/assets/string/landing.json';
import { env } from '@/assets/mixins';

export default {
  name: 'App',
  mixins: [env],
  components: {
    AnchorBtn,
    BnbSlide,
    GSeries,
    GPic,
    GTwoChart,
    GVid,
    GVidWControl,
    Gallery,
    GHeroScroll,
    FooterLogo,
    FooterEditor,
    FooterQuestionnaire,
    FooterShare,
    LandingMap,
    LandingMapTransition,
    NmdHeader,
  },
  data() {
    return {
      str,
      headerList: [
        {
          title: '解凍格陵蘭',
          url: '',
          active: true,
        },
        {
          title: '北極站科學家篇',
          url: 'climate/',
          active: false,
        },
        {
          title: '撈海廢討海人篇',
          url: 'fishing/',
          active: false,
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
          title: str.editorFilmingTitle,
          members: str.editorFilmingMembers,
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
.gl-intro {
  &__anchor-container {
    display: flex;
    justify-content: space-between;
    padding-top: $spacing-10;

    @include rwd-min(md) {
      padding-top: $spacing-11;
    }
  }
}

.gl-bnb-container {
  @include u-container-xxs;

  @include rwd-min(xs) {
    @include u-container-xs;
  }

  @include rwd-min(sm) {
    @include u-container-sm;
  }

  @include rwd-min(md) {
    max-width: 1920px;
    padding-left: $spacing-7;
    padding-right: $spacing-7;
  }

  @include rwd-min(lg) {
    padding-left: $spacing-9;
    padding-right: $spacing-9;
  }

  &--no-left-md {
    @include rwd-min(md) {
      padding-left: 0;
    }
  }

  &--no-right-md {
    @include rwd-min(md) {
      padding-right: 0;
    }
  }
}

.gl-snow-slide {
  .g-vid {
    object-position: top left;
  }
}

.gl-snow {
  @include rwd-max(sm) {
    background-color: #000;
  }
}

.gl-speed,
.gl-culture {
  @include rwd-max(sm) {
    background-color: #000;
  }

  .g-vid {
    @include rwd-max(lg) {
      object-fit: contain;
      object-position: center;
    }
  }
}

.gl-bnb-section {
  display: flex;
  flex-direction: column-reverse;

  @include rwd-min(md) {
    flex-direction: row;
  }

  .g-vid {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.g-footer {
  &__copyright-wrapper {
    position: relative;
  }
}
</style>

<style lang="scss" scoped>
.gl-hero {
  position: relative;
  text-align: center;
  padding-top: $spacing-10;

  h1 {
    margin-top: $spacing-5;
    margin-bottom: $spacing-5;
  }
}
</style>
