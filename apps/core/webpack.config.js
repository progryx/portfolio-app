const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

const links = require('../../settings/links');

module.exports = (_env = {}, { mode }) => {
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
      name: 'core',
      library: { type: 'var', name: 'core' },
      filename: 'remoteEntry.js',
      remotes: {
        timer: 'timer',
        dashboard: 'dashboard',
        users: 'users',
      },
      exposes: require('./exports.json'),
      shared: {
        react: {
          eager: true,
          singleton: true,
          version: '16.11.0',
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
      },
    }),
  ];

  return {
    entry: './src/index',
    mode,
    devtool: isProduction ? 'source-map' : false,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: links.core.port,
      historyApiFallback: true,
    },
    output: {
      publicPath: isProduction ? links.core.prodUrl : links.core.devUrl,
      path: path.join(__dirname, '/dist'),
      filename: 'main.js',
      libraryTarget: 'umd',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
        '@reducers': path.resolve(__dirname, 'src/reducers'),
        '@locales': path.resolve(__dirname, 'src/locales'),
      },
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
          test: /\.svg$/,
          use: ['@svgr/webpack'],
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
          test: /\.(docx|doc|rtf|txt|woff|woff2|eot|ttf)$/i,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
        { test: /\.(pdf)$/, use: ['file-loader'] },
      ],
    },
    plugins: plugins,
  };
};
