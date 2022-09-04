import debounce from 'debounce';
import { detectPlatform } from '@/assets/js/udn-newmedia-utils';

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
  methods: {
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
    }, 100),
  },
  created() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
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
    },
  },
};

export { rwd, sendGa };
