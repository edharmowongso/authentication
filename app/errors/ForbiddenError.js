'use strict'

const { version: appVersion } = require('../../package.json')

class ForbiddenError extends Error {
  constructor (errorType, { meta } = {}) {
    super(errorType)

    this.errorType = errorType
    this.meta = meta
    this.version = appVersion
  }
}

module.exports = ForbiddenError
