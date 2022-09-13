const landingString = require('./src/assets/string/landing.json');
const climateString = require('./src/assets/string/climate.json');
const farmingString = require('./src/assets/string/farming.json');
const fishingString = require('./src/assets/string/fishing.json');
const livingString = require('./src/assets/string/living.json');

const ENV = process.env.MODE;
const getPublicPath = (env) => {
  /* production */
  const productionPath =
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_PRODUCTION_PATH
      : 'http://localhost:8080/';

  /* testing */
  const testingPath =
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_TEST_PATH
      : 'http://localhost:8080/';

  return env === 'production' ? productionPath : testingPath;
};

const publicPath = getPublicPath(ENV);
const robot = ENV === 'production' ? 'index,follow' : 'noindex,nofollow';

module.exports = {
  publicPath,
  pages: {
    index: {
      entry: 'src/pages/landing/main.js',
      template: 'public/index.html',
      title: landingString.metaTitle,
      metaTitle: landingString.metaTitle,
      metaDescription: landingString.metaDescription,
      metaUrl: `${publicPath}`,
      metaImage: `${publicPath}img/og.jpg`,
      metaKeywords: landingString.metaKeywords,
      metaRobot: robot,
      metaAuthor: landingString.metaAuthor,
      metaCopyright: landingString.metaCopyright,
      metaPublish: landingString.metaPublish,
      metaModified: landingString.metaModified,
    },
    climate: {
      publicPath,
      entry: 'src/pages/climate/main.js',
      template: 'public/index.html',
      filename: 'climate/index.html',
      title: climateString.metaTitle,
      metaTitle: climateString.metaTitle,
      metaDescription: climateString.metaDescription,
      metaUrl: `${publicPath}climate/`,
      metaImage: `${publicPath}img/climate/og.jpg`,
      metaKeywords: climateString.metaKeywords,
      metaRobot: robot,
      metaAuthor: climateString.metaAuthor,
      metaCopyright: climateString.metaCopyright,
      metaPublish: climateString.metaPublish,
      metaModified: climateString.metaModified,
    },
    farming: {
      publicPath,
      entry: 'src/pages/farming/main.js',
      template: 'public/index.html',
      filename: 'farming/index.html',
      title: farmingString.metaTitle,
      metaTitle: farmingString.metaTitle,
      metaDescription: farmingString.metaDescription,
      metaUrl: `${publicPath}farming/`,
      metaImage: `${publicPath}img/farming/og.jpg`,
      metaKeywords: farmingString.metaKeywords,
      metaRobot: robot,
      metaAuthor: farmingString.metaAuthor,
      metaCopyright: farmingString.metaCopyright,
      metaPublish: farmingString.metaPublish,
      metaModified: farmingString.metaModified,
    },
    fishing: {
      publicPath,
      entry: 'src/pages/fishing/main.js',
      template: 'public/index.html',
      filename: 'fishing/index.html',
      title: fishingString.metaTitle,
      metaTitle: fishingString.metaTitle,
      metaDescription: fishingString.metaDescription,
      metaUrl: `${publicPath}fishing/`,
      metaImage: `${publicPath}img/fishing/og.jpg`,
      metaKeywords: fishingString.metaKeywords,
      metaRobot: robot,
      metaAuthor: fishingString.metaAuthor,
      metaCopyright: fishingString.metaCopyright,
      metaPublish: fishingString.metaPublish,
      metaModified: fishingString.metaModified,
    },
    living: {
      publicPath,
      entry: 'src/pages/living/main.js',
      template: 'public/index.html',
      filename: 'living/index.html',
      title: livingString.metaTitle,
      metaTitle: livingString.metaTitle,
      metaDescription: livingString.metaDescription,
      metaUrl: `${publicPath}living/`,
      metaImage: `${publicPath}living/og.jpg`,
      metaKeywords: livingString.metaKeywords,
      metaRobot: robot,
      metaAuthor: livingString.metaAuthor,
      metaCopyright: livingString.metaCopyright,
      metaPublish: livingString.metaPublish,
      metaModified: livingString.metaModified,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/_variables.scss"; @import "@/assets/style/_mixins.scss";`,
      },
    },
  },
};
