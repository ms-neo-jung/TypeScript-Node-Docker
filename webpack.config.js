// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsConfigPath = path.resolve(__dirname, "./tsconfig.json");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [["@babel/preset-env", { targets: { node: "8" } }]],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
  ],
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  stats: {
    colors: true,
  },
};
