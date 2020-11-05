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
      links,
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new ModuleFederationPlugin({
      name: 'dashboard',
      library: { type: 'var', name: 'dashboard' },
      filename: 'remoteEntry.js',
      remotes: {
        core: 'core',
      },
      exposes: require('./exports.json'),
      shared: {
        react: {
          eager: true,
          singleton: true,
          version: '17.0.1',
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
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      port: links.dashboard.port,
    },
    output: {
      publicPath: isProduction ? links.dashboard.prodUrl : links.dashboard.devUrl,
      path: path.join(__dirname, '/dist'),
      filename: 'main.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
      alias: {
        '@src': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
        '@reducers': path.resolve(__dirname, './src/reducers'),
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
          test: /\.(docx|doc|rtf|txt)$/i,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
        { test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000'] },
        { test: /\.(pdf)$/, use: ['file-loader'] },
      ],
    },
    plugins: plugins,
  };
};
