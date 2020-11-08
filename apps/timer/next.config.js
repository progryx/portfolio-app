const { withModuleFederation, MergeRuntime } = require('@module-federation/nextjs-mf');
const withTM = require('@module-federation/next-transpile-modules')(
  ['@portfolio-app/icons', '@portfolio-app/utilities'],
  { unstable_webpack5: true }
);
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// const path = require('path');

module.exports = withPlugins(
  [
    withTM,
    [
      optimizedImages,
      {
        optimizeImages: false,
      },
    ],
  ],
  {
    webpack: (config, options) => {
      const { buildId, dev, isServer, defaultLoaders, webpack } = options;
      const mfConf = {
        name: 'timer',
        library: { type: config.output.libraryTarget, name: 'timer' },
        filename: 'static/runtime/remoteEntry.js',
        remotes: {},
        exposes: require('./exports.json'),
        shared: {
          // react: {
          //   eager: true,
          //   version: '17.0.1',
          // },
          // 'react-dom': {
          //   eager: true,
          // },
          // '@material-ui/core': {
          //   eager: true,
          // },
          // '@material-ui/icons': {
          //   eager: true,
          // },
        },
      };

      config.module.rules.push(
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        { test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000'] }
      );

      // Configures ModuleFederation and other Webpack properties
      withModuleFederation(config, options, mfConf);

      config.plugins.push(new MergeRuntime());

      if (!isServer) {
        config.output.publicPath = 'http://localhost:3001/_next/';
      }

      return config;
    },
  }
);
