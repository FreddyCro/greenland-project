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

const getVideoPath = (env) => {
  return env === 'production'
    ? process.env.VUE_APP_VIDEO_PATH
    : 'http://localhost:8080/vid/';
};

export { getPublicPath, getVideoPath };
