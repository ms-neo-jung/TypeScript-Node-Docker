const path = require("path");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  target: "node",
  module: {
    rules: [
      // { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { enforce: "pre", test: /\.ts$/, loader: "tslint-loader" },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};

module.exports = config;
/*
const path = require("path");
const webpack = require("webpack");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    // app: "./build/index.js",
    app: "./src/index.ts",
  },
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  //   new webpack.IgnorePlugin(/vertx/),
  //   new CopyWebpackPlugin([
  //     { from: './src/config.js' }
  //   ])
  // ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  // externals: [nodeExternals()],
  module: {
    rules: [
      // { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { enforce: "pre", test: /\.ts$/, loader: "tslint-loader" },
    ],

    exprContextCritical: false,
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  // module: {
  // },
};

*/
