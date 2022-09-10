<template lang="pug">
#app.u-article.greenland
  nmd-header(
    public-path="./"
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
        src="vid/landing/greenland_video1_1",
        ext="mp4",
        poster="img/landing/greenland_preview1_1",
        poster-ext="webp"
        id="gl-vid1",
        classname="gl-hero-vid"
        :use-webm="true"
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
      first-chart="img/landing/greenland_chart2_1_pc.svg",
      second-chart="img/landing/greenland_chart2_2_pc.svg",
      :alt="str.hotTitle"
    )
      //- TODO: container
      .u-container
        h2(v-html="str.hotTitle")
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
      first-chart="img/landing/greenland_chart3_1_pc.svg",
      second-chart="img/landing/greenland_chart3_2_pc.svg",
      :alt="str.hotTitle"
    )
      //- TODO: container
      .u-container
        h2(v-html="str.meltTitle")
        p(
          v-for="p, index in str.meltText"
          :key="`meltText-${index}`"
          v-html="p"
        )

  //- section snow
  section.gl-snow
    bnb-slide(
      vid="vid/landing/greenland_video4_1",
      ext="mp4"
      poster="img/landing/greenland_preview4_1",
      poster-ext="webp"
      id="gl-vid4",
    )
      .u-container
        h2(v-html="str.snowTitle")
        p(
          v-for="p, index in str.snowText"
          :key="`snowText-${index}`"
          v-html="p"
        )

  //- section speed
  section.gl-speed
    bnb-slide(
      vid="vid/landing/greenland_video5_1",
      ext="mp4"
      poster="img/landing/greenland_preview5_1",
      poster-ext="webp"
      id="gl-vid5"
    )
      .u-container
        h2(v-html="str.speedTitle")
        p(
          v-for="p, index in str.speedText"
          :key="`speedText-${index}`"
          v-html="p"
        )

  //- section culture
  section.gl-culture
    bnb-slide(
      vid="vid/landing/greenland_video6_1",
      ext="mp4"
      poster="img/landing/greenland_preview6_1",
      poster-ext="webp"
      id="gl-vid6"
    )
      .u-container
        h2(v-html="str.cultureTitle")
        p(
          v-for="p, index in str.cultureText"
          :key="`cultureText-${index}`"
          v-html="p"
        )

  .gl-transition
  .after-gl-transition
      section.u-section
        .gl-transition-text
          p(
            v-for="p, index in str.transitionText"
            :key="`transitionText-${index}`"
          )
            span(v-html="p")

  landing-map
  gallery

  footer.g-footer
    g-series(:list="str.seriesList")
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
import GPic from '@/components/g-pic.vue';
import GTwoChart from '@/components/g-two-chart.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import LandingMap from '@/pages/landing/landing-map.vue';
import AnchorBtn from '@/pages/landing/anchor-btn.vue';
import Gallery from '@/pages/landing/gallery.vue';
import BnbSlide from '@/pages/landing/bnb-slide.vue';
import GSeries from '@/components/g-series.vue';
import FooterLogo from '@/components/common/footer/footer-logo.vue';
import FooterEditor from '@/components/common/footer/footer-editor.vue';
import FooterQuestionnaire from '@/components/common/footer/footer-questionnaire.vue';
import FooterShare from '@/components/common/footer/footer-share.vue';
import str from '@/assets/string/landing.json';

export default {
  name: 'App',
  components: {
    NmdHeader,
    AnchorBtn,
    GSeries,
    GPic,
    GTwoChart,
    GVid,
    GVidWControl,
    Gallery,
    BnbSlide,
    LandingMap,
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
          url: 'climate',
          active: false,
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

.gl-snow-vid {
  object-position: top left;
}

.gl-speed-vid,
.gl-culture-vid {
  object-position: bottom center;
}

.gl-bnb-section {
  display: flex;
  flex-direction: column-reverse;

  @include rwd-min(md) {
    flex-direction: row;
  }

  .gl-bnb-half {
    /* @include rwd-min(md) {
      width: 50%;
      padding: $spacing-10;
    }

    &--center {
      text-align: center;
    }

    &--no-padding {
      padding: 0;
    } */
  }

  .gl-bnb-vid {
    height: 100vh;

    .g-vid-w-control {
      width: 100%;
      height: 100%;
    }
  }

  .gl-bnb-text,
  .gl-bnb-vid {
    @include rwd-min(md) {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .g-vid {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.gl-transition {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-position: bottom center;
  pointer-events: none;

  @include bg-3x('/img/landing/greenland_pic7_1', 'jpg', true);
}

.gl-transition-text {
  margin: 0 auto;
  text-align: center;

  p + p {
    margin-top: $spacing-2 !important;
  }

  span {
    background-color: #fff;
  }
}

.after-gl-transition {
  position: relative;
}

.g-footer {
  &__copyright-wrapper {
    position: relative;
  }
}
</style>

<style lang="scss" scoped>
.gl-hero {
  text-align: center;
  padding-top: $spacing-10;

  h1 {
    margin-top: $spacing-5;
    margin-bottom: $spacing-5;
  }

  .gl-hero-vid-wrapper {
    width: 100%;
    height: 100vh;
  }

  .gl-hero-vid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
