'use strict'

const { version: appVersion } = require('../../package.json')

class UnauthorizedError extends Error {
  constructor (message, { meta } = {}) {
    super(message)

    this.meta = meta
    this.version = appVersion
  }
}

module.exports = UnauthorizedError
