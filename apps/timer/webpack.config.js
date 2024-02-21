const path = require('path');

const { webpackConfig } = require('@portfolio-app/webpack');

module.exports = (_env = {}, { mode }) =>
  webpackConfig({
    mode,
    moduleFederation: {
      name: 'timer',
      remotes: {
        core: 'core',
      },
      exposes: require('./exports.json'),
    },
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  });
