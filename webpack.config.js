const path = require('path');
const HandlebarsPlugin = require('handlebars-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(__dirname, 'src', 'templates', '*.hbs'),
      output: path.join(__dirname, 'src', 'views', '[name].html'),
      data: path.join(__dirname, 'data.json'),
      partials: [
        path.join(__dirname, 'src', 'partials', '*.hbs'),
      ],
    }),
  ],
};
