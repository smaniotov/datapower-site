const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")

module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    port: 8000,
    stats: 'minimal',
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  module: {
      rules: [
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  }
};