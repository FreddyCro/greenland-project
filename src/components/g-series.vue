<template lang="pug">
.g-series
  .u-section
    .u-section.g-series__content
      .u-container-lg
        h3.g-series__title(v-html="str.seriesTitle")
        .g-series-card-container
          .g-series-card-wrapper(
            v-for="item, index in list"
            :key="`g-series-card-${index}`"
          )
            a.g-series-card(
              :class="`g-series-card--${item}`"
              :href="`${publicPath}${listData[item].url}`"
              target="_blank"
            )
              g-pic(
                :src="`${publicPath}${listData[item].src}`"
                ext="jpg"
                :alt="listData[item].title"
                classname="g-series-card__bg"
                :webp="true"
              )
              .g-series-card__content
                h4.g-series-card__title(v-html="listData[item].title")
                button.g-series-card__btn
                  span(v-html="listData[item].text")
                  span.g-series-card__btn-arrow
                    svg(
                      width="11"
                      height="8"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    )
                      path(d="M1 7C0.447715 7 5.3647e-08 7.44772 0 8C-5.3647e-08 8.55228 0.447715 9 1 9L1 7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928933C14.9526 0.538409 14.3195 0.538409 13.9289 0.928933C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9L21 9L21 7L1 7L1 9Z")
</template>

<script>
import GPic from '@/components/g-pic.vue';
import str from '@/assets/string/series.json';

export default {
  name: 'g-series',
  components: {
    GPic,
  },
  props: {
    publicPath: {
      type: String,
      default: './',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      str,
      listData: {
        landing: {
          url: str.seriesLandingUrl,
          title: str.seriesLandingTitle,
          text: str.seriesButtonText,
          src: 'img/series/landing',
        },
        climate: {
          url: str.seriesClimateUrl,
          title: str.seriesClimateTitle,
          text: str.seriesButtonText,
          src: 'img/series/climate',
        },
        fishing: {
          url: str.seriesFishingUrl,
          title: str.seriesFishingTitle,
          text: str.seriesButtonText,
          src: 'img/series/fishing',
        },
        farming: {
          url: str.seriesFarmingUrl,
          title: str.seriesFarmingTitle,
          text: str.seriesButtonText,
          src: 'img/series/farming',
        },
        living: {
          url: str.seriesLivingUrl,
          title: str.seriesLivingTitle,
          text: str.seriesButtonText,
          src: 'img/series/living',
        },
      },
    };
  },
};
</script>

<style lang="scss">
.g-series {
  position: relative;
  text-align: center;
  background-color: $bg-white;

  &__content {
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 70%;
      background-color: $g-blue-1;

      @include rwd-min(md) {
        height: calc(100% - 150px);
      }
    }
  }

  &__title {
    position: relative;
    margin-bottom: $spacing-6 !important;
    color: $bg-white;
  }

  .u-container-lg {
    @include rwd-min(md) {
      max-width: 880px !important;
    }
  }
}

.g-series-card-container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -$spacing-5;

  @include rwd-min(sm) {
    margin: -$spacing-6;
  }

  @include rwd-min(md) {
    justify-content: space-evenly;
    margin: -$spacing-4;
  }
}

.g-series-card-wrapper {
  position: relative;
  width: 100%;
  height: 330px;
  padding: $spacing-5;

  @include rwd-min(sm) {
    width: 50%;
    padding: $spacing-6;
  }

  @include rwd-min(md) {
    width: 25%;
    padding: $spacing-4;
  }
}

.g-series-card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: $spacing-3;
  background-color: #cccccc;
  text-decoration: none;

  @include rwd-min(sm) {
    padding: $spacing-5;
    max-width: 240px;
    background-position: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: $g-blue-1, $alpha: 0);
    transition: background-color 0.15s ease-in-out;
  }

  &:hover {
    &::before {
      background-color: rgba($color: $g-blue-1, $alpha: 0.5);
    }

    .g-series-card__btn {
      color: $black;
      background-color: $font-color-light;
    }

    .g-series-card__btn-arrow {
      transform: translate($spacing-1, -50%);
    }

    path {
      fill: $black;
    }
  }

  &__bg {
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    position: relative;
    color: $bg-white;
  }

  &__btn {
    @include reset-btn;

    position: relative;
    width: 100%;
    max-width: 180px;
    height: 50px;
    color: $font-color-light;
    border-radius: 30px;
    border: solid 1px $font-color-light;
    transition: 0.15s ease-in-out;
  }

  &__btn-arrow {
    position: absolute;
    right: $spacing-3;
    top: 50%;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    transition: 0.15s ease-in-out;

    path {
      fill: $font-color-light;
    }
  }
}
</style>
