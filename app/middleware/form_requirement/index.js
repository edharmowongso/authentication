'use strict'

const User = require('./user')
const Account = require('./account')
const { validationMiddleware } = require('./util')

module.exports = validationMiddleware({
  User,
  Account
})
