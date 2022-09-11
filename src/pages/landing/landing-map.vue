<template lang="pug">
//- greenland landing map
.glm.u-paragraph(ref="glm" :class="{'glm--active': isMapEnter}")
  .glm-map(:class="{'glm-map--under': status === 'under'}")
    .glm-map__bg-wrapper(:class="glmMapClass")
      .glm-map-nav(:class="`glm-map-nav--step-${activeIndex}`")
        g-pic(
          src="img/landing/map/greenland_map8_1"
          ext="png"
          alt="greenland map"
          classname="glm-map__bg"
          :webp="true"
          :use2x="false"
          :use3x="false"
        )
        .glm-map__pin-wrapper
          landing-map-pin-mob(
            :index="activeIndex"
            :step="step"
            :progress="progress"
          )
          landing-map-pin-pad(
            :index="activeIndex"
            :step="step"
            :progress="progress"
          )
          landing-map-pin-pc(
            :index="activeIndex"
            :step="step"
            :progress="progress"
          )

  .glm-text
    section.u-section.glm-section.glm-mystery(ref="section-1")
      .glm-container
        .glm-title
          h2(v-html="str.mapMysteryTitle")
        p(
          v-for="p, index in str.mapMysteryText"
          :key="`mapMysteryText-${index}`"
          v-html="p"
        )

    section.u-section.glm-section.glm-scientist#climate(ref="section-2")
      .glm-container
        .glm-title
          h2(v-html="str.mapScientistTitle")
          .glm-subtitle
            span
              img(src="img/landing/icon/logo_place.svg", alt="pin")
            span(v-html="str.mapScientistPin")
        p(
          v-for="p, index in str.mapScientistText1"
          :key="`mapScientistText1-${index}`"
          v-html="p"
        )
        .glm-pic-wrapper
          g-pic(
            src="img/landing/map/greenland_pic8_2"
            ext="jpg"
            :alt="str.mapFarmingTitle"
            :webp="true"
            classname="u-full-width-img"
          )
        p(
          v-for="p, index in str.mapScientistText2"
          :key="`mapScientistText2-${index}`"
          v-html="p"
        )
        a.glm-anchor(
          :href="str.mapScientistStoryUrl"
          target="_blank"
        )
          g-button(:text="str.mapScientistStoryTitle" classname="glm-button")

    section.u-section.glm-section.glm-fishing#fishing(ref="section-3")
      .glm-container
        .glm-title
          h2(v-html="str.mapFishingTitle")
          .glm-subtitle
            span
              img(src="img/landing/icon/logo_place.svg", alt="pin")
            span(v-html="str.mapFishingPin")
        p(
          v-for="p, index in str.mapFishingText1"
          :key="`mapFishingText1-${index}`"
          v-html="p"
        )
        .glm-pic-wrapper
          g-pic(
            src="img/landing/map/greenland_pic8_3"
            ext="jpg"
            :alt="str.mapFarmingTitle"
            :webp="true"
            classname="u-full-width-img"
          )
        p(
          v-for="p, index in str.mapFishingText2"
          :key="`mapFishingText2-${index}`"
          v-html="p"
        )
        a.glm-anchor(
          :href="str.mapFishingStoryUrl"
          target="_blank"
        )
          g-button(:text="str.mapFishingStoryTitle" classname="glm-button")

    section.u-section.glm-section.glm-farming#farming(ref="section-4")
      .glm-container
        .glm-title
          h2(v-html="str.mapFarmingTitle")
          .glm-subtitle
            span
              img(src="img/landing/icon/logo_place.svg", alt="pin")
            span(v-html="str.mapFarmingPin")
        p(
          v-for="p, index in str.mapFarmingText1"
          :key="`mapFarmingText1-${index}`"
          v-html="p"
        )
        .glm-pic-wrapper
          g-pic(
            src="img/landing/map/greenland_pic8_4"
            ext="jpg"
            :alt="str.mapFarmingTitle"
            :webp="true"
            classname="u-full-width-img"
          )
        p(
          v-for="p, index in str.mapFarmingText2"
          :key="`mapFarmingText2-${index}`"
          v-html="p"
        )
        a.glm-anchor(
          :href="str.mapFarmingStoryUrl"
          target="_blank"
        )
          g-button(:text="str.mapFarmingStoryTitle" classname="glm-button")

    section.u-section.glm-section.glm-living(ref="section-5")
      .glm-container
        .glm-title
          h2(v-html="str.mapLivingTitle")
          .glm-subtitle
            span
              img(src="img/landing/icon/logo_place.svg", alt="pin")
            span(v-html="str.mapLivingPin")
        p(
          v-for="p, index in str.mapLivingText1"
          :key="`mapLivingText1-${index}`"
          v-html="p"
        )
        .glm-pic-wrapper
          g-pic(
            src="img/landing/map/greenland_pic8_5"
            ext="jpg"
            :alt="str.mapFarmingTitle"
            :webp="true"
            classname="u-full-width-img"
          )
        p(
          v-for="p, index in str.mapLivingText2"
          :key="`mapLivingText2-${index}`"
          v-html="p"
        )
        a.glm-anchor(
          :href="str.mapLivingStoryUrl"
          target="_blank"
        )
          g-button(:text="str.mapLivingStoryTitle" classname="glm-button")
</template>

<script>
import GPic from '@/components/g-pic.vue';
import GButton from '@/components/g-button.vue';
import LandingMapPinMob from '@/pages/landing/landing-map-pin-mob.vue';
import LandingMapPinPad from '@/pages/landing/landing-map-pin-pad.vue';
import LandingMapPinPc from '@/pages/landing/landing-map-pin-pc.vue';
import str from '@/assets/string/landing.json';
import {
  onceIntersectionObserver,
  linearIntersectionObserver,
} from '@/assets/js/observer.js';
import { calcElementProgress } from '@/assets/js/progress.js';
import debounce from 'debounce';

export default {
  name: 'landing-map',
  components: {
    GPic,
    GButton,
    LandingMapPinMob,
    LandingMapPinPad,
    LandingMapPinPc,
  },
  data() {
    return {
      str,
      status: 'above',
      isMapEnter: false,
      activeIndex: 0,
      activeIndexList: [],
      step: ['kaikai', 'kaikai', 'sisi', 'cack', 'nuuk'],
      progress: 0.01,
    };
  },
  computed: {
    glmMapClass() {
      return {
        'glm-map__bg-wrapper--above': this.status === 'above',
        'glm-map__bg-wrapper--enter': this.status === 'enter',
        'glm-map__bg-wrapper--under': this.status === 'under',
      };
    },
  },
  mounted() {
    onceIntersectionObserver(this.$refs.glm, this.init);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  },
  methods: {
    init() {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      window.requestAnimationFrame(this.handleScroll);
      this.handleScroll();

      // add io listener for map
      const sectionList = [
        'section-1',
        'section-2',
        'section-3',
        'section-4',
        'section-5',
      ];

      sectionList.forEach((el, i) => {
        this.activeIndexList.push(false);

        const handleEnter = () => {
          this.$refs[el].classList.add('show');
          this.activeIndexList = this.activeIndexList.map((item, index) => {
            if (index === i) this.activeIndex = index;
            if (index <= i) return true;
            return false;
          });

          console.log('enter', i + 1);
        };

        const handleLeave = () => {
          this.activeIndexList.forEach((item, index) => {
            if (item) return;
            this.$refs[sectionList[index]].classList.remove('show');
          });

          console.log('leave', i + 1);
        };

        linearIntersectionObserver(this.$refs[el], handleEnter, handleLeave);
      });
    },
    handleUpdateProgress: debounce(function () {
      // handle pin
      const newProgress = calcElementProgress(
        this.$refs[`section-${this.activeIndex + 1}`]
      );

      const smallDeviceStep = 3;

      if (window.innerWidth < 768) {
        this.progress = Math.min(1, newProgress * smallDeviceStep);
      } else if (window.innerWidth < 1024) {
        this.progress = Math.min(1, newProgress * smallDeviceStep);
      } else {
        this.progress = newProgress;
      }

      console.log('progress: ', this.progress);
    }, 100),
    handleScroll() {
      this.handleUpdateProgress();

      // handle global map
      const el = this.$refs.glm;
      const pos = el.getBoundingClientRect();
      const topBound = 0;
      const bottomBound = window.innerHeight;

      if (pos.top < window.innerHeight) {
        this.isMapEnter = true;
      } else {
        this.isMapEnter = false;
      }

      // | above / leave position
      // |———————————————————————
      // | enter position
      // |———————————————————————
      // | under / leave position

      // enter
      if (pos.top < topBound && pos.bottom > bottomBound) {
        this.status = 'enter';
      } else {
        // leave
        // major.classList.remove(majorEnterClass);

        // above
        if (pos.top >= topBound) {
          this.status = 'above';
        }

        // under
        if (pos.bottom < bottomBound) {
          this.status = 'under';
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/style/landing-map-nav.scss';

.glm {
  position: relative;
  opacity: 0;
  transition: 0.5s ease-in-out;

  &--active {
    opacity: 1;
  }

  @include rwd-min(md) {
    display: flex;
    flex-direction: row-reverse;
    background-color: $bg-white;
  }

  .u-section + .u-section {
    padding-top: $spacing-10;
  }
}

.glm-text {
  position: relative;

  @include rwd-min(md) {
    width: 50%;
    padding: $spacing-10;
  }

  .glm-section {
    margin-top: 100vh;
    background-color: $bg-white;
    opacity: 0.9;

    @include rwd-min(md) {
      background-color: $bg-white;
      opacity: 1;
    }

    &:first-child {
      margin-top: 0;
    }
  }

  .glm-container {
    @include u-container-xxs;

    @include rwd-min(xs) {
      @include u-container-xs;
    }

    @include rwd-min(sm) {
      padding-left: $spacing-12;
      padding-right: $spacing-12;
    }

    @include rwd-min(md) {
      max-width: 100%;
      padding-left: $spacing-7;
      padding-right: 0;
    }

    @include rwd-min(lg) {
      padding-left: $spacing-9;
    }
  }

  .glm-title {
    margin-bottom: $spacing-8;

    h2 {
      margin-bottom: $spacing-2 !important;
    }
  }

  .glm-subtitle {
    @include general-font-h4;

    span {
      margin-right: $spacing-2;
    }

    img {
      width: 10px;
    }
  }

  .glm-pic-wrapper {
    margin: $spacing-8 0;
  }

  .glm-anchor {
    display: block;
    margin-top: $spacing-11;
    text-align: center;
  }

  .glm-button {
    &:hover {
      background-color: $g-blue-1;
      color: $font-color-light;
      border-color: $g-blue-1;

      path {
        fill: $font-color-light;
      }
    }
  }
}

.glm-map {
  position: relative;
  width: 100%;
  height: 100vh;

  @include rwd-min(md) {
    /* position: sticky;
    top: 0; */
    width: 50%;
  }

  &--under {
    position: static;
  }

  &__bg-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg {
      opacity: 0;
    }

    &--above {
      position: relative;
      right: 0;
      top: 0;
    }

    &--enter {
      position: fixed;
      right: 0;
      top: 0;

      svg {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }

      @include rwd-min(md) {
        width: 50%;
      }
    }

    &--under {
      position: absolute;
      right: 0;
      top: auto;
      bottom: 0;
      height: 100vh;

      @include rwd-min(md) {
        width: 50%;
      }
    }
  }

  &__bg {
    img {
      max-width: none;
      max-height: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  .earth {
    position: absolute;
    right: $spacing-5;
    bottom: $spacing-5;
  }

  .pin {
    position: absolute;
    transition: 1s ease-in-out;
  }

  &__pin-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.glm-mystery {
  margin-top: 50vh !important;

  @include rwd-min(md) {
    margin-top: 100vh !important;
  }
}
</style>
