#!/usr/bin/env node
const finder = require('find-root')
const root = finder(process.cwd())
const path = require('path')
const logger = require('semafor')()

function getScripts (root) {
  try {
    const dotJSON = require(path.join(root, 'package.json'))
    return dotJSON['scripts']
  } catch (e) {
    logger.fail(e)
    process.exit(1)
  }
}

function list (root) {
  let scripts = getScripts(root)
  logger.log('Available scripts')
  for (let i in scripts) {
    logger.log(`\t|_ ${i} : ${scripts[i]}`)
  }
  logger.log('\n')
}

list(root)
