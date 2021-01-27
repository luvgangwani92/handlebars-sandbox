const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');
const { version } = require('./package.json');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: `afterpay-${version}.js`,
    path: path.resolve(__dirname, 'dev'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/views/index.html',
      minify: false,
    }),
  ],
});
