'use strict'

const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  USER_DB: process.env.USER_DB,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
  SECRET_TOKEN:process.env.SECRET_TOKEN
}
