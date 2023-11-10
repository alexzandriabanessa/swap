const fs = require('fs')
const cracoEnvPlugin = require('craco-plugin-env')
module.exports = {
  style: {
    postcssOptions: {
  plugins: [require("autoprefixer")],
    },
  },
  plugins: [
    {
   plugin: cracoEnvPlugin,
      options: {
  variables: {
          BUILD_VERSION: fs.existsSync('.git') ? require('child_process')
