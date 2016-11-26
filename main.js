#!/usr/bin/env node
const finder = require('find-root')
const root = finder(process.cwd())
const path = require('path')
const logger = require('semafor')()

function list (root) {
  try {
    const dotJSON = require(path.join(root, 'package.json'))
    logger.log('Available scripts')
    for (let i in dotJSON['scripts']) {
      logger.log(`\t|_ ${i} : ${dotJSON['scripts'][i]}`)
    }
    logger.log('\n')
  } catch (e) {
    logger.fail(e)
  }
}

list(root)
