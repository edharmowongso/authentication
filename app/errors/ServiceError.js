'use strict'

const { version: appVersion } = require('../../package.json')

class ServiceError extends Error {
  constructor (errorType, { errorData, errorArgs, meta } = {}) {
    super(errorType)

    this.errorType = errorType
    this.errorData = errorData
    this.errorArgs = errorArgs
    this.meta = meta
    this.version = appVersion
  }
}

module.exports = ServiceError
