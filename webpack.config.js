const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
  const mode = (argv && argv.mode) || 'production';

  return {
    entry: './src/index.jsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: mode === 'development' ? 'main.js' : 'main.[contenthash].js',
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      watchContentBase: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName:
                    mode === 'development'
                      ? '[path][name]__[local]'
                      : '[hash:base64:5',
                },
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['node_modules'],
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin({
        filename:
          mode === 'development' ? 'styles.css' : 'styles.[contenthash].css',
      }),
      new StyleLintPlugin({
        files: ['src/**/*.scss', 'src/**/*.css'],
      }),
      new EsLintPlugin({
        context: 'src',
        cache: true,
        extensions: ['js', 'jsx'],
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
  };
};
