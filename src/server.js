'use strict'

const app = require('./app')
const keys = require('./config/keys')
const chalk = require('chalk')

async function main () {
  await app.listen(keys.PORT)
  console.log(chalk.cyan('Server on port', keys.PORT))
}
main()
