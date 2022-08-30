<template lang="pug">
//- greenland landing map
.glm(ref="glm")
  .glm-map(:class="{'glm-map--under': status === 'under'}")
    .glm-map__bg-wrapper(:class="glmMapClass")
      .glm-map__bg-nav(:class="`glm-map__bg-nav--step-${activeIndex}`")
        g-pic(
          src="/img/landing/map/greenland_map8_1"
          ext="png"
          alt="greenland map"
          classname="glm-map__bg"
          :webp="true"
          :use2x="false"
          :use3x="false"
        )

        .glm-map__item(
          :class="greenland.classname"
          v-text="greenland.name"
          :style="{'left': `${greenland.left}%`, 'top': `${greenland.top}%`, transfrom: transfrom}"
        ) 
        .glm-map__item(
          v-for="city in Object.values(cities)"
          :class="city.classname"
          :key="city.classname"
          :style="{'left': `${city.left}%`, 'top': `${city.top}%`, transfrom: transfrom}"
        ) {{ city.name }}

        //- earth
        img.earth(src="/img/landing/icon/map_earth.svg" alt="earth")

        //- pin
        img.pin(
          src="/img/landing/icon/map_coordinate.svg"
          alt="pin"
          :style="{'left': `${pinCoordinate.left}%`, 'top': `${pinCoordinate.top}%`, transfrom: transfrom}"
        )

  .glm-text
    section.u-section.glm-section.glm-mystery(ref="section-1")
      .glm-container.u-paragraph
        h2(v-html="str.mapMysteryTitle")
        p(
          v-for="p, index in str.mapMysteryText"
          :key="`mapMysteryText-${index}`"
          v-html="p"
        )

    section.u-section.glm-section.glm-scientist(ref="section-2")
      .glm-container.u-paragraph
        h2(v-html="str.mapScientistTitle")
        h3(v-html="str.mapScientistPin")
        p(
          v-for="p, index in str.mapScientistText1"
          :key="`mapScientistText1-${index}`"
          v-html="p"
        )

        g-pic(
          src="/img/landing/map/greenland_pic8_2"
          ext="jpg"
          :alt="str.mapFarmingTitle"
          :webp="true"
        )
        p(
          v-for="p, index in str.mapScientistText2"
          :key="`mapScientistText2-${index}`"
          v-html="p"
        )
        a(
          :href="str.mapScientistStoryUrl"
          v-html="str.mapScientistStoryTitle"
        )

    section.u-section.glm-section.glm-fishing(ref="section-3")
      .glm-container.u-paragraph
        h2(v-html="str.mapFishingTitle")
        h3(v-html="str.mapFishingPin")
        p(
          v-for="p, index in str.mapFishingText1"
          :key="`mapFishingText1-${index}`"
          v-html="p"
        )
        g-pic(
          src="/img/landing/map/greenland_pic8_3"
          ext="jpg"
          :alt="str.mapFarmingTitle"
          :webp="true"
        )
        p(
          v-for="p, index in str.mapFishingText2"
          :key="`mapFishingText2-${index}`"
          v-html="p"
        )
        a(
          :href="str.mapFishingStoryUrl"
          v-html="str.mapFishingStoryTitle"
        )

    section.u-section.glm-section.glm-farming(ref="section-4")
      .glm-container.u-paragraph
        h2(v-html="str.mapFarmingTitle")
        h3(v-html="str.mapFarmingPin")
        p(
          v-for="p, index in str.mapFarmingText1"
          :key="`mapFarmingText1-${index}`"
          v-html="p"
        )
        g-pic(
          src="/img/landing/map/greenland_pic8_4"
          ext="jpg"
          :alt="str.mapFarmingTitle"
          :webp="true"
        )
        p(
          v-for="p, index in str.mapFarmingText2"
          :key="`mapFarmingText2-${index}`"
          v-html="p"
        )
        a(
          :href="str.mapFarmingStoryUrl"
          v-html="str.mapFarmingStoryTitle"
        )

    section.u-section.glm-section.glm-living(ref="section-5")
      .glm-container.u-paragraph
        h2(v-html="str.mapLivingTitle")
        h3(v-html="str.mapLivingPin")
        p(
          v-for="p, index in str.mapLivingText1"
          :key="`mapLivingText1-${index}`"
          v-html="p"
        )
        g-pic(
          src="/img/landing/map/greenland_pic8_5"
          ext="jpg"
          :alt="str.mapFarmingTitle"
          :webp="true"
        )
        p(
          v-for="p, index in str.mapLivingText2"
          :key="`mapLivingText2-${index}`"
          v-html="p"
        )
        a(
          :href="str.mapLivingStoryUrl"
          v-html="str.mapLivingStoryTitle"
        )
</template>

<script>
import GPic from '@/components/g-pic.vue';
import str from '@/assets/string/landing.json';
import { linearIntersectionObserver } from '@/assets/js/observer.js';

export default {
  name: 'landing-map',
  components: {
    GPic,
  },
  data() {
    return {
      str,
      status: 'above',
      activeIndex: 0,
      activeIndexList: [],
      step: ['', 'kaikai', 'sisi', 'cack', 'nuuk'],
      pin: {
        left: '29',
        top: '48',
      },
      greenland: {
        classname: 'island',
        name: '格陵蘭',
        left: '54',
        top: '33',
      },
      cities: {
        kaikai: {
          classname: 'kaikai',
          name: '凱凱塔蘇瓦克',
          left: '27',
          top: '48',
        },
        ilu: {
          classname: 'ilu temp',
          name: '伊魯利薩特',
          left: '44',
          top: '49',
        },
        sisi: {
          classname: 'sisi',
          name: '西西穆特',
          left: '32',
          top: '57',
        },
        konck: {
          classname: 'konck temp',
          name: '康克魯斯瓦克',
          left: '44',
          top: '57',
        },
        nuuk: {
          classname: 'nuuk',
          name: '努克',
          left: '36',
          top: '67',
        },
        nasas: {
          classname: 'nasas temp',
          name: '納沙斯瓦克',
          left: '46',
          top: '75',
        },
        nasak: {
          classname: 'nasak temp',
          name: '納沙克',
          left: '44',
          top: '77',
        },
        cack: {
          classname: 'cack',
          name: '卡科爾托克',
          left: '43',
          top: '79',
        },
      },
    };
  },
  computed: {
    pinCoordinate() {
      const currentStep = this.step[this.activeIndex];

      return {
        left: this.cities[currentStep]
          ? `${this.cities[currentStep].left}`
          : `${this.pin.left}`,
        top: this.cities[currentStep]
          ? `${this.cities[currentStep].top}`
          : `${this.pin.top}`,
      };
    },
    glmMapClass() {
      return {
        'glm-map__bg-wrapper--above': this.status === 'above',
        'glm-map__bg-wrapper--enter': this.status === 'enter',
        'glm-map__bg-wrapper--under': this.status === 'under',
      };
    },
    transfrom() {
      return `translate(0, 0)`;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize, { passive: true });
  },
  mounted() {
    // initialize
    this.init();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
    window.removeEventListener('resize', this.handleResize, { passive: true });
  },
  methods: {
    handleScroll() {
      const el = this.$refs.glm;
      const pos = el.getBoundingClientRect();
      const topBound = 0;
      const bottomBound = window.innerHeight;

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
    init() {
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
  },
};
</script>

<style lang="scss">
.glm {
  position: relative;

  @include rwd-min(md) {
    display: flex;
    flex-direction: row-reverse;
    background-color: $bg-white;
  }
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
    @include u-container-sm;
  }

  @include rwd-min(md) {
    max-width: 100%;
    padding-left: $spacing-7;
  }

  @include rwd-min(lg) {
    padding-left: $spacing-9;
  }
}

.glm-text {
  position: relative;

  @include rwd-min(md) {
    width: 50%;
    padding: $spacing-10;
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

    &--above {
      position: relative;
      right: 0;
      top: 0;
    }

    &--enter {
      position: fixed;
      right: 0;
      top: 0;

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

  &__bg-nav {
    transition: 0.5s ease-in-out;

    &--step-1 {
      transform: scale(1.35);
      transform-origin: 40% 70%;
    }

    &--step-2 {
      transform: scale(1.35);
      transform-origin: 40% 60%;

      .temp {
        opacity: 0;
      }
    }

    &--step-3 {
      transform: scale(1.5);
      transform-origin: 40% 70%;

      .temp {
        opacity: 0;
      }
    }

    &--step-4 {
      transform: scale(2);
      transform-origin: 40% 80%;

      .temp {
        opacity: 0;
      }

      .kaikai,
      .sisi {
        opacity: 0;
      }
    }
  }

  &__bg {
    width: 100%;
    height: 100%;
    display: flex;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: 80% center;
    }

    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  &__item {
    position: absolute;
    color: #fafafa;
    transition: 0.333s ease-in-out;

    &.island {
      color: #d8d8d8;
    }

    &.ilu,
    &.konck,
    &.nasas {
      color: #808080;
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
}
</style>
