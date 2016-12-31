const finder = require('find-root')
const path = require('path')
const logger = require('semafor')()

function getScripts (cwd) {
  try {
    const root = finder(cwd)
    const dotJSON = require(path.join(root, 'package.json'))
    return dotJSON['scripts']
  } catch (e) {
    logger.fail(e)
    process.exit(1)
  }
}

function list (cwd) {
  let scripts = getScripts(cwd)
  logger.log('Available scripts')
  for (let i in scripts) {
    logger.log(` └─ ${i} : ${scripts[i]}`)
  }
  logger.log('\n')
}

module.exports.getScripts = getScripts
module.exports.default = list
