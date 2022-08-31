const landingString = require('./src/assets/string/landing.json');
// const climateString = require('./src/assets/string/climate.json');
// const farmingString = require('./src/assets/string/farming.json');
// const fishingString = require('./src/assets/string/fishing.json');
// const livingString = require('./src/assets/string/living.json');
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

const ENV = 'test';

/* production */
const productionPath =
  process.env.NODE_ENV === 'production'
    ? 'https://vip.udn.com/newmedia/2022/greenland/'
    : 'http://localhost:8080/';

/* testing */
const testingPath =
  process.env.NODE_ENV === 'production'
    ? 'https://freddycro.github.io/test-page/'
    : 'http://localhost:8080/';

const publicPath = ENV === 'production' ? productionPath : testingPath;

module.exports = {
  publicPath,
  pages: {
    index: {
      entry: 'src/pages/landing/main.js',
      template: 'public/index.html',
      title: landingString.metaTitle,
      metaTitle: landingString.metaTitle,
      metaDescription: landingString.metaDescription,
      metaUrl: landingString.metaUrl,
    },
    climate: {
      entry: 'src/pages/climate/main.js',
      filename: 'climate/index.html',
    },
    farming: {
      entry: 'src/pages/farming/main.js',
      filename: 'farming/index.html',
    },
    fishing: {
      entry: 'src/pages/fishing/main.js',
      filename: 'fishing/index.html',
    },
    living: {
      entry: 'src/pages/living/main.js',
      filename: 'living/index.html',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();

    config.resolve.alias.set('~', resolve('client/src/assets'));
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: ` @import "@/assets/style/_variables.scss"; @import "@/assets/style/_mixins.scss";`,
      },
    },
  },
};
