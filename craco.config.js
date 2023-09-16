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
  .execSync('git rev-parse HEAD', { cwd: __dirname })
 .toString().trim() : 'DEV',
          BUILD_DATE: fs.existsSync('.git') ? require('child_process')
  .execSync('git show -s --format=%ci', { cwd: __dirname })
 .toString().trim() : new Date().toLocaleDateString(),
        }
}
    }
  ],
  webpack: {
 configure: {
      externals: ['express'],
 ignoreWarnings: [/Failed to parse source map/],
      resolve: {
 fallback: {
