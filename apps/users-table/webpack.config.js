const path = require('path');

const { webpackConfig } = require('@portfolio-app/webpack');

module.exports = (_env = {}, { mode }) =>
  webpackConfig({
    mode,
    moduleFederation: { name: 'users', exposes: require('./exports.json') },
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
    },
  });
