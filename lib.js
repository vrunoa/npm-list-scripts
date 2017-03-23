const finder = require('find-root')
const path = require('path')
const logger = require('semafor')()
const chalk = require('chalk')

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
  const lengthOfLongestScript = (Object.keys(scripts).sort((a, b) => b.length - a.length)[0]).length

  logger.log(chalk.green('Available scripts'))

  for (let i in scripts) {
    let padding = ''

    for (let x = 0; x <= (lengthOfLongestScript - i.length); x++) {
      padding += ' '
    }

    logger.log(` ${chalk.gray('└─')} ${chalk.blue(i)}${padding}${chalk.gray(':')} ${scripts[i]}`)
  }
  logger.log('\n')
}

module.exports.getScripts = getScripts
module.exports.default = list
