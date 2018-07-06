const Shell = require('child_process')

const onPostBuild = () => {
  Shell.execSync('cp -r assets/* public/')
  Shell.execSync('cp -r assets/favicon/* public/')
}
module.exports = { onPostBuild }
