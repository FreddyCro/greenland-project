<template>
  <header
    :class="{
      'header-bar': true,
      'header-bar--hide': !activeFlag,
    }"
  >
    <HeaderMenu
      :menuActiveFlag="menuActiveFlag"
      :simplified="true"
      :outlink="outlink"
      :handleHamburgerClick="handleHamburgerClick"
    >
      <slot />
    </HeaderMenu>
    <div class="header-bar__nav__container">
      <nav class="header-bar__nav">
        <a
          class="header-bar__logo"
          :href="href"
          target="_self"
          rel="noopener"
          aria-label="聯logo"
          name="聯logo"
          @click="sendGA({ nmdCommon: 'HeaderUdnLogo' })"
        >
          <img src="img/logo_head_melting_greenland.svg" alt="project logo" />
        </a>
      </nav>
      <nav class="header-bar__nav">
        <div class="header-bar-share__container">
          <div class="header-bar-share__share-icon">
            <share-network
              network="facebook"
              :title="title"
              :description="description"
              :url="url"
            >
              <ShareFb />
            </share-network>
          </div>
          <div class="header-bar-share__share-icon">
            <share-network
              network="line"
              :title="title"
              :description="description"
              :url="url"
            >
              <ShareLine />
            </share-network>
          </div>
          <div class="header-bar-share__share-icon">
            <share-network
              network="twitter"
              :title="title"
              :description="description"
              :url="url"
            >
              <ShareTwitter />
            </share-network>
          </div>
        </div>
        <div
          class="header-bar__hamburder-container"
          @click="handleHamburgerClick"
        >
          <HeaderHamburger :menuActiveFlag="menuActiveFlag" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import HeaderHamburger from '@/components/common/header/HeaderHamburger.vue';
import HeaderMenu from '@/components/common/header/HeaderMenu.vue';
import ShareFb from '@/components/common/header/ShareFb.vue';
import ShareLine from '@/components/common/header/ShareLine.vue';
import ShareTwitter from '@/components/common/header/ShareTwitter.vue';
import debounce from 'debounce';
import { sendGa } from '@/assets/mixins';
import { handleBodyScrollbar } from '@/assets/js/udn-newmedia-utils';

export default {
  name: 'HeaderTypeA',
  mixins: [sendGa],
  props: {
    href: {
      type: String,
      default: document.querySelector('meta[property="og:url"]').content,
    },
    outlink: {
      type: Array,
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  components: {
    HeaderHamburger,
    HeaderMenu,
    ShareFb,
    ShareLine,
    ShareTwitter,
  },
  data() {
    return {
      activeFlag: true,
      menuActiveFlag: false,
      lastPosition: window.pageYOffset,
      ticking: false,
    };
  },
  methods: {
    handleHamburgerClick() {
      this.menuActiveFlag = !this.menuActiveFlag;
      handleBodyScrollbar(this.menuActiveFlag, 0);
      if (this.menuActiveFlag) this.sendGA({ nmdCommon: 'HeaderMenuOpen' });
      else this.sendGA({ nmdCommon: 'HeaderMenuClose' });
    },
    handleScroll: debounce(
      function () {
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            // activeFlag
            if (!this.menuActiveFlag) {
              if (this.lastPosition >= window.pageYOffset)
                this.activeFlag = true;
              else this.activeFlag = false;
              this.lastPosition = window.pageYOffset;
            }
            this.ticking = false;
          });
        }
        this.ticking = true;
      },
      30,
    ),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/_nmd-mixins';

.header-bar {
  position: fixed;
  z-index: 4999;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  transition: 0.333s linear;

  &.header-bar--hide {
    pointer-events: none;
    transition: 0.333s 0.666s linear;
    transform: translateY(-100%);
  }

  .header-bar__nav__container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-bar__nav {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-bar__logo {
    @include clean-tap;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: $spacing-4;
    text-decoration: none;
    cursor: pointer;
    transition: 0.333s ease-in;

    &:hover {
    }

    img {
      height: 100%;
      max-height: none;
    }
  }

  .header-bar-share__container {
    position: relative;
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 0.333s ease-in-out;

    .header-bar-share__share-icon {
      flex-shrink: 0;
      position: relative;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      @include clean-btn;
    }
  }

  .header-bar__hamburder-container {
    position: relative;
  }
}
</style>
