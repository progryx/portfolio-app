const { withModuleFederation, MergeRuntime } = require('@module-federation/nextjs-mf');

const withTM = require('@module-federation/next-transpile-modules')(
  ['@portfolio-app/icons', '@portfolio-app/utilities'],
  { unstable_webpack5: true }
);

const optimizedImages = require('next-optimized-images');

const withPlugins = require('next-compose-plugins');

const path = require('path');

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
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack: (config, options) => {
      const { buildId, dev, isServer, defaultLoaders, webpack } = options;
      const mfConf = {
        name: 'core',
        library: { type: config.output.libraryTarget, name: 'core' },
        filename: 'static/runtime/remoteEntry.js',
        remotes: {
          // For SSR, resolve to disk path (or you can use code streaming if you have access)
          timer: isServer
            ? path.resolve(__dirname, '../timer/.next/server/static/runtime/remoteEntry.js')
            : 'timer', // for client, treat it as a global
          dashboard: isServer
            ? path.resolve(
                __dirname,
                '../task-dashboard/.next/server/static/runtime/remoteEntry.js'
              )
            : 'dashboard', // for client, treat it as a global
        },
        exposes: {},
        shared: [],
      };

      config.module.rules.push(
        {
          test: /\.(docx|doc|rtf|txt)$/i,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile: isServer,
                publicPath: `/_next/static/`,
                outputPath: `${isServer ? '../' : ''}static/`,
                name: '[path][name].[ext]',
              },
            },
          ],
        }
      );

      // Configures ModuleFederation and other Webpack properties
      withModuleFederation(config, options, mfConf);

      if (!isServer) {
        config.output.publicPath = 'http://localhost:3000/_next/';
      }

      config.plugins.push(new MergeRuntime());

      return config;
    },
  }
);
