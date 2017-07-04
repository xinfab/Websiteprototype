var path = require('path');

module.exports = {
  entry: './machine-list.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'machine-list.jsx.bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.resolve(__dirname),
        loader : 'babel-loader'
      }
    ]
  }
};
