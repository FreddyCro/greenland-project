<template lang="pug">
#app.u-article.greenland
  //- section hero
  section.gl-hero
    h1(v-html="str.heroTitle")

    .gl-hero-vid-wrapper
      g-vid(
        src="/vid/landing/greenland_video1_1",
        ext="mp4",
        poster="/img/landing/greenland_preview1_1",
        poster-ext="webp"
        id="gl-vid1",
        classname="gl-hero-vid"
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
        anchor-btn(:text="str.introAnchorClimateTitle")
        anchor-btn(:text="str.introAnchorFishingTitle")
        anchor-btn(:text="str.introAnchorFarmingTitle")

  .gl-bnb-container
    //- section hot
    section.gl-bnb-section.u-section.gl-hot
      .gl-bnb-half.gl-bnb-half--center
        g-two-chart(
          id="gl-hot-chart",
          first="/img/landing/greenland_chart2_1_pc.svg",
          second="/img/landing/greenland_chart2_2_pc.svg",
          :alt="str.hotTitle"
        )
      .gl-bnb-half.u-paragraph
        h2(v-html="str.hotTitle")
        p(
          v-for="p, index in str.hotText"
          :key="`hotText-${index}`"
          v-html="p"
        )

    //- section melt
    section.gl-bnb-section.u-section.gl-melt
      .gl-bnb-half.gl-bnb-half--center
        g-two-chart(
          id="gl-melt-chart",
          first="/img/landing/greenland_chart3_1_pc.svg",
          second="/img/landing/greenland_chart3_2_pc.svg",
          :alt="str.hotTitle"
        )
      .gl-bnb-half.u-paragraph
        h2(v-html="str.meltTitle")
        p(
          v-for="p, index in str.meltText"
          :key="`meltText-${index}`"
          v-html="p"
        )

  .gl-bnb-container.gl-bnb-container--no-left-md
    //- section snow
    section.gl-bnb-section.gl-snow
      .gl-bnb-half.gl-bnb-half--no-padding.gl-bnb-vid
        g-vid-w-control(
          src="/vid/landing/greenland_video4_1",
          ext="mp4"
          poster="/img/landing/greenland_preview4_1",
          poster-ext="webp"
          id="gl-vid4",
          classname="gl-snow-vid"
        )
      .gl-bnb-half.gl-bnb-text.u-paragraph
        h2(v-html="str.snowTitle")
        p(
          v-for="p, index in str.snowText"
          :key="`snowText-${index}`"
          v-html="p"
        )

    //- section speed
    section.gl-bnb-section.gl-speed
      .gl-bnb-half.gl-bnb-half--no-padding.gl-bnb-vid
        g-vid-w-control(
          src="/vid/landing/greenland_video5_1",
          ext="mp4"
          poster="/img/landing/greenland_preview5_1",
          poster-ext="webp"
          id="gl-vid5",
          classname="gl-speed-vid"
        )
      .gl-bnb-half.gl-bnb-text.u-paragraph
        h2(v-html="str.speedTitle")
        p(
          v-for="p, index in str.speedText"
          :key="`speedText-${index}`"
          v-html="p"
        )

    //- section culture
    section.gl-bnb-section.gl-culture
      .gl-bnb-half.gl-bnb-half--no-padding.gl-bnb-vid
        g-vid-w-control(
          src="/vid/landing/greenland_video6_1",
          ext="mp4"
          poster="/img/landing/greenland_preview6_1",
          poster-ext="webp"
          id="gl-vid6",
          classname="gl-culture-vid"
        )
      .gl-bnb-half.gl-bnb-text.u-paragraph
        h2(v-html="str.cultureTitle")
        p(
          v-for="p, index in str.cultureText"
          :key="`cultureText-${index}`"
          v-html="p"
        )


  .gl-transition
  .after-gl-transition
    section.u-section.gl-transition-text
      .gl-transition-text__content
        p(
          v-for="p, index in str.transitionText"
          :key="`transitionText-${index}`"
        )
          span(v-html="p")

    landing-map
    .u-section.gl-gallery
      .g-container-lg
        .gl-gallery__row
          .gl-gallery__col
            gallery-pic(src="/img/landing/gallery/greenland_pic9_2", :text="str.galleryIceTitle")
          .gl-gallery__col
            gallery-pic(src="/img/landing/gallery/greenland_pic9_2", :text="str.galleryIceDesc2")
            gallery-pic(src="/img/landing/gallery/greenland_pic9_3", :text="str.galleryIceDesc3")
          .gl-gallery__col
            gallery-pic(src="/img/landing/gallery/greenland_pic9_4", :text="str.galleryIceDesc4")

        .gl-gallery__row
          .gl-gallery__col
            gallery-pic(src="/img/landing/gallery/greenland_pic9_5", :text="str.galleryIceDesc5")
          .gl-gallery__col
            gallery-pic(src="/img/landing/gallery/greenland_pic9_6", :text="str.galleryIceDesc6")
            gallery-pic(src="/img/landing/gallery/greenland_pic9_7", :text="str.galleryIceDesc7")

        .gl-gallery__row
          .gl-gallery__col
            gallery-pic(src="/img/landing/gallery/greenland_pic9_8", :text="str.galleryIceDesc8")
          .gl-gallery__col
            gallery-pic(src="/img/landing/gallery/greenland_pic9_9", :text="str.galleryIceDesc9")

        .gl-gallery__row
          gallery-pic(src="/img/landing/gallery/greenland_pic10_2", :text="str.galleryCityTitle")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_2", :text="str.galleryCityDesc2")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_3", :text="str.galleryCityDesc3")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_4", :text="str.galleryCityDesc4")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_5", :text="str.galleryCityDesc5")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_6", :text="str.galleryCityDesc6")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_7", :text="str.galleryCityDesc7")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_8", :text="str.galleryCityDesc8")
          gallery-pic(src="/img/landing/gallery/greenland_pic10_9", :text="str.galleryCityDesc9")

        .gl-gallery__row
          gallery-pic(src="/img/landing/gallery/greenland_pic11_2", :text="str.galleryGreenTitle")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_2", :text="str.galleryGreenDesc2")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_3", :text="str.galleryGreenDesc3")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_4", :text="str.galleryGreenDesc4")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_5", :text="str.galleryGreenDesc5")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_6", :text="str.galleryGreenDesc6")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_7", :text="str.galleryGreenDesc7")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_8", :text="str.galleryGreenDesc8")
          gallery-pic(src="/img/landing/gallery/greenland_pic11_9", :text="str.galleryGreenDesc9")

    g-series
</template>

<script>
import GSeries from '@/components/g-series.vue';
import GPic from '@/components/g-pic.vue';
import GTwoChart from '@/components/g-two-chart.vue';
import GVid from '@/components/g-vid.vue';
import GVidWControl from '@/components/g-vid-w-control.vue';
import LandingMap from '@/pages/landing/landing-map.vue';
import AnchorBtn from '@/pages/landing/anchor-btn.vue';
import GalleryPic from '@/pages/landing/gallery-pic.vue';
import str from '@/assets/string/landing.json';

export default {
  name: 'App',
  components: {
    AnchorBtn,
    GSeries,
    GPic,
    GTwoChart,
    GVid,
    GVidWControl,
    GalleryPic,
    LandingMap,
  },
  data() {
    return {
      str,
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
  object-position: top center;
}

.gl-speed-vid,
.gl-culture-vid {
  object-position: bottom center;
}

.gl-bnb-section {
  .gl-bnb-half {
    @include rwd-min(md) {
      width: 50%;
      padding: $spacing-10;
    }

    &--center {
      text-align: center;
    }

    &--no-padding {
      padding: 0;
    }
  }

  .gl-bnb-vid {
    height: 100vh;

    .g-vid-w-control {
      width: 100%;
      height: 100%;
    }
  }

  .g-vid {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.gl-gallery {
  background-color: $bg-white;

  &__row {
    display: flex;
  }

  &__col {
    &-w1 {
      width: calc(100% / 3);
    }

    &-w2 {
      width: calc(100% / 3 * 2);
    }

    &-w3 {
      width: calc(100%);
    }

    &-h1 {
      width: calc(380px);
    }

    &-h2 {
      width: calc(380px * 2);
    }

    &-h3 {
      width: calc(380px * 3);
    }
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

.gl-bnb-section {
  display: flex;
  flex-direction: column-reverse;

  @include rwd-min(md) {
    flex-direction: row;
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
}

.gl-transition {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: bottom center;

  @include bg-3x('/img/landing/greenland_pic7_1', 'jpg', true);
}

.after-gl-transition {
  position: relative;
}

.gl-transition-text {
  text-align: center;

  span {
    background-color: #fff;
  }
}
</style>
