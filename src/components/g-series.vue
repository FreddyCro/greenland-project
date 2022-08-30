<template lang="pug">
.g-series.u-section
  .g-container-lg.g-series__content
    h2.g-series__title(v-html="str.seriesTitle")

    .g-series-card-container
      a.g-series-card.g-series-card--landing(
        v-if="list.includes('landing')"
        :href="str.seriesLandingUrl"
      )
        p.g-series-card__title(v-html="str.seriesLandingTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText")
      a.g-series-card.g-series-card--climate(
        v-if="list.includes('climate')"
        :href="str.seriesClimateUrl"
      )
        p.g-series-card__title(v-html="str.seriesClimateTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText") 
      a.g-series-card.g-series-card--fishing(
        v-if="list.includes('fising')"
        :href="str.seriesFishingUrl"
      )
        p.g-series-card__title(v-html="str.seriesFishingTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText")
      a.g-series-card.g-series-card--farming(
        v-if="list.includes('farming')"
        :href="str.seriesFarmingUrl"
      )
        p.g-series-card__title(v-html="str.seriesFarmingTitle")
        button.g-series-card__btn(v-html="str.seriesButtonText")
      a.g-series-card.g-series-card--living(
        v-if="list.includes('living')"
        :href="str.seriesLivingUrl"
      )
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
  position: relative;
  text-align: center;
  background-color: $bg-white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-color: $g-blue-1;

    @include rwd-min(md) {
      height: 70%;
    }
  }

  &__content {
    position: relative;
  }

  &__title {
    margin-bottom: $spacing-5 !important;
    color: $bg-white;
  }
}

.g-series-card-container {
  @include rwd-min(md) {
    display: flex;
    justify-content: space-evenly;
  }
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
