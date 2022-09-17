const landingString = require('./src/assets/string/landing.json');
const climateString = require('./src/assets/string/climate.json');
const farmingString = require('./src/assets/string/farming.json');
const fishingString = require('./src/assets/string/fishing.json');
const livingString = require('./src/assets/string/living.json');

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

const ENV = process.env.VUE_APP_MODE;
const PUBLIC_PATH = getPublicPath(ENV);
const robot = ENV === 'production' ? 'index,follow' : 'noindex,nofollow';

module.exports = {
  publicPath: PUBLIC_PATH,
  pages: {
    index: {
      entry: 'src/pages/landing/main.js',
      template: 'public/index.html',
      title: landingString.metaTitle,
      metaTitle: landingString.metaTitle,
      metaDescription: landingString.metaDescription,
      metaUrl: `${PUBLIC_PATH}`,
      metaImage: `${PUBLIC_PATH}img/og.jpg`,
      metaKeywords: landingString.metaKeywords,
      metaRobot: robot,
      metaAuthor: landingString.metaAuthor,
      metaCopyright: landingString.metaCopyright,
      metaPublish: landingString.metaPublish,
      metaModified: landingString.metaModified,
    },
    climate: {
      publicPath: PUBLIC_PATH,
      entry: 'src/pages/climate/main.js',
      template: 'public/index.html',
      filename: 'climate/index.html',
      title: climateString.metaTitle,
      metaTitle: climateString.metaTitle,
      metaDescription: climateString.metaDescription,
      metaUrl: `${PUBLIC_PATH}climate/`,
      metaImage: `${PUBLIC_PATH}img/climate/og.jpg`,
      metaKeywords: climateString.metaKeywords,
      metaRobot: robot,
      metaAuthor: climateString.metaAuthor,
      metaCopyright: climateString.metaCopyright,
      metaPublish: climateString.metaPublish,
      metaModified: climateString.metaModified,
    },
    farming: {
      publicPath: PUBLIC_PATH,
      entry: 'src/pages/farming/main.js',
      template: 'public/index.html',
      filename: 'farming/index.html',
      title: farmingString.metaTitle,
      metaTitle: farmingString.metaTitle,
      metaDescription: farmingString.metaDescription,
      metaUrl: `${PUBLIC_PATH}farming/`,
      metaImage: `${PUBLIC_PATH}img/farming/og.jpg`,
      metaKeywords: farmingString.metaKeywords,
      metaRobot: robot,
      metaAuthor: farmingString.metaAuthor,
      metaCopyright: farmingString.metaCopyright,
      metaPublish: farmingString.metaPublish,
      metaModified: farmingString.metaModified,
    },
    fishing: {
      publicPath: PUBLIC_PATH,
      entry: 'src/pages/fishing/main.js',
      template: 'public/index.html',
      filename: 'fishing/index.html',
      title: fishingString.metaTitle,
      metaTitle: fishingString.metaTitle,
      metaDescription: fishingString.metaDescription,
      metaUrl: `${PUBLIC_PATH}fishing/`,
      metaImage: `${PUBLIC_PATH}img/fishing/og.jpg`,
      metaKeywords: fishingString.metaKeywords,
      metaRobot: robot,
      metaAuthor: fishingString.metaAuthor,
      metaCopyright: fishingString.metaCopyright,
      metaPublish: fishingString.metaPublish,
      metaModified: fishingString.metaModified,
    },
    living: {
      publicPath: PUBLIC_PATH,
      entry: 'src/pages/living/main.js',
      template: 'public/index.html',
      filename: 'living/index.html',
      title: livingString.metaTitle,
      metaTitle: livingString.metaTitle,
      metaDescription: livingString.metaDescription,
      metaUrl: `${PUBLIC_PATH}living/`,
      metaImage: `${PUBLIC_PATH}img/living/og.jpg`,
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
