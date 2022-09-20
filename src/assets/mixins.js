import debounce from 'debounce';
import { detectPlatform } from '@/assets/js/udn-newmedia-utils';
import { calcInterpolation } from '@/assets/js/progress.js';
import { getPublicPath } from '@/assets/js/utils.js';
import InApp from 'detect-inapp';

const inapp = new InApp(
  navigator.userAgent || navigator.vendor || window.opera
);

const gaTable = {
  HeaderShareOpen: {
    category: 'share',
    action: 'click',
    label: 'share_open',
  },
  HeaderShareClose: {
    category: 'share',
    action: 'click',
    label: 'share_close',
  },
  HeaderShareFb: {
    category: 'share',
    action: 'click',
    label: 'fb_top',
  },
  HeaderShareLine: {
    category: 'share',
    action: 'click',
    label: 'line_top',
  },
  HeaderShareTwitter: {
    category: 'share',
    action: 'click',
    label: 'twitter_top',
  },
  HeaderMenuOpen: {
    category: 'menu',
    action: 'click',
    label: 'menu_open',
  },
  HeaderMenuClose: {
    category: 'menu',
    action: 'click',
    label: 'menu_close',
  },
  HeaderUdnLogo: {
    category: 'logo',
    action: 'click',
    label: '圓形聯logo',
  },
  FooterShareFb: {
    category: 'share',
    action: 'click',
    label: 'fb_bottom',
  },
  FooterShareLine: {
    category: 'share',
    action: 'click',
    label: 'line_bottom',
  },
  FooterShareTwitter: {
    category: 'share',
    action: 'click',
    label: 'twitter_bottom',
  },
  CoverArrow: {
    category: 'arrow',
    action: 'click',
    label: 'goto_content',
  },
  PageBackTop: {
    category: 'button',
    action: 'click',
    label: '回到最上面',
  },
  FooterQuestoinnaire: {
    category: 'button',
    action: 'click',
    label: 'feedback',
  },
  FooterLogoDotCom: {
    category: 'logo',
    action: 'click',
    label: '聯合新聞網_logo',
  },
  FooterLogoNMD: {
    category: 'logo',
    action: 'click',
    label: '新媒體中心_logo',
  },
  FooterLogoVision: {
    category: 'logo',
    action: 'click',
    label: '願景工程_logo',
  },
};

const sendGA = ({ item, nmdCommon }) => {
  if (nmdCommon) {
    item = gaTable[nmdCommon];
  }

  window.ga('newmedia.send', {
    hitType: 'event',
    eventCategory: item.category,
    eventAction: item.action,
    eventLabel:
      '[' +
      detectPlatform() +
      '] [' +
      document.querySelector('title').innerHTML +
      '] [' +
      item.label +
      ']',
  });
};

const deviceList = [
  {
    name: 'mob',
    width: 0,
  },
  {
    name: 'pad',
    width: 768,
  },
  {
    name: 'pc',
    width: 1025,
  },
];

const rwd = {
  data() {
    return {
      readProgress: 0,
      lastStage: 0,
      stagePool: [],
    };
  },
  methods: {
    handleScroll: debounce(function () {
      if (!document.querySelector('title')) return;

      const calcProgress = () => {
        const currentHeight = window.pageYOffset;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        return ((currentHeight / totalHeight) * 100).toFixed(2);
      };

      this.readProgress = calcProgress();
      this.lastStage = this.stagePool.length ? Math.max(...this.stagePool) : 0;

      if (this.readProgress < this.lastStage) return;

      for (let i = this.lastStage + 10; i <= this.readProgress; i += 10) {
        this.stagePool.push(i);
        sendGA({
          item: {
            category: 'read',
            action: 'scroll',
            label: `page read: ${i}%`,
          },
        });
      }
    }, 500),
    handleResize: debounce(function () {
      // caculate the device by window width
      let device = 'mob';
      deviceList.forEach((item) => {
        if (window.innerWidth >= item.width) {
          device = item.name;
        }
      });

      // check if the device was changed and emit the event
      if (this.$store.state.device !== device) {
        this.$store.dispatch('setDevice', device);
      }

      // set the full video height
      if (window.innerWidth > 768 || !inapp.isInApp) {
        this.$store.commit('setFullVideoHeight', '100vh');
      } else {
        this.$store.commit(
          'setFullVideoHeight',
          `${this.originalWindowHeight}px`
        );
      }
    }, 100),
  },
  created() {
    this.handleResize();

    this.originalWindowHeight = window.innerHeight;
    this.$store.commit('setFullVideoHeight', `${this.originalWindowHeight}px`);

    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
    window.removeEventListener('resize', this.handleResize);
  },
};

const sendGa = {
  methods: {
    /**
     * @param {string} item.category
     * @param {string} item.action
     * @param {string} item.label
     */
    sendGA({ item, nmdCommon }) {
      sendGA({ item, nmdCommon });
    },
  },
};

const env = {
  data() {
    return {
      PUBLIC_PATH: getPublicPath(process.env.VUE_APP_MODE),
      VIDEO_PATH:
        process.env.NODE_ENV === 'production'
          ? process.env.VUE_APP_VIDEO_PATH
          : 'http://localhost:8080/vid/',
    };
  },
};

const glMap = {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    step: {
      type: Array,
    },
    progress: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      ticking: 0,
    };
  },
  computed: {
    pinCoords() {
      const fromCity =
        this.index === 0 ? this.pin : this.cities[this.step[this.index - 1]];
      const toCity =
        this.index === 0 ? this.pin : this.cities[this.step[this.index]];

      const coords = calcInterpolation({
        startX: fromCity.left,
        startY: fromCity.top,
        endX: toCity.left,
        endY: toCity.top,
        progress: this.progress,
      });

      return {
        left: coords.x,
        top: coords.y,
      };
    },
  },
};

export { rwd, sendGa, glMap, env };
