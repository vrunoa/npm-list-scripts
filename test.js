#!/usr/bin/env node
const lister = require('./lib').getScripts
const logger = require('semafor')()
const shouldHave = ['test', 'prestart', 'prepublish', 'start']
const path = require('path')

// Test root dir
let scripts = lister(process.cwd())
let keys = Object.keys(scripts)
for (let i in shouldHave) {
  if (keys.indexOf(shouldHave[i]) === -1) {
    logger.fail(`Script not found  --> ${shouldHave[i]}`)
    process.exit(1)
  }
}

// Test from another dir
scripts = lister(path.join(process.cwd(), 'node_modules'))
keys = Object.keys(scripts)
for (let i in shouldHave) {
  if (keys.indexOf(shouldHave[i]) === -1) {
    logger.fail(`Script not found  --> ${shouldHave[i]}`)
    process.exit(1)
  }
}

logger.log(':partyparrot:')
