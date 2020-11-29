const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].[hash:8].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '..', './src/index.html') }),
    new Dotenv({ path: path.resolve(__dirname, '..', './.env.development') })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    port: 3000,
    hot: true
  },
  devtool: 'eval-source-map'
};
