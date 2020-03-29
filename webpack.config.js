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
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCSS.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCSS({
      filename: 'style.css'
    })
  ],
  devServer: {
    overlay: true
  }
}
