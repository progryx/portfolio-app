const path = require('path');

const { webpackConfig } = require('@portfolio-app/webpack');

module.exports = (_env = {}, { mode }) =>
  webpackConfig({
    currentPath: __dirname,
    mode,
    moduleFederation: {
      name: 'dashboard',
      remotes: {
        core: 'core',
      },
      exposes: require('./exports.json'),
    },
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
    },
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
        ],
      },
    ],
  });
