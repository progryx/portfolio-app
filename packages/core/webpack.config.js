const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = () => {
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
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new ModuleFederationPlugin({
      name: 'core',
      library: { type: 'var', name: 'core' },
      filename: 'remoteEntry.js',
      remotes: {
        auth: 'auth',
      },
      // exposes: require('./exposes.json'),
      shared: {
        react: {
          eager: true,
        },
        'react-dom': {
          eager: true,
        },
        'react-router-dom': {
          eager: true,
        },
        redux: {
          eager: true,
        },
      },
    }),
  ];

  return {
    entry: './src/index',
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      port: 3000,
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'main.js',
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
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@reducers': path.resolve(__dirname, 'src/reducers'),
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
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [require('autoprefixer')()],
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
