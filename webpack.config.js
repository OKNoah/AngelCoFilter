const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  target: 'web',
  entry: {
    main: './src/index.js',
    global: './src/global.js'
  },
  output: {
      path: path.resolve(__dirname, "AngelCoFilter.safariextension"),
      filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|AngelCoFilter\.safariextension)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html' }
    ])
  ]
}
