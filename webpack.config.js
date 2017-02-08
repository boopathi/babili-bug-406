const babili = require("babili-webpack-plugin");
const clonedeep = require("lodash.clonedeep");

const config = {
  entry: "./index.js",
  target: "node",
  output: {
    path: "./",
    filename: "app.js"
  }
};

const config2 = clonedeep(config);
config2.output.filename = "app.min.js";
config2.plugins = [new babili()];

module.exports = [config, config2];
