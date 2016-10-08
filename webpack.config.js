const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/idea-test.js"
    // test: "mocha!./test/specs/feature-test.js"
  },

  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      {test: /\.svg$/, loader: 'svg-url-loader'}
    ]
  }
};
