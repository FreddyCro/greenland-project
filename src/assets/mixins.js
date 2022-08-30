import debounce from 'debounce';

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

export { rwd };
