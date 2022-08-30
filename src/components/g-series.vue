<template lang="pug">
.g-series.u-section
  .g-container-lg
    h2.g-series__title(v-html="str.seriesTitle")

    .g-series-card-container
      a.g-series-card.g-series-card--landing(:href="str.seriesLandingUrl")
        p.g-series-card__title(v-html="str.seriesLandingTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText")
      a.g-series-card.g-series-card--climate(:href="str.seriesClimateUrl")
        p.g-series-card__title(v-html="str.seriesClimateTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText") 
      a.g-series-card.g-series-card--fishing(:href="str.seriesFishingUrl")
        p.g-series-card__title(v-html="str.seriesFishingTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText")
      a.g-series-card.g-series-card--farming(:href="str.seriesFarmingUrl")
        p.g-series-card__title(v-html="str.seriesFarmingTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText")
      a.g-series-card.g-series-card--living(:href="str.seriesLivingUrl")
        p.g-series-card__title(v-html="str.seriesLivingTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText")
</template>

<script>
import str from '@/assets/string/series.json';

export default {
  name: 'g-series',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      str,
    };
  },
};
</script>

<style lang="scss">
.g-series {
  text-align: center;
  background-color: $footer-gray;

  &__title {
    margin-bottom: $spacing-5 !important;
    color: $bg-white;
  }
}

.g-series-card-container {
  display: flex;
  justify-content: space-between;
}

.g-series-card {
  width: 25%;
  max-width: 240px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 $spacing-4;
  color: $bg-white;
  background-color: #cccccc;

  &--landing {
    /* @include bg-3x(); */
  }
  &--climate {
  }
  &--fishing {
  }
  &--farming {
  }
  &--living {
  }

  &__title {
  }

  &__btn {
    @include reset-btn;

    width: 180px;
    height: 50px;
    color: $bg-white;
    border-radius: 30px;
  }
}
</style>
