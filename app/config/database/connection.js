'use strict'

const pgql = require('./index')

class Singleton {
  constructor () {
    if (!Singleton.instance) {
      Singleton.instance = pgql
    }
  }

  getInstance () {
    return Singleton.instance
  }
}

module.exports = Singleton
