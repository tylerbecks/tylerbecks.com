const Shell = require('child_process')

const onPostBuild = () => {
  Shell.execSync('cp assets/* public/')
  Shell.execSync('cp assets/favicon/* public/')
}
module.exports = { onPostBuild }
