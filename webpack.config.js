var path = require('path');

module.exports = {
  entry: './bundler.js',

  output: {
    filename: './dist/bundle.js'
  },

  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.css$/   , loader: "style!css?root=." }
    ]
  }
}
