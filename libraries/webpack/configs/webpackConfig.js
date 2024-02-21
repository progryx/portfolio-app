const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const path = require('path');

const links = require('../links');

/**
 * Configuration description
 *
 * @param {{
 *  mode?: "development" | "production" | "none";
 *    moduleFederation?: {
 *      name?: string;
 *      remotes?: object;
 *      exposes?: object;
 *      shared?: object;
 *    };
 *  alias: object;
 *  rules: object[];
 * }} payload
 */
function webpackConfig(payload) {
  const { mode, moduleFederation, alias, rules = [] } = payload;
  const isProduction = mode === 'production';

  const plugins = [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      isProduction: isProduction,
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new ModuleFederationPlugin({
      ...moduleFederation,
      library: { type: 'var', name: moduleFederation.name },
      filename: 'remoteEntry.js',
      shared: {
        react: {
          eager: true,
          singleton: true,
          version: '17.0.2',
        },
        'react-dom': {
          eager: true,
        },
        'react-router-dom': {
          eager: true,
        },
        '@material-ui/core': {
          eager: true,
        },
        '@material-ui/icons': {
          eager: true,
        },
        ...moduleFederation.shared,
      },
    }),
  ];

  return {
    entry: './src/index',
    mode,
    devtool: isProduction ? 'source-map' : false,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: links[moduleFederation.name].port,
      historyApiFallback: true,
      proxy: {
        '/files': {
          target: 'https://gnikitin.ru',
          secure: true,
          changeOrigin: true,
        },
      },
    },
    output: {
      publicPath: isProduction ? links[moduleFederation.name].prodUrl : links[moduleFederation.name].devUrl,
      path: path.join(__dirname, '/dist'),
      filename: 'main.js',
      libraryTarget: 'umd',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, '../../../node_modules')],
      alias,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)?$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
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
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(jpeg|jpg|png)$/i,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/i,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
        ...rules,
      ],
    },
    plugins: plugins,
  };
}

module.exports = {
  webpackConfig,
};
