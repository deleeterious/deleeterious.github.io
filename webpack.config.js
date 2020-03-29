const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSS = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [{
      test: /\.(scss|sass)/,
      use: [{
          loader: MiniCSS.loader
        },
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCSS({
      filename: 'style.css'
    })
  ],
  devServer: {
    port: 1337,
  }
}
