const { withModuleFederation, MergeRuntime } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: 'dashboard',
      library: { type: config.output.libraryTarget, name: 'dashboard' },
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

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = 'http://localhost:3002/_next/';
    }

    return config;
  },
};
