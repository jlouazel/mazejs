const webpack = require('webpack');

module.exports = {
  context: `${__dirname}/lib`,
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'maze.js',

  },
  module: {
    rules: [{
      test: /.js$/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};
