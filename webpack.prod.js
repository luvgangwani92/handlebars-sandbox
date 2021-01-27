const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');
const { version } = require('./package.json');
// removing unused dotenv and define plugin imports

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `afterpay-${version}.js`,
    path: path.resolve(__dirname, 'build/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'src/views/index.html',
      minify: true,
    }),
  ],
});
