const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    // take the existing directory name that we're in and output into a folder called "dist".
    path: path.join(__dirname, "/dist"),
    // our overall react app will be bundled into a JS file called "index.bundle.js".
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3000, // specific port we want the server to run on
    watchContentBase: true, // watch our app for every file changes
  },
  module: {
    // different rules are set to handle different type of files
    rules: [
      {
        test: /\.(js|jsx)$/, // identify any JS/JSX files in our src folder
        exclude: /node_modules/, // ignore the node_modules folder
        use: {
          // once any JS/JSX files are matched, load them with the babel loader
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/, // identify any SCSS/SASS files in our src folder
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // helps load our CSS files
          "sass-loader", // converts our SCSS/SASS files into CSS files which is useable by the browser
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
