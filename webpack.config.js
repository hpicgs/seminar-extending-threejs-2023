const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./source/code/tools.ts",
  output: {
    path: __dirname + "/build",
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};