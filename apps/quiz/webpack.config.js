const path = require('path');

const { webpackConfig } = require('@portfolio-app/webpack');

module.exports = (_env = {}, { mode }) =>
  webpackConfig({
    mode,
    moduleFederation: { name: 'quiz', exposes: require('./exports.json') },
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@steps': path.resolve(__dirname, 'src/steps'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
    },
  });
