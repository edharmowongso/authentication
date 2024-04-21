const AppConfig = require('../app_config')

module.exports = require('knex')({
  client: 'pg',
  connection: {
    host: AppConfig.database.host,
    user: AppConfig.database.user,
    password: AppConfig.database.password,
    database: AppConfig.database.database,
    port: AppConfig.database.port || 3306,
    timezone: AppConfig.database.timezone
  },
  pool: {
    min: 1,
    max: 5,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false
  },
  acquireConnectionTimeout: 20000,
  log: {
    warn (message) {
      console.log('KNEX::WARN::', message)
    },
    error (message) {
      console.log('KNEX::ERROR::', message)
    },
    deprecate (message) {
      console.log('KNEX::DEPRECATE::', message)
    },
    debug (message) {
      console.log('KNEX::DEBUG::', message)
    }
  }
})
