module.exports = function (api) {
  api.cache(false);
  const presets = [['@babel/preset-typescript'], ['@babel/preset-react'], ['@babel/preset-env']];
  const plugins = [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-modules-commonjs'],
    ['@babel/plugin-transform-arrow-functions'],
    ['@babel/plugin-transform-object-assign'],
    ['@babel/transform-runtime', { useESModules: true, regenerator: true }],
  ];
  return {
    presets,
    plugins,
    ignore: [/node_modules/],
  };
};
