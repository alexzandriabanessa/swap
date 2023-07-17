const fs = require('fs')
const cracoEnvPlugin = require('craco-plugin-env')
module.exports = {
  style: {
    postcssOptions: {
  plugins: [require("autoprefixer")],
    },
  },
