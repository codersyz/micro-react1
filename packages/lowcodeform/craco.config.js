const path = require("path")
const addPath = dir => path.join(__dirname, dir);
const packageName = require('./package.json').name;

module.exports = {
  // webpack: {
  //   configure: {
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
    globalObject: 'window',
  }
  //   },
  // },
}