const path = require('path');

const libraryName = 'bundle';
const outputFile = libraryName + '.js';
const entryFile = process.env.NODE_ENV === 'dev' ? "./src/main.ts" : "./src/index.ts";

module.exports = {
  entry: entryFile,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: "source-map",

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: '/assets/',
    watchContentBase: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
};

